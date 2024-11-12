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
    name: "EASGatingExtension_InvalidEASAddress",
    type: "error"
  },
  {
    inputs: [],
    name: "EASGatingExtension_InvalidAttestationSchema",
    type: "error"
  },
  {
    inputs: [],
    name: "EASGatingExtension_InvalidAttestationAttester",
    type: "error"
  },
  // State Variable Getter
  {
    inputs: [],
    name: "eas",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
] as const;