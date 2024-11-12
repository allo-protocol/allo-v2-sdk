import { BaseStrategy } from "../../BaseStrategy";
import { TransactionData } from "../../../Common/types";
import { encodeFunctionData } from "viem";
import { abi } from "./milestonesExtension.config";

export type Metadata = {
  protocol: string;
  pointer: string;
};

export type Milestone = {
  amountPercentage: bigint;
  metadata: Metadata;
  status: MilestoneStatus;
};

export enum MilestoneStatus {
  None,
  Pending,
  Accepted,
  Rejected,
  Appealed,
  InReview,
  Canceled
}

export class MilestonesExtension extends BaseStrategy {
  // Read functions
  public async getMaxBid(): Promise<bigint> {
    this.checkStrategy();
    const maxBid = await this.contract.read.maxBid();
    return maxBid;
  }

  public async getUpcomingMilestone(): Promise<number> {
    this.checkStrategy();
    const milestone = await this.contract.read.upcomingMilestone();
    return milestone;
  }

  public async getBid(recipientId: `0x${string}`): Promise<bigint> {
    this.checkStrategy();
    const bid = await this.contract.read.bids(recipientId);
    return bid;
  }

  public async getMilestone(milestoneId: bigint): Promise<Milestone> {
    this.checkStrategy();
    const milestone = await this.contract.read.getMilestone(milestoneId);
    return {
      amountPercentage: BigInt(milestone.amountPercentage),
      metadata: {
        protocol: milestone.metadata.protocol,
        pointer: milestone.metadata.pointer,
      },
      status: milestone.status as MilestoneStatus,
    };
  }

  public async getMilestoneStatus(milestoneId: bigint): Promise<MilestoneStatus> {
    this.checkStrategy();
    const status = await this.contract.read.getMilestoneStatus(milestoneId);
    return status as MilestoneStatus;
  }

  // Write functions
  public increaseMaxBid(maxBid: bigint): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi,
      functionName: "increaseMaxBid",
      args: [maxBid],
    });

    return {
      to: this.address(),
      data: encodedData,
      value: "0",
    };
  }

  public setMilestones(milestones: Milestone[]): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi,
      functionName: "setMilestones",
      args: [milestones.map(milestone => ({
        amountPercentage: milestone.amountPercentage,
        metadata: {
          protocol: milestone.metadata.protocol,
          pointer: milestone.metadata.pointer,
        },
        status: milestone.status,
      }))],
    });

    return {
      to: this.address(),
      data: encodedData,
      value: "0",
    };
  }

  public submitUpcomingMilestone(
    recipientId: `0x${string}`,
    metadata: Metadata
  ): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi,
      functionName: "submitUpcomingMilestone",
      args: [recipientId, metadata],
    });

    return {
      to: this.address(),
      data: encodedData,
      value: "0",
    };
  }

  public reviewMilestone(status: MilestoneStatus): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi,
      functionName: "reviewMilestone",
      args: [status],
    });

    return {
      to: this.address(),
      data: encodedData,
      value: "0",
    };
  }

  private checkStrategy(): void {
    if (!this.contract) {
      throw new Error(
        "MilestonesExtension: No strategy address provided. Please call `setContract` first."
      );
    }
  }
}
