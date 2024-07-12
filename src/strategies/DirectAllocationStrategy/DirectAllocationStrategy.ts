import { PublicClient, Transport, Chain, extractChain, getContract, encodeAbiParameters, encodeFunctionData, parseAbiParameters } from "viem";
import { Allo } from "../../Allo/Allo";
import { supportedChains } from "../../chains.config";
import { create } from "../../Client/Client";
import { ConstructorArgs, DeployParams, NATIVE, TransactionData } from "../../types";
import { abi as alloAbi } from "../../Allo/allo.config";
import {
  abi as directAllocationAbi,
  bytecode as directAllocationBytecode,
} from "./directAllocation.config";
import { Allocation } from "./types";
export class DirectAllocationStrategy {
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

    this.allo = new Allo({ chain, rpc });

    if (address) {
      this.contract = getContract({
        address: address,
        abi: directAllocationAbi,
        client: {
          public: this.client,
        }
      });
      this.strategy = address;
    }

    this.poolId = poolId || BigInt(-1);
  }

  public getDeployParams(): DeployParams {
    const constructorArgs: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address,string"),
      [this.allo.address(), "DirectAllocationStrategyv1.0"],
    );
    const constructorArgsNo0x = constructorArgs.slice(2);

    return {
      abi: directAllocationAbi,
      bytecode: (directAllocationBytecode +
        constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  public async setPoolId(poolId: bigint): Promise<void> {
    this.poolId = poolId;
    const strategyAddress = await this.allo.getStrategy(poolId);

    this.setContract(strategyAddress as `0x${string}`);
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi: directAllocationAbi,
      client: {
        public: this.client,
      }
    });

    this.strategy = address;
  }

  private checkPoolId(): void {
    if (this.poolId === BigInt(-1))
      throw new Error(
        "DirectAllocationStrategy: No poolId provided. Please call `setPoolId` first.",
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "DirectAllocationStrategy: No strategy address provided. Please call `setContract` first.",
      );
  }

  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async getAllo(): Promise<Allo> {
    return this.contract.read.getAllo();
  }
  

  public async getPoolId(): Promise<number> {
    this.checkStrategy();

    const poolId = await this.contract.read.getPoolId();

    return poolId;
  }

  public async getStrategyId(): Promise<string> {
    this.checkStrategy();

    const id = await this.contract.read.getStrategyId();

    return id;
  }

  // Write methods
  public getAllocateData(allocation: Allocation): TransactionData {
    this.checkPoolId();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address,uint256,address,uint256"),
      [allocation.profileOwner, allocation.amount, allocation.token, allocation.nonce],
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "allocate",
      args: [this.poolId, encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: allocation.token.toLowerCase() === NATIVE ? allocation.amount.toString() : "0",
    };
  }


  // Note: batchAllocate will not be supported for NATIVE tokens until Allo v2.1
  public getBatchAllocateData(allocations: Allocation[]): TransactionData {
    this.checkPoolId();

    const encodedParams: `0x${string}`[] = [];

    allocations.forEach((allocation) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address,uint256,address,uint256"),
        [allocation.profileOwner, allocation.amount, allocation.token, allocation.nonce],
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
}
