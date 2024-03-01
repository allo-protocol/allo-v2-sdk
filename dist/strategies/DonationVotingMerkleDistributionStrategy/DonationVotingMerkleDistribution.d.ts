import { Allo } from "../../Allo/Allo";
import { ConstructorArgs, DeployParams, Metadata, TransactionData } from "../../Common/types";
import { PayoutSummary, Status } from "../types";
import { Allocation, Claim, Distribution, InitializeData, Recipient, RegisterData } from "./types";
export declare class DonationVotingMerkleDistributionStrategy {
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
    getPermit2(): Promise<string>;
    getDistributionMetadata(): Promise<Metadata>;
    useRegistryAnchor(): Promise<boolean>;
    metadataRequired(): Promise<boolean>;
    distributionStarted(): Promise<boolean>;
    registrationStartTime(): Promise<bigint>;
    registrationEndTime(): Promise<bigint>;
    allocationStartTime(): Promise<bigint>;
    allocationEndTime(): Promise<bigint>;
    totalPayoutAmount(): Promise<bigint>;
    recipientsCounter(): Promise<bigint>;
    getMerkleRoot(): Promise<string>;
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
     * @param strategyType - StrategyType ("Vault" | "Direct")
     * @returns DeployParams {abi, bytecode}
     */
    getDeployParams(strategyType: string): DeployParams;
    getInitializeData(data: InitializeData): Promise<`0x${string}`>;
    /**
     *
     * @param data - Allocation: (address,(((address,uint256),uint256,uint256),bytes32))
     * @returns `0x${string}`
     */
    getEncodedAllocation(data: Allocation): `0x${string}`;
    /**
     *
     * @param allocation - Allocation: (address,PermitType,(((address,uint256),uint256,uint256),bytes32))
     * @returns TransactionData: {to: `0x${string}`, data: `0x${string}`, value: string}
     */
    getAllocateData(allocation: Allocation): TransactionData;
    /**
     *
     * @param allocations - Array of Allocation: (address,(((address,uint256),uint256,uint256),bytes32))
     * @returns TransactionData: {to: `0x${string}`, data: `0x${string}`, value: string}
     */
    getBatchAllocateData(allocations: Allocation[]): TransactionData;
    /**
     *
     * @param poolIds - Array of poolIds
     * @param allocations - Array of Allocation: (address,(((address,uint256),uint256,uint256),bytes32))
     * @returns TransactionData: {to: `0x${string}`, data: `0x${string}`, value: string}
     */
    getBatchAllocateDataMultiplePools(poolIds: bigint[], allocations: Allocation[]): TransactionData;
    /**
     *
     * @param data - (address, address, Metadata)
     * @returns
     */
    getRegisterRecipientData(data: RegisterData): TransactionData;
    /**
     * Batch register recipients
     *
     * @param data - Array of RegisterDataDonationVoting
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
     * Get the claim function encoded data
     *
     * @param claims - Array of claims
     *
     * @returns - Encoded transaction data
     */
    getClaimData(claims: Claim[]): TransactionData;
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
    updateDistribution(merkleRoot: string, distributionMetadata: Metadata): TransactionData;
    updatePoolTimestamps(registrationStartTime: bigint, registrationEndTime: bigint, allocationStartTime: bigint, allocationEndTime: bigint): TransactionData;
    withdraw(amount: bigint): TransactionData;
}
