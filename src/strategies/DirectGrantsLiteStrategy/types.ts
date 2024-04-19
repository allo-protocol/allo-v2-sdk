import { Metadata } from "../../Common/types";

export type ApplicationStatus = {
  index: number;
  statusRow: number; // todo: Big number?
};

export type Recipient = {
  useRegistryAnchor: boolean;
  recipientAddress: `0x${string}`;
  metadata: Metadata;
};

export type RegisterData = {
  registryAnchor?: `0x${string}`;
  recipientAddress: `0x${string}`;
  metadata: Metadata;
};

export type InitializeData = {
  useRegistryAnchor: boolean;
  metadataRequired: boolean;
  registrationStartTime: bigint;
  registrationEndTime: bigint;
};

export type Allocation = {
  token: `0x${string}`;
  recipientId: `0x${string}`;
  amount: bigint;
};

export type Claim = { recipientId: `0x${string}`; token: `0x${string}` };

export const StrategyType = {
  Vault: "Vault",
  Direct: "Direct",
};
