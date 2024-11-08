import { Chain } from "viem";
export declare const getAddress: (chain: Chain) => `0x${string}`;
export declare const abi: readonly [{
    readonly inputs: readonly [];
    readonly name: "MilestonesExtension_AmountTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MilestonesExtension_ExceedingMaxBid";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MilestonesExtension_InvalidRecipient";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MilestonesExtension_InvalidSubmitter";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MilestonesExtension_InvalidMilestone";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MilestonesExtension_InvalidMilestoneStatus";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MilestonesExtension_MilestonesAlreadySet";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MilestonesExtension_MilestoneNotPending";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MilestonesExtension_MilestonePending";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "maxBid";
        readonly type: "uint256";
    }];
    readonly name: "MaxBidIncreased";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bidderId";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newBid";
        readonly type: "uint256";
    }];
    readonly name: "SetBid";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "milestoneId";
        readonly type: "uint256";
    }];
    readonly name: "MilestoneSubmitted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "milestoneId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "status";
        readonly type: "uint8";
    }];
    readonly name: "MilestoneStatusChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "milestonesLength";
        readonly type: "uint256";
    }];
    readonly name: "MilestonesSet";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "maxBid";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "upcomingMilestone";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "bids";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_milestoneId";
        readonly type: "uint256";
    }];
    readonly name: "getMilestone";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountPercentage";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "protocol";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "pointer";
                readonly type: "string";
            }];
            readonly internalType: "struct Metadata";
            readonly name: "metadata";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint8";
            readonly name: "status";
            readonly type: "uint8";
        }];
        readonly internalType: "struct IMilestonesExtension.Milestone";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_milestoneId";
        readonly type: "uint256";
    }];
    readonly name: "getMilestoneStatus";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_maxBid";
        readonly type: "uint256";
    }];
    readonly name: "increaseMaxBid";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountPercentage";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "protocol";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "pointer";
                readonly type: "string";
            }];
            readonly internalType: "struct Metadata";
            readonly name: "metadata";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint8";
            readonly name: "status";
            readonly type: "uint8";
        }];
        readonly internalType: "struct IMilestonesExtension.Milestone[]";
        readonly name: "_milestones";
        readonly type: "tuple[]";
    }];
    readonly name: "setMilestones";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_recipientId";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "string";
            readonly name: "protocol";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "pointer";
            readonly type: "string";
        }];
        readonly internalType: "struct Metadata";
        readonly name: "_metadata";
        readonly type: "tuple";
    }];
    readonly name: "submitUpcomingMilestone";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "_milestoneStatus";
        readonly type: "uint8";
    }];
    readonly name: "reviewMilestone";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
