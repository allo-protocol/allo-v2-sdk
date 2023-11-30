"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicClient = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
// todo: sort out the typing of chainId here...
const publicClient = (chainId) => (0, viem_1.createPublicClient)({
    chain: chainId,
    transport: (0, viem_1.http)(),
});
class PublicClient {
    constructor(chainId) {
        this.chainId = chainId;
        this.publicClient = publicClient(chains_1.goerli);
    }
}
exports.PublicClient = PublicClient;
