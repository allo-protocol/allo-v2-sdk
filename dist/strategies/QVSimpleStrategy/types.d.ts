import { Metadata } from "../../types";
import { Status } from "../types";
export type InitializeParams = {
    registryGating: boolean;
    metadataRequired: boolean;
    reviewThreshold: bigint;
    registrationStartTime: bigint;
    registrationEndTime: bigint;
    allocationStartTime: bigint;
    allocationEndTime: bigint;
};
export type InitializeParamsSimple = {
    maxVoiceCreditsPerAllocator: bigint;
    params: InitializeParams;
};
export type Recipient = {
    totalVotesReceived: bigint;
    useRegistryAnchor: boolean;
    recipientAddress: string;
    metadata: Metadata;
    recipientStatus: Status;
    applicationId: bigint;
};
export type Milestone = {
    amountPercentage: bigint;
    metadata: Metadata;
    milestoneStatus: Status;
};
