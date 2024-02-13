"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytecode = exports.abi = void 0;
exports.abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_allo",
                type: "address",
            },
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "contract ISignatureTransfer",
                name: "_permit2",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "ALLOCATION_ACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "ALLOCATION_NOT_ACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "ALLOCATION_NOT_ENDED",
        type: "error",
    },
    {
        inputs: [],
        name: "ALREADY_INITIALIZED",
        type: "error",
    },
    {
        inputs: [],
        name: "AMOUNT_MISMATCH",
        type: "error",
    },
    {
        inputs: [],
        name: "ANCHOR_ERROR",
        type: "error",
    },
    {
        inputs: [],
        name: "ARRAY_MISMATCH",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID_ADDRESS",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID_FEE",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID_METADATA",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID_REGISTRATION",
        type: "error",
    },
    {
        inputs: [],
        name: "IS_APPROVED_STRATEGY",
        type: "error",
    },
    {
        inputs: [],
        name: "MISMATCH",
        type: "error",
    },
    {
        inputs: [],
        name: "NONCE_NOT_AVAILABLE",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_APPROVED_STRATEGY",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_ENOUGH_FUNDS",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_IMPLEMENTED",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_INITIALIZED",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_PENDING_OWNER",
        type: "error",
    },
    {
        inputs: [],
        name: "POOL_ACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "POOL_INACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "RECIPIENT_ALREADY_ACCEPTED",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
        ],
        name: "RECIPIENT_ERROR",
        type: "error",
    },
    {
        inputs: [],
        name: "RECIPIENT_NOT_ACCEPTED",
        type: "error",
    },
    {
        inputs: [],
        name: "REGISTRATION_ACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "REGISTRATION_NOT_ACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "UNAUTHORIZED",
        type: "error",
    },
    {
        inputs: [],
        name: "ZERO_ADDRESS",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Allocated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "BatchPayoutSuccessful",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "recipientAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Distributed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "merkleRoot",
                type: "bytes32",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "protocol",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "pointer",
                        type: "string",
                    },
                ],
                indexed: false,
                internalType: "struct Metadata",
                name: "metadata",
                type: "tuple",
            },
        ],
        name: "DistributionUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "grantee",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
        ],
        name: "FundsDistributed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "poolId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "active",
                type: "bool",
            },
        ],
        name: "PoolActive",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "rowIndex",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fullRow",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RecipientStatusUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Registered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "registrationStartTime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "registrationEndTime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "allocationStartTime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "allocationEndTime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "TimestampsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "status",
                type: "uint8",
            },
        ],
        name: "UpdatedRegistration",
        type: "event",
    },
    {
        inputs: [],
        name: "NATIVE",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PERMIT2",
        outputs: [
            {
                internalType: "contract ISignatureTransfer",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "_sender",
                type: "address",
            },
        ],
        name: "allocate",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "allocationEndTime",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "allocationStartTime",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowedTokens",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_recipientIds",
                type: "address[]",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "_sender",
                type: "address",
            },
        ],
        name: "distribute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "distributionMetadata",
        outputs: [
            {
                internalType: "uint256",
                name: "protocol",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "pointer",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "distributionStarted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllo",
        outputs: [
            {
                internalType: "contract IAllo",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_recipientIds",
                type: "address[]",
            },
            {
                internalType: "bytes[]",
                name: "_data",
                type: "bytes[]",
            },
        ],
        name: "getPayouts",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "recipientAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct IStrategy.PayoutSummary[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPoolAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPoolId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_recipientId",
                type: "address",
            },
        ],
        name: "getRecipient",
        outputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "useRegistryAnchor",
                        type: "bool",
                    },
                    {
                        internalType: "address",
                        name: "recipientAddress",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "protocol",
                                type: "uint256",
                            },
                            {
                                internalType: "string",
                                name: "pointer",
                                type: "string",
                            },
                        ],
                        internalType: "struct Metadata",
                        name: "metadata",
                        type: "tuple",
                    },
                ],
                internalType: "struct DonationVotingMerkleDistributionBaseStrategy.Recipient",
                name: "recipient",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_recipientId",
                type: "address",
            },
        ],
        name: "getRecipientStatus",
        outputs: [
            {
                internalType: "enum IStrategy.Status",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getStrategyId",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256",
            },
        ],
        name: "hasBeenDistributed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "increasePoolAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_poolId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isDistributionSet",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "isPoolActive",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_allocator",
                type: "address",
            },
        ],
        name: "isValidAllocator",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "merkleRoot",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "metadataRequired",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "multicall",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "recipientToStatusIndexes",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "recipientsCounter",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "_sender",
                type: "address",
            },
        ],
        name: "registerRecipient",
        outputs: [
            {
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "registrationEndTime",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "registrationStartTime",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "statusRow",
                        type: "uint256",
                    },
                ],
                internalType: "struct DonationVotingMerkleDistributionBaseStrategy.ApplicationStatus[]",
                name: "statuses",
                type: "tuple[]",
            },
            {
                internalType: "uint256",
                name: "refRecipientsCounter",
                type: "uint256",
            },
        ],
        name: "reviewRecipients",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "statusesBitMap",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalPayoutAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_merkleRoot",
                type: "bytes32",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "protocol",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "pointer",
                        type: "string",
                    },
                ],
                internalType: "struct Metadata",
                name: "_distributionMetadata",
                type: "tuple",
            },
        ],
        name: "updateDistribution",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "_registrationStartTime",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_registrationEndTime",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_allocationStartTime",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_allocationEndTime",
                type: "uint64",
            },
        ],
        name: "updatePoolTimestamps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "useRegistryAnchor",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
