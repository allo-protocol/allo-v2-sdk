// uses Vault abi, since it's the same like direct transfer + an additional claim function
export const abi = [
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
    name: "allocationEndTime",
    inputs: [],
    outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allocationStartTime",
    inputs: [],
    outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allowedTokens",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "claim",
    inputs: [
      {
        name: "_claims",
        type: "tuple[]",
        internalType: "struct DonationVotingStrategy.Claim[]",
        components: [
          { name: "recipientId", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claims",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "address", internalType: "address" },
    ],
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
        internalType: "struct DonationVotingStrategy.Recipient",
        components: [
          { name: "useRegistryAnchor", type: "bool", internalType: "bool" },
          {
            name: "recipientAddress",
            type: "address",
            internalType: "address",
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
            name: "recipientStatus",
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
    name: "payoutSummaries",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [
      { name: "recipientAddress", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
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
    name: "registrationEndTime",
    inputs: [],
    outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registrationStartTime",
    inputs: [],
    outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "reviewRecipients",
    inputs: [
      { name: "_recipientIds", type: "address[]", internalType: "address[]" },
      {
        name: "_recipientStatuses",
        type: "uint8[]",
        internalType: "enum IStrategy.Status[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPayout",
    inputs: [
      { name: "_recipientIds", type: "address[]", internalType: "address[]" },
      { name: "_amounts", type: "uint256[]", internalType: "uint256[]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "totalPayoutAmount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updatePoolTimestamps",
    inputs: [
      {
        name: "_registrationStartTime",
        type: "uint64",
        internalType: "uint64",
      },
      { name: "_registrationEndTime", type: "uint64", internalType: "uint64" },
      { name: "_allocationStartTime", type: "uint64", internalType: "uint64" },
      { name: "_allocationEndTime", type: "uint64", internalType: "uint64" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "useRegistryAnchor",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
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
    name: "Claimed",
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
        name: "token",
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
    name: "PayoutSet",
    inputs: [
      {
        name: "recipientIds",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
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
    name: "RecipientStatusUpdated",
    inputs: [
      {
        name: "recipientId",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "recipientStatus",
        type: "uint8",
        indexed: false,
        internalType: "enum IStrategy.Status",
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
  {
    type: "event",
    name: "TimestampsUpdated",
    inputs: [
      {
        name: "registrationStartTime",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
      {
        name: "registrationEndTime",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
      {
        name: "allocationStartTime",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
      {
        name: "allocationEndTime",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
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
    name: "UpdatedRegistration",
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
      {
        name: "status",
        type: "uint8",
        indexed: false,
        internalType: "enum IStrategy.Status",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "ALLOCATION_ACTIVE", inputs: [] },
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
  { type: "error", name: "INVALID_REGISTRATION", inputs: [] },
  { type: "error", name: "IS_APPROVED_STRATEGY", inputs: [] },
  { type: "error", name: "MISMATCH", inputs: [] },
  { type: "error", name: "NONCE_NOT_AVAILABLE", inputs: [] },
  { type: "error", name: "NON_ZERO_VALUE", inputs: [] },
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
] as const;
