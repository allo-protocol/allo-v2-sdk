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
    index: number;
    recipientId: `0x${string}`;
    amount: string;
    merkleProof: `0x${string}`[];
};
export type InitializeData = {
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
export declare enum PermitType {
    Permit = 0,
    PermitDAI = 1,
    Permit2 = 2
}
export type Allocation = {
    recipientId: `0x${string}`;
    permitType: PermitType;
    permit2Data: Permit2Data;
};
export type Claim = {
    recipientId: `0x${string}`;
    token: `0x${string}`;
};
export declare const StrategyType: {
    Vault: string;
    Direct: string;
};
