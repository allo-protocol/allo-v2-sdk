"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportedChains = void 0;
const chains_1 = require("viem/chains");
const customChains_1 = require("./Client/customChains");
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
    customChains_1.devChain1,
    customChains_1.seiDevnet,
];
