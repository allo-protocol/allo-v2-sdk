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
        internalType:
          "struct DonationVotingMerkleDistributionVaultStrategy.Claim[]",
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
        internalType:
          "struct DonationVotingMerkleDistributionBaseStrategy.Recipient",
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
        internalType:
          "struct DonationVotingMerkleDistributionBaseStrategy.ApplicationStatus[]",
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

export const bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162003fd138038062003fd1833981016040819052620000349162000122565b6001600160a01b038316608052604051839083908390839083906200005e90829060200162000204565b60408051601f19818403018152919052805160209091012060a05250506001600160a01b038116620000a35760405163538ba4f960e01b815260040160405180910390fd5b6001600160a01b031660c05250620002399350505050565b6001600160a01b0381168114620000d157600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000107578181015183820152602001620000ed565b50506000910152565b80516200011d81620000bb565b919050565b6000806000606084860312156200013857600080fd5b83516200014581620000bb565b60208501519093506001600160401b03808211156200016357600080fd5b818601915086601f8301126200017857600080fd5b8151818111156200018d576200018d620000d4565b604051601f8201601f19908116603f01168101908382118183101715620001b857620001b8620000d4565b81604052828152896020848701011115620001d257600080fd5b620001e5836020830160208801620000ea565b8096505050505050620001fb6040850162000110565b90509250925092565b602081526000825180602084015262000225816040850160208701620000ea565b601f01601f19169190910160400192915050565b60805160a05160c051613d456200028c6000396000818161055a0152612008015260006103e00152600081816102bc01528181611153015281816112bc01528181611b0001526121960152613d456000f3fe60806040526004361061023f5760003560e01c80636afdd8501161012e578063df868ed3116100ab578063edd146cc1161006f578063edd146cc14610770578063ef2920fc14610790578063f31db3d1146107a3578063f5b0dfb7146107c3578063f6f25891146107e357600080fd5b8063df868ed3146106c1578063dff7d2c7146106d6578063e744092e146106fd578063e7efcfc21461072d578063eb11af931461074357600080fd5b8063ac9650d8116100f2578063ac9650d814610601578063b2b878d01461062e578063cb0e85a61461065b578063d26839371461067a578063d2e17f591461069a57600080fd5b80636afdd8501461054857806373af34531461057c57806395355b3b1461059c5780639af5c09d146105b2578063a0cf0aea146105d957600080fd5b806342fda9c7116101bc5780635708973911610180578063570897391461049157806359a3977b146104ab5780635f1b55f3146104ce57806362812a39146104ee5780636923e09a1461051b57600080fd5b806342fda9c7146103d15780634533d678146104045780634ab4ba421461043c5780634d31d0871461045157806351cff8d91461047157600080fd5b80632bbe0cae116102035780632bbe0cae146103445780632d52eff2146103575780632eb4a7ab1461036e57806338fff2d0146103845780633f733c6b1461039957600080fd5b806301fc1c641461024b5780630a6f0ee91461028b57806315cc481e146102ad5780632143e92f146102f4578063217550881461031457600080fd5b3661024657005b600080fd5b34801561025757600080fd5b50610278610266366004612918565b600c6020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561029757600080fd5b506102ab6102a6366004612b49565b610810565b005b3480156102b957600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b039091168152602001610282565b34801561030057600080fd5b506102ab61030f366004612bd5565b610830565b34801561032057600080fd5b506005546103349062010000900460ff1681565b6040519015158152602001610282565b6102dc610352366004612c31565b61092d565b34801561036357600080fd5b50600a541515610334565b34801561037a57600080fd5b50610278600a5481565b34801561039057600080fd5b50600154610278565b3480156103a557600080fd5b506102786103b4366004612c82565b604360209081526000928352604080842090915290825290205481565b3480156103dd57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610278565b34801561041057600080fd5b50600654610424906001600160401b031681565b6040516001600160401b039091168152602001610282565b34801561044857600080fd5b50600254610278565b34801561045d57600080fd5b5061033461046c366004612918565b610952565b34801561047d57600080fd5b506102ab61048c366004612918565b61095b565b34801561049d57600080fd5b506005546103349060ff1681565b3480156104b757600080fd5b506104c06109f7565b604051610282929190612d00565b3480156104da57600080fd5b506103346104e9366004612d19565b610a8e565b3480156104fa57600080fd5b5061050e610509366004612918565b610a99565b6040516102829190612d32565b34801561052757600080fd5b50610278610536366004612918565b60446020526000908152604090205481565b34801561055457600080fd5b506102dc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561058857600080fd5b506102ab610597366004612d81565b610aaa565b3480156105a857600080fd5b5061027860085481565b3480156105be57600080fd5b5060055461042490630100000090046001600160401b031681565b3480156105e557600080fd5b506102dc73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561060d57600080fd5b5061062161061c366004612e1a565b610b4c565b6040516102829190612e8e565b34801561063a57600080fd5b5061064e610649366004612ef0565b610c40565b6040516102829190612fc4565b34801561066757600080fd5b5060055461033490610100900460ff1681565b34801561068657600080fd5b506102ab610695366004613024565b610d3e565b3480156106a657600080fd5b5060055461042490600160981b90046001600160401b031681565b3480156106cd57600080fd5b50610334610fa1565b3480156106e257600080fd5b5060055461042490600160581b90046001600160401b031681565b34801561070957600080fd5b50610334610718366004612918565b600e6020526000908152604090205460ff1681565b34801561073957600080fd5b5061027860075481565b34801561074f57600080fd5b5061076361075e366004612918565b610fb0565b604051610282919061309c565b34801561077c57600080fd5b506102ab61078b3660046130c4565b610fbb565b6102ab61079e366004612c31565b611016565b3480156107af57600080fd5b506102ab6107be36600461310a565b61103a565b3480156107cf57600080fd5b506102ab6107de366004612d19565b61111e565b3480156107ef57600080fd5b506102786107fe366004612d19565b600b6020526000908152604090205481565b610818611148565b610820611193565b61082b8383836111b6565b505050565b3361083a81611292565b61084685858585611344565b6005805472ffffffffffffffffffffffffffffffff000000191663010000006001600160401b03888116820267ffffffffffffffff60581b191692909217600160581b88841681029190911767ffffffffffffffff60981b1916600160981b888516810291909117948590556006805467ffffffffffffffff191688861690811790915560408051948704861685529286048516602085015294049092169181019190915260608101919091523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a15050505050565b6000610937611148565b61093f611193565b61094983836113de565b90505b92915050565b6000600161094c565b3361096581611292565b60065461097e906001600160401b031662278d006131da565b6001600160401b031642116109a657604051637fcce2a960e01b815260040160405180910390fd5b60006109b28330611730565b905060006109d5846001600160a01b031660009081526044602052604090205490565b905060006109e382846131fa565b90506109f0853383611779565b5050505050565b6003805460048054919291610a0b9061320d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a379061320d565b8015610a845780601f10610a5957610100808354040283529160200191610a84565b820191906000526020600020905b815481529060010190602001808311610a6757829003601f168201915b5050505050905082565b600061094c826117b3565b610aa16128bd565b61094c826117f4565b610ab26118ed565b33610abc81611292565b60055462010000900460ff1615610ae657604051637fcce2a960e01b815260040160405180910390fd5b600a839055815160039081556020830151839190600490610b07908261328d565b509050507fdc7180ca4affc84269428ed20ef950e745126f11691b010c4a7d49458421008f600a546003604051610b3f92919061334c565b60405180910390a1505050565b6060816001600160401b03811115610b6657610b6661293c565b604051908082528060200260200182016040528015610b9957816020015b6060815260200190600190039081610b845790505b50905060005b82811015610c3957610c0930858584818110610bbd57610bbd6133f1565b9050602002810190610bcf9190613407565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061191892505050565b828281518110610c1b57610c1b6133f1565b60200260200101819052508080610c3190613454565b915050610b9f565b5092915050565b81518151606091908114610c6757604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b03811115610c8157610c8161293c565b604051908082528060200260200182016040528015610cc657816020015b6040805180820190915260008082526020820152815260200190600190039081610c9f5790505b50905060005b82811015610d3557610d10868281518110610ce957610ce96133f1565b6020026020010151868381518110610d0357610d036133f1565b602002602001015161193d565b828281518110610d2257610d226133f1565b6020908102919091010152600101610ccc565b50949350505050565b610d466119f8565b610d4e6118ed565b8060005b81811015610f91576000848483818110610d6e57610d6e6133f1565b905060400201803603810190610d84919061346d565b80516001600160a01b039081166000908152600f602090815260408083208151606081018352815460ff81161515825261010090049095168584015281518083018352600182018054825260028301805498995095979295938701949193909291840191610df19061320d565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1d9061320d565b8015610e6a5780601f10610e3f57610100808354040283529160200191610e6a565b820191906000526020600020905b815481529060010190602001808311610e4d57829003601f168201915b5050509190925250505090525082516001600160a01b03908116600090815260436020908152604080832082880151909416835292905290812054919250819003610ec857604051637fcce2a960e01b815260040160405180910390fd5b6020808401805185516001600160a01b03908116600090815260438552604080822094518316825293855283812081905590821681526044909352908220805491928492610f179084906131fa565b92505081905550610f2d81846020015184611779565b8351602084810151604080516001600160a01b03928316815292830186905284821683820152519216917f0ffa55c11cec5055a4f567b0ff6e1e0eef2af17baafddd35f31ab4ed1afb75469181900360600190a2505060019092019150610d529050565b5050610f9d6001601155565b5050565b6000610fab611a51565b905090565b600061094c82611a9a565b610fc3611148565b600081806020019051810190610fd9919061353d565b9050610fe58382611ab9565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610b3f929190612d00565b61101e611148565b611026611193565b6110308282611d6c565b610f9d8282611f4b565b611042612102565b3361104c81611292565b600854821461106e57604051637fcce2a960e01b815260040160405180910390fd5b60005b835181101561111857600084828151811061108e5761108e6133f1565b602002602001015160000151905060008583815181106110b0576110b06133f1565b6020908102919091018101518101516000848152600b83526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a25050600101611071565b50505050565b611126611148565b8060026000828254611138919061360f565b9091555061114590508181565b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146111915760405163075fd2b160e01b815260040160405180910390fd5b565b60015460000361119157604051630f68fe6360e21b815260040160405180910390fd5b806111c081611292565b600a546000036111e357604051637fcce2a960e01b815260040160405180910390fd5b60055462010000900460ff16611205576005805462ff00001916620100001790555b60008380602001905181019061121b91906136e4565b805190915060005b818110156112555761124d838281518110611240576112406133f1565b602002602001015161212d565b600101611223565b506040516001600160a01b038516907f7ec3272052827f7b50d9e84f98172cbb80c112df1e377c5b97ea77f1812db8d990600090a2505050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015611303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113279190613794565b6111455760405163075fd2b160e01b815260040160405180910390fd5b836001600160401b031642118061136c5750826001600160401b0316846001600160401b0316115b806113885750816001600160401b0316846001600160401b0316115b806113a45750806001600160401b0316826001600160401b0316115b806113c05750806001600160401b0316836001600160401b0316115b1561111857604051637fcce2a960e01b815260040160405180910390fd5b60006113e86122c3565b600080600061140a604051806040016040528060008152602001606081525090565b60055460ff161561145c57868060200190518101906114299190613845565b9196509350905061143a8587612313565b6114575760405163075fd2b160e01b815260040160405180910390fd5b6114c7565b868060200190518101906114709190613845565b6001600160a01b038316151596509094509092509050836114915785611493565b815b94508380156114a957506114a78587612313565b155b156114c75760405163075fd2b160e01b815260040160405180910390fd5b600554610100900460ff1680156114ea575060208101515115806114ea57508051155b156115085760405163c19e07c560e01b815260040160405180910390fd5b6001600160a01b03831661153f5760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b038086166000908152600f6020908152604090912080549286166101000274ffffffffffffffffffffffffffffffffffffffff00199093169290921782558251600183019081559083015183919060028401906115a3908261328d565b505060055460ff1690506115b757846115ba565b60015b815460ff19169015151781556001600160a01b0386166000908152600c60205260408120549003611696576008546001600160a01b0387166000908152600c60205260409020556116108660015b60ff1661240b565b6000886008546040516020016116279291906138a8565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a6040516116739291906138ca565b60405180910390a26008805490600061168b83613454565b919050555050611725565b60006116a18761243e565b905060011960ff8216016116bf576116ba876001611608565b6116d6565b60021960ff8216016116d6576116d6876004611608565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a61170c8b61243e565b60405161171b939291906138f5565b60405180910390a2505b505050505092915050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161176857506001600160a01b0381163161094c565b611772838361247f565b905061094c565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016117a85761082b82826124b4565b61082b8383836124d0565b6000806117c261010084613940565b905060006117d261010085613954565b6000928352600d602052604090922054600190921b9182169091149392505050565b6117fc6128bd565b6001600160a01b038083166000908152600f60209081526040918290208251606081018452815460ff8116151582526101009004909416848301528251808401845260018201805482526002830180549395870194929391928401916118619061320d565b80601f016020809104026020016040519081016040528092919081815260200182805461188d9061320d565b80156118da5780601f106118af576101008083540402835291602001916118da565b820191906000526020600020905b8154815290600101906020018083116118bd57829003601f168201915b5050509190925250505090525092915050565b6006546001600160401b0316421161119157604051634543ced160e11b815260040160405180910390fd5b60606109498383604051806060016040528060278152602001613ce96027913961251f565b60408051808201909152600080825260208201526000828060200190518101906119679190613968565b80516020820151604083015160608401519394509192909190600061198b846117f4565b60200151905061199e8585838686612597565b156119ce576040518060400160405280826001600160a01b0316815260200184815250965050505050505061094c565b604080518082019091526001600160a01b0390911681526000602082015298975050505050505050565b600260115403611a4a5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401611536565b6002601155565b6005546000904263010000009091046001600160401b031611801590611a895750600554600160581b90046001600160401b03164211155b15611a945750600190565b50600090565b6000611aa58261243e565b60ff16600681111561094c5761094c613086565b611ac282612640565b80516005805460208085015161ffff1990921693151561ff001916939093176101009115159190910217905560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa158015611b4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b73919061399c565b6009805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03929092169190911790556040810151600580546060840151608085015172ffffffffffffffffffffffffffffffff0000001990921663010000006001600160401b03958616810267ffffffffffffffff60581b191691909117600160581b92861683021767ffffffffffffffff60981b1916600160981b9386168402179384905560a08601516006805467ffffffffffffffff191691871691821790556001600855611c52959185048216949283048216939092041690611344565b60055460065460408051630100000084046001600160401b039081168252600160581b850481166020830152600160981b909404841681830152929091166060830152336080830152517fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39181900360a00190a160c0810151516000819003611d0b5760008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c805460ff191660011790555b60005b81811015611118576001600e60008560c001518481518110611d3257611d326133f1565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101611d0e565b611d7461268f565b60008083806020019051810190611d8b91906139b9565b80515160208101519051929450909250906002611da78561243e565b60ff166006811115611dbb57611dbb613086565b6006811115611dcc57611dcc613086565b14611df55760405163f4a513b960e01b81526001600160a01b0385166004820152602401611536565b6001600160a01b0381166000908152600e602052604090205460ff16158015611e49575060008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5460ff16155b15611e6757604051637fcce2a960e01b815260040160405180910390fd5b600034118015611e9457506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14155b80611ec657506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015611ec65750813414155b15611ee457604051637fcce2a960e01b815260040160405180910390fd5b836001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b838388604051611f3b939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a2505050505050565b60008083806020019051810190611f6291906139b9565b8051518051602090910151929450909250908073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601611fca5781341015611fbb576040516374c5672b60e01b815260040160405180910390fd5b611fc530836124b4565b612090565b6000611fd6843061247f565b85516040805180820182523081526020808201889052890151915163187945bd60e11b81529394506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016936330f28b7a93612041939092918d9190600401613aa6565b600060405180830381600087803b15801561205b57600080fd5b505af115801561206f573d6000803e3d6000fd5b50505050600061207f853061247f565b905061208b82826131fa565b925050505b6001600160a01b038086166000908152604360209081526040808320938716835292905290812080548392906120c790849061360f565b90915550506001600160a01b038316600090815260446020526040812080548392906120f490849061360f565b909155505050505050505050565b6006546001600160401b03164211156111915760405162b828c960e81b815260040160405180910390fd5b805160208083015160408085015160608601516001600160a01b038085166000908152600f9096529290942054929390929091610100909104166121748585838686612597565b156122975760015460405163068bcd8d60e01b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d916121cd9160040190815260200190565b600060405180830381865afa1580156121ea573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526122129190810190613b29565b905061221d866126d7565b836002600082825461222f91906131fa565b90915550506040810151612244908386611779565b60408082015181518681526001600160a01b038581166020830152808916939216917fa6b66f665010d2f7435f110111aaa34b56564074f66081bef606d996fc8caa6f910160405180910390a3506122bb565b60405163f4a513b960e01b81526001600160a01b0385166004820152602401611536565b505050505050565b6005544263010000009091046001600160401b031611806122f55750600554600160581b90046001600160401b031642115b1561119157604051635b04f6ad60e11b815260040160405180910390fd5b60095460405163dd93da4360e01b81526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa158015612361573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526123899190810190613bdc565b6009548151604051635e8a791560e01b815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa1580156123df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124039190613794565b949350505050565b600080600061241985612715565b6000928352600b602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b0381166000908152600c6020526040812054810361246557506000919050565b60008061247184612715565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af1610f9d5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716612515576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b03168560405161253c9190613ca2565b600060405180830381855af49150503d8060008114612577576040519150601f19603f3d011682016040523d82523d6000602084013e61257c565b606091505b509150915061258d86838387612788565b9695505050505050565b60006125a2866117b3565b156125af57506000612637565b60408051602081018890526001600160a01b038088169282019290925290851660608201526080810184905260009060a00160408051601f198184030181528282528051602091820120908301520160405160208183030381529060405280519060200120905061262383600a5483612801565b612631576000915050612637565b60019150505b95945050505050565b612648611148565b600154156126695760405163439a74c960e01b815260040160405180910390fd5b8060000361268a57604051637fcce2a960e01b815260040160405180910390fd5b600155565b60055442600160981b9091046001600160401b031611806126ba57506006546001600160401b031642115b156111915760405162b828c960e81b815260040160405180910390fd5b60006126e561010083613940565b905060006126f561010084613954565b6000928352600d60205260409092208054600190931b9092179091555050565b6001600160a01b0381166000908152600c6020526040812054819081908190612740906001906131fa565b9050600061274f604083613940565b9050600061275e604084613954565b612769906004613cbe565b6000838152600b60205260409020549298909750919550909350505050565b606083156127f75782516000036127f0576001600160a01b0385163b6127f05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611536565b5081612403565b6124038383612817565b60008261280e8584612841565b14949350505050565b8151156128275781518083602001fd5b8060405162461bcd60e51b81526004016115369190613cd5565b600081815b84518110156128865761287282868381518110612865576128656133f1565b602002602001015161288e565b91508061287e81613454565b915050612846565b509392505050565b60008183106128aa576000828152602084905260409020610949565b6000838152602083905260409020610949565b604051806060016040528060001515815260200160006001600160a01b031681526020016128fe604051806040016040528060008152602001606081525090565b905290565b6001600160a01b038116811461114557600080fd5b60006020828403121561292a57600080fd5b813561293581612903565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156129745761297461293c565b60405290565b60405160e081016001600160401b03811182821017156129745761297461293c565b604051608081016001600160401b03811182821017156129745761297461293c565b604051606081016001600160401b03811182821017156129745761297461293c565b60405160c081016001600160401b03811182821017156129745761297461293c565b604051601f8201601f191681016001600160401b0381118282101715612a2a57612a2a61293c565b604052919050565b60006001600160401b03821115612a4b57612a4b61293c565b5060051b60200190565b600082601f830112612a6657600080fd5b81356020612a7b612a7683612a32565b612a02565b82815260059290921b84018101918181019086841115612a9a57600080fd5b8286015b84811015612abe578035612ab181612903565b8352918301918301612a9e565b509695505050505050565b60006001600160401b03821115612ae257612ae261293c565b50601f01601f191660200190565b6000612afe612a7684612ac9565b9050828152838383011115612b1257600080fd5b828260208301376000602084830101529392505050565b600082601f830112612b3a57600080fd5b61094983833560208501612af0565b600080600060608486031215612b5e57600080fd5b83356001600160401b0380821115612b7557600080fd5b612b8187838801612a55565b94506020860135915080821115612b9757600080fd5b50612ba486828701612b29565b9250506040840135612bb581612903565b809150509250925092565b6001600160401b038116811461114557600080fd5b60008060008060808587031215612beb57600080fd5b8435612bf681612bc0565b93506020850135612c0681612bc0565b92506040850135612c1681612bc0565b91506060850135612c2681612bc0565b939692955090935050565b60008060408385031215612c4457600080fd5b82356001600160401b03811115612c5a57600080fd5b612c6685828601612b29565b9250506020830135612c7781612903565b809150509250929050565b60008060408385031215612c9557600080fd5b8235612ca081612903565b91506020830135612c7781612903565b60005b83811015612ccb578181015183820152602001612cb3565b50506000910152565b60008151808452612cec816020860160208601612cb0565b601f01601f19169290920160200192915050565b8281526040602082015260006124036040830184612cd4565b600060208284031215612d2b57600080fd5b5035919050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a084015261240360c0840182612cd4565b60008060408385031215612d9457600080fd5b8235915060208301356001600160401b0380821115612db257600080fd5b9084019060408287031215612dc657600080fd5b612dce612952565b82358152602083013582811115612de457600080fd5b80840193505086601f840112612df957600080fd5b612e0887843560208601612af0565b60208201528093505050509250929050565b60008060208385031215612e2d57600080fd5b82356001600160401b0380821115612e4457600080fd5b818501915085601f830112612e5857600080fd5b813581811115612e6757600080fd5b8660208260051b8501011115612e7c57600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015612ee357603f19888603018452612ed1858351612cd4565b94509285019290850190600101612eb5565b5092979650505050505050565b60008060408385031215612f0357600080fd5b82356001600160401b0380821115612f1a57600080fd5b612f2686838701612a55565b9350602091508185013581811115612f3d57600080fd5b8501601f81018713612f4e57600080fd5b8035612f5c612a7682612a32565b81815260059190911b82018401908481019089831115612f7b57600080fd5b8584015b83811015612fb357803586811115612f975760008081fd5b612fa58c8983890101612b29565b845250918601918601612f7f565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156130175761300784835180516001600160a01b03168252602090810151910152565b9284019290850190600101612fe1565b5091979650505050505050565b6000806020838503121561303757600080fd5b82356001600160401b038082111561304e57600080fd5b818501915085601f83011261306257600080fd5b81358181111561307157600080fd5b8660208260061b8501011115612e7c57600080fd5b634e487b7160e01b600052602160045260246000fd5b60208101600783106130be57634e487b7160e01b600052602160045260246000fd5b91905290565b600080604083850312156130d757600080fd5b8235915060208301356001600160401b038111156130f457600080fd5b61310085828601612b29565b9150509250929050565b600080604080848603121561311e57600080fd5b83356001600160401b0381111561313457600080fd5b8401601f8101861361314557600080fd5b80356020613155612a7683612a32565b82815260069290921b8301810191818101908984111561317457600080fd5b938201935b838510156131b45785858b0312156131915760008081fd5b613199612952565b85358152838601358482015282529385019390820190613179565b9997909101359750505050505050565b634e487b7160e01b600052601160045260246000fd5b6001600160401b03818116838216019080821115610c3957610c396131c4565b8181038181111561094c5761094c6131c4565b600181811c9082168061322157607f821691505b60208210810361324157634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561082b57600081815260208120601f850160051c8101602086101561326e5750805b601f850160051c820191505b818110156122bb5782815560010161327a565b81516001600160401b038111156132a6576132a661293c565b6132ba816132b4845461320d565b84613247565b602080601f8311600181146132ef57600084156132d75750858301515b600019600386901b1c1916600185901b1785556122bb565b600085815260208120601f198616915b8281101561331e578886015182559484019460019091019084016132ff565b508582101561333c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8281526000602060408184015283546040840152600180850160406060860152600081546133798161320d565b80608089015260a08583166000811461339957600181146133b3576133e1565b60ff1984168a83015282151560051b8a01820194506133e1565b856000528760002060005b848110156133d95781548c82018501529088019089016133be565b8b0183019550505b50929a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261341e57600080fd5b8301803591506001600160401b0382111561343857600080fd5b60200191503681900382131561344d57600080fd5b9250929050565b600060018201613466576134666131c4565b5060010190565b60006040828403121561347f57600080fd5b613487612952565b823561349281612903565b815260208301356134a281612903565b60208201529392505050565b805180151581146134be57600080fd5b919050565b80516134be81612bc0565b80516134be81612903565b600082601f8301126134ea57600080fd5b815160206134fa612a7683612a32565b82815260059290921b8401810191818101908684111561351957600080fd5b8286015b84811015612abe57805161353081612903565b835291830191830161351d565b60006020828403121561354f57600080fd5b81516001600160401b038082111561356657600080fd5b9083019060e0828603121561357a57600080fd5b61358261297a565b61358b836134ae565b8152613599602084016134ae565b60208201526135aa604084016134c3565b60408201526135bb606084016134c3565b60608201526135cc608084016134c3565b60808201526135dd60a084016134c3565b60a082015260c0830151828111156135f457600080fd5b613600878286016134d9565b60c08301525095945050505050565b8082018082111561094c5761094c6131c4565b60006080828403121561363457600080fd5b61363c61299c565b90508151815260208083015161365181612903565b828201526040838101519083015260608301516001600160401b0381111561367857600080fd5b8301601f8101851361368957600080fd5b8051613697612a7682612a32565b81815260059190911b820183019083810190878311156136b657600080fd5b928401925b828410156136d4578351825292840192908401906136bb565b6060860152509295945050505050565b600060208083850312156136f757600080fd5b82516001600160401b038082111561370e57600080fd5b818501915085601f83011261372257600080fd5b8151613730612a7682612a32565b81815260059190911b8301840190848101908883111561374f57600080fd5b8585015b838110156137875780518581111561376b5760008081fd5b6137798b89838a0101613622565b845250918601918601613753565b5098975050505050505050565b6000602082840312156137a657600080fd5b610949826134ae565b600082601f8301126137c057600080fd5b81516137ce612a7682612ac9565b8181528460208386010111156137e357600080fd5b612403826020830160208701612cb0565b60006040828403121561380657600080fd5b61380e612952565b90508151815260208201516001600160401b0381111561382d57600080fd5b613839848285016137af565b60208301525092915050565b60008060006060848603121561385a57600080fd5b835161386581612903565b602085015190935061387681612903565b60408501519092506001600160401b0381111561389257600080fd5b61389e868287016137f4565b9150509250925092565b6040815260006138bb6040830185612cd4565b90508260208301529392505050565b6040815260006138dd6040830185612cd4565b90506001600160a01b03831660208301529392505050565b6060815260006139086060830186612cd4565b90506001600160a01b038416602083015260ff83166040830152949350505050565b634e487b7160e01b600052601260045260246000fd5b60008261394f5761394f61392a565b500490565b6000826139635761396361392a565b500690565b60006020828403121561397a57600080fd5b81516001600160401b0381111561399057600080fd5b61240384828501613622565b6000602082840312156139ae57600080fd5b815161293581612903565b600080604083850312156139cc57600080fd5b82516139d781612903565b60208401519092506001600160401b03808211156139f457600080fd5b9084019081860360a0811215613a0957600080fd5b613a11612952565b6080821215613a1f57600080fd5b613a276129be565b6040831215613a3557600080fd5b613a3d612952565b92508451613a4a81612903565b80845250602085015160208401528281526040850151602082015260608501516040820152808252506080840151915082821115613a8757600080fd5b613a93888386016137af565b6020820152809450505050509250929050565b6000610100613ac983885180516001600160a01b03168252602090810151910152565b6020870151604084015260408701516060840152613afd608084018780516001600160a01b03168252602090810151910152565b6001600160a01b03851660c08401528060e0840152613b1e81840185612cd4565b979650505050505050565b600060208284031215613b3b57600080fd5b81516001600160401b0380821115613b5257600080fd5b9083019060c08286031215613b6657600080fd5b613b6e6129e0565b825181526020830151613b8081612903565b60208201526040830151613b9381612903565b6040820152606083015182811115613baa57600080fd5b613bb6878286016137f4565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b600060208284031215613bee57600080fd5b81516001600160401b0380821115613c0557600080fd5b9083019060c08286031215613c1957600080fd5b613c216129e0565b8251815260208301516020820152604083015182811115613c4157600080fd5b613c4d878286016137af565b604083015250606083015182811115613c6557600080fd5b613c71878286016137f4565b606083015250613c83608084016134ce565b6080820152613c9460a084016134ce565b60a082015295945050505050565b60008251613cb4818460208701612cb0565b9190910192915050565b808202811582820484141761094c5761094c6131c4565b6020815260006109496020830184612cd456fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b50c767761fa080d0ec0cede9a88980b75dfe9180defbda5ad2a8e076d95185b64736f6c63430008130033";
