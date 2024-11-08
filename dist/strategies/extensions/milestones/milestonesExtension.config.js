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
        name: "MilestonesExtension_AmountTooLow",
        type: "error"
    },
    {
        inputs: [],
        name: "MilestonesExtension_ExceedingMaxBid",
        type: "error"
    },
    {
        inputs: [],
        name: "MilestonesExtension_InvalidRecipient",
        type: "error"
    },
    {
        inputs: [],
        name: "MilestonesExtension_InvalidSubmitter",
        type: "error"
    },
    {
        inputs: [],
        name: "MilestonesExtension_InvalidMilestone",
        type: "error"
    },
    {
        inputs: [],
        name: "MilestonesExtension_InvalidMilestoneStatus",
        type: "error"
    },
    {
        inputs: [],
        name: "MilestonesExtension_MilestonesAlreadySet",
        type: "error"
    },
    {
        inputs: [],
        name: "MilestonesExtension_MilestoneNotPending",
        type: "error"
    },
    {
        inputs: [],
        name: "MilestonesExtension_MilestonePending",
        type: "error"
    },
    // Events
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "maxBid",
                type: "uint256"
            }
        ],
        name: "MaxBidIncreased",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "bidderId",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newBid",
                type: "uint256"
            }
        ],
        name: "SetBid",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "milestoneId",
                type: "uint256"
            }
        ],
        name: "MilestoneSubmitted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "milestoneId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "status",
                type: "uint8"
            }
        ],
        name: "MilestoneStatusChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "milestonesLength",
                type: "uint256"
            }
        ],
        name: "MilestonesSet",
        type: "event"
    },
    // State Variable Getters
    {
        inputs: [],
        name: "maxBid",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "upcomingMilestone",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "bids",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    },
    // External Functions
    {
        inputs: [{ internalType: "uint256", name: "_milestoneId", type: "uint256" }],
        name: "getMilestone",
        outputs: [
            {
                components: [
                    { internalType: "uint256", name: "amountPercentage", type: "uint256" },
                    {
                        components: [
                            { internalType: "string", name: "protocol", type: "string" },
                            { internalType: "string", name: "pointer", type: "string" }
                        ],
                        internalType: "struct Metadata",
                        name: "metadata",
                        type: "tuple"
                    },
                    { internalType: "uint8", name: "status", type: "uint8" }
                ],
                internalType: "struct IMilestonesExtension.Milestone",
                name: "",
                type: "tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [{ internalType: "uint256", name: "_milestoneId", type: "uint256" }],
        name: "getMilestoneStatus",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [{ internalType: "uint256", name: "_maxBid", type: "uint256" }],
        name: "increaseMaxBid",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    { internalType: "uint256", name: "amountPercentage", type: "uint256" },
                    {
                        components: [
                            { internalType: "string", name: "protocol", type: "string" },
                            { internalType: "string", name: "pointer", type: "string" }
                        ],
                        internalType: "struct Metadata",
                        name: "metadata",
                        type: "tuple"
                    },
                    { internalType: "uint8", name: "status", type: "uint8" }
                ],
                internalType: "struct IMilestonesExtension.Milestone[]",
                name: "_milestones",
                type: "tuple[]"
            }
        ],
        name: "setMilestones",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            { internalType: "address", name: "_recipientId", type: "address" },
            {
                components: [
                    { internalType: "string", name: "protocol", type: "string" },
                    { internalType: "string", name: "pointer", type: "string" }
                ],
                internalType: "struct Metadata",
                name: "_metadata",
                type: "tuple"
            }
        ],
        name: "submitUpcomingMilestone",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [{ internalType: "uint8", name: "_milestoneStatus", type: "uint8" }],
        name: "reviewMilestone",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
