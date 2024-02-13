import { Metadata } from "../../types";
import { Status } from "../types";

export type InitializeParams = {
  registryGating: boolean;
  metadataRequired: boolean;
  grantAmountRequired: boolean;
};

export type Recipient = {
  useRegistryAnchor: boolean;
  recipientAddress: string;
  grantAmount: string;
  metadata: Metadata;
  recipientStatus: Status;
  milestoneReviewStatus: Status;
};

export type Milestone = {
  amountPercentage: number;
  metadata: Metadata;
  milestoneStatus: Status;
}

export type Allocation = {
  recipientId: `0x${string}`;
  status: Status;
  grantAmount: bigint;
};

export type RegisterData = {
  registryAnchor?: `0x${string}`;
  recipientAddress: `0x${string}`;
  grantAmount: bigint;
  metadata: Metadata;
};
