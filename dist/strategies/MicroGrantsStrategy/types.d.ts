import { Metadata } from "../../Common/types";
import { Status } from "../types";
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
export type Allocation = {
    recipientId: `0x${string}`;
    status: Status;
};
export type SetAllocatorData = {
    allocatorAddress: `0x${string}`;
    flag: boolean;
};
