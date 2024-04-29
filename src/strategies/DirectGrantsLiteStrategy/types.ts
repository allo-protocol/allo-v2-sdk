import { Metadata } from "../../Common/types";

export type Recipient = {
  useRegistryAnchor: boolean;
  recipientAddress: `0x${string}`;
  metadata: Metadata;
};

export type RegisterData = {
  registryAnchor?: `0x${string}`;
  recipientAddress: `0x${string}`;
  grantAmount: bigint;
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
