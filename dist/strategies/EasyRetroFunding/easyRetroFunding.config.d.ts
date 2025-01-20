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
        readonly internalType: "struct EasyRetroFundingStrategy.Recipient";
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
    readonly name: "poolEndTime";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "poolStartTime";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
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
        readonly internalType: "struct EasyRetroFundingStrategy.ApplicationStatus[]";
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
    readonly name: "updateDistribution";
    readonly inputs: readonly [{
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
        readonly name: "_poolStartTime";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "_poolEndTime";
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
        readonly name: "poolStartTime";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }, {
        readonly name: "poolEndTime";
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
    readonly name: "POOL_NOT_ENDED";
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
export declare const bytecode = "0x60c06040523480156200001157600080fd5b50604051620033cd380380620033cd8339810160408190526200003491620000ba565b6001600160a01b038216608052604051829082906200005890829060200162000195565b60408051601f19818403018152919052805160209091012060a05250620001ca92505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b157818101518382015260200162000097565b50506000910152565b60008060408385031215620000ce57600080fd5b82516001600160a01b0381168114620000e657600080fd5b60208401519092506001600160401b03808211156200010457600080fd5b818501915085601f8301126200011957600080fd5b8151818111156200012e576200012e6200007e565b604051601f8201601f19908116603f011681019083821181831017156200015957620001596200007e565b816040528281528860208487010111156200017357600080fd5b6200018683602083016020880162000094565b80955050505050509250929050565b6020815260008251806020840152620001b681604085016020870162000094565b601f01601f19169190910160400192915050565b60805160a0516131c16200020c600039600061035301526000818161027f01528181610dee01528181610fcd015281816117f50152611aaa01526131c16000f3fe6080604052600436106102025760003560e01c806362812a391161011d578063cfb35e87116100b0578063edd146cc1161007f578063f31db3d111610064578063f31db3d114610654578063f5b0dfb714610674578063f6f258911461069457600080fd5b8063edd146cc14610621578063ef2920fc1461064157600080fd5b8063cfb35e8714610597578063df868ed3146105b7578063dff7d2c7146105cc578063eb11af93146105f457600080fd5b8063a0cf0aea116100ec578063a0cf0aea146104f6578063ac9650d81461051e578063b2b878d01461054b578063cb0e85a61461057857600080fd5b806362812a391461046a5780636e271dd51461049757806395355b3b146104b85780639af5c09d146104ce57600080fd5b806342fda9c711610195578063570897391161016457806357089739146103cc57806359a3977b146103e65780635f1b55f3146104095780635f96dc111461042957600080fd5b806342fda9c7146103445780634ab4ba42146103775780634d31d0871461038c57806351cff8d9146103ac57600080fd5b806321755088116101d157806321755088146102d75780632bbe0cae146103075780632d52eff21461031a57806338fff2d01461032f57600080fd5b806301fc1c641461020e5780630a6f0ee91461024e57806315cc481e146102705780632143e92f146102b757600080fd5b3661020957005b600080fd5b34801561021a57600080fd5b5061023b610229366004612109565b600a6020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561025a57600080fd5b5061026e6102693660046122d9565b6106c1565b005b34801561027c57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b039091168152602001610245565b3480156102c357600080fd5b5061026e6102d2366004612367565b6106e1565b3480156102e357600080fd5b506005546102f79062010000900460ff1681565b6040519015158152602001610245565b61029f6103153660046123c3565b6107fb565b34801561032657600080fd5b506102f7610820565b34801561033b57600080fd5b5060015461023b565b34801561035057600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061023b565b34801561038357600080fd5b5060025461023b565b34801561039857600080fd5b506102f76103a7366004612109565b61086f565b3480156103b857600080fd5b5061026e6103c7366004612109565b610877565b3480156103d857600080fd5b506005546102f79060ff1681565b3480156103f257600080fd5b506103fb6108dd565b604051610245929190612465565b34801561041557600080fd5b506102f761042436600461247e565b610974565b34801561043557600080fd5b5060055461045190600160981b900467ffffffffffffffff1681565b60405167ffffffffffffffff9091168152602001610245565b34801561047657600080fd5b5061048a610485366004612109565b61097f565b6040516102459190612497565b3480156104a357600080fd5b506006546104519067ffffffffffffffff1681565b3480156104c457600080fd5b5061023b60075481565b3480156104da57600080fd5b50600554610451906301000000900467ffffffffffffffff1681565b34801561050257600080fd5b5061029f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561052a57600080fd5b5061053e6105393660046124e6565b610990565b604051610245919061255b565b34801561055757600080fd5b5061056b6105663660046125bd565b610a85565b6040516102459190612692565b34801561058457600080fd5b506005546102f790610100900460ff1681565b3480156105a357600080fd5b5061026e6105b23660046126ea565b610b9d565b3480156105c357600080fd5b506102f7610c35565b3480156105d857600080fd5b5060055461045190600160581b900467ffffffffffffffff1681565b34801561060057600080fd5b5061061461060f366004612109565b610c44565b604051610245919061278e565b34801561062d57600080fd5b5061026e61063c3660046127b6565b610c4f565b61026e61064f3660046123c3565b610cb7565b34801561066057600080fd5b5061026e61066f3660046127fd565b610cd5565b34801561068057600080fd5b5061026e61068f36600461247e565b610db9565b3480156106a057600080fd5b5061023b6106af36600461247e565b60096020526000908152604090205481565b6106c9610de3565b6106d1610e2e565b6106dc838383610e6a565b505050565b336106eb81610f8a565b6106f785858585611055565b6005805472ffffffffffffffffffffffffffffffff0000001916630100000067ffffffffffffffff888116820272ffffffffffffffff0000000000000000000000191692909217600160581b8884168102919091177fffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffff16600160981b888516810291909117948590556006805467ffffffffffffffff191688861690811790915560408051948704861685529286048516602085015294049092169181019190915260608101919091523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a15050505050565b6000610805610de3565b61080d610e2e565b61081783836110e4565b90505b92915050565b6040805160208101825260009081905290517fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47090610860906004906128f2565b60405180910390201415905090565b60008061081a565b3361088181610f8a565b60065461089b9067ffffffffffffffff1662278d0061297e565b67ffffffffffffffff1642116108c457604051637fcce2a960e01b815260040160405180910390fd5b60006108d08330611459565b90506106dc8333836114a2565b60038054600480549192916108f1906128b8565b80601f016020809104026020016040519081016040528092919081815260200182805461091d906128b8565b801561096a5780601f1061093f5761010080835404028352916020019161096a565b820191906000526020600020905b81548152906001019060200180831161094d57829003601f168201915b5050505050905082565b600061081a826114dc565b6109876120ae565b61081a8261151d565b60608167ffffffffffffffff8111156109ab576109ab61212d565b6040519080825280602002602001820160405280156109de57816020015b60608152602001906001900390816109c95790505b50905060005b82811015610a7e57610a4e30858584818110610a0257610a0261299f565b9050602002810190610a1491906129b5565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061161692505050565b828281518110610a6057610a6061299f565b60200260200101819052508080610a7690612a03565b9150506109e4565b5092915050565b81518151606091908114610ac5576040517f7b49805600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008167ffffffffffffffff811115610ae057610ae061212d565b604051908082528060200260200182016040528015610b2557816020015b6040805180820190915260008082526020820152815260200190600190039081610afe5790505b50905060005b82811015610b9457610b6f868281518110610b4857610b4861299f565b6020026020010151868381518110610b6257610b6261299f565b602002602001015161163b565b828281518110610b8157610b8161299f565b6020908102919091010152600101610b2b565b50949350505050565b610ba56116e6565b33610baf81610f8a565b60055462010000900460ff1615610bd957604051637fcce2a960e01b815260040160405180910390fd5b815160039081556020830151839190600490610bf59082612a6a565b509050507fc7ecab902bf76836862e684a165a43f5dc80fc17bd7b91fb34b7c8d6475945456003604051610c299190612b2a565b60405180910390a15050565b6000610c3f61172b565b905090565b600061081a82611776565b610c57610de3565b600081806020019051810190610c6d9190612bdb565b9050610c798382611795565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610caa929190612465565b60405180910390a1505050565b610cbf610de3565b610cc7610e2e565b610cd18282610ee4565b5050565b610cdd6119e3565b33610ce781610f8a565b6007548214610d0957604051637fcce2a960e01b815260040160405180910390fd5b60005b8351811015610db3576000848281518110610d2957610d2961299f565b60200260200101516000015190506000858381518110610d4b57610d4b61299f565b6020908102919091018101518101516000848152600983526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a25050600101610d0c565b50505050565b610dc1610de3565b8060026000828254610dd39190612c64565b90915550610de090508181565b50565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e2c5760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003610e2c576040517f3da3f98c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80610e7481610f8a565b60055462010000900460ff16610efd576040805160208101825260009052517fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47090610ec1906004906128f2565b604051809103902014610ee4576005805462ff0000191662010000179055610efd565b604051637fcce2a960e01b815260040160405180910390fd5b600083806020019051810190610f139190612ce7565b805190915060005b81811015610f4d57610f45838281518110610f3857610f3861299f565b6020026020010151611a29565b600101610f1b565b506040516001600160a01b038516907f7ec3272052827f7b50d9e84f98172cbb80c112df1e377c5b97ea77f1812db8d990600090a2505050505050565b6001546040517f29e40d4b00000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015611014573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110389190612d81565b610de05760405163075fd2b160e01b815260040160405180910390fd5b8267ffffffffffffffff168467ffffffffffffffff16118061108a57508167ffffffffffffffff168467ffffffffffffffff16115b806110a857508067ffffffffffffffff168267ffffffffffffffff16115b806110c657508067ffffffffffffffff168367ffffffffffffffff16115b15610db357604051637fcce2a960e01b815260040160405180910390fd5b60006110ee611bd6565b6000806000611110604051806040016040528060008152602001606081525090565b60055460ff1615611162578680602001905181019061112f9190612e33565b919650935090506111408587611c41565b61115d5760405163075fd2b160e01b815260040160405180910390fd5b6111cd565b868060200190518101906111769190612e33565b6001600160a01b038316151596509094509092509050836111975785611199565b815b94508380156111af57506111ad8587611c41565b155b156111cd5760405163075fd2b160e01b815260040160405180910390fd5b600554610100900460ff1680156111f0575060208101515115806111f057508051155b15611227576040517fc19e07c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b03831661125e5760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b038086166000908152600c602090815260409091208054928616610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff9093169290921782558251600183019081559083015183919060028401906112cc9082612a6a565b505060055460ff1690506112e057846112e3565b60015b815460ff19169015151781556001600160a01b0386166000908152600a602052604081205490036113bf576007546001600160a01b0387166000908152600a60205260409020556113398660015b60ff16611d6b565b600088600754604051602001611350929190612e97565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a60405161139c929190612eb9565b60405180910390a2600780549060006113b483612a03565b91905055505061144e565b60006113ca87611d9e565b905060011960ff8216016113e8576113e3876001611331565b6113ff565b60021960ff8216016113ff576113ff876004611331565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a6114358b611d9e565b60405161144493929190612ee4565b60405180910390a2505b505050505092915050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161149157506001600160a01b0381163161081a565b61149b8383611ddf565b905061081a565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016114d1576106dc8282611e14565b6106dc838383611e30565b6000806114eb61010084612f2f565b905060006114fb61010085612f43565b6000928352600b602052604090922054600190921b9182169091149392505050565b6115256120ae565b6001600160a01b038083166000908152600c60209081526040918290208251606081018452815460ff81161515825261010090049094168483015282518084018452600182018054825260028301805493958701949293919284019161158a906128b8565b80601f01602080910402602001604051908101604052809291908181526020018280546115b6906128b8565b80156116035780601f106115d857610100808354040283529160200191611603565b820191906000526020600020905b8154815290600101906020018083116115e657829003601f168201915b5050509190925250505090525092915050565b6060610817838360405180606001604052806027815260200161316560279139611e7f565b60408051808201909152600080825260208201526000828060200190518101906116659190612f57565b6020810151604082015191925090600061167e8361151d565b6020015190506001600160a01b0381166116bc576040518060400160405280826001600160a01b03168152602001600081525094505050505061081a565b6040518060400160405280826001600160a01b031681526020018381525094505050505092915050565b60065467ffffffffffffffff164211610e2c576040517f93da3eb400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055460009042630100000090910467ffffffffffffffff16118015906117655750600554600160581b900467ffffffffffffffff164211155b156117705750600190565b50600090565b600061178182611d9e565b60ff16600681111561081a5761081a612778565b61179e82611ef7565b80516005805460208085015161ffff1990921693151561ff0019169390931761010091151591909102179055604080517f5ab1bd5300000000000000000000000000000000000000000000000000000000815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa158015611844573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118689190612f73565b600880547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790556040810151600580546060840151608085015172ffffffffffffffffffffffffffffffff00000019909216630100000067ffffffffffffffff958616810272ffffffffffffffff0000000000000000000000191691909117600160581b9286168302177fffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffff16600160981b9386168402179384905560a08601516006805467ffffffffffffffff19169187169182179055600160075561196f959185048216949283048216939092041690611055565b6005546006546040805167ffffffffffffffff6301000000850481168252600160581b850481166020830152600160981b909404841691810191909152911660608201523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a001610c29565b60065467ffffffffffffffff16421115610e2c576040517fcfe7975b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516020808301516040808501516001600160a01b038084166000908152600c90955291909320549192916101009004168015801590611a6f5750611a6d846114dc565b155b15611bab576001546040517f068bcd8d0000000000000000000000000000000000000000000000000000000081526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d91611ae19160040190815260200190565b600060405180830381865afa158015611afe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611b269190810190612f90565b9050611b3185611f5f565b8260026000828254611b439190613044565b90915550506040810151611b589083856114a2565b60408082015181518581526001600160a01b038581166020830152808816939216917fa6b66f665010d2f7435f110111aaa34b56564074f66081bef606d996fc8caa6f910160405180910390a350611bcf565b60405163f4a513b960e01b81526001600160a01b0384166004820152602401611255565b5050505050565b60055442630100000090910467ffffffffffffffff161180611c0a5750600554600160581b900467ffffffffffffffff1642115b15610e2c576040517fb609ed5a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6008546040517fdd93da430000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa158015611ca8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611cd09190810190613057565b60085481516040517f5e8a791500000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa158015611d3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d639190612d81565b949350505050565b6000806000611d7985611f9d565b60009283526009602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b0381166000908152600a60205260408120548103611dc557506000919050565b600080611dd184611f9d565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af1610cd15763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611e75576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b031685604051611e9c919061311e565b600060405180830381855af49150503d8060008114611ed7576040519150601f19603f3d011682016040523d82523d6000602084013e611edc565b606091505b5091509150611eed86838387612010565b9695505050505050565b611eff610de3565b60015415611f39576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003611f5a57604051637fcce2a960e01b815260040160405180910390fd5b600155565b6000611f6d61010083612f2f565b90506000611f7d61010084612f43565b6000928352600b60205260409092208054600190931b9092179091555050565b6001600160a01b0381166000908152600a6020526040812054819081908190611fc890600190613044565b90506000611fd7604083612f2f565b90506000611fe6604084612f43565b611ff190600461313a565b6000838152600960205260409020549298909750919550909350505050565b6060831561207f578251600003612078576001600160a01b0385163b6120785760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611255565b5081611d63565b611d6383838151156120945781518083602001fd5b8060405162461bcd60e51b81526004016112559190613151565b604051806060016040528060001515815260200160006001600160a01b031681526020016120ef604051806040016040528060008152602001606081525090565b905290565b6001600160a01b0381168114610de057600080fd5b60006020828403121561211b57600080fd5b8135612126816120f4565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156121665761216661212d565b60405290565b60405160c0810167ffffffffffffffff811182821017156121665761216661212d565b604051601f8201601f1916810167ffffffffffffffff811182821017156121b8576121b861212d565b604052919050565b600067ffffffffffffffff8211156121da576121da61212d565b5060051b60200190565b600082601f8301126121f557600080fd5b8135602061220a612205836121c0565b61218f565b82815260059290921b8401810191818101908684111561222957600080fd5b8286015b8481101561224d578035612240816120f4565b835291830191830161222d565b509695505050505050565b600067ffffffffffffffff8211156122725761227261212d565b50601f01601f191660200190565b600061228e61220584612258565b90508281528383830111156122a257600080fd5b828260208301376000602084830101529392505050565b600082601f8301126122ca57600080fd5b61081783833560208501612280565b6000806000606084860312156122ee57600080fd5b833567ffffffffffffffff8082111561230657600080fd5b612312878388016121e4565b9450602086013591508082111561232857600080fd5b50612335868287016122b9565b9250506040840135612346816120f4565b809150509250925092565b67ffffffffffffffff81168114610de057600080fd5b6000806000806080858703121561237d57600080fd5b843561238881612351565b9350602085013561239881612351565b925060408501356123a881612351565b915060608501356123b881612351565b939692955090935050565b600080604083850312156123d657600080fd5b823567ffffffffffffffff8111156123ed57600080fd5b6123f9858286016122b9565b925050602083013561240a816120f4565b809150509250929050565b60005b83811015612430578181015183820152602001612418565b50506000910152565b60008151808452612451816020860160208601612415565b601f01601f19169290920160200192915050565b828152604060208201526000611d636040830184612439565b60006020828403121561249057600080fd5b5035919050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a0840152611d6360c0840182612439565b600080602083850312156124f957600080fd5b823567ffffffffffffffff8082111561251157600080fd5b818501915085601f83011261252557600080fd5b81358181111561253457600080fd5b8660208260051b850101111561254957600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156125b057603f1988860301845261259e858351612439565b94509285019290850190600101612582565b5092979650505050505050565b600080604083850312156125d057600080fd5b823567ffffffffffffffff808211156125e857600080fd5b6125f4868387016121e4565b935060209150818501358181111561260b57600080fd5b8501601f8101871361261c57600080fd5b803561262a612205826121c0565b81815260059190911b8201840190848101908983111561264957600080fd5b8584015b83811015612681578035868111156126655760008081fd5b6126738c89838901016122b9565b84525091860191860161264d565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156126dd57815180516001600160a01b031685528601518685015292840192908501906001016126af565b5091979650505050505050565b6000602082840312156126fc57600080fd5b813567ffffffffffffffff8082111561271457600080fd5b908301906040828603121561272857600080fd5b612730612143565b8235815260208301358281111561274657600080fd5b80840193505085601f84011261275b57600080fd5b61276a86843560208601612280565b602082015295945050505050565b634e487b7160e01b600052602160045260246000fd5b60208101600783106127b057634e487b7160e01b600052602160045260246000fd5b91905290565b600080604083850312156127c957600080fd5b82359150602083013567ffffffffffffffff8111156127e757600080fd5b6127f3858286016122b9565b9150509250929050565b600080604080848603121561281157600080fd5b833567ffffffffffffffff81111561282857600080fd5b8401601f8101861361283957600080fd5b80356020612849612205836121c0565b82815260069290921b8301810191818101908984111561286857600080fd5b938201935b838510156128a85785858b0312156128855760008081fd5b61288d612143565b8535815283860135848201528252938501939082019061286d565b9997909101359750505050505050565b600181811c908216806128cc57607f821691505b6020821081036128ec57634e487b7160e01b600052602260045260246000fd5b50919050565b6000808354612900816128b8565b60018281168015612918576001811461292d5761295c565b60ff198416875282151583028701945061295c565b8760005260208060002060005b858110156129535781548a82015290840190820161293a565b50505082870194505b50929695505050505050565b634e487b7160e01b600052601160045260246000fd5b67ffffffffffffffff818116838216019080821115610a7e57610a7e612968565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126129cc57600080fd5b83018035915067ffffffffffffffff8211156129e757600080fd5b6020019150368190038213156129fc57600080fd5b9250929050565b600060018201612a1557612a15612968565b5060010190565b601f8211156106dc57600081815260208120601f850160051c81016020861015612a435750805b601f850160051c820191505b81811015612a6257828155600101612a4f565b505050505050565b815167ffffffffffffffff811115612a8457612a8461212d565b612a9881612a9284546128b8565b84612a1c565b602080601f831160018114612acd5760008415612ab55750858301515b600019600386901b1c1916600185901b178555612a62565b600085815260208120601f198616915b82811015612afc57888601518255948401946001909101908401612add565b5085821015612b1a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020808352835481840152600180850160408086015260008154612b4f816128b8565b806060890152608085831660008114612b6f5760018114612b8957612bb7565b60ff1984168a83015282151560051b8a0182019450612bb7565b856000528760002060005b84811015612baf5781548c8201850152908801908901612b94565b8b0183019550505b50929998505050505050505050565b80518015158114612bd657600080fd5b919050565b600060c08284031215612bed57600080fd5b612bf561216c565b612bfe83612bc6565b8152612c0c60208401612bc6565b60208201526040830151612c1f81612351565b60408201526060830151612c3281612351565b60608201526080830151612c4581612351565b608082015260a0830151612c5881612351565b60a08201529392505050565b8082018082111561081a5761081a612968565b8051612bd6816120f4565b600060608284031215612c9457600080fd5b6040516060810181811067ffffffffffffffff82111715612cb757612cb761212d565b8060405250809150825181526020830151612cd1816120f4565b6020820152604092830151920191909152919050565b60006020808385031215612cfa57600080fd5b825167ffffffffffffffff811115612d1157600080fd5b8301601f81018513612d2257600080fd5b8051612d30612205826121c0565b81815260609182028301840191848201919088841115612d4f57600080fd5b938501935b83851015612d7557612d668986612c82565b83529384019391850191612d54565b50979650505050505050565b600060208284031215612d9357600080fd5b61081782612bc6565b600082601f830112612dad57600080fd5b8151612dbb61220582612258565b818152846020838601011115612dd057600080fd5b611d63826020830160208701612415565b600060408284031215612df357600080fd5b612dfb612143565b905081518152602082015167ffffffffffffffff811115612e1b57600080fd5b612e2784828501612d9c565b60208301525092915050565b600080600060608486031215612e4857600080fd5b8351612e53816120f4565b6020850151909350612e64816120f4565b604085015190925067ffffffffffffffff811115612e8157600080fd5b612e8d86828701612de1565b9150509250925092565b604081526000612eaa6040830185612439565b90508260208301529392505050565b604081526000612ecc6040830185612439565b90506001600160a01b03831660208301529392505050565b606081526000612ef76060830186612439565b90506001600160a01b038416602083015260ff83166040830152949350505050565b634e487b7160e01b600052601260045260246000fd5b600082612f3e57612f3e612f19565b500490565b600082612f5257612f52612f19565b500690565b600060608284031215612f6957600080fd5b6108178383612c82565b600060208284031215612f8557600080fd5b8151612126816120f4565b600060208284031215612fa257600080fd5b815167ffffffffffffffff80821115612fba57600080fd5b9083019060c08286031215612fce57600080fd5b612fd661216c565b825181526020830151612fe8816120f4565b60208201526040830151612ffb816120f4565b604082015260608301518281111561301257600080fd5b61301e87828601612de1565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b8181038181111561081a5761081a612968565b60006020828403121561306957600080fd5b815167ffffffffffffffff8082111561308157600080fd5b9083019060c0828603121561309557600080fd5b61309d61216c565b82518152602083015160208201526040830151828111156130bd57600080fd5b6130c987828601612d9c565b6040830152506060830151828111156130e157600080fd5b6130ed87828601612de1565b6060830152506130ff60808401612c77565b608082015261311060a08401612c77565b60a082015295945050505050565b60008251613130818460208701612415565b9190910192915050565b808202811582820484141761081a5761081a612968565b602081526000610817602083018461243956fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220ac22a9304ebd65093a8c1ce9c9c622f10080f7ab5721918bd8be635ec893e3e364736f6c63430008130033";
