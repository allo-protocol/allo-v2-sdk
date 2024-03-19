import { Metadata } from "../../types";
import { Status } from "../types";

export type InitializeParams = {
  registryGating: boolean;
  metadataRequired: boolean;
  reviewThreshold: bigint;
  registrationStartTime: bigint;
  registrationEndTime: bigint;
  allocationStartTime: bigint;
  allocationEndTime: bigint;
};

// struct InitializeParams {
//   // slot 0
//   bool registryGating;
//   bool metadataRequired;
//   // slot 1
//   uint256 reviewThreshold;
//   // slot 2
//   uint64 registrationStartTime;
//   uint64 registrationEndTime;
//   uint64 allocationStartTime;
//   uint64 allocationEndTime;
// }

export type InitializeParamsSimple = {
  maxVoiceCreditsPerAllocator: bigint;
  params: InitializeParams;
};

// struct InitializeParamsSimple {
//   // slot 0
//   uint256 maxVoiceCreditsPerAllocator;
//   // slot 1..n
//   InitializeParams params;
// }

export type Recipient = {
  totalVotesReceived: bigint;
  useRegistryAnchor: boolean;
  recipientAddress: string;
  metadata: Metadata;
  recipientStatus: Status;
  applicationId: bigint;
};

/// @notice The details of the recipient
//   struct Recipient {
//     // slot 0
//     uint256 totalVotesReceived;
//     // slot 1
//     bool useRegistryAnchor;
//     address recipientAddress;
//     Metadata metadata;
//     Status recipientStatus;
//     // slot 2
//     uint256 applicationId;
// }

export type Milestone = {
  amountPercentage: bigint;
  metadata: Metadata;
  milestoneStatus: Status;
};

// /// @notice The details of the allocator
// struct Allocator {
//     // slot 0
//     uint256 voiceCredits;
//     // slots [1...n]
//     mapping(address => uint256) voiceCreditsCastToRecipient;
//     mapping(address => uint256) votesCastToRecipient;
// }
