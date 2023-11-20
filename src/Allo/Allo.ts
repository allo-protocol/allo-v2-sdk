import {
  Chain,
  PublicClient,
  Transport,
  encodeFunctionData,
  getContract,
  extractChain,
} from "viem";
import { ConstructorArgs, TransactionData } from "../Common/types";
import { create } from "../Client/Client";
import { abi, address } from "./allo.config";
import { CreatePoolArgs, Pool, UpdateMetaDataArgs } from "./types";
import { supportedChains } from "../chains.config";
import { NATIVE } from "../__tests__/utils/utils";
export class Allo {
  private client: PublicClient<Transport, Chain>;
  private contract: any;

  constructor({ chain, rpc }: ConstructorArgs) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.client = create(usedChain, rpc);

    this.contract = getContract({
      address: address,
      abi: abi,
      publicClient: this.client,
    });
  }

  public address(): `0x${string}` {
    return address;
  }

  // Read only funcitons

  public async getFeeDenominator(): Promise<number> {
    const denominator = await this.contract.read.getFeeDenominator();

    return denominator;
  }

  public async isPoolAdmin(poolId: number, address: string): Promise<boolean> {
    const isAdmin = await this.contract.read.isPoolAdmin([poolId, address]);

    return isAdmin;
  }

  public async isPoolManager(
    poolId: number,
    address: string,
  ): Promise<boolean> {
    const isManager = await this.contract.read.isPoolManager([poolId, address]);

    return isManager;
  }

  public async getStrategy(poolId: number): Promise<string> {
    const strategyAddress = this.contract.read.getStrategy([poolId]);

    return strategyAddress;
  }

  public async getPercentFee(): Promise<number> {
    const percentage = this.contract.read.getPercentFee();

    return percentage;
  }

  public async getBaseFee(): Promise<number> {
    const baseFee = this.contract.read.getBaseFee();

    return baseFee;
  }

  public async getTreasury(): Promise<string> {
    const treasuryAddress = this.contract.read.getTreasury();

    return treasuryAddress;
  }

  public async getRegistry(): Promise<string> {
    const registryAddress = this.contract.read.getRegistry();

    return registryAddress;
  }

  public async isCloneableStrategy(): Promise<boolean> {
    const isCloneable = this.contract.read.isCloneableStrategy();

    return isCloneable;
  }

  public async getPool(poolId: number): Promise<Pool> {
    const pool = this.contract.read.getPool([poolId]);

    return pool;
  }

  // Write functions

  public createPoolWithCustomStrategy({
    profileId,
    strategy,
    initStrategyData,
    token,
    amount,
    metadata,
    managers,
  }: CreatePoolArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "createPoolWithCustomStrategy",
      args: [
        profileId,
        strategy,
        initStrategyData,
        token,
        amount,
        [metadata.protocol, metadata.pointer],
        managers,
      ],
    });

    const value =
      token.toLocaleLowerCase() ===
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLocaleLowerCase()
        ? amount.toString()
        : "0";

    return {
      to: address,
      data: data,
      value: value,
    };
  }

  public createPool({
    profileId,
    strategy,
    initStrategyData,
    token,
    amount,
    metadata,
    managers,
  }: CreatePoolArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "createPool",
      args: [
        profileId,
        strategy,
        initStrategyData,
        token,
        amount,
        metadata,
        managers,
      ],
    });

    const value =
      token.toLocaleLowerCase() ===
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLocaleLowerCase()
        ? amount.toString()
        : "0";

    return {
      to: address,
      data: data,
      value: value,
    };
  }

  // updatePoolMetadata(uint256 _poolId, Metadata memory _metadata)
  public updatePoolMetadata({
    poolId,
    metadata,
  }: UpdateMetaDataArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updatePoolMetadata",
      args: [poolId, metadata],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public updateRegistry(registry: string): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateRegistry",
      args: [registry],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public updateTreasury(registry: string): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateRegistry",
      args: [registry],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public updatePercentFee(percentage: number): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updatePercentFee",
      args: [percentage],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public updateBaseFee(percentage: number): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateBaseFee",
      args: [percentage],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public addToCloneableStrategies(strategy: string): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "addToCloneableStrategies",
      args: [strategy],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public removeFromCloneableStrategies(strategy: string): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "removeFromCloneableStrategies",
      args: [strategy],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public addPoolManager(poolId: number, manager: string): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "addPoolManager",
      args: [poolId, manager],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public removePoolManager(poolId: number, manager: string): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "removePoolManager",
      args: [poolId, manager],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public recoverFunds(token: string, recipient: string): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "recoverFunds",
      args: [token, recipient],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  // Strategy functions
  public registerRecipient(
    poolId: number,
    strategyData: string,
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "registerRecipient",
      args: [poolId, strategyData],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public batchRegisterRecipient(
    poolIds: number[],
    strategyData: string[],
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "batchRegisterRecipient",
      args: [poolIds, strategyData],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public fundPool(poolId: number, amount: number): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "fundPool",
      args: [poolId, amount],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public allocate(poolId: number, strategyData: string): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "allocate",
      args: [poolId, strategyData],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public batchAllocate(
    poolIds: number[],
    strategyData: string[],
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "batchAllocate",
      args: [poolIds, strategyData],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public distribute(
    poolId: number,
    recipientId: string[],
    strategyData: string,
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "distribute",
      args: [poolId, recipientId, strategyData],
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }
}
