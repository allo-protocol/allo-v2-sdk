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
  Metadata,
  TransactionData,
  ZERO_ADDRESS,
} from "../../Common/types";
import { supportedChains } from "../../chains.config";
import { RegisterDataDonationVoting } from "../MicroGrantsStrategy/types";
import { PayoutSummary, Status } from "../types";
import { abi as strategyAbi } from "./donationVoting.config";
import { Claim, Distribution, Recipient } from "./types";

export class DonationVotingMerkleDistributionStrategy {
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

    this.allo = new Allo({ chain, rpc }); // to call allocate

    if (address) {
      this.contract = getContract({
        address: address,
        abi: strategyAbi,
        publicClient: this.client,
      });
      this.strategy = address;
    }

    this.poolId = poolId || -1;
  }

  /**
   * Utility functions
   */
  public async getAllo(): Promise<Allo> {
    return this.allo;
  }

  public async setPoolId(poolId: number): Promise<void> {
    this.poolId = poolId;

    const strategyAddress = await this.allo.getStrategy(poolId);

    this.setContract(strategyAddress as `0x${string}`);
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi: abi,
      publicClient: this.client,
    });

    this.strategy = address;
  }

  /**
   * Validation functions
   */
  private checkPoolId(): void {
    if (this.poolId === -1)
      throw new Error(
        "MicroGrantsStrategy: No poolId provided. Please call `setPoolId` first."
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "MicroGrantsStrategy: No strategy address provided. Please call `setContract` first."
      );
  }

  /**
   * Read only functions
   */
  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async getPermit2(): Promise<string> {
    this.checkStrategy();
    const permit2 = await this.contract.read.PERMIT2();

    return permit2;
  }

  public async getRegistrationStartTime(): Promise<number> {
    this.checkStrategy();
    const startTime = await this.contract.read.registrationStartTime();

    return startTime;
  }

  public async getRegistrationEndTime(): Promise<number> {
    this.checkStrategy();
    const startTime = await this.contract.read.registrationStartTime();

    return startTime;
  }

  public async getAllocationStartTime(): Promise<number> {
    this.checkStrategy();
    const startTime = await this.contract.read.allocationStartTime();

    return startTime;
  }

  public async getAllocationEndTime(): Promise<number> {
    this.checkStrategy();
    const endTime = await this.contract.read.allocationEndTime();

    return endTime;
  }

  public async isAllowedTokens(token: string): Promise<boolean> {
    this.checkStrategy();
    const allowed = await this.contract.read.allowedTokens(token);

    return allowed;
  }

  public async getClaims(recipient: string, token: string): Promise<number> {
    const claims = await this.contract.read.claims([recipient, token]);

    return claims;
  }

  public async getTotalClaimableAmount(recipient: string): Promise<number> {
    const claims = await this.contract.read.totalClaimableAmount([recipient]);

    return claims;
  }

  public async getDistributionMetadata(): Promise<Metadata> {
    this.checkStrategy();
    const metadata: Metadata = await this.contract.read.distributionMetadata();

    return metadata;
  }

  public async getDistributionStarted(): Promise<boolean> {
    this.checkStrategy();
    const started = await this.contract.read.distributionStarted();

    return started;
  }

  public async getPayouts(
    recipientIds: string[],
    data: string[]
  ): Promise<PayoutSummary[]> {
    this.checkStrategy();
    const payouts = await this.contract.read.getPayouts([recipientIds, data]);

    const payoutSummary: PayoutSummary[] = payouts.map((payout: any) => {
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

  public async hasBeenDistributed(index: number): Promise<boolean> {
    this.checkStrategy();
    const distributed = await this.contract.read.hasBeenDistributed([index]);

    return distributed;
  }

  public async isDistributionSet(): Promise<boolean> {
    this.checkStrategy();
    const set = await this.contract.read.isDistributionSet();

    return set;
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

  public async getMerkleRoot(): Promise<string> {
    this.checkStrategy();
    const root = await this.contract.read.merkleRoot();

    return root;
  }

  public async metadataRequired(): Promise<boolean> {
    this.checkStrategy();
    const required = await this.contract.read.metadataRequired();

    return required;
  }

  public async recipientToStatusIndexes(recipient: string): Promise<number[]> {
    this.checkStrategy();
    const indexes = await this.contract.read.recipientToStatusIndexes([
      recipient,
    ]);

    return indexes;
  }

  public async recipientsCounter(): Promise<number> {
    this.checkStrategy();
    const counter = await this.contract.read.recipientsCounter();

    return counter;
  }

  public async registrationEndTime(): Promise<number> {
    this.checkStrategy();
    const endTime = await this.contract.read.registrationEndTime();

    return endTime;
  }

  public async registrationStartTime(): Promise<number> {
    this.checkStrategy();
    const startTime = await this.contract.read.registrationStartTime();

    return startTime;
  }

  public async statusesBitMap(index: number): Promise<number> {
    this.checkStrategy();
    const bitMap = await this.contract.read.statusesBitMap([index]);

    return bitMap;
  }

  public async totalPayoutAmount(): Promise<number> {
    this.checkStrategy();
    const amount = await this.contract.read.totalPayoutAmount();
    return amount;
  }

  public async useRegistryAnchor(): Promise<boolean> {
    this.checkStrategy();
    const anchor = await this.contract.read.useRegistryAnchor();

    return anchor;
  }

  /**
   * Write functions
   */

  // Callable by allo client
  public allocate(strategyData: string): TransactionData {
    return this.allo.allocate(this.poolId, strategyData);
  }

  public batchAllocate(strategyData: string[]): TransactionData {
    const poolIds = Array(strategyData.length).fill(this.poolId);

    return this.allo.batchAllocate(poolIds, strategyData);
  }

  /**
   *
   * @param strategyData - (address, address, Metadata)
   * @returns
   */
  public getRegisterRecipientData(
    data: RegisterDataDonationVoting
  ): TransactionData {
    this.checkPoolId();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address,address,(uint256,string)"),
      [
        data.registryAnchor || ZERO_ADDRESS,
        data.recipientAddress,
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
    }
  }

  /**
   * Batch register recipients
   *
   * @param data - Array of RegisterDataDonationVoting
   *
   * @returns TransactionData
   */
  public getBatchRegisterRecipientData(
    data: RegisterDataDonationVoting[]
  ): TransactionData {
    this.checkPoolId();
    const encodedParams: `0x${string}`[] = [];

    data.forEach((registerData) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, address, (uit256, string)"),
        [
          registerData.registryAnchor || ZERO_ADDRESS,
          registerData.recipientAddress,
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

  /**
   * Fund the pool
   *
   * @param amount - Amount to fund the pool
   *
   * @returns TransactionData
   */
  public fundPool(amount: bigint): TransactionData {
    this.checkPoolId();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("uint256,uint256"),
      [BigInt(this.poolId), amount]
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "fundPool",
      args: [encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  /**
   * Distribute to the recipients
   *
   * @param recipientIds - Array of recipientIds
   * @param data - Array of Distribution
   *
   * @returns TransactionData
   */
  public distribute(
    recipientIds: `0x${string}`[],
    // (uint256 _poolId, address[] memory _recipientIds, bytes memory _data)
    data: Distribution[]
  ): TransactionData {
    this.checkPoolId();

    const encodeDistribution = encodeAbiParameters(
      parseAbiParameters("Distribution[]"),
      [data]
    );
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("uint256, address[], bytes"),
      [BigInt(this.poolId), recipientIds, encodeDistribution]
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "distribute",
      args: [encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  /**
   * Get the claim function encoded data
   *
   * @param claims - Array of claims
   *
   * @returns - Encoded transaction data
   */
  public getClaimData(claims: Claim[]): TransactionData {
    this.checkPoolId();

    const encoded: `0x${string}`[] = [];
    claims.forEach((claim: Claim) => {
      const encodedClaimParams = encodeAbiParameters(
        parseAbiParameters("address, address"),
        [claim.recipientId, claim.token]
      );

      encoded.push(encodedClaimParams);
    });

    const encodedData = encodeFunctionData({
      abi: strategyAbi,
      functionName: "claim",
      args: [encoded],
    });

    return {
      to: this.strategy!,
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
      abi: strategyAbi,
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
    statuses: { index: number; statusRow: number }[]
  ): TransactionData {
    const data = encodeFunctionData({
      abi: strategyAbi,
      functionName: "reviewRecipients",
      args: [statuses],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }

  public updateDistribution(
    merkleRoot: string,
    distributionMetadata: Metadata
  ): TransactionData {
    const data = encodeFunctionData({
      abi: strategyAbi,
      functionName: "updateDistribution",
      args: [merkleRoot, distributionMetadata],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }

  public updatePoolTimestamps(
    registrationStartTime: number,
    registrationEndTime: number,
    allocationStartTime: number,
    allocationEndTime: number
  ): TransactionData {
    const data = encodeFunctionData({
      abi: strategyAbi,
      functionName: "updatePoolTimestamps",
      args: [
        registrationStartTime,
        registrationEndTime,
        allocationStartTime,
        allocationEndTime,
      ],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }

  public withdraw(amount: number): TransactionData {
    const data = encodeFunctionData({
      abi: strategyAbi,
      functionName: "withdraw",
      args: [amount],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }
}
