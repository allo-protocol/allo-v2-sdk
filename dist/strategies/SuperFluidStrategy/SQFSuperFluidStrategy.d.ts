import { Allo } from "../../Allo/Allo";
import { ConstructorArgs, DeployParams, Metadata, PayoutSummary, Recipient, Status, TransactionData } from "../../types";
import { AllocationSuperlfuid, InitializeParamsSuperFluid, RegisterDataSuperfluid, ReviewRecipientDataSuperfluid } from "./types";
export declare class SQFSuperFluidStrategy {
    private client;
    private contract;
    private strategy;
    private poolId;
    private allo;
    constructor({ chain, rpc, address, poolId }: ConstructorArgs);
    setPoolId(poolId: bigint): Promise<void>;
    setContract(address: `0x${string}`): void;
    private checkPoolId;
    private checkStrategy;
    getInitializeData(params: InitializeParamsSuperFluid): Promise<`0x${string}`>;
    getDeployParams(): DeployParams;
    getNative(): Promise<string>;
    getAllocationEndTime(): Promise<bigint>;
    getAllocationStartTime(): Promise<bigint>;
    getRegistrationEndTime(): Promise<bigint>;
    getRegistrationStartTime(): Promise<bigint>;
    getAllo(): Promise<Allo>;
    getPayouts(recipientIds: string[]): Promise<PayoutSummary[]>;
    getPoolAmount(): Promise<bigint>;
    getPoolId(): Promise<bigint>;
    getRecipient(recipientId: string): Promise<Recipient>;
    getRecipientStatus(recipientId: string): Promise<Status>;
    getStrategyId(): Promise<string>;
    isPoolActive(): Promise<boolean>;
    isValidAllocator(allocatorAddress: string): Promise<boolean>;
    useRegistryAnchor(): Promise<boolean>;
    getInitialSuperAppBalance(): Promise<bigint>;
    getSuperfluidHost(): Promise<`0x${string}`>;
    getAllocationSuperToken(): Promise<`0x${string}`>;
    getPoolSuperToken(): Promise<`0x${string}`>;
    getGdaPool(): Promise<`0x${string}`>;
    getPassportDecoder(): Promise<`0x${string}`>;
    getMinPassportScore(): Promise<bigint>;
    getMetadataRequired(): Promise<boolean>;
    getRegistry(): Promise<`0x${string}`>;
    getRecipientIdBySuperApp(superApp: `0x${string}`): Promise<`0x${string}`>;
    getTotalUnitsByRecipient(recipientId: `0x${string}`): Promise<bigint>;
    getRecipientFlowRate(recipientId: `0x${string}`): Promise<bigint>;
    getSuperApp(recipientId: `0x${string}`): Promise<`0x${string}`>;
    getUpdatePoolTimestampsData(registrationStartTime: bigint, registrationEndTime: bigint, allocationStartTime: bigint, allocationEndTime: bigint): TransactionData;
    getUpdateMinPassportScoreData(minPassportScore: bigint): TransactionData;
    getRegisterRecipientData(data: {
        registryAnchor: `0x${string}`;
        recipientAddress: `0x${string}`;
        metadata: Metadata;
    }): TransactionData;
    getBatchRegisterRecipientData(data: RegisterDataSuperfluid[]): TransactionData;
    getDistributeData(flowRate: bigint): TransactionData;
    getAllocationData(recipientId: `0x${string}`, flowRate: bigint): TransactionData;
    getBatchAllocationData(allocations: AllocationSuperlfuid[]): TransactionData;
    getReviewRecipientData(data: ReviewRecipientDataSuperfluid[]): TransactionData;
    getCancelRecipientsData(recipientIds: `0x${string}`[]): TransactionData;
    getWithdrawData(token: `0x${string}`, amount: bigint): TransactionData;
    getCloseStream(): TransactionData;
}
