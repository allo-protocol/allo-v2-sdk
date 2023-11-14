import {
  Chain,
  PublicClient,
  Transport,
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  extractChain,
  getContract,
  parseAbiParameters,
} from "viem";

import { Allo } from "../../Allo/Allo";
import { create } from "../../Client/Client";
import { abi, bytecode } from "./microGrants.config";
import { abi as alloAbi } from "../../Allo/allo.config";

import {
  ConstructorArgs,
  DeployParams,
  TransactionData,
  ZERO_ADDRESS,
} from "../../Common/types";
import { PayoutSummary, Status } from "../types";

import {
  Allocation,
  InitializeParams,
  Recipient,
  RegisterData,
  SetAllocatorData,
} from "./types";
import { supportedChains } from "../../chains.config";

export class MicroGrantsStrategy {
  private client: PublicClient<Transport, Chain>;
  private contract: any;

  private strategy: `0x${string}` | undefined;
  private poolId: number;

  private allo: Allo;

  constructor({ chain, rpc, address, poolId }: ConstructorArgs) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.client = create(usedChain, rpc);

    this.client = create(usedChain, rpc);

    this.allo = new Allo({ chain, rpc }); // to call allocate

    if (address) {
      this.contract = getContract({
        address: address,
        abi: abi,
        publicClient: this.client,
      });
      this.strategy = address;
    }

