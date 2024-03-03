import { Metadata } from "../Common/types";

export type CreatePoolArgs = {
  profileId: `0x${string}`;
  strategy: any;
  initStrategyData: `0x${string}`;
  token: `0x${string}`;
  amount: bigint;
  metadata: Metadata;
  managers: `0x${string}`[];
};

export type UpdateMetaDataArgs = {
  poolId: bigint;
  metadata: Metadata;
};

export type Pool = {
  profileId: `0x${string}`; // bytes32
  strategy: any; // IStrategy type
  token: `0x${string}`; // Address
  metadata: Metadata;
  managerRole: `0x${string}`; // bytes32
  adminRole: `0x${string}`; // bytes32
};