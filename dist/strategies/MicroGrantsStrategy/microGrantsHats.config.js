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
        name: "HATS_PROTOCOL",
        outputs: [
            {
                internalType: "contract IHats",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
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
        name: "hatId",
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
exports.bytecode = "0x60c06040523480156200001157600080fd5b50604051620025fb380380620025fb8339810160408190526200003491620000c5565b6001600160a01b03821660805260405182908290829082906200005c908290602001620001a0565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001d592505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000bc578181015183820152602001620000a2565b50506000910152565b60008060408385031215620000d957600080fd5b82516001600160a01b0381168114620000f157600080fd5b60208401519092506001600160401b03808211156200010f57600080fd5b818501915085601f8301126200012457600080fd5b81518181111562000139576200013962000089565b604051601f8201601f19908116603f0116810190838211818310171562000164576200016462000089565b816040528281528860208487010111156200017e57600080fd5b620001918360208301602088016200009f565b80955050505050509250929050565b6020815260008251806020840152620001c18160408501602087016200009f565b601f01601f19169190910160400192915050565b60805160a0516123e46200021760003960006102db015260008181610221015281816108c101528181610cb40152818161117c015261142f01526123e46000f3fe6080604052600436106101bb5760003560e01c806375777aaa116100ec578063d2e17f591161008a578063edd146cc11610064578063edd146cc14610555578063ef2920fc14610575578063f5b0dfb714610588578063fd4bd2c6146105a857600080fd5b8063d2e17f59146104ec578063df868ed314610513578063eb11af931461052857600080fd5b8063a0cf0aea116100c6578063a0cf0aea14610461578063b2b878d014610489578063ba539f8f146104b6578063bfa80731146104cc57600080fd5b806375777aaa1461040b5780637d0eef611461042b578063a0016b8c1461044157600080fd5b80634533d6781161015957806351cff8d91161013357806351cff8d91461036c578063570897391461038c57806362812a39146103a65780636f46ffb9146103d357600080fd5b80634533d678146102ff5780634ab4ba42146103375780634d31d0871461034c57600080fd5b80632b302cbd116101955780632b302cbd146102595780632bbe0cae146102a457806338fff2d0146102b757806342fda9c7146102cc57600080fd5b806307ace2b5146101c75780630a6f0ee9146101f057806315cc481e1461021257600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101dd600c5481565b6040519081526020015b60405180910390f35b3480156101fc57600080fd5b5061021061020b3660046119a7565b6105c8565b005b34801561021e57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020016101e7565b34801561026557600080fd5b50610294610274366004611a1e565b600960209081526000928352604080842090915290825290205460ff1681565b60405190151581526020016101e7565b6102416102b2366004611a57565b6105e8565b3480156102c357600080fd5b506001546101dd565b3480156102d857600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101dd565b34801561030b57600080fd5b5060055461031f906001600160401b031681565b6040516001600160401b0390911681526020016101e7565b34801561034357600080fd5b506002546101dd565b34801561035857600080fd5b50610294610367366004611a9d565b61060d565b34801561037857600080fd5b50610210610387366004611a9d565b610618565b34801561039857600080fd5b506004546102949060ff1681565b3480156103b257600080fd5b506103c66103c1366004611a9d565b610643565b6040516101e79190611b49565b3480156103df57600080fd5b506101dd6103ee366004611bc0565b600a60209081526000928352604080842090915290825290205481565b34801561041757600080fd5b50610210610426366004611c03565b610654565b34801561043757600080fd5b506101dd60075481565b34801561044d57600080fd5b5061021061045c366004611c31565b610668565b34801561046d57600080fd5b5061024173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561049557600080fd5b506104a96104a4366004611c4a565b61067f565b6040516101e79190611d1e565b3480156104c257600080fd5b506101dd60065481565b3480156104d857600080fd5b506102106104e7366004611c31565b61077d565b3480156104f857600080fd5b5060045461031f90600160a81b90046001600160401b031681565b34801561051f57600080fd5b50610294610790565b34801561053457600080fd5b50610548610543366004611a9d565b61079f565b6040516101e79190611d76565b34801561056157600080fd5b50610210610570366004611d84565b6107aa565b610210610583366004611a57565b610868565b34801561059457600080fd5b506102106105a3366004611c31565b61088c565b3480156105b457600080fd5b50600b54610241906001600160a01b031681565b6105d06108b6565b6105d8610901565b6105e3838383610924565b505050565b60006105f26108b6565b6105fa610901565b610604838361092c565b90505b92915050565b600061060782610c01565b3361062281610c8a565b61062a610d3c565b60006106368330610d60565b90506105e3833383610da9565b61064b6117cc565b61060782610de3565b3361065e81610c8a565b6105e38383610f5f565b3361067281610c8a565b61067b82610ff8565b5050565b815181516060919081146106a657604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b038111156106c0576106c0611815565b60405190808252806020026020018201604052801561070557816020015b60408051808201909152600080825260208201528152602001906001900390816106de5790505b50905060005b828110156107745761074f86828151811061072857610728611dca565b602002602001015186838151811061074257610742611dca565b6020026020010151611034565b82828151811061076157610761611dca565b602090810291909101015260010161070b565b50949350505050565b3361078781610c8a565b61067b826110a2565b600061079a6110fa565b905090565b600061060782611139565b6000806000838060200190518101906107c39190611df0565b9250925092506107d3858461114e565b6001600160a01b0382166107fa5760405163538ba4f960e01b815260040160405180910390fd5b600b805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416179055600c8190556040517f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a906108599087908790611ea2565b60405180910390a15050505050565b6108706108b6565b610878610901565b6108828282611243565b61067b8282611269565b6108946108b6565b80600260008282546108a69190611ed1565b909155506108b390508181565b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108ff5760405163075fd2b160e01b815260040160405180910390fd5b565b6001546000036108ff57604051630f68fe6360e21b815260040160405180910390fd5b6105e3611ee4565b6000806000806000610951604051806040016040528060008152602001606081525090565b878060200190518101906109659190611fad565b600454929750929550935090915060ff168061098957506001600160a01b03831615155b9450846109965786610998565b825b95508480156109ae57506109ac868861154d565b155b156109cc5760405163075fd2b160e01b815260040160405180910390fd5b60208101515115806109dd57508051155b156109fb5760405163c19e07c560e01b815260040160405180910390fd5b600654821115610a1e576040516351c7ab5160e01b815260040160405180910390fd5b81600003610a2c5760065491505b6001600160a01b038416610a635760405163f4a513b960e01b81526001600160a01b03871660048201526024015b60405180910390fd5b6001600160a01b0386166000908152600860209081526040808320600a83528184206002855290925290912054151580610ac057506001600160a01b0387166000908152600a602090815260408083206003845290915290205415155b15610ade5760405163075fd2b160e01b815260040160405180910390fd5b6000600282015460ff166006811115610af957610af9611ac1565b03610b4657866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc628a8a604051610b3992919061201a565b60405180910390a2610b8a565b866001600160a01b03167faf5977db3aa7e6fc7d05e21c791ebd214afa76da27c8d8ddc8e4a9f742d7b2368a8a604051610b8192919061201a565b60405180910390a25b805474ffffffffffffffffffffffffffffffffffffffffff19166101006001600160a01b0387160260ff1916178615151781556001810183905581516003820190815560208301518391906004840190610be490826120cd565b505050600201805460ff1916600117905550939695505050505050565b600b54600c546040516321a9204d60e11b81526000926001600160a01b031691634352409a91610c499186916004016001600160a01b03929092168252602082015260400190565b602060405180830381865afa158015610c66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610607919061218c565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610cfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1f919061218c565b6108b35760405163075fd2b160e01b815260040160405180910390fd5b60005460ff16156108ff57604051630b18626760e41b815260040160405180910390fd5b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610d9857506001600160a01b03811631610607565b610da2838361164f565b9050610607565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610dd8576105e38282611684565b6105e38383836116a0565b610deb6117cc565b6001600160a01b03808316600090815260086020908152604091829020825160a081018452815460ff8082161515835261010090910490951692810192909252600181015492820192909252600282015490926060840191166006811115610e5557610e55611ac1565b6006811115610e6657610e66611ac1565b81526020016003820160405180604001604052908160008201548152602001600182018054610e9490612045565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec090612045565b8015610f0d5780601f10610ee257610100808354040283529160200191610f0d565b820191906000526020600020905b815481529060010190602001808311610ef057829003601f168201915b505050919092525050509052506005549091506001600160401b031642118015610f4d5750600281606001516006811115610f4a57610f4a611ac1565b14155b15610f5a57600360608201525b919050565b610f6982826116ef565b600480546001600160401b03848116600160a81b90810267ffffffffffffffff60a81b1990931692909217928390556005805485831667ffffffffffffffff199091168117909155604080519390940490911682526020820152338183015290517f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d933599181900360600190a15050565b60078190556040518181527f3105a3dc553e12034caac9827a83c245fe17eef4ee1eedb45238ac7449a5bbec906020015b60405180910390a150565b6040805180820190915260008082526020820152600061105384610de3565b604081015190915060028260600151600681111561107357611073611ac1565b0361107c575060005b604080518082019091526020928301516001600160a01b03168152918201529392505050565b6006548110156110c557604051631f2d84f160e31b815260040160405180910390fd5b60068190556040518181527fbcd4e1b1c11d47ad4c6c51ad73d8e77d29313bc1a491330186316a74a1f995f490602001611029565b60045460009042600160a81b9091046001600160401b0316118061112857506005546001600160401b031642115b156111335750600090565b50600190565b600061114482610de3565b6060015192915050565b61115782611735565b80516004805460ff191691151591909117815560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd53928082019260209290918290030181865afa1580156111cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f191906121a7565b600460016101000a8154816001600160a01b0302191690836001600160a01b0316021790555061122981602001518260400151610f5f565b61123681608001516110a2565b61067b8160600151610ff8565b61124c81610c01565b61067b5760405163075fd2b160e01b815260040160405180910390fd5b611271611784565b6000808380602001905181019061128891906121c4565b6001600160a01b038083166000818152600860209081526040808320948a1683526009825280832093835292905220549294509092509060ff16806112e4575060028082015460ff1660068111156112e2576112e2611ac1565b145b1561130d5760405163f4a513b960e01b81526001600160a01b0384166004820152602401610a5a565b6001600160a01b0380851660009081526009602090815260408083209387168352928152828220805460ff19166001908117909155600a9091529181209084600681111561135d5761135d611ac1565b600681111561136e5761136e611ac1565b8152602001908152602001600020600082825461138b9190611ed1565b92505081905550826001600160a01b03167fb735720d94de3d169791e2f713cbac8da02eb4d5a344d5a6d5ef542fdf3b243883866040516113cd9291906121f3565b60405180910390a26007546001600160a01b0384166000908152600a602090815260408083206002845290915290205403611546576002818101805460ff1916909117905560015460405163068bcd8d60e01b815260048101919091526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063068bcd8d90602401600060405180830381865afa15801561147e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114a69190810190612222565b905060008260010154905080600260008282546114c391906122d5565b9091555050604082015183546114e8919061010090046001600160a01b031683610da9565b82546001840154604080516001600160a01b036101009094048416815260208101929092528883168282015251918716917fb5b51454adfa840bd593658325a60a50b0216f12eb5d2937efe6cea935675b7d9181900360600190a250505b5050505050565b6004805460405163dd93da4360e01b81526001600160a01b038581169382019390935260009283926101009004169063dd93da4390602401600060405180830381865afa1580156115a2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115ca91908101906122e8565b600480548251604051635e8a791560e01b8152928301526001600160a01b038681166024840152929350610100900490911690635e8a791590604401602060405180830381865afa158015611623573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611647919061218c565b949350505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af161067b5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166116e5576390b8ec186000526004601cfd5b6000603452505050565b816001600160401b03164211806117175750806001600160401b0316826001600160401b0316115b1561067b57604051637fcce2a960e01b815260040160405180910390fd5b61173d6108b6565b6001541561175e5760405163439a74c960e01b815260040160405180910390fd5b8060000361177f57604051637fcce2a960e01b815260040160405180910390fd5b600155565b60045442600160a81b9091046001600160401b031611806117af57506005546001600160401b031642115b156108ff5760405162b828c960e81b815260040160405180910390fd5b6040805160a0810182526000808252602082018190529181018290529060608201908152602001611810604051806040016040528060008152602001606081525090565b905290565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b038111828210171561184d5761184d611815565b60405290565b604051601f8201601f191681016001600160401b038111828210171561187b5761187b611815565b604052919050565b60006001600160401b0382111561189c5761189c611815565b5060051b60200190565b6001600160a01b03811681146108b357600080fd5b600082601f8301126118cc57600080fd5b813560206118e16118dc83611883565b611853565b82815260059290921b8401810191818101908684111561190057600080fd5b8286015b84811015611924578035611917816118a6565b8352918301918301611904565b509695505050505050565b60006001600160401b0382111561194857611948611815565b50601f01601f191660200190565b600082601f83011261196757600080fd5b81356119756118dc8261192f565b81815284602083860101111561198a57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000606084860312156119bc57600080fd5b83356001600160401b03808211156119d357600080fd5b6119df878388016118bb565b945060208601359150808211156119f557600080fd5b50611a0286828701611956565b9250506040840135611a13816118a6565b809150509250925092565b60008060408385031215611a3157600080fd5b8235611a3c816118a6565b91506020830135611a4c816118a6565b809150509250929050565b60008060408385031215611a6a57600080fd5b82356001600160401b03811115611a8057600080fd5b611a8c85828601611956565b9250506020830135611a4c816118a6565b600060208284031215611aaf57600080fd5b8135611aba816118a6565b9392505050565b634e487b7160e01b600052602160045260246000fd5b60078110611af557634e487b7160e01b600052602160045260246000fd5b9052565b60005b83811015611b14578181015183820152602001611afc565b50506000910152565b60008151808452611b35816020860160208601611af9565b601f01601f19169290920160200192915050565b602081528151151560208201526001600160a01b0360208301511660408201526040820151606082015260006060830151611b876080840182611ad7565b50608083015160a083810152805160c084015260200151604060e0840152611647610100840182611b1d565b600781106108b357600080fd5b60008060408385031215611bd357600080fd5b8235611bde816118a6565b91506020830135611a4c81611bb3565b6001600160401b03811681146108b357600080fd5b60008060408385031215611c1657600080fd5b8235611c2181611bee565b91506020830135611a4c81611bee565b600060208284031215611c4357600080fd5b5035919050565b60008060408385031215611c5d57600080fd5b82356001600160401b0380821115611c7457600080fd5b611c80868387016118bb565b9350602091508185013581811115611c9757600080fd5b8501601f81018713611ca857600080fd5b8035611cb66118dc82611883565b81815260059190911b82018401908481019089831115611cd557600080fd5b8584015b83811015611d0d57803586811115611cf15760008081fd5b611cff8c8983890101611956565b845250918601918601611cd9565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015611d6957815180516001600160a01b03168552860151868501529284019290850190600101611d3b565b5091979650505050505050565b602081016106078284611ad7565b60008060408385031215611d9757600080fd5b8235915060208301356001600160401b03811115611db457600080fd5b611dc085828601611956565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b80518015158114610f5a57600080fd5b600080600083850360e0811215611e0657600080fd5b60a0811215611e1457600080fd5b5060405160a081018181106001600160401b0382111715611e3757611e37611815565b604052611e4385611de0565b81526020850151611e5381611bee565b60208201526040850151611e6681611bee565b6040820152606085810151908201526080808601519082015260a0850151909350611e90816118a6565b8092505060c084015190509250925092565b8281526040602082015260006116476040830184611b1d565b634e487b7160e01b600052601160045260246000fd5b8082018082111561060757610607611ebb565b634e487b7160e01b600052600160045260246000fd5b600082601f830112611f0b57600080fd5b8151611f196118dc8261192f565b818152846020838601011115611f2e57600080fd5b611647826020830160208701611af9565b600060408284031215611f5157600080fd5b604051604081016001600160401b038282108183111715611f7457611f74611815565b81604052829350845183526020850151915080821115611f9357600080fd5b50611fa085828601611efa565b6020830152505092915050565b60008060008060808587031215611fc357600080fd5b8451611fce816118a6565b6020860151909450611fdf816118a6565b6040860151606087015191945092506001600160401b0381111561200257600080fd5b61200e87828801611f3f565b91505092959194509250565b60408152600061202d6040830185611b1d565b90506001600160a01b03831660208301529392505050565b600181811c9082168061205957607f821691505b60208210810361207957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156105e357600081815260208120601f850160051c810160208610156120a65750805b601f850160051c820191505b818110156120c5578281556001016120b2565b505050505050565b81516001600160401b038111156120e6576120e6611815565b6120fa816120f48454612045565b8461207f565b602080601f83116001811461212f57600084156121175750858301515b600019600386901b1c1916600185901b1785556120c5565b600085815260208120601f198616915b8281101561215e5788860151825594840194600190910190840161213f565b508582101561217c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561219e57600080fd5b611aba82611de0565b6000602082840312156121b957600080fd5b8151611aba816118a6565b600080604083850312156121d757600080fd5b82516121e2816118a6565b6020840151909250611a4c81611bb3565b604081016122018285611ad7565b6001600160a01b03831660208301529392505050565b8051610f5a816118a6565b60006020828403121561223457600080fd5b81516001600160401b038082111561224b57600080fd5b9083019060c0828603121561225f57600080fd5b61226761182b565b825181526020830151612279816118a6565b6020820152604083015161228c816118a6565b60408201526060830151828111156122a357600080fd5b6122af87828601611f3f565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b8181038181111561060757610607611ebb565b6000602082840312156122fa57600080fd5b81516001600160401b038082111561231157600080fd5b9083019060c0828603121561232557600080fd5b61232d61182b565b825181526020830151602082015260408301518281111561234d57600080fd5b61235987828601611efa565b60408301525060608301518281111561237157600080fd5b61237d87828601611f3f565b60608301525061238f60808401612217565b60808201526123a060a08401612217565b60a08201529594505050505056fea26469706673582212209c5b129dd3c6432f5a843366bc5a77fd68aff1c2ef4cc1e201cf6b803f29b29564736f6c63430008130033";
