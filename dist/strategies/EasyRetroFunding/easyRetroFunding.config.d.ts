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
export declare const bytecode = "0x60c06040523480156200001157600080fd5b50604051620033ea380380620033ea8339810160408190526200003491620000ba565b6001600160a01b038216608052604051829082906200005890829060200162000195565b60408051601f19818403018152919052805160209091012060a05250620001ca92505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b157818101518382015260200162000097565b50506000910152565b60008060408385031215620000ce57600080fd5b82516001600160a01b0381168114620000e657600080fd5b60208401519092506001600160401b03808211156200010457600080fd5b818501915085601f8301126200011957600080fd5b8151818111156200012e576200012e6200007e565b604051601f8201601f19908116603f011681019083821181831017156200015957620001596200007e565b816040528281528860208487010111156200017357600080fd5b6200018683602083016020880162000094565b80955050505050509250929050565b6020815260008251806020840152620001b681604085016020870162000094565b601f01601f19169190910160400192915050565b60805160a0516131de6200020c600039600061036e01526000818161029a01528181610e1f01528181610fd1015281816117f90152611ac701526131de6000f3fe60806040526004361061021d5760003560e01c80636e271dd51161011d578063df868ed3116100b0578063edd146cc1161007f578063f31db3d111610064578063f31db3d114610685578063f5b0dfb7146106a5578063f6f25891146106c557600080fd5b8063edd146cc14610652578063ef2920fc1461067257600080fd5b8063df868ed3146105d2578063dff7d2c7146105e7578063e7efcfc21461060f578063eb11af931461062557600080fd5b8063ac9650d8116100ec578063ac9650d814610539578063b2b878d014610566578063cb0e85a614610593578063cfb35e87146105b257600080fd5b80636e271dd5146104b257806395355b3b146104d35780639af5c09d146104e9578063a0cf0aea1461051157600080fd5b806342fda9c7116101b0578063570897391161017f5780635f1b55f3116101645780635f1b55f3146104245780635f96dc111461044457806362812a391461048557600080fd5b806357089739146103e757806359a3977b1461040157600080fd5b806342fda9c71461035f5780634ab4ba42146103925780634d31d087146103a757806351cff8d9146103c757600080fd5b806321755088116101ec57806321755088146102f25780632bbe0cae146103225780632d52eff21461033557806338fff2d01461034a57600080fd5b806301fc1c64146102295780630a6f0ee91461026957806315cc481e1461028b5780632143e92f146102d257600080fd5b3661022457005b600080fd5b34801561023557600080fd5b50610256610244366004612126565b600b6020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561027557600080fd5b506102896102843660046122f6565b6106f2565b005b34801561029757600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b039091168152602001610260565b3480156102de57600080fd5b506102896102ed366004612384565b610712565b3480156102fe57600080fd5b506005546103129062010000900460ff1681565b6040519015158152602001610260565b6102ba6103303660046123e0565b61082c565b34801561034157600080fd5b50610312610851565b34801561035657600080fd5b50600154610256565b34801561036b57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610256565b34801561039e57600080fd5b50600254610256565b3480156103b357600080fd5b506103126103c2366004612126565b6108a0565b3480156103d357600080fd5b506102896103e2366004612126565b6108a8565b3480156103f357600080fd5b506005546103129060ff1681565b34801561040d57600080fd5b5061041661090e565b604051610260929190612482565b34801561043057600080fd5b5061031261043f36600461249b565b6109a5565b34801561045057600080fd5b5060055461046c90600160981b900467ffffffffffffffff1681565b60405167ffffffffffffffff9091168152602001610260565b34801561049157600080fd5b506104a56104a0366004612126565b6109b0565b60405161026091906124b4565b3480156104be57600080fd5b5060065461046c9067ffffffffffffffff1681565b3480156104df57600080fd5b5061025660085481565b3480156104f557600080fd5b5060055461046c906301000000900467ffffffffffffffff1681565b34801561051d57600080fd5b506102ba73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561054557600080fd5b50610559610554366004612503565b6109c1565b6040516102609190612578565b34801561057257600080fd5b506105866105813660046125da565b610ab6565b60405161026091906126af565b34801561059f57600080fd5b5060055461031290610100900460ff1681565b3480156105be57600080fd5b506102896105cd366004612707565b610bce565b3480156105de57600080fd5b50610312610c66565b3480156105f357600080fd5b5060055461046c90600160581b900467ffffffffffffffff1681565b34801561061b57600080fd5b5061025660075481565b34801561063157600080fd5b50610645610640366004612126565b610c75565b60405161026091906127ab565b34801561065e57600080fd5b5061028961066d3660046127d3565b610c80565b6102896106803660046123e0565b610ce8565b34801561069157600080fd5b506102896106a036600461281a565b610d06565b3480156106b157600080fd5b506102896106c036600461249b565b610dea565b3480156106d157600080fd5b506102566106e036600461249b565b600a6020526000908152604090205481565b6106fa610e14565b610702610e5f565b61070d838383610e9b565b505050565b3361071c81610f8e565b61072885858585611059565b6005805472ffffffffffffffffffffffffffffffff0000001916630100000067ffffffffffffffff888116820272ffffffffffffffff0000000000000000000000191692909217600160581b8884168102919091177fffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffff16600160981b888516810291909117948590556006805467ffffffffffffffff191688861690811790915560408051948704861685529286048516602085015294049092169181019190915260608101919091523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a15050505050565b6000610836610e14565b61083e610e5f565b61084883836110e8565b90505b92915050565b6040805160208101825260009081905290517fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470906108919060049061290f565b60405180910390201415905090565b60008061084b565b336108b281610f8e565b6006546108cc9067ffffffffffffffff1662278d0061299b565b67ffffffffffffffff1642116108f557604051637fcce2a960e01b815260040160405180910390fd5b6000610901833061145d565b905061070d8333836114a6565b6003805460048054919291610922906128d5565b80601f016020809104026020016040519081016040528092919081815260200182805461094e906128d5565b801561099b5780601f106109705761010080835404028352916020019161099b565b820191906000526020600020905b81548152906001019060200180831161097e57829003601f168201915b5050505050905082565b600061084b826114e0565b6109b86120cb565b61084b82611521565b60608167ffffffffffffffff8111156109dc576109dc61214a565b604051908082528060200260200182016040528015610a0f57816020015b60608152602001906001900390816109fa5790505b50905060005b82811015610aaf57610a7f30858584818110610a3357610a336129bc565b9050602002810190610a4591906129d2565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061161a92505050565b828281518110610a9157610a916129bc565b60200260200101819052508080610aa790612a20565b915050610a15565b5092915050565b81518151606091908114610af6576040517f7b49805600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008167ffffffffffffffff811115610b1157610b1161214a565b604051908082528060200260200182016040528015610b5657816020015b6040805180820190915260008082526020820152815260200190600190039081610b2f5790505b50905060005b82811015610bc557610ba0868281518110610b7957610b796129bc565b6020026020010151868381518110610b9357610b936129bc565b602002602001015161163f565b828281518110610bb257610bb26129bc565b6020908102919091010152600101610b5c565b50949350505050565b610bd66116ea565b33610be081610f8e565b60055462010000900460ff1615610c0a57604051637fcce2a960e01b815260040160405180910390fd5b815160039081556020830151839190600490610c269082612a87565b509050507fc7ecab902bf76836862e684a165a43f5dc80fc17bd7b91fb34b7c8d6475945456003604051610c5a9190612b47565b60405180910390a15050565b6000610c7061172f565b905090565b600061084b8261177a565b610c88610e14565b600081806020019051810190610c9e9190612bf8565b9050610caa8382611799565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8383604051610cdb929190612482565b60405180910390a1505050565b610cf0610e14565b610cf8610e5f565b610d0282826119e7565b5050565b610d0e611a00565b33610d1881610f8e565b6008548214610d3a57604051637fcce2a960e01b815260040160405180910390fd5b60005b8351811015610de4576000848281518110610d5a57610d5a6129bc565b60200260200101516000015190506000858381518110610d7c57610d7c6129bc565b6020908102919091018101518101516000848152600a83526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a25050600101610d3d565b50505050565b610df2610e14565b8060026000828254610e049190612c81565b90915550610e1190508181565b50565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e5d5760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003610e5d576040517f3da3f98c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80610ea581610f8e565b6040805160208101825260009052517fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47090610ee29060049061290f565b604051809103902014610f01576005805462ff00001916620100001790555b600083806020019051810190610f179190612d04565b805190915060005b81811015610f5157610f49838281518110610f3c57610f3c6129bc565b6020026020010151611a46565b600101610f1f565b506040516001600160a01b038516907f7ec3272052827f7b50d9e84f98172cbb80c112df1e377c5b97ea77f1812db8d990600090a2505050505050565b6001546040517f29e40d4b00000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015611018573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103c9190612d9e565b610e115760405163075fd2b160e01b815260040160405180910390fd5b8267ffffffffffffffff168467ffffffffffffffff16118061108e57508167ffffffffffffffff168467ffffffffffffffff16115b806110ac57508067ffffffffffffffff168267ffffffffffffffff16115b806110ca57508067ffffffffffffffff168367ffffffffffffffff16115b15610de457604051637fcce2a960e01b815260040160405180910390fd5b60006110f2611bf3565b6000806000611114604051806040016040528060008152602001606081525090565b60055460ff161561116657868060200190518101906111339190612e50565b919650935090506111448587611c5e565b6111615760405163075fd2b160e01b815260040160405180910390fd5b6111d1565b8680602001905181019061117a9190612e50565b6001600160a01b0383161515965090945090925090508361119b578561119d565b815b94508380156111b357506111b18587611c5e565b155b156111d15760405163075fd2b160e01b815260040160405180910390fd5b600554610100900460ff1680156111f4575060208101515115806111f457508051155b1561122b576040517fc19e07c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0383166112625760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b038086166000908152600d602090815260409091208054928616610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff9093169290921782558251600183019081559083015183919060028401906112d09082612a87565b505060055460ff1690506112e457846112e7565b60015b815460ff19169015151781556001600160a01b0386166000908152600b602052604081205490036113c3576008546001600160a01b0387166000908152600b602052604090205561133d8660015b60ff16611d88565b600088600854604051602001611354929190612eb4565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a6040516113a0929190612ed6565b60405180910390a2600880549060006113b883612a20565b919050555050611452565b60006113ce87611dbb565b905060011960ff8216016113ec576113e7876001611335565b611403565b60021960ff82160161140357611403876004611335565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a6114398b611dbb565b60405161144893929190612f01565b60405180910390a2505b505050505092915050565b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161149557506001600160a01b0381163161084b565b61149f8383611dfc565b905061084b565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016114d55761070d8282611e31565b61070d838383611e4d565b6000806114ef61010084612f4c565b905060006114ff61010085612f60565b6000928352600c602052604090922054600190921b9182169091149392505050565b6115296120cb565b6001600160a01b038083166000908152600d60209081526040918290208251606081018452815460ff81161515825261010090049094168483015282518084018452600182018054825260028301805493958701949293919284019161158e906128d5565b80601f01602080910402602001604051908101604052809291908181526020018280546115ba906128d5565b80156116075780601f106115dc57610100808354040283529160200191611607565b820191906000526020600020905b8154815290600101906020018083116115ea57829003601f168201915b5050509190925250505090525092915050565b6060610848838360405180606001604052806027815260200161318260279139611e9c565b60408051808201909152600080825260208201526000828060200190518101906116699190612f74565b6020810151604082015191925090600061168283611521565b6020015190506001600160a01b0381166116c0576040518060400160405280826001600160a01b03168152602001600081525094505050505061084b565b6040518060400160405280826001600160a01b031681526020018381525094505050505092915050565b60065467ffffffffffffffff164211610e5d576040517f93da3eb400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055460009042630100000090910467ffffffffffffffff16118015906117695750600554600160581b900467ffffffffffffffff164211155b156117745750600190565b50600090565b600061178582611dbb565b60ff16600681111561084b5761084b612795565b6117a282611f14565b80516005805460208085015161ffff1990921693151561ff0019169390931761010091151591909102179055604080517f5ab1bd5300000000000000000000000000000000000000000000000000000000815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa158015611848573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061186c9190612f90565b600980547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790556040810151600580546060840151608085015172ffffffffffffffffffffffffffffffff00000019909216630100000067ffffffffffffffff958616810272ffffffffffffffff0000000000000000000000191691909117600160581b9286168302177fffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffff16600160981b9386168402179384905560a08601516006805467ffffffffffffffff191691871691821790556001600855611973959185048216949283048216939092041690611059565b6005546006546040805167ffffffffffffffff6301000000850481168252600160581b850481166020830152600160981b909404841691810191909152911660608201523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a001610c5a565b604051637fcce2a960e01b815260040160405180910390fd5b60065467ffffffffffffffff16421115610e5d576040517fcfe7975b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516020808301516040808501516001600160a01b038084166000908152600d90955291909320549192916101009004168015801590611a8c5750611a8a846114e0565b155b15611bc8576001546040517f068bcd8d0000000000000000000000000000000000000000000000000000000081526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163068bcd8d91611afe9160040190815260200190565b600060405180830381865afa158015611b1b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611b439190810190612fad565b9050611b4e85611f7c565b8260026000828254611b609190613061565b90915550506040810151611b759083856114a6565b60408082015181518581526001600160a01b038581166020830152808816939216917fa6b66f665010d2f7435f110111aaa34b56564074f66081bef606d996fc8caa6f910160405180910390a350611bec565b60405163f4a513b960e01b81526001600160a01b0384166004820152602401611259565b5050505050565b60055442630100000090910467ffffffffffffffff161180611c275750600554600160581b900467ffffffffffffffff1642115b15610e5d576040517fb609ed5a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6009546040517fdd93da430000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa158015611cc5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611ced9190810190613074565b60095481516040517f5e8a791500000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa158015611d5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d809190612d9e565b949350505050565b6000806000611d9685611fba565b6000928352600a602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b0381166000908152600b60205260408120548103611de257506000919050565b600080611dee84611fba565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af1610d025763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611e92576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b031685604051611eb9919061313b565b600060405180830381855af49150503d8060008114611ef4576040519150601f19603f3d011682016040523d82523d6000602084013e611ef9565b606091505b5091509150611f0a8683838761202d565b9695505050505050565b611f1c610e14565b60015415611f56576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003611f7757604051637fcce2a960e01b815260040160405180910390fd5b600155565b6000611f8a61010083612f4c565b90506000611f9a61010084612f60565b6000928352600c60205260409092208054600190931b9092179091555050565b6001600160a01b0381166000908152600b6020526040812054819081908190611fe590600190613061565b90506000611ff4604083612f4c565b90506000612003604084612f60565b61200e906004613157565b6000838152600a60205260409020549298909750919550909350505050565b6060831561209c578251600003612095576001600160a01b0385163b6120955760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611259565b5081611d80565b611d8083838151156120b15781518083602001fd5b8060405162461bcd60e51b8152600401611259919061316e565b604051806060016040528060001515815260200160006001600160a01b0316815260200161210c604051806040016040528060008152602001606081525090565b905290565b6001600160a01b0381168114610e1157600080fd5b60006020828403121561213857600080fd5b813561214381612111565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156121835761218361214a565b60405290565b60405160c0810167ffffffffffffffff811182821017156121835761218361214a565b604051601f8201601f1916810167ffffffffffffffff811182821017156121d5576121d561214a565b604052919050565b600067ffffffffffffffff8211156121f7576121f761214a565b5060051b60200190565b600082601f83011261221257600080fd5b81356020612227612222836121dd565b6121ac565b82815260059290921b8401810191818101908684111561224657600080fd5b8286015b8481101561226a57803561225d81612111565b835291830191830161224a565b509695505050505050565b600067ffffffffffffffff82111561228f5761228f61214a565b50601f01601f191660200190565b60006122ab61222284612275565b90508281528383830111156122bf57600080fd5b828260208301376000602084830101529392505050565b600082601f8301126122e757600080fd5b6108488383356020850161229d565b60008060006060848603121561230b57600080fd5b833567ffffffffffffffff8082111561232357600080fd5b61232f87838801612201565b9450602086013591508082111561234557600080fd5b50612352868287016122d6565b925050604084013561236381612111565b809150509250925092565b67ffffffffffffffff81168114610e1157600080fd5b6000806000806080858703121561239a57600080fd5b84356123a58161236e565b935060208501356123b58161236e565b925060408501356123c58161236e565b915060608501356123d58161236e565b939692955090935050565b600080604083850312156123f357600080fd5b823567ffffffffffffffff81111561240a57600080fd5b612416858286016122d6565b925050602083013561242781612111565b809150509250929050565b60005b8381101561244d578181015183820152602001612435565b50506000910152565b6000815180845261246e816020860160208601612432565b601f01601f19169290920160200192915050565b828152604060208201526000611d806040830184612456565b6000602082840312156124ad57600080fd5b5035919050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a0840152611d8060c0840182612456565b6000806020838503121561251657600080fd5b823567ffffffffffffffff8082111561252e57600080fd5b818501915085601f83011261254257600080fd5b81358181111561255157600080fd5b8660208260051b850101111561256657600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156125cd57603f198886030184526125bb858351612456565b9450928501929085019060010161259f565b5092979650505050505050565b600080604083850312156125ed57600080fd5b823567ffffffffffffffff8082111561260557600080fd5b61261186838701612201565b935060209150818501358181111561262857600080fd5b8501601f8101871361263957600080fd5b8035612647612222826121dd565b81815260059190911b8201840190848101908983111561266657600080fd5b8584015b8381101561269e578035868111156126825760008081fd5b6126908c89838901016122d6565b84525091860191860161266a565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156126fa57815180516001600160a01b031685528601518685015292840192908501906001016126cc565b5091979650505050505050565b60006020828403121561271957600080fd5b813567ffffffffffffffff8082111561273157600080fd5b908301906040828603121561274557600080fd5b61274d612160565b8235815260208301358281111561276357600080fd5b80840193505085601f84011261277857600080fd5b6127878684356020860161229d565b602082015295945050505050565b634e487b7160e01b600052602160045260246000fd5b60208101600783106127cd57634e487b7160e01b600052602160045260246000fd5b91905290565b600080604083850312156127e657600080fd5b82359150602083013567ffffffffffffffff81111561280457600080fd5b612810858286016122d6565b9150509250929050565b600080604080848603121561282e57600080fd5b833567ffffffffffffffff81111561284557600080fd5b8401601f8101861361285657600080fd5b80356020612866612222836121dd565b82815260069290921b8301810191818101908984111561288557600080fd5b938201935b838510156128c55785858b0312156128a25760008081fd5b6128aa612160565b8535815283860135848201528252938501939082019061288a565b9997909101359750505050505050565b600181811c908216806128e957607f821691505b60208210810361290957634e487b7160e01b600052602260045260246000fd5b50919050565b600080835461291d816128d5565b60018281168015612935576001811461294a57612979565b60ff1984168752821515830287019450612979565b8760005260208060002060005b858110156129705781548a820152908401908201612957565b50505082870194505b50929695505050505050565b634e487b7160e01b600052601160045260246000fd5b67ffffffffffffffff818116838216019080821115610aaf57610aaf612985565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126129e957600080fd5b83018035915067ffffffffffffffff821115612a0457600080fd5b602001915036819003821315612a1957600080fd5b9250929050565b600060018201612a3257612a32612985565b5060010190565b601f82111561070d57600081815260208120601f850160051c81016020861015612a605750805b601f850160051c820191505b81811015612a7f57828155600101612a6c565b505050505050565b815167ffffffffffffffff811115612aa157612aa161214a565b612ab581612aaf84546128d5565b84612a39565b602080601f831160018114612aea5760008415612ad25750858301515b600019600386901b1c1916600185901b178555612a7f565b600085815260208120601f198616915b82811015612b1957888601518255948401946001909101908401612afa565b5085821015612b375787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020808352835481840152600180850160408086015260008154612b6c816128d5565b806060890152608085831660008114612b8c5760018114612ba657612bd4565b60ff1984168a83015282151560051b8a0182019450612bd4565b856000528760002060005b84811015612bcc5781548c8201850152908801908901612bb1565b8b0183019550505b50929998505050505050505050565b80518015158114612bf357600080fd5b919050565b600060c08284031215612c0a57600080fd5b612c12612189565b612c1b83612be3565b8152612c2960208401612be3565b60208201526040830151612c3c8161236e565b60408201526060830151612c4f8161236e565b60608201526080830151612c628161236e565b608082015260a0830151612c758161236e565b60a08201529392505050565b8082018082111561084b5761084b612985565b8051612bf381612111565b600060608284031215612cb157600080fd5b6040516060810181811067ffffffffffffffff82111715612cd457612cd461214a565b8060405250809150825181526020830151612cee81612111565b6020820152604092830151920191909152919050565b60006020808385031215612d1757600080fd5b825167ffffffffffffffff811115612d2e57600080fd5b8301601f81018513612d3f57600080fd5b8051612d4d612222826121dd565b81815260609182028301840191848201919088841115612d6c57600080fd5b938501935b83851015612d9257612d838986612c9f565b83529384019391850191612d71565b50979650505050505050565b600060208284031215612db057600080fd5b61084882612be3565b600082601f830112612dca57600080fd5b8151612dd861222282612275565b818152846020838601011115612ded57600080fd5b611d80826020830160208701612432565b600060408284031215612e1057600080fd5b612e18612160565b905081518152602082015167ffffffffffffffff811115612e3857600080fd5b612e4484828501612db9565b60208301525092915050565b600080600060608486031215612e6557600080fd5b8351612e7081612111565b6020850151909350612e8181612111565b604085015190925067ffffffffffffffff811115612e9e57600080fd5b612eaa86828701612dfe565b9150509250925092565b604081526000612ec76040830185612456565b90508260208301529392505050565b604081526000612ee96040830185612456565b90506001600160a01b03831660208301529392505050565b606081526000612f146060830186612456565b90506001600160a01b038416602083015260ff83166040830152949350505050565b634e487b7160e01b600052601260045260246000fd5b600082612f5b57612f5b612f36565b500490565b600082612f6f57612f6f612f36565b500690565b600060608284031215612f8657600080fd5b6108488383612c9f565b600060208284031215612fa257600080fd5b815161214381612111565b600060208284031215612fbf57600080fd5b815167ffffffffffffffff80821115612fd757600080fd5b9083019060c08286031215612feb57600080fd5b612ff3612189565b82518152602083015161300581612111565b6020820152604083015161301881612111565b604082015260608301518281111561302f57600080fd5b61303b87828601612dfe565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b8181038181111561084b5761084b612985565b60006020828403121561308657600080fd5b815167ffffffffffffffff8082111561309e57600080fd5b9083019060c082860312156130b257600080fd5b6130ba612189565b82518152602083015160208201526040830151828111156130da57600080fd5b6130e687828601612db9565b6040830152506060830151828111156130fe57600080fd5b61310a87828601612dfe565b60608301525061311c60808401612c94565b608082015261312d60a08401612c94565b60a082015295945050505050565b6000825161314d818460208701612432565b9190910192915050565b808202811582820484141761084b5761084b612985565b602081526000610848602083018461245656fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220829e6524e27dcf44c1adcacacf594306be829d3cad2ce71e4789dccce5960ac164736f6c63430008130033";
