import { Metadata } from "../../types";
import { Status } from "../types";

export type InitializeParams = {
  registryGating: boolean;
  metadataRequired: boolean;
  grantAmountRequired: bigint;
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