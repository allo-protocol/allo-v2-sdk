export { CreatePoolArgs, Pool, UpdateMetaDataArgs } from "./Allo/types";
export { ConstructorArgs, DeployParams, FunctionDataParams, Metadata, TransactionData, ZERO_ADDRESS } from "./Common/types";
export { CreateProfileArgs, HasRoleArgs, MemberArgs, Profile, ProfileAndAddressArgs, ProfileMetadataArgs, ProfileNameArgs } from "./Registry/types";
export { PayoutSummary, Status } from "./strategies/types";
export declare const StrategyType: {
    MicroGrants: string;
    Hats: string;
    Gov: string;
    SQFSuperFluid: string;
};
export declare const NATIVE: string;
export type AbiComponent = {
    name: string;
    type: string;
    internalType?: string;
    components?: Array<AbiComponent>;
};
export type AbiItem = {
    type: string;
    name?: string;
    anonymous?: boolean;
    inputs?: Array<{
        name: string;
        type: string;
        internalType?: string;
        indexed?: boolean;
        components?: Array<AbiComponent>;
    }>;
    outputs?: Array<{
        name: string;
        type: string;
        internalType?: string;
        components?: Array<{
            internalType?: string;
            name?: string;
            type?: string;
            components?: Array<{
                internalType?: string;
                name?: string;
                type?: string;
            }>;
        }>;
    }>;
    stateMutability?: "pure" | "view" | "nonpayable" | "payable";
};
export type ContractAbi = Array<AbiItem>;
