import {
  Chain,
  PublicClient,
  Transport,
  encodeAbiParameters,
  encodeFunctionData,
  getContract,
  parseAbiParameters,
} from "viem";

import { create } from "../../Client/Client";
import { abi, bytecode } from "./microGrants.config";
import { Allo } from "../../Allo/Allo";

import {
  ConstructorArgs,
  DeployParams,
  Metadata,
  TransactionData,
  ZERO_ADDRESS,
} from "../../Common/types";
import { PayoutSummary, Status } from "../types";

import { Recipient, InitializeParams, Allocation, RegisterData } from "./types";

export class MicroGrantsStrategy {
  private client: PublicClient<Transport, Chain>;
  private contract: any;

  private strategy: `0x${string}`;
  private poolId: number;

  private allo: Allo;

  constructor({ chain, rpc, address, poolId }: ConstructorArgs) {
    this.client = create(chain, rpc);

    if (!address)
      throw new Error("MicroGrantsStrategy: No strategy address provided");
    this.strategy = address;

    this.allo = new Allo({ chain, rpc }); // to call allocate

    this.contract = getContract({
      address: address,
      abi: abi,
      publicClient: this.client,
    });

    this.poolId = poolId!;
  }

  public setPoolId(poolId: number): void {
    this.poolId = poolId;
  }

  // Read only functions

  public async getNative(): Promise<string> {
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async allocated(
    allocatorAddress: string,
    recipientAddress: string,
  ): Promise<boolean> {
    const allocated = await this.contract.read.allocated(
      allocatorAddress,
      recipientAddress,
    );

    return allocated;
  }

  public async allocationEndTime(): Promise<number> {
    const endTime = await this.contract.read.allocationEndTime();

    return endTime;
  }

  public async allocationStartTime(): Promise<number> {
    const startTime = await this.contract.read.allocationStartTime();

    return startTime;
  }

  public async approvalThreshold(): Promise<string> {
    const threshold = await this.contract.read.approvalThreshold();

    return threshold;
  }

  public async getAllo(): Promise<Allo> {
    return this.allo;
  }

  public async getPayouts(recipientIds: string[]): Promise<PayoutSummary[]> {
    const emptyData = Array(recipientIds.length).fill("0x");

    const payouts = await this.contract.read.getPayouts([
      recipientIds,
      emptyData,
    ]);

    const payoutSummary: PayoutSummary[] = payouts.map((payout: any) => {
      return {
        address: payout.recipientAddress,
        amount: payout.amount,
      };
    });

    return payoutSummary;
  }

  public async getPoolAmount(): Promise<number> {
    const amount = await this.contract.read.getPoolAmount();

    return amount;
  }

  public async getPoolId(): Promise<number> {
    const poolId = await this.contract.read.getPoolId();

    return poolId;
  }

  public async getRecipient(recipientId: string): Promise<Recipient> {
    const recipient = await this.contract.read.getRecipient(recipientId);

    return recipient;
  }

  public async getRecipientStatus(recipientId: string): Promise<Status> {
    const status = await this.contract.read.getRecipientStatus(recipientId);

    return status;
  }

  public async getStrategyId(): Promise<string> {
    const id = await this.contract.read.getStrategyId();

    return id;
  }

  public async isPoolActive(): Promise<boolean> {
    const active = await this.contract.read.isPoolActive();

    return active;
  }

  public async isValidAllocator(allocatorAddress: string): Promise<boolean> {
    const valid = await this.contract.read.isValidAllocator(allocatorAddress);

    return valid;
  }

  public async recipientAllocations(
    recipientId: string,
    status: Status,
  ): Promise<string> {
    const allocations = await this.contract.read.recipientAllocations(
      recipientId,
      status,
    );

    return allocations;
  }

  public async useRegistryAnchor(): Promise<boolean> {
    const useRegistryAnchor = await this.contract.read.useRegistryAnchor();

    return useRegistryAnchor;
  }

  // write: allocate(bytes data, address sender)
  // batchSetAllocator(address[] allocatorAddresses, bool[] flags)
  // increaseMaxRequestedAmount(uint256 amount)
  // registerRecipient
  // setAllocator(address allocatorAddress, bool flag)
  // updatePoolTimestamps(uint64 allocationStartTime, uint64 allocationEndTime)

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
      abi: abi,
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
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, enum"),
      [recipientId, status],
    );

    const encodedData = encodeFunctionData({
      abi: abi,
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
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, address, uint256, Metadata"),
      [
        data.registryAnchor || ZERO_ADDRESS,
        data.recipientAddress,
        data.requestedAmount,
        data.metadata,
      ],
    );

    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "registerRecipient",
      args: [this.poolId, encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }
}
