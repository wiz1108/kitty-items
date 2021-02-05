![kitty-items-overview](https://user-images.githubusercontent.com/901466/106943245-0eac2b00-66da-11eb-960e-a1db5b1d028d.png)<!-- .element width="100%" -->

# Welcome to the Kitty Items Demo Application

### This app was created to help you learn how to build on <img height="46px" src="https://assets.website-files.com/5f6294c0c7a8cdd643b1c820/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.svg" />

- It demonstrates how to interact with Flow using the Flow client library (**@onflow/fcl**) from different areas of your application.
- It's a **complete smart contract powered NFT marketplace** that showcases how to use Flow's resource-oriented smart contract programming language: [Cadence](https://docs.onflow.org/cadence).


## Live demo

### Check out the [live demo of Kitty Items](https://kitty-items.on.fleek.co/#/), deployed on <a href="https://docs.ipfs.io/concepts/case-study-fleek/"><img height="28px" src="https://docs.ipfs.io/assets/img/logo-fleek.5aed66a3.png" /></a> and the <img height="28px" src="https://assets.website-files.com/5f6294c0c7a8cdd643b1c820/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.svg" /> Testnet.
---

## Legend 
Above is a basic diagram of the parts of this project contained in each folder, and how each part interacts with the others.

1) ### The Flow Blockchain
    - The hero of our story. Flow is a next-generation blockchain platform that is designed to be fast and easy to use. If you're new to Flow, consider reading more about it. Read the [Flow Primer](https://www.onflow.org/primer), or go to the <a href=""><img src="https://user-images.githubusercontent.com/901466/107084916-8ea2c580-67ac-11eb-8436-7120af2ea7d1.png" height="28px" /></a> [Flow developer documentation](https://docs.onflow.org/) to get some more context before diving into this application.

2) ### Web App (Static website) | [kitty-items-web](https://github.com/onflow/kitty-items/tree/mackenzie/updates-readme/kitty-items-web)
    - A true Dapp, client-only web app. This is a complete web application built with React that demonstrates how to build a static website that can be deployed to an environment like IPFS and connects directly to the Flow blockchain using `@onflow/fcl`. No servers required. `@onflow/fcl` handles authentication and authorization of [Flow accounts](https://docs.onflow.org/concepts/accounts-and-keys/), [signing transactions](https://docs.onflow.org/concepts/transaction-signing/), and querying data using using Cadence.

3) ### Look Ma, a Web Server! | [kitty-items-js](https://github.com/onflow/kitty-items/tree/mackenzie/updates-readme/kitty-items-js)
    - We love decentralization, but servers are still very useful, and this one's no exception. The code in this project demonstrates how to connect to Flow using [Flow JavaScript SDK](https://github.com/onflow/flow-js-sdk) from a NodeJS backend. It's also chalk-full of handy patterns you'll proabably want to use for more complex and feature-rich blockchain applications, like storing and querying events using a SQL database (Postgres). The API demonstrates how to send transactions to the Flow Blockchain, specifically for minting [Kibbles](https://github.com/onflow/kitty-items/blob/mackenzie/updates-readme/kitty-items-cadence/cadence/kibble/contracts/Kibble.cdc) (fungible tokens) and [Kitty Items](https://github.com/onflow/kitty-items/blob/mackenzie/updates-readme/kitty-items-cadence/cadence/kittyItems/contracts/KittyItems.cdc) (non-fungible tokens).

4) ### Cadence Code | [kitty-items-cadence](https://github.com/onflow/kitty-items/tree/mackenzie/updates-readme/kitty-items-cadence)
    - [Cadence](https://docs.onflow.org/cadence) smart contracts, scripts & transactions for your viewing pleasure. This folder contains all of the blockchain logic for the marketplace application. Here you will find examples of [fungible](https://github.com/onflow/flow-ft) and [non-fungible token (NFT)](https://github.com/onflow/flow-nft) smart contract implementations, as well as the scripts and transactions that interact with them. It also contains examples of how to *test* your Cadence code (tests written in Golang).

5) ### Development Helpers | [kitty-items-deployer](https://github.com/onflow/kitty-items/tree/mackenzie/updates-readme/kitty-items-deployer)
    - Useful utilities for automating development related tasks like bootstrapping accounts and deploying contracts. Look through this project for an idea of what it's like to bootstrap your Flow accounts and Cadence smart contracts onto the [Flow Emulator](https://github.com/onflow/flow-emulator) or Flow testnet.

6) An `@onflow/fcl` compatible wallet service that helps `@onflw/fcl` perform authentication and authorization of [Flow accounts](https://docs.onflow.org/concepts/accounts-and-keys/).


## What are Kitty Items?

Items are hats for your cats, but under the hood they're non-fungible tokens stored on the Flow blockchain.

Items can be purchased from the marketplace with fungible tokens.
In the future you'll be able to add them to [Ethereum CryptoKitties](https://www.cryptokitties.co/) with ownership validated by an oracle.


## Get Started

VSCode users are in luck! Before cloning this project make sure to Download the Cadence VSCode Extension to install the Cadence Language Server, Cadence syntax and the Flow emulator on VSCode.


## Questions?

- Chat with the team on the [Flow Discord server](https://discord.gg/xUdZxs82Rz)
- Ask questions on the [Flow community forum](https://forum.onflow.org/t/kitty-items-marketplace-demo-dapp/759/5)

---
🚀  Happy Hacking!  

