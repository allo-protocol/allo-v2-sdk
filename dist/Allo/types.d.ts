import { Metadata } from "../Common/types";
export type CreatePoolArgs = {
    profileId: string;
    strategy: any;
    initStrategyData: string;
    token: string;
    amount: bigint;
    metadata: Metadata;
    managers: string[];
};
export type UpdateMetaDataArgs = {
    poolId: number;
    metadata: Metadata;
};
export type Pool = {
    profileId: string;
    strategy: any;
    token: string;
    metadata: Metadata;
    managerRole: string;
    adminRole: string;
};
