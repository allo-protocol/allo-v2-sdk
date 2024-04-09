import { Chain } from "viem";

// Add your custom chains here
export const SeiIcon =
  "https://ipfs.io/ipfs/QmUvNaLwzNf1bHjqTMW1aBjRgd5FrsTDqjSnyypLwxv8x5";

/** Local development chain support */
export const devChain1: Chain = {
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

export const seiDevnet = {
  id: 713715,
  name: "SEI Devnet",
  network: "SEI Devnet",
  iconUrl: SeiIcon,
  nativeCurrency: {
    name: "SEI",
    symbol: "SEI",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://evm-rpc-arctic-1.sei-apis.com"],
    },
    public: {
      http: ["https://evm-rpc-arctic-1.sei-apis.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "SEI Explorer",
      url: "https://seistream.app/",
    },
  },
};
