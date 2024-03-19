import { Metadata } from "../../types";
import { Status } from "../types";
export type InitializeParams = {
    maxBid: bigint;
    useRegistryAnchor: boolean;
    metadataRequired: boolean;
};
export type Recipient = {
    useRegistryAnchor: boolean;
    recipientAddress: string;
    proposalBid: bigint;
    recipientStatus: Status;
    metadata: Metadata;
};
export type Milestone = {
    amountPercentage: bigint;
    metadata: Metadata;
    milestoneStatus: Status;
};
