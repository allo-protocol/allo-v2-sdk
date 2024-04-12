import { Chain } from "viem";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  sepolia,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
  optimismSepolia,
  avalanche,
  fantom,
  scroll,
  avalancheFuji,
  fantomTestnet,
  zkSync,
  zkSyncSepoliaTestnet,
} from "viem/chains";
import { devChain1, seiDevnet } from "./Client/customChains";

/** Reference for supported chains: https://github.com/gitcoinco/grants-stack/issues/3107 */
export const supportedChains: Chain[] = [
  mainnet,
  optimism,
  arbitrum,
  polygon,
  scroll,
  base,
  avalanche,
  fantom,
  sepolia,
  optimismSepolia,
  arbitrumSepolia,
  polygonMumbai,
  avalancheFuji,
  fantomTestnet,
  devChain1,
  seiDevnet,
  zkSync,
  zkSyncSepoliaTestnet,
];
