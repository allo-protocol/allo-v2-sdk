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
    readonly name: "splitSignature";
    readonly inputs: readonly [{
        readonly name: "sig";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "r";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "s";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "v";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly stateMutability: "pure";
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
export declare const bytecode = "0x60e06040523480156200001157600080fd5b506040516200461c3803806200461c833981016040819052620000349162000122565b6001600160a01b038316608052604051839083908390839083906200005e90829060200162000204565b60408051601f19818403018152919052805160209091012060a05250506001600160a01b038116620000a35760405163538ba4f960e01b815260040160405180910390fd5b6001600160a01b031660c05250620002399350505050565b6001600160a01b0381168114620000d157600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000107578181015183820152602001620000ed565b50506000910152565b80516200011d81620000bb565b919050565b6000806000606084860312156200013857600080fd5b83516200014581620000bb565b60208501519093506001600160401b03808211156200016357600080fd5b818601915086601f8301126200017857600080fd5b8151818111156200018d576200018d620000d4565b604051601f8201601f19908116603f01168101908382118183101715620001b857620001b8620000d4565b81604052828152896020848701011115620001d257600080fd5b620001e5836020830160208801620000ea565b8096505050505050620001fb6040850162000110565b90509250925092565b602081526000825180602084015262000225816040850160208701620000ea565b601f01601f19169190910160400192915050565b60805160a05160c0516143906200028c600039600081816105410152611f27015260006103f201526000818161030601528181610fdf0152818161117a015281816119b2015261257b01526143906000f3fe6080604052600436106102895760003560e01c806373af345311610153578063df868ed3116100cb578063edd146cc1161007f578063f31db3d111610064578063f31db3d1146107ab578063f5b0dfb7146107cb578063f6f25891146107eb57600080fd5b8063edd146cc14610778578063ef2920fc1461079857600080fd5b8063e744092e116100b0578063e744092e14610705578063e7efcfc214610735578063eb11af931461074b57600080fd5b8063df868ed3146106c8578063dff7d2c7146106dd57600080fd5b8063a7bb580311610122578063b2b878d011610107578063b2b878d014610654578063cb0e85a614610681578063d2e17f59146106a057600080fd5b8063a7bb5803146105e9578063ac9650d81461062757600080fd5b806373af34531461056357806395355b3b146105835780639af5c09d14610599578063a0cf0aea146105c157600080fd5b806342fda9c71161020157806357089739116101b55780635f1b55f31161019a5780635f1b55f3146104e257806362812a39146105025780636afdd8501461052f57600080fd5b806357089739146104a557806359a3977b146104bf57600080fd5b80634ab4ba42116101e65780634ab4ba42146104505780634d31d0871461046557806351cff8d91461048557600080fd5b806342fda9c7146103e35780634533d6781461041657600080fd5b806321755088116102585780632d52eff21161023d5780632d52eff2146103a15780632eb4a7ab146103b857806338fff2d0146103ce57600080fd5b8063217550881461035e5780632bbe0cae1461038e57600080fd5b806301fc1c64146102955780630a6f0ee9146102d557806315cc481e146102f75780632143e92f1461033e57600080fd5b3661029057005b600080fd5b3480156102a157600080fd5b506102c26102b0366004612e5a565b600c6020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102e157600080fd5b506102f56102f03660046130ab565b610818565b005b34801561030357600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020016102cc565b34801561034a57600080fd5b506102f5610359366004613139565b610838565b34801561036a57600080fd5b5060055461037e9062010000900460ff1681565b60405190151581526020016102cc565b61032661039c366004613195565b610952565b3480156103ad57600080fd5b50600a54151561037e565b3480156103c457600080fd5b506102c2600a5481565b3480156103da57600080fd5b506001546102c2565b3480156103ef57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102c2565b34801561042257600080fd5b506006546104379067ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016102cc565b34801561045c57600080fd5b506002546102c2565b34801561047157600080fd5b5061037e610480366004612e5a565b610977565b34801561049157600080fd5b506102f56104a0366004612e5a565b610980565b3480156104b157600080fd5b5060055461037e9060ff1681565b3480156104cb57600080fd5b506104d46109fc565b6040516102cc929190613237565b3480156104ee57600080fd5b5061037e6104fd366004613250565b610a93565b34801561050e57600080fd5b5061052261051d366004612e5a565b610a9e565b6040516102cc9190613269565b34801561053b57600080fd5b506103267f000000000000000000000000000000000000000000000000000000000000000081565b34801561056f57600080fd5b506102f561057e3660046132b8565b610aaf565b34801561058f57600080fd5b506102c260085481565b3480156105a557600080fd5b50600554610437906301000000900467ffffffffffffffff1681565b3480156105cd57600080fd5b5061032673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b3480156105f557600080fd5b50610609610604366004613356565b610b51565b60408051938452602084019290925260ff16908201526060016102cc565b34801561063357600080fd5b5061064761064236600461338b565b610c1c565b6040516102cc9190613400565b34801561066057600080fd5b5061067461066f366004613462565b610d11565b6040516102cc9190613542565b34801561068d57600080fd5b5060055461037e90610100900460ff1681565b3480156106ac57600080fd5b5060055461043790600160981b900467ffffffffffffffff1681565b3480156106d457600080fd5b5061037e610e29565b3480156106e957600080fd5b5060055461043790600160581b900467ffffffffffffffff1681565b34801561071157600080fd5b5061037e610720366004612e5a565b600e6020526000908152604090205460ff1681565b34801561074157600080fd5b506102c260075481565b34801561075757600080fd5b5061076b610766366004612e5a565b610e38565b6040516102cc91906135b8565b34801561078457600080fd5b506102f56107933660046135e0565b610e43565b6102f56107a6366004613195565b610e9e565b3480156107b757600080fd5b506102f56107c6366004613627565b610ec6565b3480156107d757600080fd5b506102f56107e6366004613250565b610faa565b3480156107f757600080fd5b506102c2610806366004613250565b600b6020526000908152604090205481565b610820610fd4565b61082861101f565b61083383838361105b565b505050565b3361084281611137565b61084e85858585611202565b6005805472ffffffffffffffffffffffffffffffff0000001916630100000067ffffffffffffffff888116820272ffffffffffffffff0000000000000000000000191692909217600160581b8884168102919091177fffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffff16600160981b888516810291909117948590556006805467ffffffffffffffff191688861690811790915560408051948704861685529286048516602085015294049092169181019190915260608101919091523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a15050505050565b600061095c610fd4565b61096461101f565b61096e8383611291565b90505b92915050565b60006001610971565b3361098a81611137565b6006546109a49067ffffffffffffffff1662278d00613705565b67ffffffffffffffff1642116109cd57604051637fcce2a960e01b815260040160405180910390fd5b60006109d98330611606565b90506000806109e88284613726565b90506109f585338361164f565b5050505050565b6003805460048054919291610a1090613739565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3c90613739565b8015610a895780601f10610a5e57610100808354040283529160200191610a89565b820191906000526020600020905b815481529060010190602001808311610a6c57829003601f168201915b5050505050905082565b600061097182611689565b610aa6612dff565b610971826116ca565b610ab76117c3565b33610ac181611137565b60055462010000900460ff1615610aeb57604051637fcce2a960e01b815260040160405180910390fd5b600a839055815160039081556020830151839190600490610b0c90826137b9565b509050507fdc7180ca4affc84269428ed20ef950e745126f11691b010c4a7d49458421008f600a546003604051610b44929190613879565b60405180910390a1505050565b60008060008351604103610b9c5783806020019051810190610b73919061391e565b8551919450925084906040908110610b8d57610b8d613942565b016020015160f81c9050610c15565b8351604003610bfc57600084806020019051810190610bbb919061391e565b9094507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811693509050610bf460ff82901c601b613958565b915050610c15565b604051637fcce2a960e01b815260040160405180910390fd5b9193909250565b60608167ffffffffffffffff811115610c3757610c37612e7e565b604051908082528060200260200182016040528015610c6a57816020015b6060815260200190600190039081610c555790505b50905060005b82811015610d0a57610cda30858584818110610c8e57610c8e613942565b9050602002810190610ca09190613971565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061180892505050565b828281518110610cec57610cec613942565b60200260200101819052508080610d02906139bf565b915050610c70565b5092915050565b81518151606091908114610d51576040517f7b49805600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008167ffffffffffffffff811115610d6c57610d6c612e7e565b604051908082528060200260200182016040528015610db157816020015b6040805180820190915260008082526020820152815260200190600190039081610d8a5790505b50905060005b82811015610e2057610dfb868281518110610dd457610dd4613942565b6020026020010151868381518110610dee57610dee613942565b602002602001015161182d565b828281518110610e0d57610e0d613942565b6020908102919091010152600101610db7565b50949350505050565b6000610e336118e8565b905090565b600061097182611933565b610e4b610fd4565b600081806020019051810190610e619190613a72565b9050610e6d8382611952565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610b44929190613237565b610ea6610fd4565b610eae61101f565b610eb88282611c47565b610ec28282611e1d565b5050565b610ece6124cd565b33610ed881611137565b6008548214610efa57604051637fcce2a960e01b815260040160405180910390fd5b60005b8351811015610fa4576000848281518110610f1a57610f1a613942565b60200260200101516000015190506000858381518110610f3c57610f3c613942565b6020908102919091018101518101516000848152600b83526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a25050600101610efd565b50505050565b610fb2610fd4565b8060026000828254610fc49190613b45565b90915550610fd190508181565b50565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461101d5760405163075fd2b160e01b815260040160405180910390fd5b565b60015460000361101d576040517f3da3f98c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061106581611137565b600a5460000361108857604051637fcce2a960e01b815260040160405180910390fd5b60055462010000900460ff166110aa576005805462ff00001916620100001790555b6000838060200190518101906110c09190613c2d565b805190915060005b818110156110fa576110f28382815181106110e5576110e5613942565b60200260200101516124f9565b6001016110c8565b506040516001600160a01b038516907f7ec3272052827f7b50d9e84f98172cbb80c112df1e377c5b97ea77f1812db8d990600090a2505050505050565b6001546040517f29e40d4b00000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa1580156111c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e59190613ce9565b610fd15760405163075fd2b160e01b815260040160405180910390fd5b8267ffffffffffffffff168467ffffffffffffffff16118061123757508167ffffffffffffffff168467ffffffffffffffff16115b8061125557508067ffffffffffffffff168267ffffffffffffffff16115b8061127357508067ffffffffffffffff168367ffffffffffffffff16115b15610fa457604051637fcce2a960e01b815260040160405180910390fd5b600061129b6126a8565b60008060006112bd604051806040016040528060008152602001606081525090565b60055460ff161561130f57868060200190518101906112dc9190613dab565b919650935090506112ed8587612713565b61130a5760405163075fd2b160e01b815260040160405180910390fd5b61137a565b868060200190518101906113239190613dab565b6001600160a01b038316151596509094509092509050836113445785611346565b815b945083801561135c575061135a8587612713565b155b1561137a5760405163075fd2b160e01b815260040160405180910390fd5b600554610100900460ff16801561139d5750602081015151158061139d57508051155b156113d4576040517fc19e07c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b03831661140b5760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b038086166000908152600f602090815260409091208054928616610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff90931692909217825582516001830190815590830151839190600284019061147990826137b9565b505060055460ff16905061148d5784611490565b60015b815460ff19169015151781556001600160a01b0386166000908152600c6020526040812054900361156c576008546001600160a01b0387166000908152600c60205260409020556114e68660015b60ff1661283d565b6000886008546040516020016114fd929190613e0f565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a604051611549929190613e31565b60405180910390a260088054906000611561836139bf565b9190505550506115fb565b600061157787612870565b905060011960ff821601611595576115908760016114de565b6115ac565b60021960ff8216016115ac576115ac8760046114de565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a6115e28b612870565b6040516115f193929190613e5c565b60405180910390a2505b505050505092915050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161163e57506001600160a01b03811631610971565b61164883836128b1565b9050610971565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161167e5761083382826128e6565b610833838383612902565b60008061169861010084613ea7565b905060006116a861010085613ebb565b6000928352600d602052604090922054600190921b9182169091149392505050565b6116d2612dff565b6001600160a01b038083166000908152600f60209081526040918290208251606081018452815460ff81161515825261010090049094168483015282518084018452600182018054825260028301805493958701949293919284019161173790613739565b80601f016020809104026020016040519081016040528092919081815260200182805461176390613739565b80156117b05780601f10611785576101008083540402835291602001916117b0565b820191906000526020600020905b81548152906001019060200180831161179357829003601f168201915b5050509190925250505090525092915050565b60065467ffffffffffffffff16421161101d576040517f8a879da200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606061096e838360405180606001604052806027815260200161433460279139612951565b60408051808201909152600080825260208201526000828060200190518101906118579190613ecf565b80516020820151604083015160608401519394509192909190600061187b846116ca565b60200151905061188e85858386866129c9565b156118be576040518060400160405280826001600160a01b03168152602001848152509650505050505050610971565b604080518082019091526001600160a01b0390911681526000602082015298975050505050505050565b60055460009042630100000090910467ffffffffffffffff16118015906119225750600554600160581b900467ffffffffffffffff164211155b1561192d5750600190565b50600090565b600061193e82612870565b60ff166006811115610971576109716135a2565b61195b82612a72565b80516005805460208085015161ffff1990921693151561ff0019169390931761010091151591909102179055604080517f5ab1bd5300000000000000000000000000000000000000000000000000000000815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa158015611a01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a259190613f04565b600980547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790556040810151600580546060840151608085015172ffffffffffffffffffffffffffffffff00000019909216630100000067ffffffffffffffff958616810272ffffffffffffffff0000000000000000000000191691909117600160581b9286168302177fffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffff16600160981b9386168402179384905560a08601516006805467ffffffffffffffff191691871691821790556001600855611b2c959185048216949283048216939092041690611202565b600554600654604080516301000000840467ffffffffffffffff9081168252600160581b850481166020830152600160981b909404841681830152929091166060830152336080830152517fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39181900360a00190a160c0810151516000819003611be65760008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c805460ff191660011790555b60005b81811015610fa4576001600e60008560c001518481518110611c0d57611c0d613942565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101611be9565b611c4f612ada565b60008083806020019051810190611c669190613f21565b805151602081015190519395509093509190506002611c8485612870565b60ff166006811115611c9857611c986135a2565b6006811115611ca957611ca96135a2565b14611cd25760405163f4a513b960e01b81526001600160a01b0385166004820152602401611402565b6001600160a01b0381166000908152600e602052604090205460ff16158015611d26575060008052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5460ff16155b15611d4457604051637fcce2a960e01b815260040160405180910390fd5b600034118015611d7157506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14155b80611da357506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015611da35750813414155b15611dc157604051637fcce2a960e01b815260040160405180910390fd5b604080518381526001600160a01b038381166020830152878116828401523260608301529151918616917fdc9d40760308557d1377c2fe7c984ace9eb02d23b60a5f6f26be62c52431bc389181900360800190a2505050505050565b600080600084806020019051810190611e369190613f21565b80515180516020918201516001600160a01b038087166000908152600f909452604084205496995094975092955093919261010090920490911690856003811115611e8357611e836135a2565b03611ec457611ebe8360405180606001604052808a6001600160a01b03168152602001846001600160a01b0316815260200185815250612b24565b506124c3565b6003856003811115611ed857611ed86135a2565b03611f985783516040805180820182526001600160a01b038481168252602080830187905288015192517f30f28b7a0000000000000000000000000000000000000000000000000000000081527f0000000000000000000000000000000000000000000000000000000000000000909116936330f28b7a93611f619391928d919060040161402f565b600060405180830381600087803b158015611f7b57600080fd5b505af1158015611f8f573d6000803e3d6000fd5b505050506124c3565b6001856003811115611fac57611fac6135a2565b03612214576000806000611fc38760200151610b51565b895160409081015190517fd505accf0000000000000000000000000000000000000000000000000000000081526001600160a01b038f81166004830152306024830152604482018b9052606482019290925260ff8316608482015260a4810185905260c48101849052939650919450925087169063d505accf9060e401600060405180830381600087803b15801561205a57600080fd5b505af192505050801561206b575060015b612199576120776140b2565b806308c379a003612130575061208b6140cd565b806120965750612132565b604051636eb1769f60e11b81526001600160a01b038c8116600483015230602483015287919089169063dd62ed3e906044015b602060405180830381865afa1580156120e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061210a9190614157565b101561212a578060405162461bcd60e51b81526004016114029190614170565b50612199565b505b3d80801561215c576040519150601f19603f3d011682016040523d82523d6000602084013e612161565b606091505b50604051636eb1769f60e11b81526001600160a01b038c8116600483015230602483015287919089169063dd62ed3e906044016120c9565b6040516323b872dd60e01b81526001600160a01b038b811660048301528581166024830152604482018790528716906323b872dd906064016020604051808303816000875af11580156121f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8f9190613ce9565b6002856003811115612228576122286135a2565b036124c357600080600061223f8760200151610b51565b8951602081015160409182015191517f8fcbaf0c0000000000000000000000000000000000000000000000000000000081529497509295509093506001600160a01b03891692638fcbaf0c926122ea928f923092919060019089908c908c906004016001600160a01b039889168152969097166020870152604086019490945260608501929092521515608084015260ff1660a083015260c082015260e08101919091526101000190565b600060405180830381600087803b15801561230457600080fd5b505af1925050508015612315575060015b612443576123216140b2565b806308c379a0036123da57506123356140cd565b8061234057506123dc565b604051636eb1769f60e11b81526001600160a01b038c8116600483015230602483015287919089169063dd62ed3e906044015b602060405180830381865afa158015612390573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123b49190614157565b10156123d4578060405162461bcd60e51b81526004016114029190614170565b50612443565b505b3d808015612406576040519150601f19603f3d011682016040523d82523d6000602084013e61240b565b606091505b50604051636eb1769f60e11b81526001600160a01b038c8116600483015230602483015287919089169063dd62ed3e90604401612373565b6040516323b872dd60e01b81526001600160a01b038b811660048301528581166024830152604482018790528716906323b872dd906064016020604051808303816000875af115801561249a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124be9190613ce9565b505050505b5050505050505050565b60065467ffffffffffffffff1642111561101d5760405162b828c960e81b815260040160405180910390fd5b805160208083015160408085015160608601516001600160a01b038085166000908152600f90965292909420549293909290916101009091041661254085858386866129c9565b1561267c576001546040517f068bcd8d0000000000000000000000000000000000000000000000000000000081526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d916125b29160040190815260200190565b600060405180830381865afa1580156125cf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526125f79190810190614183565b905061260286612bbc565b83600260008282546126149190613726565b9091555050604081015161262990838661164f565b60408082015181518681526001600160a01b038581166020830152808916939216917fa6b66f665010d2f7435f110111aaa34b56564074f66081bef606d996fc8caa6f910160405180910390a3506126a0565b60405163f4a513b960e01b81526001600160a01b0385166004820152602401611402565b505050505050565b60055442630100000090910467ffffffffffffffff1611806126dc5750600554600160581b900467ffffffffffffffff1642115b1561101d576040517fb609ed5a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6009546040517fdd93da430000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa15801561277a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526127a29190810190614239565b60095481516040517f5e8a791500000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa158015612811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128359190613ce9565b949350505050565b600080600061284b85612bfa565b6000928352600b602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b0381166000908152600c6020526040812054810361289757506000919050565b6000806128a384612bfa565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af1610ec25763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716612947576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b03168560405161296e9190614300565b600060405180830381855af49150503d80600081146129a9576040519150601f19603f3d011682016040523d82523d6000602084013e6129ae565b606091505b50915091506129bf86838387612c6d565b9695505050505050565b60006129d486611689565b156129e157506000612a69565b60408051602081018890526001600160a01b038088169282019290925290851660608201526080810184905260009060a00160408051601f1981840301815282825280516020918201209083015201604051602081830303815290604052805190602001209050612a5583600a5483612ce6565b612a63576000915050612a69565b60019150505b95945050505050565b612a7a610fd4565b60015415612ab4576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003612ad557604051637fcce2a960e01b815260040160405180910390fd5b600155565b60055442600160981b90910467ffffffffffffffff161180612b07575060065467ffffffffffffffff1642115b1561101d5760405162b828c960e81b815260040160405180910390fd5b604081015160009073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03851601612b9e5780341015612b8b576040517f74c5672b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612b998360200151826128e6565b612bb2565b612bb2848460000151856020015184612cfc565b5060019392505050565b6000612bca61010083613ea7565b90506000612bda61010084613ebb565b6000928352600d60205260409092208054600190931b9092179091555050565b6001600160a01b0381166000908152600c6020526040812054819081908190612c2590600190613726565b90506000612c34604083613ea7565b90506000612c43604084613ebb565b612c4e90600461431c565b6000838152600b60205260409020549298909750919550909350505050565b60608315612cdc578251600003612cd5576001600160a01b0385163b612cd55760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611402565b5081612835565b6128358383612d59565b600082612cf38584612d83565b14949350505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716612d4b57637939f4246000526004601cfd5b600060605260405250505050565b815115612d695781518083602001fd5b8060405162461bcd60e51b81526004016114029190614170565b600081815b8451811015612dc857612db482868381518110612da757612da7613942565b6020026020010151612dd0565b915080612dc0816139bf565b915050612d88565b509392505050565b6000818310612dec57600082815260208490526040902061096e565b600083815260208390526040902061096e565b604051806060016040528060001515815260200160006001600160a01b03168152602001612e40604051806040016040528060008152602001606081525090565b905290565b6001600160a01b0381168114610fd157600080fd5b600060208284031215612e6c57600080fd5b8135612e7781612e45565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6040810181811067ffffffffffffffff82111715612eb457612eb4612e7e565b60405250565b6080810181811067ffffffffffffffff82111715612eb457612eb4612e7e565b6060810181811067ffffffffffffffff82111715612eb457612eb4612e7e565b60c0810181811067ffffffffffffffff82111715612eb457612eb4612e7e565b601f8201601f1916810167ffffffffffffffff81118282101715612f4057612f40612e7e565b6040525050565b60405160e0810167ffffffffffffffff81118282101715612f6a57612f6a612e7e565b60405290565b604051612f7c81612efa565b90565b600067ffffffffffffffff821115612f9957612f99612e7e565b5060051b60200190565b600082601f830112612fb457600080fd5b81356020612fc182612f7f565b604051612fce8282612f1a565b83815260059390931b8501820192828101915086841115612fee57600080fd5b8286015b8481101561301257803561300581612e45565b8352918301918301612ff2565b509695505050505050565b600067ffffffffffffffff82111561303757613037612e7e565b50601f01601f191660200190565b60006130508361301d565b60405161305d8282612f1a565b80925084815285858501111561307257600080fd5b8484602083013760006020868301015250509392505050565b600082601f83011261309c57600080fd5b61096e83833560208501613045565b6000806000606084860312156130c057600080fd5b833567ffffffffffffffff808211156130d857600080fd5b6130e487838801612fa3565b945060208601359150808211156130fa57600080fd5b506131078682870161308b565b925050604084013561311881612e45565b809150509250925092565b67ffffffffffffffff81168114610fd157600080fd5b6000806000806080858703121561314f57600080fd5b843561315a81613123565b9350602085013561316a81613123565b9250604085013561317a81613123565b9150606085013561318a81613123565b939692955090935050565b600080604083850312156131a857600080fd5b823567ffffffffffffffff8111156131bf57600080fd5b6131cb8582860161308b565b92505060208301356131dc81612e45565b809150509250929050565b60005b838110156132025781810151838201526020016131ea565b50506000910152565b600081518084526132238160208601602086016131e7565b601f01601f19169290920160200192915050565b828152604060208201526000612835604083018461320b565b60006020828403121561326257600080fd5b5035919050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a084015261283560c084018261320b565b600080604083850312156132cb57600080fd5b82359150602083013567ffffffffffffffff808211156132ea57600080fd5b90840190604082870312156132fe57600080fd5b60405161330a81612e94565b8235815260208301358281111561332057600080fd5b80840193505086601f84011261333557600080fd5b61334487843560208601613045565b60208201528093505050509250929050565b60006020828403121561336857600080fd5b813567ffffffffffffffff81111561337f57600080fd5b6128358482850161308b565b6000806020838503121561339e57600080fd5b823567ffffffffffffffff808211156133b657600080fd5b818501915085601f8301126133ca57600080fd5b8135818111156133d957600080fd5b8660208260051b85010111156133ee57600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561345557603f1988860301845261344385835161320b565b94509285019290850190600101613427565b5092979650505050505050565b6000806040838503121561347557600080fd5b823567ffffffffffffffff8082111561348d57600080fd5b61349986838701612fa3565b93506020915081850135818111156134b057600080fd5b8501601f810187136134c157600080fd5b80356134cc81612f7f565b6040516134d98282612f1a565b82815260059290921b83018501918581019150898311156134f957600080fd5b8584015b83811015613531578035868111156135155760008081fd5b6135238c898389010161308b565b8452509186019186016134fd565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156135955761358584835180516001600160a01b03168252602090810151910152565b928401929085019060010161355f565b5091979650505050505050565b634e487b7160e01b600052602160045260246000fd5b60208101600783106135da57634e487b7160e01b600052602160045260246000fd5b91905290565b600080604083850312156135f357600080fd5b82359150602083013567ffffffffffffffff81111561361157600080fd5b61361d8582860161308b565b9150509250929050565b600080604080848603121561363b57600080fd5b833567ffffffffffffffff81111561365257600080fd5b8401601f8101861361366357600080fd5b8035602061367082612f7f565b845161367c8282612f1a565b83815260069390931b840182019282810191508984111561369c57600080fd5b938201935b838510156136df5785858b0312156136b95760008081fd5b85516136c481612e94565b853581528386013584820152825293850193908201906136a1565b9997909101359750505050505050565b634e487b7160e01b600052601160045260246000fd5b67ffffffffffffffff818116838216019080821115610d0a57610d0a6136ef565b81810381811115610971576109716136ef565b600181811c9082168061374d57607f821691505b60208210810361376d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561083357600081815260208120601f850160051c8101602086101561379a5750805b601f850160051c820191505b818110156126a0578281556001016137a6565b815167ffffffffffffffff8111156137d3576137d3612e7e565b6137e7816137e18454613739565b84613773565b602080601f83116001811461381c57600084156138045750858301515b600019600386901b1c1916600185901b1785556126a0565b600085815260208120601f198616915b8281101561384b5788860151825594840194600190910190840161382c565b50858210156138695787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8281526000602060408184015283546040840152600180850160406060860152600081546138a681613739565b80608089015260a0858316600081146138c657600181146138e05761390e565b60ff1984168a83015282151560051b8a018201945061390e565b856000528760002060005b848110156139065781548c82018501529088019089016138eb565b8b0183019550505b50929a9950505050505050505050565b6000806040838503121561393157600080fd5b505080516020909101519092909150565b634e487b7160e01b600052603260045260246000fd5b60ff8181168382160190811115610971576109716136ef565b6000808335601e1984360301811261398857600080fd5b83018035915067ffffffffffffffff8211156139a357600080fd5b6020019150368190038213156139b857600080fd5b9250929050565b6000600182016139d1576139d16136ef565b5060010190565b805180151581146139e857600080fd5b919050565b80516139e881613123565b80516139e881612e45565b600082601f830112613a1457600080fd5b81516020613a2182612f7f565b604051613a2e8282612f1a565b83815260059390931b8501820192828101915086841115613a4e57600080fd5b8286015b84811015613012578051613a6581612e45565b8352918301918301613a52565b600060208284031215613a8457600080fd5b815167ffffffffffffffff80821115613a9c57600080fd5b9083019060e08286031215613ab057600080fd5b613ab8612f47565b613ac1836139d8565b8152613acf602084016139d8565b6020820152613ae0604084016139ed565b6040820152613af1606084016139ed565b6060820152613b02608084016139ed565b6080820152613b1360a084016139ed565b60a082015260c083015182811115613b2a57600080fd5b613b3687828601613a03565b60c08301525095945050505050565b80820180821115610971576109716136ef565b600060808284031215613b6a57600080fd5b604051613b7681612eba565b80915082518152602080840151613b8c81612e45565b8282015260408481015190830152606084015167ffffffffffffffff811115613bb457600080fd5b8401601f81018613613bc557600080fd5b8051613bd081612f7f565b604051613bdd8282612f1a565b82815260059290921b8301840191848101915088831115613bfd57600080fd5b928401925b82841015613c1b57835182529284019290840190613c02565b80606087015250505050505092915050565b60006020808385031215613c4057600080fd5b825167ffffffffffffffff80821115613c5857600080fd5b818501915085601f830112613c6c57600080fd5b8151613c7781612f7f565b604051613c848282612f1a565b82815260059290921b8401850191858101915088831115613ca457600080fd5b8585015b83811015613cdc57805185811115613cc05760008081fd5b613cce8b89838a0101613b58565b845250918601918601613ca8565b5098975050505050505050565b600060208284031215613cfb57600080fd5b61096e826139d8565b600082601f830112613d1557600080fd5b8151613d208161301d565b604051613d2d8282612f1a565b828152856020848701011115613d4257600080fd5b612a698360208301602088016131e7565b600060408284031215613d6557600080fd5b604051613d7181612e94565b80915082518152602083015167ffffffffffffffff811115613d9257600080fd5b613d9e85828601613d04565b6020830152505092915050565b600080600060608486031215613dc057600080fd5b8351613dcb81612e45565b6020850151909350613ddc81612e45565b604085015190925067ffffffffffffffff811115613df957600080fd5b613e0586828701613d53565b9150509250925092565b604081526000613e22604083018561320b565b90508260208301529392505050565b604081526000613e44604083018561320b565b90506001600160a01b03831660208301529392505050565b606081526000613e6f606083018661320b565b90506001600160a01b038416602083015260ff83166040830152949350505050565b634e487b7160e01b600052601260045260246000fd5b600082613eb657613eb6613e91565b500490565b600082613eca57613eca613e91565b500690565b600060208284031215613ee157600080fd5b815167ffffffffffffffff811115613ef857600080fd5b61283584828501613b58565b600060208284031215613f1657600080fd5b8151612e7781612e45565b600080600060608486031215613f3657600080fd5b8351613f4181612e45565b602085015190935060048110613f5657600080fd5b8092505060408085015167ffffffffffffffff80821115613f7657600080fd5b9086019081880360a0811215613f8b57600080fd5b8351613f9681612e94565b6080821215613fa457600080fd5b8451613faf81612eda565b85831215613fbc57600080fd5b85519250613fc983612e94565b8451613fd481612e45565b808452506020850151602084015282815285850151602082015260608501518682015280825250608084015194508285111561400f57600080fd5b61401b8a868601613d04565b602082015280955050505050509250925092565b600061010061405283885180516001600160a01b03168252602090810151910152565b6020870151604084015260408701516060840152614086608084018780516001600160a01b03168252602090810151910152565b6001600160a01b03851660c08401528060e08401526140a78184018561320b565b979650505050505050565b600060033d1115612f7c5760046000803e5060005160e01c90565b600060443d10156140db5790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561410b57505050505090565b82850191508151818111156141235750505050505090565b843d870101602082850101111561413d5750505050505090565b61414c60208286010187612f1a565b509095945050505050565b60006020828403121561416957600080fd5b5051919050565b60208152600061096e602083018461320b565b60006020828403121561419557600080fd5b815167ffffffffffffffff808211156141ad57600080fd5b9083019060c082860312156141c157600080fd5b6040516141cd81612efa565b8251815260208301516141df81612e45565b60208201526141f0604084016139f8565b604082015260608301518281111561420757600080fd5b61421387828601613d53565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b60006020828403121561424b57600080fd5b815167ffffffffffffffff8082111561426357600080fd5b9083019060c0828603121561427757600080fd5b61427f612f70565b825181526020830151602082015260408301518281111561429f57600080fd5b6142ab87828601613d04565b6040830152506060830151828111156142c357600080fd5b6142cf87828601613d53565b6060830152506142e1608084016139f8565b60808201526142f260a084016139f8565b60a082015295945050505050565b600082516143128184602087016131e7565b9190910192915050565b8082028115828204841417610971576109716136ef56fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122080b2a8dec1773f611746ff2cf32e562a9adfaaa1901b0e6cfbbca80cc33dcaa364736f6c63430008130033";
