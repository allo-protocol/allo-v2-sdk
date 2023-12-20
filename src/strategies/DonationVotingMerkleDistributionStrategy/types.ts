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

export type RegisterDataDonationVoting = {
  registryAnchor: `0x${string}`;
  recipientAddress: `0x${string}`;
  metadata: Metadata;
};

export type Distribution = {
  index: number;
  recipientId: string;
  amount: string;
  merkleProof: string[];
};

export type InitializeParamsDonationVoting = {
  useRegistryAnchor: boolean;
  metadataRequired: boolean;
  registrationStartTime: bigint;
  registrationEndTime: bigint;
  allocationStartTime: bigint;
  allocationEndTime: bigint;
  allowedTokens: `0x${string}`[];
};

export type TokenPermissions = {
  token: `0x${string}`;
  amount: bigint;
};

export type PermitTransferFrom = {
  permitted: TokenPermissions;
  nonce: bigint;
  deadline: bigint;
};

export type Permit2Data = {
  permit: PermitTransferFrom;
  signature: `0x${string}`;
};

export const StrategyTypeDonationVoting = {
  Vault: "DonationVotingMerkleDistributionVaultv1",
  Direct: "DonationVotingMerkleDistributionDirectTransferv1",
};
