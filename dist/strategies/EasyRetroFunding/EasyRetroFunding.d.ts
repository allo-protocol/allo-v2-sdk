import { Allo } from "../../Allo/Allo";
import { ConstructorArgs, DeployParams, Metadata, TransactionData } from "../../Common/types";
import { PayoutSummary, Status } from "../types";
import { Distribution, InitializeData, Recipient, RegisterData } from "./types";
export declare class EasyRetroFundingStrategy {
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
    getDistributionMetadata(): Promise<Metadata>;
    useRegistryAnchor(): Promise<boolean>;
    metadataRequired(): Promise<boolean>;
    distributionStarted(): Promise<boolean>;
    registrationStartTime(): Promise<bigint>;
    registrationEndTime(): Promise<bigint>;
    poolStartTime(): Promise<bigint>;
    poolEndTime(): Promise<bigint>;
    totalPayoutAmount(): Promise<bigint>;
    recipientsCounter(): Promise<bigint>;
    statusesBitMap(index: bigint): Promise<bigint>;
    recipientToStatusIndexes(recipient: string): Promise<bigint[]>;
    isTokenAllowed(token: string): Promise<boolean>;
    getClaims(recipient: string, token: string): Promise<bigint>;
    getTotalClaimableAmount(recipient: string): Promise<bigint>;
    getPayouts(recipientIds: string[], data: string[]): Promise<PayoutSummary[]>;
    getPoolAmount(): Promise<bigint>;
    getPoolId(): Promise<bigint>;
    getRecipient(recipientId: string): Promise<Recipient>;
    getRecipientStatus(recipientId: string): Promise<Status>;
    getStrategyId(): Promise<string>;
    hasBeenDistributed(index: bigint): Promise<boolean>;
    isDistributionSet(): Promise<boolean>;
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
     * @param data - (address, address, Metadata)
     * @returns
     */
    getRegisterRecipientData(data: RegisterData): TransactionData;
    /**
     * Batch register recipients
     *
     * @param data - Array of RegisterDataEasyRetroFunding
     *
     * @returns TransactionData
     */
    getBatchRegisterRecipientData(data: RegisterData[]): TransactionData;
    /**
     * Fund the pool
     *
     * @param amount - Amount to fund the pool
     *
     * @returns TransactionData
     */
    fundPool(amount: bigint): TransactionData;
    /**
     * Distribute to the recipients
     *
     * @param recipientIds - Array of recipientIds
     * @param data - Array of Distribution
     *
     * @returns TransactionData
     */
    distribute(recipientIds: `0x${string}`[], data: Distribution[]): TransactionData;
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
    updateDistribution(distributionMetadata: Metadata): TransactionData;
    updatePoolTimestamps(registrationStartTime: bigint, registrationEndTime: bigint, poolStartTime: bigint, poolEndTime: bigint): TransactionData;
    withdraw(address: `0x${string}`): TransactionData;
}
