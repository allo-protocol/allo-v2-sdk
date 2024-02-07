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
exports.bytecode = "0x60e060405260016008553480156200001657600080fd5b5060405162003b1c38038062003b1c833981016040819052620000399162000127565b6001600160a01b038316608052604051839083908390839083906200006390829060200162000209565b60408051601f19818403018152919052805160209091012060a05250506001600160a01b038116620000a85760405163538ba4f960e01b815260040160405180910390fd5b6001600160a01b031660c052506200023e9350505050565b6001600160a01b0381168114620000d657600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200010c578181015183820152602001620000f2565b50506000910152565b80516200012281620000c0565b919050565b6000806000606084860312156200013d57600080fd5b83516200014a81620000c0565b60208501519093506001600160401b03808211156200016857600080fd5b818601915086601f8301126200017d57600080fd5b815181811115620001925762000192620000d9565b604051601f8201601f19908116603f01168101908382118183101715620001bd57620001bd620000d9565b81604052828152896020848701011115620001d757600080fd5b620001ea836020830160208801620000ef565b8096505050505050620002006040850162000115565b90509250925092565b60208152600082518060208401526200022a816040850160208701620000ef565b601f01601f19169190910160400192915050565b60805160a05160c05161388b62000291600039600081816104d40152611cac0152600061038701526000818161029b01528181610e2c01528181610f95015281816117800152611db5015261388b6000f3fe60806040526004361061021e5760003560e01c80636afdd85011610123578063df868ed3116100ab578063edd146cc1161006f578063edd146cc146106ca578063ef2920fc146106ea578063f31db3d1146106fd578063f5b0dfb71461071d578063f6f258911461073d57600080fd5b8063df868ed31461061b578063dff7d2c714610630578063e744092e14610657578063e7efcfc214610687578063eb11af931461069d57600080fd5b8063a0cf0aea116100f2578063a0cf0aea14610553578063ac9650d81461057b578063b2b878d0146105a8578063cb0e85a6146105d5578063d2e17f59146105f457600080fd5b80636afdd850146104c257806373af3453146104f657806395355b3b146105165780639af5c09d1461052c57600080fd5b806342fda9c7116101a657806351cff8d91161017557806351cff8d914610418578063570897391461043857806359a3977b146104525780635f1b55f31461047557806362812a391461049557600080fd5b806342fda9c7146103785780634533d678146103ab5780634ab4ba42146103e35780634d31d087146103f857600080fd5b806321755088116101ed57806321755088146102f35780632bbe0cae146103235780632d52eff2146103365780632eb4a7ab1461034d57806338fff2d01461036357600080fd5b806301fc1c641461022a5780630a6f0ee91461026a57806315cc481e1461028c5780632143e92f146102d357600080fd5b3661022557005b600080fd5b34801561023657600080fd5b5061025761024536600461252f565b600c6020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561027657600080fd5b5061028a610285366004612760565b61076a565b005b34801561029857600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b039091168152602001610261565b3480156102df57600080fd5b5061028a6102ee3660046127ec565b61078a565b3480156102ff57600080fd5b506005546103139062010000900460ff1681565b6040519015158152602001610261565b6102bb610331366004612848565b610887565b34801561034257600080fd5b50600a541515610313565b34801561035957600080fd5b50610257600a5481565b34801561036f57600080fd5b50600154610257565b34801561038457600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610257565b3480156103b757600080fd5b506006546103cb906001600160401b031681565b6040516001600160401b039091168152602001610261565b3480156103ef57600080fd5b50600254610257565b34801561040457600080fd5b5061031361041336600461252f565b6108ac565b34801561042457600080fd5b5061028a61043336600461252f565b6108b5565b34801561044457600080fd5b506005546103139060ff1681565b34801561045e57600080fd5b5061046761092f565b6040516102619291906128e9565b34801561048157600080fd5b50610313610490366004612902565b6109c6565b3480156104a157600080fd5b506104b56104b036600461252f565b6109d1565b604051610261919061291b565b3480156104ce57600080fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b34801561050257600080fd5b5061028a61051136600461296a565b6109e2565b34801561052257600080fd5b5061025760085481565b34801561053857600080fd5b506005546103cb90630100000090046001600160401b031681565b34801561055f57600080fd5b506102bb73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561058757600080fd5b5061059b610596366004612a03565b610a84565b6040516102619190612a77565b3480156105b457600080fd5b506105c86105c3366004612ad9565b610b78565b6040516102619190612bad565b3480156105e157600080fd5b5060055461031390610100900460ff1681565b34801561060057600080fd5b506005546103cb90600160981b90046001600160401b031681565b34801561062757600080fd5b50610313610c76565b34801561063c57600080fd5b506005546103cb90600160581b90046001600160401b031681565b34801561066357600080fd5b5061031361067236600461252f565b600e6020526000908152604090205460ff1681565b34801561069357600080fd5b5061025760075481565b3480156106a957600080fd5b506106bd6106b836600461252f565b610c85565b6040516102619190612c23565b3480156106d657600080fd5b5061028a6106e5366004612c4b565b610c90565b61028a6106f8366004612848565b610ceb565b34801561070957600080fd5b5061028a610718366004612c91565b610d13565b34801561072957600080fd5b5061028a610738366004612902565b610df7565b34801561074957600080fd5b50610257610758366004612902565b600b6020526000908152604090205481565b610772610e21565b61077a610e6c565b610785838383610e8f565b505050565b3361079481610f6b565b6107a08585858561101d565b6005805472ffffffffffffffffffffffffffffffff000000191663010000006001600160401b03888116820267ffffffffffffffff60581b191692909217600160581b88841681029190911767ffffffffffffffff60981b1916600160981b888516810291909117948590556006805467ffffffffffffffff191688861690811790915560408051948704861685529286048516602085015294049092169181019190915260608101919091523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a15050505050565b6000610891610e21565b610899610e6c565b6108a383836110b7565b90505b92915050565b600060016108a6565b336108bf81610f6b565b6006546108d8906001600160401b031662278d00612d61565b6001600160401b0316421161090057604051637fcce2a960e01b815260040160405180910390fd5b600061090c8330611409565b905060008061091b8284612d81565b9050610928853383611452565b5050505050565b600380546004805491929161094390612d94565b80601f016020809104026020016040519081016040528092919081815260200182805461096f90612d94565b80156109bc5780601f10610991576101008083540402835291602001916109bc565b820191906000526020600020905b81548152906001019060200180831161099f57829003601f168201915b5050505050905082565b60006108a68261148c565b6109d96124d4565b6108a6826114cd565b6109ea6115c6565b336109f481610f6b565b60055462010000900460ff1615610a1e57604051637fcce2a960e01b815260040160405180910390fd5b600a839055815160039081556020830151839190600490610a3f9082612e14565b509050507fdc7180ca4affc84269428ed20ef950e745126f11691b010c4a7d49458421008f600a546003604051610a77929190612ed3565b60405180910390a1505050565b6060816001600160401b03811115610a9e57610a9e612553565b604051908082528060200260200182016040528015610ad157816020015b6060815260200190600190039081610abc5790505b50905060005b82811015610b7157610b4130858584818110610af557610af5612f78565b9050602002810190610b079190612f8e565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506115f192505050565b828281518110610b5357610b53612f78565b60200260200101819052508080610b6990612fdb565b915050610ad7565b5092915050565b81518151606091908114610b9f57604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b03811115610bb957610bb9612553565b604051908082528060200260200182016040528015610bfe57816020015b6040805180820190915260008082526020820152815260200190600190039081610bd75790505b50905060005b82811015610c6d57610c48868281518110610c2157610c21612f78565b6020026020010151868381518110610c3b57610c3b612f78565b6020026020010151611616565b828281518110610c5a57610c5a612f78565b6020908102919091010152600101610c04565b50949350505050565b6000610c806116d1565b905090565b60006108a68261171a565b610c98610e21565b600081806020019051810190610cae9190613083565b9050610cba8382611739565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610a779291906128e9565b610cf3610e21565b610cfb610e6c565b610d0582826119e7565b610d0f8282611bc6565b5050565b610d1b611d21565b33610d2581610f6b565b6008548214610d4757604051637fcce2a960e01b815260040160405180910390fd5b60005b8351811015610df1576000848281518110610d6757610d67612f78565b60200260200101516000015190506000858381518110610d8957610d89612f78565b6020908102919091018101518101516000848152600b83526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a25050600101610d4a565b50505050565b610dff610e21565b8060026000828254610e119190613155565b90915550610e1e90508181565b50565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e6a5760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003610e6a57604051630f68fe6360e21b815260040160405180910390fd5b80610e9981610f6b565b600a54600003610ebc57604051637fcce2a960e01b815260040160405180910390fd5b60055462010000900460ff16610ede576005805462ff00001916620100001790555b600083806020019051810190610ef4919061322a565b805190915060005b81811015610f2e57610f26838281518110610f1957610f19612f78565b6020026020010151611d4c565b600101610efc565b506040516001600160a01b038516907f7ec3272052827f7b50d9e84f98172cbb80c112df1e377c5b97ea77f1812db8d990600090a2505050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610fdc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100091906132da565b610e1e5760405163075fd2b160e01b815260040160405180910390fd5b836001600160401b03164211806110455750826001600160401b0316846001600160401b0316115b806110615750816001600160401b0316846001600160401b0316115b8061107d5750806001600160401b0316826001600160401b0316115b806110995750806001600160401b0316836001600160401b0316115b15610df157604051637fcce2a960e01b815260040160405180910390fd5b60006110c1611eda565b60008060006110e3604051806040016040528060008152602001606081525090565b60055460ff16156111355786806020019051810190611102919061338b565b919650935090506111138587611f2a565b6111305760405163075fd2b160e01b815260040160405180910390fd5b6111a0565b86806020019051810190611149919061338b565b6001600160a01b0383161515965090945090925090508361116a578561116c565b815b945083801561118257506111808587611f2a565b155b156111a05760405163075fd2b160e01b815260040160405180910390fd5b600554610100900460ff1680156111c3575060208101515115806111c357508051155b156111e15760405163c19e07c560e01b815260040160405180910390fd5b6001600160a01b0383166112185760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b038086166000908152600f6020908152604090912080549286166101000274ffffffffffffffffffffffffffffffffffffffff001990931692909217825582516001830190815590830151839190600284019061127c9082612e14565b505060055460ff1690506112905784611293565b60015b815460ff19169015151781556001600160a01b0386166000908152600c6020526040812054900361136f576008546001600160a01b0387166000908152600c60205260409020556112e98660015b60ff16612022565b6000886008546040516020016113009291906133ee565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a60405161134c929190613410565b60405180910390a26008805490600061136483612fdb565b9190505550506113fe565b600061137a87612055565b905060011960ff821601611398576113938760016112e1565b6113af565b60021960ff8216016113af576113af8760046112e1565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a6113e58b612055565b6040516113f49392919061343b565b60405180910390a2505b505050505092915050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161144157506001600160a01b038116316108a6565b61144b8383612096565b90506108a6565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016114815761078582826120cb565b6107858383836120e7565b60008061149b61010084613486565b905060006114ab6101008561349a565b6000928352600d602052604090922054600190921b9182169091149392505050565b6114d56124d4565b6001600160a01b038083166000908152600f60209081526040918290208251606081018452815460ff81161515825261010090049094168483015282518084018452600182018054825260028301805493958701949293919284019161153a90612d94565b80601f016020809104026020016040519081016040528092919081815260200182805461156690612d94565b80156115b35780601f10611588576101008083540402835291602001916115b3565b820191906000526020600020905b81548152906001019060200180831161159657829003601f168201915b5050509190925250505090525092915050565b6006546001600160401b03164211610e6a57604051634543ced160e11b815260040160405180910390fd5b60606108a3838360405180606001604052806027815260200161382f60279139612136565b604080518082019091526000808252602082015260008280602001905181019061164091906134ae565b805160208201516040830151606084015193945091929091906000611664846114cd565b60200151905061167785858386866121ae565b156116a7576040518060400160405280826001600160a01b031681526020018481525096505050505050506108a6565b604080518082019091526001600160a01b0390911681526000602082015298975050505050505050565b6005546000904263010000009091046001600160401b0316118015906117095750600554600160581b90046001600160401b03164211155b156117145750600190565b50600090565b600061172582612055565b60ff1660068111156108a6576108a6612c0d565b61174282612257565b80516005805460208085015161ffff1990921693151561ff001916939093176101009115159190910217905560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa1580156117cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f391906134e2565b6009805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03929092169190911790556040810151600580546060840151608085015172ffffffffffffffffffffffffffffffff0000001990921663010000006001600160401b03958616810267ffffffffffffffff60581b191691909117600160581b92861683021767ffffffffffffffff60981b1916600160981b9386168402179384905560a08601516006805467ffffffffffffffff191691871691821790556118cd95918504821694928304821693909204169061101d565b60055460065460408051630100000084046001600160401b039081168252600160581b850481166020830152600160981b909404841681830152929091166060830152336080830152517fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39181900360a00190a160c08101515160008190036119865760008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c805460ff191660011790555b60005b81811015610df1576001600e60008560c0015184815181106119ad576119ad612f78565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101611989565b6119ef6122a6565b60008083806020019051810190611a0691906134ff565b80515160208101519051929450909250906002611a2285612055565b60ff166006811115611a3657611a36612c0d565b6006811115611a4757611a47612c0d565b14611a705760405163f4a513b960e01b81526001600160a01b038516600482015260240161120f565b6001600160a01b0381166000908152600e602052604090205460ff16158015611ac4575060008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5460ff16155b15611ae257604051637fcce2a960e01b815260040160405180910390fd5b600034118015611b0f57506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14155b80611b4157506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015611b415750813414155b15611b5f57604051637fcce2a960e01b815260040160405180910390fd5b836001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b838388604051611bb6939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a2505050505050565b60008083806020019051810190611bdd91906134ff565b80515180516020909101519294509092509073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03831601611c655780341015611c35576040516374c5672b60e01b815260040160405180910390fd5b6001600160a01b038085166000908152600f6020526040902054611c609161010090910416826120cb565b611d19565b82516040805180820182526001600160a01b038781166000908152600f60209081529084902054610100900482168352808301869052870151925163187945bd60e11b81527f0000000000000000000000000000000000000000000000000000000000000000909116936330f28b7a93611ce69391928b91906004016135ec565b600060405180830381600087803b158015611d0057600080fd5b505af1158015611d14573d6000803e3d6000fd5b505050505b505050505050565b6006546001600160401b0316421115610e6a5760405162b828c960e81b815260040160405180910390fd5b805160208083015160408085015160608601516001600160a01b038085166000908152600f909652929094205492939092909161010090910416611d9385858386866121ae565b15611eb65760015460405163068bcd8d60e01b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d91611dec9160040190815260200190565b600060405180830381865afa158015611e09573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611e31919081019061366f565b9050611e3c866122ee565b8360026000828254611e4e9190612d81565b90915550506040810151611e63908386611452565b60408082015181518681526001600160a01b038581166020830152808916939216917fa6b66f665010d2f7435f110111aaa34b56564074f66081bef606d996fc8caa6f910160405180910390a350611d19565b60405163f4a513b960e01b81526001600160a01b038516600482015260240161120f565b6005544263010000009091046001600160401b03161180611f0c5750600554600160581b90046001600160401b031642115b15610e6a57604051635b04f6ad60e11b815260040160405180910390fd5b60095460405163dd93da4360e01b81526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa158015611f78573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611fa09190810190613722565b6009548151604051635e8a791560e01b815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa158015611ff6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061201a91906132da565b949350505050565b60008060006120308561232c565b6000928352600b602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b0381166000908152600c6020526040812054810361207c57506000919050565b6000806120888461232c565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af1610d0f5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661212c576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b03168560405161215391906137e8565b600060405180830381855af49150503d806000811461218e576040519150601f19603f3d011682016040523d82523d6000602084013e612193565b606091505b50915091506121a48683838761239f565b9695505050505050565b60006121b98661148c565b156121c65750600061224e565b60408051602081018890526001600160a01b038088169282019290925290851660608201526080810184905260009060a00160408051601f198184030181528282528051602091820120908301520160405160208183030381529060405280519060200120905061223a83600a5483612418565b61224857600091505061224e565b60019150505b95945050505050565b61225f610e21565b600154156122805760405163439a74c960e01b815260040160405180910390fd5b806000036122a157604051637fcce2a960e01b815260040160405180910390fd5b600155565b60055442600160981b9091046001600160401b031611806122d157506006546001600160401b031642115b15610e6a5760405162b828c960e81b815260040160405180910390fd5b60006122fc61010083613486565b9050600061230c6101008461349a565b6000928352600d60205260409092208054600190931b9092179091555050565b6001600160a01b0381166000908152600c602052604081205481908190819061235790600190612d81565b90506000612366604083613486565b9050600061237560408461349a565b612380906004613804565b6000838152600b60205260409020549298909750919550909350505050565b6060831561240e578251600003612407576001600160a01b0385163b6124075760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161120f565b508161201a565b61201a838361242e565b6000826124258584612458565b14949350505050565b81511561243e5781518083602001fd5b8060405162461bcd60e51b815260040161120f919061381b565b600081815b845181101561249d576124898286838151811061247c5761247c612f78565b60200260200101516124a5565b91508061249581612fdb565b91505061245d565b509392505050565b60008183106124c15760008281526020849052604090206108a3565b60008381526020839052604090206108a3565b604051806060016040528060001515815260200160006001600160a01b03168152602001612515604051806040016040528060008152602001606081525090565b905290565b6001600160a01b0381168114610e1e57600080fd5b60006020828403121561254157600080fd5b813561254c8161251a565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171561258b5761258b612553565b60405290565b60405160e081016001600160401b038111828210171561258b5761258b612553565b604051608081016001600160401b038111828210171561258b5761258b612553565b604051606081016001600160401b038111828210171561258b5761258b612553565b60405160c081016001600160401b038111828210171561258b5761258b612553565b604051601f8201601f191681016001600160401b038111828210171561264157612641612553565b604052919050565b60006001600160401b0382111561266257612662612553565b5060051b60200190565b600082601f83011261267d57600080fd5b8135602061269261268d83612649565b612619565b82815260059290921b840181019181810190868411156126b157600080fd5b8286015b848110156126d55780356126c88161251a565b83529183019183016126b5565b509695505050505050565b60006001600160401b038211156126f9576126f9612553565b50601f01601f191660200190565b600061271561268d846126e0565b905082815283838301111561272957600080fd5b828260208301376000602084830101529392505050565b600082601f83011261275157600080fd5b6108a383833560208501612707565b60008060006060848603121561277557600080fd5b83356001600160401b038082111561278c57600080fd5b6127988783880161266c565b945060208601359150808211156127ae57600080fd5b506127bb86828701612740565b92505060408401356127cc8161251a565b809150509250925092565b6001600160401b0381168114610e1e57600080fd5b6000806000806080858703121561280257600080fd5b843561280d816127d7565b9350602085013561281d816127d7565b9250604085013561282d816127d7565b9150606085013561283d816127d7565b939692955090935050565b6000806040838503121561285b57600080fd5b82356001600160401b0381111561287157600080fd5b61287d85828601612740565b925050602083013561288e8161251a565b809150509250929050565b60005b838110156128b457818101518382015260200161289c565b50506000910152565b600081518084526128d5816020860160208601612899565b601f01601f19169290920160200192915050565b82815260406020820152600061201a60408301846128bd565b60006020828403121561291457600080fd5b5035919050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a084015261201a60c08401826128bd565b6000806040838503121561297d57600080fd5b8235915060208301356001600160401b038082111561299b57600080fd5b90840190604082870312156129af57600080fd5b6129b7612569565b823581526020830135828111156129cd57600080fd5b80840193505086601f8401126129e257600080fd5b6129f187843560208601612707565b60208201528093505050509250929050565b60008060208385031215612a1657600080fd5b82356001600160401b0380821115612a2d57600080fd5b818501915085601f830112612a4157600080fd5b813581811115612a5057600080fd5b8660208260051b8501011115612a6557600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015612acc57603f19888603018452612aba8583516128bd565b94509285019290850190600101612a9e565b5092979650505050505050565b60008060408385031215612aec57600080fd5b82356001600160401b0380821115612b0357600080fd5b612b0f8683870161266c565b9350602091508185013581811115612b2657600080fd5b8501601f81018713612b3757600080fd5b8035612b4561268d82612649565b81815260059190911b82018401908481019089831115612b6457600080fd5b8584015b83811015612b9c57803586811115612b805760008081fd5b612b8e8c8983890101612740565b845250918601918601612b68565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015612c0057612bf084835180516001600160a01b03168252602090810151910152565b9284019290850190600101612bca565b5091979650505050505050565b634e487b7160e01b600052602160045260246000fd5b6020810160078310612c4557634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215612c5e57600080fd5b8235915060208301356001600160401b03811115612c7b57600080fd5b612c8785828601612740565b9150509250929050565b6000806040808486031215612ca557600080fd5b83356001600160401b03811115612cbb57600080fd5b8401601f81018613612ccc57600080fd5b80356020612cdc61268d83612649565b82815260069290921b83018101918181019089841115612cfb57600080fd5b938201935b83851015612d3b5785858b031215612d185760008081fd5b612d20612569565b85358152838601358482015282529385019390820190612d00565b9997909101359750505050505050565b634e487b7160e01b600052601160045260246000fd5b6001600160401b03818116838216019080821115610b7157610b71612d4b565b818103818111156108a6576108a6612d4b565b600181811c90821680612da857607f821691505b602082108103612dc857634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561078557600081815260208120601f850160051c81016020861015612df55750805b601f850160051c820191505b81811015611d1957828155600101612e01565b81516001600160401b03811115612e2d57612e2d612553565b612e4181612e3b8454612d94565b84612dce565b602080601f831160018114612e765760008415612e5e5750858301515b600019600386901b1c1916600185901b178555611d19565b600085815260208120601f198616915b82811015612ea557888601518255948401946001909101908401612e86565b5085821015612ec35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b828152600060206040818401528354604084015260018085016040606086015260008154612f0081612d94565b80608089015260a085831660008114612f205760018114612f3a57612f68565b60ff1984168a83015282151560051b8a0182019450612f68565b856000528760002060005b84811015612f605781548c8201850152908801908901612f45565b8b0183019550505b50929a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112612fa557600080fd5b8301803591506001600160401b03821115612fbf57600080fd5b602001915036819003821315612fd457600080fd5b9250929050565b600060018201612fed57612fed612d4b565b5060010190565b8051801515811461300457600080fd5b919050565b8051613004816127d7565b80516130048161251a565b600082601f83011261303057600080fd5b8151602061304061268d83612649565b82815260059290921b8401810191818101908684111561305f57600080fd5b8286015b848110156126d55780516130768161251a565b8352918301918301613063565b60006020828403121561309557600080fd5b81516001600160401b03808211156130ac57600080fd5b9083019060e082860312156130c057600080fd5b6130c8612591565b6130d183612ff4565b81526130df60208401612ff4565b60208201526130f060408401613009565b604082015261310160608401613009565b606082015261311260808401613009565b608082015261312360a08401613009565b60a082015260c08301518281111561313a57600080fd5b6131468782860161301f565b60c08301525095945050505050565b808201808211156108a6576108a6612d4b565b60006080828403121561317a57600080fd5b6131826125b3565b9050815181526020808301516131978161251a565b828201526040838101519083015260608301516001600160401b038111156131be57600080fd5b8301601f810185136131cf57600080fd5b80516131dd61268d82612649565b81815260059190911b820183019083810190878311156131fc57600080fd5b928401925b8284101561321a57835182529284019290840190613201565b6060860152509295945050505050565b6000602080838503121561323d57600080fd5b82516001600160401b038082111561325457600080fd5b818501915085601f83011261326857600080fd5b815161327661268d82612649565b81815260059190911b8301840190848101908883111561329557600080fd5b8585015b838110156132cd578051858111156132b15760008081fd5b6132bf8b89838a0101613168565b845250918601918601613299565b5098975050505050505050565b6000602082840312156132ec57600080fd5b6108a382612ff4565b600082601f83011261330657600080fd5b815161331461268d826126e0565b81815284602083860101111561332957600080fd5b61201a826020830160208701612899565b60006040828403121561334c57600080fd5b613354612569565b90508151815260208201516001600160401b0381111561337357600080fd5b61337f848285016132f5565b60208301525092915050565b6000806000606084860312156133a057600080fd5b83516133ab8161251a565b60208501519093506133bc8161251a565b60408501519092506001600160401b038111156133d857600080fd5b6133e48682870161333a565b9150509250925092565b60408152600061340160408301856128bd565b90508260208301529392505050565b60408152600061342360408301856128bd565b90506001600160a01b03831660208301529392505050565b60608152600061344e60608301866128bd565b90506001600160a01b038416602083015260ff83166040830152949350505050565b634e487b7160e01b600052601260045260246000fd5b60008261349557613495613470565b500490565b6000826134a9576134a9613470565b500690565b6000602082840312156134c057600080fd5b81516001600160401b038111156134d657600080fd5b61201a84828501613168565b6000602082840312156134f457600080fd5b815161254c8161251a565b6000806040838503121561351257600080fd5b825161351d8161251a565b60208401519092506001600160401b038082111561353a57600080fd5b9084019081860360a081121561354f57600080fd5b613557612569565b608082121561356557600080fd5b61356d6125d5565b604083121561357b57600080fd5b613583612569565b925084516135908161251a565b808452506020850151602084015282815260408501516020820152606085015160408201528082525060808401519150828211156135cd57600080fd5b6135d9888386016132f5565b6020820152809450505050509250929050565b600061010061360f83885180516001600160a01b03168252602090810151910152565b6020870151604084015260408701516060840152613643608084018780516001600160a01b03168252602090810151910152565b6001600160a01b03851660c08401528060e0840152613664818401856128bd565b979650505050505050565b60006020828403121561368157600080fd5b81516001600160401b038082111561369857600080fd5b9083019060c082860312156136ac57600080fd5b6136b46125f7565b8251815260208301516136c68161251a565b602082015260408301516136d98161251a565b60408201526060830151828111156136f057600080fd5b6136fc8782860161333a565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b60006020828403121561373457600080fd5b81516001600160401b038082111561374b57600080fd5b9083019060c0828603121561375f57600080fd5b6137676125f7565b825181526020830151602082015260408301518281111561378757600080fd5b613793878286016132f5565b6040830152506060830151828111156137ab57600080fd5b6137b78782860161333a565b6060830152506137c960808401613014565b60808201526137da60a08401613014565b60a082015295945050505050565b600082516137fa818460208701612899565b9190910192915050565b80820281158282048414176108a6576108a6612d4b565b6020815260006108a360208301846128bd56fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122066f3f31b0aba3a64dfbc6d08e19d6a06894099593c9bb82db110764da0145ed564736f6c63430008130033";