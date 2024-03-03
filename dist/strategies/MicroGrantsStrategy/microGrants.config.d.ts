export declare const abi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_allo";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "_name";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
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
    readonly name: "AMOUNT_TOO_LOW";
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
    readonly name: "EXCEEDING_MAX_AMOUNT";
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
    readonly name: "ZERO_ADDRESS";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "recipientId";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "enum IStrategy.Status";
        readonly name: "status";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "Allocated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "recipientId";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "Allocated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "allocator";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bool";
        readonly name: "_flag";
        readonly type: "bool";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "AllocatorSet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "approvalThreshold";
        readonly type: "uint256";
    }];
    readonly name: "ApprovalThresholdUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "recipientId";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "recipientAddress";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "Distributed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "poolId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "maxRequestedAmountAllowed";
        readonly type: "uint256";
    }];
    readonly name: "maxRequestedAmountAllowedIncreased";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "active";
        readonly type: "bool";
    }];
    readonly name: "PoolActive";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "recipientId";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "Registered";
    readonly type: "event";
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
    readonly name: "TimestampsUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "recipientId";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "UpdatedRegistration";
    readonly type: "event";
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
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_sender";
        readonly type: "address";
    }];
    readonly name: "allocate";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "allocated";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
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
    readonly name: "allocationStartTime";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "allocators";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "approvalThreshold";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "_allocators";
        readonly type: "address[]";
    }, {
        readonly internalType: "bool[]";
        readonly name: "_flags";
        readonly type: "bool[]";
    }];
    readonly name: "batchSetAllocator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "_recipientIds";
        readonly type: "address[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_sender";
        readonly type: "address";
    }];
    readonly name: "distribute";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAllo";
    readonly outputs: readonly [{
        readonly internalType: "contract IAllo";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "_recipientIds";
        readonly type: "address[]";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "_data";
        readonly type: "bytes[]";
    }];
    readonly name: "getPayouts";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "recipientAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IStrategy.PayoutSummary[]";
        readonly name: "";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolAmount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolId";
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
        readonly name: "_recipientId";
        readonly type: "address";
    }];
    readonly name: "getRecipient";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "useRegistryAnchor";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "recipientAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestedAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum IStrategy.Status";
            readonly name: "recipientStatus";
            readonly type: "uint8";
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
        }];
        readonly internalType: "struct MicroGrantsStrategy.Recipient";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_recipientId";
        readonly type: "address";
    }];
    readonly name: "getRecipientStatus";
    readonly outputs: readonly [{
        readonly internalType: "enum IStrategy.Status";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getStrategyId";
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
        readonly name: "_maxRequestedAmountAllowed";
        readonly type: "uint256";
    }];
    readonly name: "increasemaxRequestedAmountAllowed";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }];
    readonly name: "increasePoolAmount";
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
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isPoolActive";
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
        readonly name: "_allocator";
        readonly type: "address";
    }];
    readonly name: "isValidAllocator";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "maxRequestedAmountAllowed";
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
    }, {
        readonly internalType: "enum IStrategy.Status";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly name: "recipientAllocations";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_sender";
        readonly type: "address";
    }];
    readonly name: "registerRecipient";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipientId";
        readonly type: "address";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_allocator";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "_flag";
        readonly type: "bool";
    }];
    readonly name: "setAllocator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_approvalThreshold";
        readonly type: "uint256";
    }];
    readonly name: "setApprovalThreshold";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    readonly name: "updatePoolTimestamps";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "useRegistryAnchor";
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
        readonly name: "_token";
        readonly type: "address";
    }];
    readonly name: "withdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
