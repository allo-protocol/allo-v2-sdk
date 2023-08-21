import { Chain } from "viem";

export type ConstructorArgs = {
  chain: Chain;
  rpc?: string;
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