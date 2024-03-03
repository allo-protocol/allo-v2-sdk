export const abi = [
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
    name: "ALLOCATION_EXCEEDS_POOL_AMOUNT",
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
    name: "INVALID_MILESTONE",
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
    name: "MILESTONES_ALREADY_SET",
    type: "error",
  },
  {
    inputs: [],
    name: "MILESTONE_ALREADY_ACCEPTED",
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
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "milestoneId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IStrategy.Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "MilestoneStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "milestoneId",
        type: "uint256",
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
    name: "MilestoneSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
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
    ],
    name: "MilestonesReviewed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "milestonesLength",
        type: "uint256",
      },
    ],
    name: "MilestonesSet",
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
        indexed: false,
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
    ],
    name: "RecipientStatusChanged",
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
        internalType: "uint128",
        name: "registrationStartTime",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "registrationEndTime",
        type: "uint128",
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
    inputs: [],
    name: "allocatedGrantAmount",
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
        internalType: "address",
        name: "_recipientId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_milestoneId",
        type: "uint256",
      },
    ],
    name: "getMilestoneStatus",
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
    inputs: [
      {
        internalType: "address",
        name: "_recipientId",
        type: "address",
      },
    ],
    name: "getMilestones",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amountPercentage",
            type: "uint256",
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
            internalType: "enum IStrategy.Status",
            name: "milestoneStatus",
            type: "uint8",
          },
        ],
        internalType: "struct DirectGrantsSimpleStrategy.Milestone[]",
        name: "",
        type: "tuple[]",
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
            name: "grantAmount",
            type: "uint256",
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
            internalType: "enum IStrategy.Status",
            name: "recipientStatus",
            type: "uint8",
          },
          {
            internalType: "enum IStrategy.Status",
            name: "milestonesReviewStatus",
            type: "uint8",
          },
        ],
        internalType: "struct DirectGrantsSimpleStrategy.Recipient",
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
    name: "grantAmountRequired",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "milestones",
    outputs: [
      {
        internalType: "uint256",
        name: "amountPercentage",
        type: "uint256",
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
        internalType: "enum IStrategy.Status",
        name: "milestoneStatus",
        type: "uint8",
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
        internalType: "uint128",
        name: "",
        type: "uint128",
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
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registryGating",
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
        name: "_recipientId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_milestoneId",
        type: "uint256",
      },
    ],
    name: "rejectMilestone",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipientId",
        type: "address",
      },
      {
        internalType: "enum IStrategy.Status",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "reviewSetMilestones",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipientId",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amountPercentage",
            type: "uint256",
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
            internalType: "enum IStrategy.Status",
            name: "milestoneStatus",
            type: "uint8",
          },
        ],
        internalType: "struct DirectGrantsSimpleStrategy.Milestone[]",
        name: "_milestones",
        type: "tuple[]",
      },
    ],
    name: "setMilestones",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_flag",
        type: "bool",
      },
    ],
    name: "setPoolActive",
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
    ],
    name: "setRecipientStatusToInReview",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipientId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_milestoneId",
        type: "uint256",
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
        name: "_metadata",
        type: "tuple",
      },
    ],
    name: "submitMilestone",
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
    name: "upcomingMilestone",
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
        internalType: "uint128",
        name: "_registrationStartTime",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_registrationEndTime",
        type: "uint128",
      },
    ],
    name: "updatePoolTimestamps",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export const bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162003d0338038062003d038339810160408190526200003491620000bf565b6001600160a01b03821660805260405182908290620000589082906020016200019a565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001cf9050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b65781810151838201526020016200009c565b50506000910152565b60008060408385031215620000d357600080fd5b82516001600160a01b0381168114620000eb57600080fd5b60208401519092506001600160401b03808211156200010957600080fd5b818501915085601f8301126200011e57600080fd5b81518181111562000133576200013362000083565b604051601f8201601f19908116603f011681019083821181831017156200015e576200015e62000083565b816040528281528860208487010111156200017857600080fd5b6200018b83602083016020880162000099565b80955050505050509250929050565b6020815260008251806020840152620001bb81604085016020870162000099565b601f01601f19169190910160400192915050565b60805160a051613ad66200022d600039600061039a01526000818161028f0152818161092f01528181610c7e015281816114780152818161150b01528181611c4901528181611fa601528181612166015261258c0152613ad66000f3fe6080604052600436106101f25760003560e01c80639be2ccf51161010d578063df868ed3116100a0578063eb11af931161006f578063eb11af9314610607578063edd146cc14610634578063ef2920fc14610654578063f5b0dfb714610667578063f83067e71461068757600080fd5b8063df868ed314610585578063dff7d2c71461059d578063e2372b58146105c4578063e8eeb806146105f157600080fd5b8063b5f620ce116100dc578063b5f620ce146104f7578063c6c17f8e14610517578063c7a892bf14610537578063cb0e85a61461056657600080fd5b80639be2ccf514610468578063a0cf0aea14610488578063a647d23e146104b0578063b2b878d0146104ca57600080fd5b806338fff2d0116101855780634ab4ba42116101545780634ab4ba42146103be5780634d31d087146103d357806362812a39146104035780639af5c09d1461043057600080fd5b806338fff2d01461032c57806339b25a9a1461034b5780633bf3577d1461036b57806342fda9c71461038b57600080fd5b806315cc481e116101c157806315cc481e1461028057806322a4e42d146102cc5780632bbe0cae146102f95780632e1a7d4d1461030c57600080fd5b8063068ae461146101fe57806309c4b8df146102205780630a6f0ee9146102405780630cfad8ee1461026057600080fd5b366101f957005b600080fd5b34801561020a57600080fd5b5061021e6102193660046129b7565b6106a7565b005b34801561022c57600080fd5b5061021e61023b366004612a00565b61079a565b34801561024c57600080fd5b5061021e61025b366004612c0f565b6108c3565b34801561026c57600080fd5b5061021e61027b366004612c87565b6108e3565b34801561028c57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b3480156102d857600080fd5b506102ec6102e7366004612dfe565b610ab0565b6040516102c39190612ec2565b6102af610307366004612f4d565b610c12565b34801561031857600080fd5b5061021e610327366004612f94565b610c37565b34801561033857600080fd5b506001545b6040519081526020016102c3565b34801561035757600080fd5b5061021e610366366004612fad565b610d09565b34801561037757600080fd5b5061021e610386366004613022565b610db6565b34801561039757600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061033d565b3480156103ca57600080fd5b5060025461033d565b3480156103df57600080fd5b506103f36103ee366004612dfe565b61108c565b60405190151581526020016102c3565b34801561040f57600080fd5b5061042361041e366004612dfe565b611097565b6040516102c39190613077565b34801561043c57600080fd5b50600454610450906001600160801b031681565b6040516001600160801b0390911681526020016102c3565b34801561047457600080fd5b506005546103f39062010000900460ff1681565b34801561049457600080fd5b506102af73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b3480156104bc57600080fd5b506005546103f39060ff1681565b3480156104d657600080fd5b506104ea6104e53660046130eb565b6110a8565b6040516102c391906131c0565b34801561050357600080fd5b5061021e610512366004613226565b6111a7565b34801561052357600080fd5b5061021e610532366004613258565b6111f4565b34801561054357600080fd5b506105576105523660046129b7565b611275565b6040516102c393929190613286565b34801561057257600080fd5b506005546103f390610100900460ff1681565b34801561059157600080fd5b5060005460ff166103f3565b3480156105a957600080fd5b5060045461045090600160801b90046001600160801b031681565b3480156105d057600080fd5b5061033d6105df366004612dfe565b600a6020526000908152604090205481565b3480156105fd57600080fd5b5061033d60065481565b34801561061357600080fd5b50610627610622366004612dfe565b611364565b6040516102c391906132ae565b34801561064057600080fd5b5061021e61064f3660046132bc565b61136f565b61021e610662366004612f4d565b6113c2565b34801561067357600080fd5b5061021e610682366004612f94565b6113dc565b34801561069357600080fd5b506106276106a23660046129b7565b611406565b336106b18161144e565b6001600160a01b038316600090815260096020526040902080548311156106eb57604051632f1f68e160e11b815260040160405180910390fd5b60008184815481106106ff576106ff613303565b6000918252602090912060049091020190506002600382015460ff16600681111561072c5761072c612e8a565b0361074a57604051637f46ed2760e11b815260040160405180910390fd5b6003818101805460ff1916821790556040517ff1af82b65c631a030029b10ea8f00f68290285c7c797644155b8f23969ca1d639161078b9188918891613319565b60405180910390a15050505050565b336107a48161144e565b6001600160a01b038316600090815260086020908152604080832060099092528220549091036107e757604051632f1f68e160e11b815260040160405180910390fd5b60026004820154610100900460ff16600681111561080757610807612e8a565b03610825576040516305ca31d360e51b815260040160405180910390fd5b600283600681111561083957610839612e8a565b14806108565750600383600681111561085457610854612e8a565b145b156108bd5760048101805484919061ff00191661010083600681111561087e5761087e612e8a565b02179055507f30dae55c386c6176f3f7b7ee6ad4df33970f2e442cb0142e978cf78fd8ae138d84846040516108b492919061333d565b60405180910390a15b50505050565b6108cb611500565b6108d361154b565b6108de83838361156e565b505050565b6000336001600160a01b0384161480610901575061090183336115b8565b6001546040516329e40d4b60e01b815260048101919091523360248201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610976573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099a919061335a565b9050811580156109a8575080155b156109c65760405163075fd2b160e01b815260040160405180910390fd5b6001600160a01b03841660009081526008602052604090206002600482015460ff1660068111156109f9576109f9612e8a565b14610a175760405163392c16fb60e21b815260040160405180910390fd5b60026004820154610100900460ff166006811115610a3757610a37612e8a565b03610a55576040516305ca31d360e51b815260040160405180910390fd5b610a5f85856116c2565b8115610aa95760048101805461ff0019166102001790556040517f30dae55c386c6176f3f7b7ee6ad4df33970f2e442cb0142e978cf78fd8ae138d9061078b90879060029061333d565b5050505050565b6001600160a01b0381166000908152600960209081526040808320805482518185028101850190935280835260609492939192909184015b82821015610c075783829060005260206000209060040201604051806060016040529081600082015481526020016001820160405180604001604052908160008201548152602001600182018054610b3f90613377565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6b90613377565b8015610bb85780601f10610b8d57610100808354040283529160200191610bb8565b820191906000526020600020905b815481529060010190602001808311610b9b57829003601f168201915b505050919092525050508152600382015460209091019060ff166006811115610be357610be3612e8a565b6006811115610bf457610bf4612e8a565b8152505081526020019060010190610ae8565b505050509050919050565b6000610c1c611500565b610c2461154b565b610c2e838361187a565b90505b92915050565b33610c418161144e565b610c49611bce565b8160026000828254610c5b91906133c7565b909155505060015460405163068bcd8d60e01b8152610d05916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d91610cb59160040190815260200190565b600060405180830381865afa158015610cd2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610cfa919081019061347c565b604001513384611bf2565b5050565b33610d138161144e565b8160005b81811015610aa9576000858583818110610d3357610d33613303565b9050602002016020810190610d489190612dfe565b6001600160a01b03811660009081526008602052604090819020600401805460ff1916600590811790915590519192507f94593b52aa436dd31a63e313045c2eb23d43eb2d6f5b4d7797b4432e7b27749091610da591849161333d565b60405180910390a150600101610d17565b6001600160a01b0383163314801590610dd65750610dd483336115b8565b155b15610df45760405163075fd2b160e01b815260040160405180910390fd5b6001600160a01b038084166000908152600860209081526040808320815160c081018352815460ff8116151582526101009004909516858401526001810154858301528151808301909252600281018054835260038201805495969592946060870194939084019190610e6690613377565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9290613377565b8015610edf5780601f10610eb457610100808354040283529160200191610edf565b820191906000526020600020905b815481529060010190602001808311610ec257829003601f168201915b505050919092525050508152600482015460209091019060ff166006811115610f0a57610f0a612e8a565b6006811115610f1b57610f1b612e8a565b81526020016004820160019054906101000a900460ff166006811115610f4357610f43612e8a565b6006811115610f5457610f54612e8a565b9052509050600281608001516006811115610f7157610f71612e8a565b14610f8f5760405163392c16fb60e21b815260040160405180910390fd5b6001600160a01b03841660009081526009602052604090208054841115610fc957604051632f1f68e160e11b815260040160405180910390fd5b6000818581548110610fdd57610fdd613303565b6000918252602090912060049091020190506002600382015460ff16600681111561100a5761100a612e8a565b0361102857604051637f46ed2760e11b815260040160405180910390fd5b83600182016110378282613576565b505060038101805460ff191660011790556040517f8673cfb5a2cbad812463bdfd7c85511f29c804579a86d318889ab925155399619061107c9088908890889061366f565b60405180910390a1505050505050565b6000610c3182611c2c565b61109f6128a3565b610c3182611cd1565b815181516060919081146110cf57604051633da4c02b60e11b815260040160405180910390fd5b60008167ffffffffffffffff8111156110ea576110ea612a39565b60405190808252806020026020018201604052801561112f57816020015b60408051808201909152600080825260208201528152602001906001900390816111085790505b50905060005b8281101561119e5761117986828151811061115257611152613303565b602002602001015186838151811061116c5761116c613303565b6020026020010151611e41565b82828151811061118b5761118b613303565b6020908102919091010152600101611135565b50949350505050565b336111b18161144e565b6111ba82611e8c565b60405182151581527fd94c9bc4d43c51d8dc345a016d8e3d994432fac68e72832e4cf3a616bd8efae0906020015b60405180910390a15050565b336111fe8161144e565b6112088383611ed3565b6001600160801b03838116600160801b8483168102828117600481905560408051928616909417825291909104909216602083015233908201527fe109a7bcf941542c98f6444ff3c4f974732df81922fd46047a3ad2ceb6b089db906060015b60405180910390a1505050565b6009602052816000526040600020818154811061129157600080fd5b90600052602060002090600402016000915091505080600001549080600101604051806040016040529081600082015481526020016001820180546112d590613377565b80601f016020809104026020016040519081016040528092919081815260200182805461130190613377565b801561134e5780601f106113235761010080835404028352916020019161134e565b820191906000526020600020905b81548152906001019060200180831161133157829003601f168201915b5050509190925250505060039091015460ff1683565b6000610c3182611f06565b600081806020019051810190611385919061370a565b90506113918382611f1b565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a83836040516112689291906137a2565b6113ca611500565b6113d261154b565b610d058282612094565b6113e4611500565b80600260008282546113f691906137bb565b9091555061140390508181565b50565b6001600160a01b038216600090815260096020526040812080548390811061143057611430613303565b600091825260209091206004909102016003015460ff169392505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa1580156114bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e3919061335a565b6114035760405163075fd2b160e01b815260040160405180910390fd5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146115495760405163075fd2b160e01b815260040160405180910390fd5b565b60015460000361154957604051630f68fe6360e21b815260040160405180910390fd5b806115788161144e565b835160005b818110156115b0576115a886828151811061159a5761159a613303565b602002602001015185612379565b60010161157d565b505050505050565b60055460405163dd93da4360e01b81526001600160a01b038481166004830152600092839263010000009091049091169063dd93da4390602401600060405180830381865afa15801561160f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261163791908101906137ce565b6005548151604051635e8a791560e01b815260048101919091526001600160a01b038681166024830152929350630100000090910490911690635e8a791590604401602060405180830381865afa158015611696573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ba919061335a565b949350505050565b6001600160a01b03821660009081526009602052604081205415611701576001600160a01b0383166000908152600960205260408120611701916128fe565b815160005b8181101561181257600084828151811061172257611722613303565b602002602001015190506000600681111561173f5761173f612e8a565b8160400151600681111561175557611755612e8a565b1461177357604051632f1f68e160e11b815260040160405180910390fd5b805161177f90856137bb565b6001600160a01b0387166000908152600960209081526040822080546001818101835591845292829020855160049094020192835584820151805191840191825591820151939750849360028401906117d89082613895565b505050604082015160038201805460ff191660018360068111156117fe576117fe612e8a565b021790555050600190920191506117069050565b5081670de0b6b3a76400001461183b57604051632f1f68e160e11b815260040160405180910390fd5b604080516001600160a01b0386168152602081018390527fb000fb1507aac2465ccb4f6bd1b601c7053279005e9e9932c41946b35c84949b91016108b4565b600061188461271f565b61188c612742565b6000806000806118af604051806040016040528060008152602001606081525090565b60055460ff161561190457878060200190518101906118ce9190613955565b929850909650925090506118e286886115b8565b6118ff5760405163075fd2b160e01b815260040160405180910390fd5b611971565b878060200190518101906119189190613955565b9297509095506001600160a01b03861615159450925090508261193b578661193d565b835b9550828015611953575061195186886115b8565b155b156119715760405163075fd2b160e01b815260040160405180910390fd5b60055462010000900460ff168015611987575081155b156119a5576040516303b167dd60e01b815260040160405180910390fd5b60026001600160a01b03871660009081526008602052604090206004015460ff1660068111156119d7576119d7612e8a565b036119f55760405163083a81f760e31b815260040160405180910390fd5b600554610100900460ff168015611a1857506020810151511580611a1857508051155b15611a365760405163c19e07c560e01b815260040160405180910390fd5b6040805160c0810190915260055460009190819060ff16611a575785611a5a565b60015b151581526001600160a01b0388166020820152604081018590526060810184905260800160018152602001600190526001600160a01b03888116600090815260086020908152604091829020845181548684015174ffffffffffffffffffffffffffffffffffffffffff1990911691151574ffffffffffffffffffffffffffffffffffffffff00191691909117610100919095160293909317835590830151600183015560608301518051600284019081559181015193945084939091906003840190611b279082613895565b505050608082015160048201805460ff19166001836006811115611b4d57611b4d612e8a565b021790555060a082015160048201805461ff001916610100836006811115611b7757611b77612e8a565b0217905550905050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc628a8a604051611bba9291906139c3565b60405180910390a250505050505092915050565b60005460ff161561154957604051630b18626760e41b815260040160405180910390fd5b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601611c21576108de828261278c565b6108de8383836127a8565b6001546040516329e40d4b60e01b81526000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916329e40d4b91611c909186906004019182526001600160a01b0316602082015260400190565b602060405180830381865afa158015611cad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c31919061335a565b611cd96128a3565b6001600160a01b03808316600090815260086020908152604091829020825160c081018452815460ff811615158252610100900490941684830152600181015484840152825180840190935260028101805484526003820180549294606087019490939084019190611d4a90613377565b80601f0160208091040260200160405190810160405280929190818152602001828054611d7690613377565b8015611dc35780601f10611d9857610100808354040283529160200191611dc3565b820191906000526020600020905b815481529060010190602001808311611da657829003601f168201915b505050919092525050508152600482015460209091019060ff166006811115611dee57611dee612e8a565b6006811115611dff57611dff612e8a565b81526020016004820160019054906101000a900460ff166006811115611e2757611e27612e8a565b6006811115611e3857611e38612e8a565b90525092915050565b60408051808201909152600080825260208201526000611e6084611cd1565b6040805180820182526020808401516001600160a01b0316825291909201519082015291505092915050565b6000805460ff19168215159081179091556040519081527fd94c9bc4d43c51d8dc345a016d8e3d994432fac68e72832e4cf3a616bd8efae09060200160405180910390a150565b806001600160801b0316826001600160801b03161115610d0557604051637fcce2a960e01b815260040160405180910390fd5b6000611f1182611cd1565b6080015192915050565b611f24826127f7565b8051600580546020808501516040808701511515620100000262ff0000199215156101000261ff00199715159790971661ffff1990951694909417959095171691909117909155606083015160808401516001600160801b03908116600160801b0291161760049081558251635ab1bd5360e01b815292516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001693635ab1bd5393818401939092918290030181865afa158015611fed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061201191906139ee565b600560036101000a8154816001600160a01b0302191690836001600160a01b031602179055506120416001611e8c565b600454604080516001600160801b038084168252600160801b909304909216602083015233908201527fe109a7bcf941542c98f6444ff3c4f974732df81922fd46047a3ad2ceb6b089db906060016111e8565b61209c612846565b806120a68161144e565b6000806000858060200190518101906120bf9190613a0b565b6001600160a01b0383166000908152600860209081526040808320600a909252909120549396509194509250901561210a576040516305ca31d360e51b815260040160405180910390fd5b6002600482015460ff16600681111561212557612125612e8a565b141580156121445750600283600681111561214257612142612e8a565b145b156122df5760015460405163068bcd8d60e01b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d9161219d9160040190815260200190565b600060405180830381865afa1580156121ba573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526121e2919081019061347c565b905082600660008282546121f691906137bb565b9091555050600254600654111561222057604051638e81b16f60e01b815260040160405180910390fd5b6001820183905560048201805460ff191660029081179091556040517f94593b52aa436dd31a63e313045c2eb23d43eb2d6f5b4d7797b4432e7b2774909161226a9188919061333d565b60405180910390a1846001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b836001015483604001518a6040516122d1939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a25061236a565b6003600482015460ff1660068111156122fa576122fa612e8a565b141580156123195750600383600681111561231757612317612e8a565b145b1561236a5760048101805460ff191660039081179091556040517f94593b52aa436dd31a63e313045c2eb23d43eb2d6f5b4d7797b4432e7b277490916123619187919061333d565b60405180910390a15b5050505050610d056001600355565b6001600160a01b038083166000908152600a60209081526040808320546009835281842060088452828520835160c081018552815460ff811615158252610100900490971687860152600181015487850152835180850190945260028101805485526003820180549498939796939592946060870194840191906123fc90613377565b80601f016020809104026020016040519081016040528092919081815260200182805461242890613377565b80156124755780601f1061244a57610100808354040283529160200191612475565b820191906000526020600020905b81548152906001019060200180831161245857829003601f168201915b505050919092525050508152600482015460209091019060ff1660068111156124a0576124a0612e8a565b60068111156124b1576124b1612e8a565b81526020016004820160019054906101000a900460ff1660068111156124d9576124d9612e8a565b60068111156124ea576124ea612e8a565b815250509050600082848154811061250457612504613303565b90600052602060002090600402019050828054905084118061253f57506001600382015460ff16600681111561253c5761253c612e8a565b14155b1561255d57604051632f1f68e160e11b815260040160405180910390fd5b6000670de0b6b3a76400008260000154846040015161257c9190613a4e565b6125869190613a65565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663068bcd8d6001546040518263ffffffff1660e01b81526004016125da91815260200190565b600060405180830381865afa1580156125f7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261261f919081019061347c565b9050816002600082825461263391906133c7565b9250508190555061264d8160400151856020015184611bf2565b60038301805460ff191660021790556001600160a01b0388166000908152600a6020526040812080549161268083613a87565b91905055507ff1af82b65c631a030029b10ea8f00f68290285c7c797644155b8f23969ca1d63888760026040516126b993929190613319565b60405180910390a1602080850151604080516001600160a01b039283168152928301859052898216908301528916907fb5b51454adfa840bd593658325a60a50b0216f12eb5d2937efe6cea935675b7d9060600160405180910390a25050505050505050565b60005460ff166115495760405163cfe7975b60e01b815260040160405180910390fd5b600454426001600160801b03909116118061276e5750600454600160801b90046001600160801b031642115b1561154957604051635b04f6ad60e11b815260040160405180910390fd5b60008060008084865af1610d055763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166127ed576390b8ec186000526004601cfd5b6000603452505050565b6127ff611500565b600154156128205760405163439a74c960e01b815260040160405180910390fd5b8060000361284157604051637fcce2a960e01b815260040160405180910390fd5b600155565b60026003540361289c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640160405180910390fd5b6002600355565b6040518060c0016040528060001515815260200160006001600160a01b03168152602001600081526020016128eb604051806040016040528060008152602001606081525090565b8152602001600081526020016000905290565b508054600082556004029060005260206000209081019061140391905b80821115612954576000808255600182018181558161293d6002850182612958565b50505060038101805460ff1916905560040161291b565b5090565b50805461296490613377565b6000825580601f10612974575050565b601f01602090049060005260206000209081019061140391905b80821115612954576000815560010161298e565b6001600160a01b038116811461140357600080fd5b600080604083850312156129ca57600080fd5b82356129d5816129a2565b946020939093013593505050565b6007811061140357600080fd5b80356129fb816129e3565b919050565b60008060408385031215612a1357600080fd5b8235612a1e816129a2565b91506020830135612a2e816129e3565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715612a7257612a72612a39565b60405290565b6040805190810167ffffffffffffffff81118282101715612a7257612a72612a39565b60405160c0810167ffffffffffffffff81118282101715612a7257612a72612a39565b604051601f8201601f1916810167ffffffffffffffff81118282101715612ae757612ae7612a39565b604052919050565b600067ffffffffffffffff821115612b0957612b09612a39565b5060051b60200190565b600082601f830112612b2457600080fd5b81356020612b39612b3483612aef565b612abe565b82815260059290921b84018101918181019086841115612b5857600080fd5b8286015b84811015612b7c578035612b6f816129a2565b8352918301918301612b5c565b509695505050505050565b600067ffffffffffffffff821115612ba157612ba1612a39565b50601f01601f191660200190565b6000612bbd612b3484612b87565b9050828152838383011115612bd157600080fd5b828260208301376000602084830101529392505050565b600082601f830112612bf957600080fd5b612c0883833560208501612baf565b9392505050565b600080600060608486031215612c2457600080fd5b833567ffffffffffffffff80821115612c3c57600080fd5b612c4887838801612b13565b94506020860135915080821115612c5e57600080fd5b50612c6b86828701612be8565b9250506040840135612c7c816129a2565b809150509250925092565b60008060408385031215612c9a57600080fd5b612ca483356129a2565b8235915067ffffffffffffffff8060208501351115612cc257600080fd5b6020840135840185601f820112612cd857600080fd5b612ce5612b348235612aef565b81358082526020808301929160051b840101881015612d0357600080fd5b602083015b6020843560051b850101811015612def578481351115612d2757600080fd5b80358401601f196060828c0382011215612d4057600080fd5b612d48612a4f565b602083013581528760408401351115612d6057600080fd5b60408301358301604083828f03011215612d7957600080fd5b612d81612a78565b9250602081013583528860408201351115612d9b57600080fd5b604081013501603f81018d13612db057600080fd5b612dc28d602083013560408401612baf565b602084015250816020820152612dda606084016129f0565b60408201528552505060209283019201612d08565b50809450505050509250929050565b600060208284031215612e1057600080fd5b8135612c08816129a2565b60005b83811015612e36578181015183820152602001612e1e565b50506000910152565b60008151808452612e57816020860160208601612e1b565b601f01601f19169290920160200192915050565b8051825260006020820151604060208501526116ba6040850182612e3f565b634e487b7160e01b600052602160045260246000fd5b60078110612ebe57634e487b7160e01b600052602160045260246000fd5b9052565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015612f3f57603f19898403018552815160608151855288820151818a870152612f1782870182612e6b565b915050878201519150612f2c88860183612ea0565b9588019593505090860190600101612ee9565b509098975050505050505050565b60008060408385031215612f6057600080fd5b823567ffffffffffffffff811115612f7757600080fd5b612f8385828601612be8565b9250506020830135612a2e816129a2565b600060208284031215612fa657600080fd5b5035919050565b60008060208385031215612fc057600080fd5b823567ffffffffffffffff80821115612fd857600080fd5b818501915085601f830112612fec57600080fd5b813581811115612ffb57600080fd5b8660208260051b850101111561301057600080fd5b60209290920196919550909350505050565b60008060006060848603121561303757600080fd5b8335613042816129a2565b925060208401359150604084013567ffffffffffffffff81111561306557600080fd5b840160408187031215612c7c57600080fd5b602081528151151560208201526001600160a01b036020830151166040820152604082015160608201526000606083015160c060808401526130bc60e0840182612e6b565b905060808401516130d060a0850182612ea0565b5060a08401516130e360c0850182612ea0565b509392505050565b600080604083850312156130fe57600080fd5b823567ffffffffffffffff8082111561311657600080fd5b61312286838701612b13565b935060209150818501358181111561313957600080fd5b8501601f8101871361314a57600080fd5b8035613158612b3482612aef565b81815260059190911b8201840190848101908983111561317757600080fd5b8584015b838110156131af578035868111156131935760008081fd5b6131a18c8983890101612be8565b84525091860191860161317b565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b8281101561320b57815180516001600160a01b031685528601518685015292840192908501906001016131dd565b5091979650505050505050565b801515811461140357600080fd5b60006020828403121561323857600080fd5b8135612c0881613218565b6001600160801b038116811461140357600080fd5b6000806040838503121561326b57600080fd5b823561327681613243565b91506020830135612a2e81613243565b83815260606020820152600061329f6060830185612e6b565b90506116ba6040830184612ea0565b60208101610c318284612ea0565b600080604083850312156132cf57600080fd5b82359150602083013567ffffffffffffffff8111156132ed57600080fd5b6132f985828601612be8565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038416815260208101839052606081016116ba6040830184612ea0565b6001600160a01b038316815260408101612c086020830184612ea0565b60006020828403121561336c57600080fd5b8151612c0881613218565b600181811c9082168061338b57607f821691505b6020821081036133ab57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610c3157610c316133b1565b80516129fb816129a2565b600082601f8301126133f657600080fd5b8151613404612b3482612b87565b81815284602083860101111561341957600080fd5b6116ba826020830160208701612e1b565b60006040828403121561343c57600080fd5b613444612a78565b905081518152602082015167ffffffffffffffff81111561346457600080fd5b613470848285016133e5565b60208301525092915050565b60006020828403121561348e57600080fd5b815167ffffffffffffffff808211156134a657600080fd5b9083019060c082860312156134ba57600080fd5b6134c2612a9b565b8251815260208301516134d4816129a2565b602082015260408301516134e7816129a2565b60408201526060830151828111156134fe57600080fd5b61350a8782860161342a565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b601f8211156108de57600081815260208120601f850160051c810160208610156135575750805b601f850160051c820191505b818110156115b057828155600101613563565b813581556001808201602080850135601e1986360301811261359757600080fd5b8501803567ffffffffffffffff8111156135b057600080fd5b80360383830113156135c157600080fd5b6135d5816135cf8654613377565b86613530565b6000601f82116001811461360b57600083156135f357508382018501355b600019600385901b1c1916600184901b178655613664565b600086815260209020601f19841690835b8281101561363b5786850188013582559387019390890190870161361c565b508482101561365a5760001960f88660031b161c198785880101351681555b50508683881b0186555b505050505050505050565b6001600160a01b0384168152826020820152606060408201528135606082015260006020830135601e198436030181126136a857600080fd5b830160208101903567ffffffffffffffff8111156136c557600080fd5b8036038213156136d457600080fd5b604060808501528060a0850152808260c0860137600060c0828601015260c0601f19601f83011685010192505050949350505050565b600060a0828403121561371c57600080fd5b60405160a0810181811067ffffffffffffffff8211171561373f5761373f612a39565b604052825161374d81613218565b8152602083015161375d81613218565b6020820152604083015161377081613218565b6040820152606083015161378381613243565b6060820152608083015161379681613243565b60808201529392505050565b8281526040602082015260006116ba6040830184612e3f565b80820180821115610c3157610c316133b1565b6000602082840312156137e057600080fd5b815167ffffffffffffffff808211156137f857600080fd5b9083019060c0828603121561380c57600080fd5b613814612a9b565b825181526020830151602082015260408301518281111561383457600080fd5b613840878286016133e5565b60408301525060608301518281111561385857600080fd5b6138648782860161342a565b606083015250613876608084016133da565b608082015261388760a084016133da565b60a082015295945050505050565b815167ffffffffffffffff8111156138af576138af612a39565b6138c3816138bd8454613377565b84613530565b602080601f8311600181146138f857600084156138e05750858301515b600019600386901b1c1916600185901b1785556115b0565b600085815260208120601f198616915b8281101561392757888601518255948401946001909101908401613908565b50858210156139455787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000806000806080858703121561396b57600080fd5b8451613976816129a2565b6020860151909450613987816129a2565b60408601516060870151919450925067ffffffffffffffff8111156139ab57600080fd5b6139b78782880161342a565b91505092959194509250565b6040815260006139d66040830185612e3f565b90506001600160a01b03831660208301529392505050565b600060208284031215613a0057600080fd5b8151612c08816129a2565b600080600060608486031215613a2057600080fd5b8351613a2b816129a2565b6020850151909350613a3c816129e3565b80925050604084015190509250925092565b8082028115828204841417610c3157610c316133b1565b600082613a8257634e487b7160e01b600052601260045260246000fd5b500490565b600060018201613a9957613a996133b1565b506001019056fea2646970667358221220a62bd6d0f685e6dc1dd4490b73941d57bf05abd2e4b5c0b3f25e145beb1e218e64736f6c63430008130033";
