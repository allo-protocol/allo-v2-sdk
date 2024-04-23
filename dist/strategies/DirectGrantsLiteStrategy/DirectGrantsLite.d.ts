import { Allo } from "../../Allo/Allo";
import { ConstructorArgs, DeployParams, TransactionData } from "../../Common/types";
import { Status } from "../types";
import { Allocation, InitializeData, Recipient, RegisterData } from "./types";
export declare class DirectGrantsLiteStrategy {
    private client;
    private contract;
    private strategy;
    private poolId;
    private allo;
    constructor({ chain, rpc, address, poolId }: ConstructorArgs);
    getAllo(): Promise<Allo>;
    setPoolId(poolId: bigint): Promise<void>;
    setContract(address: `0x${string}`): void;
    private checkPoolId;
    private checkStrategy;
    getNative(): Promise<string>;
    useRegistryAnchor(): Promise<boolean>;
    metadataRequired(): Promise<boolean>;
    registrationStartTime(): Promise<bigint>;
    registrationEndTime(): Promise<bigint>;
    recipientsCounter(): Promise<bigint>;
    statusesBitMap(index: bigint): Promise<bigint>;
    recipientToStatusIndexes(recipient: string): Promise<bigint[]>;
    getPoolAmount(): Promise<bigint>;
    getPoolId(): Promise<bigint>;
    getRecipient(recipientId: string): Promise<Recipient>;
    getRecipientStatus(recipientId: string): Promise<Status>;
    getStrategyId(): Promise<string>;
    isPoolActive(): Promise<boolean>;
    isValidAllocator(allocator: `0x${string}`): Promise<boolean>;
    /**
     * Write functions
     */
    /**
     *
     * @returns DeployParams {abi, bytecode}
     */
    getDeployParams(): DeployParams;
    getInitializeData(data: InitializeData): Promise<`0x${string}`>;
    /**
     *
     * @param data - Allocation: (address,(((address,uint256),uint256,uint256),bytes))
     * @returns `0x${string}`
     */
    getEncodedAllocation(data: Allocation): `0x${string}`;
    /**
     *
     * @param allocation - Allocation[]: [{token: `0x${string}`, recipientId: `0x${string}`, amount: bigint}]
     * @returns TransactionData: {to: `0x${string}`, data: `0x${string}`, value: string}
     */
    getAllocateData(allocations: Allocation[]): TransactionData;
    /**
     *
     * @param data - (address, address, Metadata)
     * @returns
     */
    getRegisterRecipientData(data: RegisterData): TransactionData;
    /**
     * Batch register recipients
     *
     * @param data - Array of RegisterDataDirectGrantsLiteVoting
     *
     * @returns TransactionData
     */
    getBatchRegisterRecipientData(data: RegisterData[]): TransactionData;
    /**
     * Provides a function to batch together multiple calls in a single external call
     *
     * @param data - Array of encoded data
     *
     * @returns - Encoded transaction data
     */
    multicall(data: `0x${string}`[]): TransactionData;
    /**
     * Review recipients
     *
     * @param statuses - Array of status indexes and statusRows
     *
     * @returns TransactionData
     */
    reviewRecipients(statuses: {
        index: bigint;
        statusRow: bigint;
    }[], refRecipientsCounter: bigint): TransactionData;
    updatePoolTimestamps(registrationStartTime: bigint, registrationEndTime: bigint): TransactionData;
    withdraw(address: `0x${string}`): TransactionData;
}
