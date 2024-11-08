import { BaseStrategy } from "../../BaseStrategy";
import { TransactionData } from "../../../Common/types";
export type Metadata = {
    protocol: string;
    pointer: string;
};
export type Milestone = {
    amountPercentage: bigint;
    metadata: Metadata;
    status: MilestoneStatus;
};
export declare enum MilestoneStatus {
    None = 0,
    Pending = 1,
    Accepted = 2,
    Rejected = 3,
    Appealed = 4,
    InReview = 5,
    Canceled = 6
}
export declare class MilestonesExtension extends BaseStrategy {
    getMaxBid(): Promise<bigint>;
    getUpcomingMilestone(): Promise<number>;
    getBid(recipientId: `0x${string}`): Promise<bigint>;
    getMilestone(milestoneId: bigint): Promise<Milestone>;
    getMilestoneStatus(milestoneId: bigint): Promise<MilestoneStatus>;
    increaseMaxBid(maxBid: bigint): TransactionData;
    setMilestones(milestones: Milestone[]): TransactionData;
    submitUpcomingMilestone(recipientId: `0x${string}`, metadata: Metadata): TransactionData;
    reviewMilestone(status: MilestoneStatus): TransactionData;
    private checkStrategy;
}
