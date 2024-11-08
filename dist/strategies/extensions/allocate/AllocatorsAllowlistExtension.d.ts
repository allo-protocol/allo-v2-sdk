import { BaseStrategy } from "../../BaseStrategy";
import { TransactionData } from "../../../Common/types";
export declare class AllocatorsAllowlistExtension extends BaseStrategy {
    isAllowedAllocator(allocator: `0x${string}`): Promise<boolean>;
    addAllocators(allocators: `0x${string}`[]): TransactionData;
    removeAllocators(allocators: `0x${string}`[]): TransactionData;
    private checkStrategy;
}
