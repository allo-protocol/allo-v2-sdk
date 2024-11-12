import { BaseStrategy } from "../../BaseStrategy";
import { TransactionData } from "../../../Common/types";
import { encodeFunctionData } from "viem";
import { abi } from "./allocatorsAllowlistExtension.config";

export class AllocatorsAllowlistExtension extends BaseStrategy {
  // Read functions
  public async isAllowedAllocator(allocator: `0x${string}`): Promise<boolean> {
    this.checkStrategy();
    const isAllowed = await this.contract.read.allowedAllocators(allocator);
    return isAllowed;
  }

  // Write functions
  public addAllocators(allocators: `0x${string}`[]): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi,
      functionName: "addAllocators",
      args: [allocators],
    });

    return {
      to: this.address(),
      data: encodedData,
      value: "0",
    };
  }

  public removeAllocators(allocators: `0x${string}`[]): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi,
      functionName: "removeAllocators",
      args: [allocators],
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
        "AllocatorsAllowlistExtension: No strategy address provided. Please call `setContract` first."
      );
    }
  }
}