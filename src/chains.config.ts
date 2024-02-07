import { Chain } from "viem";
import {
  arbitrum,
  arbitrumGoerli,
  arbitrumSepolia,
  base,
  celoAlfajores,
  celo,
  goerli,
  sepolia,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
  optimismSepolia,
} from "viem/chains";

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

export const supportedChains: Chain[] = [
  arbitrum,
  arbitrumGoerli,
  arbitrumSepolia,
  base,
  celoAlfajores,
  celo,
  goerli,
  sepolia,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
  optimismSepolia,
  devChain1,
];
