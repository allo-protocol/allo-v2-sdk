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
        name: "EASGatingExtension_InvalidEASAddress",
        type: "error"
    },
    {
        inputs: [],
        name: "EASGatingExtension_InvalidAttestationSchema",
        type: "error"
    },
    {
        inputs: [],
        name: "EASGatingExtension_InvalidAttestationAttester",
        type: "error"
    },
    // State Variable Getter
    {
        inputs: [],
        name: "eas",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
