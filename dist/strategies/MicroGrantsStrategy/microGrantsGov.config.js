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
        name: "AMOUNT_TOO_LOW",
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
        name: "EXCEEDING_MAX_AMOUNT",
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
                indexed: false,
                internalType: "uint256",
                name: "approvalThreshold",
                type: "uint256",
            },
        ],
        name: "ApprovalThresholdUpdated",
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
                name: "maxRequestedAmount",
                type: "uint256",
            },
        ],
        name: "MaxRequestedAmountIncreased",
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
        name: "allocated",
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
        name: "approvalThreshold",
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
                        internalType: "uint256",
                        name: "requestedAmount",
                        type: "uint256",
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
                ],
                internalType: "struct MicroGrantsBaseStrategy.Recipient",
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
        inputs: [],
        name: "gov",
        outputs: [
            {
                internalType: "contract UniversalGov",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "govType",
        outputs: [
            {
                internalType: "enum MicroGrantsGovStrategy.GovType",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_maxRequestedAmount",
                type: "uint256",
            },
        ],
        name: "increaseMaxRequestedAmount",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "maxRequestedAmount",
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
        name: "minVotePower",
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
            {
                internalType: "enum IStrategy.Status",
                name: "",
                type: "uint8",
            },
        ],
        name: "recipientAllocations",
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
        inputs: [
            {
                internalType: "uint256",
                name: "_approvalThreshold",
                type: "uint256",
            },
        ],
        name: "setApprovalThreshold",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "snapshotReference",
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
exports.bytecode = "0x60c06040523480156200001157600080fd5b506040516200288d3803806200288d8339810160408190526200003491620000c5565b6001600160a01b03821660805260405182908290829082906200005c908290602001620001a0565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001d592505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000bc578181015183820152602001620000a2565b50506000910152565b60008060408385031215620000d957600080fd5b82516001600160a01b0381168114620000f157600080fd5b60208401519092506001600160401b03808211156200010f57600080fd5b818501915085601f8301126200012457600080fd5b81518181111562000139576200013962000089565b604051601f8201601f19908116603f0116810190838211818310171562000164576200016462000089565b816040528281528860208487010111156200017e57600080fd5b620001918360208301602088016200009f565b80955050505050509250929050565b6020815260008251806020840152620001c18160408501602087016200009f565b601f01601f19169190910160400192915050565b60805160a05161267662000217600039600061033801526000818161024b01528181610a3401528181610ef0015281816113b8015261166b01526126766000f3fe6080604052600436106101d15760003560e01c80636f46ffb9116100f7578063ba539f8f11610095578063eb11af9311610064578063eb11af931461059b578063edd146cc146105c8578063ef2920fc146105e8578063f5b0dfb7146105fb57600080fd5b8063ba539f8f14610529578063bfa807311461053f578063d2e17f591461055f578063df868ed31461058657600080fd5b806399557126116100d1578063995571261461049e578063a0016b8c146104b4578063a0cf0aea146104d4578063b2b878d0146104fc57600080fd5b80636f46ffb91461043057806375777aaa146104685780637d0eef611461048857600080fd5b806341065f7a1161016f5780634d31d0871161013e5780634d31d087146103a957806351cff8d9146103c957806357089739146103e957806362812a391461040357600080fd5b806341065f7a1461031357806342fda9c7146103295780634533d6781461035c5780634ab4ba421461039457600080fd5b80632b302cbd116101ab5780632b302cbd1461026f5780632bbe0cae146102ba57806336f2e56b146102cd57806338fff2d0146102f457600080fd5b80630a6f0ee9146101dd57806312d43a51146101ff57806315cc481e1461023c57600080fd5b366101d857005b600080fd5b3480156101e957600080fd5b506101fd6101f8366004611be3565b61061b565b005b34801561020b57600080fd5b50600b5461021f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561024857600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061021f565b34801561027b57600080fd5b506102aa61028a366004611c5a565b600960209081526000928352604080842090915290825290205460ff1681565b6040519015158152602001610233565b61021f6102c8366004611c93565b61063b565b3480156102d957600080fd5b50600e546102e79060ff1681565b6040516102339190611cef565b34801561030057600080fd5b506001545b604051908152602001610233565b34801561031f57600080fd5b50610305600c5481565b34801561033557600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610305565b34801561036857600080fd5b5060055461037c906001600160401b031681565b6040516001600160401b039091168152602001610233565b3480156103a057600080fd5b50600254610305565b3480156103b557600080fd5b506102aa6103c4366004611d09565b610660565b3480156103d557600080fd5b506101fd6103e4366004611d09565b61066b565b3480156103f557600080fd5b506004546102aa9060ff1681565b34801561040f57600080fd5b5061042361041e366004611d09565b610696565b6040516102339190611d91565b34801561043c57600080fd5b5061030561044b366004611e08565b600a60209081526000928352604080842090915290825290205481565b34801561047457600080fd5b506101fd610483366004611e4b565b6106a7565b34801561049457600080fd5b5061030560075481565b3480156104aa57600080fd5b50610305600d5481565b3480156104c057600080fd5b506101fd6104cf366004611e79565b6106bb565b3480156104e057600080fd5b5061021f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561050857600080fd5b5061051c610517366004611e92565b6106d2565b6040516102339190611f66565b34801561053557600080fd5b5061030560065481565b34801561054b57600080fd5b506101fd61055a366004611e79565b6107d0565b34801561056b57600080fd5b5060045461037c90600160a81b90046001600160401b031681565b34801561059257600080fd5b506102aa6107e3565b3480156105a757600080fd5b506105bb6105b6366004611d09565b6107f2565b6040516102339190611fbe565b3480156105d457600080fd5b506101fd6105e3366004611fcc565b6107fd565b6101fd6105f6366004611c93565b6109db565b34801561060757600080fd5b506101fd610616366004611e79565b6109ff565b610623610a29565b61062b610a74565b610636838383610a97565b505050565b6000610645610a29565b61064d610a74565b6106578383610a9f565b90505b92915050565b600061065a82610d74565b3361067581610ec6565b61067d610f78565b60006106898330610f9c565b9050610636833383610fe5565b61069e611a08565b61065a8261101f565b336106b181610ec6565b610636838361119b565b336106c581610ec6565b6106ce82611234565b5050565b815181516060919081146106f957604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b0381111561071357610713611a51565b60405190808252806020026020018201604052801561075857816020015b60408051808201909152600080825260208201528152602001906001900390816107315790505b50905060005b828110156107c7576107a286828151811061077b5761077b612012565b602002602001015186838151811061079557610795612012565b6020026020010151611270565b8282815181106107b4576107b4612012565b602090810291909101015260010161075e565b50949350505050565b336107da81610ec6565b6106ce826112de565b60006107ed611336565b905090565b600061065a82611375565b600080600080848060200190518101906108179190612043565b9350935093509350610829868561138a565b60405163782d6fe160e01b81526104d26004820152600060248201526001600160a01b0384169063782d6fe190604401602060405180830381865afa925050508015610892575060408051601f3d908101601f1916820190925261088f918101906120f8565b60015b61092f57604051630748d63560e31b81526104d26004820152600060248201526001600160a01b03841690633a46b1a890604401602060405180830381865afa9250505080156108ff575060408051601f3d908101601f191682019092526108fc91810190612126565b60015b61091c57604051635963709b60e01b815260040160405180910390fd5b50600e805460ff1916600217905561093e565b50600e805460ff191660011790555b600b805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038516179055811580610971575080155b1561098f57604051637fcce2a960e01b815260040160405180910390fd5b600c829055600d8190556040517f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a906109cb908890889061213f565b60405180910390a1505050505050565b6109e3610a29565b6109eb610a74565b6109f5828261147f565b6106ce82826114a5565b610a07610a29565b8060026000828254610a19919061216e565b90915550610a2690508181565b50565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a725760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003610a7257604051630f68fe6360e21b815260040160405180910390fd5b610636612181565b6000806000806000610ac4604051806040016040528060008152602001606081525090565b87806020019051810190610ad8919061224a565b600454929750929550935090915060ff1680610afc57506001600160a01b03831615155b945084610b095786610b0b565b825b9550848015610b215750610b1f8688611789565b155b15610b3f5760405163075fd2b160e01b815260040160405180910390fd5b6020810151511580610b5057508051155b15610b6e5760405163c19e07c560e01b815260040160405180910390fd5b600654821115610b91576040516351c7ab5160e01b815260040160405180910390fd5b81600003610b9f5760065491505b6001600160a01b038416610bd65760405163f4a513b960e01b81526001600160a01b03871660048201526024015b60405180910390fd5b6001600160a01b0386166000908152600860209081526040808320600a83528184206002855290925290912054151580610c3357506001600160a01b0387166000908152600a602090815260408083206003845290915290205415155b15610c515760405163075fd2b160e01b815260040160405180910390fd5b6000600282015460ff166006811115610c6c57610c6c611cd9565b03610cb957866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc628a8a604051610cac9291906122b7565b60405180910390a2610cfd565b866001600160a01b03167faf5977db3aa7e6fc7d05e21c791ebd214afa76da27c8d8ddc8e4a9f742d7b2368a8a604051610cf49291906122b7565b60405180910390a25b805474ffffffffffffffffffffffffffffffffffffffffff19166101006001600160a01b0387160260ff1916178615151781556001810183905581516003820190815560208301518391906004840190610d57908261236a565b505050600201805460ff1916600117905550939695505050505050565b6000806001600e5460ff166002811115610d9057610d90611cd9565b03610e2257600b54600c5460405163782d6fe160e01b81526001600160a01b038681166004830152602482019290925291169063782d6fe190604401602060405180830381865afa158015610de9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0d91906120f8565b6bffffffffffffffffffffffff169050610ebb565b6002600e5460ff166002811115610e3b57610e3b611cd9565b03610ebb57600b54600c54604051630748d63560e31b81526001600160a01b0386811660048301526024820192909252911690633a46b1a890604401602060405180830381865afa158015610e94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb89190612126565b90505b600d54111592915050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610f37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5b9190612429565b610a265760405163075fd2b160e01b815260040160405180910390fd5b60005460ff1615610a7257604051630b18626760e41b815260040160405180910390fd5b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610fd457506001600160a01b0381163161065a565b610fde838361188b565b905061065a565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016110145761063682826118c0565b6106368383836118dc565b611027611a08565b6001600160a01b03808316600090815260086020908152604091829020825160a081018452815460ff808216151583526101009091049095169281019290925260018101549282019290925260028201549092606084019116600681111561109157611091611cd9565b60068111156110a2576110a2611cd9565b815260200160038201604051806040016040529081600082015481526020016001820180546110d0906122e2565b80601f01602080910402602001604051908101604052809291908181526020018280546110fc906122e2565b80156111495780601f1061111e57610100808354040283529160200191611149565b820191906000526020600020905b81548152906001019060200180831161112c57829003601f168201915b505050919092525050509052506005549091506001600160401b031642118015611189575060028160600151600681111561118657611186611cd9565b14155b1561119657600360608201525b919050565b6111a5828261192b565b600480546001600160401b03848116600160a81b90810267ffffffffffffffff60a81b1990931692909217928390556005805485831667ffffffffffffffff199091168117909155604080519390940490911682526020820152338183015290517f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d933599181900360600190a15050565b60078190556040518181527f3105a3dc553e12034caac9827a83c245fe17eef4ee1eedb45238ac7449a5bbec906020015b60405180910390a150565b6040805180820190915260008082526020820152600061128f8461101f565b60408101519091506002826060015160068111156112af576112af611cd9565b036112b8575060005b604080518082019091526020928301516001600160a01b03168152918201529392505050565b60065481101561130157604051631f2d84f160e31b815260040160405180910390fd5b60068190556040518181527fbcd4e1b1c11d47ad4c6c51ad73d8e77d29313bc1a491330186316a74a1f995f490602001611265565b60045460009042600160a81b9091046001600160401b0316118061136457506005546001600160401b031642115b1561136f5750600090565b50600190565b60006113808261101f565b6060015192915050565b61139382611971565b80516004805460ff191691151591909117815560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd53928082019260209290918290030181865afa158015611409573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142d9190612444565b600460016101000a8154816001600160a01b0302191690836001600160a01b031602179055506114658160200151826040015161119b565b61147281608001516112de565b6106ce8160600151611234565b61148881610d74565b6106ce5760405163075fd2b160e01b815260040160405180910390fd5b6114ad6119c0565b600080838060200190518101906114c49190612461565b6001600160a01b038083166000818152600860209081526040808320948a1683526009825280832093835292905220549294509092509060ff1680611520575060028082015460ff16600681111561151e5761151e611cd9565b145b156115495760405163f4a513b960e01b81526001600160a01b0384166004820152602401610bcd565b6001600160a01b0380851660009081526009602090815260408083209387168352928152828220805460ff19166001908117909155600a9091529181209084600681111561159957611599611cd9565b60068111156115aa576115aa611cd9565b815260200190815260200160002060008282546115c7919061216e565b92505081905550826001600160a01b03167fb735720d94de3d169791e2f713cbac8da02eb4d5a344d5a6d5ef542fdf3b24388386604051611609929190612490565b60405180910390a26007546001600160a01b0384166000908152600a602090815260408083206002845290915290205403611782576002818101805460ff1916909117905560015460405163068bcd8d60e01b815260048101919091526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063068bcd8d90602401600060405180830381865afa1580156116ba573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526116e291908101906124b4565b905060008260010154905080600260008282546116ff9190612567565b909155505060408201518354611724919061010090046001600160a01b031683610fe5565b82546001840154604080516001600160a01b036101009094048416815260208101929092528883168282015251918716917fb5b51454adfa840bd593658325a60a50b0216f12eb5d2937efe6cea935675b7d9181900360600190a250505b5050505050565b6004805460405163dd93da4360e01b81526001600160a01b038581169382019390935260009283926101009004169063dd93da4390602401600060405180830381865afa1580156117de573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611806919081019061257a565b600480548251604051635e8a791560e01b8152928301526001600160a01b038681166024840152929350610100900490911690635e8a791590604401602060405180830381865afa15801561185f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118839190612429565b949350505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af16106ce5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611921576390b8ec186000526004601cfd5b6000603452505050565b816001600160401b03164211806119535750806001600160401b0316826001600160401b0316115b156106ce57604051637fcce2a960e01b815260040160405180910390fd5b611979610a29565b6001541561199a5760405163439a74c960e01b815260040160405180910390fd5b806000036119bb57604051637fcce2a960e01b815260040160405180910390fd5b600155565b60045442600160a81b9091046001600160401b031611806119eb57506005546001600160401b031642115b15610a725760405162b828c960e81b815260040160405180910390fd5b6040805160a0810182526000808252602082018190529181018290529060608201908152602001611a4c604051806040016040528060008152602001606081525090565b905290565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715611a8957611a89611a51565b60405290565b604051601f8201601f191681016001600160401b0381118282101715611ab757611ab7611a51565b604052919050565b60006001600160401b03821115611ad857611ad8611a51565b5060051b60200190565b6001600160a01b0381168114610a2657600080fd5b600082601f830112611b0857600080fd5b81356020611b1d611b1883611abf565b611a8f565b82815260059290921b84018101918181019086841115611b3c57600080fd5b8286015b84811015611b60578035611b5381611ae2565b8352918301918301611b40565b509695505050505050565b60006001600160401b03821115611b8457611b84611a51565b50601f01601f191660200190565b600082601f830112611ba357600080fd5b8135611bb1611b1882611b6b565b818152846020838601011115611bc657600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215611bf857600080fd5b83356001600160401b0380821115611c0f57600080fd5b611c1b87838801611af7565b94506020860135915080821115611c3157600080fd5b50611c3e86828701611b92565b9250506040840135611c4f81611ae2565b809150509250925092565b60008060408385031215611c6d57600080fd5b8235611c7881611ae2565b91506020830135611c8881611ae2565b809150509250929050565b60008060408385031215611ca657600080fd5b82356001600160401b03811115611cbc57600080fd5b611cc885828601611b92565b9250506020830135611c8881611ae2565b634e487b7160e01b600052602160045260246000fd5b6020810160038310611d0357611d03611cd9565b91905290565b600060208284031215611d1b57600080fd5b8135611d2681611ae2565b9392505050565b60078110611d3d57611d3d611cd9565b9052565b60005b83811015611d5c578181015183820152602001611d44565b50506000910152565b60008151808452611d7d816020860160208601611d41565b601f01601f19169290920160200192915050565b602081528151151560208201526001600160a01b0360208301511660408201526040820151606082015260006060830151611dcf6080840182611d2d565b50608083015160a083810152805160c084015260200151604060e0840152611883610100840182611d65565b60078110610a2657600080fd5b60008060408385031215611e1b57600080fd5b8235611e2681611ae2565b91506020830135611c8881611dfb565b6001600160401b0381168114610a2657600080fd5b60008060408385031215611e5e57600080fd5b8235611e6981611e36565b91506020830135611c8881611e36565b600060208284031215611e8b57600080fd5b5035919050565b60008060408385031215611ea557600080fd5b82356001600160401b0380821115611ebc57600080fd5b611ec886838701611af7565b9350602091508185013581811115611edf57600080fd5b8501601f81018713611ef057600080fd5b8035611efe611b1882611abf565b81815260059190911b82018401908481019089831115611f1d57600080fd5b8584015b83811015611f5557803586811115611f395760008081fd5b611f478c8983890101611b92565b845250918601918601611f21565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015611fb157815180516001600160a01b03168552860151868501529284019290850190600101611f83565b5091979650505050505050565b6020810161065a8284611d2d565b60008060408385031215611fdf57600080fd5b8235915060208301356001600160401b03811115611ffc57600080fd5b61200885828601611b92565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b8051801515811461119657600080fd5b805161119681611ae2565b60008060008084860361010081121561205b57600080fd5b60a081121561206957600080fd5b5060405160a081018181106001600160401b038211171561208c5761208c611a51565b60405261209886612028565b815260208601516120a881611e36565b602082015260408601516120bb81611e36565b6040820152606086810151908201526080808701519082015293506120e260a08601612038565b60c086015160e090960151949790965092505050565b60006020828403121561210a57600080fd5b81516bffffffffffffffffffffffff81168114611d2657600080fd5b60006020828403121561213857600080fd5b5051919050565b8281526040602082015260006118836040830184611d65565b634e487b7160e01b600052601160045260246000fd5b8082018082111561065a5761065a612158565b634e487b7160e01b600052600160045260246000fd5b600082601f8301126121a857600080fd5b81516121b6611b1882611b6b565b8181528460208386010111156121cb57600080fd5b611883826020830160208701611d41565b6000604082840312156121ee57600080fd5b604051604081016001600160401b03828210818311171561221157612211611a51565b8160405282935084518352602085015191508082111561223057600080fd5b5061223d85828601612197565b6020830152505092915050565b6000806000806080858703121561226057600080fd5b845161226b81611ae2565b602086015190945061227c81611ae2565b6040860151606087015191945092506001600160401b0381111561229f57600080fd5b6122ab878288016121dc565b91505092959194509250565b6040815260006122ca6040830185611d65565b90506001600160a01b03831660208301529392505050565b600181811c908216806122f657607f821691505b60208210810361231657634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561063657600081815260208120601f850160051c810160208610156123435750805b601f850160051c820191505b818110156123625782815560010161234f565b505050505050565b81516001600160401b0381111561238357612383611a51565b6123978161239184546122e2565b8461231c565b602080601f8311600181146123cc57600084156123b45750858301515b600019600386901b1c1916600185901b178555612362565b600085815260208120601f198616915b828110156123fb578886015182559484019460019091019084016123dc565b50858210156124195787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561243b57600080fd5b611d2682612028565b60006020828403121561245657600080fd5b8151611d2681611ae2565b6000806040838503121561247457600080fd5b825161247f81611ae2565b6020840151909250611c8881611dfb565b6040810161249e8285611d2d565b6001600160a01b03831660208301529392505050565b6000602082840312156124c657600080fd5b81516001600160401b03808211156124dd57600080fd5b9083019060c082860312156124f157600080fd5b6124f9611a67565b82518152602083015161250b81611ae2565b6020820152604083015161251e81611ae2565b604082015260608301518281111561253557600080fd5b612541878286016121dc565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b8181038181111561065a5761065a612158565b60006020828403121561258c57600080fd5b81516001600160401b03808211156125a357600080fd5b9083019060c082860312156125b757600080fd5b6125bf611a67565b82518152602083015160208201526040830151828111156125df57600080fd5b6125eb87828601612197565b60408301525060608301518281111561260357600080fd5b61260f878286016121dc565b60608301525061262160808401612038565b608082015261263260a08401612038565b60a08201529594505050505056fea26469706673582212203f674fd499ffd882ef299da4511d92e01f7a3658257577ad2c2d4cba2c28596a64736f6c63430008130033";
