import { Metadata } from "../Common/types";

export type CreatePoolArgs = {
  profileId: string;
  strategy: any;
  initStrategyData: string;
  token: string;
  amount: bigint;
  metadata: Metadata;
  managers: string[];
};

export type UpdateMetaDataArgs = {
  poolId: number;
  metadata: Metadata;
}

export type Pool = {
  profileId: string; // bytes32
  strategy: any; // IStrategy type
  token: string; // Address
  metadata: Metadata;
  managerRole: string; // bytes32
  adminRole: string; // bytes32
}