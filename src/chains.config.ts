import { Chain, defineChain } from "viem";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  celo,
  celoAlfajores,
  gnosis,
  sepolia,
  localhost as devChain1,
  lukso,
  luksoTestnet,
  mainnet,
  metis,
  optimism,
  polygon,
  polygonMumbai,
  optimismSepolia,
  avalanche,
  fantom,
  scroll,
  seiDevnet,
  avalancheFuji,
  fantomTestnet,
  zkSync,
  zkSyncSepoliaTestnet,
  hedera
} from "viem/chains";

export const sei = /*#__PURE__*/ defineChain({
  id: 1329,
  name: "Sei",
  nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm-rpc.sei-apis.com/"],
      webSocket: ["wss://evm-ws.sei-apis.com/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Seitrace",
      url: "https://seitrace.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
    },
  },
});

export const supportedChains: Chain[] = [
  arbitrum,
  arbitrumSepolia,
  base,
  celo,
  celoAlfajores,
  sepolia,
  gnosis,
  devChain1,
  lukso,
  luksoTestnet,
  mainnet,
  metis,
  optimism,
  polygon,
  polygonMumbai,
  optimismSepolia,
  avalanche,
  fantom,
  scroll,
  seiDevnet,
  sei,
  avalancheFuji,
  fantomTestnet,
  zkSync,
  zkSyncSepoliaTestnet,
  hedera,
];