    this.poolId = poolId || -1;
  }

  public setPoolId(poolId: number): void {
    this.poolId = poolId;
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi: abi,
      publicClient: this.client,
    });

    this.strategy = address;
  }

  private checkPoolId(): void {
    if (this.poolId === -1)
      throw new Error(
        "MicroGrantsStrategy: No poolId provided. Please call `setPoolId` first.",
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "MicroGrantsStrategy: No strategy address provided. Please call `setContract` first.",
      );
  }

  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async allocator(allocatorAddress: string): Promise<boolean> {
    this.checkStrategy();
    const allocator = await this.contract.read.allocators(allocatorAddress);

    return allocator;
  }

  public async allocated(
    allocatorAddress: string,
    recipientAddress: string,
  ): Promise<boolean> {
    this.checkStrategy();

    const allocated = await this.contract.read.allocated(
      allocatorAddress,
      recipientAddress,
    );

    return allocated;
  }

  public async allocationEndTime(): Promise<number> {
    this.checkStrategy();

    const endTime = await this.contract.read.allocationEndTime();

    return endTime;
  }

  public async allocationStartTime(): Promise<number> {
    this.checkStrategy();

    const startTime = await this.contract.read.allocationStartTime();

    return startTime;
  }

  public async approvalThreshold(): Promise<string> {
    this.checkStrategy();

    const threshold = await this.contract.read.approvalThreshold();

    return threshold;
  }

  public async getAllo(): Promise<Allo> {
    return this.allo;
  }

  public async getPayouts(recipientIds: string[]): Promise<PayoutSummary[]> {
    this.checkStrategy();

    const emptyData = Array(recipientIds.length).fill("0x");

    const payouts = await this.contract.read.getPayouts([
      recipientIds,
      emptyData,
    ]);

    const payoutSummary: PayoutSummary[] = payouts.map((payout: any) => {
      this.checkStrategy();

      return {
        address: payout.recipientAddress,
        amount: payout.amount,
      };
    });

    return payoutSummary;
  }

  public async getPoolAmount(): Promise<number> {
    this.checkStrategy();

    const amount = await this.contract.read.getPoolAmount();

    return amount;
  }

  public async getPoolId(): Promise<number> {
    this.checkStrategy();

    const poolId = await this.contract.read.getPoolId();

    return poolId;
  }

  public async getRecipient(recipientId: string): Promise<Recipient> {
    this.checkStrategy();

    const recipient = await this.contract.read.getRecipient(recipientId);

    return recipient;
  }

  public async getRecipientStatus(recipientId: string): Promise<Status> {
    this.checkStrategy();

    const status = await this.contract.read.getRecipientStatus(recipientId);

    return status;
  }

  public async getStrategyId(): Promise<string> {
    this.checkStrategy();

    const id = await this.contract.read.getStrategyId();

    return id;
  }

  public async isPoolActive(): Promise<boolean> {
    this.checkStrategy();

    const active = await this.contract.read.isPoolActive();

    return active;
  }

  public async isValidAllocator(allocatorAddress: string): Promise<boolean> {
    this.checkStrategy();

    const valid = await this.contract.read.isValidAllocator(allocatorAddress);

    return valid;
  }

  public async recipientAllocations(
    recipientId: string,
    status: Status,
  ): Promise<string> {
    this.checkStrategy();

    const allocations = await this.contract.read.recipientAllocations(
      recipientId,
      status,
    );

    return allocations;
  }

  public async maxRequestedAmount(): Promise<number> {
    this.checkStrategy();

    const maxRequestedAmount = await this.contract.read.maxRequestedAmount();

    return maxRequestedAmount;
  }

  public async useRegistryAnchor(): Promise<boolean> {
    this.checkStrategy();

    const useRegistryAnchor = await this.contract.read.useRegistryAnchor();

    return useRegistryAnchor;
  }

  public async getInitializeData(
    params: InitializeParams,
  ): Promise<`0x${string}`> {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("bool, uint64, uint64, uint256, uint256"),
      [
        params.useRegistryAnchor,
        params.allocationStartTime,
        params.allocationEndTime,
        params.approvalThreshold,
        params.maxRequestedAmount,
      ],
    );

    return encoded;
  }

  public getDeployParams(): DeployParams {
    const constructorArgs: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, string"),
      [this.allo.address(), "MicroGrantsv1"],
    );
    const constructorArgsNo0x = constructorArgs.slice(2);

    return {
      abi: abi,
      bytecode: (bytecode + constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  public getBatchAllocationData(allocations: Allocation[]): TransactionData {
    this.checkPoolId();

    const encodedParams: `0x${string}`[] = [];

    allocations.forEach((allocation) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, enum"),
        [allocation.recipientId, allocation.status],
      );

      encodedParams.push(encoded);
    });

    const poolIds: bigint[] = Array(encodedParams.length).fill(this.poolId);

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "batchAllocate",
      args: [poolIds, encodedParams],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  public getAllocationData(
    recipientId: `0x${string}`,
    status: Status,
  ): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, enum"),
      [recipientId, status],
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "allocate",
      args: [this.poolId, encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  public getRegisterRecipientData(data: RegisterData): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, address, uint256, (uint256, string)"),
      [
        data.registryAnchor || ZERO_ADDRESS,
        data.recipientAddress,
        data.requestedAmount,
        [data.metadata.protocol, data.metadata.pointer],
      ],
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "registerRecipient",
      args: [this.poolId, encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  public getBatchRegisterRecipientData(data: RegisterData[]): TransactionData {
    this.checkPoolId();
    const encodedParams: `0x${string}`[] = [];

    data.forEach((registerData) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, address, uint256, (uit256, string)"),
        [
          registerData.registryAnchor || ZERO_ADDRESS,
          registerData.recipientAddress,
          registerData.requestedAmount,
          [registerData.metadata.protocol, registerData.metadata.pointer],
        ],
      );

      encodedParams.push(encoded);
    });

    const poolIds: bigint[] = Array(encodedParams.length).fill(this.poolId);

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "batchRegisterRecipient",
      args: [poolIds, encodedParams],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  public getIncreasemaxRequestedAmountData(amount: bigint): TransactionData {
    this.checkStrategy();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("uint256"),
      [amount],
    );

    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "increasemaxRequestedAmount",
      args: [encoded],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getSetAllocatorData(data: SetAllocatorData): TransactionData {
    this.checkStrategy();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, bool"),
      [data.allocatorAddress, data.flag],
    );

    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "setAllocator",
      args: [encoded],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getBatchSetAllocatorData(data: SetAllocatorData[]): TransactionData {
    this.checkStrategy();

    const encodedParams: `0x${string}`[] = [];

    data.forEach((setAllocatorData) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, bool"),
        [setAllocatorData.allocatorAddress, setAllocatorData.flag],
      );

      encodedParams.push(encoded);
    });

    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "batchSetAllocator",
      args: [encodedParams],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getUpdatePoolTimestampsData(
    allocationStartTime: bigint,
    allocationEndTime: bigint,
  ): TransactionData {
    this.checkStrategy();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("uint64, uint64"),
      [allocationStartTime, allocationEndTime],
    );

    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "updatePoolTimestamps",
      args: [encoded],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }
}
