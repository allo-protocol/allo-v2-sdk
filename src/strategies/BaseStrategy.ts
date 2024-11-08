// BaseStrategy.ts
import {
  Chain,
  PublicClient,
  Transport,
  encodeFunctionData,
  extractChain,
  getContract,
} from "viem";
import { create } from "../Client/Client";
import { ConstructorArgs, TransactionData } from "../Common/types";
import { abi, getAddress } from "./baseStrategy.config";
import { supportedChains } from "../chains.config";
  
export class BaseStrategy {
  private client: PublicClient<Transport, Chain>;
  protected contract: any;
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
      },
    });
  }
  
  public address(): `0x${string}` {
    return this.addr;
  }

  // Read-only functions
  
  public async getAllo(): Promise<`0x${string}`> {
    const allo = await this.contract.read.getAllo();
    return allo;
  }
  
  public async getStrategyId(): Promise<`0x${string}`> {
    const strategyId = await this.contract.read.getStrategyId();
    return strategyId;
  }
  
  public async getPoolId(): Promise<number> {
    const poolId = await this.contract.read.getPoolId();
    return poolId;
  }
  
  public async getPoolAmount(): Promise<bigint> {
    const poolAmount = await this.contract.read.getPoolAmount();
    return poolAmount;
  }
  
  // Write functions
  
  public initialize(poolId: bigint, data: `0x${string}`): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "initialize",
      args: [poolId, data],
    });
  
    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }
  
  public increasePoolAmount(amount: bigint): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "increasePoolAmount",
      args: [amount],
    });
  
    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }
  
  public withdraw(
    token: `0x${string}`,
    amount: bigint,
    recipient: `0x${string}`
  ): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "withdraw",
      args: [token, amount, recipient],
    });
  
    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }
  
  public register(
    recipients: `0x${string}`[],
    data: `0x${string}`,
    sender: `0x${string}`
  ): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "register",
      args: [recipients, data, sender],
    });
  
    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }
  
  public allocate(
    recipients: `0x${string}`[],
    amounts: bigint[],
    data: `0x${string}`,
    sender: `0x${string}`
  ): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "allocate",
      args: [recipients, amounts, data, sender],
    });
  
    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }
  
  public distribute(
    recipientIds: `0x${string}`[],
    data: `0x${string}`,
    sender: `0x${string}`
  ): TransactionData {
    const encodedData = encodeFunctionData({
      abi: abi,
      functionName: "distribute",
      args: [recipientIds, data, sender],
    });
  
    return {
      to: this.addr,
      data: encodedData,
      value: "0",
    };
  }
  
  // Receive function to handle native token transfers
  public receive(): TransactionData {
    return {
      to: this.addr,
      data: "0x",
      value: "0",
    };
  }
}
