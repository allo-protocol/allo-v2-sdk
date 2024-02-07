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
                name: "token",
                type: "address",
            },
        ],
        name: "Claimed",
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
                internalType: "uint8",
                name: "version",
                type: "uint8",
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
                components: [
                    {
                        internalType: "address",
                        name: "recipientId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                ],
                internalType: "struct DonationVotingMerkleDistributionVaultStrategy.Claim[]",
                name: "_claims",
                type: "tuple[]",
            },
        ],
        name: "claim",
        outputs: [],
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
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "claims",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "totalClaimableAmount",
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
exports.bytecode = "0x60e060405260016008553480156200001657600080fd5b5060405162003fd138038062003fd1833981016040819052620000399162000127565b6001600160a01b038316608052604051839083908390839083906200006390829060200162000209565b60408051601f19818403018152919052805160209091012060a05250506001600160a01b038116620000a85760405163538ba4f960e01b815260040160405180910390fd5b6001600160a01b031660c052506200023e9350505050565b6001600160a01b0381168114620000d657600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200010c578181015183820152602001620000f2565b50506000910152565b80516200012281620000c0565b919050565b6000806000606084860312156200013d57600080fd5b83516200014a81620000c0565b60208501519093506001600160401b03808211156200016857600080fd5b818601915086601f8301126200017d57600080fd5b815181811115620001925762000192620000d9565b604051601f8201601f19908116603f01168101908382118183101715620001bd57620001bd620000d9565b81604052828152896020848701011115620001d757600080fd5b620001ea836020830160208801620000ef565b8096505050505050620002006040850162000115565b90509250925092565b60208152600082518060208401526200022a816040850160208701620000ef565b601f01601f19169190910160400192915050565b60805160a05160c051613d40620002916000396000818161055a0152612003015260006103e00152600081816102bc01528181611153015281816112bc01528181611b0001526121910152613d406000f3fe60806040526004361061023f5760003560e01c80636afdd8501161012e578063df868ed3116100ab578063edd146cc1161006f578063edd146cc14610770578063ef2920fc14610790578063f31db3d1146107a3578063f5b0dfb7146107c3578063f6f25891146107e357600080fd5b8063df868ed3146106c1578063dff7d2c7146106d6578063e744092e146106fd578063e7efcfc21461072d578063eb11af931461074357600080fd5b8063ac9650d8116100f2578063ac9650d814610601578063b2b878d01461062e578063cb0e85a61461065b578063d26839371461067a578063d2e17f591461069a57600080fd5b80636afdd8501461054857806373af34531461057c57806395355b3b1461059c5780639af5c09d146105b2578063a0cf0aea146105d957600080fd5b806342fda9c7116101bc5780635708973911610180578063570897391461049157806359a3977b146104ab5780635f1b55f3146104ce57806362812a39146104ee5780636923e09a1461051b57600080fd5b806342fda9c7146103d15780634533d678146104045780634ab4ba421461043c5780634d31d0871461045157806351cff8d91461047157600080fd5b80632bbe0cae116102035780632bbe0cae146103445780632d52eff2146103575780632eb4a7ab1461036e57806338fff2d0146103845780633f733c6b1461039957600080fd5b806301fc1c641461024b5780630a6f0ee91461028b57806315cc481e146102ad5780632143e92f146102f4578063217550881461031457600080fd5b3661024657005b600080fd5b34801561025757600080fd5b50610278610266366004612913565b600c6020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561029757600080fd5b506102ab6102a6366004612b44565b610810565b005b3480156102b957600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b039091168152602001610282565b34801561030057600080fd5b506102ab61030f366004612bd0565b610830565b34801561032057600080fd5b506005546103349062010000900460ff1681565b6040519015158152602001610282565b6102dc610352366004612c2c565b61092d565b34801561036357600080fd5b50600a541515610334565b34801561037a57600080fd5b50610278600a5481565b34801561039057600080fd5b50600154610278565b3480156103a557600080fd5b506102786103b4366004612c7d565b604360209081526000928352604080842090915290825290205481565b3480156103dd57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610278565b34801561041057600080fd5b50600654610424906001600160401b031681565b6040516001600160401b039091168152602001610282565b34801561044857600080fd5b50600254610278565b34801561045d57600080fd5b5061033461046c366004612913565b610952565b34801561047d57600080fd5b506102ab61048c366004612913565b61095b565b34801561049d57600080fd5b506005546103349060ff1681565b3480156104b757600080fd5b506104c06109f7565b604051610282929190612cfb565b3480156104da57600080fd5b506103346104e9366004612d14565b610a8e565b3480156104fa57600080fd5b5061050e610509366004612913565b610a99565b6040516102829190612d2d565b34801561052757600080fd5b50610278610536366004612913565b60446020526000908152604090205481565b34801561055457600080fd5b506102dc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561058857600080fd5b506102ab610597366004612d7c565b610aaa565b3480156105a857600080fd5b5061027860085481565b3480156105be57600080fd5b5060055461042490630100000090046001600160401b031681565b3480156105e557600080fd5b506102dc73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561060d57600080fd5b5061062161061c366004612e15565b610b4c565b6040516102829190612e89565b34801561063a57600080fd5b5061064e610649366004612eeb565b610c40565b6040516102829190612fbf565b34801561066757600080fd5b5060055461033490610100900460ff1681565b34801561068657600080fd5b506102ab61069536600461301f565b610d3e565b3480156106a657600080fd5b5060055461042490600160981b90046001600160401b031681565b3480156106cd57600080fd5b50610334610fa1565b3480156106e257600080fd5b5060055461042490600160581b90046001600160401b031681565b34801561070957600080fd5b50610334610718366004612913565b600e6020526000908152604090205460ff1681565b34801561073957600080fd5b5061027860075481565b34801561074f57600080fd5b5061076361075e366004612913565b610fb0565b6040516102829190613097565b34801561077c57600080fd5b506102ab61078b3660046130bf565b610fbb565b6102ab61079e366004612c2c565b611016565b3480156107af57600080fd5b506102ab6107be366004613105565b61103a565b3480156107cf57600080fd5b506102ab6107de366004612d14565b61111e565b3480156107ef57600080fd5b506102786107fe366004612d14565b600b6020526000908152604090205481565b610818611148565b610820611193565b61082b8383836111b6565b505050565b3361083a81611292565b61084685858585611344565b6005805472ffffffffffffffffffffffffffffffff000000191663010000006001600160401b03888116820267ffffffffffffffff60581b191692909217600160581b88841681029190911767ffffffffffffffff60981b1916600160981b888516810291909117948590556006805467ffffffffffffffff191688861690811790915560408051948704861685529286048516602085015294049092169181019190915260608101919091523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a15050505050565b6000610937611148565b61093f611193565b61094983836113de565b90505b92915050565b6000600161094c565b3361096581611292565b60065461097e906001600160401b031662278d006131d5565b6001600160401b031642116109a657604051637fcce2a960e01b815260040160405180910390fd5b60006109b28330611730565b905060006109d5846001600160a01b031660009081526044602052604090205490565b905060006109e382846131f5565b90506109f0853383611779565b5050505050565b6003805460048054919291610a0b90613208565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3790613208565b8015610a845780601f10610a5957610100808354040283529160200191610a84565b820191906000526020600020905b815481529060010190602001808311610a6757829003601f168201915b5050505050905082565b600061094c826117b3565b610aa16128b8565b61094c826117f4565b610ab26118ed565b33610abc81611292565b60055462010000900460ff1615610ae657604051637fcce2a960e01b815260040160405180910390fd5b600a839055815160039081556020830151839190600490610b079082613288565b509050507fdc7180ca4affc84269428ed20ef950e745126f11691b010c4a7d49458421008f600a546003604051610b3f929190613347565b60405180910390a1505050565b6060816001600160401b03811115610b6657610b66612937565b604051908082528060200260200182016040528015610b9957816020015b6060815260200190600190039081610b845790505b50905060005b82811015610c3957610c0930858584818110610bbd57610bbd6133ec565b9050602002810190610bcf9190613402565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061191892505050565b828281518110610c1b57610c1b6133ec565b60200260200101819052508080610c319061344f565b915050610b9f565b5092915050565b81518151606091908114610c6757604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b03811115610c8157610c81612937565b604051908082528060200260200182016040528015610cc657816020015b6040805180820190915260008082526020820152815260200190600190039081610c9f5790505b50905060005b82811015610d3557610d10868281518110610ce957610ce96133ec565b6020026020010151868381518110610d0357610d036133ec565b602002602001015161193d565b828281518110610d2257610d226133ec565b6020908102919091010152600101610ccc565b50949350505050565b610d466119f8565b610d4e6118ed565b8060005b81811015610f91576000848483818110610d6e57610d6e6133ec565b905060400201803603810190610d849190613468565b80516001600160a01b039081166000908152600f602090815260408083208151606081018352815460ff81161515825261010090049095168584015281518083018352600182018054825260028301805498995095979295938701949193909291840191610df190613208565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1d90613208565b8015610e6a5780601f10610e3f57610100808354040283529160200191610e6a565b820191906000526020600020905b815481529060010190602001808311610e4d57829003601f168201915b5050509190925250505090525082516001600160a01b03908116600090815260436020908152604080832082880151909416835292905290812054919250819003610ec857604051637fcce2a960e01b815260040160405180910390fd5b6020808401805185516001600160a01b03908116600090815260438552604080822094518316825293855283812081905590821681526044909352908220805491928492610f179084906131f5565b92505081905550610f2d81846020015184611779565b8351602084810151604080516001600160a01b03928316815292830186905284821683820152519216917f0ffa55c11cec5055a4f567b0ff6e1e0eef2af17baafddd35f31ab4ed1afb75469181900360600190a2505060019092019150610d529050565b5050610f9d6001601155565b5050565b6000610fab611a51565b905090565b600061094c82611a9a565b610fc3611148565b600081806020019051810190610fd99190613538565b9050610fe58382611ab9565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610b3f929190612cfb565b61101e611148565b611026611193565b6110308282611d67565b610f9d8282611f46565b6110426120fd565b3361104c81611292565b600854821461106e57604051637fcce2a960e01b815260040160405180910390fd5b60005b835181101561111857600084828151811061108e5761108e6133ec565b602002602001015160000151905060008583815181106110b0576110b06133ec565b6020908102919091018101518101516000848152600b83526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a25050600101611071565b50505050565b611126611148565b8060026000828254611138919061360a565b9091555061114590508181565b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146111915760405163075fd2b160e01b815260040160405180910390fd5b565b60015460000361119157604051630f68fe6360e21b815260040160405180910390fd5b806111c081611292565b600a546000036111e357604051637fcce2a960e01b815260040160405180910390fd5b60055462010000900460ff16611205576005805462ff00001916620100001790555b60008380602001905181019061121b91906136df565b805190915060005b818110156112555761124d838281518110611240576112406133ec565b6020026020010151612128565b600101611223565b506040516001600160a01b038516907f7ec3272052827f7b50d9e84f98172cbb80c112df1e377c5b97ea77f1812db8d990600090a2505050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015611303573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611327919061378f565b6111455760405163075fd2b160e01b815260040160405180910390fd5b836001600160401b031642118061136c5750826001600160401b0316846001600160401b0316115b806113885750816001600160401b0316846001600160401b0316115b806113a45750806001600160401b0316826001600160401b0316115b806113c05750806001600160401b0316836001600160401b0316115b1561111857604051637fcce2a960e01b815260040160405180910390fd5b60006113e86122be565b600080600061140a604051806040016040528060008152602001606081525090565b60055460ff161561145c57868060200190518101906114299190613840565b9196509350905061143a858761230e565b6114575760405163075fd2b160e01b815260040160405180910390fd5b6114c7565b868060200190518101906114709190613840565b6001600160a01b038316151596509094509092509050836114915785611493565b815b94508380156114a957506114a7858761230e565b155b156114c75760405163075fd2b160e01b815260040160405180910390fd5b600554610100900460ff1680156114ea575060208101515115806114ea57508051155b156115085760405163c19e07c560e01b815260040160405180910390fd5b6001600160a01b03831661153f5760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b038086166000908152600f6020908152604090912080549286166101000274ffffffffffffffffffffffffffffffffffffffff00199093169290921782558251600183019081559083015183919060028401906115a39082613288565b505060055460ff1690506115b757846115ba565b60015b815460ff19169015151781556001600160a01b0386166000908152600c60205260408120549003611696576008546001600160a01b0387166000908152600c60205260409020556116108660015b60ff16612406565b6000886008546040516020016116279291906138a3565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a6040516116739291906138c5565b60405180910390a26008805490600061168b8361344f565b919050555050611725565b60006116a187612439565b905060011960ff8216016116bf576116ba876001611608565b6116d6565b60021960ff8216016116d6576116d6876004611608565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a61170c8b612439565b60405161171b939291906138f0565b60405180910390a2505b505050505092915050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161176857506001600160a01b0381163161094c565b611772838361247a565b905061094c565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016117a85761082b82826124af565b61082b8383836124cb565b6000806117c26101008461393b565b905060006117d26101008561394f565b6000928352600d602052604090922054600190921b9182169091149392505050565b6117fc6128b8565b6001600160a01b038083166000908152600f60209081526040918290208251606081018452815460ff81161515825261010090049094168483015282518084018452600182018054825260028301805493958701949293919284019161186190613208565b80601f016020809104026020016040519081016040528092919081815260200182805461188d90613208565b80156118da5780601f106118af576101008083540402835291602001916118da565b820191906000526020600020905b8154815290600101906020018083116118bd57829003601f168201915b5050509190925250505090525092915050565b6006546001600160401b0316421161119157604051634543ced160e11b815260040160405180910390fd5b60606109498383604051806060016040528060278152602001613ce46027913961251a565b60408051808201909152600080825260208201526000828060200190518101906119679190613963565b80516020820151604083015160608401519394509192909190600061198b846117f4565b60200151905061199e8585838686612592565b156119ce576040518060400160405280826001600160a01b0316815260200184815250965050505050505061094c565b604080518082019091526001600160a01b0390911681526000602082015298975050505050505050565b600260115403611a4a5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401611536565b6002601155565b6005546000904263010000009091046001600160401b031611801590611a895750600554600160581b90046001600160401b03164211155b15611a945750600190565b50600090565b6000611aa582612439565b60ff16600681111561094c5761094c613081565b611ac28261263b565b80516005805460208085015161ffff1990921693151561ff001916939093176101009115159190910217905560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa158015611b4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b739190613997565b6009805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03929092169190911790556040810151600580546060840151608085015172ffffffffffffffffffffffffffffffff0000001990921663010000006001600160401b03958616810267ffffffffffffffff60581b191691909117600160581b92861683021767ffffffffffffffff60981b1916600160981b9386168402179384905560a08601516006805467ffffffffffffffff19169187169182179055611c4d959185048216949283048216939092041690611344565b60055460065460408051630100000084046001600160401b039081168252600160581b850481166020830152600160981b909404841681830152929091166060830152336080830152517fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39181900360a00190a160c0810151516000819003611d065760008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c805460ff191660011790555b60005b81811015611118576001600e60008560c001518481518110611d2d57611d2d6133ec565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101611d09565b611d6f61268a565b60008083806020019051810190611d8691906139b4565b80515160208101519051929450909250906002611da285612439565b60ff166006811115611db657611db6613081565b6006811115611dc757611dc7613081565b14611df05760405163f4a513b960e01b81526001600160a01b0385166004820152602401611536565b6001600160a01b0381166000908152600e602052604090205460ff16158015611e44575060008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5460ff16155b15611e6257604051637fcce2a960e01b815260040160405180910390fd5b600034118015611e8f57506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14155b80611ec157506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015611ec15750813414155b15611edf57604051637fcce2a960e01b815260040160405180910390fd5b836001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b838388604051611f36939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a2505050505050565b60008083806020019051810190611f5d91906139b4565b8051518051602090910151929450909250908073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601611fc55781341015611fb6576040516374c5672b60e01b815260040160405180910390fd5b611fc030836124af565b61208b565b6000611fd1843061247a565b85516040805180820182523081526020808201889052890151915163187945bd60e11b81529394506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016936330f28b7a9361203c939092918d9190600401613aa1565b600060405180830381600087803b15801561205657600080fd5b505af115801561206a573d6000803e3d6000fd5b50505050600061207a853061247a565b905061208682826131f5565b925050505b6001600160a01b038086166000908152604360209081526040808320938716835292905290812080548392906120c290849061360a565b90915550506001600160a01b038316600090815260446020526040812080548392906120ef90849061360a565b909155505050505050505050565b6006546001600160401b03164211156111915760405162b828c960e81b815260040160405180910390fd5b805160208083015160408085015160608601516001600160a01b038085166000908152600f90965292909420549293909290916101009091041661216f8585838686612592565b156122925760015460405163068bcd8d60e01b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d916121c89160040190815260200190565b600060405180830381865afa1580156121e5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261220d9190810190613b24565b9050612218866126d2565b836002600082825461222a91906131f5565b9091555050604081015161223f908386611779565b60408082015181518681526001600160a01b038581166020830152808916939216917fa6b66f665010d2f7435f110111aaa34b56564074f66081bef606d996fc8caa6f910160405180910390a3506122b6565b60405163f4a513b960e01b81526001600160a01b0385166004820152602401611536565b505050505050565b6005544263010000009091046001600160401b031611806122f05750600554600160581b90046001600160401b031642115b1561119157604051635b04f6ad60e11b815260040160405180910390fd5b60095460405163dd93da4360e01b81526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa15801561235c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526123849190810190613bd7565b6009548151604051635e8a791560e01b815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa1580156123da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123fe919061378f565b949350505050565b600080600061241485612710565b6000928352600b602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b0381166000908152600c6020526040812054810361246057506000919050565b60008061246c84612710565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af1610f9d5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716612510576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b0316856040516125379190613c9d565b600060405180830381855af49150503d8060008114612572576040519150601f19603f3d011682016040523d82523d6000602084013e612577565b606091505b509150915061258886838387612783565b9695505050505050565b600061259d866117b3565b156125aa57506000612632565b60408051602081018890526001600160a01b038088169282019290925290851660608201526080810184905260009060a00160408051601f198184030181528282528051602091820120908301520160405160208183030381529060405280519060200120905061261e83600a54836127fc565b61262c576000915050612632565b60019150505b95945050505050565b612643611148565b600154156126645760405163439a74c960e01b815260040160405180910390fd5b8060000361268557604051637fcce2a960e01b815260040160405180910390fd5b600155565b60055442600160981b9091046001600160401b031611806126b557506006546001600160401b031642115b156111915760405162b828c960e81b815260040160405180910390fd5b60006126e06101008361393b565b905060006126f06101008461394f565b6000928352600d60205260409092208054600190931b9092179091555050565b6001600160a01b0381166000908152600c602052604081205481908190819061273b906001906131f5565b9050600061274a60408361393b565b9050600061275960408461394f565b612764906004613cb9565b6000838152600b60205260409020549298909750919550909350505050565b606083156127f25782516000036127eb576001600160a01b0385163b6127eb5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611536565b50816123fe565b6123fe8383612812565b600082612809858461283c565b14949350505050565b8151156128225781518083602001fd5b8060405162461bcd60e51b81526004016115369190613cd0565b600081815b84518110156128815761286d82868381518110612860576128606133ec565b6020026020010151612889565b9150806128798161344f565b915050612841565b509392505050565b60008183106128a5576000828152602084905260409020610949565b6000838152602083905260409020610949565b604051806060016040528060001515815260200160006001600160a01b031681526020016128f9604051806040016040528060008152602001606081525090565b905290565b6001600160a01b038116811461114557600080fd5b60006020828403121561292557600080fd5b8135612930816128fe565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171561296f5761296f612937565b60405290565b60405160e081016001600160401b038111828210171561296f5761296f612937565b604051608081016001600160401b038111828210171561296f5761296f612937565b604051606081016001600160401b038111828210171561296f5761296f612937565b60405160c081016001600160401b038111828210171561296f5761296f612937565b604051601f8201601f191681016001600160401b0381118282101715612a2557612a25612937565b604052919050565b60006001600160401b03821115612a4657612a46612937565b5060051b60200190565b600082601f830112612a6157600080fd5b81356020612a76612a7183612a2d565b6129fd565b82815260059290921b84018101918181019086841115612a9557600080fd5b8286015b84811015612ab9578035612aac816128fe565b8352918301918301612a99565b509695505050505050565b60006001600160401b03821115612add57612add612937565b50601f01601f191660200190565b6000612af9612a7184612ac4565b9050828152838383011115612b0d57600080fd5b828260208301376000602084830101529392505050565b600082601f830112612b3557600080fd5b61094983833560208501612aeb565b600080600060608486031215612b5957600080fd5b83356001600160401b0380821115612b7057600080fd5b612b7c87838801612a50565b94506020860135915080821115612b9257600080fd5b50612b9f86828701612b24565b9250506040840135612bb0816128fe565b809150509250925092565b6001600160401b038116811461114557600080fd5b60008060008060808587031215612be657600080fd5b8435612bf181612bbb565b93506020850135612c0181612bbb565b92506040850135612c1181612bbb565b91506060850135612c2181612bbb565b939692955090935050565b60008060408385031215612c3f57600080fd5b82356001600160401b03811115612c5557600080fd5b612c6185828601612b24565b9250506020830135612c72816128fe565b809150509250929050565b60008060408385031215612c9057600080fd5b8235612c9b816128fe565b91506020830135612c72816128fe565b60005b83811015612cc6578181015183820152602001612cae565b50506000910152565b60008151808452612ce7816020860160208601612cab565b601f01601f19169290920160200192915050565b8281526040602082015260006123fe6040830184612ccf565b600060208284031215612d2657600080fd5b5035919050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a08401526123fe60c0840182612ccf565b60008060408385031215612d8f57600080fd5b8235915060208301356001600160401b0380821115612dad57600080fd5b9084019060408287031215612dc157600080fd5b612dc961294d565b82358152602083013582811115612ddf57600080fd5b80840193505086601f840112612df457600080fd5b612e0387843560208601612aeb565b60208201528093505050509250929050565b60008060208385031215612e2857600080fd5b82356001600160401b0380821115612e3f57600080fd5b818501915085601f830112612e5357600080fd5b813581811115612e6257600080fd5b8660208260051b8501011115612e7757600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015612ede57603f19888603018452612ecc858351612ccf565b94509285019290850190600101612eb0565b5092979650505050505050565b60008060408385031215612efe57600080fd5b82356001600160401b0380821115612f1557600080fd5b612f2186838701612a50565b9350602091508185013581811115612f3857600080fd5b8501601f81018713612f4957600080fd5b8035612f57612a7182612a2d565b81815260059190911b82018401908481019089831115612f7657600080fd5b8584015b83811015612fae57803586811115612f925760008081fd5b612fa08c8983890101612b24565b845250918601918601612f7a565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156130125761300284835180516001600160a01b03168252602090810151910152565b9284019290850190600101612fdc565b5091979650505050505050565b6000806020838503121561303257600080fd5b82356001600160401b038082111561304957600080fd5b818501915085601f83011261305d57600080fd5b81358181111561306c57600080fd5b8660208260061b8501011115612e7757600080fd5b634e487b7160e01b600052602160045260246000fd5b60208101600783106130b957634e487b7160e01b600052602160045260246000fd5b91905290565b600080604083850312156130d257600080fd5b8235915060208301356001600160401b038111156130ef57600080fd5b6130fb85828601612b24565b9150509250929050565b600080604080848603121561311957600080fd5b83356001600160401b0381111561312f57600080fd5b8401601f8101861361314057600080fd5b80356020613150612a7183612a2d565b82815260069290921b8301810191818101908984111561316f57600080fd5b938201935b838510156131af5785858b03121561318c5760008081fd5b61319461294d565b85358152838601358482015282529385019390820190613174565b9997909101359750505050505050565b634e487b7160e01b600052601160045260246000fd5b6001600160401b03818116838216019080821115610c3957610c396131bf565b8181038181111561094c5761094c6131bf565b600181811c9082168061321c57607f821691505b60208210810361323c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561082b57600081815260208120601f850160051c810160208610156132695750805b601f850160051c820191505b818110156122b657828155600101613275565b81516001600160401b038111156132a1576132a1612937565b6132b5816132af8454613208565b84613242565b602080601f8311600181146132ea57600084156132d25750858301515b600019600386901b1c1916600185901b1785556122b6565b600085815260208120601f198616915b82811015613319578886015182559484019460019091019084016132fa565b50858210156133375787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b82815260006020604081840152835460408401526001808501604060608601526000815461337481613208565b80608089015260a08583166000811461339457600181146133ae576133dc565b60ff1984168a83015282151560051b8a01820194506133dc565b856000528760002060005b848110156133d45781548c82018501529088019089016133b9565b8b0183019550505b50929a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261341957600080fd5b8301803591506001600160401b0382111561343357600080fd5b60200191503681900382131561344857600080fd5b9250929050565b600060018201613461576134616131bf565b5060010190565b60006040828403121561347a57600080fd5b61348261294d565b823561348d816128fe565b8152602083013561349d816128fe565b60208201529392505050565b805180151581146134b957600080fd5b919050565b80516134b981612bbb565b80516134b9816128fe565b600082601f8301126134e557600080fd5b815160206134f5612a7183612a2d565b82815260059290921b8401810191818101908684111561351457600080fd5b8286015b84811015612ab957805161352b816128fe565b8352918301918301613518565b60006020828403121561354a57600080fd5b81516001600160401b038082111561356157600080fd5b9083019060e0828603121561357557600080fd5b61357d612975565b613586836134a9565b8152613594602084016134a9565b60208201526135a5604084016134be565b60408201526135b6606084016134be565b60608201526135c7608084016134be565b60808201526135d860a084016134be565b60a082015260c0830151828111156135ef57600080fd5b6135fb878286016134d4565b60c08301525095945050505050565b8082018082111561094c5761094c6131bf565b60006080828403121561362f57600080fd5b613637612997565b90508151815260208083015161364c816128fe565b828201526040838101519083015260608301516001600160401b0381111561367357600080fd5b8301601f8101851361368457600080fd5b8051613692612a7182612a2d565b81815260059190911b820183019083810190878311156136b157600080fd5b928401925b828410156136cf578351825292840192908401906136b6565b6060860152509295945050505050565b600060208083850312156136f257600080fd5b82516001600160401b038082111561370957600080fd5b818501915085601f83011261371d57600080fd5b815161372b612a7182612a2d565b81815260059190911b8301840190848101908883111561374a57600080fd5b8585015b83811015613782578051858111156137665760008081fd5b6137748b89838a010161361d565b84525091860191860161374e565b5098975050505050505050565b6000602082840312156137a157600080fd5b610949826134a9565b600082601f8301126137bb57600080fd5b81516137c9612a7182612ac4565b8181528460208386010111156137de57600080fd5b6123fe826020830160208701612cab565b60006040828403121561380157600080fd5b61380961294d565b90508151815260208201516001600160401b0381111561382857600080fd5b613834848285016137aa565b60208301525092915050565b60008060006060848603121561385557600080fd5b8351613860816128fe565b6020850151909350613871816128fe565b60408501519092506001600160401b0381111561388d57600080fd5b613899868287016137ef565b9150509250925092565b6040815260006138b66040830185612ccf565b90508260208301529392505050565b6040815260006138d86040830185612ccf565b90506001600160a01b03831660208301529392505050565b6060815260006139036060830186612ccf565b90506001600160a01b038416602083015260ff83166040830152949350505050565b634e487b7160e01b600052601260045260246000fd5b60008261394a5761394a613925565b500490565b60008261395e5761395e613925565b500690565b60006020828403121561397557600080fd5b81516001600160401b0381111561398b57600080fd5b6123fe8482850161361d565b6000602082840312156139a957600080fd5b8151612930816128fe565b600080604083850312156139c757600080fd5b82516139d2816128fe565b60208401519092506001600160401b03808211156139ef57600080fd5b9084019081860360a0811215613a0457600080fd5b613a0c61294d565b6080821215613a1a57600080fd5b613a226129b9565b6040831215613a3057600080fd5b613a3861294d565b92508451613a45816128fe565b80845250602085015160208401528281526040850151602082015260608501516040820152808252506080840151915082821115613a8257600080fd5b613a8e888386016137aa565b6020820152809450505050509250929050565b6000610100613ac483885180516001600160a01b03168252602090810151910152565b6020870151604084015260408701516060840152613af8608084018780516001600160a01b03168252602090810151910152565b6001600160a01b03851660c08401528060e0840152613b1981840185612ccf565b979650505050505050565b600060208284031215613b3657600080fd5b81516001600160401b0380821115613b4d57600080fd5b9083019060c08286031215613b6157600080fd5b613b696129db565b825181526020830151613b7b816128fe565b60208201526040830151613b8e816128fe565b6040820152606083015182811115613ba557600080fd5b613bb1878286016137ef565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b600060208284031215613be957600080fd5b81516001600160401b0380821115613c0057600080fd5b9083019060c08286031215613c1457600080fd5b613c1c6129db565b8251815260208301516020820152604083015182811115613c3c57600080fd5b613c48878286016137aa565b604083015250606083015182811115613c6057600080fd5b613c6c878286016137ef565b606083015250613c7e608084016134c9565b6080820152613c8f60a084016134c9565b60a082015295945050505050565b60008251613caf818460208701612cab565b9190910192915050565b808202811582820484141761094c5761094c6131bf565b6020815260006109496020830184612ccf56fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220379cc1e25c517906ed5a8b8212e2e24652d67bd02c9c2ace5d2835cd4485e03e64736f6c63430008130033";
