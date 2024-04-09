"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seiDevnet = exports.devChain1 = exports.SeiIcon = void 0;
// Add your custom chains here
exports.SeiIcon = "https://ipfs.io/ipfs/QmUvNaLwzNf1bHjqTMW1aBjRgd5FrsTDqjSnyypLwxv8x5";
/** Local development chain support */
exports.devChain1 = {
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
exports.seiDevnet = {
    id: 713715,
    name: "SEI Devnet",
    network: "SEI Devnet",
    iconUrl: exports.SeiIcon,
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
