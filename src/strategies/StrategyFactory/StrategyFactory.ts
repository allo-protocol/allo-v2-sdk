import {
  Chain,
  PublicClient,
  Transport,
  encodeFunctionData,
  extractChain,
  getContract,
} from "viem";
import { supportedChains } from "../../chains.config";
import { create } from "../../Client/Client";
import {
  abi as DGLabi,
  getAddress as getAddressDGL,
} from "./strategyFactory.DGL.config";
import {
  abi as DVMDTabi,
  getAddress as getAddressDVMDT,
} from "./strategyFactory.DVMDT.config";
import { TransactionData } from "../../types";

export type StrategyFactoryType = "DGL" | "DVMDT";

export class StrategyFactory {
  private client: PublicClient<Transport, Chain>;

  private contract: any;
  private chainId: number;

  private factory: `0x${string}` | undefined;
  private factoryType: StrategyFactoryType;

  constructor({
    chain,
    factoryType,
    address,
    rpc,
  }: {
    chain: number;
    factoryType: StrategyFactoryType;
    address?: `0x${string}`;
    rpc?: string;
  }) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.factoryType = factoryType;
    this.client = create(usedChain, rpc);
    this.chainId = chain;

    if (address) this.setFactoryAddress(address);
  }

  private getAbi(): any {
    switch (this.factoryType) {
      case "DGL":
        return DGLabi;
      case "DVMDT":
        return DVMDTabi;
      default:
        throw new Error("Invalid factory type");
    }
  }

  private getAddress(chainId: number): `0x${string}` {
    switch (this.factoryType) {
      case "DGL":
        return getAddressDGL(chainId);
      case "DVMDT":
        return getAddressDVMDT(chainId);
      default:
        throw new Error("Invalid factory type");
    }
  }

  public setFactoryAddress(address: `0x${string}`): void {
    if (address) {
      this.contract = getContract({
        address: address,
        abi: this.getAbi(),
        client: {
          public: this.client,
        },
      });
      this.factory = address;
    }
  }

  public getCreateStrategyData(): TransactionData {
    const encodedData = encodeFunctionData({
      abi: this.getAbi(),
      functionName: "createStrategy",
      args: [],
    });

    return {
      to: this.factory || this.getAddress(this.chainId),
      data: encodedData,
      value: "0",
    };
  }

  public getCreateStrategyDataByChainId(chainId: number): TransactionData {
    const encodedData = encodeFunctionData({
      abi: this.getAbi(),
      functionName: "createStrategy",
      args: [],
    });

    return {
      to: this.getAddress(chainId),
      data: encodedData,
      value: "0",
    };
  }

  // tbc
}
