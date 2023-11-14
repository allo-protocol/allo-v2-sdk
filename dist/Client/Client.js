"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const viem_1 = require("viem");
const create = (chain, rpc) => {
    const client = (0, viem_1.createPublicClient)({
        chain: chain,
        transport: (0, viem_1.http)(rpc !== null && rpc !== void 0 ? rpc : ""),
    });
    return client;
};
exports.create = create;
