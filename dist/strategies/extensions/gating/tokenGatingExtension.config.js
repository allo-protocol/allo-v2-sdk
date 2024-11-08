"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abi = exports.getAddress = void 0;
const DEFAULT_ADDRESS = "0x0000000000000000000000000000000000000000";
const getAddress = (chain) => {
    switch (chain.id) {
        default:
            return DEFAULT_ADDRESS;
    }
};
exports.getAddress = getAddress;
exports.abi = [
    // Errors
    {
        inputs: [],
        name: "TokenGatingExtension_InvalidToken",
        type: "error"
    },
    {
        inputs: [],
        name: "TokenGatingExtension_InvalidActor",
        type: "error"
    },
    {
        inputs: [],
        name: "TokenGatingExtension_InsufficientBalance",
        type: "error"
    },
];
