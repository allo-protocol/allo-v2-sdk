import { Chain } from "viem";

// custom chains
export const pgn = {
  id: 424,
  name: "Public Goods Network",
  network: "pgn",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.publicgoods.network"],
    },
    public: {
      http: ["https://rpc.publicgoods.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.publicgoods.network",
    },
  },
  contracts: {
    multicall3: {
      address: "0x42c27071b47AE8E6669891487dC6394112748331",
      blockCreated: 1623104,
    },
  },
  testnet: false,
}  as const satisfies Chain;

export const pgnSepolia = {
  id: 58008,
  name: "PGN Sepolia Testnet",
  network: "pgn-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.publicgoods.network"],
    },
    public: {
      http: ["https://sepolia.publicgoods.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.sepolia.publicgoods.network",
    },
  },
  contracts: {
    multicall3: {
      address: "0xA541E4e79Df59B94B1Db85e997c94E43C685f856",
      blockCreated: 3312423,
    },
  },
  testnet: true,
}  as const satisfies Chain;
