import { BaseStrategy } from "../../BaseStrategy";
import { TransactionData } from "../../../Common/types";
import { encodeFunctionData } from "viem";
import { abi } from "./recipientsExtension.config";

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

export enum Status {
  None,
  Pending,
  Accepted,
  Rejected,
  Appealed,
  InReview,
  Canceled
}

export class RecipientsExtension extends BaseStrategy {
  // Read functions
  public async getReviewEachStatus(): Promise<boolean> {
    this.checkStrategy();
    const reviewEachStatus = await this.contract.read.REVIEW_EACH_STATUS();
    return reviewEachStatus;
  }

  public async getMetadataRequired(): Promise<boolean> {
    this.checkStrategy();
    const required = await this.contract.read.metadataRequired();
    return required;
  }

  public async getRegistrationStartTime(): Promise<bigint> {
    this.checkStrategy();
    const startTime = await this.contract.read.registrationStartTime();
    return startTime;
  }

  public async getRegistrationEndTime(): Promise<bigint> {
    this.checkStrategy();
    const endTime = await this.contract.read.registrationEndTime();
    return endTime;
  }

  public async getRecipientsCounter(): Promise<bigint> {
    this.checkStrategy();
    const counter = await this.contract.read.recipientsCounter();
    return counter;
  }

  public async getStatusesBitMap(index: bigint): Promise<bigint> {
    this.checkStrategy();
    const statusRow = await this.contract.read.statusesBitMap(index);
    return statusRow;
  }

  public async getRecipientIndexToRecipientId(index: bigint): Promise<`0x${string}`> {
    this.checkStrategy();
    const recipientId = await this.contract.read.recipientIndexToRecipientId(index);
    return recipientId;
  }

  public async getRecipient(recipientId: `0x${string}`): Promise<Recipient> {
    this.checkStrategy();
    const recipient = await this.contract.read.getRecipient(recipientId);
    return {
      useRegistryAnchor: recipient.useRegistryAnchor,
      recipientAddress: recipient.recipientAddress,
      statusIndex: BigInt(recipient.statusIndex),
      metadata: {
        protocol: recipient.metadata.protocol,
        pointer: recipient.metadata.pointer,
      },
    };
  }

  // Write functions
  public reviewRecipients(
    statuses: ApplicationStatus[],
    refRecipientsCounter: bigint
  ): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi,
      functionName: "reviewRecipients",
      args: [statuses, refRecipientsCounter],
    });

    return {
      to: this.address(),
      data: encodedData,
      value: "0",
    };
  }

  public updatePoolTimestamps(
    registrationStartTime: bigint,
    registrationEndTime: bigint
  ): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi,
      functionName: "updatePoolTimestamps",
      args: [registrationStartTime, registrationEndTime],
    });

    return {
      to: this.address(),
      data: encodedData,
      value: "0",
    };
  }

  private checkStrategy(): void {
    if (!this.contract) {
      throw new Error(
        "RecipientsExtension: No strategy address provided. Please call `setContract` first."
      );
    }
  }
}
