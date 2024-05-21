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
        name: "NON_ZERO_VALUE",
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
                internalType: "struct DirectGrantsLiteStrategy.Recipient",
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
                internalType: "struct DirectGrantsLiteStrategy.ApplicationStatus[]",
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
                internalType: "uint64",
                name: "_registrationStartTime",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_registrationEndTime",
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
exports.bytecode = "0x60c06040523480156200001157600080fd5b5060405162002b2e38038062002b2e8339810160408190526200003491620000ba565b6001600160a01b038216608052604051829082906200005890829060200162000195565b60408051601f19818403018152919052805160209091012060a05250620001ca92505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b157818101518382015260200162000097565b50506000910152565b60008060408385031215620000ce57600080fd5b82516001600160a01b0381168114620000e657600080fd5b60208401519092506001600160401b03808211156200010457600080fd5b818501915085601f8301126200011957600080fd5b8151818111156200012e576200012e6200007e565b604051601f8201601f19908116603f011681019083821181831017156200015957620001596200007e565b816040528281528860208487010111156200017357600080fd5b6200018683602083016020880162000094565b80955050505050509250929050565b6020815260008251806020840152620001b681604085016020870162000094565b601f01601f19169190910160400192915050565b60805160a0516129226200020c60003960006102970152600081816102280152818161059001528181610e7201528181610f24015261124701526129226000f3fe6080604052600436106101a55760003560e01c80639af5c09d116100e1578063dff7d2c71161008a578063ef2920fc11610064578063ef2920fc14610505578063f31db3d114610518578063f5b0dfb714610538578063f6f258911461055857600080fd5b8063dff7d2c714610491578063eb11af93146104b8578063edd146cc146104e557600080fd5b8063b2b878d0116100bb578063b2b878d014610430578063cb0e85a61461045d578063df868ed31461047c57600080fd5b80639af5c09d1461039d578063a0cf0aea146103db578063ac9650d81461040357600080fd5b80634ab4ba421161014e5780635708973911610128578063570897391461032057806362812a391461033a57806375777aaa1461036757806395355b3b1461038757600080fd5b80634ab4ba42146102bb5780634d31d087146102d057806351cff8d91461030057600080fd5b80632bbe0cae1161017f5780632bbe0cae1461026057806338fff2d01461027357806342fda9c71461028857600080fd5b806301fc1c64146101b95780630a6f0ee9146101f957806315cc481e1461021957600080fd5b366101b4576101b2610585565b005b600080fd5b3480156101c557600080fd5b506101e66101d4366004611b61565b60076020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561020557600080fd5b506101b2610214366004611d46565b6105d0565b34801561022557600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020016101f0565b61024861026e366004611dbd565b6105f0565b34801561027f57600080fd5b506001546101e6565b34801561029457600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101e6565b3480156102c757600080fd5b506002546101e6565b3480156102dc57600080fd5b506102f06102eb366004611b61565b610615565b60405190151581526020016101f0565b34801561030c57600080fd5b506101b261031b366004611b61565b610620565b34801561032c57600080fd5b506003546102f09060ff1681565b34801561034657600080fd5b5061035a610355366004611b61565b61064a565b6040516101f09190611e5e565b34801561037357600080fd5b506101b2610382366004611ec2565b61065b565b34801561039357600080fd5b506101e660045481565b3480156103a957600080fd5b506003546103c3906201000090046001600160401b031681565b6040516001600160401b0390911681526020016101f0565b3480156103e757600080fd5b5061024873eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561040f57600080fd5b5061042361041e366004611ef0565b61070d565b6040516101f09190611f64565b34801561043c57600080fd5b5061045061044b366004611fc6565b610801565b6040516101f0919061209a565b34801561046957600080fd5b506003546102f090610100900460ff1681565b34801561048857600080fd5b506102f06108ff565b34801561049d57600080fd5b506003546103c390600160501b90046001600160401b031681565b3480156104c457600080fd5b506104d86104d3366004611b61565b61090e565b6040516101f09190612108565b3480156104f157600080fd5b506101b2610500366004612130565b610919565b6101b2610513366004611dbd565b610974565b34801561052457600080fd5b506101b2610533366004612176565b610992565b34801561054457600080fd5b506101b2610553366004612230565b610a70565b34801561056457600080fd5b506101e6610573366004612230565b60066020526000908152604090205481565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105ce5760405163075fd2b160e01b815260040160405180910390fd5b565b6105d8610585565b6105e0610a9a565b6105eb838383610abd565b505050565b60006105fa610585565b610602610a9a565b61060c8383610ad6565b90505b92915050565b600061060f82610e55565b3361062a81610efa565b60006106368330610fac565b905080610644843383610ff5565b50505050565b610652611b06565b61060f8261102f565b3361066581610efa565b61066f8383611128565b6003805471ffffffffffffffffffffffffffffffff00001916620100006001600160401b03868116820267ffffffffffffffff60501b191692909217600160501b8684168102919091179384905560408051928504841683529304909116602082015233918101919091527f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d93359906060015b60405180910390a1505050565b6060816001600160401b0381111561072757610727611b85565b60405190808252806020026020018201604052801561075a57816020015b60608152602001906001900390816107455790505b50905060005b828110156107fa576107ca3085858481811061077e5761077e612249565b9050602002810190610790919061225f565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061115b92505050565b8282815181106107dc576107dc612249565b602002602001018190525080806107f2906122c2565b915050610760565b5092915050565b8151815160609190811461082857604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b0381111561084257610842611b85565b60405190808252806020026020018201604052801561088757816020015b60408051808201909152600080825260208201528152602001906001900390816108605790505b50905060005b828110156108f6576108d18682815181106108aa576108aa612249565b60200260200101518683815181106108c4576108c4612249565b6020026020010151611180565b8282815181106108e3576108e3612249565b602090810291909101015260010161088d565b50949350505050565b6000610909611199565b905090565b600061060f826111e1565b610921610585565b60008180602001905181019061093791906122f0565b90506109438382611200565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610700929190612370565b61097c610585565b610984610a9a565b61098e82826113a9565b5050565b3361099c81610efa565b60045482146109be57604051637fcce2a960e01b815260040160405180910390fd5b825160005b81811015610a695760008582815181106109df576109df612249565b60200260200101516000015190506000868381518110610a0157610a01612249565b6020908102919091018101518101516000848152600683526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a250506001016109c3565b5050505050565b610a78610585565b8060026000828254610a8a9190612389565b90915550610a9790508181565b50565b6001546000036105ce57604051630f68fe6360e21b815260040160405180910390fd5b6040516343f6e4ab60e01b815260040160405180910390fd5b6000610ae06115f2565b3415610aff576040516322d8ddab60e01b815260040160405180910390fd5b6000806000610b21604051806040016040528060008152602001606081525090565b60035460ff1615610b735786806020019051810190610b409190612432565b91965093509050610b518587611641565b610b6e5760405163075fd2b160e01b815260040160405180910390fd5b610bde565b86806020019051810190610b879190612432565b6001600160a01b03831615159650909450909250905083610ba85785610baa565b815b9450838015610bc05750610bbe8587611641565b155b15610bde5760405163075fd2b160e01b815260040160405180910390fd5b600354610100900460ff168015610c0157506020810151511580610c0157508051155b15610c1f5760405163c19e07c560e01b815260040160405180910390fd5b6001600160a01b038316610c565760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b03808616600090815260086020908152604090912080549286166101000274ffffffffffffffffffffffffffffffffffffffff0019909316929092178255825160018301908155908301518391906002840190610cba9082612515565b505060035460ff169050610cce5784610cd1565b60015b815460ff19169015151781556001600160a01b0386166000908152600760205260408120549003610dad576004546001600160a01b038716600090815260076020526040902055610d278660015b60ff16611739565b600088600454604051602001610d3e9291906125d4565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a604051610d8a9291906125f6565b60405180910390a260048054906000610da2836122c2565b919050555050610e4a565b6000610db88761176c565b905060ff811660021480610dcf575060ff81166005145b15610de457610ddf876001610d1f565b610dfb565b60021960ff821601610dfb57610dfb876004610d1f565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a610e318b61176c565b604051610e4093929190612621565b60405180910390a2505b505050505092915050565b6001546040516329e40d4b60e01b81526000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916329e40d4b91610eb99186906004019182526001600160a01b0316602082015260400190565b602060405180830381865afa158015610ed6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060f9190612656565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610f6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8f9190612656565b610a975760405163075fd2b160e01b815260040160405180910390fd5b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610fe457506001600160a01b0381163161060f565b610fee83836117ad565b905061060f565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601611024576105eb82826117e2565b6105eb8383836117fe565b611037611b06565b6001600160a01b038083166000908152600860209081526040918290208251606081018452815460ff81161515825261010090049094168483015282518084018452600182018054825260028301805493958701949293919284019161109c90612495565b80601f01602080910402602001604051908101604052809291908181526020018280546110c890612495565b80156111155780601f106110ea57610100808354040283529160200191611115565b820191906000526020600020905b8154815290600101906020018083116110f857829003601f168201915b5050509190925250505090525092915050565b806001600160401b0316826001600160401b0316111561098e57604051637fcce2a960e01b815260040160405180910390fd5b606061060c83836040518060600160405280602781526020016128c66027913961184d565b6040805180820190915260008082526020820152610abd565b60035460009042620100009091046001600160401b0316118015906111d05750600354600160501b90046001600160401b03164211155b156111db5750600190565b50600090565b60006111ec8261176c565b60ff16600681111561060f5761060f6120f2565b611209826118c5565b80516003805460208085015161ffff1990921693151561ff001916939093176101009115159190910217905560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa158015611296573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ba9190612671565b6005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055604081015160038054606084015171ffffffffffffffffffffffffffffffff000019909116620100006001600160401b038086169190910267ffffffffffffffff60501b191691909117600160501b918316919091021790915560016004556113509190611128565b60408082015160608084015183516001600160401b0393841681529216602083015233928201929092527f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d93359910160405180910390a15050565b806113b381610efa565b60003490506000848060200190518101906113ce9190612699565b805190915060008190036113f557604051637fcce2a960e01b815260040160405180910390fd5b60005b818110156115c457600083828151811061141457611414612249565b6020026020010151905060008160200151905060006114328261102f565b9050600081602001519050600087868151811061145157611451612249565b6020026020010151600001519050600088878151811061147357611473612249565b602002602001015160400151905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316826001600160a01b0316036114bb576114b8818b612768565b99505b60208401516001600160a01b03166114f15760405163f4a513b960e01b81526001600160a01b0386166004820152602401610c4d565b60026114fc8661176c565b60ff161461151d5760405163392c16fb60e21b815260040160405180910390fd5b6115538260405180606001604052808f6001600160a01b03168152602001866001600160a01b0316815260200184815250611914565b50846001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b82848f6040516115ab939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a28660010196505050505050506113f8565b5082156115ea576115ea73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8685610ff5565b505050505050565b60035442620100009091046001600160401b031611806116235750600354600160501b90046001600160401b031642115b156105ce57604051635b04f6ad60e11b815260040160405180910390fd5b60055460405163dd93da4360e01b81526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa15801561168f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526116b7919081019061277b565b6005548151604051635e8a791560e01b815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa15801561170d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117319190612656565b949350505050565b600080600061174785611993565b60009283526006602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b038116600090815260076020526040812054810361179357506000919050565b60008061179f84611993565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af161098e5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611843576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b03168560405161186a9190612841565b600060405180830381855af49150503d80600081146118a5576040519150601f19603f3d011682016040523d82523d6000602084013e6118aa565b606091505b50915091506118bb86838387611a06565b9695505050505050565b6118cd610585565b600154156118ee5760405163439a74c960e01b815260040160405180910390fd5b8060000361190f57604051637fcce2a960e01b815260040160405180910390fd5b600155565b604081015160009073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038516016119755780341015611962576040516374c5672b60e01b815260040160405180910390fd5b6119708360200151826117e2565b611989565b611989848460000151856020015184611a7f565b5060019392505050565b6001600160a01b0381166000908152600760205260408120548190819081906119be90600190612768565b905060006119cd604083612873565b905060006119dc604084612887565b6119e790600461289b565b6000838152600660205260409020549298909750919550909350505050565b60608315611a75578251600003611a6e576001600160a01b0385163b611a6e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c4d565b5081611731565b6117318383611adc565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716611ace57637939f4246000526004601cfd5b600060605260405250505050565b815115611aec5781518083602001fd5b8060405162461bcd60e51b8152600401610c4d91906128b2565b604051806060016040528060001515815260200160006001600160a01b03168152602001611b47604051806040016040528060008152602001606081525090565b905290565b6001600160a01b0381168114610a9757600080fd5b600060208284031215611b7357600080fd5b8135611b7e81611b4c565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715611bbd57611bbd611b85565b60405290565b604051606081016001600160401b0381118282101715611bbd57611bbd611b85565b60405160c081016001600160401b0381118282101715611bbd57611bbd611b85565b604051601f8201601f191681016001600160401b0381118282101715611c2f57611c2f611b85565b604052919050565b60006001600160401b03821115611c5057611c50611b85565b5060051b60200190565b600082601f830112611c6b57600080fd5b81356020611c80611c7b83611c37565b611c07565b82815260059290921b84018101918181019086841115611c9f57600080fd5b8286015b84811015611cc3578035611cb681611b4c565b8352918301918301611ca3565b509695505050505050565b60006001600160401b03821115611ce757611ce7611b85565b50601f01601f191660200190565b600082601f830112611d0657600080fd5b8135611d14611c7b82611cce565b818152846020838601011115611d2957600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215611d5b57600080fd5b83356001600160401b0380821115611d7257600080fd5b611d7e87838801611c5a565b94506020860135915080821115611d9457600080fd5b50611da186828701611cf5565b9250506040840135611db281611b4c565b809150509250925092565b60008060408385031215611dd057600080fd5b82356001600160401b03811115611de657600080fd5b611df285828601611cf5565b9250506020830135611e0381611b4c565b809150509250929050565b60005b83811015611e29578181015183820152602001611e11565b50506000910152565b60008151808452611e4a816020860160208601611e0e565b601f01601f19169290920160200192915050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a084015261173160c0840182611e32565b6001600160401b0381168114610a9757600080fd5b60008060408385031215611ed557600080fd5b8235611ee081611ead565b91506020830135611e0381611ead565b60008060208385031215611f0357600080fd5b82356001600160401b0380821115611f1a57600080fd5b818501915085601f830112611f2e57600080fd5b813581811115611f3d57600080fd5b8660208260051b8501011115611f5257600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611fb957603f19888603018452611fa7858351611e32565b94509285019290850190600101611f8b565b5092979650505050505050565b60008060408385031215611fd957600080fd5b82356001600160401b0380821115611ff057600080fd5b611ffc86838701611c5a565b935060209150818501358181111561201357600080fd5b8501601f8101871361202457600080fd5b8035612032611c7b82611c37565b81815260059190911b8201840190848101908983111561205157600080fd5b8584015b838110156120895780358681111561206d5760008081fd5b61207b8c8983890101611cf5565b845250918601918601612055565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156120e557815180516001600160a01b031685528601518685015292840192908501906001016120b7565b5091979650505050505050565b634e487b7160e01b600052602160045260246000fd5b602081016007831061212a57634e487b7160e01b600052602160045260246000fd5b91905290565b6000806040838503121561214357600080fd5b8235915060208301356001600160401b0381111561216057600080fd5b61216c85828601611cf5565b9150509250929050565b600080604080848603121561218a57600080fd5b83356001600160401b038111156121a057600080fd5b8401601f810186136121b157600080fd5b803560206121c1611c7b83611c37565b82815260069290921b830181019181810190898411156121e057600080fd5b938201935b838510156122205785858b0312156121fd5760008081fd5b612205611b9b565b853581528386013584820152825293850193908201906121e5565b9997909101359750505050505050565b60006020828403121561224257600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261227657600080fd5b8301803591506001600160401b0382111561229057600080fd5b6020019150368190038213156122a557600080fd5b9250929050565b634e487b7160e01b600052601160045260246000fd5b6000600182016122d4576122d46122ac565b5060010190565b805180151581146122eb57600080fd5b919050565b60006080828403121561230257600080fd5b604051608081018181106001600160401b038211171561232457612324611b85565b604052612330836122db565b815261233e602084016122db565b6020820152604083015161235181611ead565b6040820152606083015161236481611ead565b60608201529392505050565b8281526040602082015260006117316040830184611e32565b8082018082111561060f5761060f6122ac565b600082601f8301126123ad57600080fd5b81516123bb611c7b82611cce565b8181528460208386010111156123d057600080fd5b611731826020830160208701611e0e565b6000604082840312156123f357600080fd5b6123fb611b9b565b90508151815260208201516001600160401b0381111561241a57600080fd5b6124268482850161239c565b60208301525092915050565b60008060006060848603121561244757600080fd5b835161245281611b4c565b602085015190935061246381611b4c565b60408501519092506001600160401b0381111561247f57600080fd5b61248b868287016123e1565b9150509250925092565b600181811c908216806124a957607f821691505b6020821081036124c957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156105eb57600081815260208120601f850160051c810160208610156124f65750805b601f850160051c820191505b818110156115ea57828155600101612502565b81516001600160401b0381111561252e5761252e611b85565b6125428161253c8454612495565b846124cf565b602080601f831160018114612577576000841561255f5750858301515b600019600386901b1c1916600185901b1785556115ea565b600085815260208120601f198616915b828110156125a657888601518255948401946001909101908401612587565b50858210156125c45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6040815260006125e76040830185611e32565b90508260208301529392505050565b6040815260006126096040830185611e32565b90506001600160a01b03831660208301529392505050565b6060815260006126346060830186611e32565b90506001600160a01b038416602083015260ff83166040830152949350505050565b60006020828403121561266857600080fd5b61060c826122db565b60006020828403121561268357600080fd5b8151611b7e81611b4c565b80516122eb81611b4c565b600060208083850312156126ac57600080fd5b82516001600160401b038111156126c257600080fd5b8301601f810185136126d357600080fd5b80516126e1611c7b82611c37565b8181526060918202830184019184820191908884111561270057600080fd5b938501935b8385101561275c5780858a03121561271d5760008081fd5b612725611bc3565b855161273081611b4c565b81528587015161273f81611b4c565b818801526040868101519082015283529384019391850191612705565b50979650505050505050565b8181038181111561060f5761060f6122ac565b60006020828403121561278d57600080fd5b81516001600160401b03808211156127a457600080fd5b9083019060c082860312156127b857600080fd5b6127c0611be5565b82518152602083015160208201526040830151828111156127e057600080fd5b6127ec8782860161239c565b60408301525060608301518281111561280457600080fd5b612810878286016123e1565b6060830152506128226080840161268e565b608082015261283360a0840161268e565b60a082015295945050505050565b60008251612853818460208701611e0e565b9190910192915050565b634e487b7160e01b600052601260045260246000fd5b6000826128825761288261285d565b500490565b6000826128965761289661285d565b500690565b808202811582820484141761060f5761060f6122ac565b60208152600061060c6020830184611e3256fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220777a06c68e3b80a5e17fdd6aac1f8875505248c9cc122b1e3a3a090f5e7fb47964736f6c63430008130033";
