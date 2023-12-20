import { keccak256, toHex } from "viem";

export const makeAddress = (input: string): string => {
  return keccak256(toHex(input)).slice(0, 42);
};

export const makeBytes32 = (input: string): string => {
  return keccak256(toHex(input));
};

export const NATIVE = () => {
  return "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
};
