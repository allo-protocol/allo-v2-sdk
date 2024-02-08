"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportedChains = void 0;
const chains_1 = require("viem/chains");
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
exports.supportedChains = [
    chains_1.arbitrum,
    chains_1.arbitrumGoerli,
    chains_1.arbitrumSepolia,
    chains_1.base,
    chains_1.celoAlfajores,
    chains_1.celo,
    chains_1.goerli,
    chains_1.sepolia,
    chains_1.mainnet,
    chains_1.optimism,
    chains_1.polygon,
    chains_1.polygonMumbai,
    chains_1.optimismSepolia,
    devChain1,
];
