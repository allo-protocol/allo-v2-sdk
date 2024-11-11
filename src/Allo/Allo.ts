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
import { abi, getAddress } from "./allo.config";
import { CreatePoolArgs, Pool, UpdateMetaDataArgs } from "./types";
import { supportedChains } from "../chains.config";

export class Allo {
  private client: PublicClient<Transport, Chain>;
  private contract: any;
  private addr: `0x${string}`;

  constructor({ chain, rpc }: ConstructorArgs) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.addr = getAddress(usedChain);

    this.client = create(usedChain, rpc);

    this.contract = getContract({
      address: this.addr,
      abi: abi,
      client: {
        public: this.client,
      }
    });
  }

  public address(): `0x${string}` {
    return this.addr;
  }

  // Read-only functions

  public async getFeeDenominator(): Promise<bigint> {
    const denominator = await this.contract.read.getFeeDenominator();

    return denominator;
  }

  public async isPoolAdmin(poolId: bigint, address: string): Promise<boolean> {
    const isAdmin = await this.contract.read.isPoolAdmin([poolId, address]);

    return isAdmin;
  }

  public async isPoolManager(
    poolId: bigint,
    address: string,
  ): Promise<boolean> {
    const isManager = await this.contract.read.isPoolManager([poolId, address]);

    return isManager;
  }

  public async getStrategy(poolId: bigint): Promise<string> {
    const strategyAddress = await this.contract.read.getStrategy([poolId]);

    return strategyAddress;
  }

  public async getPercentFee(): Promise<bigint> {
    const percentage = await this.contract.read.getPercentFee();

    return percentage;
  }

  public async getBaseFee(): Promise<bigint> {
    const baseFee = await this.contract.read.getBaseFee();

    return baseFee;
  }

  public async getTreasury(): Promise<string> {
    const treasuryAddress = await this.contract.read.getTreasury();

    return treasuryAddress;
  }

  public async getRegistry(): Promise<string> {
    const registryAddress = await this.contract.read.getRegistry();

    return registryAddress;
  }

  public async isCloneableStrategy(strategy: `0x${string}`): Promise<boolean> {
    const isCloneable = await this.contract.read.isCloneableStrategy([strategy]);
  
    return isCloneable;
  }

  public async getPool(poolId: bigint): Promise<Pool> {
    const pool = await this.contract.read.getPool([poolId]);

    return pool;
  }

  public async isTrustedForwarder(forwarder: `0x${string}`): Promise<boolean> {
    const isTrusted = await this.contract.read.isTrustedForwarder([forwarder]);
    return isTrusted;
  }

  public async getOwner(): Promise<`0x${string}`> {
    const owner = await this.contract.read.owner();
    return owner;
  }

  public async getAllo(): Promise<`0x${string}`> {
    const alloAddress = await this.contract.read.getAllo();
    return alloAddress;
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
      to: this.addr,
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
      to: this.addr,
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
      args: [poolId, { protocol: metadata.protocol, pointer: metadata.pointer }],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public updateRegistry(registry: `0x${string}`): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateRegistry",
      args: [registry],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public updateTreasury(treasury: `0x${string}`): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateTreasury",
      args: [treasury],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public updatePercentFee(percentage: bigint): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updatePercentFee",
      args: [percentage],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public updateBaseFee(percentage: bigint): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateBaseFee",
      args: [percentage],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public addToCloneableStrategies(strategy: `0x${string}`): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "addToCloneableStrategies",
      args: [strategy],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public removeFromCloneableStrategies(
    strategy: `0x${string}`,
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "removeFromCloneableStrategies",
      args: [strategy],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public addPoolManagers(
    poolId: bigint,
    managers: `0x${string}`[],
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "addPoolManagers",
      args: [poolId, managers],
    });
  
    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public removePoolManagers(
    poolId: bigint,
    managers: `0x${string}`[],
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "removePoolManagers",
      args: [poolId, managers],
    });
  
    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public addPoolManagersInMultiplePools(
    poolIds: bigint[],
    managers: `0x${string}`[],
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "addPoolManagersInMultiplePools",
      args: [poolIds, managers],
    });
  
    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public removePoolManagersInMultiplePools(
    poolIds: bigint[],
    managers: `0x${string}`[],
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "removePoolManagersInMultiplePools",
      args: [poolIds, managers],
    });
  
    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public recoverFunds(
    token: `0x${string}`,
    recipient: `0x${string}`,
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "recoverFunds",
      args: [token, recipient],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  // Strategy functions
  public registerRecipient(
    poolId: bigint,
    recipientAddresses: `0x${string}`[],
    data: `0x${string}`, // question: is this strategyData (old name)? and how is it generated / encoded?
  ): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "registerRecipient",
      args: [poolId, recipientAddresses, data],
    });

    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }

  public batchRegisterRecipient(
    poolIds: bigint[],
    recipientAddresses: `0x${string}` [][], // question: should this be updated to be an array of objects, one per pool?
    data: `0x${string}`[],
  ): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "batchRegisterRecipient",
      args: [poolIds, recipientAddresses, data],
    });

    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }

  public fundPool(poolId: bigint, amount: bigint): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "fundPool",
      args: [poolId, amount],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public allocate(
    poolId: bigint,
    recipients: `0x${string}`[],
    amounts: bigint[],
    data: `0x${string}`, // question: is this strategyData (old name)? and how is it generated / encoded?
  ): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "allocate",
      args: [poolId, recipients, amounts, data],
    });

    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }

  public batchAllocate(
    poolIds: bigint[],
    recipients: `0x${string}`[][], // question: should this be updated to be an array of objects, one per pool?
    amounts: bigint[][],
    values: bigint[],
    datas: `0x${string}`[],
  ): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "batchAllocate",
      args: [poolIds, recipients, amounts, values, datas],
    });

    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }

  public distribute(
    poolId: bigint,
    recipientId: `0x${string}`[],
    strategyData: `0x${string}`,
  ): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "distribute",
      args: [poolId, recipientId, strategyData],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }
}
