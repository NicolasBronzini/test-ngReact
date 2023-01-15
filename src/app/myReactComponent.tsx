import * as React from "react";


import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
  } from "@web3modal/ethereum";
  import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { arbitrum, mainnet, polygon } from "wagmi/chains";

const MyReactComponent = () => {
   
    const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "5d6fb6b0e9b7749408b0d5f6ec8023b6" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
    return  <Web3Modal
    projectId="5d6fb6b0e9b7749408b0d5f6ec8023b6"
    ethereumClient={ethereumClient}
  />;
}


export default MyReactComponent;