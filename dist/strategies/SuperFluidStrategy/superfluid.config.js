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
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Canceled",
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
            {
                indexed: false,
                internalType: "int96",
                name: "flowRate",
                type: "int96",
            },
        ],
        name: "Distributed",
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
                internalType: "uint256",
                name: "minPassportScore",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "MinPassportScoreUpdated",
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
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "enum IStrategy.Status",
                name: "status",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Reviewed",
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
                internalType: "uint256",
                name: "totalUnits",
                type: "uint256",
            },
        ],
        name: "TotalUnitsUpdated",
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
        inputs: [
            {
                internalType: "uint256",
                name: "_previousFlowrate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_newFlowRate",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_allocator",
                type: "address",
            },
        ],
        name: "adjustWeightings",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "allocationSuperToken",
        outputs: [
            {
                internalType: "contract ISuperToken",
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
        ],
        name: "cancelRecipients",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "closeStream",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "gdaPool",
        outputs: [
            {
                internalType: "contract ISuperfluidPool",
                name: "",
                type: "address",
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
                        internalType: "enum IStrategy.Status",
                        name: "recipientStatus",
                        type: "uint8",
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
                    {
                        internalType: "contract RecipientSuperApp",
                        name: "superApp",
                        type: "address",
                    },
                ],
                internalType: "struct SQFSuperFluidStrategy.Recipient",
                name: "",
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
                name: "_superApp",
                type: "address",
            },
        ],
        name: "getRecipientId",
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
                internalType: "address",
                name: "_recipientId",
                type: "address",
            },
        ],
        name: "getSuperApp",
        outputs: [
            {
                internalType: "contract RecipientSuperApp",
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
        inputs: [],
        name: "initialSuperAppBalance",
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
        inputs: [],
        name: "minPassportScore",
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
        name: "passportDecoder",
        outputs: [
            {
                internalType: "contract IGitcoinPassportDecoder",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "poolSuperToken",
        outputs: [
            {
                internalType: "contract ISuperToken",
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
        name: "recipientAllocatorUnits",
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
        name: "recipientFlowRate",
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
        name: "recipients",
        outputs: [
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
                internalType: "enum IStrategy.Status",
                name: "recipientStatus",
                type: "uint8",
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
            {
                internalType: "contract RecipientSuperApp",
                name: "superApp",
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
                internalType: "address[]",
                name: "_recipientIds",
                type: "address[]",
            },
            {
                internalType: "enum IStrategy.Status[]",
                name: "_recipientStatuses",
                type: "uint8[]",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "superApps",
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
        name: "superfluidHost",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "totalUnitsByRecipient",
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
                internalType: "uint256",
                name: "_minPassportScore",
                type: "uint256",
            },
        ],
        name: "updateMinPassportScore",
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
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
exports.bytecode = "0x60c06040523480156200001157600080fd5b5060405162006007380380620060078339810160408190526200003491620000bf565b6001600160a01b03821660805260405182908290620000589082906020016200019a565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001cf9050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b65781810151838201526020016200009c565b50506000910152565b60008060408385031215620000d357600080fd5b82516001600160a01b0381168114620000eb57600080fd5b60208401519092506001600160401b03808211156200010957600080fd5b818501915085601f8301126200011e57600080fd5b81518181111562000133576200013362000083565b604051601f8201601f19908116603f011681019083821181831017156200015e576200015e62000083565b816040528281528860208487010111156200017857600080fd5b6200018b83602083016020880162000099565b80955050505050509250929050565b6020815260008251806020840152620001bb81604085016020870162000099565b601f01601f19169190910160400192915050565b60805160a051615df66200021160003960006104b40152600081816103200152818161151901528181611685015281816118ba01526119e50152615df66000f3fe608060405260043610620002a55760003560e01c80637f8359831162000164578063d237884e11620000d6578063eb8203121162000095578063ef2920fc116200006c578063ef2920fc1462000910578063f3fef3a31462000927578063f5b0dfb7146200094c57600080fd5b8063eb820312146200088e578063ed42489a14620008c6578063edd146cc14620008eb57600080fd5b8063d237884e14620007ce578063d2e17f5914620007f0578063df868ed31462000819578063dff7d2c71462000831578063eb11af93146200085a57600080fd5b8063b2b878d01162000123578063b2b878d01462000702578063b63b6fe41462000736578063c40c455d146200074e578063cb0e85a61462000788578063d05fe64c14620007a957600080fd5b80637f83598314620006575780639af5c09d146200067c5780639c0b5f99146200069e5780639dad938214620006c0578063a0cf0aea14620006d857600080fd5b80633a1bce35116200021b5780634d31d08711620001da57806363bbd79811620001b157806363bbd79814620005b85780636acd5bef14620005f55780636ceed0ef146200063557600080fd5b80634d31d087146200053257806357089739146200056857806362812a39146200058457600080fd5b80633a1bce3514620004675780633c73567d146200047f57806342fda9c714620004a45780634533d67814620004d95780634ab4ba42146200051b57600080fd5b80632143e92f11620002685780632143e92f14620003a7578063266dc51014620003cc5780632bbe0cae14620004085780632c64ef34146200041f57806338fff2d0146200045057600080fd5b806302aed72e14620002aa5780630a6f0ee914620002e957806315cc481e14620003105780631724c4ac146200034557806319ba46601462000385575b600080fd5b348015620002b757600080fd5b50600754620002cc906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b348015620002f657600080fd5b506200030e620003083660046200324e565b62000971565b005b3480156200031d57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000620002cc565b3480156200035257600080fd5b506200037662000364366004620032ce565b60106020526000908152604090205481565b604051908152602001620002e0565b3480156200039257600080fd5b50600854620002cc906001600160a01b031681565b348015620003b457600080fd5b506200030e620003c63660046200330b565b62000997565b348015620003d957600080fd5b5062000376620003eb36600462003370565b600f60209081526000928352604080842090915290825290205481565b620002cc62000419366004620033ae565b620009b8565b3480156200042c57600080fd5b50620003766200043e366004620032ce565b60116020526000908152604090205481565b3480156200045d57600080fd5b5060015462000376565b3480156200047457600080fd5b5062000376600a5481565b3480156200048c57600080fd5b506200030e6200049e36600462003448565b620009e3565b348015620004b157600080fd5b507f000000000000000000000000000000000000000000000000000000000000000062000376565b348015620004e657600080fd5b50600b546200050290600160c01b90046001600160401b031681565b6040516001600160401b039091168152602001620002e0565b3480156200052857600080fd5b5060025462000376565b3480156200053f57600080fd5b506200055762000551366004620032ce565b62000b88565b6040519015158152602001620002e0565b3480156200057557600080fd5b50600c54620005579060ff1681565b3480156200059157600080fd5b50620005a9620005a3366004620032ce565b62000b95565b604051620002e091906200353b565b348015620005c557600080fd5b50620002cc620005d7366004620032ce565b6001600160a01b039081166000908152600e60205260409020541690565b3480156200060257600080fd5b50620002cc62000614366004620032ce565b6001600160a01b039081166000908152600d60205260409020600301541690565b3480156200064257600080fd5b50600654620002cc906001600160a01b031681565b3480156200066457600080fd5b506200030e62000676366004620035ab565b62000baa565b3480156200068957600080fd5b50600b5462000502906001600160401b031681565b348015620006ab57600080fd5b50600554620002cc906001600160a01b031681565b348015620006cd57600080fd5b506200030e62000f23565b348015620006e557600080fd5b50620002cc73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b3480156200070f57600080fd5b5062000727620007213660046200361d565b62000fee565b604051620002e0919062003700565b3480156200074357600080fd5b506200037660045481565b3480156200075b57600080fd5b50620002cc6200076d366004620032ce565b600e602052600090815260409020546001600160a01b031681565b3480156200079557600080fd5b50600c546200055790610100900460ff1681565b348015620007b657600080fd5b506200030e620007c83660046200375a565b62001143565b348015620007db57600080fd5b50600954620002cc906001600160a01b031681565b348015620007fd57600080fd5b50600b546200050290600160801b90046001600160401b031681565b3480156200082657600080fd5b506200055762001328565b3480156200083e57600080fd5b50600b546200050290600160401b90046001600160401b031681565b3480156200086757600080fd5b506200087f62000879366004620032ce565b62001339565b604051620002e091906200378b565b3480156200089b57600080fd5b50620008b3620008ad366004620032ce565b62001346565b604051620002e09594939291906200379b565b348015620008d357600080fd5b506200030e620008e5366004620037ec565b6200143f565b348015620008f857600080fd5b506200030e6200090a36600462003806565b6200148c565b6200030e62000921366004620033ae565b62001816565b3480156200093457600080fd5b506200030e6200094636600462003850565b6200183a565b3480156200095957600080fd5b506200030e6200096b366004620037ec565b62001883565b6200097b620018af565b62000985620018fb565b620009928383836200191f565b505050565b33620009a381620019bb565b620009b18585858562001a71565b5050505050565b6000620009c4620018af565b620009ce620018fb565b620009da838362001be9565b90505b92915050565b33620009ef81620019bb565b620009f962001eed565b8160005b81811015620009b157600085858381811062000a1d5762000a1d6200387f565b905060200201602081019062000a349190620032ce565b6001600160a01b0381166000908152600d602052604081209192508154600160a81b900460ff16600681111562000a6f5762000a6f6200348d565b148062000a9b575060068154600160a81b900460ff16600681111562000a995762000a996200348d565b145b1562000aca5760405163f4a513b960e01b81526001600160a01b03831660048201526024015b60405180910390fd5b805460ff60a81b1916600360a91b1781556003810180546001600160a01b03198082169092556001600160a01b039081166000818152600e6020908152604080832080549096169095558684168252601190529283208390558354909262000b3b9286926101009004169062001f20565b6040513381526001600160a01b038416907fd08928d04a8f87ca2e3a2a6d3367f3272b6ceae11f45c1aa86bed323469263019060200160405180910390a2836001019350505050620009fd565b6000620009dd8262002002565b62000b9f62003021565b620009dd8262002095565b3362000bb681620019bb565b62000bc062001eed565b8382811462000be257604051637fcce2a960e01b815260040160405180910390fd5b60005b8181101562000f1a57600085858381811062000c055762000c056200387f565b905060200201602081019062000c1c919062003895565b9050600088888481811062000c355762000c356200387f565b905060200201602081019062000c4c9190620032ce565b6001600160a01b0381166000908152600d6020526040902090915060018154600160a81b900460ff16600681111562000c895762000c896200348d565b14158062000ccd5750600283600681111562000ca95762000ca96200348d565b1415801562000ccd5750600383600681111562000cca5762000cca6200348d565b14155b1562000cf85760405163f4a513b960e01b81526001600160a01b038316600482015260240162000ac1565b80548390829060ff60a81b1916600160a81b83600681111562000d1f5762000d1f6200348d565b0217905550816001600160a01b03167f094d003df6c0153ac428d1a45e5827aa8e2aa00c6dbbc96a2dbb9a682115d837843360405162000d61929190620038b8565b60405180910390a2600283600681111562000d805762000d806200348d565b0362000f0b5780546005546006546040516000936001600160a01b036101009091048116933093908216929116906001908190819062000dc0906200306c565b6001600160a01b039788168152958716602087015293861660408601529490911660608401521515608083015291151560a082015290151560c082015261010060e0820181905260009082015261012001604051809103906000f08015801562000e2e573d6000803e3d6000fd5b506006546004805460405163a9059cbb60e01b81526001600160a01b03808616938201939093526024810191909152929350169063a9059cbb906044016020604051808303816000875af115801562000e8b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000eb19190620038f4565b50815462000ed190849061010090046001600160a01b0316600162001f20565b6001600160a01b039081166000818152600e6020526040902080549285166001600160a01b03199384161790556003830180549092161790555b83600101935050505062000be5565b50505050505050565b3362000f2f81620019bb565b600854604080518082019091526002815261060f60f31b602082015260075462000f6e926001600160a01b0391821692309290911690600090620021eb565b506007546040516370a0823160e01b815230600482015262000feb916001600160a01b031690339082906370a0823190602401602060405180830381865afa15801562000fbf573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000fe5919062003912565b62002353565b50565b815181516060919081146200101657604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b038111156200103357620010336200307a565b6040519080825280602002602001820160405280156200107a57816020015b6040805180820190915260008082526020820152815260200190600190039081620010525790505b50905060005b828110156200113a5762001111868281518110620010a257620010a26200387f565b6020026020010151868381518110620010bf57620010bf6200387f565b505060408051808201825260008082526020918201819052825180840184526001600160a01b03948516808352600d845284832054610100900490951681529381526011825291909120549082015290565b8282815181106200112657620011266200387f565b602090810291909101015260010162001080565b50949350505050565b336000908152600e60205260409020546001600160a01b0316806200117b5760405163075fd2b160e01b815260040160405180910390fd5b6001600160a01b038082166000908152600f60209081526040808320938616835292905290812054858203620011b45784915062001211565b84600003620011c7576000915062001211565b6002620011d48762002392565b620011df8762002392565b620011ea8462002392565b620011f6919062003942565b62001202919062003958565b6200120e919062003a6b565b91505b6001600160a01b0383166000908152600d6020908152604080832060109092529091205462001241838562003958565b6200124d908262003942565b82549091506200126e90869061010090046001600160a01b03168362001f20565b6001600160a01b038086166000818152600f60209081526040808320948b168352938152838220889055918152601082528281208490556011909152205488620012b9898362003942565b620012c5919062003958565b6001600160a01b038716600081815260116020526040908190209290925590517f35822de50167c622cbe7675e33a2f5cd6f10d628dec698b6401d2792486cec2990620013159085815260200190565b60405180910390a2505050505050505050565b6000620013346200241e565b905090565b6000620009dd8262002463565b600d6020908152600091825260409182902080548351808501909452600182018054855260028301805460ff808516976001600160a01b0361010087041697600160a81b909604909116959490939290840191620013a49062003a7c565b80601f0160208091040260200160405190810160405280929190818152602001828054620013d29062003a7c565b8015620014235780601f10620013f75761010080835404028352916020019162001423565b820191906000526020600020905b8154815290600101906020018083116200140557829003601f168201915b505050919092525050506003909101546001600160a01b031685565b336200144b81620019bb565b600a829055604080518381523360208201527fdd18fbc43ebc7f26926b0335e04b16bf1a38cbd6eda46bf0e3cf4ef89b061628910160405180910390a15050565b600081806020019051810190620014a4919062003ad2565b9050620014b1836200247a565b8051600c805460208085015161ffff1990921693151561ff00191693909317610100911515919091021790556060820151600580546001600160a01b0319166001600160a01b03928316179055610120830151600a5560408051635ab1bd5360e01b815290517f000000000000000000000000000000000000000000000000000000000000000090921692635ab1bd53926004808401938290030181865afa15801562001562573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001588919062003bb5565b600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b03938416021790556060820151161580620015d6575060808101516001600160a01b0316155b80620015ed575060608101516001600160a01b0316155b8062001604575060408101516001600160a01b0316155b15620016235760405163538ba4f960e01b815260040160405180910390fd5b8061014001516000036200164a57604051637fcce2a960e01b815260040160405180910390fd5b6080810151600680546001600160a01b0319166001600160a01b0392831617905560015460405163068bcd8d60e01b815260048101919091527f00000000000000000000000000000000000000000000000000000000000000009091169063068bcd8d90602401600060405180830381865afa158015620016cf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620016f9919081019062003ca3565b604090810151600780546001600160a01b0319166001600160a01b039283161790556006548251631dce337960e31b8152925191169163ee719bc89160048083019260209291908290030181865afa1580156200175a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001780919062003bb5565b50610140810151600455604080820151600980546001600160a01b0319166001600160a01b03928316179055600754825180840190935260008084526020840152620017d1929116903090620024cd565b600860006101000a8154816001600160a01b0302191690836001600160a01b03160217905550620009928160a001518260c001518360e0015184610100015162001a71565b62001820620018af565b6200182a620018fb565b62001836828262002575565b5050565b336200184681620019bb565b6007546001600160a01b03908116908416036200187657604051637fcce2a960e01b815260040160405180910390fd5b6200099283338462002353565b6200188d620018af565b8060026000828254620018a1919062003942565b9091555062000feb90508181565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620018f95760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003620018f957604051630f68fe6360e21b815260040160405180910390fd5b806200192b81620019bb565b6200193562002724565b6000838060200190518101906200194d919062003d75565b60085460075491925062001971916001600160a01b03908116913091168462002758565b50604051600b82900b81526001600160a01b038416907f9772934ae0adf1472a2378a77824461cb25bc02429d3b2403f4c492a4d1187eb9060200160405180910390a25050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa15801562001a2d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001a539190620038f4565b62000feb5760405163075fd2b160e01b815260040160405180910390fd5b836001600160401b031642118062001a9a5750826001600160401b0316846001600160401b0316115b8062001ab75750816001600160401b0316846001600160401b0316115b8062001ad45750806001600160401b0316826001600160401b0316115b8062001af15750806001600160401b0316836001600160401b0316115b1562001b1057604051637fcce2a960e01b815260040160405180910390fd5b600b80546001600160401b03838116600160c01b90810277ffffffffffffffffffffffffffffffffffffffffffffffff878416600160801b908102919091166001600160801b038a8616600160401b9081026fffffffffffffffffffffffffffffffff199098168d88161797909717161791909117948590556040805186851681529486048416602086015290850483169084015290920490911660608201523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a150505050565b600062001bf56200277b565b600080600062001c18604051806040016040528060008152602001606081525090565b600c5460ff161562001c71578680602001905181019062001c3a919062003d93565b9196509450905062001c4d8587620027c7565b62001c6b5760405163075fd2b160e01b815260040160405180910390fd5b62001ce4565b8680602001905181019062001c87919062003d93565b9095509093506001600160a01b0384161515925090508162001caa578562001cac565b825b945081801562001cc5575062001cc38587620027c7565b155b1562001ce45760405163075fd2b160e01b815260040160405180910390fd5b600c54610100900460ff16801562001d095750602081015151158062001d0957508051155b1562001d285760405163c19e07c560e01b815260040160405180910390fd5b6001600160a01b03841662001d5c5760405163f4a513b960e01b81526001600160a01b038616600482015260240162000ac1565b6001600160a01b038086166000908152600d6020908152604090912080549287166101000274ffffffffffffffffffffffffffffffffffffffff001990931692909217825582516001830190815590830151839190600284019062001dc2908262003e50565b5050600c5460ff16905062001dd8578262001ddb565b60015b815460ff19169015151780825560ff600160a81b90910416600081600681111562001e0a5762001e0a6200348d565b0362001e6e57815460ff60a81b1916600160a81b1782556040516001600160a01b038816907fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc629062001e60908c908c9062003f1c565b60405180910390a262001ee1565b600181600681111562001e855762001e856200348d565b0362001ec857866001600160a01b03167faf5977db3aa7e6fc7d05e21c791ebd214afa76da27c8d8ddc8e4a9f742d7b2368a8a60405162001e6092919062003f1c565b604051637fcce2a960e01b815260040160405180910390fd5b50505050505092915050565b600b54600160c01b90046001600160401b0316421115620018f95760405162b828c960e81b815260040160405180910390fd5b600854604051631b16777760e01b81526001600160a01b0384811660048301526001600160801b038416602483015290911690631b167777906044016020604051808303816000875af115801562001f7c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001fa29190620038f4565b506001600160a01b0383166000818152601060209081526040918290206001600160801b0385169081905591519182527f35822de50167c622cbe7675e33a2f5cd6f10d628dec698b6401d2792486cec29910160405180910390a2505050565b600954604051630d47875d60e41b81526001600160a01b038381166004830152600092839291169063d47875d090602401602060405180830381865afa15801562002051573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002077919062003912565b9050600a5481106200208c5750600192915050565b50600092915050565b6200209f62003021565b6001600160a01b038083166000908152600d6020908152604091829020825160a081018452815460ff80821615158352610100820490961693820193909352939092840191600160a81b90041660068111156200210057620021006200348d565b60068111156200211457620021146200348d565b81526020016001820160405180604001604052908160008201548152602001600182018054620021449062003a7c565b80601f0160208091040260200160405190810160405280929190818152602001828054620021729062003a7c565b8015620021c35780601f106200219757610100808354040283529160200191620021c3565b820191906000526020600020905b815481529060010190602001808311620021a557829003601f168201915b505050919092525050508152600391909101546001600160a01b031660209091015292915050565b6000806000620021fb88620028d5565b91509150816001600160a01b03166339255d5b82836001600160a01b0316635a6c6dbc8c8c8c8c60006001600160401b038111156200223e576200223e6200307a565b6040519080825280601f01601f19166020018201604052801562002269576020820181803683370190505b506040516024016200228095949392919062003f49565b60408051808303601f1901815291815260208201805160e094851b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff909116179052519185901b7fffffffff00000000000000000000000000000000000000000000000000000000168252620022fa93925090899060040162003f93565b6000604051808303816000875af11580156200231a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262002344919081019062003fd5565b50600198975050505050505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601620023855762000992828262002aaa565b6200099283838362002ac7565b70ffffffffffffffffffffffffffffffffff811160071b81811c68ffffffffffffffffff1060061b1781811c64ffffffffff1060051b1781811c62ffffff1060041b1781811c620100000160b5600192831c1b0260121c80830401811c80830401811c80830401811c80830401811c80830401811c80830401811c80830401901c908190048111900390565b600b54600090426001600160401b0390911611801590620024515750600b54600160401b90046001600160401b03164211155b156200245d5750600190565b50600090565b6000620024708262002095565b6040015192915050565b62002484620018af565b60015415620024a65760405163439a74c960e01b815260040160405180910390fd5b80600003620024c857604051637fcce2a960e01b815260040160405180910390fd5b600155565b600080620024db85620028d5565b604051630779d36560e01b81526001600160a01b03888116600483015287811660248301528651151560448301526020870151151560648301529193509083169150630779d365906084016020604051808303816000875af115801562002546573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200256c919062003bb5565b95945050505050565b6200257f62002b17565b6200258a8162002002565b620025a85760405163075fd2b160e01b815260040160405180910390fd5b60008083806020019051810190620025c1919062004022565b6001600160a01b0382166000908152600d60205260409020919350915060028154600160a81b900460ff1660068111156200260057620026006200348d565b14158062002619575060038101546001600160a01b0316155b15620026445760405163f4a513b960e01b81526001600160a01b038416600482015260240162000ac1565b60038101546006546001600160a01b039182169160009182916200266b9116888562002b68565b50509150915080600b0b6000148062002682575081155b15620026a957600654620026a2906001600160a01b031688858862002c0f565b50620026c5565b600654620026c3906001600160a01b031688858862002c32565b505b60065460408051600b88900b81526001600160a01b039283166020820152898316818301529051918816917f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b9181900360600190a25050505050505050565b600b54600160401b90046001600160401b0316421015620018f9576040516317338e1560e31b815260040160405180910390fd5b604080516000808252602082019092526200256c908690869086908690620021eb565b600b54426001600160401b039091161180620027a85750600b54600160401b90046001600160401b031642115b15620018f957604051635b04f6ad60e11b815260040160405180910390fd5b600c5460405163dd93da4360e01b81526001600160a01b0384811660048301526000928392620100009091049091169063dd93da4390602401600060405180830381865afa1580156200281e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200284891908101906200405c565b600c548151604051635e8a791560e01b815260048101919091526001600160a01b0386811660248301529293506201000090910490911690635e8a791590604401602060405180830381865afa158015620028a7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620028cd9190620038f4565b949350505050565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fc36f6c05164a669ecb6da53e218d77ae44d51cfc99f91e5a125a18de0949bee4546001600160a01b03811662002a73576001600160a01b0382166200299f57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801562002976573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200299c919062003bb5565b91505b604051635b69006f60e11b81527fdfd8ece9bfbcb8c5c540edb935641f63d67686490a1ab97f000288759f30a94660048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa15801562002a04573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002a2a919062003bb5565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fc36f6c05164a669ecb6da53e218d77ae44d51cfc99f91e5a125a18de0949bee4555b6001600160a01b03821662002a8c5762002a8c62004131565b6001600160a01b03811662002aa55762002aa562004131565b915091565b60008060008084865af1620018365763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171662002b0d576390b8ec186000526004601cfd5b6000603452505050565b600b5442600160801b9091046001600160401b0316118062002b4a5750600b54600160c01b90046001600160401b031642115b15620018f95760405162b828c960e81b815260040160405180910390fd5b600080600080600062002b7b8862002c55565b604051631cd43d1160e31b81526001600160a01b038b811660048301528a811660248301528981166044830152919350908316915063e6a1e88890606401608060405180830381865afa15801562002bd7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002bfd919062004147565b929b919a509850909650945050505050565b604080516000808252602082019092526200256c90869086908690869062002dc5565b604080516000808252602082019092526200256c90869086908690869062002e18565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b03811662002a73576001600160a01b03821662002d1f57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801562002cf6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002d1c919062003bb5565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa15801562002d84573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002daa919062003bb5565b90506001600160a01b03821662002a8c5762002a8c62004131565b600080600062002dd58862002e6b565b91509150816001600160a01b03166339255d5b82836001600160a01b03166394229ecb8c8c8c8c60006001600160401b038111156200223e576200223e6200307a565b600080600062002e288862002e6b565b91509150816001600160a01b03166339255d5b82836001600160a01b031663354b95908c8c8c8c60006001600160401b038111156200223e576200223e6200307a565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b03811662002a73576001600160a01b03821662002f3557826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801562002f0c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002f32919062003bb5565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa15801562002f9a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002fc0919062003bb5565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a556001600160a01b03821662002a8c5762002a8c62004131565b6040805160a081018252600080825260208201819052909182019081526020016200305f604051806040016040528060008152602001606081525090565b8152600060209091015290565b611c3a806200418783390190565b634e487b7160e01b600052604160045260246000fd5b60405161016081016001600160401b0381118282101715620030b657620030b66200307a565b60405290565b60405160c081016001600160401b0381118282101715620030b657620030b66200307a565b604051601f8201601f191681016001600160401b03811182821017156200310c576200310c6200307a565b604052919050565b60006001600160401b038211156200313057620031306200307a565b5060051b60200190565b6001600160a01b038116811462000feb57600080fd5b600082601f8301126200316257600080fd5b813560206200317b620031758362003114565b620030e1565b82815260059290921b840181019181810190868411156200319b57600080fd5b8286015b84811015620031c3578035620031b5816200313a565b83529183019183016200319f565b509695505050505050565b60006001600160401b03821115620031ea57620031ea6200307a565b50601f01601f191660200190565b600082601f8301126200320a57600080fd5b81356200321b6200317582620031ce565b8181528460208386010111156200323157600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000606084860312156200326457600080fd5b83356001600160401b03808211156200327c57600080fd5b6200328a8783880162003150565b94506020860135915080821115620032a157600080fd5b50620032b086828701620031f8565b9250506040840135620032c3816200313a565b809150509250925092565b600060208284031215620032e157600080fd5b8135620032ee816200313a565b9392505050565b6001600160401b038116811462000feb57600080fd5b600080600080608085870312156200332257600080fd5b84356200332f81620032f5565b935060208501356200334181620032f5565b925060408501356200335381620032f5565b915060608501356200336581620032f5565b939692955090935050565b600080604083850312156200338457600080fd5b823562003391816200313a565b91506020830135620033a3816200313a565b809150509250929050565b60008060408385031215620033c257600080fd5b82356001600160401b03811115620033d957600080fd5b620033e785828601620031f8565b9250506020830135620033a3816200313a565b60008083601f8401126200340d57600080fd5b5081356001600160401b038111156200342557600080fd5b6020830191508360208260051b85010111156200344157600080fd5b9250929050565b600080602083850312156200345c57600080fd5b82356001600160401b038111156200347357600080fd5b6200348185828601620033fa565b90969095509350505050565b634e487b7160e01b600052602160045260246000fd5b60078110620034c257634e487b7160e01b600052602160045260246000fd5b9052565b60005b83811015620034e3578181015183820152602001620034c9565b50506000910152565b6000815180845262003506816020860160208601620034c6565b601f01601f19169290920160200192915050565b805182526000602082015160406020850152620028cd6040850182620034ec565b60208152815115156020820152600060208301516001600160a01b03808216604085015260408501519150620035756060850183620034a3565b6060850151915060a060808501526200359260c08501836200351a565b91508060808601511660a0850152508091505092915050565b60008060008060408587031215620035c257600080fd5b84356001600160401b0380821115620035da57600080fd5b620035e888838901620033fa565b909650945060208701359150808211156200360257600080fd5b506200361187828801620033fa565b95989497509550505050565b600080604083850312156200363157600080fd5b82356001600160401b03808211156200364957600080fd5b620036578683870162003150565b93506020915081850135818111156200366f57600080fd5b8501601f810187136200368157600080fd5b803562003692620031758262003114565b81815260059190911b82018401908481019089831115620036b257600080fd5b8584015b83811015620036ef57803586811115620036d05760008081fd5b620036e08c8983890101620031f8565b845250918601918601620036b6565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156200374d57815180516001600160a01b031685528601518685015292840192908501906001016200371d565b5091979650505050505050565b6000806000606084860312156200377057600080fd5b83359250602084013591506040840135620032c3816200313a565b60208101620009dd8284620034a3565b851515815260006001600160a01b038087166020840152620037c16040840187620034a3565b60a06060840152620037d760a08401866200351a565b91508084166080840152509695505050505050565b600060208284031215620037ff57600080fd5b5035919050565b600080604083850312156200381a57600080fd5b8235915060208301356001600160401b038111156200383857600080fd5b6200384685828601620031f8565b9150509250929050565b600080604083850312156200386457600080fd5b823562003871816200313a565b946020939093013593505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215620038a857600080fd5b813560078110620032ee57600080fd5b60408101620038c88285620034a3565b6001600160a01b03831660208301529392505050565b80518015158114620038ef57600080fd5b919050565b6000602082840312156200390757600080fd5b620032ee82620038de565b6000602082840312156200392557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115620009dd57620009dd6200392c565b81810381811115620009dd57620009dd6200392c565b600181815b80851115620039af5781600019048211156200399357620039936200392c565b80851615620039a157918102915b93841c939080029062003973565b509250929050565b600082620039c857506001620009dd565b81620039d757506000620009dd565b8160018114620039f05760028114620039fb5762003a1b565b6001915050620009dd565b60ff84111562003a0f5762003a0f6200392c565b50506001821b620009dd565b5060208310610133831016604e8410600b841016171562003a40575081810a620009dd565b62003a4c83836200396e565b806000190482111562003a635762003a636200392c565b029392505050565b6000620032ee60ff841683620039b7565b600181811c9082168062003a9157607f821691505b60208210810362003ab257634e487b7160e01b600052602260045260246000fd5b50919050565b8051620038ef816200313a565b8051620038ef81620032f5565b6000610160828403121562003ae657600080fd5b62003af062003090565b62003afb83620038de565b815262003b0b60208401620038de565b602082015262003b1e6040840162003ab8565b604082015262003b316060840162003ab8565b606082015262003b446080840162003ab8565b608082015262003b5760a0840162003ac5565b60a082015262003b6a60c0840162003ac5565b60c082015262003b7d60e0840162003ac5565b60e082015261010062003b9281850162003ac5565b908201526101208381015190820152610140928301519281019290925250919050565b60006020828403121562003bc857600080fd5b8151620032ee816200313a565b600062003be66200317584620031ce565b905082815283838301111562003bfb57600080fd5b620032ee836020830184620034c6565b600082601f83011262003c1d57600080fd5b620032ee8383516020850162003bd5565b60006040828403121562003c4157600080fd5b604051604081016001600160401b03828210818311171562003c675762003c676200307a565b8160405282935084518352602085015191508082111562003c8757600080fd5b5062003c968582860162003c0b565b6020830152505092915050565b60006020828403121562003cb657600080fd5b81516001600160401b038082111562003cce57600080fd5b9083019060c0828603121562003ce357600080fd5b62003ced620030bc565b82518152602083015162003d01816200313a565b6020820152604083015162003d16816200313a565b604082015260608301518281111562003d2e57600080fd5b62003d3c8782860162003c2e565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b8051600b81900b8114620038ef57600080fd5b60006020828403121562003d8857600080fd5b620032ee8262003d62565b60008060006060848603121562003da957600080fd5b835162003db6816200313a565b602085015190935062003dc9816200313a565b60408501519092506001600160401b0381111562003de657600080fd5b62003df48682870162003c2e565b9150509250925092565b601f8211156200099257600081815260208120601f850160051c8101602086101562003e275750805b601f850160051c820191505b8181101562003e485782815560010162003e33565b505050505050565b81516001600160401b0381111562003e6c5762003e6c6200307a565b62003e848162003e7d845462003a7c565b8462003dfe565b602080601f83116001811462003ebc576000841562003ea35750858301515b600019600386901b1c1916600185901b17855562003e48565b600085815260208120601f198616915b8281101562003eed5788860151825594840194600190910190840162003ecc565b508582101562003f0c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60408152600062003f316040830185620034ec565b90506001600160a01b03831660208301529392505050565b60006001600160a01b038088168352808716602084015280861660408401525083600b0b606083015260a0608083015262003f8860a0830184620034ec565b979650505050505050565b6001600160a01b038416815260606020820152600062003fb76060830185620034ec565b828103604084015262003fcb8185620034ec565b9695505050505050565b60006020828403121562003fe857600080fd5b81516001600160401b0381111562003fff57600080fd5b8201601f810184136200401157600080fd5b620028cd8482516020840162003bd5565b600080604083850312156200403657600080fd5b825162004043816200313a565b9150620040536020840162003d62565b90509250929050565b6000602082840312156200406f57600080fd5b81516001600160401b03808211156200408757600080fd5b9083019060c082860312156200409c57600080fd5b620040a6620030bc565b8251815260208301516020820152604083015182811115620040c757600080fd5b620040d58782860162003c0b565b604083015250606083015182811115620040ee57600080fd5b620040fc8782860162003c2e565b606083015250620041106080840162003ab8565b60808201526200412360a0840162003ab8565b60a082015295945050505050565b634e487b7160e01b600052600160045260246000fd5b600080600080608085870312156200415e57600080fd5b84519350620041706020860162003d62565b604086015160609096015194979096509250505056fe60e06040523480156200001157600080fd5b5060405162001c3a38038062001c3a8339810160408190526200003491620001a2565b6001600160a01b038616608052640100000001846200005557640200000000175b836200006357640c00000000175b826200007157643000000000175b6080516001600160a01b031663bd1c448b82846040518363ffffffff1660e01b8152600401620000a3929190620002eb565b600060405180830381600087803b158015620000be57600080fd5b505af1158015620000d3573d6000803e3d6000fd5b5050506001600160a01b0389169050620001005760405163538ba4f960e01b815260040160405180910390fd5b505050506001600160a01b0393841660a05250821660c05250600080546001600160a01b0319169290911691909117905562000327565b6001600160a01b03811681146200014d57600080fd5b50565b805180151581146200016157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001995781810151838201526020016200017f565b50506000910152565b600080600080600080600080610100898b031215620001c057600080fd5b8851620001cd8162000137565b60208a0151909850620001e08162000137565b60408a0151909750620001f38162000137565b60608a0151909650620002068162000137565b94506200021660808a0162000150565b93506200022660a08a0162000150565b92506200023660c08a0162000150565b60e08a01519092506001600160401b03808211156200025457600080fd5b818b0191508b601f8301126200026957600080fd5b8151818111156200027e576200027e62000166565b604051601f8201601f19908116603f01168101908382118183101715620002a957620002a962000166565b816040528281528e6020848701011115620002c357600080fd5b620002d68360208301602088016200017c565b80955050505050509295985092959890939650565b8281526040602082015260008251806040840152620003128160608501602087016200017c565b601f01601f1916919091016060019392505050565b60805160a05160c05161187a620003c060003960008181610125015281816101cf015281816103cf015281816104cb01528181610648015281816108fc01528181610aea01528181610b2601528181610b7c01528181610bca0152610c05015260008181610244015261083201526000818161016401528181610394015281816104900152818161060801526106ce015261187a6000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806366d003ac1161008c5780638c7f0959116100665780638c7f095914610222578063a8c62e761461023f578063bcb4546f14610266578063d86ed3e51461029b57600080fd5b806366d003ac146101ac57806372ca8a3e146101bf578063884d1f401461020f57600080fd5b806349f289dc116100bd57806349f289dc1461015f57806353c11f99146101865780635f9e7d771461019957600080fd5b8063230dbd29146100e457806330d9c9151461010d578063451c3d8014610120575b600080fd5b6100f76100f2366004611335565b6102ae565b6040516101049190611450565b60405180910390f35b6100f761011b36600461146a565b610362565b6101477f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610104565b6101477f000000000000000000000000000000000000000000000000000000000000000081565b6100f7610194366004611335565b610387565b6100f76101a736600461146a565b610483565b600054610147906001600160a01b031681565b6101ff6101cd366004611509565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b6040519015158152602001610104565b6100f761021d36600461146a565b610535565b61022a600081565b60405163ffffffff9091168152602001610104565b6101477f000000000000000000000000000000000000000000000000000000000000000081565b61028d7fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd381565b604051908152602001610104565b6100f76102a9366004611335565b61056c565b60606102b98a6105fd565b6102c289610696565b6103055782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061035592505050565b600061031387890189611526565b50905060006103248688018861156e565b509050600061033d6001600160a01b038e16843061075c565b505091505061034f83838389896107fe565b93505050505b9998505050505050505050565b604080518082019091526002815261060f60f31b60208201525b979650505050505050565b6060336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415806103c757506103c589610696565b155b806103ff57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03908116908b1614155b156104435782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061035592505050565b600061045187890189611526565b50905060006104628688018861159a565b9150506104738282600088886107fe565b9c9b505050505050505050505050565b6060336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415806104c357506104c187610696565b155b806104fb57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811690891614155b1561051f5750604080518082019091526002815261060f60f31b602082015261037c565b61052985856108d9565b98975050505050505050565b6060610540886105fd565b61054987610696565b61051f5750604080518082019091526002815261060f60f31b602082015261037c565b60606105778a6105fd565b61058089610696565b6105c35782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061035592505050565b60006105d187890189611526565b50905060006105ea6001600160a01b038d16833061075c565b50509150506104738260008388886107fe565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461064657604051632f2d36a760e01b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081169082161461069357604051631ea25bab60e31b815260040160405180910390fd5b50565b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b6d200de90602401602060405180830381865afa15801561071d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074191906115bf565b6001600160a01b0316826001600160a01b0316149050919050565b600080600080600061076d88610958565b604051631cd43d1160e31b81526001600160a01b038b811660048301528a811660248301528981166044830152919350908316915063e6a1e88890606401608060405180830381865afa1580156107c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ec91906115dc565b929b919a509850909650945050505050565b604051633417f99360e21b8152600b85810b600483015284900b60248201526001600160a01b0386811660448301526060917f00000000000000000000000000000000000000000000000000000000000000009091169063d05fe64c90606401600060405180830381600087803b15801561087857600080fd5b505af115801561088c573d6000803e3d6000fd5b505050506108cf83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ada92505050565b9695505050505050565b606060006108e983850185611526565b5090506000806109236001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016843061075c565b505060408051600b9290920b602083015281810192909252815180820383018152606090910190915293505050505b92915050565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116610aa9576001600160a01b038216610a1d57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109f6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1a91906115bf565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de906024015b602060405180830381865afa158015610a82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa691906115bf565b90505b6001600160a01b038216610abf57610abf61161a565b6001600160a01b038116610ad557610ad561161a565b915091565b806000610b106001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630610c3a565b6000805491925090610b50906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691309116610d52565b90506000610b5e8284611630565b905080600b0b600003610bae57600054610ba7906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169130911688610dea565b9350610c32565b81600b0b600014610bf457600054610ba7906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168388610f41565b600054610c2f906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168388610fcd565b93505b505050919050565b600080610c4684610958565b9150506000610c548561101b565b60405163e8e7e2d160e01b81526001600160a01b0388811660048301528781166024830152919350600092509084169063e8e7e2d190604401602060405180830381865afa158015610caa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cce9190611675565b60405163e8e7e2d160e01b81526001600160a01b038881166004830152878116602483015291925060009184169063e8e7e2d190604401602060405180830381865afa158015610d22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d469190611675565b905061037c8183611630565b600080610d5e85610958565b604051631cd43d1160e31b81526001600160a01b03888116600483015287811660248301528681166044830152919350908316915063e6a1e88890606401608060405180830381865afa158015610db9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddd91906115dc565b5090979650505050505050565b6060600080610df88761112c565b91509150816001600160a01b0316634329d29382836001600160a01b031663b4b333c68b8b8b600067ffffffffffffffff811115610e3857610e38611692565b6040519080825280601f01601f191660200182016040528015610e62576020820181803683370190505b50604051602401610e7694939291906116a8565b60408051808303601f1901815291815260208201805160e094851b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff909116179052519185901b7fffffffff00000000000000000000000000000000000000000000000000000000168252610eee9392509089906004016116dc565b6000604051808303816000875af1158015610f0d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f3591908101906117ab565b50979650505050505050565b6060600080610f4f8761112c565b91509150816001600160a01b0316634329d29382836001600160a01b03166350209a628b8b8b600067ffffffffffffffff811115610f8f57610f8f611692565b6040519080825280601f01601f191660200182016040528015610fb9576020820181803683370190505b50604051602401610e76949392919061180f565b6060600080610fdb8761112c565b91509150816001600160a01b0316634329d29382836001600160a01b03166362fc305e8b8b8b600067ffffffffffffffff811115610f8f57610f8f611692565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fc36f6c05164a669ecb6da53e218d77ae44d51cfc99f91e5a125a18de0949bee4546001600160a01b038116610aa9576001600160a01b0382166110e057826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110dd91906115bf565b91505b604051635b69006f60e11b81527fdfd8ece9bfbcb8c5c540edb935641f63d67686490a1ab97f000288759f30a94660048201526001600160a01b0383169063b6d200de90602401610a65565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116610aa9576001600160a01b0382166111f157826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ee91906115bf565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015611255573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127991906115bf565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a556001600160a01b038216610abf57610abf61161a565b6001600160a01b038116811461069357600080fd5b60008083601f8401126112fe57600080fd5b50813567ffffffffffffffff81111561131657600080fd5b60208301915083602082850101111561132e57600080fd5b9250929050565b600080600080600080600080600060c08a8c03121561135357600080fd5b893561135e816112d7565b985060208a013561136e816112d7565b975060408a0135965060608a013567ffffffffffffffff8082111561139257600080fd5b61139e8d838e016112ec565b909850965060808c01359150808211156113b757600080fd5b6113c38d838e016112ec565b909650945060a08c01359150808211156113dc57600080fd5b506113e98c828d016112ec565b915080935050809150509295985092959850929598565b60005b8381101561141b578181015183820152602001611403565b50506000910152565b6000815180845261143c816020860160208601611400565b601f01601f19169290920160200192915050565b6020815260006114636020830184611424565b9392505050565b600080600080600080600060a0888a03121561148557600080fd5b8735611490816112d7565b965060208801356114a0816112d7565b955060408801359450606088013567ffffffffffffffff808211156114c457600080fd5b6114d08b838c016112ec565b909650945060808a01359150808211156114e957600080fd5b506114f68a828b016112ec565b989b979a50959850939692959293505050565b60006020828403121561151b57600080fd5b8135611463816112d7565b6000806040838503121561153957600080fd5b8235611544816112d7565b91506020830135611554816112d7565b809150509250929050565b80600b0b811461069357600080fd5b6000806040838503121561158157600080fd5b823561158c8161155f565b946020939093013593505050565b600080604083850312156115ad57600080fd5b8235915060208301356115548161155f565b6000602082840312156115d157600080fd5b8151611463816112d7565b600080600080608085870312156115f257600080fd5b8451935060208501516116048161155f565b6040860151606090960151949790965092505050565b634e487b7160e01b600052600160045260246000fd5b600b81810b9083900b016b7fffffffffffffffffffffff81136b7fffffffffffffffffffffff198212171561095257634e487b7160e01b600052601160045260246000fd5b60006020828403121561168757600080fd5b81516114638161155f565b634e487b7160e01b600052604160045260246000fd5b60006001600160a01b0380871683528086166020840152808516604084015250608060608301526108cf6080830184611424565b6001600160a01b03841681526080602082015260006116fe6080830185611424565b8281038060408501526002825261060f60f31b6020830152604081016060850152506108cf6040820185611424565b600082601f83011261173e57600080fd5b815167ffffffffffffffff8082111561175957611759611692565b604051601f8301601f19908116603f0116810190828211818310171561178157611781611692565b8160405283815286602085880101111561179a57600080fd5b6108cf846020830160208901611400565b600080604083850312156117be57600080fd5b825167ffffffffffffffff808211156117d657600080fd5b6117e28683870161172d565b935060208501519150808211156117f857600080fd5b506118058582860161172d565b9150509250929050565b60006001600160a01b03808716835280861660208401525083600b0b6040830152608060608301526108cf608083018461142456fea2646970667358221220b846d688abcc0d7f276da75c6fd3d2c38108085045c2f487c941236abc2d064e64736f6c63430008130033a26469706673582212200caade644e8a3c1b4cf21156da6b2248f5981538dca3ee5912a2faa308f2653364736f6c63430008130033";
