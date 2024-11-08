import { BaseStrategy } from "../../BaseStrategy";
import { TransactionData } from "../../../Common/types";
export type InitializeAllocationExtensionParams = {
    allowedTokens: `0x${string}`[];
    allocationStartTime: bigint;
    allocationEndTime: bigint;
    isUsingAllocationMetadata: boolean;
};
export declare class AllocationExtension extends BaseStrategy {
    getAllocationStartTime(): Promise<bigint>;
    getAllocationEndTime(): Promise<bigint>;
    isUsingAllocationMetadata(): Promise<boolean>;
    isAllowedToken(token: `0x${string}`): Promise<boolean>;
    updateAllocationTimestamps(allocationStartTime: bigint, allocationEndTime: bigint): TransactionData;
    private checkStrategy;
}
