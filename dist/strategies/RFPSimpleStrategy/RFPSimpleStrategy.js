"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RFPSimpleStrategy = void 0;
const viem_1 = require("viem");
const Allo_1 = require("../../Allo/Allo");
const chains_config_1 = require("../../chains.config");
const Client_1 = require("../../Client/Client");
class RFPSimpleStrategy {
    constructor({ chain, rpc, address, poolId }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.allo = new Allo_1.Allo({ chain, rpc });
        if (address) {
            this.contract = (0, viem_1.getContract)({
                address: address,
                abi: [],
                publicClient: this.client,
            });
            this.strategy = address;
        }
        this.poolId = poolId || BigInt(-1);
    }
}
exports.RFPSimpleStrategy = RFPSimpleStrategy;
