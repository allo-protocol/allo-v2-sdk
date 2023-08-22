import { Chain, PublicClient, Transport, encodeFunctionData, getContract } from "viem";
import { ConstructorArgs, TransactionData } from "../Common/types";
import { create } from "../Client/Client";
import { abi, address } from "./allo.config";
import { CreatePoolArgs, Pool, UpdateMetaDataArgs } from "./types";

export class Allo {
  private client: PublicClient<Transport, Chain>;
  private contract: any;

  constructor({ chain, rpc }: ConstructorArgs) {
    this.client = create(chain, rpc);

    this.contract = getContract({
      address: address,
      abi: abi,
      publicClient: this.client,
    });
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

  public async isPoolManager(poolId: number, address: string): Promise<boolean> {
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
    managers
  }: CreatePoolArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "createPoolWithCustomStrategy",
      args: [profileId, strategy, initStrategyData, token, amount, metadata, managers],
      
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  public createPool({
    profileId,
    strategy,
    initStrategyData,
    token,
    amount,
    metadata,
    managers
  }: CreatePoolArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      // fixme: not sure why this is not working
      functionName: "createPool",
      args: [profileId, strategy, initStrategyData, token, amount, metadata, managers],
      
    });

    return {
      to: address,
      data: data,
      value: "0",
    };
  }

  // updatePoolMetadata(uint256 _poolId, Metadata memory _metadata)
  public updatePoolMetadata({ poolId, metadata }: UpdateMetaDataArgs): TransactionData {
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
}