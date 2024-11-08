import { Address, Chain } from "viem";

const DEFAULT_ADDRESS: Address = "0x0000000000000000000000000000000000000000";

export const getAddress = (chain: Chain): `0x${string}` => {
  switch (chain.id) {
    default:
      return DEFAULT_ADDRESS;
  }
};

export const abi = [
  // ======================
  // ======== Errors =======
  // ======================
  {
    inputs: [],
    name: "AllocationExtension_INVALID_ALLOCATION_TIMESTAMPS",
    type: "error",
  },
  {
    inputs: [],
    name: "AllocationExtension_ALLOCATION_HAS_ALREADY_STARTED",
    type: "error",
  },
  {
    inputs: [],
    name: "AllocationExtension_ALLOCATION_NOT_ACTIVE",
    type: "error",
  },
  {
    inputs: [],
    name: "AllocationExtension_ALLOCATION_HAS_NOT_ENDED",
    type: "error",
  },
  {
    inputs: [],
    name: "AllocationExtension_ALLOCATION_HAS_ENDED",
    type: "error",
  },

  // ======================
  // ======== Events =======
  // ======================
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
      }
    ],
    name: "AllocationTimestampsUpdated",
    type: "event",
  },

  // ======================
  // ======== Functions =======
  // ======================
  {
    inputs: [],
    name: "allocationStartTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      }
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
      }
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isUsingAllocationMetadata",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      }
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
        internalType: "uint64",
        name: "_allocationStartTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_allocationEndTime",
        type: "uint64",
      }
    ],
    name: "updateAllocationTimestamps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  }
] as const;