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
} from "viem/chains";

/** Local development chain support */
const devChain1: Chain = {
  id: 1337,
  name: "Development 1",
  network: "dev1",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545/"] },
    public: { http: ["http://127.0.0.1:8545/"] },
  },
  blockExplorers: {
    default: {
      name: "dev1",
      url: "",
    },
  },
};

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
];
