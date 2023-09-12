import { Metadata } from "../../Common/types";

export type Recipient = {
  useRegistryAnchor: boolean;
  recipientAddress: `0x${string}`;
  metadata: Metadata;
};

export type Distribution = {
  index: number;
  recipientId: string;
  amount: string;
  merkleProof: string[];
};

export type InitializeData = {
  useRegistryAnchor: boolean;
  metadataRequired: boolean;
  registrationStartTime: number;
  registrationEndTime: number;
  allocationStartTime: number;
  allocationEndTime: number;
  allowedTokens: string[];
};

export type Permit2Data = {
  permit: any;
  signature: string;
};

export enum Status {
  None,
  Pending,
  Accepted,
  Rejected,
  Appealed,
  // InReview,
  // Canceled,
}

export type ApplicationStatus = {
  index: bigint;
  statusRow: bigint;
};

export type ReviewRecipient = {
  recipientId: `0x${string}`;
  status: Status;
}