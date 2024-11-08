import { BaseStrategy } from "../../BaseStrategy";
import { TransactionData } from "../../../Common/types";
export type Metadata = {
    protocol: string;
    pointer: string;
};
export type Recipient = {
    useRegistryAnchor: boolean;
    recipientAddress: `0x${string}`;
    statusIndex: bigint;
    metadata: Metadata;
};
export type ApplicationStatus = {
    index: bigint;
    statusRow: bigint;
};
export declare enum Status {
    None = 0,
    Pending = 1,
    Accepted = 2,
    Rejected = 3,
    Appealed = 4,
    InReview = 5,
    Canceled = 6
}
export declare class RecipientsExtension extends BaseStrategy {
    getReviewEachStatus(): Promise<boolean>;
    getMetadataRequired(): Promise<boolean>;
    getRegistrationStartTime(): Promise<bigint>;
    getRegistrationEndTime(): Promise<bigint>;
    getRecipientsCounter(): Promise<bigint>;
    getStatusesBitMap(index: bigint): Promise<bigint>;
    getRecipientIndexToRecipientId(index: bigint): Promise<`0x${string}`>;
    getRecipient(recipientId: `0x${string}`): Promise<Recipient>;
    reviewRecipients(statuses: ApplicationStatus[], refRecipientsCounter: bigint): TransactionData;
    updatePoolTimestamps(registrationStartTime: bigint, registrationEndTime: bigint): TransactionData;
    private checkStrategy;
}
