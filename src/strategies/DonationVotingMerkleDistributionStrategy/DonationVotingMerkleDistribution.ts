import {
  Chain,
  PublicClient,
  Transport,
  encodeFunctionData,
  extractChain,
  getContract,
} from "viem";
import { create } from "../../Client/Client";
import { abi } from "./donationVoting.config";
import { Allo } from "../../Allo/Allo";
import { ConstructorArgs, Metadata, TransactionData } from "../../Common/types";
import { PayoutSummary, Status } from "../types";
import { Recipient } from "./types";
import { supportedChains } from "../../chains.config";

export class DonationVotingMerkleDistributionStrategy {
  private client: PublicClient<Transport, Chain>;
  private contract: any;

  private strategy: `0x${string}`;
  private poolId: number;

  private allo: Allo;

  constructor({ chain, rpc, address }: ConstructorArgs) {
        const usedChain = extractChain({
          chains: supportedChains,
          id: chain as any,
        });

        this.client = create(usedChain, rpc);

        this.client = create(usedChain, rpc);

    if (!address)
      throw new Error(
        "DonationVotingMerkleDistributionStrategy: No strategy address provided"
      );
    this.strategy = address;

    this.allo = new Allo({ chain, rpc }); // to call allocate

    this.contract = getContract({
      address: address,
      abi: abi,
      publicClient: this.client,
    });

    this.poolId = 0; // TODO: set poolId
  }
  // Read only functions
  public async getNative(): Promise<string> {
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async getPermit2(): Promise<string> {
    const permit2 = await this.contract.read.PERMIT2();

    return permit2;
  }

  public async getAllocationEndTime(): Promise<number> {
    const endTime = await this.contract.read.allocationEndTime();

    return endTime;
  }

  public async getAllocationStartTime(): Promise<number> {
    const startTime = await this.contract.read.allocationStartTime();

    return startTime;
  }

  public async isAllowedTokens(token: string): Promise<boolean> {
    const allowed = await this.contract.read.allowedTokens(token);

    return allowed;
  }

  public async getClaims(recipient: string, token: string): Promise<number> {
    const claims = await this.contract.read.claims([recipient, token]);

    return claims;
  }

  public async getDistributionMetadata(): Promise<Metadata> {
    const metadata: Metadata = await this.contract.read.distributionMetadata();

    return metadata;
  }

  public async getDistributionStarted(): Promise<boolean> {
    const started = await this.contract.read.distributionStarted();

    return started;
  }

  public async getAllo(): Promise<string> {
    const allo = await this.contract.read.getAllo();

    return allo;
  }

  public async getPayouts(
    recipientIds: string[],
    data: string[]
  ): Promise<PayoutSummary[]> {
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
    const amount = await this.contract.read.getPoolAmount();

    return amount;
  }

  public async getPoolId(): Promise<number> {
    const id = await this.contract.read.getPoolId();

    return id;
  }

  public async getRecipient(recipientId: string): Promise<Recipient> {
    const recipient = await this.contract.read.getRecipient([recipientId]);

    return recipient;
  }

  public async getRecipientStatus(recipientId: string): Promise<Status> {
    const status = await this.contract.read.getRecipientStatus([recipientId]);

    return status;
  }

  public async getStrategyId(): Promise<string> {
    const id = await this.contract.read.getStrategyId();

    return id;
  }

  public async hasBeenDistributed(index: number): Promise<boolean> {
    const distributed = await this.contract.read.hasBeenDistributed([index]);

    return distributed;
  }

  public async isDistributionSet(): Promise<boolean> {
    const set = await this.contract.read.isDistributionSet();

    return set;
  }

  public async isPoolActive(): Promise<boolean> {
    const active = await this.contract.read.isPoolActive();

    return active;
  }

  public async isValidAllocator(allocator: `0x${string}`): Promise<boolean> {
    const valid = await this.contract.read.isValidAllocator([allocator]);

    return valid;
  }

  public async getMerkleRoot(): Promise<string> {
    const root = await this.contract.read.merkleRoot();

    return root;
  }

  public async metadataRequired(): Promise<boolean> {
    const required = await this.contract.read.metadataRequired();

    return required;
  }

  public async recipientToStatusIndexes(recipient: string): Promise<number[]> {
    const indexes = await this.contract.read.recipientToStatusIndexes([
      recipient,
    ]);

    return indexes;
  }

  public async recipientsCounter(): Promise<number> {
    const counter = await this.contract.read.recipientsCounter();

    return counter;
  }

  public async registrationEndTime(): Promise<number> {
    const endTime = await this.contract.read.registrationEndTime();

    return endTime;
  }

  public async registrationStartTime(): Promise<number> {
    const startTime = await this.contract.read.registrationStartTime();

    return startTime;
  }

  public async statusesBitMap(index: number): Promise<number> {
    const bitMap = await this.contract.read.statusesBitMap([index]);

    return bitMap;
  }

  public async totalPayoutAmount(): Promise<number> {
    const amount = await this.contract.read.totalPayoutAmount();
    return amount;
  }

  public async useRegistryAnchor(): Promise<boolean> {
    const anchor = await this.contract.read.useRegistryAnchor();

    return anchor;
  }

  // Callable by allo client
  public allocate(strategyData: string): TransactionData {
    return this.allo.allocate(this.poolId, strategyData);
  }

  public batchAllocate(strategyData: string[]): TransactionData {
    const poolIds = Array(strategyData.length).fill(this.poolId);

    return this.allo.batchAllocate(poolIds, strategyData);
  }

  public registerRecipient(strategyData: string): TransactionData {
    return this.allo.registerRecipient(this.poolId, strategyData);
  }

  public batchRegisterRecipient(strategyData: string[]): TransactionData {
    const poolIds = Array(strategyData.length).fill(this.poolId);

    return this.allo.batchRegisterRecipient(poolIds, strategyData);
  }

  public fundPool(amount: number): TransactionData {
    return this.allo.fundPool(this.poolId, amount);
  }

  public distribute(recipientIds: string[], data: string): TransactionData {
    return this.allo.distribute(this.poolId, recipientIds, data);
  }

  // Write functions
  public claim(
    claims: { recipientId: string; token: string }[]
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "claim",
      args: [claims],
    });

    return {
      to: this.strategy,
      data: data,
      value: "0",
    };
  }

  public multicall(data: string[]): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "multicall",
      args: [data],
    });

    return {
      to: this.strategy,
      data: encodedData,
      value: "0",
    };
  }

  public reviewRecipients(
    statuses: { index: number; statusRow: number }[]
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "reviewRecipients",
      args: [statuses],
    });

    return {
      to: this.strategy,
      data: data,
      value: "0",
    };
  }

  public updateDistribution(
    merkleRoot: string,
    distributionMetadata: Metadata
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateDistribution",
      args: [merkleRoot, distributionMetadata],
    });

    return {
      to: this.strategy,
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
      abi: abi,
      functionName: "updatePoolTimestamps",
      args: [
        registrationStartTime,
        registrationEndTime,
        allocationStartTime,
        allocationEndTime,
      ],
    });

    return {
      to: this.strategy,
      data: data,
      value: "0",
    };
  }

  public withdraw(amount: number): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "withdraw",
      args: [amount],
    });

    return {
      to: this.strategy,
      data: data,
      value: "0",
    };
  }
}
