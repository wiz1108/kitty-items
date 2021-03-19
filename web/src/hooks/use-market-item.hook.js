import {atomFamily, selectorFamily, useRecoilState} from "recoil"
import {sansPrefix} from "@onflow/fcl"
import {IDLE, PROCESSING} from "../global/constants"
import {useCurrentUser} from "../hooks/use-current-user.hook"
import {useAccountItems} from "../hooks/use-account-items.hook"
import {useKibblesBalance} from "../hooks/use-kibbles-balance.hook"
import {fetchMarketItem} from "../flow/fetch-market-item.script"
import {buyMarketItem} from "../flow/buy-market-item.tx"
import {cancelMarketListing} from "../flow/cancel-market-listing.tx"

class SaleOffer {
  constructor(accountItem) {
    if(!accountItem)
  }
}

function expand(key) {
  return key.split("|")
}

function comp(address, id) {
  return [address, id].join("|")
}

export const $state = atomFamily({
  key: "market-item::state",
  default: selectorFamily({
    key: "market-item::default",
    get: key => async ({ get }) => {
      const accountItem = await fetchMarketItem(...expand(key))
      if (!accountItem) {
        // set the status for the key to PROCESSING
        // Because the db and contract are out of sync. 
      }
      return new SaleOffer(accountItem)
    },
  }),
})

export const $status = atomFamily({
  key: "market-item::status",
  default: IDLE,
})

export function useMarketItem(address, id) {
  const [cu] = useCurrentUser()
  const ownerItems = useAccountItems(address)
  const cuItems = useAccountItems(cu.addr)
  const kibble = useKibblesBalance(cu.addr)
  const key = comp(address, id)
  const [item, setItem] = useRecoilState($state(key))
  const [status, setStatus] = useRecoilState($status(key))

  const owned = sansPrefix(cu.addr) === sansPrefix(address)

  return {
    ...item,
    status,
    owned,
    async buy() {
      await buyMarketItem(
        {itemId: id, ownerAddress: address},
        {
          onStart() {
            setStatus(PROCESSING)
          },
          async onSuccess() {
            if (address !== cu.addr) {
              ownerItems.refresh()
            }
            cuItems.refresh()
            kibble.refresh()
          },
          async onComplete() {
            setStatus(IDLE)
          },
        }
      )
    },
    async cancelListing() {
      await cancelMarketListing(
        {itemId: id},
        {
          onStart() {
            setStatus(PROCESSING)
          },
          async onSuccess() {
            cuItems.refresh()
            kibble.refresh()
          },
          async onComplete() {
            setStatus(IDLE)
          },
        }
      )
    },
    async refresh() {
      setStatus(PROCESSING)
      await fetchMarketItem(...expand(key)).then(setItem)
      setStatus(IDLE)
    },
  }
}
