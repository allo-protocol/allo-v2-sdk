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
    name: "NFTGatingExtension_InvalidToken",
    type: "error"
  },
  {
    inputs: [],
    name: "NFTGatingExtension_InvalidActor",
    type: "error"
  },
  {
    inputs: [],
    name: "NFTGatingExtension_InsufficientBalance",
    type: "error"
  },
] as const;