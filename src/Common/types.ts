import { Chain } from "viem";

export type ConstructorArgs = {
  chain: Chain;
  rpc?: string;
  address?: `0x${string}`;
  poolId?: number;
};

export type TransactionData = {
  to: `0x${string}`;
  data: `0x${string}`;
  value: string;
};

export type Metadata = {
  protocol: number;
  pointer: string;
};

export type FunctionDataParams = {
  functionName: string;
  args: any[];
};

export type DeployParams = {
  abi: any[];
  bytecode: `0x${string}`;
};

export const ZERO_ADDRESS: `0x${string}` =
  "0x0000000000000000000000000000000000000000";
