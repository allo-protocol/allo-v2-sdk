"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const viem_1 = require("viem");
/**
 *
 * Returns a PublicClient instance that can be used to interact with the Allo v2 contracts.
 *
 * @remarks
 * This is a wrapper around the viem PublicClient class that sets the correct chain ID and transport.
 *
 * @param chain - The chain ID to connect to (this is a Chain type from viem)
 * @param rpc - The url of the RPC endpoint
 * @returns - A PublicClient instance
 *
 * @beta
 */
const create = (chain, rpc) => {
    const client = (0, viem_1.createPublicClient)({
        chain: chain,
        transport: (0, viem_1.http)(rpc !== null && rpc !== void 0 ? rpc : ""),
    });
    return client;
};
exports.create = create;
