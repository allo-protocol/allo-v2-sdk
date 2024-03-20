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
      {
        internalType: "bytes32",
        name: "milestonesHash",
        type: "bytes32",
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
  "0x60c06040523480156200001157600080fd5b5060405162004176380380620041768339810160408190526200003491620000bf565b6001600160a01b03821660805260405182908290620000589082906020016200019a565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001cf9050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b65781810151838201526020016200009c565b50506000910152565b60008060408385031215620000d357600080fd5b82516001600160a01b0381168114620000eb57600080fd5b60208401519092506001600160401b03808211156200010957600080fd5b818501915085601f8301126200011e57600080fd5b81518181111562000133576200013362000083565b604051601f8201601f19908116603f011681019083821181831017156200015e576200015e62000083565b816040528281528860208487010111156200017857600080fd5b6200018b83602083016020880162000099565b80955050505050509250929050565b6020815260008251806020840152620001bb81604085016020870162000099565b601f01601f19169190910160400192915050565b60805160a051613f496200022d6000396000610390015260008181610285015281816106da0152818161087801528181610bc7015281816115c301528181611e3c0152818161223b0152818161243f01526128700152613f496000f3fe6080604052600436106102025760003560e01c80639be2ccf51161011d578063df868ed3116100b0578063eb11af931161007f578063ef2920fc11610064578063ef2920fc1461067c578063f5b0dfb71461068f578063f83067e7146106af57600080fd5b8063eb11af931461062f578063edd146cc1461065c57600080fd5b8063df868ed3146105a7578063dff7d2c7146105bf578063e2372b58146105ec578063e8eeb8061461061957600080fd5b8063b2b878d0116100ec578063b2b878d01461050a578063b5f620ce14610537578063c7a892bf14610557578063cb0e85a61461058657600080fd5b80639be2ccf514610480578063a0cf0aea146104a1578063a647d23e146104c9578063ab42c5eb146104ea57600080fd5b806339b25a9a116101955780634d31d087116101645780634d31d087146103c957806362812a39146103f957806375777aaa146104265780639af5c09d1461044657600080fd5b806339b25a9a146103415780633bf3577d1461036157806342fda9c7146103815780634ab4ba42146103b457600080fd5b806322a4e42d116101d157806322a4e42d146102c25780632bbe0cae146102ef5780632e1a7d4d1461030257806338fff2d01461032257600080fd5b8063068ae461146102165780630a6f0ee9146102365780630cfad8ee1461025657806315cc481e1461027657600080fd5b366102115761020f6106cf565b005b600080fd5b34801561022257600080fd5b5061020f610231366004612d07565b61071a565b34801561024257600080fd5b5061020f610251366004612f09565b61080c565b34801561026257600080fd5b5061020f610271366004612f9e565b61082c565b34801561028257600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b3480156102ce57600080fd5b506102e26102dd366004613115565b6109f9565b6040516102b991906131d9565b6102a56102fd366004613264565b610b5b565b34801561030e57600080fd5b5061020f61031d3660046132b6565b610b80565b34801561032e57600080fd5b506001545b6040519081526020016102b9565b34801561034d57600080fd5b5061020f61035c3660046132cf565b610c52565b34801561036d57600080fd5b5061020f61037c366004613344565b610d81565b34801561038d57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610333565b3480156103c057600080fd5b50600254610333565b3480156103d557600080fd5b506103e96103e4366004613115565b611056565b60405190151581526020016102b9565b34801561040557600080fd5b50610419610414366004613115565b611061565b6040516102b99190613399565b34801561043257600080fd5b5061020f610441366004613423565b611072565b34801561045257600080fd5b506004546104679067ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016102b9565b34801561048c57600080fd5b506004546103e990600160901b900460ff1681565b3480156104ad57600080fd5b506102a573eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b3480156104d557600080fd5b506004546103e990600160801b900460ff1681565b3480156104f657600080fd5b5061020f610505366004613451565b611126565b34801561051657600080fd5b5061052a610525366004613492565b611295565b6040516102b99190613567565b34801561054357600080fd5b5061020f6105523660046135cd565b6113ad565b34801561056357600080fd5b50610577610572366004612d07565b6113c0565b6040516102b9939291906135ea565b34801561059257600080fd5b506004546103e990600160881b900460ff1681565b3480156105b357600080fd5b5060005460ff166103e9565b3480156105cb57600080fd5b506004546104679068010000000000000000900467ffffffffffffffff1681565b3480156105f857600080fd5b50610333610607366004613115565b60096020526000908152604090205481565b34801561062557600080fd5b5061033360065481565b34801561063b57600080fd5b5061064f61064a366004613115565b6114af565b6040516102b99190613612565b34801561066857600080fd5b5061020f610677366004613620565b6114ba565b61020f61068a366004613264565b61150d565b34801561069b57600080fd5b5061020f6106aa3660046132b6565b611527565b3480156106bb57600080fd5b5061064f6106ca366004612d07565b611551565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107185760405163075fd2b160e01b815260040160405180910390fd5b565b3361072481611599565b6001600160a01b03831660009081526008602052604090208054831061075d57604051632f1f68e160e11b815260040160405180910390fd5b600081848154811061077157610771613667565b6000918252602090912060049091020190506002600382015460ff16600681111561079e5761079e6131a1565b036107bc57604051637f46ed2760e11b815260040160405180910390fd5b6003818101805460ff1916821790556040517ff1af82b65c631a030029b10ea8f00f68290285c7c797644155b8f23969ca1d63916107fd918891889161367d565b60405180910390a15050505050565b6108146106cf565b61081c61164b565b610827838383611687565b505050565b6000336001600160a01b038416148061084a575061084a83336116d1565b6001546040516329e40d4b60e01b815260048101919091523360248201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa1580156108bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e391906136a1565b9050811580156108f1575080155b1561090f5760405163075fd2b160e01b815260040160405180910390fd5b6001600160a01b03841660009081526007602052604090206002600482015460ff166006811115610942576109426131a1565b146109605760405163392c16fb60e21b815260040160405180910390fd5b60026004820154610100900460ff166006811115610980576109806131a1565b0361099e576040516305ca31d360e51b815260040160405180910390fd5b6109a885856117fb565b81156109f25760048101805461ff0019166102001790556040517f30dae55c386c6176f3f7b7ee6ad4df33970f2e442cb0142e978cf78fd8ae138d906107fd9087906002906136be565b5050505050565b6001600160a01b0381166000908152600860209081526040808320805482518185028101850190935280835260609492939192909184015b82821015610b505783829060005260206000209060040201604051806060016040529081600082015481526020016001820160405180604001604052908160008201548152602001600182018054610a88906136db565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab4906136db565b8015610b015780601f10610ad657610100808354040283529160200191610b01565b820191906000526020600020905b815481529060010190602001808311610ae457829003601f168201915b505050919092525050508152600382015460209091019060ff166006811115610b2c57610b2c6131a1565b6006811115610b3d57610b3d6131a1565b8152505081526020019060010190610a31565b505050509050919050565b6000610b656106cf565b610b6d61164b565b610b7783836119bb565b90505b92915050565b33610b8a81611599565b610b92611d9d565b8160026000828254610ba4919061372b565b909155505060015460405163068bcd8d60e01b8152610c4e916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d91610bfe9160040190815260200190565b600060405180830381865afa158015610c1b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c4391908101906137e0565b604001513384611dda565b5050565b33610c5c81611599565b8160005b818110156109f2576000858583818110610c7c57610c7c613667565b9050602002016020810190610c919190613115565b90506000600654118015610cbf57506001600160a01b03811660009081526007602052604090206001015415155b15610d15576001600160a01b0381166000908152600760205260408120600101546006805491929091610cf390849061372b565b90915550506001600160a01b0381166000908152600760205260408120600101555b6001600160a01b03811660009081526007602052604090819020600401805460ff1916600590811790915590517f94593b52aa436dd31a63e313045c2eb23d43eb2d6f5b4d7797b4432e7b27749091610d70918491906136be565b60405180910390a150600101610c60565b6001600160a01b0383163314801590610da15750610d9f83336116d1565b155b15610dbf5760405163075fd2b160e01b815260040160405180910390fd5b6001600160a01b038084166000908152600760209081526040808320815160c081018352815460ff8116151582526101009004909516858401526001810154858301528151808301909252600281018054835260038201805495969592946060870194939084019190610e31906136db565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5d906136db565b8015610eaa5780601f10610e7f57610100808354040283529160200191610eaa565b820191906000526020600020905b815481529060010190602001808311610e8d57829003601f168201915b505050919092525050508152600482015460209091019060ff166006811115610ed557610ed56131a1565b6006811115610ee657610ee66131a1565b81526020016004820160019054906101000a900460ff166006811115610f0e57610f0e6131a1565b6006811115610f1f57610f1f6131a1565b9052509050600281608001516006811115610f3c57610f3c6131a1565b14610f5a5760405163392c16fb60e21b815260040160405180910390fd5b6001600160a01b038416600090815260086020526040902080548410610f9357604051632f1f68e160e11b815260040160405180910390fd5b6000818581548110610fa757610fa7613667565b6000918252602090912060049091020190506002600382015460ff166006811115610fd457610fd46131a1565b03610ff257604051637f46ed2760e11b815260040160405180910390fd5b836001820161100182826138da565b505060038101805460ff191660011790556040517f8673cfb5a2cbad812463bdfd7c85511f29c804579a86d318889ab9251553996190611046908890889088906139d3565b60405180910390a1505050505050565b6000610b7a82611e1f565b611069612bf3565b610b7a82611ec4565b3361107c81611599565b61109a8367ffffffffffffffff168367ffffffffffffffff16612034565b6004805467ffffffffffffffff848116680100000000000000009081026fffffffffffffffffffffffffffffffff199093168783161792909217928390556040805184831681529290930416602082015233918101919091527f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d93359906060015b60405180910390a1505050565b3361113081611599565b6001600160a01b038416600090815260076020908152604080832060089092529091205415806111aa57508260086000876001600160a01b03166001600160a01b031681526020019081526020016000206040516020016111919190613a6e565b6040516020818303038152906040528051906020012014155b156111c857604051632f1f68e160e11b815260040160405180910390fd5b60026004820154610100900460ff1660068111156111e8576111e86131a1565b03611206576040516305ca31d360e51b815260040160405180910390fd5b600284600681111561121a5761121a6131a1565b148061123757506003846006811115611235576112356131a1565b145b156109f25760048101805485919061ff00191661010083600681111561125f5761125f6131a1565b02179055507f30dae55c386c6176f3f7b7ee6ad4df33970f2e442cb0142e978cf78fd8ae138d85856040516107fd9291906136be565b815181516060919081146112d5576040517f7b49805600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008167ffffffffffffffff8111156112f0576112f0612d33565b60405190808252806020026020018201604052801561133557816020015b604080518082019091526000808252602082015281526020019060019003908161130e5790505b50905060005b828110156113a45761137f86828151811061135857611358613667565b602002602001015186838151811061137257611372613667565b6020026020010151612079565b82828151811061139157611391613667565b602090810291909101015260010161133b565b50949350505050565b336113b781611599565b610c4e826120c4565b600860205281600052604060002081815481106113dc57600080fd5b9060005260206000209060040201600091509150508060000154908060010160405180604001604052908160008201548152602001600182018054611420906136db565b80601f016020809104026020016040519081016040528092919081815260200182805461144c906136db565b80156114995780601f1061146e57610100808354040283529160200191611499565b820191906000526020600020905b81548152906001019060200180831161147c57829003601f168201915b5050509190925250505060039091015460ff1683565b6000610b7a8261210b565b6000818060200190518101906114d09190613b7d565b90506114dc8382612120565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051611119929190613c15565b6115156106cf565b61151d61164b565b610c4e828261234e565b61152f6106cf565b80600260008282546115419190613c2e565b9091555061154e90508181565b50565b6001600160a01b038216600090815260086020526040812080548390811061157b5761157b613667565b600091825260209091206004909102016003015460ff169392505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa15801561160a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061162e91906136a1565b61154e5760405163075fd2b160e01b815260040160405180910390fd5b600154600003610718576040517f3da3f98c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061169181611599565b835160005b818110156116c9576116c18682815181106116b3576116b3613667565b60200260200101518561266b565b600101611696565b505050505050565b6005546040517fdd93da430000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa158015611738573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526117609190810190613c41565b60055481516040517f5e8a791500000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa1580156117cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f391906136a1565b949350505050565b6001600160a01b0382166000908152600860205260408120541561183a576001600160a01b038316600090815260086020526040812061183a91612c4e565b815160005b8181101561194a57600084828151811061185b5761185b613667565b6020026020010151905060006006811115611878576118786131a1565b8160400151600681111561188e5761188e6131a1565b146118ac57604051632f1f68e160e11b815260040160405180910390fd5b80516118b89085613c2e565b6001600160a01b0387166000908152600860209081526040822080546001818101835591845292829020855160049094020192835584820151805191840191825591820151939750849360028401906119119082613d08565b505050604082015160038201805460ff19166001836006811115611937576119376131a1565b021790555050508160010191505061183f565b5081670de0b6b3a76400001461197357604051632f1f68e160e11b815260040160405180910390fd5b604080516001600160a01b0386168152602081018390527fb000fb1507aac2465ccb4f6bd1b601c7053279005e9e9932c41946b35c84949b910160405180910390a150505050565b60006119c5612a03565b6119cd612a3f565b6000806000806119f0604051806040016040528060008152602001606081525090565b3415611a0f576040516322d8ddab60e01b815260040160405180910390fd5b600454600160801b900460ff1615611a6b5787806020019051810190611a359190613dc8565b92985090965092509050611a4986886116d1565b611a665760405163075fd2b160e01b815260040160405180910390fd5b611ad8565b87806020019051810190611a7f9190613dc8565b9297509095506001600160a01b038616151594509250905082611aa25786611aa4565b835b9550828015611aba5750611ab886886116d1565b155b15611ad85760405163075fd2b160e01b815260040160405180910390fd5b600454600160901b900460ff168015611aef575081155b15611b26576040517f03b167dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60026001600160a01b03871660009081526007602052604090206004015460ff166006811115611b5857611b586131a1565b03611b8f576040517f41d40fb800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600454600160881b900460ff168015611bb457506020810151511580611bb457508051155b15611beb576040517fc19e07c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006040518060c00160405280600460109054906101000a900460ff16611c125785611c15565b60015b151581526001600160a01b0388166020820152604081018590526060810184905260800160018152602001600190526001600160a01b0388811660009081526007602090815260409182902084518154868401517fffffffffffffffffffffff0000000000000000000000000000000000000000009091169115157fffffffffffffffffffffff0000000000000000000000000000000000000000ff1691909117610100919095160293909317835590830151600183015560608301518051600284019081559181015193945084939091906003840190611cf69082613d08565b505050608082015160048201805460ff19166001836006811115611d1c57611d1c6131a1565b021790555060a082015160048201805461ff001916610100836006811115611d4657611d466131a1565b0217905550905050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc628a8a604051611d89929190613e36565b60405180910390a250505050505092915050565b60005460ff1615610718576040517fb186267000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffffffffffffffffffff11111111111111111111111111111111111111126001600160a01b03841601611e14576108278282612aa9565b610827838383612ac5565b6001546040516329e40d4b60e01b81526000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916329e40d4b91611e839186906004019182526001600160a01b0316602082015260400190565b602060405180830381865afa158015611ea0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7a91906136a1565b611ecc612bf3565b6001600160a01b03808316600090815260076020908152604091829020825160c081018452815460ff811615158252610100900490941684830152600181015484840152825180840190935260028101805484526003820180549294606087019490939084019190611f3d906136db565b80601f0160208091040260200160405190810160405280929190818152602001828054611f69906136db565b8015611fb65780601f10611f8b57610100808354040283529160200191611fb6565b820191906000526020600020905b815481529060010190602001808311611f9957829003601f168201915b505050919092525050508152600482015460209091019060ff166006811115611fe157611fe16131a1565b6006811115611ff257611ff26131a1565b81526020016004820160019054906101000a900460ff16600681111561201a5761201a6131a1565b600681111561202b5761202b6131a1565b90525092915050565b806fffffffffffffffffffffffffffffffff16826fffffffffffffffffffffffffffffffff161115610c4e57604051637fcce2a960e01b815260040160405180910390fd5b6040805180820190915260008082526020820152600061209884611ec4565b6040805180820182526020808401516001600160a01b0316825291909201519082015291505092915050565b6000805460ff19168215159081179091556040519081527fd94c9bc4d43c51d8dc345a016d8e3d994432fac68e72832e4cf3a616bd8efae09060200160405180910390a150565b600061211682611ec4565b6080015192915050565b61212982612b14565b8051600480546020808501516040808701516060880151608089015167ffffffffffffffff9182167fffffffffffffffffffffffffffff0000ffffffffffffffffffffffffffffffff909716600160801b991515999099027fffffffffffffffffffffffffffff00ffffffffffffffffffffffffffffffffff1698909817600160881b94151594909402939093177fffffffffffffffffffffffffff00ffff0000000000000000000000000000000016600160901b911515919091026fffffffffffffffffffffffffffffffff1916179390931768010000000000000000919095160293909317825580517f5ab1bd5300000000000000000000000000000000000000000000000000000000815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031693635ab1bd5393838101939192918290030181865afa15801561228a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ae9190613e61565b600580547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790556122f060016120c4565b6004546040805167ffffffffffffffff80841682526801000000000000000090930490921660208301523382820152517f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d933599181900360600190a15050565b612356612b7c565b8061236081611599565b341561237f576040516322d8ddab60e01b815260040160405180910390fd5b6000806000858060200190518101906123989190613e7e565b6001600160a01b0383166000908152600760209081526040808320600990925290912054939650919450925090156123e3576040516305ca31d360e51b815260040160405180910390fd5b6002600482015460ff1660068111156123fe576123fe6131a1565b1415801561241d5750600283600681111561241b5761241b6131a1565b145b156125d15760015460405163068bcd8d60e01b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d916124769160040190815260200190565b600060405180830381865afa158015612493573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526124bb91908101906137e0565b905082600660008282546124cf9190613c2e565b90915550506002546006541115612512576040517f8e81b16f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001820183905560048201805460ff191660029081179091556040517f94593b52aa436dd31a63e313045c2eb23d43eb2d6f5b4d7797b4432e7b2774909161255c918891906136be565b60405180910390a1846001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b836001015483604001518a6040516125c3939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a25061265c565b6003600482015460ff1660068111156125ec576125ec6131a1565b1415801561260b57506003836006811115612609576126096131a1565b145b1561265c5760048101805460ff191660039081179091556040517f94593b52aa436dd31a63e313045c2eb23d43eb2d6f5b4d7797b4432e7b27749091612653918791906136be565b60405180910390a15b5050505050610c4e6001600355565b6001600160a01b038083166000908152600960209081526040808320546008835281842060078452828520835160c081018552815460ff811615158252610100900490971687860152600181015487850152835180850190945260028101805485526003820180549498939796939592946060870194840191906126ee906136db565b80601f016020809104026020016040519081016040528092919081815260200182805461271a906136db565b80156127675780601f1061273c57610100808354040283529160200191612767565b820191906000526020600020905b81548152906001019060200180831161274a57829003601f168201915b505050919092525050508152600482015460209091019060ff166006811115612792576127926131a1565b60068111156127a3576127a36131a1565b81526020016004820160019054906101000a900460ff1660068111156127cb576127cb6131a1565b60068111156127dc576127dc6131a1565b81525050905060008284815481106127f6576127f6613667565b6000918252602090912060049091020190506001600382015460ff166006811115612823576128236131a1565b1461284157604051632f1f68e160e11b815260040160405180910390fd5b6000670de0b6b3a7640000826000015484604001516128609190613ec1565b61286a9190613ed8565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663068bcd8d6001546040518263ffffffff1660e01b81526004016128be91815260200190565b600060405180830381865afa1580156128db573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261290391908101906137e0565b90508160026000828254612917919061372b565b925050819055506129318160400151856020015184611dda565b60038301805460ff191660021790556001600160a01b038816600090815260096020526040812080549161296483613efa565b91905055507ff1af82b65c631a030029b10ea8f00f68290285c7c797644155b8f23969ca1d638887600260405161299d9392919061367d565b60405180910390a1602080850151604080516001600160a01b039283168152928301859052898216908301528916907fb5b51454adfa840bd593658325a60a50b0216f12eb5d2937efe6cea935675b7d9060600160405180910390a25050505050505050565b60005460ff16610718576040517fcfe7975b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6004544267ffffffffffffffff9091161180612a72575060045468010000000000000000900467ffffffffffffffff1642115b15610718576040517fb609ed5a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060008084865af1610c4e5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716612b0a576390b8ec186000526004601cfd5b6000603452505050565b612b1c6106cf565b60015415612b56576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003612b7757604051637fcce2a960e01b815260040160405180910390fd5b600155565b600260035403612bec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640160405180910390fd5b6002600355565b6040518060c0016040528060001515815260200160006001600160a01b0316815260200160008152602001612c3b604051806040016040528060008152602001606081525090565b8152602001600081526020016000905290565b508054600082556004029060005260206000209081019061154e91905b80821115612ca45760008082556001820181815581612c8d6002850182612ca8565b50505060038101805460ff19169055600401612c6b565b5090565b508054612cb4906136db565b6000825580601f10612cc4575050565b601f01602090049060005260206000209081019061154e91905b80821115612ca45760008155600101612cde565b6001600160a01b038116811461154e57600080fd5b60008060408385031215612d1a57600080fd5b8235612d2581612cf2565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715612d6c57612d6c612d33565b60405290565b6040805190810167ffffffffffffffff81118282101715612d6c57612d6c612d33565b60405160c0810167ffffffffffffffff81118282101715612d6c57612d6c612d33565b604051601f8201601f1916810167ffffffffffffffff81118282101715612de157612de1612d33565b604052919050565b600067ffffffffffffffff821115612e0357612e03612d33565b5060051b60200190565b600082601f830112612e1e57600080fd5b81356020612e33612e2e83612de9565b612db8565b82815260059290921b84018101918181019086841115612e5257600080fd5b8286015b84811015612e76578035612e6981612cf2565b8352918301918301612e56565b509695505050505050565b600067ffffffffffffffff821115612e9b57612e9b612d33565b50601f01601f191660200190565b6000612eb7612e2e84612e81565b9050828152838383011115612ecb57600080fd5b828260208301376000602084830101529392505050565b600082601f830112612ef357600080fd5b612f0283833560208501612ea9565b9392505050565b600080600060608486031215612f1e57600080fd5b833567ffffffffffffffff80821115612f3657600080fd5b612f4287838801612e0d565b94506020860135915080821115612f5857600080fd5b50612f6586828701612ee2565b9250506040840135612f7681612cf2565b809150509250925092565b6007811061154e57600080fd5b8035612f9981612f81565b919050565b60008060408385031215612fb157600080fd5b612fbb8335612cf2565b8235915067ffffffffffffffff8060208501351115612fd957600080fd5b6020840135840185601f820112612fef57600080fd5b612ffc612e2e8235612de9565b81358082526020808301929160051b84010188101561301a57600080fd5b602083015b6020843560051b85010181101561310657848135111561303e57600080fd5b80358401601f196060828c038201121561305757600080fd5b61305f612d49565b60208301358152876040840135111561307757600080fd5b60408301358301604083828f0301121561309057600080fd5b613098612d72565b92506020810135835288604082013511156130b257600080fd5b604081013501603f81018d136130c757600080fd5b6130d98d602083013560408401612ea9565b6020840152508160208201526130f160608401612f8e565b6040820152855250506020928301920161301f565b50809450505050509250929050565b60006020828403121561312757600080fd5b8135612f0281612cf2565b60005b8381101561314d578181015183820152602001613135565b50506000910152565b6000815180845261316e816020860160208601613132565b601f01601f19169290920160200192915050565b8051825260006020820151604060208501526117f36040850182613156565b634e487b7160e01b600052602160045260246000fd5b600781106131d557634e487b7160e01b600052602160045260246000fd5b9052565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561325657603f19898403018552815160608151855288820151818a87015261322e82870182613182565b915050878201519150613243888601836131b7565b9588019593505090860190600101613200565b509098975050505050505050565b6000806040838503121561327757600080fd5b823567ffffffffffffffff81111561328e57600080fd5b61329a85828601612ee2565b92505060208301356132ab81612cf2565b809150509250929050565b6000602082840312156132c857600080fd5b5035919050565b600080602083850312156132e257600080fd5b823567ffffffffffffffff808211156132fa57600080fd5b818501915085601f83011261330e57600080fd5b81358181111561331d57600080fd5b8660208260051b850101111561333257600080fd5b60209290920196919550909350505050565b60008060006060848603121561335957600080fd5b833561336481612cf2565b925060208401359150604084013567ffffffffffffffff81111561338757600080fd5b840160408187031215612f7657600080fd5b602081528151151560208201526001600160a01b036020830151166040820152604082015160608201526000606083015160c060808401526133de60e0840182613182565b905060808401516133f260a08501826131b7565b5060a084015161340560c08501826131b7565b509392505050565b67ffffffffffffffff8116811461154e57600080fd5b6000806040838503121561343657600080fd5b82356134418161340d565b915060208301356132ab8161340d565b60008060006060848603121561346657600080fd5b833561347181612cf2565b9250602084013561348181612f81565b929592945050506040919091013590565b600080604083850312156134a557600080fd5b823567ffffffffffffffff808211156134bd57600080fd5b6134c986838701612e0d565b93506020915081850135818111156134e057600080fd5b8501601f810187136134f157600080fd5b80356134ff612e2e82612de9565b81815260059190911b8201840190848101908983111561351e57600080fd5b8584015b838110156135565780358681111561353a5760008081fd5b6135488c8983890101612ee2565b845250918601918601613522565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156135b257815180516001600160a01b03168552860151868501529284019290850190600101613584565b5091979650505050505050565b801515811461154e57600080fd5b6000602082840312156135df57600080fd5b8135612f02816135bf565b8381526060602082015260006136036060830185613182565b90506117f360408301846131b7565b60208101610b7a82846131b7565b6000806040838503121561363357600080fd5b82359150602083013567ffffffffffffffff81111561365157600080fd5b61365d85828601612ee2565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038416815260208101839052606081016117f360408301846131b7565b6000602082840312156136b357600080fd5b8151612f02816135bf565b6001600160a01b038316815260408101612f0260208301846131b7565b600181811c908216806136ef57607f821691505b60208210810361370f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610b7a57610b7a613715565b8051612f9981612cf2565b600082601f83011261375a57600080fd5b8151613768612e2e82612e81565b81815284602083860101111561377d57600080fd5b6117f3826020830160208701613132565b6000604082840312156137a057600080fd5b6137a8612d72565b905081518152602082015167ffffffffffffffff8111156137c857600080fd5b6137d484828501613749565b60208301525092915050565b6000602082840312156137f257600080fd5b815167ffffffffffffffff8082111561380a57600080fd5b9083019060c0828603121561381e57600080fd5b613826612d95565b82518152602083015161383881612cf2565b6020820152604083015161384b81612cf2565b604082015260608301518281111561386257600080fd5b61386e8782860161378e565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b601f82111561082757600081815260208120601f850160051c810160208610156138bb5750805b601f850160051c820191505b818110156116c9578281556001016138c7565b813581556001808201602080850135601e198636030181126138fb57600080fd5b8501803567ffffffffffffffff81111561391457600080fd5b803603838301131561392557600080fd5b6139398161393386546136db565b86613894565b6000601f82116001811461396f576000831561395757508382018501355b600019600385901b1c1916600184901b1786556139c8565b600086815260209020601f19841690835b8281101561399f57868501880135825593870193908901908701613980565b50848210156139be5760001960f88660031b161c198785880101351681555b50508683881b0186555b505050505050505050565b6001600160a01b0384168152826020820152606060408201528135606082015260006020830135601e19843603018112613a0c57600080fd5b830160208101903567ffffffffffffffff811115613a2957600080fd5b803603821315613a3857600080fd5b604060808501528060a0850152808260c0860137600060c0828601015260c0601f19601f83011685010192505050949350505050565b6000602080830181845280855480835260408601915060408160051b87010192506000878152848120815b83811015613b6f57603f1989870301855281548652606087870152600182015460608701526002820160406080880152838154613ad5816136db565b8060a08b01526001821660008114613af45760018114613b1057613b3f565b60ff19831660c08c015260c082151560051b8c01019350613b3f565b8488528b8820885b83811015613b365781548d820160c001526001909101908d01613b18565b8c0160c0019450505b505050600384015460ff169150613b5960408901836131b7565b9650509386019360049190910190600101613a99565b509398975050505050505050565b600060a08284031215613b8f57600080fd5b60405160a0810181811067ffffffffffffffff82111715613bb257613bb2612d33565b6040528251613bc0816135bf565b81526020830151613bd0816135bf565b60208201526040830151613be3816135bf565b60408201526060830151613bf68161340d565b60608201526080830151613c098161340d565b60808201529392505050565b8281526040602082015260006117f36040830184613156565b80820180821115610b7a57610b7a613715565b600060208284031215613c5357600080fd5b815167ffffffffffffffff80821115613c6b57600080fd5b9083019060c08286031215613c7f57600080fd5b613c87612d95565b8251815260208301516020820152604083015182811115613ca757600080fd5b613cb387828601613749565b604083015250606083015182811115613ccb57600080fd5b613cd78782860161378e565b606083015250613ce96080840161373e565b6080820152613cfa60a0840161373e565b60a082015295945050505050565b815167ffffffffffffffff811115613d2257613d22612d33565b613d3681613d3084546136db565b84613894565b602080601f831160018114613d6b5760008415613d535750858301515b600019600386901b1c1916600185901b1785556116c9565b600085815260208120601f198616915b82811015613d9a57888601518255948401946001909101908401613d7b565b5085821015613db85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008060008060808587031215613dde57600080fd5b8451613de981612cf2565b6020860151909450613dfa81612cf2565b60408601516060870151919450925067ffffffffffffffff811115613e1e57600080fd5b613e2a8782880161378e565b91505092959194509250565b604081526000613e496040830185613156565b90506001600160a01b03831660208301529392505050565b600060208284031215613e7357600080fd5b8151612f0281612cf2565b600080600060608486031215613e9357600080fd5b8351613e9e81612cf2565b6020850151909350613eaf81612f81565b80925050604084015190509250925092565b8082028115828204841417610b7a57610b7a613715565b600082613ef557634e487b7160e01b600052601260045260246000fd5b500490565b600060018201613f0c57613f0c613715565b506001019056fea2646970667358221220be083d65a38cd2a3ebaec5271ad50373e66dc9b23f01377894451f761a2b234c64736f6c63430008130033";
