import { BaseStrategy } from "../../BaseStrategy";
import { TransactionData } from "../../../Common/types";
import { encodeFunctionData } from "viem";
import { abi } from "./allocationExtension.config";

export type InitializeAllocationExtensionParams = {
  allowedTokens: `0x${string}`[];
  allocationStartTime: bigint;
  allocationEndTime: bigint;
  isUsingAllocationMetadata: boolean;
};

export class AllocationExtension extends BaseStrategy {
  // Read functions
  public async getAllocationStartTime(): Promise<bigint> {
    this.checkStrategy();
    const startTime = await this.contract.read.allocationStartTime();
    return startTime;
  }

  public async getAllocationEndTime(): Promise<bigint> {
    this.checkStrategy();
    const endTime = await this.contract.read.allocationEndTime();
    return endTime;
  }

  public async isUsingAllocationMetadata(): Promise<boolean> {
    this.checkStrategy();
    const isUsing = await this.contract.read.isUsingAllocationMetadata();
    return isUsing;
  }

  public async isAllowedToken(token: `0x${string}`): Promise<boolean> {
    this.checkStrategy();
    const isAllowed = await this.contract.read.allowedTokens(token);
    return isAllowed;
  }

  // Write functions
  public updateAllocationTimestamps(
    allocationStartTime: bigint,
    allocationEndTime: bigint
  ): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi,
      functionName: "updateAllocationTimestamps",
      args: [allocationStartTime, allocationEndTime],
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
        "AllocationExtension: No strategy address provided. Please call `setContract` first."
      );
    }
  }
}