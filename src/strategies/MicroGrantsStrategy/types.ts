// create types for
// /// @notice Stores the details of the recipients.
// struct Recipient {
//     bool useRegistryAnchor;
//     address recipientAddress;
//     uint256 requestedAmount;
//     Status recipientStatus;
//     Metadata metadata;
// }

import { Metadata } from "../../Common/types";
import { Status } from "../types";

// /// @notice Stores the details needed for initializing strategy
// struct InitializeParams {
//     bool useRegistryAnchor;
//     uint64 allocationStartTime;
//     uint64 allocationEndTime;
//     uint256 approvalThreshold;
//     uint256 maxRequestedAmount;
// }

export type Recipient = {
  useRegistryAnchor: boolean;
  recipientAddress: string;
  requestedAmount: string;
  recipientStatus: Status;
  metadata: Metadata;
};

export type RegisterData = {
  registryAnchor?: `0x${string}`;
  recipientAddress: `0x${string}`;
  requestedAmount: bigint;
  metadata: Metadata;
};

export type InitializeParams = {
  useRegistryAnchor: boolean;
  allocationStartTime: bigint;
  allocationEndTime: bigint;
  approvalThreshold: bigint;
  maxRequestedAmount: bigint;
};

export type Allocation = {
  recipientId: `0x${string}`;
  status: Status;
};