export declare const bytecode = "0x60c06040523480156200001157600080fd5b506040516200271b3803806200271b8339810160408190526200003491620000c5565b6001600160a01b03821660805260405182908290829082906200005c908290602001620001a0565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001d592505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000bc578181015183820152602001620000a2565b50506000910152565b60008060408385031215620000d957600080fd5b82516001600160a01b0381168114620000f157600080fd5b60208401519092506001600160401b03808211156200010f57600080fd5b818501915085601f8301126200012457600080fd5b81518181111562000139576200013962000089565b604051601f8201601f19908116603f0116810190838211818310171562000164576200016462000089565b816040528281528860208487010111156200017e57600080fd5b620001918360208301602088016200009f565b80955050505050509250929050565b6020815260008251806020840152620001c18160408501602087016200009f565b601f01601f19169190910160400192915050565b60805160a0516125046200021760003960006102fc0152600081816102480152818161093001528181610c9a015281816111c4015261148a01526125046000f3fe6080604052600436106101c65760003560e01c806375777aaa116100f7578063ba539f8f11610095578063eb11af9311610064578063eb11af9314610589578063edd146cc146105b6578063ef2920fc146105d6578063f5b0dfb7146105e957600080fd5b8063ba539f8f14610517578063bfa807311461052d578063d2e17f591461054d578063df868ed31461057457600080fd5b8063a0016b8c116100d1578063a0016b8c14610482578063a0cf0aea146104a2578063a15acfd5146104ca578063b2b878d0146104ea57600080fd5b806375777aaa1461042c5780637d0eef611461044c57806380faddeb1461046257600080fd5b80634533d6781161016457806351cff8d91161013e57806351cff8d91461038d57806357089739146103ad57806362812a39146103c75780636f46ffb9146103f457600080fd5b80634533d678146103205780634ab4ba42146103585780634d31d0871461036d57600080fd5b80632b302cbd116101a05780632b302cbd146102805780632bbe0cae146102bb57806338fff2d0146102ce57806342fda9c7146102ed57600080fd5b8063084ea36e146101d25780630a6f0ee91461021757806315cc481e1461023957600080fd5b366101cd57005b600080fd5b3480156101de57600080fd5b506102026101ed366004611884565b600b6020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561022357600080fd5b50610237610232366004611a25565b610609565b005b34801561024557600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b03909116815260200161020e565b34801561028c57600080fd5b5061020261029b366004611a9c565b600960209081526000928352604080842090915290825290205460ff1681565b6102686102c9366004611ad5565b610629565b3480156102da57600080fd5b506001545b60405190815260200161020e565b3480156102f957600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102df565b34801561032c57600080fd5b50600554610340906001600160401b031681565b6040516001600160401b03909116815260200161020e565b34801561036457600080fd5b506002546102df565b34801561037957600080fd5b50610202610388366004611884565b61064e565b34801561039957600080fd5b506102376103a8366004611884565b61066f565b3480156103b957600080fd5b506004546102029060ff1681565b3480156103d357600080fd5b506103e76103e2366004611884565b61069a565b60405161020e9190611ba3565b34801561040057600080fd5b506102df61040f366004611c1a565b600a60209081526000928352604080842090915290825290205481565b34801561043857600080fd5b50610237610447366004611c5d565b6106ab565b34801561045857600080fd5b506102df60075481565b34801561046e57600080fd5b5061023761047d366004611c99565b6106bf565b34801561048e57600080fd5b5061023761049d366004611cc7565b6106d3565b3480156104ae57600080fd5b5061026873eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b3480156104d657600080fd5b506102376104e5366004611ce0565b6106ea565b3480156104f657600080fd5b5061050a610505366004611da3565b61074c565b60405161020e9190611e77565b34801561052357600080fd5b506102df60065481565b34801561053957600080fd5b50610237610548366004611cc7565b61084a565b34801561055957600080fd5b5060045461034090600160a81b90046001600160401b031681565b34801561058057600080fd5b5061020261085d565b34801561059557600080fd5b506105a96105a4366004611884565b61086c565b60405161020e9190611ecf565b3480156105c257600080fd5b506102376105d1366004611edd565b610877565b6102376105e4366004611ad5565b6108d7565b3480156105f557600080fd5b50610237610604366004611cc7565b6108fb565b610611610925565b610619610970565b610624838383610993565b505050565b6000610633610925565b61063b610970565b610645838361099b565b90505b92915050565b6001600160a01b0381166000908152600b602052604081205460ff16610648565b3361067981610c70565b610681610d22565b600061068d8330610d46565b9050610624833383610d8f565b6106a2611826565b61064882610dc9565b336106b581610c70565b6106248383610f45565b336106c981610c70565b6106248383610fde565b336106dd81610c70565b6106e682611040565b5050565b336106f481610c70565b825160005b818110156107455761073d85828151811061071657610716611f23565b602002602001015185838151811061073057610730611f23565b6020026020010151610fde565b6001016106f9565b5050505050565b8151815160609190811461077357604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b0381111561078d5761078d6118a8565b6040519080825280602002602001820160405280156107d257816020015b60408051808201909152600080825260208201528152602001906001900390816107ab5790505b50905060005b828110156108415761081c8682815181106107f5576107f5611f23565b602002602001015186838151811061080f5761080f611f23565b602002602001015161107c565b82828151811061082e5761082e611f23565b60209081029190910101526001016107d8565b50949350505050565b3361085481610c70565b6106e6826110ea565b6000610867611142565b905090565b600061064882611181565b60008180602001905181019061088d9190611f39565b90506108998382611196565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a83836040516108ca929190611fc0565b60405180910390a1505050565b6108df610925565b6108e7610970565b6108f1828261128b565b6106e682826112c4565b610903610925565b80600260008282546109159190611fef565b9091555061092290508181565b50565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461096e5760405163075fd2b160e01b815260040160405180910390fd5b565b60015460000361096e57604051630f68fe6360e21b815260040160405180910390fd5b610624612002565b60008060008060006109c0604051806040016040528060008152602001606081525090565b878060200190518101906109d491906120cb565b600454929750929550935090915060ff16806109f857506001600160a01b03831615155b945084610a055786610a07565b825b9550848015610a1d5750610a1b86886115a7565b155b15610a3b5760405163075fd2b160e01b815260040160405180910390fd5b6020810151511580610a4c57508051155b15610a6a5760405163c19e07c560e01b815260040160405180910390fd5b600654821115610a8d576040516351c7ab5160e01b815260040160405180910390fd5b81600003610a9b5760065491505b6001600160a01b038416610ad25760405163f4a513b960e01b81526001600160a01b03871660048201526024015b60405180910390fd5b6001600160a01b0386166000908152600860209081526040808320600a83528184206002855290925290912054151580610b2f57506001600160a01b0387166000908152600a602090815260408083206003845290915290205415155b15610b4d5760405163075fd2b160e01b815260040160405180910390fd5b6000600282015460ff166006811115610b6857610b68611b1b565b03610bb557866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc628a8a604051610ba8929190612138565b60405180910390a2610bf9565b866001600160a01b03167faf5977db3aa7e6fc7d05e21c791ebd214afa76da27c8d8ddc8e4a9f742d7b2368a8a604051610bf0929190612138565b60405180910390a25b805474ffffffffffffffffffffffffffffffffffffffffff19166101006001600160a01b0387160260ff1916178615151781556001810183905581516003820190815560208301518391906004840190610c5390826121eb565b505050600201805460ff1916600117905550939695505050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610ce1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0591906122aa565b6109225760405163075fd2b160e01b815260040160405180910390fd5b60005460ff161561096e57604051630b18626760e41b815260040160405180910390fd5b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610d7e57506001600160a01b03811631610648565b610d8883836116a9565b9050610648565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610dbe5761062482826116de565b6106248383836116fa565b610dd1611826565b6001600160a01b03808316600090815260086020908152604091829020825160a081018452815460ff8082161515835261010090910490951692810192909252600181015492820192909252600282015490926060840191166006811115610e3b57610e3b611b1b565b6006811115610e4c57610e4c611b1b565b81526020016003820160405180604001604052908160008201548152602001600182018054610e7a90612163565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea690612163565b8015610ef35780601f10610ec857610100808354040283529160200191610ef3565b820191906000526020600020905b815481529060010190602001808311610ed657829003601f168201915b505050919092525050509052506005549091506001600160401b031642118015610f335750600281606001516006811115610f3057610f30611b1b565b14155b15610f4057600360608201525b919050565b610f4f8282611749565b600480546001600160401b03848116600160a81b90810267ffffffffffffffff60a81b1990931692909217928390556005805485831667ffffffffffffffff199091168117909155604080519390940490911682526020820152338183015290517f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d933599181900360600190a15050565b6001600160a01b0382166000818152600b6020908152604091829020805460ff191685151590811790915591513381529192917fb50515ac68c6752ce8d118ee9c125360859a03dcb13a0cfb6b3faad68217f4bd910160405180910390a35050565b60078190556040518181527f3105a3dc553e12034caac9827a83c245fe17eef4ee1eedb45238ac7449a5bbec906020015b60405180910390a150565b6040805180820190915260008082526020820152600061109b84610dc9565b60408101519091506002826060015160068111156110bb576110bb611b1b565b036110c4575060005b604080518082019091526020928301516001600160a01b03168152918201529392505050565b60065481101561110d57604051631f2d84f160e31b815260040160405180910390fd5b60068190556040518181527fbcd4e1b1c11d47ad4c6c51ad73d8e77d29313bc1a491330186316a74a1f995f490602001611071565b60045460009042600160a81b9091046001600160401b0316118061117057506005546001600160401b031642115b1561117b5750600090565b50600190565b600061118c82610dc9565b6060015192915050565b61119f8261178f565b80516004805460ff191691151591909117815560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd53928082019260209290918290030181865afa158015611215573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123991906122c7565b600460016101000a8154816001600160a01b0302191690836001600160a01b0316021790555061127181602001518260400151610f45565b61127e81608001516110ea565b6106e68160600151611040565b6001600160a01b0381166000908152600b602052604090205460ff166106e65760405163075fd2b160e01b815260040160405180910390fd5b6112cc6117de565b600080838060200190518101906112e391906122e4565b6001600160a01b038083166000818152600860209081526040808320948a1683526009825280832093835292905220549294509092509060ff168061133f575060028082015460ff16600681111561133d5761133d611b1b565b145b156113685760405163f4a513b960e01b81526001600160a01b0384166004820152602401610ac9565b6001600160a01b0380851660009081526009602090815260408083209387168352928152828220805460ff19166001908117909155600a909152918120908460068111156113b8576113b8611b1b565b60068111156113c9576113c9611b1b565b815260200190815260200160002060008282546113e69190611fef565b92505081905550826001600160a01b03167fb735720d94de3d169791e2f713cbac8da02eb4d5a344d5a6d5ef542fdf3b24388386604051611428929190612313565b60405180910390a26007546001600160a01b0384166000908152600a602090815260408083206002845290915290205403610745576002818101805460ff1916909117905560015460405163068bcd8d60e01b815260048101919091526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063068bcd8d90602401600060405180830381865afa1580156114d9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115019190810190612342565b9050600082600101549050806002600082825461151e91906123f5565b909155505060408201518354611543919061010090046001600160a01b031683610d8f565b82546001840154604080516001600160a01b036101009094048416815260208101929092528883168282015251918716917fb5b51454adfa840bd593658325a60a50b0216f12eb5d2937efe6cea935675b7d9181900360600190a250505050505050565b6004805460405163dd93da4360e01b81526001600160a01b038581169382019390935260009283926101009004169063dd93da4390602401600060405180830381865afa1580156115fc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526116249190810190612408565b600480548251604051635e8a791560e01b8152928301526001600160a01b038681166024840152929350610100900490911690635e8a791590604401602060405180830381865afa15801561167d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a191906122aa565b949350505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af16106e65763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661173f576390b8ec186000526004601cfd5b6000603452505050565b816001600160401b03164211806117715750806001600160401b0316826001600160401b0316115b156106e657604051637fcce2a960e01b815260040160405180910390fd5b611797610925565b600154156117b85760405163439a74c960e01b815260040160405180910390fd5b806000036117d957604051637fcce2a960e01b815260040160405180910390fd5b600155565b60045442600160a81b9091046001600160401b0316118061180957506005546001600160401b031642115b1561096e5760405162b828c960e81b815260040160405180910390fd5b6040805160a081018252600080825260208201819052918101829052906060820190815260200161186a604051806040016040528060008152602001606081525090565b905290565b6001600160a01b038116811461092257600080fd5b60006020828403121561189657600080fd5b81356118a18161186f565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156118e0576118e06118a8565b60405290565b604051601f8201601f191681016001600160401b038111828210171561190e5761190e6118a8565b604052919050565b60006001600160401b0382111561192f5761192f6118a8565b5060051b60200190565b600082601f83011261194a57600080fd5b8135602061195f61195a83611916565b6118e6565b82815260059290921b8401810191818101908684111561197e57600080fd5b8286015b848110156119a25780356119958161186f565b8352918301918301611982565b509695505050505050565b60006001600160401b038211156119c6576119c66118a8565b50601f01601f191660200190565b600082601f8301126119e557600080fd5b81356119f361195a826119ad565b818152846020838601011115611a0857600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215611a3a57600080fd5b83356001600160401b0380821115611a5157600080fd5b611a5d87838801611939565b94506020860135915080821115611a7357600080fd5b50611a80868287016119d4565b9250506040840135611a918161186f565b809150509250925092565b60008060408385031215611aaf57600080fd5b8235611aba8161186f565b91506020830135611aca8161186f565b809150509250929050565b60008060408385031215611ae857600080fd5b82356001600160401b03811115611afe57600080fd5b611b0a858286016119d4565b9250506020830135611aca8161186f565b634e487b7160e01b600052602160045260246000fd5b60078110611b4f57634e487b7160e01b600052602160045260246000fd5b9052565b60005b83811015611b6e578181015183820152602001611b56565b50506000910152565b60008151808452611b8f816020860160208601611b53565b601f01601f19169290920160200192915050565b602081528151151560208201526001600160a01b0360208301511660408201526040820151606082015260006060830151611be16080840182611b31565b50608083015160a083810152805160c084015260200151604060e08401526116a1610100840182611b77565b6007811061092257600080fd5b60008060408385031215611c2d57600080fd5b8235611c388161186f565b91506020830135611aca81611c0d565b6001600160401b038116811461092257600080fd5b60008060408385031215611c7057600080fd5b8235611c7b81611c48565b91506020830135611aca81611c48565b801515811461092257600080fd5b60008060408385031215611cac57600080fd5b8235611cb78161186f565b91506020830135611aca81611c8b565b600060208284031215611cd957600080fd5b5035919050565b60008060408385031215611cf357600080fd5b82356001600160401b0380821115611d0a57600080fd5b611d1686838701611939565b9350602091508185013581811115611d2d57600080fd5b85019050601f81018613611d4057600080fd5b8035611d4e61195a82611916565b81815260059190911b82018301908381019088831115611d6d57600080fd5b928401925b82841015611d94578335611d8581611c8b565b82529284019290840190611d72565b80955050505050509250929050565b60008060408385031215611db657600080fd5b82356001600160401b0380821115611dcd57600080fd5b611dd986838701611939565b9350602091508185013581811115611df057600080fd5b8501601f81018713611e0157600080fd5b8035611e0f61195a82611916565b81815260059190911b82018401908481019089831115611e2e57600080fd5b8584015b83811015611e6657803586811115611e4a5760008081fd5b611e588c89838901016119d4565b845250918601918601611e32565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015611ec257815180516001600160a01b03168552860151868501529284019290850190600101611e94565b5091979650505050505050565b602081016106488284611b31565b60008060408385031215611ef057600080fd5b8235915060208301356001600160401b03811115611f0d57600080fd5b611f19858286016119d4565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b600060a08284031215611f4b57600080fd5b60405160a081018181106001600160401b0382111715611f6d57611f6d6118a8565b6040528251611f7b81611c8b565b81526020830151611f8b81611c48565b60208201526040830151611f9e81611c48565b6040820152606083810151908201526080928301519281019290925250919050565b8281526040602082015260006116a16040830184611b77565b634e487b7160e01b600052601160045260246000fd5b8082018082111561064857610648611fd9565b634e487b7160e01b600052600160045260246000fd5b600082601f83011261202957600080fd5b815161203761195a826119ad565b81815284602083860101111561204c57600080fd5b6116a1826020830160208701611b53565b60006040828403121561206f57600080fd5b604051604081016001600160401b038282108183111715612092576120926118a8565b816040528293508451835260208501519150808211156120b157600080fd5b506120be85828601612018565b6020830152505092915050565b600080600080608085870312156120e157600080fd5b84516120ec8161186f565b60208601519094506120fd8161186f565b6040860151606087015191945092506001600160401b0381111561212057600080fd5b61212c8782880161205d565b91505092959194509250565b60408152600061214b6040830185611b77565b90506001600160a01b03831660208301529392505050565b600181811c9082168061217757607f821691505b60208210810361219757634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561062457600081815260208120601f850160051c810160208610156121c45750805b601f850160051c820191505b818110156121e3578281556001016121d0565b505050505050565b81516001600160401b03811115612204576122046118a8565b612218816122128454612163565b8461219d565b602080601f83116001811461224d57600084156122355750858301515b600019600386901b1c1916600185901b1785556121e3565b600085815260208120601f198616915b8281101561227c5788860151825594840194600190910190840161225d565b508582101561229a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156122bc57600080fd5b81516118a181611c8b565b6000602082840312156122d957600080fd5b81516118a18161186f565b600080604083850312156122f757600080fd5b82516123028161186f565b6020840151909250611aca81611c0d565b604081016123218285611b31565b6001600160a01b03831660208301529392505050565b8051610f408161186f565b60006020828403121561235457600080fd5b81516001600160401b038082111561236b57600080fd5b9083019060c0828603121561237f57600080fd5b6123876118be565b8251815260208301516123998161186f565b602082015260408301516123ac8161186f565b60408201526060830151828111156123c357600080fd5b6123cf8782860161205d565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b8181038181111561064857610648611fd9565b60006020828403121561241a57600080fd5b81516001600160401b038082111561243157600080fd5b9083019060c0828603121561244557600080fd5b61244d6118be565b825181526020830151602082015260408301518281111561246d57600080fd5b61247987828601612018565b60408301525060608301518281111561249157600080fd5b61249d8782860161205d565b6060830152506124af60808401612337565b60808201526124c060a08401612337565b60a08201529594505050505056fea2646970667358221220fc011f2f341a09c25eb19525416ec005b15553dc745faeedc534edffcb7a452864736f6c63430008130033";
