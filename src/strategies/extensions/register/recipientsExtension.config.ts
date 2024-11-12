import { Address, Chain } from "viem";

const DEFAULT_ADDRESS: Address = "0x0000000000000000000000000000000000000000";

export const getAddress = (chain: Chain): `0x${string}` => {
  switch (chain.id) {
    default:
      return DEFAULT_ADDRESS;
  }
};

export const abi = [
  // Errors
  {
    inputs: [],
    name: "RecipientsExtension_RegistrationNotActive",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "recipientId", type: "address" }],
    name: "RecipientsExtension_RecipientError",
    type: "error"
  },
  {
    inputs: [],
    name: "RecipientsExtension_InvalidMetada",
    type: "error"
  },
  {
    inputs: [],
    name: "RecipientsExtension_RecipientNotAccepted",
    type: "error"
  },
  {
    inputs: [],
    name: "RecipientsExtension_RegistrationHasNotEnded",
    type: "error"
  },

  // Events
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "recipientId", type: "address" },
      { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
      { indexed: false, internalType: "address", name: "sender", type: "address" },
      { indexed: false, internalType: "uint8", name: "status", type: "uint8" }
    ],
    name: "UpdatedRegistration",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "rowIndex", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "fullRow", type: "uint256" },
      { indexed: false, internalType: "address", name: "sender", type: "address" }
    ],
    name: "RecipientStatusUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint64", name: "registrationStartTime", type: "uint64" },
      { indexed: false, internalType: "uint64", name: "registrationEndTime", type: "uint64" },
      { indexed: false, internalType: "address", name: "sender", type: "address" }
    ],
    name: "RegistrationTimestampsUpdated",
    type: "event"
  },

  // State Variable Getters
  {
    inputs: [],
    name: "REVIEW_EACH_STATUS",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "metadataRequired",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "registrationStartTime",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "registrationEndTime",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "recipientsCounter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "statusesBitMap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "recipientIndexToRecipientId",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },

  // External Functions
  {
    inputs: [{ internalType: "address", name: "_recipientId", type: "address" }],
    name: "getRecipient",
    outputs: [
      {
        components: [
          { internalType: "bool", name: "useRegistryAnchor", type: "bool" },
          { internalType: "address", name: "recipientAddress", type: "address" },
          { internalType: "uint64", name: "statusIndex", type: "uint64" },
          {
            components: [
              { internalType: "string", name: "protocol", type: "string" },
              { internalType: "string", name: "pointer", type: "string" }
            ],
            internalType: "struct Metadata",
            name: "metadata",
            type: "tuple"
          }
        ],
        internalType: "struct IRecipientsExtension.Recipient",
        name: "_recipient",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "index", type: "uint256" },
          { internalType: "uint256", name: "statusRow", type: "uint256" }
        ],
        internalType: "struct IRecipientsExtension.ApplicationStatus[]",
        name: "_statuses",
        type: "tuple[]"
      },
      { internalType: "uint256", name: "_refRecipientsCounter", type: "uint256" }
    ],
    name: "reviewRecipients",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint64", name: "_registrationStartTime", type: "uint64" },
      { internalType: "uint64", name: "_registrationEndTime", type: "uint64" }
    ],
    name: "updatePoolTimestamps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
] as const;