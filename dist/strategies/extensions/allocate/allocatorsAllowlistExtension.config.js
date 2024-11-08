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
    // ======================
    // ======== Events =======
    // ======================
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "allocators",
                type: "address[]"
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "AllocatorsAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "allocators",
                type: "address[]"
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "AllocatorsRemoved",
        type: "event"
    },
    // ======================
    // ======== Functions =======
    // ======================
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_allocators",
                type: "address[]"
            }
        ],
        name: "addAllocators",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_allocator",
                type: "address"
            }
        ],
        name: "allowedAllocators",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_allocators",
                type: "address[]"
            }
        ],
        name: "removeAllocators",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
