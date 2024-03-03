import { Address } from "viem";
export declare const address: Address;
export declare const abi: readonly [{
    readonly inputs: readonly [];
    readonly name: "ALLOCATION_ACTIVE";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ALLOCATION_NOT_ACTIVE";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ALLOCATION_NOT_ENDED";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ALREADY_INITIALIZED";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AMOUNT_MISMATCH";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ANCHOR_ERROR";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ARRAY_MISMATCH";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "INVALID";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "INVALID_ADDRESS";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "INVALID_FEE";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "INVALID_METADATA";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "INVALID_REGISTRATION";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IS_APPROVED_STRATEGY";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MISMATCH";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NONCE_NOT_AVAILABLE";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NOT_APPROVED_STRATEGY";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NOT_ENOUGH_FUNDS";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NOT_IMPLEMENTED";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NOT_INITIALIZED";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NOT_PENDING_OWNER";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NewOwnerIsZeroAddress";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NoHandoverRequest";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "POOL_ACTIVE";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "POOL_INACTIVE";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RECIPIENT_ALREADY_ACCEPTED";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipientId";
        readonly type: "address";
    }];
    readonly name: "RECIPIENT_ERROR";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RECIPIENT_NOT_ACCEPTED";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "REGISTRATION_NOT_ACTIVE";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UNAUTHORIZED";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Unauthorized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZERO_ADDRESS";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "poolId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "BaseFeePaid";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "baseFee";
        readonly type: "uint256";
    }];
    readonly name: "BaseFeeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "version";
        readonly type: "uint8";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pendingOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipHandoverCanceled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pendingOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipHandoverRequested";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "oldOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "percentFee";
        readonly type: "uint256";
    }];
    readonly name: "PercentFeeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "poolId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "profileId";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "contract IStrategy";
        readonly name: "strategy";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "protocol";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "pointer";
            readonly type: "string";
        }];
        readonly indexed: false;
        readonly internalType: "struct Metadata";
        readonly name: "metadata";
        readonly type: "tuple";
    }];
    readonly name: "PoolCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "poolId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "fee";
        readonly type: "uint256";
    }];
    readonly name: "PoolFunded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "poolId";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "protocol";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "pointer";
            readonly type: "string";
        }];
        readonly indexed: false;
        readonly internalType: "struct Metadata";
        readonly name: "metadata";
        readonly type: "tuple";
    }];
    readonly name: "PoolMetadataUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "registry";
        readonly type: "address";
    }];
    readonly name: "RegistryUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "previousAdminRole";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "newAdminRole";
        readonly type: "bytes32";
    }];
    readonly name: "RoleAdminChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RoleGranted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RoleRevoked";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "strategy";
        readonly type: "address";
    }];
    readonly name: "StrategyApproved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "strategy";
        readonly type: "address";
    }];
    readonly name: "StrategyRemoved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "treasury";
        readonly type: "address";
    }];
    readonly name: "TreasuryUpdated";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DEFAULT_ADMIN_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "NATIVE";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_manager";
        readonly type: "address";
    }];
    readonly name: "addPoolManager";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_strategy";
        readonly type: "address";
    }];
    readonly name: "addToCloneableStrategies";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "allocate";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "_poolIds";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "_datas";
        readonly type: "bytes[]";
    }];
    readonly name: "batchAllocate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "_poolIds";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "_data";
        readonly type: "bytes[]";
    }];
    readonly name: "batchRegisterRecipient";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "recipientIds";
        readonly type: "address[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "cancelOwnershipHandover";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pendingOwner";
        readonly type: "address";
    }];
    readonly name: "completeOwnershipHandover";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "_strategy";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "_initStrategyData";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "protocol";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "pointer";
            readonly type: "string";
        }];
        readonly internalType: "struct Metadata";
        readonly name: "_metadata";
        readonly type: "tuple";
    }, {
        readonly internalType: "address[]";
        readonly name: "_managers";
        readonly type: "address[]";
    }];
    readonly name: "createPool";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "poolId";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "_strategy";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "_initStrategyData";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "protocol";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "pointer";
            readonly type: "string";
        }];
        readonly internalType: "struct Metadata";
        readonly name: "_metadata";
        readonly type: "tuple";
    }, {
        readonly internalType: "address[]";
        readonly name: "_managers";
        readonly type: "address[]";
    }];
    readonly name: "createPoolWithCustomStrategy";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "poolId";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "_recipientIds";
        readonly type: "address[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "distribute";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }];
    readonly name: "fundPool";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getBaseFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getFeeDenominator";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "FEE_DENOMINATOR";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPercentFee";
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
        readonly name: "_poolId";
        readonly type: "uint256";
    }];
    readonly name: "getPool";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "profileId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "contract IStrategy";
            readonly name: "strategy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "protocol";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "pointer";
                readonly type: "string";
            }];
            readonly internalType: "struct Metadata";
            readonly name: "metadata";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "managerRole";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "adminRole";
            readonly type: "bytes32";
        }];
        readonly internalType: "struct IAllo.Pool";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getRegistry";
    readonly outputs: readonly [{
        readonly internalType: "contract IRegistry";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }];
    readonly name: "getRoleAdmin";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }];
    readonly name: "getStrategy";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getTreasury";
    readonly outputs: readonly [{
        readonly internalType: "address payable";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "grantRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "hasRole";
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
        readonly name: "_owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_registry";
        readonly type: "address";
    }, {
        readonly internalType: "address payable";
        readonly name: "_treasury";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_percentFee";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_baseFee";
        readonly type: "uint256";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_strategy";
        readonly type: "address";
    }];
    readonly name: "isCloneableStrategy";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_address";
        readonly type: "address";
    }];
    readonly name: "isPoolAdmin";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_address";
        readonly type: "address";
    }];
    readonly name: "isPoolManager";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "result";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pendingOwner";
        readonly type: "address";
    }];
    readonly name: "ownershipHandoverExpiresAt";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "result";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_recipient";
        readonly type: "address";
    }];
    readonly name: "recoverFunds";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "registerRecipient";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_strategy";
        readonly type: "address";
    }];
    readonly name: "removeFromCloneableStrategies";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_manager";
        readonly type: "address";
    }];
    readonly name: "removePoolManager";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "renounceRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "requestOwnershipHandover";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "revokeRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
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
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_baseFee";
        readonly type: "uint256";
    }];
    readonly name: "updateBaseFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_percentFee";
        readonly type: "uint256";
    }];
    readonly name: "updatePercentFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_poolId";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "protocol";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "pointer";
            readonly type: "string";
        }];
        readonly internalType: "struct Metadata";
        readonly name: "_metadata";
        readonly type: "tuple";
    }];
    readonly name: "updatePoolMetadata";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_registry";
        readonly type: "address";
    }];
    readonly name: "updateRegistry";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address payable";
        readonly name: "_treasury";
        readonly type: "address";
    }];
    readonly name: "updateTreasury";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
