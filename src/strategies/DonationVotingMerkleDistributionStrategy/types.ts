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
