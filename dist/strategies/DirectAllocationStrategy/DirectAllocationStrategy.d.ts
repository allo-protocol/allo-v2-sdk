import { Allo } from "../../Allo/Allo";
import { ConstructorArgs, DeployParams, TransactionData } from "../../types";
import { Allocation } from "./types";
export declare class DirectAllocationStrategy {
    private client;
    private contract;
    private strategy;
    private poolId;
    private allo;
    constructor({ chain, rpc, address, poolId }: ConstructorArgs);
    getDeployParams(): DeployParams;
    setPoolId(poolId: bigint): Promise<void>;
    setContract(address: `0x${string}`): void;
    private checkPoolId;
    private checkStrategy;
    getNative(): Promise<string>;
    getAllo(): Promise<Allo>;
    getPoolId(): Promise<number>;
    getStrategyId(): Promise<string>;
    getAllocateData(allocation: Allocation): TransactionData;
    getBatchAllocateData(allocations: Allocation[]): TransactionData;
}
