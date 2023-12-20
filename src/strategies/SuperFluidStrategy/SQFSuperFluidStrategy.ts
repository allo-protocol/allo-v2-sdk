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
import {
  ConstructorArgs,
  DeployParams,
  Metadata,
  PayoutSummary,
  Recipient,
  Status,
  TransactionData,
} from "../../types";
import { supportedChains } from "../../chains.config";
import { create } from "../../Client/Client";
import {
  abi as superfluidAbi,
  bytecode as superfluidBytecode,
} from "./superfluid.config";
import {
  AllocationSuperlfuid,
  InitializeParamsSuperFluid,
  RegisterDataSuperfluid,
  ReviewRecipientDataSuperfluid,
} from "./types";
import { abi as alloAbi } from "../../Allo/allo.config";

export class SQFSuperFluidStrategy {
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
        abi: superfluidAbi,
        publicClient: this.client,
      });
      this.strategy = address;
    }

    this.poolId = poolId || -1;
  }

  public async setPoolId(poolId: number): Promise<void> {
    this.poolId = poolId;
    const strategyAddress = await this.allo.getStrategy(poolId);
    this.setContract(strategyAddress as `0x${string}`);
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi: superfluidAbi,
      publicClient: this.client,
    });

    this.strategy = address;
  }

  private checkPoolId(): void {
    if (this.poolId === -1)
      throw new Error(
        "SQFSuperfluidStrategy: No poolId provided. Please call `setPoolId` first.",
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "SQFSuperfluidStrategy: No strategy address provided. Please call `setContract` first.",
      );
  }

  // Init and Deploy

  public async getInitializeData(
    params: InitializeParamsSuperFluid,
  ): Promise<`0x${string}`> {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters(
        "bool, bool, address, address, address, uint64, uint64, uint64, uint64, uint256, uint256",
      ),
      [
        params.useRegistryAnchor,
        params.metadataRequired,
        params.passportDecoder,
        params.superfluidHost,
        params.allocationSuperToken,
        params.registrationStartTime,
        params.registrationEndTime,
        params.allocationStartTime,
        params.allocationEndTime,
        params.minPassportScore,
        params.initialSuperAppBalance,
      ],
    );

    return encoded;
  }

  public getDeployParams(): DeployParams {
    const constructorArgs: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, string"),
      [this.allo.address(), "SQFSuperfluidv1"],
    );
    const constructorArgsNo0x = constructorArgs.slice(2);

    // create the proper bytecode
    const bytecode = superfluidBytecode;
    const abi = superfluidAbi;

    return {
      abi: abi,
      bytecode: (bytecode + constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  // Getters

  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async getAllocationEndTime(): Promise<number> {
    this.checkStrategy();

    const endTime = await this.contract.read.allocationEndTime();

    return endTime;
  }

  public async getAllocationStartTime(): Promise<number> {
    this.checkStrategy();

    const startTime = await this.contract.read.allocationStartTime();

    return startTime;
  }

  public async getRegistrationEndTime(): Promise<number> {
    this.checkStrategy();

    const endTime = await this.contract.read.registrationEndTime();

    return endTime;
  }

  public async getRegistrationStartTime(): Promise<number> {
    this.checkStrategy();

    const startTime = await this.contract.read.registrationStartTime();

    return startTime;
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

  public getInitialSuperAppBalance(): Promise<bigint> {
    this.checkStrategy();

    return this.contract.read.initialSuperAppBalance();
  }

  public getSuperfluidHost(): Promise<`0x${string}`> {
    this.checkStrategy();

    return this.contract.read.superfluidHost();
  }

  public getAllocationSuperToken(): Promise<`0x${string}`> {
    this.checkStrategy();

    return this.contract.read.allocationSuperToken();
  }

  public getPoolSuperToken(): Promise<`0x${string}`> {
    this.checkStrategy();

    return this.contract.read.poolSuperToken();
  }

  public getGdaPool(): Promise<`0x${string}`> {
    this.checkStrategy();

    return this.contract.read.gdaPool();
  }

  public getPassportDecoder(): Promise<`0x${string}`> {
    this.checkStrategy();

    return this.contract.read.passportDecoder();
  }

  public getMinPassportScore(): Promise<bigint> {
    this.checkStrategy();

    return this.contract.read.minPassportScore();
  }

  public getMetadataRequired(): Promise<boolean> {
    this.checkStrategy();

    return this.contract.read.metadataRequired();
  }

  public getRegistry(): Promise<`0x${string}`> {
    this.checkStrategy();

    return this.contract.read.registry();
  }

  public getRecipientIdBySuperApp(
    superApp: `0x${string}`,
  ): Promise<`0x${string}`> {
    this.checkStrategy();

    return this.contract.read.superApps([superApp]);
  }

  public getRecipientAllocatorUnits(
    recipientId: `0x${string}`,
    allocator: `0x${string}`,
  ): Promise<bigint> {
    this.checkStrategy();

    return this.contract.read.recipientAllocatorUnits([recipientId, allocator]);
  }

  public getTotalUnitsByRecipient(recipientId: `0x${string}`): Promise<bigint> {
    this.checkStrategy();

    return this.contract.read.totalUnitsByRecipient([recipientId]);
  }

  public getRecipientFlowRate(recipientId: `0x${string}`): Promise<bigint> {
    this.checkStrategy();

    return this.contract.read.recipientFlowRate([recipientId]);
  }

  public getSuperApp(recipientId: `0x${string}`): Promise<`0x${string}`> {
    this.checkStrategy();

    return this.contract.read.getSuperApp([recipientId]);
  }

  // Write functions

  public getUpdatePoolTimestampsData(
    registrationStartTime: bigint,
    registrationEndTime: bigint,
    allocationStartTime: bigint,
    allocationEndTime: bigint,
  ): TransactionData {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("uint64, uint64, uint64, uint64"),
      [
        registrationStartTime,
        registrationEndTime,
        allocationStartTime,
        allocationEndTime,
      ],
    );

    const encodedData = encodeFunctionData({
      abi: superfluidAbi,
      functionName: "updatePoolTimestamps",
      args: [encoded],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getUpdateMinPassportScoreData(
    minPassportScore: bigint,
  ): TransactionData {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("uint256"),
      [minPassportScore],
    );

    const encodedData = encodeFunctionData({
      abi: superfluidAbi,
      functionName: "updateMinPassportScore",
      args: [encoded],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getRegisterRecipientData(data: {
    registryAnchor: `0x${string}`;
    recipientAddress: `0x${string}`;
    metadata: Metadata;
  }): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, address, (uint256, string)"),
      [
        data.registryAnchor,
        data.recipientAddress,
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

  public getBatchRegisterRecipientData(
    data: RegisterDataSuperfluid[],
  ): TransactionData {
    this.checkPoolId();
    const encodedParams: `0x${string}`[] = [];

    data.forEach((registerData) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, address, (uint256, string)"),
        [
          registerData.registryAnchor,
          registerData.recipientAddress,
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

  public getDistributeData(flowRate: bigint): TransactionData {
    this.checkPoolId();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("int96"),
      [flowRate],
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "distribute",
      args: [this.poolId, [], encoded],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getAllocationData(
    recipientId: `0x${string}`,
    flowRate: bigint,
  ): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, int96"),
      [recipientId, flowRate],
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

  public getBatchAllocationData(
    allocations: AllocationSuperlfuid[],
  ): TransactionData {
    this.checkPoolId();

    const encodedParams: `0x${string}`[] = [];

    allocations.forEach((allocation) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, int96"),
        [allocation.recipientId, allocation.flowRate],
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

  public getReviewRecipientData(
    data: ReviewRecipientDataSuperfluid[],
  ): TransactionData {
    this.checkStrategy();

    const recipientIds = data.map((recipient) => recipient.recipientId);
    const statuses = data.map((recipient) => recipient.recipientStatus);

    const encodedData = encodeFunctionData({
      abi: superfluidAbi,
      functionName: "reviewRecipient",
      args: [recipientIds, statuses],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getCancelRecipientsData(
    recipientIds: `0x${string}`[],
  ): TransactionData {
    this.checkStrategy();

    const encodedData = encodeFunctionData({
      abi: superfluidAbi,
      functionName: "cancelRecipients",
      args: [recipientIds],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getWithdrawData(
    token: `0x${string}`,
    amount: bigint,
  ): TransactionData {
    this.checkStrategy();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, uint256"),
      [token, amount],
    );

    const encodedData = encodeFunctionData({
      abi: superfluidAbi,
      functionName: "withdraw",
      args: [encoded],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getCloseStream(): TransactionData {
    this.checkStrategy();

    const encodedData = encodeFunctionData({
      abi: superfluidAbi,
      functionName: "closeStream",
      args: [],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }
}
