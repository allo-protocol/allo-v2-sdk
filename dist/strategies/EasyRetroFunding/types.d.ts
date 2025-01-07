import { Metadata } from "../../Common/types";
export type ApplicationStatus = {
    index: number;
    statusRow: number;
};
export type Recipient = {
    useRegistryAnchor: boolean;
    recipientAddress: `0x${string}`;
    metadata: Metadata;
};
export type RegisterData = {
    registryAnchor?: `0x${string}`;
    recipientAddress: `0x${string}`;
    metadata: Metadata;
};
export type Distribution = {
    index: bigint;
    recipientId: `0x${string}`;
    amount: bigint;
};
export type InitializeData = {
    useRegistryAnchor: boolean;
    metadataRequired: boolean;
    registrationStartTime: bigint;
    registrationEndTime: bigint;
    poolStartTime: bigint;
    poolEndTime: bigint;
};
