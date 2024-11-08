import { ConstructorArgs, TransactionData } from "../Common/types";
export declare class BaseStrategy {
    private client;
    protected contract: any;
    private addr;
    constructor({ chain, rpc }: ConstructorArgs);
    address(): `0x${string}`;
    getAllo(): Promise<`0x${string}`>;
    getStrategyId(): Promise<`0x${string}`>;
    getPoolId(): Promise<number>;
    getPoolAmount(): Promise<bigint>;
    initialize(poolId: bigint, data: `0x${string}`): TransactionData;
    increasePoolAmount(amount: bigint): TransactionData;
    withdraw(token: `0x${string}`, amount: bigint, recipient: `0x${string}`): TransactionData;
    register(recipients: `0x${string}`[], data: `0x${string}`, sender: `0x${string}`): TransactionData;
    allocate(recipients: `0x${string}`[], amounts: bigint[], data: `0x${string}`, sender: `0x${string}`): TransactionData;
    distribute(recipientIds: `0x${string}`[], data: `0x${string}`, sender: `0x${string}`): TransactionData;
    receive(): TransactionData;
}
