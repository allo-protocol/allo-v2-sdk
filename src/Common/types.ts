import { Chain } from "viem";

export type ConstructorArgs = {
  chain: Chain;
  rpc?: string;
  address?: `0x${string}`;
};

export type TransactionData = {
  to: `0x${string}`;
  data: `0x${string}`;
  value: string;
};

export type Metadata = {
  protocol: number;
  pointer: string;
}

export type FunctionDataParams = {
  functionName: string;
  args: any[];
};
