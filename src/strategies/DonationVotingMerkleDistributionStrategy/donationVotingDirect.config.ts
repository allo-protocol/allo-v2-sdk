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
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "splitSignature",
    outputs: [
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
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
] as const;

export const bytecode =
  "0x60e060405260016008553480156200001657600080fd5b506040516200427138038062004271833981016040819052620000399162000127565b6001600160a01b038316608052604051839083908390839083906200006390829060200162000209565b60408051601f19818403018152919052805160209091012060a05250506001600160a01b038116620000a85760405163538ba4f960e01b815260040160405180910390fd5b6001600160a01b031660c052506200023e9350505050565b6001600160a01b0381168114620000d657600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200010c578181015183820152602001620000f2565b50506000910152565b80516200012281620000c0565b919050565b6000806000606084860312156200013d57600080fd5b83516200014a81620000c0565b60208501519093506001600160401b03808211156200016857600080fd5b818601915086601f8301126200017d57600080fd5b815181811115620001925762000192620000d9565b604051601f8201601f19908116603f01168101908382118183101715620001bd57620001bd620000d9565b81604052828152896020848701011115620001d757600080fd5b620001ea836020830160208801620000ef565b8096505050505050620002006040850162000115565b90509250925092565b60208152600082518060208401526200022a816040850160208701620000ef565b601f01601f19169190910160400192915050565b60805160a05160c051613fe062000291600039600081816104df0152611d75015260006103920152600081816102a601528181610eee015281816110570152818161182a01526123830152613fe06000f3fe6080604052600436106102295760003560e01c806373af345311610123578063df868ed3116100ab578063edd146cc1161006f578063edd146cc14610713578063ef2920fc14610733578063f31db3d114610746578063f5b0dfb714610766578063f6f258911461078657600080fd5b8063df868ed314610664578063dff7d2c714610679578063e744092e146106a0578063e7efcfc2146106d0578063eb11af93146106e657600080fd5b8063a7bb5803116100f2578063a7bb580314610586578063ac9650d8146105c4578063b2b878d0146105f1578063cb0e85a61461061e578063d2e17f591461063d57600080fd5b806373af34531461050157806395355b3b146105215780639af5c09d14610537578063a0cf0aea1461055e57600080fd5b806342fda9c7116101b15780635708973911610175578063570897391461044357806359a3977b1461045d5780635f1b55f31461048057806362812a39146104a05780636afdd850146104cd57600080fd5b806342fda9c7146103835780634533d678146103b65780634ab4ba42146103ee5780634d31d0871461040357806351cff8d91461042357600080fd5b806321755088116101f857806321755088146102fe5780632bbe0cae1461032e5780632d52eff2146103415780632eb4a7ab1461035857806338fff2d01461036e57600080fd5b806301fc1c64146102355780630a6f0ee91461027557806315cc481e146102975780632143e92f146102de57600080fd5b3661023057005b600080fd5b34801561024157600080fd5b50610262610250366004612b05565b600c6020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561028157600080fd5b50610295610290366004612d4e565b6107b3565b005b3480156102a357600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b03909116815260200161026c565b3480156102ea57600080fd5b506102956102f9366004612dda565b6107d3565b34801561030a57600080fd5b5060055461031e9062010000900460ff1681565b604051901515815260200161026c565b6102c661033c366004612e36565b6108d0565b34801561034d57600080fd5b50600a54151561031e565b34801561036457600080fd5b50610262600a5481565b34801561037a57600080fd5b50600154610262565b34801561038f57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610262565b3480156103c257600080fd5b506006546103d6906001600160401b031681565b6040516001600160401b03909116815260200161026c565b3480156103fa57600080fd5b50600254610262565b34801561040f57600080fd5b5061031e61041e366004612b05565b6108f5565b34801561042f57600080fd5b5061029561043e366004612b05565b6108fe565b34801561044f57600080fd5b5060055461031e9060ff1681565b34801561046957600080fd5b50610472610978565b60405161026c929190612ed7565b34801561048c57600080fd5b5061031e61049b366004612ef0565b610a0f565b3480156104ac57600080fd5b506104c06104bb366004612b05565b610a1a565b60405161026c9190612f09565b3480156104d957600080fd5b506102c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561050d57600080fd5b5061029561051c366004612f58565b610a2b565b34801561052d57600080fd5b5061026260085481565b34801561054357600080fd5b506005546103d690630100000090046001600160401b031681565b34801561056a57600080fd5b506102c673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561059257600080fd5b506105a66105a1366004612ff5565b610acd565b60408051938452602084019290925260ff169082015260600161026c565b3480156105d057600080fd5b506105e46105df366004613029565b610b46565b60405161026c919061309d565b3480156105fd57600080fd5b5061061161060c3660046130ff565b610c3a565b60405161026c91906131de565b34801561062a57600080fd5b5060055461031e90610100900460ff1681565b34801561064957600080fd5b506005546103d690600160981b90046001600160401b031681565b34801561067057600080fd5b5061031e610d38565b34801561068557600080fd5b506005546103d690600160581b90046001600160401b031681565b3480156106ac57600080fd5b5061031e6106bb366004612b05565b600e6020526000908152604090205460ff1681565b3480156106dc57600080fd5b5061026260075481565b3480156106f257600080fd5b50610706610701366004612b05565b610d47565b60405161026c9190613254565b34801561071f57600080fd5b5061029561072e36600461327c565b610d52565b610295610741366004612e36565b610dad565b34801561075257600080fd5b506102956107613660046132c2565b610dd5565b34801561077257600080fd5b50610295610781366004612ef0565b610eb9565b34801561079257600080fd5b506102626107a1366004612ef0565b600b6020526000908152604090205481565b6107bb610ee3565b6107c3610f2e565b6107ce838383610f51565b505050565b336107dd8161102d565b6107e9858585856110df565b6005805472ffffffffffffffffffffffffffffffff000000191663010000006001600160401b03888116820267ffffffffffffffff60581b191692909217600160581b88841681029190911767ffffffffffffffff60981b1916600160981b888516810291909117948590556006805467ffffffffffffffff191688861690811790915560408051948704861685529286048516602085015294049092169181019190915260608101919091523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a15050505050565b60006108da610ee3565b6108e2610f2e565b6108ec8383611166565b90505b92915050565b600060016108ef565b336109088161102d565b600654610921906001600160401b031662278d0061339f565b6001600160401b0316421161094957604051637fcce2a960e01b815260040160405180910390fd5b600061095583306114b3565b905060008061096482846133bf565b90506109718533836114fc565b5050505050565b600380546004805491929161098c906133d2565b80601f01602080910402602001604051908101604052809291908181526020018280546109b8906133d2565b8015610a055780601f106109da57610100808354040283529160200191610a05565b820191906000526020600020905b8154815290600101906020018083116109e857829003601f168201915b5050505050905082565b60006108ef82611536565b610a22612aaa565b6108ef82611577565b610a33611670565b33610a3d8161102d565b60055462010000900460ff1615610a6757604051637fcce2a960e01b815260040160405180910390fd5b600a839055815160039081556020830151839190600490610a889082613452565b509050507fdc7180ca4affc84269428ed20ef950e745126f11691b010c4a7d49458421008f600a546003604051610ac0929190613511565b60405180910390a1505050565b60008060008351604114610b285760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e677468000000000000000060448201526064015b60405180910390fd5b50505060208101516040820151606090920151909260009190911a90565b6060816001600160401b03811115610b6057610b60612b29565b604051908082528060200260200182016040528015610b9357816020015b6060815260200190600190039081610b7e5790505b50905060005b82811015610c3357610c0330858584818110610bb757610bb76135b6565b9050602002810190610bc991906135cc565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061169b92505050565b828281518110610c1557610c156135b6565b60200260200101819052508080610c2b90613619565b915050610b99565b5092915050565b81518151606091908114610c6157604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b03811115610c7b57610c7b612b29565b604051908082528060200260200182016040528015610cc057816020015b6040805180820190915260008082526020820152815260200190600190039081610c995790505b50905060005b82811015610d2f57610d0a868281518110610ce357610ce36135b6565b6020026020010151868381518110610cfd57610cfd6135b6565b60200260200101516116c0565b828281518110610d1c57610d1c6135b6565b6020908102919091010152600101610cc6565b50949350505050565b6000610d4261177b565b905090565b60006108ef826117c4565b610d5a610ee3565b600081806020019051810190610d7091906136cc565b9050610d7c83826117e3565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610ac0929190612ed7565b610db5610ee3565b610dbd610f2e565b610dc78282611a91565b610dd18282611c72565b5050565b610ddd6122ef565b33610de78161102d565b6008548214610e0957604051637fcce2a960e01b815260040160405180910390fd5b60005b8351811015610eb3576000848281518110610e2957610e296135b6565b60200260200101516000015190506000858381518110610e4b57610e4b6135b6565b6020908102919091018101518101516000848152600b83526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a25050600101610e0c565b50505050565b610ec1610ee3565b8060026000828254610ed3919061379e565b90915550610ee090508181565b50565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f2c5760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003610f2c57604051630f68fe6360e21b815260040160405180910390fd5b80610f5b8161102d565b600a54600003610f7e57604051637fcce2a960e01b815260040160405180910390fd5b60055462010000900460ff16610fa0576005805462ff00001916620100001790555b600083806020019051810190610fb69190613885565b805190915060005b81811015610ff057610fe8838281518110610fdb57610fdb6135b6565b602002602001015161231a565b600101610fbe565b506040516001600160a01b038516907f7ec3272052827f7b50d9e84f98172cbb80c112df1e377c5b97ea77f1812db8d990600090a2505050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa15801561109e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c29190613940565b610ee05760405163075fd2b160e01b815260040160405180910390fd5b826001600160401b0316846001600160401b031611806111105750816001600160401b0316846001600160401b0316115b8061112c5750806001600160401b0316826001600160401b0316115b806111485750806001600160401b0316836001600160401b0316115b15610eb357604051637fcce2a960e01b815260040160405180910390fd5b60006111706124b0565b6000806000611192604051806040016040528060008152602001606081525090565b60055460ff16156111e457868060200190518101906111b19190613a01565b919650935090506111c28587612500565b6111df5760405163075fd2b160e01b815260040160405180910390fd5b61124f565b868060200190518101906111f89190613a01565b6001600160a01b03831615159650909450909250905083611219578561121b565b815b9450838015611231575061122f8587612500565b155b1561124f5760405163075fd2b160e01b815260040160405180910390fd5b600554610100900460ff1680156112725750602081015151158061127257508051155b156112905760405163c19e07c560e01b815260040160405180910390fd5b6001600160a01b0383166112c25760405163f4a513b960e01b81526001600160a01b0386166004820152602401610b1f565b6001600160a01b038086166000908152600f6020908152604090912080549286166101000274ffffffffffffffffffffffffffffffffffffffff00199093169290921782558251600183019081559083015183919060028401906113269082613452565b505060055460ff16905061133a578461133d565b60015b815460ff19169015151781556001600160a01b0386166000908152600c60205260408120549003611419576008546001600160a01b0387166000908152600c60205260409020556113938660015b60ff166125f8565b6000886008546040516020016113aa929190613a64565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a6040516113f6929190613a86565b60405180910390a26008805490600061140e83613619565b9190505550506114a8565b60006114248761262b565b905060011960ff8216016114425761143d87600161138b565b611459565b60021960ff8216016114595761145987600461138b565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a61148f8b61262b565b60405161149e93929190613ab1565b60405180910390a2505b505050505092915050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016114eb57506001600160a01b038116316108ef565b6114f5838361266c565b90506108ef565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161152b576107ce82826126a1565b6107ce8383836126bd565b60008061154561010084613afc565b9050600061155561010085613b10565b6000928352600d602052604090922054600190921b9182169091149392505050565b61157f612aaa565b6001600160a01b038083166000908152600f60209081526040918290208251606081018452815460ff8116151582526101009004909416848301528251808401845260018201805482526002830180549395870194929391928401916115e4906133d2565b80601f0160208091040260200160405190810160405280929190818152602001828054611610906133d2565b801561165d5780601f106116325761010080835404028352916020019161165d565b820191906000526020600020905b81548152906001019060200180831161164057829003601f168201915b5050509190925250505090525092915050565b6006546001600160401b03164211610f2c57604051634543ced160e11b815260040160405180910390fd5b60606108ec8383604051806060016040528060278152602001613f846027913961270c565b60408051808201909152600080825260208201526000828060200190518101906116ea9190613b24565b80516020820151604083015160608401519394509192909190600061170e84611577565b6020015190506117218585838686612784565b15611751576040518060400160405280826001600160a01b031681526020018481525096505050505050506108ef565b604080518082019091526001600160a01b0390911681526000602082015298975050505050505050565b6005546000904263010000009091046001600160401b0316118015906117b35750600554600160581b90046001600160401b03164211155b156117be5750600190565b50600090565b60006117cf8261262b565b60ff1660068111156108ef576108ef61323e565b6117ec8261282d565b80516005805460208085015161ffff1990921693151561ff001916939093176101009115159190910217905560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa158015611879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189d9190613b58565b6009805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03929092169190911790556040810151600580546060840151608085015172ffffffffffffffffffffffffffffffff0000001990921663010000006001600160401b03958616810267ffffffffffffffff60581b191691909117600160581b92861683021767ffffffffffffffff60981b1916600160981b9386168402179384905560a08601516006805467ffffffffffffffff191691871691821790556119779591850482169492830482169390920416906110df565b60055460065460408051630100000084046001600160401b039081168252600160581b850481166020830152600160981b909404841681830152929091166060830152336080830152517fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39181900360a00190a160c0810151516000819003611a305760008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c805460ff191660011790555b60005b81811015610eb3576001600e60008560c001518481518110611a5757611a576135b6565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101611a33565b611a9961287c565b60008083806020019051810190611ab09190613b75565b805151602081015190519395509093509190506002611ace8561262b565b60ff166006811115611ae257611ae261323e565b6006811115611af357611af361323e565b14611b1c5760405163f4a513b960e01b81526001600160a01b0385166004820152602401610b1f565b6001600160a01b0381166000908152600e602052604090205460ff16158015611b70575060008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5460ff16155b15611b8e57604051637fcce2a960e01b815260040160405180910390fd5b600034118015611bbb57506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14155b80611bed57506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015611bed5750813414155b15611c0b57604051637fcce2a960e01b815260040160405180910390fd5b836001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b838388604051611c62939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a2505050505050565b600080600084806020019051810190611c8b9190613b75565b805151805160209091015193965091945092509073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03831601611d155780341015611ce5576040516374c5672b60e01b815260040160405180910390fd5b6001600160a01b038086166000908152600f6020526040902054611d109161010090910416826126a1565b6122e6565b6002846002811115611d2957611d2961323e565b03611de65782516040805180820182526001600160a01b038881166000908152600f60209081529084902054610100900482168352808301869052870151925163187945bd60e11b81527f0000000000000000000000000000000000000000000000000000000000000000909116936330f28b7a93611daf9391928c9190600401613c82565b600060405180830381600087803b158015611dc957600080fd5b505af1158015611ddd573d6000803e3d6000fd5b505050506122e6565b6000846002811115611dfa57611dfa61323e565b0361205c576000806000611e118660200151610acd565b8851604090810151905163d505accf60e01b81526001600160a01b038e81166004830152306024830152604482018a9052606482019290925260ff8316608482015260a4810185905260c48101849052939650919450925086169063d505accf9060e401600060405180830381600087803b158015611e8f57600080fd5b505af1925050508015611ea0575060015b611fc857611eac613d05565b806308c379a003611f625750611ec0613d20565b80611ecb5750611f64565b604051636eb1769f60e11b815233600482015230602482015285906001600160a01b0388169063dd62ed3e906044015b602060405180830381865afa158015611f18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f3c9190613da9565b1015611f5c578060405162461bcd60e51b8152600401610b1f9190613dc2565b50611fc8565b505b3d808015611f8e576040519150601f19603f3d011682016040523d82523d6000602084013e611f93565b606091505b50604051636eb1769f60e11b815233600482015230602482015285906001600160a01b0388169063dd62ed3e90604401611efb565b6001600160a01b038881166000908152600f6020526040908190205490516323b872dd60e01b81528b831660048201526101009091048216602482015260448101869052908616906323b872dd906064016020604051808303816000875af1158015612038573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ddd9190613940565b60018460028111156120705761207061323e565b036122e65760008060006120878660200151610acd565b8851602081015160409182015191516323f2ebc360e21b81526001600160a01b038f81166004830152306024830152604482019290925260648101929092526001608483015260ff831660a483015260c4820185905260e48201849052939650919450925090861690638fcbaf0c9061010401600060405180830381600087803b15801561211457600080fd5b505af1925050508015612125575060015b61224d57612131613d05565b806308c379a0036121e75750612145613d20565b8061215057506121e9565b604051636eb1769f60e11b815233600482015230602482015285906001600160a01b0388169063dd62ed3e906044015b602060405180830381865afa15801561219d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c19190613da9565b10156121e1578060405162461bcd60e51b8152600401610b1f9190613dc2565b5061224d565b505b3d808015612213576040519150601f19603f3d011682016040523d82523d6000602084013e612218565b606091505b50604051636eb1769f60e11b815233600482015230602482015285906001600160a01b0388169063dd62ed3e90604401612180565b6001600160a01b038881166000908152600f6020526040908190205490516323b872dd60e01b81528b831660048201526101009091048216602482015260448101869052908616906323b872dd906064016020604051808303816000875af11580156122bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e19190613940565b505050505b50505050505050565b6006546001600160401b0316421115610f2c5760405162b828c960e81b815260040160405180910390fd5b805160208083015160408085015160608601516001600160a01b038085166000908152600f9096529290942054929390929091610100909104166123618585838686612784565b156124845760015460405163068bcd8d60e01b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d916123ba9160040190815260200190565b600060405180830381865afa1580156123d7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526123ff9190810190613dd5565b905061240a866128c4565b836002600082825461241c91906133bf565b909155505060408101516124319083866114fc565b60408082015181518681526001600160a01b038581166020830152808916939216917fa6b66f665010d2f7435f110111aaa34b56564074f66081bef606d996fc8caa6f910160405180910390a3506124a8565b60405163f4a513b960e01b81526001600160a01b0385166004820152602401610b1f565b505050505050565b6005544263010000009091046001600160401b031611806124e25750600554600160581b90046001600160401b031642115b15610f2c57604051635b04f6ad60e11b815260040160405180910390fd5b60095460405163dd93da4360e01b81526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa15801561254e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526125769190810190613e8a565b6009548151604051635e8a791560e01b815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa1580156125cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125f09190613940565b949350505050565b600080600061260685612902565b6000928352600b602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b0381166000908152600c6020526040812054810361265257506000919050565b60008061265e84612902565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af1610dd15763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716612702576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b0316856040516127299190613f50565b600060405180830381855af49150503d8060008114612764576040519150601f19603f3d011682016040523d82523d6000602084013e612769565b606091505b509150915061277a86838387612975565b9695505050505050565b600061278f86611536565b1561279c57506000612824565b60408051602081018890526001600160a01b038088169282019290925290851660608201526080810184905260009060a00160408051601f198184030181528282528051602091820120908301520160405160208183030381529060405280519060200120905061281083600a54836129ee565b61281e576000915050612824565b60019150505b95945050505050565b612835610ee3565b600154156128565760405163439a74c960e01b815260040160405180910390fd5b8060000361287757604051637fcce2a960e01b815260040160405180910390fd5b600155565b60055442600160981b9091046001600160401b031611806128a757506006546001600160401b031642115b15610f2c5760405162b828c960e81b815260040160405180910390fd5b60006128d261010083613afc565b905060006128e261010084613b10565b6000928352600d60205260409092208054600190931b9092179091555050565b6001600160a01b0381166000908152600c602052604081205481908190819061292d906001906133bf565b9050600061293c604083613afc565b9050600061294b604084613b10565b612956906004613f6c565b6000838152600b60205260409020549298909750919550909350505050565b606083156129e45782516000036129dd576001600160a01b0385163b6129dd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b1f565b50816125f0565b6125f08383612a04565b6000826129fb8584612a2e565b14949350505050565b815115612a145781518083602001fd5b8060405162461bcd60e51b8152600401610b1f9190613dc2565b600081815b8451811015612a7357612a5f82868381518110612a5257612a526135b6565b6020026020010151612a7b565b915080612a6b81613619565b915050612a33565b509392505050565b6000818310612a975760008281526020849052604090206108ec565b60008381526020839052604090206108ec565b604051806060016040528060001515815260200160006001600160a01b03168152602001612aeb604051806040016040528060008152602001606081525090565b905290565b6001600160a01b0381168114610ee057600080fd5b600060208284031215612b1757600080fd5b8135612b2281612af0565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604081018181106001600160401b0382111715612b5e57612b5e612b29565b60405250565b608081018181106001600160401b0382111715612b5e57612b5e612b29565b606081018181106001600160401b0382111715612b5e57612b5e612b29565b60c081018181106001600160401b0382111715612b5e57612b5e612b29565b601f8201601f191681016001600160401b0381118282101715612be657612be6612b29565b6040525050565b60405160e081016001600160401b0381118282101715612c0f57612c0f612b29565b60405290565b604051612c2181612ba2565b90565b60006001600160401b03821115612c3d57612c3d612b29565b5060051b60200190565b600082601f830112612c5857600080fd5b81356020612c6582612c24565b604051612c728282612bc1565b83815260059390931b8501820192828101915086841115612c9257600080fd5b8286015b84811015612cb6578035612ca981612af0565b8352918301918301612c96565b509695505050505050565b60006001600160401b03821115612cda57612cda612b29565b50601f01601f191660200190565b6000612cf383612cc1565b604051612d008282612bc1565b809250848152858585011115612d1557600080fd5b8484602083013760006020868301015250509392505050565b600082601f830112612d3f57600080fd5b6108ec83833560208501612ce8565b600080600060608486031215612d6357600080fd5b83356001600160401b0380821115612d7a57600080fd5b612d8687838801612c47565b94506020860135915080821115612d9c57600080fd5b50612da986828701612d2e565b9250506040840135612dba81612af0565b809150509250925092565b6001600160401b0381168114610ee057600080fd5b60008060008060808587031215612df057600080fd5b8435612dfb81612dc5565b93506020850135612e0b81612dc5565b92506040850135612e1b81612dc5565b91506060850135612e2b81612dc5565b939692955090935050565b60008060408385031215612e4957600080fd5b82356001600160401b03811115612e5f57600080fd5b612e6b85828601612d2e565b9250506020830135612e7c81612af0565b809150509250929050565b60005b83811015612ea2578181015183820152602001612e8a565b50506000910152565b60008151808452612ec3816020860160208601612e87565b601f01601f19169290920160200192915050565b8281526040602082015260006125f06040830184612eab565b600060208284031215612f0257600080fd5b5035919050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a08401526125f060c0840182612eab565b60008060408385031215612f6b57600080fd5b8235915060208301356001600160401b0380821115612f8957600080fd5b9084019060408287031215612f9d57600080fd5b604051612fa981612b3f565b82358152602083013582811115612fbf57600080fd5b80840193505086601f840112612fd457600080fd5b612fe387843560208601612ce8565b60208201528093505050509250929050565b60006020828403121561300757600080fd5b81356001600160401b0381111561301d57600080fd5b6125f084828501612d2e565b6000806020838503121561303c57600080fd5b82356001600160401b038082111561305357600080fd5b818501915085601f83011261306757600080fd5b81358181111561307657600080fd5b8660208260051b850101111561308b57600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156130f257603f198886030184526130e0858351612eab565b945092850192908501906001016130c4565b5092979650505050505050565b6000806040838503121561311257600080fd5b82356001600160401b038082111561312957600080fd5b61313586838701612c47565b935060209150818501358181111561314c57600080fd5b8501601f8101871361315d57600080fd5b803561316881612c24565b6040516131758282612bc1565b82815260059290921b830185019185810191508983111561319557600080fd5b8584015b838110156131cd578035868111156131b15760008081fd5b6131bf8c8983890101612d2e565b845250918601918601613199565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156132315761322184835180516001600160a01b03168252602090810151910152565b92840192908501906001016131fb565b5091979650505050505050565b634e487b7160e01b600052602160045260246000fd5b602081016007831061327657634e487b7160e01b600052602160045260246000fd5b91905290565b6000806040838503121561328f57600080fd5b8235915060208301356001600160401b038111156132ac57600080fd5b6132b885828601612d2e565b9150509250929050565b60008060408084860312156132d657600080fd5b83356001600160401b038111156132ec57600080fd5b8401601f810186136132fd57600080fd5b8035602061330a82612c24565b84516133168282612bc1565b83815260069390931b840182019282810191508984111561333657600080fd5b938201935b838510156133795785858b0312156133535760008081fd5b855161335e81612b3f565b8535815283860135848201528252938501939082019061333b565b9997909101359750505050505050565b634e487b7160e01b600052601160045260246000fd5b6001600160401b03818116838216019080821115610c3357610c33613389565b818103818111156108ef576108ef613389565b600181811c908216806133e657607f821691505b60208210810361340657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156107ce57600081815260208120601f850160051c810160208610156134335750805b601f850160051c820191505b818110156124a85782815560010161343f565b81516001600160401b0381111561346b5761346b612b29565b61347f8161347984546133d2565b8461340c565b602080601f8311600181146134b4576000841561349c5750858301515b600019600386901b1c1916600185901b1785556124a8565b600085815260208120601f198616915b828110156134e3578886015182559484019460019091019084016134c4565b50858210156135015787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b82815260006020604081840152835460408401526001808501604060608601526000815461353e816133d2565b80608089015260a08583166000811461355e5760018114613578576135a6565b60ff1984168a83015282151560051b8a01820194506135a6565b856000528760002060005b8481101561359e5781548c8201850152908801908901613583565b8b0183019550505b50929a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126135e357600080fd5b8301803591506001600160401b038211156135fd57600080fd5b60200191503681900382131561361257600080fd5b9250929050565b60006001820161362b5761362b613389565b5060010190565b8051801515811461364257600080fd5b919050565b805161364281612dc5565b805161364281612af0565b600082601f83011261366e57600080fd5b8151602061367b82612c24565b6040516136888282612bc1565b83815260059390931b85018201928281019150868411156136a857600080fd5b8286015b84811015612cb65780516136bf81612af0565b83529183019183016136ac565b6000602082840312156136de57600080fd5b81516001600160401b03808211156136f557600080fd5b9083019060e0828603121561370957600080fd5b613711612bed565b61371a83613632565b815261372860208401613632565b602082015261373960408401613647565b604082015261374a60608401613647565b606082015261375b60808401613647565b608082015261376c60a08401613647565b60a082015260c08301518281111561378357600080fd5b61378f8782860161365d565b60c08301525095945050505050565b808201808211156108ef576108ef613389565b6000608082840312156137c357600080fd5b6040516137cf81612b64565b809150825181526020808401516137e581612af0565b828201526040848101519083015260608401516001600160401b0381111561380c57600080fd5b8401601f8101861361381d57600080fd5b805161382881612c24565b6040516138358282612bc1565b82815260059290921b830184019184810191508883111561385557600080fd5b928401925b828410156138735783518252928401929084019061385a565b80606087015250505050505092915050565b6000602080838503121561389857600080fd5b82516001600160401b03808211156138af57600080fd5b818501915085601f8301126138c357600080fd5b81516138ce81612c24565b6040516138db8282612bc1565b82815260059290921b84018501918581019150888311156138fb57600080fd5b8585015b83811015613933578051858111156139175760008081fd5b6139258b89838a01016137b1565b8452509186019186016138ff565b5098975050505050505050565b60006020828403121561395257600080fd5b6108ec82613632565b600082601f83011261396c57600080fd5b815161397781612cc1565b6040516139848282612bc1565b82815285602084870101111561399957600080fd5b612824836020830160208801612e87565b6000604082840312156139bc57600080fd5b6040516139c881612b3f565b8091508251815260208301516001600160401b038111156139e857600080fd5b6139f48582860161395b565b6020830152505092915050565b600080600060608486031215613a1657600080fd5b8351613a2181612af0565b6020850151909350613a3281612af0565b60408501519092506001600160401b03811115613a4e57600080fd5b613a5a868287016139aa565b9150509250925092565b604081526000613a776040830185612eab565b90508260208301529392505050565b604081526000613a996040830185612eab565b90506001600160a01b03831660208301529392505050565b606081526000613ac46060830186612eab565b90506001600160a01b038416602083015260ff83166040830152949350505050565b634e487b7160e01b600052601260045260246000fd5b600082613b0b57613b0b613ae6565b500490565b600082613b1f57613b1f613ae6565b500690565b600060208284031215613b3657600080fd5b81516001600160401b03811115613b4c57600080fd5b6125f0848285016137b1565b600060208284031215613b6a57600080fd5b8151612b2281612af0565b600080600060608486031215613b8a57600080fd5b8351613b9581612af0565b602085015190935060038110613baa57600080fd5b809250506040808501516001600160401b0380821115613bc957600080fd5b9086019081880360a0811215613bde57600080fd5b8351613be981612b3f565b6080821215613bf757600080fd5b8451613c0281612b83565b85831215613c0f57600080fd5b85519250613c1c83612b3f565b8451613c2781612af0565b8084525060208501516020840152828152858501516020820152606085015186820152808252506080840151945082851115613c6257600080fd5b613c6e8a86860161395b565b602082015280955050505050509250925092565b6000610100613ca583885180516001600160a01b03168252602090810151910152565b6020870151604084015260408701516060840152613cd9608084018780516001600160a01b03168252602090810151910152565b6001600160a01b03851660c08401528060e0840152613cfa81840185612eab565b979650505050505050565b600060033d1115612c215760046000803e5060005160e01c90565b600060443d1015613d2e5790565b6040516003193d81016004833e81513d6001600160401b038160248401118184111715613d5d57505050505090565b8285019150815181811115613d755750505050505090565b843d8701016020828501011115613d8f5750505050505090565b613d9e60208286010187612bc1565b509095945050505050565b600060208284031215613dbb57600080fd5b5051919050565b6020815260006108ec6020830184612eab565b600060208284031215613de757600080fd5b81516001600160401b0380821115613dfe57600080fd5b9083019060c08286031215613e1257600080fd5b604051613e1e81612ba2565b825181526020830151613e3081612af0565b6020820152613e4160408401613652565b6040820152606083015182811115613e5857600080fd5b613e64878286016139aa565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b600060208284031215613e9c57600080fd5b81516001600160401b0380821115613eb357600080fd5b9083019060c08286031215613ec757600080fd5b613ecf612c15565b8251815260208301516020820152604083015182811115613eef57600080fd5b613efb8782860161395b565b604083015250606083015182811115613f1357600080fd5b613f1f878286016139aa565b606083015250613f3160808401613652565b6080820152613f4260a08401613652565b60a082015295945050505050565b60008251613f62818460208701612e87565b9190910192915050565b80820281158282048414176108ef576108ef61338956fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201d548f5cce55690b7a181059d2fa5e3170344fe918cbd75eb0364cd71037d3a064736f6c63430008130033";
