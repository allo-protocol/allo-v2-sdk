"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportedChains = void 0;
const chains_1 = require("viem/chains");
/** Local development chain support */
const devChain1 = {
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
exports.supportedChains = [
    chains_1.mainnet,
    chains_1.optimism,
    chains_1.arbitrum,
    chains_1.polygon,
    chains_1.scroll,
    chains_1.base,
    chains_1.avalanche,
    chains_1.fantom,
    chains_1.sepolia,
    chains_1.optimismSepolia,
    chains_1.arbitrumSepolia,
    chains_1.polygonMumbai,
    chains_1.avalancheFuji,
    chains_1.fantomTestnet,
    devChain1,
];
