import { Chain } from "viem";
export declare const getAddress: (chain: Chain) => `0x${string}`;
export declare const abi: readonly [{
    readonly inputs: readonly [];
    readonly name: "AllocationExtension_INVALID_ALLOCATION_TIMESTAMPS";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AllocationExtension_ALLOCATION_HAS_ALREADY_STARTED";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AllocationExtension_ALLOCATION_NOT_ACTIVE";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AllocationExtension_ALLOCATION_HAS_NOT_ENDED";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AllocationExtension_ALLOCATION_HAS_ENDED";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "allocationStartTime";
        readonly type: "uint64";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "allocationEndTime";
        readonly type: "uint64";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "AllocationTimestampsUpdated";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "allocationStartTime";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "allocationEndTime";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isUsingAllocationMetadata";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "allowedTokens";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "_allocationStartTime";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "_allocationEndTime";
        readonly type: "uint64";
    }];
    readonly name: "updateAllocationTimestamps";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
