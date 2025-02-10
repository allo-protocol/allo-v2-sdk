"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportedChains = exports.sei = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
exports.sei = (0, viem_1.defineChain)({
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
exports.supportedChains = [
    chains_1.arbitrum,
    chains_1.arbitrumSepolia,
    chains_1.base,
    chains_1.celo,
    chains_1.celoAlfajores,
    chains_1.sepolia,
    chains_1.gnosis,
    chains_1.localhost,
    chains_1.lukso,
    chains_1.luksoTestnet,
    chains_1.mainnet,
    chains_1.metis,
    chains_1.optimism,
    chains_1.polygon,
    chains_1.polygonMumbai,
    chains_1.optimismSepolia,
    chains_1.avalanche,
    chains_1.fantom,
    chains_1.scroll,
    chains_1.seiDevnet,
    exports.sei,
    chains_1.avalancheFuji,
    chains_1.fantomTestnet,
    chains_1.zkSync,
    chains_1.zkSyncSepoliaTestnet,
    chains_1.hedera,
];
