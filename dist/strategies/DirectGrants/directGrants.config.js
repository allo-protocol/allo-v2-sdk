"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytecode = exports.abi = void 0;
exports.abi = [
    {
        type: "constructor",
        inputs: [
            { name: "_allo", type: "address", internalType: "address" },
            { name: "_name", type: "string", internalType: "string" },
        ],
        stateMutability: "nonpayable",
    },
    { type: "receive", stateMutability: "payable" },
    {
        type: "function",
        name: "NATIVE",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "allocate",
        inputs: [
            { name: "_data", type: "bytes", internalType: "bytes" },
            { name: "_sender", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "allocatedGrantAmount",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "distribute",
        inputs: [
            { name: "_recipientIds", type: "address[]", internalType: "address[]" },
            { name: "_data", type: "bytes", internalType: "bytes" },
            { name: "_sender", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getAllo",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "contract IAllo" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getMilestoneStatus",
        inputs: [
            { name: "_recipientId", type: "address", internalType: "address" },
            { name: "_milestoneId", type: "uint256", internalType: "uint256" },
        ],
        outputs: [
            { name: "", type: "uint8", internalType: "enum IStrategy.Status" },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getMilestones",
        inputs: [
            { name: "_recipientId", type: "address", internalType: "address" },
        ],
        outputs: [
            {
                name: "",
                type: "tuple[]",
                internalType: "struct DirectGrantsSimpleStrategy.Milestone[]",
                components: [
                    {
                        name: "amountPercentage",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "metadata",
                        type: "tuple",
                        internalType: "struct Metadata",
                        components: [
                            { name: "protocol", type: "uint256", internalType: "uint256" },
                            { name: "pointer", type: "string", internalType: "string" },
                        ],
                    },
                    {
                        name: "milestoneStatus",
                        type: "uint8",
                        internalType: "enum IStrategy.Status",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getPayouts",
        inputs: [
            { name: "_recipientIds", type: "address[]", internalType: "address[]" },
            { name: "_data", type: "bytes[]", internalType: "bytes[]" },
        ],
        outputs: [
            {
                name: "",
                type: "tuple[]",
                internalType: "struct IStrategy.PayoutSummary[]",
                components: [
                    {
                        name: "recipientAddress",
                        type: "address",
                        internalType: "address",
                    },
                    { name: "amount", type: "uint256", internalType: "uint256" },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getPoolAmount",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getPoolId",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRecipient",
        inputs: [
            { name: "_recipientId", type: "address", internalType: "address" },
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct DirectGrantsSimpleStrategy.Recipient",
                components: [
                    { name: "useRegistryAnchor", type: "bool", internalType: "bool" },
                    {
                        name: "recipientAddress",
                        type: "address",
                        internalType: "address",
                    },
                    { name: "grantAmount", type: "uint256", internalType: "uint256" },
                    {
                        name: "metadata",
                        type: "tuple",
                        internalType: "struct Metadata",
                        components: [
                            { name: "protocol", type: "uint256", internalType: "uint256" },
                            { name: "pointer", type: "string", internalType: "string" },
                        ],
                    },
                    {
                        name: "recipientStatus",
                        type: "uint8",
                        internalType: "enum IStrategy.Status",
                    },
                    {
                        name: "milestonesReviewStatus",
                        type: "uint8",
                        internalType: "enum IStrategy.Status",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRecipientStatus",
        inputs: [
            { name: "_recipientId", type: "address", internalType: "address" },
        ],
        outputs: [
            { name: "", type: "uint8", internalType: "enum IStrategy.Status" },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getStrategyId",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "grantAmountRequired",
        inputs: [],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "increasePoolAmount",
        inputs: [{ name: "_amount", type: "uint256", internalType: "uint256" }],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "initialize",
        inputs: [
            { name: "_poolId", type: "uint256", internalType: "uint256" },
            { name: "_data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "isPoolActive",
        inputs: [],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isValidAllocator",
        inputs: [{ name: "_allocator", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "metadataRequired",
        inputs: [],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "milestones",
        inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "uint256", internalType: "uint256" },
        ],
        outputs: [
            { name: "amountPercentage", type: "uint256", internalType: "uint256" },
            {
                name: "metadata",
                type: "tuple",
                internalType: "struct Metadata",
                components: [
                    { name: "protocol", type: "uint256", internalType: "uint256" },
                    { name: "pointer", type: "string", internalType: "string" },
                ],
            },
            {
                name: "milestoneStatus",
                type: "uint8",
                internalType: "enum IStrategy.Status",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "registerRecipient",
        inputs: [
            { name: "_data", type: "bytes", internalType: "bytes" },
            { name: "_sender", type: "address", internalType: "address" },
        ],
        outputs: [
            { name: "recipientId", type: "address", internalType: "address" },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "registryGating",
        inputs: [],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "rejectMilestone",
        inputs: [
            { name: "_recipientId", type: "address", internalType: "address" },
            { name: "_milestoneId", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "reviewSetMilestones",
        inputs: [
            { name: "_recipientId", type: "address", internalType: "address" },
            { name: "_status", type: "uint8", internalType: "enum IStrategy.Status" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setMilestones",
        inputs: [
            { name: "_recipientId", type: "address", internalType: "address" },
            {
                name: "_milestones",
                type: "tuple[]",
                internalType: "struct DirectGrantsSimpleStrategy.Milestone[]",
                components: [
                    {
                        name: "amountPercentage",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "metadata",
                        type: "tuple",
                        internalType: "struct Metadata",
                        components: [
                            { name: "protocol", type: "uint256", internalType: "uint256" },
                            { name: "pointer", type: "string", internalType: "string" },
                        ],
                    },
                    {
                        name: "milestoneStatus",
                        type: "uint8",
                        internalType: "enum IStrategy.Status",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setPoolActive",
        inputs: [{ name: "_flag", type: "bool", internalType: "bool" }],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setRecipientStatusToInReview",
        inputs: [
            { name: "_recipientIds", type: "address[]", internalType: "address[]" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "submitMilestone",
        inputs: [
            { name: "_recipientId", type: "address", internalType: "address" },
            { name: "_milestoneId", type: "uint256", internalType: "uint256" },
            {
                name: "_metadata",
                type: "tuple",
                internalType: "struct Metadata",
                components: [
                    { name: "protocol", type: "uint256", internalType: "uint256" },
                    { name: "pointer", type: "string", internalType: "string" },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "upcomingMilestone",
        inputs: [{ name: "", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "withdraw",
        inputs: [{ name: "_amount", type: "uint256", internalType: "uint256" }],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Allocated",
        inputs: [
            {
                name: "recipientId",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "token",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "sender",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Distributed",
        inputs: [
            {
                name: "recipientId",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "recipientAddress",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "sender",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Initialized",
        inputs: [
            {
                name: "poolId",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            { name: "data", type: "bytes", indexed: false, internalType: "bytes" },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "MilestoneStatusChanged",
        inputs: [
            {
                name: "recipientId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "milestoneId",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "status",
                type: "uint8",
                indexed: false,
                internalType: "enum IStrategy.Status",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "MilestoneSubmitted",
        inputs: [
            {
                name: "recipientId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "milestoneId",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "metadata",
                type: "tuple",
                indexed: false,
                internalType: "struct Metadata",
                components: [
                    { name: "protocol", type: "uint256", internalType: "uint256" },
                    { name: "pointer", type: "string", internalType: "string" },
                ],
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "MilestonesReviewed",
        inputs: [
            {
                name: "recipientId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "status",
                type: "uint8",
                indexed: false,
                internalType: "enum IStrategy.Status",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "MilestonesSet",
        inputs: [
            {
                name: "recipientId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "milestonesLength",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "PoolActive",
        inputs: [
            { name: "active", type: "bool", indexed: false, internalType: "bool" },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RecipientStatusChanged",
        inputs: [
            {
                name: "recipientId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "status",
                type: "uint8",
                indexed: false,
                internalType: "enum IStrategy.Status",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Registered",
        inputs: [
            {
                name: "recipientId",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            { name: "data", type: "bytes", indexed: false, internalType: "bytes" },
            {
                name: "sender",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    { type: "error", name: "ALLOCATION_ACTIVE", inputs: [] },
    { type: "error", name: "ALLOCATION_EXCEEDS_POOL_AMOUNT", inputs: [] },
    { type: "error", name: "ALLOCATION_NOT_ACTIVE", inputs: [] },
    { type: "error", name: "ALLOCATION_NOT_ENDED", inputs: [] },
    { type: "error", name: "ALREADY_INITIALIZED", inputs: [] },
    { type: "error", name: "AMOUNT_MISMATCH", inputs: [] },
    { type: "error", name: "ANCHOR_ERROR", inputs: [] },
    { type: "error", name: "ARRAY_MISMATCH", inputs: [] },
    { type: "error", name: "INVALID", inputs: [] },
    { type: "error", name: "INVALID_ADDRESS", inputs: [] },
    { type: "error", name: "INVALID_FEE", inputs: [] },
    { type: "error", name: "INVALID_METADATA", inputs: [] },
    { type: "error", name: "INVALID_MILESTONE", inputs: [] },
    { type: "error", name: "INVALID_REGISTRATION", inputs: [] },
    { type: "error", name: "IS_APPROVED_STRATEGY", inputs: [] },
    { type: "error", name: "MILESTONES_ALREADY_SET", inputs: [] },
    { type: "error", name: "MILESTONE_ALREADY_ACCEPTED", inputs: [] },
    { type: "error", name: "MISMATCH", inputs: [] },
    { type: "error", name: "NONCE_NOT_AVAILABLE", inputs: [] },
    { type: "error", name: "NOT_APPROVED_STRATEGY", inputs: [] },
    { type: "error", name: "NOT_ENOUGH_FUNDS", inputs: [] },
    { type: "error", name: "NOT_IMPLEMENTED", inputs: [] },
    { type: "error", name: "NOT_INITIALIZED", inputs: [] },
    { type: "error", name: "NOT_PENDING_OWNER", inputs: [] },
    { type: "error", name: "POOL_ACTIVE", inputs: [] },
    { type: "error", name: "POOL_INACTIVE", inputs: [] },
    { type: "error", name: "RECIPIENT_ALREADY_ACCEPTED", inputs: [] },
    {
        type: "error",
        name: "RECIPIENT_ERROR",
        inputs: [{ name: "recipientId", type: "address", internalType: "address" }],
    },
    { type: "error", name: "RECIPIENT_NOT_ACCEPTED", inputs: [] },
    { type: "error", name: "REGISTRATION_ACTIVE", inputs: [] },
    { type: "error", name: "REGISTRATION_NOT_ACTIVE", inputs: [] },
    { type: "error", name: "UNAUTHORIZED", inputs: [] },
    { type: "error", name: "ZERO_ADDRESS", inputs: [] },
];
exports.bytecode = "0x60c06040523480156200001157600080fd5b5060405162003be438038062003be48339810160408190526200003491620000bf565b6001600160a01b03821660805260405182908290620000589082906020016200019a565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001cf9050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b65781810151838201526020016200009c565b50506000910152565b60008060408385031215620000d357600080fd5b82516001600160a01b0381168114620000eb57600080fd5b60208401519092506001600160401b03808211156200010957600080fd5b818501915085601f8301126200011e57600080fd5b81518181111562000133576200013362000083565b604051601f8201601f19908116603f011681019083821181831017156200015e576200015e62000083565b816040528281528860208487010111156200017857600080fd5b6200018b83602083016020880162000099565b80955050505050509250929050565b6020815260008251806020840152620001bb81604085016020870162000099565b601f01601f19169190910160400192915050565b60805160a0516139b76200022d600039600061037901526000818161026e0152818161088f01528181610bde0152818161137c0152818161140f01528181611c0f01528181611f2e0152818161209a01526124d901526139b76000f3fe6080604052600436106101d15760003560e01c80639be2ccf5116100f7578063df868ed311610095578063edd146cc11610064578063edd146cc14610594578063ef2920fc146105b4578063f5b0dfb7146105c7578063f83067e7146105e757600080fd5b8063df868ed31461050c578063e2372b5814610524578063e8eeb80614610551578063eb11af931461056757600080fd5b8063b2b878d0116100d1578063b2b878d014610471578063b5f620ce1461049e578063c7a892bf146104be578063cb0e85a6146104ed57600080fd5b80639be2ccf51461040f578063a0cf0aea1461042f578063a647d23e1461045757600080fd5b80632e1a7d4d1161016f57806342fda9c71161013e57806342fda9c71461036a5780634ab4ba421461039d5780634d31d087146103b257806362812a39146103e257600080fd5b80632e1a7d4d146102eb57806338fff2d01461030b57806339b25a9a1461032a5780633bf3577d1461034a57600080fd5b80630cfad8ee116101ab5780630cfad8ee1461023f57806315cc481e1461025f57806322a4e42d146102ab5780632bbe0cae146102d857600080fd5b8063068ae461146101dd57806309c4b8df146101ff5780630a6f0ee91461021f57600080fd5b366101d857005b600080fd5b3480156101e957600080fd5b506101fd6101f836600461291f565b610607565b005b34801561020b57600080fd5b506101fd61021a366004612968565b6106fa565b34801561022b57600080fd5b506101fd61023a366004612b77565b610823565b34801561024b57600080fd5b506101fd61025a366004612bef565b610843565b34801561026b57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b3480156102b757600080fd5b506102cb6102c6366004612d66565b610a10565b6040516102a29190612e2a565b61028e6102e6366004612eb5565b610b72565b3480156102f757600080fd5b506101fd610306366004612efc565b610b97565b34801561031757600080fd5b506001545b6040519081526020016102a2565b34801561033657600080fd5b506101fd610345366004612f15565b610c69565b34801561035657600080fd5b506101fd610365366004612f8a565b610d16565b34801561037657600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061031c565b3480156103a957600080fd5b5060025461031c565b3480156103be57600080fd5b506103d26103cd366004612d66565b610fec565b60405190151581526020016102a2565b3480156103ee57600080fd5b506104026103fd366004612d66565b610ff7565b6040516102a29190612fdf565b34801561041b57600080fd5b506004546103d29062010000900460ff1681565b34801561043b57600080fd5b5061028e73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561046357600080fd5b506004546103d29060ff1681565b34801561047d57600080fd5b5061049161048c366004613053565b611008565b6040516102a29190613128565b3480156104aa57600080fd5b506101fd6104b936600461318e565b611120565b3480156104ca57600080fd5b506104de6104d936600461291f565b61116c565b6040516102a2939291906131ab565b3480156104f957600080fd5b506004546103d290610100900460ff1681565b34801561051857600080fd5b5060005460ff166103d2565b34801561053057600080fd5b5061031c61053f366004612d66565b60096020526000908152604090205481565b34801561055d57600080fd5b5061031c60055481565b34801561057357600080fd5b50610587610582366004612d66565b61125b565b6040516102a291906131d3565b3480156105a057600080fd5b506101fd6105af3660046131e1565b611266565b6101fd6105c2366004612eb5565b6112c6565b3480156105d357600080fd5b506101fd6105e2366004612efc565b6112e0565b3480156105f357600080fd5b5061058761060236600461291f565b61130a565b3361061181611352565b6001600160a01b0383166000908152600860205260409020805483111561064b57604051632f1f68e160e11b815260040160405180910390fd5b600081848154811061065f5761065f613228565b6000918252602090912060049091020190506002600382015460ff16600681111561068c5761068c612df2565b036106aa57604051637f46ed2760e11b815260040160405180910390fd5b6003818101805460ff1916821790556040517ff1af82b65c631a030029b10ea8f00f68290285c7c797644155b8f23969ca1d63916106eb918891889161323e565b60405180910390a15050505050565b3361070481611352565b6001600160a01b0383166000908152600760209081526040808320600890925282205490910361074757604051632f1f68e160e11b815260040160405180910390fd5b60026004820154610100900460ff16600681111561076757610767612df2565b03610785576040516305ca31d360e51b815260040160405180910390fd5b600283600681111561079957610799612df2565b14806107b6575060038360068111156107b4576107b4612df2565b145b1561081d5760048101805484919061ff0019166101008360068111156107de576107de612df2565b02179055507f30dae55c386c6176f3f7b7ee6ad4df33970f2e442cb0142e978cf78fd8ae138d8484604051610814929190613262565b60405180910390a15b50505050565b61082b611404565b61083361144f565b61083e83838361148b565b505050565b6000336001600160a01b0384161480610861575061086183336114d5565b6001546040516329e40d4b60e01b815260048101919091523360248201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa1580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa919061327f565b905081158015610908575080155b156109265760405163075fd2b160e01b815260040160405180910390fd5b6001600160a01b03841660009081526007602052604090206002600482015460ff16600681111561095957610959612df2565b146109775760405163392c16fb60e21b815260040160405180910390fd5b60026004820154610100900460ff16600681111561099757610997612df2565b036109b5576040516305ca31d360e51b815260040160405180910390fd5b6109bf858561160d565b8115610a095760048101805461ff0019166102001790556040517f30dae55c386c6176f3f7b7ee6ad4df33970f2e442cb0142e978cf78fd8ae138d906106eb908790600290613262565b5050505050565b6001600160a01b0381166000908152600860209081526040808320805482518185028101850190935280835260609492939192909184015b82821015610b675783829060005260206000209060040201604051806060016040529081600082015481526020016001820160405180604001604052908160008201548152602001600182018054610a9f9061329c565b80601f0160208091040260200160405190810160405280929190818152602001828054610acb9061329c565b8015610b185780601f10610aed57610100808354040283529160200191610b18565b820191906000526020600020905b815481529060010190602001808311610afb57829003601f168201915b505050919092525050508152600382015460209091019060ff166006811115610b4357610b43612df2565b6006811115610b5457610b54612df2565b8152505081526020019060010190610a48565b505050509050919050565b6000610b7c611404565b610b8461144f565b610b8e83836117c5565b90505b92915050565b33610ba181611352565b610ba9611b70565b8160026000828254610bbb91906132ec565b909155505060015460405163068bcd8d60e01b8152610c65916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d91610c159160040190815260200190565b600060405180830381865afa158015610c32573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c5a91908101906133a1565b604001513384611bad565b5050565b33610c7381611352565b8160005b81811015610a09576000858583818110610c9357610c93613228565b9050602002016020810190610ca89190612d66565b6001600160a01b03811660009081526007602052604090819020600401805460ff1916600590811790915590519192507f94593b52aa436dd31a63e313045c2eb23d43eb2d6f5b4d7797b4432e7b27749091610d05918491613262565b60405180910390a150600101610c77565b6001600160a01b0383163314801590610d365750610d3483336114d5565b155b15610d545760405163075fd2b160e01b815260040160405180910390fd5b6001600160a01b038084166000908152600760209081526040808320815160c081018352815460ff8116151582526101009004909516858401526001810154858301528151808301909252600281018054835260038201805495969592946060870194939084019190610dc69061329c565b80601f0160208091040260200160405190810160405280929190818152602001828054610df29061329c565b8015610e3f5780601f10610e1457610100808354040283529160200191610e3f565b820191906000526020600020905b815481529060010190602001808311610e2257829003601f168201915b505050919092525050508152600482015460209091019060ff166006811115610e6a57610e6a612df2565b6006811115610e7b57610e7b612df2565b81526020016004820160019054906101000a900460ff166006811115610ea357610ea3612df2565b6006811115610eb457610eb4612df2565b9052509050600281608001516006811115610ed157610ed1612df2565b14610eef5760405163392c16fb60e21b815260040160405180910390fd5b6001600160a01b03841660009081526008602052604090208054841115610f2957604051632f1f68e160e11b815260040160405180910390fd5b6000818581548110610f3d57610f3d613228565b6000918252602090912060049091020190506002600382015460ff166006811115610f6a57610f6a612df2565b03610f8857604051637f46ed2760e11b815260040160405180910390fd5b8360018201610f97828261349b565b505060038101805460ff191660011790556040517f8673cfb5a2cbad812463bdfd7c85511f29c804579a86d318889ab9251553996190610fdc90889088908890613594565b60405180910390a1505050505050565b6000610b9182611bf2565b610fff61280b565b610b9182611c97565b81518151606091908114611048576040517f7b49805600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008167ffffffffffffffff811115611063576110636129a1565b6040519080825280602002602001820160405280156110a857816020015b60408051808201909152600080825260208201528152602001906001900390816110815790505b50905060005b82811015611117576110f28682815181106110cb576110cb613228565b60200260200101518683815181106110e5576110e5613228565b6020026020010151611e07565b82828151811061110457611104613228565b60209081029190910101526001016110ae565b50949350505050565b3361112a81611352565b61113382611e52565b60405182151581527fd94c9bc4d43c51d8dc345a016d8e3d994432fac68e72832e4cf3a616bd8efae09060200160405180910390a15050565b6008602052816000526040600020818154811061118857600080fd5b90600052602060002090600402016000915091505080600001549080600101604051806040016040529081600082015481526020016001820180546111cc9061329c565b80601f01602080910402602001604051908101604052809291908181526020018280546111f89061329c565b80156112455780601f1061121a57610100808354040283529160200191611245565b820191906000526020600020905b81548152906001019060200180831161122857829003601f168201915b5050509190925250505060039091015460ff1683565b6000610b9182611e99565b60008180602001905181019061127c919061362f565b90506112888382611eae565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a83836040516112b9929190613683565b60405180910390a1505050565b6112ce611404565b6112d661144f565b610c658282611fc8565b6112e8611404565b80600260008282546112fa919061369c565b9091555061130790508181565b50565b6001600160a01b038216600090815260086020526040812080548390811061133457611334613228565b600091825260209091206004909102016003015460ff169392505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa1580156113c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e7919061327f565b6113075760405163075fd2b160e01b815260040160405180910390fd5b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461144d5760405163075fd2b160e01b815260040160405180910390fd5b565b60015460000361144d576040517f3da3f98c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061149581611352565b835160005b818110156114cd576114c58682815181106114b7576114b7613228565b6020026020010151856122c6565b60010161149a565b505050505050565b600480546040517fdd93da430000000000000000000000000000000000000000000000000000000081526001600160a01b0385811693820193909352600092839263010000009004169063dd93da4390602401600060405180830381865afa158015611545573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261156d91908101906136af565b6004805482516040517f5e8a7915000000000000000000000000000000000000000000000000000000008152928301526001600160a01b0386811660248401529293506301000000900490911690635e8a791590604401602060405180830381865afa1580156115e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611605919061327f565b949350505050565b6001600160a01b0382166000908152600860205260408120541561164c576001600160a01b038316600090815260086020526040812061164c91612866565b815160005b8181101561175d57600084828151811061166d5761166d613228565b602002602001015190506000600681111561168a5761168a612df2565b816040015160068111156116a0576116a0612df2565b146116be57604051632f1f68e160e11b815260040160405180910390fd5b80516116ca908561369c565b6001600160a01b0387166000908152600860209081526040822080546001818101835591845292829020855160049094020192835584820151805191840191825591820151939750849360028401906117239082613776565b505050604082015160038201805460ff1916600183600681111561174957611749612df2565b021790555050600190920191506116519050565b5081670de0b6b3a76400001461178657604051632f1f68e160e11b815260040160405180910390fd5b604080516001600160a01b0386168152602081018390527fb000fb1507aac2465ccb4f6bd1b601c7053279005e9e9932c41946b35c84949b9101610814565b60006117cf61266c565b6000806000806117f2604051806040016040528060008152602001606081525090565b60045460ff161561184757878060200190518101906118119190613836565b9298509096509250905061182586886114d5565b6118425760405163075fd2b160e01b815260040160405180910390fd5b6118b4565b8780602001905181019061185b9190613836565b9297509095506001600160a01b03861615159450925090508261187e5786611880565b835b9550828015611896575061189486886114d5565b155b156118b45760405163075fd2b160e01b815260040160405180910390fd5b60045462010000900460ff1680156118ca575081155b15611901576040517f03b167dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60026001600160a01b03871660009081526007602052604090206004015460ff16600681111561193357611933612df2565b0361196a576040517f41d40fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600454610100900460ff16801561198d5750602081015151158061198d57508051155b156119c4576040517fc19e07c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160c0810190915260045460009190819060ff166119e557856119e8565b60015b151581526001600160a01b0388166020820152604081018590526060810184905260800160018152602001600190526001600160a01b0388811660009081526007602090815260409182902084518154868401517fffffffffffffffffffffff0000000000000000000000000000000000000000009091169115157fffffffffffffffffffffff0000000000000000000000000000000000000000ff1691909117610100919095160293909317835590830151600183015560608301518051600284019081559181015193945084939091906003840190611ac99082613776565b505050608082015160048201805460ff19166001836006811115611aef57611aef612df2565b021790555060a082015160048201805461ff001916610100836006811115611b1957611b19612df2565b0217905550905050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc628a8a604051611b5c9291906138a4565b60405180910390a250505050505092915050565b60005460ff161561144d576040517fb186267000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffffffffffffffffffff11111111111111111111111111111111111111126001600160a01b03841601611be75761083e82826126a8565b61083e8383836126c4565b6001546040516329e40d4b60e01b81526000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916329e40d4b91611c569186906004019182526001600160a01b0316602082015260400190565b602060405180830381865afa158015611c73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b91919061327f565b611c9f61280b565b6001600160a01b03808316600090815260076020908152604091829020825160c081018452815460ff811615158252610100900490941684830152600181015484840152825180840190935260028101805484526003820180549294606087019490939084019190611d109061329c565b80601f0160208091040260200160405190810160405280929190818152602001828054611d3c9061329c565b8015611d895780601f10611d5e57610100808354040283529160200191611d89565b820191906000526020600020905b815481529060010190602001808311611d6c57829003601f168201915b505050919092525050508152600482015460209091019060ff166006811115611db457611db4612df2565b6006811115611dc557611dc5612df2565b81526020016004820160019054906101000a900460ff166006811115611ded57611ded612df2565b6006811115611dfe57611dfe612df2565b90525092915050565b60408051808201909152600080825260208201526000611e2684611c97565b6040805180820182526020808401516001600160a01b0316825291909201519082015291505092915050565b6000805460ff19168215159081179091556040519081527fd94c9bc4d43c51d8dc345a016d8e3d994432fac68e72832e4cf3a616bd8efae09060200160405180910390a150565b6000611ea482611c97565b6080015192915050565b611eb782612713565b8051600480546020808501516040808701511515620100000262ff0000199215156101000261ff00199715159790971661ffff1990951694909417959095171691909117825582517f5ab1bd5300000000000000000000000000000000000000000000000000000000815292516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001693635ab1bd53938181019392918290030181865afa158015611f74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f9891906138cf565b600460036101000a8154816001600160a01b0302191690836001600160a01b03160217905550610c656001611e52565b611fd0612794565b80611fda81611352565b600080600085806020019051810190611ff391906138ec565b6001600160a01b03831660009081526007602090815260408083206009909252909120549396509194509250901561203e576040516305ca31d360e51b815260040160405180910390fd5b6002600482015460ff16600681111561205957612059612df2565b141580156120785750600283600681111561207657612076612df2565b145b1561222c5760015460405163068bcd8d60e01b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d916120d19160040190815260200190565b600060405180830381865afa1580156120ee573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261211691908101906133a1565b9050826005600082825461212a919061369c565b9091555050600254600554111561216d576040517f8e81b16f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001820183905560048201805460ff191660029081179091556040517f94593b52aa436dd31a63e313045c2eb23d43eb2d6f5b4d7797b4432e7b277490916121b791889190613262565b60405180910390a1846001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b836001015483604001518a60405161221e939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a2506122b7565b6003600482015460ff16600681111561224757612247612df2565b141580156122665750600383600681111561226457612264612df2565b145b156122b75760048101805460ff191660039081179091556040517f94593b52aa436dd31a63e313045c2eb23d43eb2d6f5b4d7797b4432e7b277490916122ae91879190613262565b60405180910390a15b5050505050610c656001600355565b6001600160a01b038083166000908152600960209081526040808320546008835281842060078452828520835160c081018552815460ff811615158252610100900490971687860152600181015487850152835180850190945260028101805485526003820180549498939796939592946060870194840191906123499061329c565b80601f01602080910402602001604051908101604052809291908181526020018280546123759061329c565b80156123c25780601f10612397576101008083540402835291602001916123c2565b820191906000526020600020905b8154815290600101906020018083116123a557829003601f168201915b505050919092525050508152600482015460209091019060ff1660068111156123ed576123ed612df2565b60068111156123fe576123fe612df2565b81526020016004820160019054906101000a900460ff16600681111561242657612426612df2565b600681111561243757612437612df2565b815250509050600082848154811061245157612451613228565b90600052602060002090600402019050828054905084118061248c57506001600382015460ff16600681111561248957612489612df2565b14155b156124aa57604051632f1f68e160e11b815260040160405180910390fd5b6000670de0b6b3a7640000826000015484604001516124c9919061392f565b6124d39190613946565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663068bcd8d6001546040518263ffffffff1660e01b815260040161252791815260200190565b600060405180830381865afa158015612544573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261256c91908101906133a1565b9050816002600082825461258091906132ec565b9250508190555061259a8160400151856020015184611bad565b60038301805460ff191660021790556001600160a01b03881660009081526009602052604081208054916125cd83613968565b91905055507ff1af82b65c631a030029b10ea8f00f68290285c7c797644155b8f23969ca1d63888760026040516126069392919061323e565b60405180910390a1602080850151604080516001600160a01b039283168152928301859052898216908301528916907fb5b51454adfa840bd593658325a60a50b0216f12eb5d2937efe6cea935675b7d9060600160405180910390a25050505050505050565b60005460ff1661144d576040517fcfe7975b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060008084865af1610c655763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716612709576390b8ec186000526004601cfd5b6000603452505050565b61271b611404565b60015415612755576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060000361278f576040517f7fcce2a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600155565b600260035403612804576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640160405180910390fd5b6002600355565b6040518060c0016040528060001515815260200160006001600160a01b0316815260200160008152602001612853604051806040016040528060008152602001606081525090565b8152602001600081526020016000905290565b508054600082556004029060005260206000209081019061130791905b808211156128bc57600080825560018201818155816128a560028501826128c0565b50505060038101805460ff19169055600401612883565b5090565b5080546128cc9061329c565b6000825580601f106128dc575050565b601f01602090049060005260206000209081019061130791905b808211156128bc57600081556001016128f6565b6001600160a01b038116811461130757600080fd5b6000806040838503121561293257600080fd5b823561293d8161290a565b946020939093013593505050565b6007811061130757600080fd5b80356129638161294b565b919050565b6000806040838503121561297b57600080fd5b82356129868161290a565b915060208301356129968161294b565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156129da576129da6129a1565b60405290565b6040805190810167ffffffffffffffff811182821017156129da576129da6129a1565b60405160c0810167ffffffffffffffff811182821017156129da576129da6129a1565b604051601f8201601f1916810167ffffffffffffffff81118282101715612a4f57612a4f6129a1565b604052919050565b600067ffffffffffffffff821115612a7157612a716129a1565b5060051b60200190565b600082601f830112612a8c57600080fd5b81356020612aa1612a9c83612a57565b612a26565b82815260059290921b84018101918181019086841115612ac057600080fd5b8286015b84811015612ae4578035612ad78161290a565b8352918301918301612ac4565b509695505050505050565b600067ffffffffffffffff821115612b0957612b096129a1565b50601f01601f191660200190565b6000612b25612a9c84612aef565b9050828152838383011115612b3957600080fd5b828260208301376000602084830101529392505050565b600082601f830112612b6157600080fd5b612b7083833560208501612b17565b9392505050565b600080600060608486031215612b8c57600080fd5b833567ffffffffffffffff80821115612ba457600080fd5b612bb087838801612a7b565b94506020860135915080821115612bc657600080fd5b50612bd386828701612b50565b9250506040840135612be48161290a565b809150509250925092565b60008060408385031215612c0257600080fd5b612c0c833561290a565b8235915067ffffffffffffffff8060208501351115612c2a57600080fd5b6020840135840185601f820112612c4057600080fd5b612c4d612a9c8235612a57565b81358082526020808301929160051b840101881015612c6b57600080fd5b602083015b6020843560051b850101811015612d57578481351115612c8f57600080fd5b80358401601f196060828c0382011215612ca857600080fd5b612cb06129b7565b602083013581528760408401351115612cc857600080fd5b60408301358301604083828f03011215612ce157600080fd5b612ce96129e0565b9250602081013583528860408201351115612d0357600080fd5b604081013501603f81018d13612d1857600080fd5b612d2a8d602083013560408401612b17565b602084015250816020820152612d4260608401612958565b60408201528552505060209283019201612c70565b50809450505050509250929050565b600060208284031215612d7857600080fd5b8135612b708161290a565b60005b83811015612d9e578181015183820152602001612d86565b50506000910152565b60008151808452612dbf816020860160208601612d83565b601f01601f19169290920160200192915050565b8051825260006020820151604060208501526116056040850182612da7565b634e487b7160e01b600052602160045260246000fd5b60078110612e2657634e487b7160e01b600052602160045260246000fd5b9052565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015612ea757603f19898403018552815160608151855288820151818a870152612e7f82870182612dd3565b915050878201519150612e9488860183612e08565b9588019593505090860190600101612e51565b509098975050505050505050565b60008060408385031215612ec857600080fd5b823567ffffffffffffffff811115612edf57600080fd5b612eeb85828601612b50565b92505060208301356129968161290a565b600060208284031215612f0e57600080fd5b5035919050565b60008060208385031215612f2857600080fd5b823567ffffffffffffffff80821115612f4057600080fd5b818501915085601f830112612f5457600080fd5b813581811115612f6357600080fd5b8660208260051b8501011115612f7857600080fd5b60209290920196919550909350505050565b600080600060608486031215612f9f57600080fd5b8335612faa8161290a565b925060208401359150604084013567ffffffffffffffff811115612fcd57600080fd5b840160408187031215612be457600080fd5b602081528151151560208201526001600160a01b036020830151166040820152604082015160608201526000606083015160c0608084015261302460e0840182612dd3565b9050608084015161303860a0850182612e08565b5060a084015161304b60c0850182612e08565b509392505050565b6000806040838503121561306657600080fd5b823567ffffffffffffffff8082111561307e57600080fd5b61308a86838701612a7b565b93506020915081850135818111156130a157600080fd5b8501601f810187136130b257600080fd5b80356130c0612a9c82612a57565b81815260059190911b820184019084810190898311156130df57600080fd5b8584015b83811015613117578035868111156130fb5760008081fd5b6131098c8983890101612b50565b8452509186019186016130e3565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b8281101561317357815180516001600160a01b03168552860151868501529284019290850190600101613145565b5091979650505050505050565b801515811461130757600080fd5b6000602082840312156131a057600080fd5b8135612b7081613180565b8381526060602082015260006131c46060830185612dd3565b90506116056040830184612e08565b60208101610b918284612e08565b600080604083850312156131f457600080fd5b82359150602083013567ffffffffffffffff81111561321257600080fd5b61321e85828601612b50565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038416815260208101839052606081016116056040830184612e08565b6001600160a01b038316815260408101612b706020830184612e08565b60006020828403121561329157600080fd5b8151612b7081613180565b600181811c908216806132b057607f821691505b6020821081036132d057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610b9157610b916132d6565b80516129638161290a565b600082601f83011261331b57600080fd5b8151613329612a9c82612aef565b81815284602083860101111561333e57600080fd5b611605826020830160208701612d83565b60006040828403121561336157600080fd5b6133696129e0565b905081518152602082015167ffffffffffffffff81111561338957600080fd5b6133958482850161330a565b60208301525092915050565b6000602082840312156133b357600080fd5b815167ffffffffffffffff808211156133cb57600080fd5b9083019060c082860312156133df57600080fd5b6133e7612a03565b8251815260208301516133f98161290a565b6020820152604083015161340c8161290a565b604082015260608301518281111561342357600080fd5b61342f8782860161334f565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b601f82111561083e57600081815260208120601f850160051c8101602086101561347c5750805b601f850160051c820191505b818110156114cd57828155600101613488565b813581556001808201602080850135601e198636030181126134bc57600080fd5b8501803567ffffffffffffffff8111156134d557600080fd5b80360383830113156134e657600080fd5b6134fa816134f4865461329c565b86613455565b6000601f821160018114613530576000831561351857508382018501355b600019600385901b1c1916600184901b178655613589565b600086815260209020601f19841690835b8281101561356057868501880135825593870193908901908701613541565b508482101561357f5760001960f88660031b161c198785880101351681555b50508683881b0186555b505050505050505050565b6001600160a01b0384168152826020820152606060408201528135606082015260006020830135601e198436030181126135cd57600080fd5b830160208101903567ffffffffffffffff8111156135ea57600080fd5b8036038213156135f957600080fd5b604060808501528060a0850152808260c0860137600060c0828601015260c0601f19601f83011685010192505050949350505050565b60006060828403121561364157600080fd5b6136496129b7565b825161365481613180565b8152602083015161366481613180565b6020820152604083015161367781613180565b60408201529392505050565b8281526040602082015260006116056040830184612da7565b80820180821115610b9157610b916132d6565b6000602082840312156136c157600080fd5b815167ffffffffffffffff808211156136d957600080fd5b9083019060c082860312156136ed57600080fd5b6136f5612a03565b825181526020830151602082015260408301518281111561371557600080fd5b6137218782860161330a565b60408301525060608301518281111561373957600080fd5b6137458782860161334f565b606083015250613757608084016132ff565b608082015261376860a084016132ff565b60a082015295945050505050565b815167ffffffffffffffff811115613790576137906129a1565b6137a48161379e845461329c565b84613455565b602080601f8311600181146137d957600084156137c15750858301515b600019600386901b1c1916600185901b1785556114cd565b600085815260208120601f198616915b82811015613808578886015182559484019460019091019084016137e9565b50858210156138265787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000806000806080858703121561384c57600080fd5b84516138578161290a565b60208601519094506138688161290a565b60408601516060870151919450925067ffffffffffffffff81111561388c57600080fd5b6138988782880161334f565b91505092959194509250565b6040815260006138b76040830185612da7565b90506001600160a01b03831660208301529392505050565b6000602082840312156138e157600080fd5b8151612b708161290a565b60008060006060848603121561390157600080fd5b835161390c8161290a565b602085015190935061391d8161294b565b80925050604084015190509250925092565b8082028115828204841417610b9157610b916132d6565b60008261396357634e487b7160e01b600052601260045260246000fd5b500490565b60006001820161397a5761397a6132d6565b506001019056fea2646970667358221220c6a1b3af64921092f1f44731e41851b284576d9616e155eb0ce4b214121510a564736f6c63430008130033";