exports.bytecode = "0x60e06040523480156200001157600080fd5b5060405162003b1c38038062003b1c833981016040819052620000349162000122565b6001600160a01b038316608052604051839083908390839083906200005e90829060200162000204565b60408051601f19818403018152919052805160209091012060a05250506001600160a01b038116620000a35760405163538ba4f960e01b815260040160405180910390fd5b6001600160a01b031660c05250620002399350505050565b6001600160a01b0381168114620000d157600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000107578181015183820152602001620000ed565b50506000910152565b80516200011d81620000bb565b919050565b6000806000606084860312156200013857600080fd5b83516200014581620000bb565b60208501519093506001600160401b03808211156200016357600080fd5b818601915086601f8301126200017857600080fd5b8151818111156200018d576200018d620000d4565b604051601f8201601f19908116603f01168101908382118183101715620001b857620001b8620000d4565b81604052828152896020848701011115620001d257600080fd5b620001e5836020830160208801620000ea565b8096505050505050620001fb6040850162000110565b90509250925092565b602081526000825180602084015262000225816040850160208701620000ea565b601f01601f19169190910160400192915050565b60805160a05160c0516138906200028c600039600081816104d40152611cb10152600061038701526000818161029b01528181610e2c01528181610f95015281816117800152611dba01526138906000f3fe60806040526004361061021e5760003560e01c80636afdd85011610123578063df868ed3116100ab578063edd146cc1161006f578063edd146cc146106ca578063ef2920fc146106ea578063f31db3d1146106fd578063f5b0dfb71461071d578063f6f258911461073d57600080fd5b8063df868ed31461061b578063dff7d2c714610630578063e744092e14610657578063e7efcfc214610687578063eb11af931461069d57600080fd5b8063a0cf0aea116100f2578063a0cf0aea14610553578063ac9650d81461057b578063b2b878d0146105a8578063cb0e85a6146105d5578063d2e17f59146105f457600080fd5b80636afdd850146104c257806373af3453146104f657806395355b3b146105165780639af5c09d1461052c57600080fd5b806342fda9c7116101a657806351cff8d91161017557806351cff8d914610418578063570897391461043857806359a3977b146104525780635f1b55f31461047557806362812a391461049557600080fd5b806342fda9c7146103785780634533d678146103ab5780634ab4ba42146103e35780634d31d087146103f857600080fd5b806321755088116101ed57806321755088146102f35780632bbe0cae146103235780632d52eff2146103365780632eb4a7ab1461034d57806338fff2d01461036357600080fd5b806301fc1c641461022a5780630a6f0ee91461026a57806315cc481e1461028c5780632143e92f146102d357600080fd5b3661022557005b600080fd5b34801561023657600080fd5b50610257610245366004612534565b600c6020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561027657600080fd5b5061028a610285366004612765565b61076a565b005b34801561029857600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b039091168152602001610261565b3480156102df57600080fd5b5061028a6102ee3660046127f1565b61078a565b3480156102ff57600080fd5b506005546103139062010000900460ff1681565b6040519015158152602001610261565b6102bb61033136600461284d565b610887565b34801561034257600080fd5b50600a541515610313565b34801561035957600080fd5b50610257600a5481565b34801561036f57600080fd5b50600154610257565b34801561038457600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610257565b3480156103b757600080fd5b506006546103cb906001600160401b031681565b6040516001600160401b039091168152602001610261565b3480156103ef57600080fd5b50600254610257565b34801561040457600080fd5b50610313610413366004612534565b6108ac565b34801561042457600080fd5b5061028a610433366004612534565b6108b5565b34801561044457600080fd5b506005546103139060ff1681565b34801561045e57600080fd5b5061046761092f565b6040516102619291906128ee565b34801561048157600080fd5b50610313610490366004612907565b6109c6565b3480156104a157600080fd5b506104b56104b0366004612534565b6109d1565b6040516102619190612920565b3480156104ce57600080fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b34801561050257600080fd5b5061028a61051136600461296f565b6109e2565b34801561052257600080fd5b5061025760085481565b34801561053857600080fd5b506005546103cb90630100000090046001600160401b031681565b34801561055f57600080fd5b506102bb73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561058757600080fd5b5061059b610596366004612a08565b610a84565b6040516102619190612a7c565b3480156105b457600080fd5b506105c86105c3366004612ade565b610b78565b6040516102619190612bb2565b3480156105e157600080fd5b5060055461031390610100900460ff1681565b34801561060057600080fd5b506005546103cb90600160981b90046001600160401b031681565b34801561062757600080fd5b50610313610c76565b34801561063c57600080fd5b506005546103cb90600160581b90046001600160401b031681565b34801561066357600080fd5b50610313610672366004612534565b600e6020526000908152604090205460ff1681565b34801561069357600080fd5b5061025760075481565b3480156106a957600080fd5b506106bd6106b8366004612534565b610c85565b6040516102619190612c28565b3480156106d657600080fd5b5061028a6106e5366004612c50565b610c90565b61028a6106f836600461284d565b610ceb565b34801561070957600080fd5b5061028a610718366004612c96565b610d13565b34801561072957600080fd5b5061028a610738366004612907565b610df7565b34801561074957600080fd5b50610257610758366004612907565b600b6020526000908152604090205481565b610772610e21565b61077a610e6c565b610785838383610e8f565b505050565b3361079481610f6b565b6107a08585858561101d565b6005805472ffffffffffffffffffffffffffffffff000000191663010000006001600160401b03888116820267ffffffffffffffff60581b191692909217600160581b88841681029190911767ffffffffffffffff60981b1916600160981b888516810291909117948590556006805467ffffffffffffffff191688861690811790915560408051948704861685529286048516602085015294049092169181019190915260608101919091523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a15050505050565b6000610891610e21565b610899610e6c565b6108a383836110b7565b90505b92915050565b600060016108a6565b336108bf81610f6b565b6006546108d8906001600160401b031662278d00612d66565b6001600160401b0316421161090057604051637fcce2a960e01b815260040160405180910390fd5b600061090c8330611409565b905060008061091b8284612d86565b9050610928853383611452565b5050505050565b600380546004805491929161094390612d99565b80601f016020809104026020016040519081016040528092919081815260200182805461096f90612d99565b80156109bc5780601f10610991576101008083540402835291602001916109bc565b820191906000526020600020905b81548152906001019060200180831161099f57829003601f168201915b5050505050905082565b60006108a68261148c565b6109d96124d9565b6108a6826114cd565b6109ea6115c6565b336109f481610f6b565b60055462010000900460ff1615610a1e57604051637fcce2a960e01b815260040160405180910390fd5b600a839055815160039081556020830151839190600490610a3f9082612e19565b509050507fdc7180ca4affc84269428ed20ef950e745126f11691b010c4a7d49458421008f600a546003604051610a77929190612ed8565b60405180910390a1505050565b6060816001600160401b03811115610a9e57610a9e612558565b604051908082528060200260200182016040528015610ad157816020015b6060815260200190600190039081610abc5790505b50905060005b82811015610b7157610b4130858584818110610af557610af5612f7d565b9050602002810190610b079190612f93565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506115f192505050565b828281518110610b5357610b53612f7d565b60200260200101819052508080610b6990612fe0565b915050610ad7565b5092915050565b81518151606091908114610b9f57604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b03811115610bb957610bb9612558565b604051908082528060200260200182016040528015610bfe57816020015b6040805180820190915260008082526020820152815260200190600190039081610bd75790505b50905060005b82811015610c6d57610c48868281518110610c2157610c21612f7d565b6020026020010151868381518110610c3b57610c3b612f7d565b6020026020010151611616565b828281518110610c5a57610c5a612f7d565b6020908102919091010152600101610c04565b50949350505050565b6000610c806116d1565b905090565b60006108a68261171a565b610c98610e21565b600081806020019051810190610cae9190613088565b9050610cba8382611739565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610a779291906128ee565b610cf3610e21565b610cfb610e6c565b610d0582826119ec565b610d0f8282611bcb565b5050565b610d1b611d26565b33610d2581610f6b565b6008548214610d4757604051637fcce2a960e01b815260040160405180910390fd5b60005b8351811015610df1576000848281518110610d6757610d67612f7d565b60200260200101516000015190506000858381518110610d8957610d89612f7d565b6020908102919091018101518101516000848152600b83526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a25050600101610d4a565b50505050565b610dff610e21565b8060026000828254610e11919061315a565b90915550610e1e90508181565b50565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e6a5760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003610e6a57604051630f68fe6360e21b815260040160405180910390fd5b80610e9981610f6b565b600a54600003610ebc57604051637fcce2a960e01b815260040160405180910390fd5b60055462010000900460ff16610ede576005805462ff00001916620100001790555b600083806020019051810190610ef4919061322f565b805190915060005b81811015610f2e57610f26838281518110610f1957610f19612f7d565b6020026020010151611d51565b600101610efc565b506040516001600160a01b038516907f7ec3272052827f7b50d9e84f98172cbb80c112df1e377c5b97ea77f1812db8d990600090a2505050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610fdc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100091906132df565b610e1e5760405163075fd2b160e01b815260040160405180910390fd5b836001600160401b03164211806110455750826001600160401b0316846001600160401b0316115b806110615750816001600160401b0316846001600160401b0316115b8061107d5750806001600160401b0316826001600160401b0316115b806110995750806001600160401b0316836001600160401b0316115b15610df157604051637fcce2a960e01b815260040160405180910390fd5b60006110c1611edf565b60008060006110e3604051806040016040528060008152602001606081525090565b60055460ff161561113557868060200190518101906111029190613390565b919650935090506111138587611f2f565b6111305760405163075fd2b160e01b815260040160405180910390fd5b6111a0565b868060200190518101906111499190613390565b6001600160a01b0383161515965090945090925090508361116a578561116c565b815b945083801561118257506111808587611f2f565b155b156111a05760405163075fd2b160e01b815260040160405180910390fd5b600554610100900460ff1680156111c3575060208101515115806111c357508051155b156111e15760405163c19e07c560e01b815260040160405180910390fd5b6001600160a01b0383166112185760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b038086166000908152600f6020908152604090912080549286166101000274ffffffffffffffffffffffffffffffffffffffff001990931692909217825582516001830190815590830151839190600284019061127c9082612e19565b505060055460ff1690506112905784611293565b60015b815460ff19169015151781556001600160a01b0386166000908152600c6020526040812054900361136f576008546001600160a01b0387166000908152600c60205260409020556112e98660015b60ff16612027565b6000886008546040516020016113009291906133f3565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a60405161134c929190613415565b60405180910390a26008805490600061136483612fe0565b9190505550506113fe565b600061137a8761205a565b905060011960ff821601611398576113938760016112e1565b6113af565b60021960ff8216016113af576113af8760046112e1565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a6113e58b61205a565b6040516113f493929190613440565b60405180910390a2505b505050505092915050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161144157506001600160a01b038116316108a6565b61144b838361209b565b90506108a6565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016114815761078582826120d0565b6107858383836120ec565b60008061149b6101008461348b565b905060006114ab6101008561349f565b6000928352600d602052604090922054600190921b9182169091149392505050565b6114d56124d9565b6001600160a01b038083166000908152600f60209081526040918290208251606081018452815460ff81161515825261010090049094168483015282518084018452600182018054825260028301805493958701949293919284019161153a90612d99565b80601f016020809104026020016040519081016040528092919081815260200182805461156690612d99565b80156115b35780601f10611588576101008083540402835291602001916115b3565b820191906000526020600020905b81548152906001019060200180831161159657829003601f168201915b5050509190925250505090525092915050565b6006546001600160401b03164211610e6a57604051634543ced160e11b815260040160405180910390fd5b60606108a383836040518060600160405280602781526020016138346027913961213b565b604080518082019091526000808252602082015260008280602001905181019061164091906134b3565b805160208201516040830151606084015193945091929091906000611664846114cd565b60200151905061167785858386866121b3565b156116a7576040518060400160405280826001600160a01b031681526020018481525096505050505050506108a6565b604080518082019091526001600160a01b0390911681526000602082015298975050505050505050565b6005546000904263010000009091046001600160401b0316118015906117095750600554600160581b90046001600160401b03164211155b156117145750600190565b50600090565b60006117258261205a565b60ff1660068111156108a6576108a6612c12565b6117428261225c565b80516005805460208085015161ffff1990921693151561ff001916939093176101009115159190910217905560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa1580156117cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f391906134e7565b6009805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03929092169190911790556040810151600580546060840151608085015172ffffffffffffffffffffffffffffffff0000001990921663010000006001600160401b03958616810267ffffffffffffffff60581b191691909117600160581b92861683021767ffffffffffffffff60981b1916600160981b9386168402179384905560a08601516006805467ffffffffffffffff1916918716918217905560016008556118d295918504821694928304821693909204169061101d565b60055460065460408051630100000084046001600160401b039081168252600160581b850481166020830152600160981b909404841681830152929091166060830152336080830152517fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39181900360a00190a160c081015151600081900361198b5760008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c805460ff191660011790555b60005b81811015610df1576001600e60008560c0015184815181106119b2576119b2612f7d565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905560010161198e565b6119f46122ab565b60008083806020019051810190611a0b9190613504565b80515160208101519051929450909250906002611a278561205a565b60ff166006811115611a3b57611a3b612c12565b6006811115611a4c57611a4c612c12565b14611a755760405163f4a513b960e01b81526001600160a01b038516600482015260240161120f565b6001600160a01b0381166000908152600e602052604090205460ff16158015611ac9575060008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5460ff16155b15611ae757604051637fcce2a960e01b815260040160405180910390fd5b600034118015611b1457506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14155b80611b4657506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015611b465750813414155b15611b6457604051637fcce2a960e01b815260040160405180910390fd5b836001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b838388604051611bbb939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a2505050505050565b60008083806020019051810190611be29190613504565b80515180516020909101519294509092509073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03831601611c6a5780341015611c3a576040516374c5672b60e01b815260040160405180910390fd5b6001600160a01b038085166000908152600f6020526040902054611c659161010090910416826120d0565b611d1e565b82516040805180820182526001600160a01b038781166000908152600f60209081529084902054610100900482168352808301869052870151925163187945bd60e11b81527f0000000000000000000000000000000000000000000000000000000000000000909116936330f28b7a93611ceb9391928b91906004016135f1565b600060405180830381600087803b158015611d0557600080fd5b505af1158015611d19573d6000803e3d6000fd5b505050505b505050505050565b6006546001600160401b0316421115610e6a5760405162b828c960e81b815260040160405180910390fd5b805160208083015160408085015160608601516001600160a01b038085166000908152600f909652929094205492939092909161010090910416611d9885858386866121b3565b15611ebb5760015460405163068bcd8d60e01b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d91611df19160040190815260200190565b600060405180830381865afa158015611e0e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611e369190810190613674565b9050611e41866122f3565b8360026000828254611e539190612d86565b90915550506040810151611e68908386611452565b60408082015181518681526001600160a01b038581166020830152808916939216917fa6b66f665010d2f7435f110111aaa34b56564074f66081bef606d996fc8caa6f910160405180910390a350611d1e565b60405163f4a513b960e01b81526001600160a01b038516600482015260240161120f565b6005544263010000009091046001600160401b03161180611f115750600554600160581b90046001600160401b031642115b15610e6a57604051635b04f6ad60e11b815260040160405180910390fd5b60095460405163dd93da4360e01b81526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa158015611f7d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611fa59190810190613727565b6009548151604051635e8a791560e01b815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa158015611ffb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061201f91906132df565b949350505050565b600080600061203585612331565b6000928352600b602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b0381166000908152600c6020526040812054810361208157506000919050565b60008061208d84612331565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af1610d0f5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716612131576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b03168560405161215891906137ed565b600060405180830381855af49150503d8060008114612193576040519150601f19603f3d011682016040523d82523d6000602084013e612198565b606091505b50915091506121a9868383876123a4565b9695505050505050565b60006121be8661148c565b156121cb57506000612253565b60408051602081018890526001600160a01b038088169282019290925290851660608201526080810184905260009060a00160408051601f198184030181528282528051602091820120908301520160405160208183030381529060405280519060200120905061223f83600a548361241d565b61224d576000915050612253565b60019150505b95945050505050565b612264610e21565b600154156122855760405163439a74c960e01b815260040160405180910390fd5b806000036122a657604051637fcce2a960e01b815260040160405180910390fd5b600155565b60055442600160981b9091046001600160401b031611806122d657506006546001600160401b031642115b15610e6a5760405162b828c960e81b815260040160405180910390fd5b60006123016101008361348b565b905060006123116101008461349f565b6000928352600d60205260409092208054600190931b9092179091555050565b6001600160a01b0381166000908152600c602052604081205481908190819061235c90600190612d86565b9050600061236b60408361348b565b9050600061237a60408461349f565b612385906004613809565b6000838152600b60205260409020549298909750919550909350505050565b6060831561241357825160000361240c576001600160a01b0385163b61240c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161120f565b508161201f565b61201f8383612433565b60008261242a858461245d565b14949350505050565b8151156124435781518083602001fd5b8060405162461bcd60e51b815260040161120f9190613820565b600081815b84518110156124a25761248e8286838151811061248157612481612f7d565b60200260200101516124aa565b91508061249a81612fe0565b915050612462565b509392505050565b60008183106124c65760008281526020849052604090206108a3565b60008381526020839052604090206108a3565b604051806060016040528060001515815260200160006001600160a01b0316815260200161251a604051806040016040528060008152602001606081525090565b905290565b6001600160a01b0381168114610e1e57600080fd5b60006020828403121561254657600080fd5b81356125518161251f565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171561259057612590612558565b60405290565b60405160e081016001600160401b038111828210171561259057612590612558565b604051608081016001600160401b038111828210171561259057612590612558565b604051606081016001600160401b038111828210171561259057612590612558565b60405160c081016001600160401b038111828210171561259057612590612558565b604051601f8201601f191681016001600160401b038111828210171561264657612646612558565b604052919050565b60006001600160401b0382111561266757612667612558565b5060051b60200190565b600082601f83011261268257600080fd5b813560206126976126928361264e565b61261e565b82815260059290921b840181019181810190868411156126b657600080fd5b8286015b848110156126da5780356126cd8161251f565b83529183019183016126ba565b509695505050505050565b60006001600160401b038211156126fe576126fe612558565b50601f01601f191660200190565b600061271a612692846126e5565b905082815283838301111561272e57600080fd5b828260208301376000602084830101529392505050565b600082601f83011261275657600080fd5b6108a38383356020850161270c565b60008060006060848603121561277a57600080fd5b83356001600160401b038082111561279157600080fd5b61279d87838801612671565b945060208601359150808211156127b357600080fd5b506127c086828701612745565b92505060408401356127d18161251f565b809150509250925092565b6001600160401b0381168114610e1e57600080fd5b6000806000806080858703121561280757600080fd5b8435612812816127dc565b93506020850135612822816127dc565b92506040850135612832816127dc565b91506060850135612842816127dc565b939692955090935050565b6000806040838503121561286057600080fd5b82356001600160401b0381111561287657600080fd5b61288285828601612745565b92505060208301356128938161251f565b809150509250929050565b60005b838110156128b95781810151838201526020016128a1565b50506000910152565b600081518084526128da81602086016020860161289e565b601f01601f19169290920160200192915050565b82815260406020820152600061201f60408301846128c2565b60006020828403121561291957600080fd5b5035919050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a084015261201f60c08401826128c2565b6000806040838503121561298257600080fd5b8235915060208301356001600160401b03808211156129a057600080fd5b90840190604082870312156129b457600080fd5b6129bc61256e565b823581526020830135828111156129d257600080fd5b80840193505086601f8401126129e757600080fd5b6129f68784356020860161270c565b60208201528093505050509250929050565b60008060208385031215612a1b57600080fd5b82356001600160401b0380821115612a3257600080fd5b818501915085601f830112612a4657600080fd5b813581811115612a5557600080fd5b8660208260051b8501011115612a6a57600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015612ad157603f19888603018452612abf8583516128c2565b94509285019290850190600101612aa3565b5092979650505050505050565b60008060408385031215612af157600080fd5b82356001600160401b0380821115612b0857600080fd5b612b1486838701612671565b9350602091508185013581811115612b2b57600080fd5b8501601f81018713612b3c57600080fd5b8035612b4a6126928261264e565b81815260059190911b82018401908481019089831115612b6957600080fd5b8584015b83811015612ba157803586811115612b855760008081fd5b612b938c8983890101612745565b845250918601918601612b6d565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015612c0557612bf584835180516001600160a01b03168252602090810151910152565b9284019290850190600101612bcf565b5091979650505050505050565b634e487b7160e01b600052602160045260246000fd5b6020810160078310612c4a57634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215612c6357600080fd5b8235915060208301356001600160401b03811115612c8057600080fd5b612c8c85828601612745565b9150509250929050565b6000806040808486031215612caa57600080fd5b83356001600160401b03811115612cc057600080fd5b8401601f81018613612cd157600080fd5b80356020612ce16126928361264e565b82815260069290921b83018101918181019089841115612d0057600080fd5b938201935b83851015612d405785858b031215612d1d5760008081fd5b612d2561256e565b85358152838601358482015282529385019390820190612d05565b9997909101359750505050505050565b634e487b7160e01b600052601160045260246000fd5b6001600160401b03818116838216019080821115610b7157610b71612d50565b818103818111156108a6576108a6612d50565b600181811c90821680612dad57607f821691505b602082108103612dcd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561078557600081815260208120601f850160051c81016020861015612dfa5750805b601f850160051c820191505b81811015611d1e57828155600101612e06565b81516001600160401b03811115612e3257612e32612558565b612e4681612e408454612d99565b84612dd3565b602080601f831160018114612e7b5760008415612e635750858301515b600019600386901b1c1916600185901b178555611d1e565b600085815260208120601f198616915b82811015612eaa57888601518255948401946001909101908401612e8b565b5085821015612ec85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b828152600060206040818401528354604084015260018085016040606086015260008154612f0581612d99565b80608089015260a085831660008114612f255760018114612f3f57612f6d565b60ff1984168a83015282151560051b8a0182019450612f6d565b856000528760002060005b84811015612f655781548c8201850152908801908901612f4a565b8b0183019550505b50929a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112612faa57600080fd5b8301803591506001600160401b03821115612fc457600080fd5b602001915036819003821315612fd957600080fd5b9250929050565b600060018201612ff257612ff2612d50565b5060010190565b8051801515811461300957600080fd5b919050565b8051613009816127dc565b80516130098161251f565b600082601f83011261303557600080fd5b815160206130456126928361264e565b82815260059290921b8401810191818101908684111561306457600080fd5b8286015b848110156126da57805161307b8161251f565b8352918301918301613068565b60006020828403121561309a57600080fd5b81516001600160401b03808211156130b157600080fd5b9083019060e082860312156130c557600080fd5b6130cd612596565b6130d683612ff9565b81526130e460208401612ff9565b60208201526130f56040840161300e565b60408201526131066060840161300e565b60608201526131176080840161300e565b608082015261312860a0840161300e565b60a082015260c08301518281111561313f57600080fd5b61314b87828601613024565b60c08301525095945050505050565b808201808211156108a6576108a6612d50565b60006080828403121561317f57600080fd5b6131876125b8565b90508151815260208083015161319c8161251f565b828201526040838101519083015260608301516001600160401b038111156131c357600080fd5b8301601f810185136131d457600080fd5b80516131e26126928261264e565b81815260059190911b8201830190838101908783111561320157600080fd5b928401925b8284101561321f57835182529284019290840190613206565b6060860152509295945050505050565b6000602080838503121561324257600080fd5b82516001600160401b038082111561325957600080fd5b818501915085601f83011261326d57600080fd5b815161327b6126928261264e565b81815260059190911b8301840190848101908883111561329a57600080fd5b8585015b838110156132d2578051858111156132b65760008081fd5b6132c48b89838a010161316d565b84525091860191860161329e565b5098975050505050505050565b6000602082840312156132f157600080fd5b6108a382612ff9565b600082601f83011261330b57600080fd5b8151613319612692826126e5565b81815284602083860101111561332e57600080fd5b61201f82602083016020870161289e565b60006040828403121561335157600080fd5b61335961256e565b90508151815260208201516001600160401b0381111561337857600080fd5b613384848285016132fa565b60208301525092915050565b6000806000606084860312156133a557600080fd5b83516133b08161251f565b60208501519093506133c18161251f565b60408501519092506001600160401b038111156133dd57600080fd5b6133e98682870161333f565b9150509250925092565b60408152600061340660408301856128c2565b90508260208301529392505050565b60408152600061342860408301856128c2565b90506001600160a01b03831660208301529392505050565b60608152600061345360608301866128c2565b90506001600160a01b038416602083015260ff83166040830152949350505050565b634e487b7160e01b600052601260045260246000fd5b60008261349a5761349a613475565b500490565b6000826134ae576134ae613475565b500690565b6000602082840312156134c557600080fd5b81516001600160401b038111156134db57600080fd5b61201f8482850161316d565b6000602082840312156134f957600080fd5b81516125518161251f565b6000806040838503121561351757600080fd5b82516135228161251f565b60208401519092506001600160401b038082111561353f57600080fd5b9084019081860360a081121561355457600080fd5b61355c61256e565b608082121561356a57600080fd5b6135726125da565b604083121561358057600080fd5b61358861256e565b925084516135958161251f565b808452506020850151602084015282815260408501516020820152606085015160408201528082525060808401519150828211156135d257600080fd5b6135de888386016132fa565b6020820152809450505050509250929050565b600061010061361483885180516001600160a01b03168252602090810151910152565b6020870151604084015260408701516060840152613648608084018780516001600160a01b03168252602090810151910152565b6001600160a01b03851660c08401528060e0840152613669818401856128c2565b979650505050505050565b60006020828403121561368657600080fd5b81516001600160401b038082111561369d57600080fd5b9083019060c082860312156136b157600080fd5b6136b96125fc565b8251815260208301516136cb8161251f565b602082015260408301516136de8161251f565b60408201526060830151828111156136f557600080fd5b6137018782860161333f565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b60006020828403121561373957600080fd5b81516001600160401b038082111561375057600080fd5b9083019060c0828603121561376457600080fd5b61376c6125fc565b825181526020830151602082015260408301518281111561378c57600080fd5b613798878286016132fa565b6040830152506060830151828111156137b057600080fd5b6137bc8782860161333f565b6060830152506137ce60808401613019565b60808201526137df60a08401613019565b60a082015295945050505050565b600082516137ff81846020870161289e565b9190910192915050565b80820281158282048414176108a6576108a6612d50565b6020815260006108a360208301846128c256fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b0c637cdea7ba81db4f4f5f8ddfea93dfe797b51abd00aad69c1149c232544ac64736f6c63430008130033";
