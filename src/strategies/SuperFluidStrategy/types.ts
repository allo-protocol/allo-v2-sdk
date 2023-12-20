import { Metadata, Status } from "../../types";

export type InitializeParamsSuperFluid = {
  useRegistryAnchor: boolean;
  registrationStartTime: bigint;
  registrationEndTime: bigint;
  allocationStartTime: bigint;
  allocationEndTime: bigint;
  metadataRequired: boolean;
  passportDecoder: `0x${string}`;
  superfluidHost: `0x${string}`;
  allocationSuperToken: `0x${string}`;
  minPassportScore: bigint;
  initialSuperAppBalance: bigint;
};

export type RecipientSuperfluid = {
  useRegistryAnchor: boolean;
  recipientAddress: `0x${string}`;
  recipientStatus: Status;
  metadata: Metadata;
  superApp: `0x${string}`;
};

export type AllocationSuperlfuid = {
  recipientId: `0x${string}`;
  flowRate: bigint;
};

export type RegisterDataSuperfluid = {
  registryAnchor: `0x${string}`;
  recipientAddress: `0x${string}`;
  metadata: Metadata;
};

export type ReviewRecipientDataSuperfluid = {
  recipientId: `0x${string}`;
  recipientStatus: Status;
};
