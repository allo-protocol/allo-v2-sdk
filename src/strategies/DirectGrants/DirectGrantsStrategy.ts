import {
  Chain,
  PublicClient,
  Transport,
  encodeAbiParameters,
  encodeFunctionData,
  extractChain,
  getContract,
  parseAbiParameters,
} from "viem";
import { Allo } from "../../Allo/Allo";
import { abi as alloAbi } from "../../Allo/allo.config";
import { create } from "../../Client/Client";
import { supportedChains } from "../../chains.config";
import {
  ConstructorArgs,
  DeployParams,
  Metadata,
  PayoutSummary,
  Recipient,
  Status,
  TransactionData,
  ZERO_ADDRESS,
} from "../../types";
import {
  abi as directGrantsAbi,
  bytecode as directGrantsBytecode,
} from "./directGrants.config";
import { Allocation, InitializeParams, Milestone, RegisterData } from "./types";

export class DirectGrantsStrategy {
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

    this.allo = new Allo({ chain, rpc });

    if (address) {
      this.contract = getContract({
        address: address,
        abi: directGrantsAbi,
        publicClient: this.client,
      });
      this.strategy = address;
    }

    this.poolId = poolId || -1;
  }

  //  Get the DirectGrants strategy InitializeData
  public getInitializeData(params: InitializeParams): `0x${string}` {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("bool, bool, bool"),
      [
        params.registryGating,
        params.metadataRequired,
        params.grantAmountRequired,
      ]
    );

    return encoded;
  }

  public getDeployParams(): DeployParams {
    const constructorArgs: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, string"),
      [this.allo.address(), "DirectGrantsv1"]
    );
    const constructorArgsNo0x = constructorArgs.slice(2);

    return {
      abi: directGrantsAbi,
      bytecode: (directGrantsBytecode +
        constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  public async setPoolId(poolId: number): Promise<void> {
    this.poolId = poolId;
    const strategyAddress = await this.allo.getStrategy(poolId);

    this.setContract(strategyAddress as `0x${string}`);
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi: directGrantsAbi,
      publicClient: this.client,
    });

    this.strategy = address;
  }

  private checkPoolId(): void {
    if (this.poolId === -1)
      throw new Error(
        "DirectGrantsStrategy: No poolId provided. Please call `setPoolId` first."
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "DirectGrantsStrategy: No strategy address provided. Please call `setContract` first."
      );
  }

  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async getAllocatedGrantAmount(): Promise<number> {
    this.checkStrategy();

    const amount = await this.contract.read.allocatedGrantAmount();

    return amount;
  }

  public async getGrantAmountRequired(): Promise<boolean> {
    this.checkStrategy();

    const required: boolean = await this.contract.read.grantAmountRequired();

    return required;
  }

  public async getMetadataRequired(): Promise<boolean> {
    this.checkStrategy();

    const required: boolean = await this.contract.read.metadataRequired();

    return required;
  }

  public async getAllo(): Promise<Allo> {
    return this.contract.read.getAllo();
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

    const recipient = await this.contract.read.getRecipient([recipientId]);

    return recipient;
  }

  public async getRecipientStatus(recipientId: string): Promise<Status> {
    this.checkStrategy();

    const status = await this.contract.read.getRecipientStatus([recipientId]);

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

    const valid = await this.contract.read.isValidAllocator([allocatorAddress]);

    return valid;
  }

  public async useRegistryAnchor(): Promise<boolean> {
    this.checkStrategy();

    const useRegistryAnchor = await this.contract.read.useRegistryAnchor();

    return useRegistryAnchor;
  }

  public async getMilestoneStatus(
    recipientId: `0x${string}`,
    milestoneId: number
  ): Promise<Status> {
    this.checkStrategy();

    const status = await this.contract.read.getMilestoneStatus([
      recipientId,
      BigInt(milestoneId),
    ]);

    return status;
  }

  public async getMilestones(
    recipientAddress: `0x${string}`
  ): Promise<`0x${string}`> {
    this.checkStrategy();

    const milestones = await this.contract.read.getMilestones([
      recipientAddress,
    ]);

    return milestones;
  }

  public async getUpcomingMilestone(recipientAddress: `0x${string}`) {
    this.checkStrategy();

    const milestone = await this.contract.read.upcomingMilestone([
      recipientAddress,
    ]);

    return milestone;
  }

  public async getPayouts(
    recipientIds: `0x${string}`[]
  ): Promise<PayoutSummary[]> {
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

  // Write methods

  public getIncreaseMaxRequestedAmountData(amount: number): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("uint256"),
      [BigInt(amount)]
    );

    const encodedData = encodeFunctionData({
      abi: directGrantsAbi,
      functionName: "increaseMaxRequestedAmount",
      args: [this.poolId, encoded],
    });

    return {
      to: this.strategy as `0x${string}`,
      data: encodedData,
      value: "0",
    };
  }

  public getSetMilestonesData(
    recipientId: `0x${string}`,
    milestones: Milestone[]
  ): TransactionData {
    this.checkPoolId();
    const encodedMilestones: `0x${string}`[] = [];

    milestones.forEach((milestone: Milestone) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("uint256, (uint256, stringt), uint256"),
        [
          BigInt(milestone.amountPercentage),
          [milestone.metadata.protocol, milestone.metadata.pointer],
          BigInt(milestone.milestoneStatus),
        ]
      );

      encodedMilestones.push(encoded);
    });

    const encodedData = encodeFunctionData({
      abi: directGrantsAbi,
      functionName: "setMilestones",
      args: [recipientId, encodedMilestones],
    });

    return {
      to: this.strategy as `0x${string}`,
      data: encodedData,
      value: "0",
    };
  }

  public getReviewSetMilestonesData(
    recipientId: `0x${string}`,
    status: Status
  ): TransactionData {
    this.checkPoolId();
    const encoded = encodeAbiParameters(
      parseAbiParameters("address, uint256"),
      [recipientId, BigInt(status)]
    );

    return {
      to: this.strategy as `0x${string}`,
      data: encoded,
      value: "0",
    };
  }

  public getSubmitMilestonesData(
    recipientId: `0x${string}`,
    milestoneId: number,
    metadata: Metadata
  ): TransactionData {
    this.checkPoolId();

    const encodedData = encodeFunctionData({
      abi: directGrantsAbi,
      functionName: "submitMilestones",
      args: [recipientId, BigInt(milestoneId), metadata],
    });

    return {
      to: this.strategy as `0x${string}`,
      data: encodedData,
      value: "0",
    };
  }

  public getRejectMilestoneData(
    recipientId: `0x${string}`,
    milestoneId: number
  ): TransactionData {
    this.checkPoolId();

    const encodedData = encodeFunctionData({
      abi: directGrantsAbi,
      functionName: "rejectMilestone",
      args: [recipientId, BigInt(milestoneId)],
    });

    return {
      to: this.strategy as `0x${string}`,
      data: encodedData,
      value: "0",
    };
  }

  public getSetRecipientStatusToInReviewData(
    recipientIds: `0x${string}`[]
  ): TransactionData {
    this.checkPoolId();

    const encodedData = encodeFunctionData({
      abi: directGrantsAbi,
      functionName: "setRecipientStatusToInReview",
      args: [recipientIds],
    });

    return {
      to: this.strategy as `0x${string}`,
      data: encodedData,
      value: "0",
    };
  }

  public getSetPoolActiveData(flag: boolean): TransactionData {
    this.checkPoolId();

    const encodedData = encodeFunctionData({
      abi: directGrantsAbi,
      functionName: "setPoolActive",
      args: [flag],
    });

    return {
      to: this.strategy as `0x${string}`,
      data: encodedData,
      value: "0",
    };
  }

  public getRegisterRecipientData(data: RegisterData): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, address, uint256, (uit256, string)"),
      [
        data.registryAnchor || ZERO_ADDRESS,
        data.recipientAddress,
        data.grantAmount,
        [data.metadata.protocol, data.metadata.pointer],
      ]
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
          registerData.grantAmount,
          [registerData.metadata.protocol, registerData.metadata.pointer],
        ]
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

  public getAllocationData(
    recipientId: `0x${string}`,
    status: Status,
    grantAmount: bigint
  ): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, uint8, uint256"),
      [recipientId, status, grantAmount]
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

  public getBatchAllocationData(allocations: Allocation[]): TransactionData {
    this.checkPoolId();

    const encodedParams: `0x${string}`[] = [];

    allocations.forEach((allocation) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, uint8, uint256"),
        [
          allocation.recipientId,
          allocation.status,
          BigInt(allocation.grantAmount),
        ]
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

  public getDistributeData(recipientIds: `0x${string}`[]): TransactionData {
    this.checkPoolId();

    // note: not sure if we need to do this, we don't use _data here.
    const emptyData = Array(recipientIds.length).fill("0x");

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "distribute",
      args: [this.poolId, recipientIds, emptyData],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }
}
