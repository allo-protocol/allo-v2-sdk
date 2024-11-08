import { ConstructorArgs, TransactionData } from "../Common/types";
import { CreatePoolArgs, Pool, UpdateMetaDataArgs } from "./types";
export declare class Allo {
    private client;
    private contract;
    private addr;
    constructor({ chain, rpc }: ConstructorArgs);
    address(): `0x${string}`;
    getFeeDenominator(): Promise<bigint>;
    isPoolAdmin(poolId: bigint, address: string): Promise<boolean>;
    isPoolManager(poolId: bigint, address: string): Promise<boolean>;
    getStrategy(poolId: bigint): Promise<string>;
    getPercentFee(): Promise<bigint>;
    getBaseFee(): Promise<bigint>;
    getTreasury(): Promise<string>;
    getRegistry(): Promise<string>;
    isCloneableStrategy(strategy: `0x${string}`): Promise<boolean>;
    getPool(poolId: bigint): Promise<Pool>;
    isTrustedForwarder(forwarder: `0x${string}`): Promise<boolean>;
    getOwner(): Promise<`0x${string}`>;
    getAllo(): Promise<`0x${string}`>;
    createPoolWithCustomStrategy({ profileId, strategy, initStrategyData, token, amount, metadata, managers, }: CreatePoolArgs): TransactionData;
    createPool({ profileId, strategy, initStrategyData, token, amount, metadata, managers, }: CreatePoolArgs): TransactionData;
    updatePoolMetadata({ poolId, metadata, }: UpdateMetaDataArgs): TransactionData;
    updateRegistry(registry: `0x${string}`): TransactionData;
    updateTreasury(treasury: `0x${string}`): TransactionData;
    updatePercentFee(percentage: bigint): TransactionData;
    updateBaseFee(percentage: bigint): TransactionData;
    addToCloneableStrategies(strategy: `0x${string}`): TransactionData;
    removeFromCloneableStrategies(strategy: `0x${string}`): TransactionData;
    addPoolManagers(poolId: bigint, managers: `0x${string}`[]): TransactionData;
    removePoolManagers(poolId: bigint, managers: `0x${string}`[]): TransactionData;
    addPoolManagersInMultiplePools(poolIds: bigint[], managers: `0x${string}`[]): TransactionData;
    removePoolManagersInMultiplePools(poolIds: bigint[], managers: `0x${string}`[]): TransactionData;
    recoverFunds(token: `0x${string}`, recipient: `0x${string}`): TransactionData;
    registerRecipient(poolId: bigint, recipientAddresses: `0x${string}`[], data: `0x${string}`): TransactionData;
    batchRegisterRecipient(poolIds: bigint[], recipientAddresses: `0x${string}`[][], // question: should this be updated to be an array of objects, one per pool?
    data: `0x${string}`[]): TransactionData;
    fundPool(poolId: bigint, amount: bigint): TransactionData;
    allocate(poolId: bigint, recipients: `0x${string}`[], amounts: bigint[], data: `0x${string}`): TransactionData;
    batchAllocate(poolIds: bigint[], recipients: `0x${string}`[][], // question: should this be updated to be an array of objects, one per pool?
    amounts: bigint[][], values: bigint[], datas: `0x${string}`[]): TransactionData;
    distribute(poolId: bigint, recipientId: `0x${string}`[], strategyData: `0x${string}`): TransactionData;
}
