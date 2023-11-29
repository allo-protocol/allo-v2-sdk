import { Metadata } from "../../Common/types";
import { Status } from "../types";
export declare enum StrategyType {
    MicroGrants = "MicroGrantsv1",
    Hats = "MicroGrantsHatsv1",
    Gov = "MicroGrantsGovv1"
}
export type Recipient = {
    useRegistryAnchor: boolean;
    recipientAddress: string;
    requestedAmount: string;
    recipientStatus: Status;
    metadata: Metadata;
};
export type RegisterData = {
    registryAnchor?: `0x${string}`;
    recipientAddress: `0x${string}`;
    requestedAmount: bigint;
    metadata: Metadata;
};
export type InitializeParams = {
    useRegistryAnchor: boolean;
    allocationStartTime: bigint;
    allocationEndTime: bigint;
    approvalThreshold: bigint;
    maxRequestedAmount: bigint;
};
export type InitializeParamsHats = InitializeParams & {
    hats: `0x${string}`;
    hatId: bigint;
};
export type InitializeParamsGov = InitializeParams & {
    universalGov: `0x${string}`;
    snapshotReference: bigint;
    minimumVotePower: bigint;
};
export type Allocation = {
    recipientId: `0x${string}`;
    status: Status;
};
export type SetAllocatorData = {
    allocatorAddress: `0x${string}`;
    flag: boolean;
};
