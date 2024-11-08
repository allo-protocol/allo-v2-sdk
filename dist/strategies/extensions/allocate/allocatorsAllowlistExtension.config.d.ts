import { Chain } from "viem";
export declare const getAddress: (chain: Chain) => `0x${string}`;
export declare const abi: readonly [{
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address[]";
        readonly name: "allocators";
        readonly type: "address[]";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "AllocatorsAdded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address[]";
        readonly name: "allocators";
        readonly type: "address[]";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "AllocatorsRemoved";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "_allocators";
        readonly type: "address[]";
    }];
    readonly name: "addAllocators";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_allocator";
        readonly type: "address";
    }];
    readonly name: "allowedAllocators";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "_allocators";
        readonly type: "address[]";
    }];
    readonly name: "removeAllocators";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
