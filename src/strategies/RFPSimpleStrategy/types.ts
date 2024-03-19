import { Metadata } from "../../types";
import { Status } from "../types";

// /// @notice Stores the details needed for initializing strategy
// struct InitializeParams {
//     uint256 maxBid;
//     bool useRegistryAnchor;
//     bool metadataRequired;
// }

export type InitializeParams = {
  maxBid: bigint;
  useRegistryAnchor: boolean;
  metadataRequired: boolean;
};

// struct Recipient {
//     bool useRegistryAnchor;
//     address recipientAddress;
//     uint256 proposalBid;
//     Status recipientStatus;
//     Metadata metadata;
// }

export type Recipient = {
  useRegistryAnchor: boolean;
  recipientAddress: string;
  proposalBid: bigint;
  recipientStatus: Status;
  metadata: Metadata;
};

// /// @notice Stores the details of the milestone
// struct Milestone {
//     uint256 amountPercentage;
//     Metadata metadata;
//     Status milestoneStatus;
// }

export type Milestone = {
  amountPercentage: bigint;
  metadata: Metadata;
  milestoneStatus: Status;
};
