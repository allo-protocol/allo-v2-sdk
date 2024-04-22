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
import {
  ConstructorArgs,
  DeployParams,
  TransactionData,
  ZERO_ADDRESS,
} from "../../Common/types";
import { supportedChains } from "../../chains.config";
import { NATIVE } from "../../types";
import { Status } from "../types";
import { abi, bytecode as bytecode } from "./directGrantsLite.config";
import { Allocation, InitializeData, Recipient, RegisterData } from "./types";

export class DirectGrantsLiteStrategy {
  private client: PublicClient<Transport, Chain>;

  private contract: any;

  private strategy: `0x${string}` | undefined;

  private poolId: bigint;

  private allo: Allo;

  constructor({ chain, rpc, address, poolId }: ConstructorArgs) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.client = create(usedChain, rpc);

    this.allo = new Allo({ chain, rpc }); // to call allocate

    if (address) {
      this.contract = getContract({
        address: address,
        abi,
        publicClient: this.client,
      });
      this.strategy = address;
    }

    this.poolId = poolId || BigInt(-1);
  }

  public async getAllo(): Promise<Allo> {
    return this.allo;
  }

  public async setPoolId(poolId: bigint): Promise<void> {
    this.poolId = poolId;
    const strategyAddress = await this.allo.getStrategy(poolId);
    this.setContract(strategyAddress as `0x${string}`);
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi,
      publicClient: this.client,
    });

    this.strategy = address;
  }

  // Validation functions
  private checkPoolId(): void {
    if (this.poolId === BigInt(-1))
      throw new Error(
        "DirectGrantsLiteStrategy: No poolId provided. Please call `setPoolId` first.",
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "DirectGrantsLiteStrategy: No strategy address provided. Please call `setContract` first.",
      );
  }

  /* Read Functions */
  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();

    return native;
  }

  /* Public Storage Variables */

  public async useRegistryAnchor(): Promise<boolean> {
    this.checkStrategy();
    const anchor = await this.contract.read.useRegistryAnchor();

    return anchor;
  }

  public async metadataRequired(): Promise<boolean> {
    this.checkStrategy();
    const required = await this.contract.read.metadataRequired();

    return required;
  }

  public async registrationStartTime(): Promise<bigint> {
    this.checkStrategy();
    const startTime = await this.contract.read.registrationStartTime();

    return startTime;
  }

  public async registrationEndTime(): Promise<bigint> {
    this.checkStrategy();
    const endTime = await this.contract.read.registrationEndTime();

    return endTime;
  }

  public async recipientsCounter(): Promise<bigint> {
    this.checkStrategy();
    const counter = await this.contract.read.recipientsCounter();

    return counter;
  }

  public async statusesBitMap(index: bigint): Promise<bigint> {
    this.checkStrategy();
    const bitMap = await this.contract.read.statusesBitMap([index]);

    return bitMap;
  }

  public async recipientToStatusIndexes(recipient: string): Promise<bigint[]> {
    this.checkStrategy();
    const indexes = await this.contract.read.recipientToStatusIndexes([
      recipient,
    ]);

    return indexes;
  }

  public async getPoolAmount(): Promise<bigint> {
    this.checkStrategy();
    const amount = await this.contract.read.getPoolAmount();

    return amount;
  }

  public async getPoolId(): Promise<bigint> {
    this.checkStrategy();
    const id = await this.contract.read.getPoolId();

    return id;
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

  public async isValidAllocator(allocator: `0x${string}`): Promise<boolean> {
    this.checkStrategy();
    const valid = await this.contract.read.isValidAllocator([allocator]);

    return valid;
  }

  /**
   * Write functions
   */

  /**
   *
   * @returns DeployParams {abi, bytecode}
   */
  public getDeployParams(): DeployParams {
    const version = "DirectGrantsLiteStrategy1.0";

    const constructorArgs: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, string"),
      [this.allo.address(), version],
    );
    const constructorArgsNo0x = constructorArgs.slice(2);

    return {
      abi,
      bytecode: (bytecode + constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  public async getInitializeData(data: InitializeData): Promise<`0x${string}`> {
    const encodedData: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("(bool, bool, uint64, uint64)"),
      [
        [
          data.useRegistryAnchor,
          data.metadataRequired,
          data.registrationStartTime,
          data.registrationEndTime,
        ],
      ],
    );

    return encodedData;
  }

  /**
   *
   * @param data - Allocation: (address,(((address,uint256),uint256,uint256),bytes))
   * @returns `0x${string}`
   */
  public getEncodedAllocation(data: Allocation): `0x${string}` {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address,address,uint256"),
      [data.token, data.recipientId, data.amount],
    );

    return encoded;
  }

  /**
   *
   * @param allocation - Allocation[]: [{token: `0x${string}`, recipientId: `0x${string}`, amount: bigint}]
   * @returns TransactionData: {to: `0x${string}`, data: `0x${string}`, value: string}
   */
  public getAllocateData(allocations: Allocation[]): TransactionData {
    this.checkPoolId();

    const encodedAllocations = encodeAbiParameters(
      parseAbiParameters("Allocation[]"),
      [allocations],
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "allocate",
      args: [this.poolId, encodedAllocations],
    });

    let totalNativeAmount = BigInt(0);
    allocations.forEach((allocation) => {
      if (allocation.token.toLowerCase() === NATIVE)
        totalNativeAmount += allocation.amount;
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: totalNativeAmount.toString(),
    };
  }

  /**
   *
   * @param data - (address, address, Metadata)
   * @returns
   */
  public getRegisterRecipientData(data: RegisterData): TransactionData {
    this.checkPoolId();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, address, (uint256, string)"),
      [
        data.registryAnchor || ZERO_ADDRESS,
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

  /**
   * Batch register recipients
   *
   * @param data - Array of RegisterDataDirectGrantsLiteVoting
   *
   * @returns TransactionData
   */
  public getBatchRegisterRecipientData(data: RegisterData[]): TransactionData {
    this.checkPoolId();
    const encodedParams: `0x${string}`[] = [];

    data.forEach((registerData) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, address, (uint256, string)"),
        [
          registerData.registryAnchor || ZERO_ADDRESS,
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

  /**
   * Provides a function to batch together multiple calls in a single external call
   *
   * @param data - Array of encoded data
   *
   * @returns - Encoded transaction data
   */
  public multicall(data: `0x${string}`[]): TransactionData {
    this.checkPoolId();

    const encodedData = encodeFunctionData({
      abi,
      functionName: "multicall",
      args: [data],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  /**
   * Review recipients
   *
   * @param statuses - Array of status indexes and statusRows
   *
   * @returns TransactionData
   */
  public reviewRecipients(
    statuses: { index: bigint; statusRow: bigint }[],
    refRecipientsCounter: bigint,
  ): TransactionData {
    const data = encodeFunctionData({
      abi,
      functionName: "reviewRecipients",
      args: [statuses, refRecipientsCounter],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }

  public updatePoolTimestamps(
    registrationStartTime: bigint,
    registrationEndTime: bigint,
  ): TransactionData {
    const data = encodeFunctionData({
      abi,
      functionName: "updatePoolTimestamps",
      args: [registrationStartTime, registrationEndTime],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }

  public withdraw(address: `0x${string}`): TransactionData {
    const data = encodeFunctionData({
      abi,
      functionName: "withdraw",
      args: [address],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }
}
