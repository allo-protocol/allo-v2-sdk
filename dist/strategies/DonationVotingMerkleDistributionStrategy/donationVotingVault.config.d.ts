export declare const abi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_allo";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_name";
        readonly type: "string";
        readonly internalType: "string";
    }, {
        readonly name: "_permit2";
        readonly type: "address";
        readonly internalType: "contract ISignatureTransfer";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "NATIVE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "PERMIT2";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ISignatureTransfer";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "allocate";
    readonly inputs: readonly [{
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "allocationEndTime";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "allocationStartTime";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "allowedTokens";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "claim";
    readonly inputs: readonly [{
        readonly name: "_claims";
        readonly type: "tuple[]";
        readonly internalType: "struct DonationVotingMerkleDistributionVaultStrategy.Claim[]";
        readonly components: readonly [{
            readonly name: "recipientId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "claims";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "distribute";
    readonly inputs: readonly [{
        readonly name: "_recipientIds";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "distributionMetadata";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "protocol";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "pointer";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "distributionStarted";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getAllo";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IAllo";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPayouts";
    readonly inputs: readonly [{
        readonly name: "_recipientIds";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "_data";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IStrategy.PayoutSummary[]";
        readonly components: readonly [{
            readonly name: "recipientAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPoolAmount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPoolId";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getRecipient";
    readonly inputs: readonly [{
        readonly name: "_recipientId";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "recipient";
        readonly type: "tuple";
        readonly internalType: "struct DonationVotingMerkleDistributionBaseStrategy.Recipient";
        readonly components: readonly [{
            readonly name: "useRegistryAnchor";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "recipientAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "metadata";
            readonly type: "tuple";
            readonly internalType: "struct Metadata";
            readonly components: readonly [{
                readonly name: "protocol";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "pointer";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getRecipientStatus";
    readonly inputs: readonly [{
        readonly name: "_recipientId";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "enum IStrategy.Status";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getStrategyId";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "hasBeenDistributed";
    readonly inputs: readonly [{
        readonly name: "_index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "increasePoolAmount";
    readonly inputs: readonly [{
        readonly name: "_amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "initialize";
    readonly inputs: readonly [{
        readonly name: "_poolId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "isDistributionSet";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isPoolActive";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isValidAllocator";
    readonly inputs: readonly [{
        readonly name: "_allocator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "merkleRoot";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "metadataRequired";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "multicall";
    readonly inputs: readonly [{
        readonly name: "data";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly outputs: readonly [{
        readonly name: "results";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "recipientToStatusIndexes";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "recipientsCounter";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "registerRecipient";
    readonly inputs: readonly [{
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "registrationEndTime";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "registrationStartTime";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "reviewRecipients";
    readonly inputs: readonly [{
        readonly name: "statuses";
        readonly type: "tuple[]";
        readonly internalType: "struct DonationVotingMerkleDistributionBaseStrategy.ApplicationStatus[]";
        readonly components: readonly [{
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "statusRow";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "refRecipientsCounter";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "statusesBitMap";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "totalClaimableAmount";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "totalPayoutAmount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "updateDistribution";
    readonly inputs: readonly [{
        readonly name: "_merkleRoot";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "_distributionMetadata";
        readonly type: "tuple";
        readonly internalType: "struct Metadata";
        readonly components: readonly [{
            readonly name: "protocol";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "pointer";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updatePoolTimestamps";
    readonly inputs: readonly [{
        readonly name: "_registrationStartTime";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "_registrationEndTime";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "_allocationStartTime";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "_allocationEndTime";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "useRegistryAnchor";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "withdraw";
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "Allocated";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "origin";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Allocated";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "BatchPayoutSuccessful";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Claimed";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "recipientAddress";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Distributed";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "recipientAddress";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "DistributionUpdated";
    readonly inputs: readonly [{
        readonly name: "merkleRoot";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }, {
        readonly name: "metadata";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct Metadata";
        readonly components: readonly [{
            readonly name: "protocol";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "pointer";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "FundsDistributed";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "grantee";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Initialized";
    readonly inputs: readonly [{
        readonly name: "version";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "uint8";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Initialized";
    readonly inputs: readonly [{
        readonly name: "poolId";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PoolActive";
    readonly inputs: readonly [{
        readonly name: "active";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RecipientStatusUpdated";
    readonly inputs: readonly [{
        readonly name: "rowIndex";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "fullRow";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Registered";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "TimestampsUpdated";
    readonly inputs: readonly [{
        readonly name: "registrationStartTime";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }, {
        readonly name: "registrationEndTime";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }, {
        readonly name: "allocationStartTime";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }, {
        readonly name: "allocationEndTime";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "UpdatedRegistration";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "status";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "uint8";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "ALLOCATION_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ALLOCATION_NOT_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ALLOCATION_NOT_ENDED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ALREADY_INITIALIZED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "AMOUNT_MISMATCH";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ANCHOR_ERROR";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ARRAY_MISMATCH";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_ADDRESS";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_FEE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_METADATA";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_REGISTRATION";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "IS_APPROVED_STRATEGY";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MISMATCH";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NONCE_NOT_AVAILABLE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NON_ZERO_VALUE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_APPROVED_STRATEGY";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_ENOUGH_FUNDS";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_IMPLEMENTED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_INITIALIZED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_PENDING_OWNER";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "POOL_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "POOL_INACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "RECIPIENT_ALREADY_ACCEPTED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "RECIPIENT_ERROR";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "RECIPIENT_NOT_ACCEPTED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "REGISTRATION_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "REGISTRATION_NOT_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UNAUTHORIZED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZERO_ADDRESS";
    readonly inputs: readonly [];
}];
export declare const bytecode = "0x60e06040523480156200001157600080fd5b506040516200421938038062004219833981016040819052620000349162000122565b6001600160a01b038316608052604051839083908390839083906200005e90829060200162000204565b60408051601f19818403018152919052805160209091012060a05250506001600160a01b038116620000a35760405163538ba4f960e01b815260040160405180910390fd5b6001600160a01b031660c05250620002399350505050565b6001600160a01b0381168114620000d157600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000107578181015183820152602001620000ed565b50506000910152565b80516200011d81620000bb565b919050565b6000806000606084860312156200013857600080fd5b83516200014581620000bb565b60208501519093506001600160401b03808211156200016357600080fd5b818601915086601f8301126200017857600080fd5b8151818111156200018d576200018d620000d4565b604051601f8201601f19908116603f01168101908382118183101715620001b857620001b8620000d4565b81604052828152896020848701011115620001d257600080fd5b620001e5836020830160208801620000ea565b8096505050505050620001fb6040850162000110565b90509250925092565b602081526000825180602084015262000225816040850160208701620000ea565b601f01601f19169190910160400192915050565b60805160a05160c051613f8d6200028c600039600081816105dc015261219a0152600061046001526000818161033c01528181611212015281816113ad01528181611c3e01526123420152613f8d6000f3fe6080604052600436106102bf5760003560e01c80636afdd8501161016e578063df868ed3116100cb578063edd146cc1161007f578063f31db3d111610064578063f31db3d114610828578063f5b0dfb714610848578063f6f258911461086857600080fd5b8063edd146cc146107f5578063ef2920fc1461081557600080fd5b8063e744092e116100b0578063e744092e14610782578063e7efcfc2146107b2578063eb11af93146107c857600080fd5b8063df868ed314610745578063dff7d2c71461075a57600080fd5b8063ac9650d811610122578063cb0e85a611610107578063cb0e85a6146106de578063d2683937146106fd578063d2e17f591461071d57600080fd5b8063ac9650d814610684578063b2b878d0146106b157600080fd5b806395355b3b1161015357806395355b3b1461061e5780639af5c09d14610634578063a0cf0aea1461065c57600080fd5b80636afdd850146105ca57806373af3453146105fe57600080fd5b806342fda9c71161021c57806357089739116101d05780635f1b55f3116101b55780635f1b55f31461055057806362812a39146105705780636923e09a1461059d57600080fd5b8063570897391461051357806359a3977b1461052d57600080fd5b80634ab4ba42116102015780634ab4ba42146104be5780634d31d087146104d357806351cff8d9146104f357600080fd5b806342fda9c7146104515780634533d6781461048457600080fd5b80632bbe0cae116102735780632eb4a7ab116102585780632eb4a7ab146103ee57806338fff2d0146104045780633f733c6b1461041957600080fd5b80632bbe0cae146103c45780632d52eff2146103d757600080fd5b806315cc481e116102a457806315cc481e1461032d5780632143e92f14610374578063217550881461039457600080fd5b806301fc1c64146102cb5780630a6f0ee91461030b57600080fd5b366102c657005b600080fd5b3480156102d757600080fd5b506102f86102e6366004612b2c565b600c6020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561031757600080fd5b5061032b610326366004612d65565b610895565b005b34801561033957600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b039091168152602001610302565b34801561038057600080fd5b5061032b61038f366004612df3565b6108b5565b3480156103a057600080fd5b506005546103b49062010000900460ff1681565b6040519015158152602001610302565b61035c6103d2366004612e4f565b6109cf565b3480156103e357600080fd5b50600a5415156103b4565b3480156103fa57600080fd5b506102f8600a5481565b34801561041057600080fd5b506001546102f8565b34801561042557600080fd5b506102f8610434366004612ea1565b604360209081526000928352604080842090915290825290205481565b34801561045d57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f8565b34801561049057600080fd5b506006546104a59067ffffffffffffffff1681565b60405167ffffffffffffffff9091168152602001610302565b3480156104ca57600080fd5b506002546102f8565b3480156104df57600080fd5b506103b46104ee366004612b2c565b6109f4565b3480156104ff57600080fd5b5061032b61050e366004612b2c565b6109fd565b34801561051f57600080fd5b506005546103b49060ff1681565b34801561053957600080fd5b50610542610a9b565b604051610302929190612f1f565b34801561055c57600080fd5b506103b461056b366004612f38565b610b32565b34801561057c57600080fd5b5061059061058b366004612b2c565b610b3d565b6040516103029190612f51565b3480156105a957600080fd5b506102f86105b8366004612b2c565b60446020526000908152604090205481565b3480156105d657600080fd5b5061035c7f000000000000000000000000000000000000000000000000000000000000000081565b34801561060a57600080fd5b5061032b610619366004612fa0565b610b4e565b34801561062a57600080fd5b506102f860085481565b34801561064057600080fd5b506005546104a5906301000000900467ffffffffffffffff1681565b34801561066857600080fd5b5061035c73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561069057600080fd5b506106a461069f36600461303a565b610bf0565b60405161030291906130af565b3480156106bd57600080fd5b506106d16106cc366004613111565b610ce5565b60405161030291906131e6565b3480156106ea57600080fd5b506005546103b490610100900460ff1681565b34801561070957600080fd5b5061032b610718366004613246565b610dfd565b34801561072957600080fd5b506005546104a590600160981b900467ffffffffffffffff1681565b34801561075157600080fd5b506103b4611060565b34801561076657600080fd5b506005546104a590600160581b900467ffffffffffffffff1681565b34801561078e57600080fd5b506103b461079d366004612b2c565b600e6020526000908152604090205460ff1681565b3480156107be57600080fd5b506102f860075481565b3480156107d457600080fd5b506107e86107e3366004612b2c565b61106f565b60405161030291906132bf565b34801561080157600080fd5b5061032b6108103660046132e7565b61107a565b61032b610823366004612e4f565b6110d5565b34801561083457600080fd5b5061032b61084336600461332e565b6110f9565b34801561085457600080fd5b5061032b610863366004612f38565b6111dd565b34801561087457600080fd5b506102f8610883366004612f38565b600b6020526000908152604090205481565b61089d611207565b6108a5611252565b6108b083838361128e565b505050565b336108bf8161136a565b6108cb85858585611435565b6005805472ffffffffffffffffffffffffffffffff0000001916630100000067ffffffffffffffff888116820272ffffffffffffffff0000000000000000000000191692909217600160581b8884168102919091177fffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffff16600160981b888516810291909117948590556006805467ffffffffffffffff191688861690811790915560408051948704861685529286048516602085015294049092169181019190915260608101919091523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a15050505050565b60006109d9611207565b6109e1611252565b6109eb83836114c4565b90505b92915050565b600060016109ee565b33610a078161136a565b600654610a219067ffffffffffffffff1662278d006133ff565b67ffffffffffffffff164211610a4a57604051637fcce2a960e01b815260040160405180910390fd5b6000610a568330611839565b90506000610a79846001600160a01b031660009081526044602052604090205490565b90506000610a878284613420565b9050610a94853383611882565b5050505050565b6003805460048054919291610aaf90613433565b80601f0160208091040260200160405190810160405280929190818152602001828054610adb90613433565b8015610b285780601f10610afd57610100808354040283529160200191610b28565b820191906000526020600020905b815481529060010190602001808311610b0b57829003601f168201915b5050505050905082565b60006109ee826118bc565b610b45612ad1565b6109ee826118fd565b610b566119f6565b33610b608161136a565b60055462010000900460ff1615610b8a57604051637fcce2a960e01b815260040160405180910390fd5b600a839055815160039081556020830151839190600490610bab90826134b3565b509050507fdc7180ca4affc84269428ed20ef950e745126f11691b010c4a7d49458421008f600a546003604051610be3929190613573565b60405180910390a1505050565b60608167ffffffffffffffff811115610c0b57610c0b612b50565b604051908082528060200260200182016040528015610c3e57816020015b6060815260200190600190039081610c295790505b50905060005b82811015610cde57610cae30858584818110610c6257610c62613618565b9050602002810190610c74919061362e565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611a3b92505050565b828281518110610cc057610cc0613618565b60200260200101819052508080610cd69061367c565b915050610c44565b5092915050565b81518151606091908114610d25576040517f7b49805600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008167ffffffffffffffff811115610d4057610d40612b50565b604051908082528060200260200182016040528015610d8557816020015b6040805180820190915260008082526020820152815260200190600190039081610d5e5790505b50905060005b82811015610df457610dcf868281518110610da857610da8613618565b6020026020010151868381518110610dc257610dc2613618565b6020026020010151611a60565b828281518110610de157610de1613618565b6020908102919091010152600101610d8b565b50949350505050565b610e05611b1b565b610e0d6119f6565b8060005b81811015611050576000848483818110610e2d57610e2d613618565b905060400201803603810190610e439190613695565b80516001600160a01b039081166000908152600f602090815260408083208151606081018352815460ff81161515825261010090049095168584015281518083018352600182018054825260028301805498995095979295938701949193909291840191610eb090613433565b80601f0160208091040260200160405190810160405280929190818152602001828054610edc90613433565b8015610f295780601f10610efe57610100808354040283529160200191610f29565b820191906000526020600020905b815481529060010190602001808311610f0c57829003601f168201915b5050509190925250505090525082516001600160a01b03908116600090815260436020908152604080832082880151909416835292905290812054919250819003610f8757604051637fcce2a960e01b815260040160405180910390fd5b6020808401805185516001600160a01b03908116600090815260438552604080822094518316825293855283812081905590821681526044909352908220805491928492610fd6908490613420565b92505081905550610fec81846020015184611882565b8351602084810151604080516001600160a01b03928316815292830186905284821683820152519216917f0ffa55c11cec5055a4f567b0ff6e1e0eef2af17baafddd35f31ab4ed1afb75469181900360600190a2505060019092019150610e119050565b505061105c6001601155565b5050565b600061106a611b74565b905090565b60006109ee82611bbf565b611082611207565b6000818060200190518101906110989190613765565b90506110a48382611bde565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610be3929190612f1f565b6110dd611207565b6110e5611252565b6110ef8282611ed3565b61105c82826120a9565b611101612294565b3361110b8161136a565b600854821461112d57604051637fcce2a960e01b815260040160405180910390fd5b60005b83518110156111d757600084828151811061114d5761114d613618565b6020026020010151600001519050600085838151811061116f5761116f613618565b6020908102919091018101518101516000848152600b83526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a25050600101611130565b50505050565b6111e5611207565b80600260008282546111f79190613838565b9091555061120490508181565b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146112505760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003611250576040517f3da3f98c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806112988161136a565b600a546000036112bb57604051637fcce2a960e01b815260040160405180910390fd5b60055462010000900460ff166112dd576005805462ff00001916620100001790555b6000838060200190518101906112f3919061390e565b805190915060005b8181101561132d5761132583828151811061131857611318613618565b60200260200101516122c0565b6001016112fb565b506040516001600160a01b038516907f7ec3272052827f7b50d9e84f98172cbb80c112df1e377c5b97ea77f1812db8d990600090a2505050505050565b6001546040517f29e40d4b00000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa1580156113f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141891906139bf565b6112045760405163075fd2b160e01b815260040160405180910390fd5b8267ffffffffffffffff168467ffffffffffffffff16118061146a57508167ffffffffffffffff168467ffffffffffffffff16115b8061148857508067ffffffffffffffff168267ffffffffffffffff16115b806114a657508067ffffffffffffffff168367ffffffffffffffff16115b156111d757604051637fcce2a960e01b815260040160405180910390fd5b60006114ce61246f565b60008060006114f0604051806040016040528060008152602001606081525090565b60055460ff1615611542578680602001905181019061150f9190613a71565b9196509350905061152085876124da565b61153d5760405163075fd2b160e01b815260040160405180910390fd5b6115ad565b868060200190518101906115569190613a71565b6001600160a01b038316151596509094509092509050836115775785611579565b815b945083801561158f575061158d85876124da565b155b156115ad5760405163075fd2b160e01b815260040160405180910390fd5b600554610100900460ff1680156115d0575060208101515115806115d057508051155b15611607576040517fc19e07c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b03831661163e5760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b038086166000908152600f602090815260409091208054928616610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff9093169290921782558251600183019081559083015183919060028401906116ac90826134b3565b505060055460ff1690506116c057846116c3565b60015b815460ff19169015151781556001600160a01b0386166000908152600c6020526040812054900361179f576008546001600160a01b0387166000908152600c60205260409020556117198660015b60ff16612604565b600088600854604051602001611730929190613ad5565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a60405161177c929190613af7565b60405180910390a2600880549060006117948361367c565b91905055505061182e565b60006117aa87612637565b905060011960ff8216016117c8576117c3876001611711565b6117df565b60021960ff8216016117df576117df876004611711565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a6118158b612637565b60405161182493929190613b22565b60405180910390a2505b505050505092915050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161187157506001600160a01b038116316109ee565b61187b8383612678565b90506109ee565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016118b1576108b082826126ad565b6108b08383836126c9565b6000806118cb61010084613b6d565b905060006118db61010085613b81565b6000928352600d602052604090922054600190921b9182169091149392505050565b611905612ad1565b6001600160a01b038083166000908152600f60209081526040918290208251606081018452815460ff81161515825261010090049094168483015282518084018452600182018054825260028301805493958701949293919284019161196a90613433565b80601f016020809104026020016040519081016040528092919081815260200182805461199690613433565b80156119e35780601f106119b8576101008083540402835291602001916119e3565b820191906000526020600020905b8154815290600101906020018083116119c657829003601f168201915b5050509190925250505090525092915050565b60065467ffffffffffffffff164211611250576040517f8a879da200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60606109eb8383604051806060016040528060278152602001613f3160279139612718565b6040805180820190915260008082526020820152600082806020019051810190611a8a9190613b95565b805160208201516040830151606084015193945091929091906000611aae846118fd565b602001519050611ac18585838686612790565b15611af1576040518060400160405280826001600160a01b031681526020018481525096505050505050506109ee565b604080518082019091526001600160a01b0390911681526000602082015298975050505050505050565b600260115403611b6d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401611635565b6002601155565b60055460009042630100000090910467ffffffffffffffff1611801590611bae5750600554600160581b900467ffffffffffffffff164211155b15611bb95750600190565b50600090565b6000611bca82612637565b60ff1660068111156109ee576109ee6132a9565b611be782612839565b80516005805460208085015161ffff1990921693151561ff0019169390931761010091151591909102179055604080517f5ab1bd5300000000000000000000000000000000000000000000000000000000815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa158015611c8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cb19190613bca565b600980547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790556040810151600580546060840151608085015172ffffffffffffffffffffffffffffffff00000019909216630100000067ffffffffffffffff958616810272ffffffffffffffff0000000000000000000000191691909117600160581b9286168302177fffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffff16600160981b9386168402179384905560a08601516006805467ffffffffffffffff191691871691821790556001600855611db8959185048216949283048216939092041690611435565b600554600654604080516301000000840467ffffffffffffffff9081168252600160581b850481166020830152600160981b909404841681830152929091166060830152336080830152517fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39181900360a00190a160c0810151516000819003611e725760008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c805460ff191660011790555b60005b818110156111d7576001600e60008560c001518481518110611e9957611e99613618565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101611e75565b611edb6128a1565b60008083806020019051810190611ef29190613be7565b805151602081015190519395509093509190506002611f1085612637565b60ff166006811115611f2457611f246132a9565b6006811115611f3557611f356132a9565b14611f5e5760405163f4a513b960e01b81526001600160a01b0385166004820152602401611635565b6001600160a01b0381166000908152600e602052604090205460ff16158015611fb2575060008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5460ff16155b15611fd057604051637fcce2a960e01b815260040160405180910390fd5b600034118015611ffd57506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14155b8061202f57506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801561202f5750813414155b1561204d57604051637fcce2a960e01b815260040160405180910390fd5b604080518381526001600160a01b038381166020830152878116828401523260608301529151918616917fdc9d40760308557d1377c2fe7c984ace9eb02d23b60a5f6f26be62c52431bc389181900360800190a2505050505050565b600080838060200190518101906120c09190613be7565b80515180516020909101519395509093509190508073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016121435781341015612134576040517f74c5672b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61213e30836126ad565b612222565b600061214f8430612678565b8551604080518082018252308152602080820188905289015191517f30f28b7a0000000000000000000000000000000000000000000000000000000081529394506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016936330f28b7a936121d3939092918d9190600401613cec565b600060405180830381600087803b1580156121ed57600080fd5b505af1158015612201573d6000803e3d6000fd5b5050505060006122118530612678565b905061221d8282613420565b925050505b6001600160a01b03808616600090815260436020908152604080832093871683529290529081208054839290612259908490613838565b90915550506001600160a01b03831660009081526044602052604081208054839290612286908490613838565b909155505050505050505050565b60065467ffffffffffffffff164211156112505760405162b828c960e81b815260040160405180910390fd5b805160208083015160408085015160608601516001600160a01b038085166000908152600f9096529290942054929390929091610100909104166123078585838686612790565b15612443576001546040517f068bcd8d0000000000000000000000000000000000000000000000000000000081526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d916123799160040190815260200190565b600060405180830381865afa158015612396573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526123be9190810190613d6f565b90506123c9866128eb565b83600260008282546123db9190613420565b909155505060408101516123f0908386611882565b60408082015181518681526001600160a01b038581166020830152808916939216917fa6b66f665010d2f7435f110111aaa34b56564074f66081bef606d996fc8caa6f910160405180910390a350612467565b60405163f4a513b960e01b81526001600160a01b0385166004820152602401611635565b505050505050565b60055442630100000090910467ffffffffffffffff1611806124a35750600554600160581b900467ffffffffffffffff1642115b15611250576040517fb609ed5a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6009546040517fdd93da430000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa158015612541573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526125699190810190613e23565b60095481516040517f5e8a791500000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa1580156125d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fc91906139bf565b949350505050565b600080600061261285612929565b6000928352600b602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b0381166000908152600c6020526040812054810361265e57506000919050565b60008061266a84612929565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af161105c5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661270e576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b0316856040516127359190613eea565b600060405180830381855af49150503d8060008114612770576040519150601f19603f3d011682016040523d82523d6000602084013e612775565b606091505b50915091506127868683838761299c565b9695505050505050565b600061279b866118bc565b156127a857506000612830565b60408051602081018890526001600160a01b038088169282019290925290851660608201526080810184905260009060a00160408051601f198184030181528282528051602091820120908301520160405160208183030381529060405280519060200120905061281c83600a5483612a15565b61282a576000915050612830565b60019150505b95945050505050565b612841611207565b6001541561287b576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060000361289c57604051637fcce2a960e01b815260040160405180910390fd5b600155565b60055442600160981b90910467ffffffffffffffff1611806128ce575060065467ffffffffffffffff1642115b156112505760405162b828c960e81b815260040160405180910390fd5b60006128f961010083613b6d565b9050600061290961010084613b81565b6000928352600d60205260409092208054600190931b9092179091555050565b6001600160a01b0381166000908152600c602052604081205481908190819061295490600190613420565b90506000612963604083613b6d565b90506000612972604084613b81565b61297d906004613f06565b6000838152600b60205260409020549298909750919550909350505050565b60608315612a0b578251600003612a04576001600160a01b0385163b612a045760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611635565b50816125fc565b6125fc8383612a2b565b600082612a228584612a55565b14949350505050565b815115612a3b5781518083602001fd5b8060405162461bcd60e51b81526004016116359190613f1d565b600081815b8451811015612a9a57612a8682868381518110612a7957612a79613618565b6020026020010151612aa2565b915080612a928161367c565b915050612a5a565b509392505050565b6000818310612abe5760008281526020849052604090206109eb565b60008381526020839052604090206109eb565b604051806060016040528060001515815260200160006001600160a01b03168152602001612b12604051806040016040528060008152602001606081525090565b905290565b6001600160a01b038116811461120457600080fd5b600060208284031215612b3e57600080fd5b8135612b4981612b17565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612b8957612b89612b50565b60405290565b60405160e0810167ffffffffffffffff81118282101715612b8957612b89612b50565b6040516080810167ffffffffffffffff81118282101715612b8957612b89612b50565b6040516060810167ffffffffffffffff81118282101715612b8957612b89612b50565b60405160c0810167ffffffffffffffff81118282101715612b8957612b89612b50565b604051601f8201601f1916810167ffffffffffffffff81118282101715612c4457612c44612b50565b604052919050565b600067ffffffffffffffff821115612c6657612c66612b50565b5060051b60200190565b600082601f830112612c8157600080fd5b81356020612c96612c9183612c4c565b612c1b565b82815260059290921b84018101918181019086841115612cb557600080fd5b8286015b84811015612cd9578035612ccc81612b17565b8352918301918301612cb9565b509695505050505050565b600067ffffffffffffffff821115612cfe57612cfe612b50565b50601f01601f191660200190565b6000612d1a612c9184612ce4565b9050828152838383011115612d2e57600080fd5b828260208301376000602084830101529392505050565b600082601f830112612d5657600080fd5b6109eb83833560208501612d0c565b600080600060608486031215612d7a57600080fd5b833567ffffffffffffffff80821115612d9257600080fd5b612d9e87838801612c70565b94506020860135915080821115612db457600080fd5b50612dc186828701612d45565b9250506040840135612dd281612b17565b809150509250925092565b67ffffffffffffffff8116811461120457600080fd5b60008060008060808587031215612e0957600080fd5b8435612e1481612ddd565b93506020850135612e2481612ddd565b92506040850135612e3481612ddd565b91506060850135612e4481612ddd565b939692955090935050565b60008060408385031215612e6257600080fd5b823567ffffffffffffffff811115612e7957600080fd5b612e8585828601612d45565b9250506020830135612e9681612b17565b809150509250929050565b60008060408385031215612eb457600080fd5b8235612ebf81612b17565b91506020830135612e9681612b17565b60005b83811015612eea578181015183820152602001612ed2565b50506000910152565b60008151808452612f0b816020860160208601612ecf565b601f01601f19169290920160200192915050565b8281526040602082015260006125fc6040830184612ef3565b600060208284031215612f4a57600080fd5b5035919050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a08401526125fc60c0840182612ef3565b60008060408385031215612fb357600080fd5b82359150602083013567ffffffffffffffff80821115612fd257600080fd5b9084019060408287031215612fe657600080fd5b612fee612b66565b8235815260208301358281111561300457600080fd5b80840193505086601f84011261301957600080fd5b61302887843560208601612d0c565b60208201528093505050509250929050565b6000806020838503121561304d57600080fd5b823567ffffffffffffffff8082111561306557600080fd5b818501915085601f83011261307957600080fd5b81358181111561308857600080fd5b8660208260051b850101111561309d57600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561310457603f198886030184526130f2858351612ef3565b945092850192908501906001016130d6565b5092979650505050505050565b6000806040838503121561312457600080fd5b823567ffffffffffffffff8082111561313c57600080fd5b61314886838701612c70565b935060209150818501358181111561315f57600080fd5b8501601f8101871361317057600080fd5b803561317e612c9182612c4c565b81815260059190911b8201840190848101908983111561319d57600080fd5b8584015b838110156131d5578035868111156131b95760008081fd5b6131c78c8983890101612d45565b8452509186019186016131a1565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156132395761322984835180516001600160a01b03168252602090810151910152565b9284019290850190600101613203565b5091979650505050505050565b6000806020838503121561325957600080fd5b823567ffffffffffffffff8082111561327157600080fd5b818501915085601f83011261328557600080fd5b81358181111561329457600080fd5b8660208260061b850101111561309d57600080fd5b634e487b7160e01b600052602160045260246000fd5b60208101600783106132e157634e487b7160e01b600052602160045260246000fd5b91905290565b600080604083850312156132fa57600080fd5b82359150602083013567ffffffffffffffff81111561331857600080fd5b61332485828601612d45565b9150509250929050565b600080604080848603121561334257600080fd5b833567ffffffffffffffff81111561335957600080fd5b8401601f8101861361336a57600080fd5b8035602061337a612c9183612c4c565b82815260069290921b8301810191818101908984111561339957600080fd5b938201935b838510156133d95785858b0312156133b65760008081fd5b6133be612b66565b8535815283860135848201528252938501939082019061339e565b9997909101359750505050505050565b634e487b7160e01b600052601160045260246000fd5b67ffffffffffffffff818116838216019080821115610cde57610cde6133e9565b818103818111156109ee576109ee6133e9565b600181811c9082168061344757607f821691505b60208210810361346757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156108b057600081815260208120601f850160051c810160208610156134945750805b601f850160051c820191505b81811015612467578281556001016134a0565b815167ffffffffffffffff8111156134cd576134cd612b50565b6134e1816134db8454613433565b8461346d565b602080601f83116001811461351657600084156134fe5750858301515b600019600386901b1c1916600185901b178555612467565b600085815260208120601f198616915b8281101561354557888601518255948401946001909101908401613526565b50858210156135635787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8281526000602060408184015283546040840152600180850160406060860152600081546135a081613433565b80608089015260a0858316600081146135c057600181146135da57613608565b60ff1984168a83015282151560051b8a0182019450613608565b856000528760002060005b848110156136005781548c82018501529088019089016135e5565b8b0183019550505b50929a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261364557600080fd5b83018035915067ffffffffffffffff82111561366057600080fd5b60200191503681900382131561367557600080fd5b9250929050565b60006001820161368e5761368e6133e9565b5060010190565b6000604082840312156136a757600080fd5b6136af612b66565b82356136ba81612b17565b815260208301356136ca81612b17565b60208201529392505050565b805180151581146136e657600080fd5b919050565b80516136e681612ddd565b80516136e681612b17565b600082601f83011261371257600080fd5b81516020613722612c9183612c4c565b82815260059290921b8401810191818101908684111561374157600080fd5b8286015b84811015612cd957805161375881612b17565b8352918301918301613745565b60006020828403121561377757600080fd5b815167ffffffffffffffff8082111561378f57600080fd5b9083019060e082860312156137a357600080fd5b6137ab612b8f565b6137b4836136d6565b81526137c2602084016136d6565b60208201526137d3604084016136eb565b60408201526137e4606084016136eb565b60608201526137f5608084016136eb565b608082015261380660a084016136eb565b60a082015260c08301518281111561381d57600080fd5b61382987828601613701565b60c08301525095945050505050565b808201808211156109ee576109ee6133e9565b60006080828403121561385d57600080fd5b613865612bb2565b90508151815260208083015161387a81612b17565b8282015260408381015190830152606083015167ffffffffffffffff8111156138a257600080fd5b8301601f810185136138b357600080fd5b80516138c1612c9182612c4c565b81815260059190911b820183019083810190878311156138e057600080fd5b928401925b828410156138fe578351825292840192908401906138e5565b6060860152509295945050505050565b6000602080838503121561392157600080fd5b825167ffffffffffffffff8082111561393957600080fd5b818501915085601f83011261394d57600080fd5b815161395b612c9182612c4c565b81815260059190911b8301840190848101908883111561397a57600080fd5b8585015b838110156139b2578051858111156139965760008081fd5b6139a48b89838a010161384b565b84525091860191860161397e565b5098975050505050505050565b6000602082840312156139d157600080fd5b6109eb826136d6565b600082601f8301126139eb57600080fd5b81516139f9612c9182612ce4565b818152846020838601011115613a0e57600080fd5b6125fc826020830160208701612ecf565b600060408284031215613a3157600080fd5b613a39612b66565b905081518152602082015167ffffffffffffffff811115613a5957600080fd5b613a65848285016139da565b60208301525092915050565b600080600060608486031215613a8657600080fd5b8351613a9181612b17565b6020850151909350613aa281612b17565b604085015190925067ffffffffffffffff811115613abf57600080fd5b613acb86828701613a1f565b9150509250925092565b604081526000613ae86040830185612ef3565b90508260208301529392505050565b604081526000613b0a6040830185612ef3565b90506001600160a01b03831660208301529392505050565b606081526000613b356060830186612ef3565b90506001600160a01b038416602083015260ff83166040830152949350505050565b634e487b7160e01b600052601260045260246000fd5b600082613b7c57613b7c613b57565b500490565b600082613b9057613b90613b57565b500690565b600060208284031215613ba757600080fd5b815167ffffffffffffffff811115613bbe57600080fd5b6125fc8482850161384b565b600060208284031215613bdc57600080fd5b8151612b4981612b17565b600080600060608486031215613bfc57600080fd5b8351613c0781612b17565b602085015190935060048110613c1c57600080fd5b604085015190925067ffffffffffffffff80821115613c3a57600080fd5b9085019081870360a0811215613c4f57600080fd5b613c57612b66565b6080821215613c6557600080fd5b613c6d612bd5565b6040831215613c7b57600080fd5b613c83612b66565b92508451613c9081612b17565b80845250602085015160208401528281526040850151602082015260608501516040820152808252506080840151915082821115613ccd57600080fd5b613cd9898386016139da565b6020820152809450505050509250925092565b6000610100613d0f83885180516001600160a01b03168252602090810151910152565b6020870151604084015260408701516060840152613d43608084018780516001600160a01b03168252602090810151910152565b6001600160a01b03851660c08401528060e0840152613d6481840185612ef3565b979650505050505050565b600060208284031215613d8157600080fd5b815167ffffffffffffffff80821115613d9957600080fd5b9083019060c08286031215613dad57600080fd5b613db5612bf8565b825181526020830151613dc781612b17565b60208201526040830151613dda81612b17565b6040820152606083015182811115613df157600080fd5b613dfd87828601613a1f565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b600060208284031215613e3557600080fd5b815167ffffffffffffffff80821115613e4d57600080fd5b9083019060c08286031215613e6157600080fd5b613e69612bf8565b8251815260208301516020820152604083015182811115613e8957600080fd5b613e95878286016139da565b604083015250606083015182811115613ead57600080fd5b613eb987828601613a1f565b606083015250613ecb608084016136f6565b6080820152613edc60a084016136f6565b60a082015295945050505050565b60008251613efc818460208701612ecf565b9190910192915050565b80820281158282048414176109ee576109ee6133e9565b6020815260006109eb6020830184612ef356fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208a95b0307b951395cfd27eda98af0cc178d1827894911647cf1a6c040c4defff64736f6c63430008130033";
