import { Metadata } from "../Common/types";
export type CreatePoolArgs = {
    profileId: `0x${string}`;
    strategy: any;
    initStrategyData: `0x${string}`;
    token: `0x${string}`;
    amount: bigint;
    metadata: Metadata;
    managers: `0x${string}`[];
};
export type UpdateMetaDataArgs = {
    poolId: bigint;
    metadata: Metadata;
};
export type Pool = {
    profileId: `0x${string}`;
    strategy: any;
    token: `0x${string}`;
    metadata: Metadata;
    managerRole: `0x${string}`;
    adminRole: `0x${string}`;
};
