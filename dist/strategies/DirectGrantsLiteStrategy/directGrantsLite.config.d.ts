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
    readonly name: "NON_ZERO_VALUE";
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
    readonly name: "REGISTRATION_ACTIVE";
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
        readonly internalType: "uint256";
        readonly name: "rowIndex";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "fullRow";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RecipientStatusUpdated";
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
        readonly name: "registrationStartTime";
        readonly type: "uint64";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "registrationEndTime";
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
    }, {
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "status";
        readonly type: "uint8";
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
        readonly internalType: "struct DirectGrantsLiteStrategy.Recipient";
        readonly name: "recipient";
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
    readonly name: "metadataRequired";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "recipientToStatusIndexes";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "recipientsCounter";
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
    readonly inputs: readonly [];
    readonly name: "registrationEndTime";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "registrationStartTime";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "statusRow";
            readonly type: "uint256";
        }];
        readonly internalType: "struct DirectGrantsLiteStrategy.ApplicationStatus[]";
        readonly name: "statuses";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "refRecipientsCounter";
        readonly type: "uint256";
    }];
    readonly name: "reviewRecipients";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "statusesBitMap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "_registrationStartTime";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "_registrationEndTime";
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
export declare const bytecode = "0x60c06040523480156200001157600080fd5b5060405162002b0238038062002b028339810160408190526200003491620000ba565b6001600160a01b038216608052604051829082906200005890829060200162000195565b60408051601f19818403018152919052805160209091012060a05250620001ca92505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b157818101518382015260200162000097565b50506000910152565b60008060408385031215620000ce57600080fd5b82516001600160a01b0381168114620000e657600080fd5b60208401519092506001600160401b03808211156200010457600080fd5b818501915085601f8301126200011957600080fd5b8151818111156200012e576200012e6200007e565b604051601f8201601f19908116603f011681019083821181831017156200015957620001596200007e565b816040528281528860208487010111156200017357600080fd5b6200018683602083016020880162000094565b80955050505050509250929050565b6020815260008251806020840152620001b681604085016020870162000094565b601f01601f19169190910160400192915050565b60805160a0516128f66200020c600039600061029101526000818161022201528181610a5101528181610e3101528181610ee3015261120601526128f66000f3fe6080604052600436106101a55760003560e01c80639af5c09d116100e1578063dff7d2c71161008a578063ef2920fc11610064578063ef2920fc146104ff578063f31db3d114610512578063f5b0dfb714610532578063f6f258911461055257600080fd5b8063dff7d2c71461048b578063eb11af93146104b2578063edd146cc146104df57600080fd5b8063b2b878d0116100bb578063b2b878d01461042a578063cb0e85a614610457578063df868ed31461047657600080fd5b80639af5c09d14610397578063a0cf0aea146103d5578063ac9650d8146103fd57600080fd5b80634ab4ba421161014e5780635708973911610128578063570897391461031a57806362812a391461033457806375777aaa1461036157806395355b3b1461038157600080fd5b80634ab4ba42146102b55780634d31d087146102ca57806351cff8d9146102fa57600080fd5b80632bbe0cae1161017f5780632bbe0cae1461025a57806338fff2d01461026d57806342fda9c71461028257600080fd5b806301fc1c64146101b15780630a6f0ee9146101f157806315cc481e1461021357600080fd5b366101ac57005b600080fd5b3480156101bd57600080fd5b506101de6101cc366004611b35565b60076020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156101fd57600080fd5b5061021161020c366004611d1a565b61057f565b005b34801561021f57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020016101e8565b610242610268366004611d91565b61059c565b34801561027957600080fd5b506001546101de565b34801561028e57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101de565b3480156102c157600080fd5b506002546101de565b3480156102d657600080fd5b506102ea6102e5366004611b35565b6105c1565b60405190151581526020016101e8565b34801561030657600080fd5b50610211610315366004611b35565b6105cc565b34801561032657600080fd5b506003546102ea9060ff1681565b34801561034057600080fd5b5061035461034f366004611b35565b6105f6565b6040516101e89190611e32565b34801561036d57600080fd5b5061021161037c366004611e96565b610607565b34801561038d57600080fd5b506101de60045481565b3480156103a357600080fd5b506003546103bd906201000090046001600160401b031681565b6040516001600160401b0390911681526020016101e8565b3480156103e157600080fd5b5061024273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561040957600080fd5b5061041d610418366004611ec4565b6106b9565b6040516101e89190611f38565b34801561043657600080fd5b5061044a610445366004611f9a565b6107ad565b6040516101e8919061206e565b34801561046357600080fd5b506003546102ea90610100900460ff1681565b34801561048257600080fd5b506102ea6108ab565b34801561049757600080fd5b506003546103bd90600160501b90046001600160401b031681565b3480156104be57600080fd5b506104d26104cd366004611b35565b6108ba565b6040516101e891906120dc565b3480156104eb57600080fd5b506102116104fa366004612104565b6108c5565b61021161050d366004611d91565b610920565b34801561051e57600080fd5b5061021161052d36600461214a565b61093e565b34801561053e57600080fd5b5061021161054d366004612204565b610a1c565b34801561055e57600080fd5b506101de61056d366004612204565b60066020526000908152604090205481565b610587610a46565b61058f610a91565b610597600080fd5b505050565b60006105a6610a46565b6105ae610a91565b6105b88383610ab4565b90505b92915050565b60006105bb82610e14565b336105d681610eb9565b60006105e28330610f6b565b9050806105f0843383610fb4565b50505050565b6105fe611ada565b6105bb82610fee565b3361061181610eb9565b61061b83836110e7565b6003805471ffffffffffffffffffffffffffffffff00001916620100006001600160401b03868116820267ffffffffffffffff60501b191692909217600160501b8684168102919091179384905560408051928504841683529304909116602082015233918101919091527f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d93359906060015b60405180910390a1505050565b6060816001600160401b038111156106d3576106d3611b59565b60405190808252806020026020018201604052801561070657816020015b60608152602001906001900390816106f15790505b50905060005b828110156107a6576107763085858481811061072a5761072a61221d565b905060200281019061073c9190612233565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061111a92505050565b8282815181106107885761078861221d565b6020026020010181905250808061079e90612296565b91505061070c565b5092915050565b815181516060919081146107d457604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b038111156107ee576107ee611b59565b60405190808252806020026020018201604052801561083357816020015b604080518082019091526000808252602082015281526020019060019003908161080c5790505b50905060005b828110156108a25761087d8682815181106108565761085661221d565b60200260200101518683815181106108705761087061221d565b602002602001015161113f565b82828151811061088f5761088f61221d565b6020908102919091010152600101610839565b50949350505050565b60006108b5611158565b905090565b60006105bb826111a0565b6108cd610a46565b6000818060200190518101906108e391906122c4565b90506108ef83826111bf565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a83836040516106ac929190612344565b610928610a46565b610930610a91565b61093a8282611375565b5050565b3361094881610eb9565b600454821461096a57604051637fcce2a960e01b815260040160405180910390fd5b825160005b81811015610a1557600085828151811061098b5761098b61221d565b602002602001015160000151905060008683815181106109ad576109ad61221d565b6020908102919091018101518101516000848152600683526040908190208290558051828152339381019390935290925083917f941884a9a55191a7401466aaf8a0d2b7c8b082055a5a2b345b83c73940172ac4910160405180910390a2505060010161096f565b5050505050565b610a24610a46565b8060026000828254610a36919061235d565b90915550610a4390508181565b50565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a8f5760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003610a8f57604051630f68fe6360e21b815260040160405180910390fd5b6000610abe6115c6565b6000806000610ae0604051806040016040528060008152602001606081525090565b60035460ff1615610b325786806020019051810190610aff9190612406565b91965093509050610b108587611615565b610b2d5760405163075fd2b160e01b815260040160405180910390fd5b610b9d565b86806020019051810190610b469190612406565b6001600160a01b03831615159650909450909250905083610b675785610b69565b815b9450838015610b7f5750610b7d8587611615565b155b15610b9d5760405163075fd2b160e01b815260040160405180910390fd5b600354610100900460ff168015610bc057506020810151511580610bc057508051155b15610bde5760405163c19e07c560e01b815260040160405180910390fd5b6001600160a01b038316610c155760405163f4a513b960e01b81526001600160a01b03861660048201526024015b60405180910390fd5b6001600160a01b03808616600090815260086020908152604090912080549286166101000274ffffffffffffffffffffffffffffffffffffffff0019909316929092178255825160018301908155908301518391906002840190610c7990826124e9565b505060035460ff169050610c8d5784610c90565b60015b815460ff19169015151781556001600160a01b0386166000908152600760205260408120549003610d6c576004546001600160a01b038716600090815260076020526040902055610ce68660015b60ff1661170d565b600088600454604051602001610cfd9291906125a8565b6040516020818303038152906040529050866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc62828a604051610d499291906125ca565b60405180910390a260048054906000610d6183612296565b919050555050610e09565b6000610d7787611740565b905060ff811660021480610d8e575060ff81166005145b15610da357610d9e876001610cde565b610dba565b60021960ff821601610dba57610dba876004610cde565b866001600160a01b03167fcec1da3f7f0b8a344dd1025d06e2ddd48b14880395997ad97cbdb439acc761d48a8a610df08b611740565b604051610dff939291906125f5565b60405180910390a2505b505050505092915050565b6001546040516329e40d4b60e01b81526000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916329e40d4b91610e789186906004019182526001600160a01b0316602082015260400190565b602060405180830381865afa158015610e95573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105bb919061262a565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610f2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4e919061262a565b610a435760405163075fd2b160e01b815260040160405180910390fd5b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610fa357506001600160a01b038116316105bb565b610fad8383611781565b90506105bb565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610fe35761059782826117b6565b6105978383836117d2565b610ff6611ada565b6001600160a01b038083166000908152600860209081526040918290208251606081018452815460ff81161515825261010090049094168483015282518084018452600182018054825260028301805493958701949293919284019161105b90612469565b80601f016020809104026020016040519081016040528092919081815260200182805461108790612469565b80156110d45780601f106110a9576101008083540402835291602001916110d4565b820191906000526020600020905b8154815290600101906020018083116110b757829003601f168201915b5050509190925250505090525092915050565b806001600160401b0316826001600160401b0316111561093a57604051637fcce2a960e01b815260040160405180910390fd5b60606105b8838360405180606001604052806027815260200161289a60279139611821565b6040805180820190915260008082526020820152600080fd5b60035460009042620100009091046001600160401b03161180159061118f5750600354600160501b90046001600160401b03164211155b1561119a5750600190565b50600090565b60006111ab82611740565b60ff1660068111156105bb576105bb6120c6565b6111c882611899565b80516003805460208085015161ffff1990921693151561ff001916939093176101009115159190910217905560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd5392600480820193918290030181865afa158015611255573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112799190612645565b6005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055604081015160038054606084015171ffffffffffffffffffffffffffffffff000019909116620100006001600160401b03948516810267ffffffffffffffff60501b191691909117600160501b9285168302179283905560016004556113169390830481169291909104166110e7565b600354604080516001600160401b0362010000840481168252600160501b909304909216602083015233908201527f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d933599060600160405180910390a15050565b8061137f81610eb9565b600034905060008480602001905181019061139a919061266d565b805190915060008190036113c157604051637fcce2a960e01b815260040160405180910390fd5b60005b818110156115985760008382815181106113e0576113e061221d565b6020026020010151905060008160200151905060006113fe82610fee565b9050600081602001519050600087868151811061141d5761141d61221d565b6020026020010151600001519050600088878151811061143f5761143f61221d565b602002602001015160400151905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316826001600160a01b03160361148757611484818b61273c565b99505b60208401516001600160a01b03166114bd5760405163f4a513b960e01b81526001600160a01b0386166004820152602401610c0c565b60026114c886611740565b60ff16146114e95760405163392c16fb60e21b815260040160405180910390fd5b61151f8260405180606001604052808f6001600160a01b03168152602001866001600160a01b03168152602001848152506118e8565b50846001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b82848f604051611577939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a2505050505050808061159090612296565b9150506113c4565b5082156115be576115be73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8685610fb4565b505050505050565b60035442620100009091046001600160401b031611806115f75750600354600160501b90046001600160401b031642115b15610a8f57604051635b04f6ad60e11b815260040160405180910390fd5b60055460405163dd93da4360e01b81526001600160a01b038481166004830152600092839291169063dd93da4390602401600060405180830381865afa158015611663573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261168b919081019061274f565b6005548151604051635e8a791560e01b815260048101919091526001600160a01b038681166024830152929350911690635e8a791590604401602060405180830381865afa1580156116e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611705919061262a565b949350505050565b600080600061171b85611967565b60009283526006602052604090922095811b600f90911b199091161790935550505050565b6001600160a01b038116600090815260076020526040812054810361176757506000919050565b60008061177384611967565b600f911c1695945050505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af161093a5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611817576390b8ec186000526004601cfd5b6000603452505050565b6060600080856001600160a01b03168560405161183e9190612815565b600060405180830381855af49150503d8060008114611879576040519150601f19603f3d011682016040523d82523d6000602084013e61187e565b606091505b509150915061188f868383876119da565b9695505050505050565b6118a1610a46565b600154156118c25760405163439a74c960e01b815260040160405180910390fd5b806000036118e357604051637fcce2a960e01b815260040160405180910390fd5b600155565b604081015160009073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038516016119495780341015611936576040516374c5672b60e01b815260040160405180910390fd5b6119448360200151826117b6565b61195d565b61195d848460000151856020015184611a53565b5060019392505050565b6001600160a01b0381166000908152600760205260408120548190819081906119929060019061273c565b905060006119a1604083612847565b905060006119b060408461285b565b6119bb90600461286f565b6000838152600660205260409020549298909750919550909350505050565b60608315611a49578251600003611a42576001600160a01b0385163b611a425760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c0c565b5081611705565b6117058383611ab0565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716611aa257637939f4246000526004601cfd5b600060605260405250505050565b815115611ac05781518083602001fd5b8060405162461bcd60e51b8152600401610c0c9190612886565b604051806060016040528060001515815260200160006001600160a01b03168152602001611b1b604051806040016040528060008152602001606081525090565b905290565b6001600160a01b0381168114610a4357600080fd5b600060208284031215611b4757600080fd5b8135611b5281611b20565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715611b9157611b91611b59565b60405290565b604051606081016001600160401b0381118282101715611b9157611b91611b59565b60405160c081016001600160401b0381118282101715611b9157611b91611b59565b604051601f8201601f191681016001600160401b0381118282101715611c0357611c03611b59565b604052919050565b60006001600160401b03821115611c2457611c24611b59565b5060051b60200190565b600082601f830112611c3f57600080fd5b81356020611c54611c4f83611c0b565b611bdb565b82815260059290921b84018101918181019086841115611c7357600080fd5b8286015b84811015611c97578035611c8a81611b20565b8352918301918301611c77565b509695505050505050565b60006001600160401b03821115611cbb57611cbb611b59565b50601f01601f191660200190565b600082601f830112611cda57600080fd5b8135611ce8611c4f82611ca2565b818152846020838601011115611cfd57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215611d2f57600080fd5b83356001600160401b0380821115611d4657600080fd5b611d5287838801611c2e565b94506020860135915080821115611d6857600080fd5b50611d7586828701611cc9565b9250506040840135611d8681611b20565b809150509250925092565b60008060408385031215611da457600080fd5b82356001600160401b03811115611dba57600080fd5b611dc685828601611cc9565b9250506020830135611dd781611b20565b809150509250929050565b60005b83811015611dfd578181015183820152602001611de5565b50506000910152565b60008151808452611e1e816020860160208601611de2565b601f01601f19169290920160200192915050565b602081528151151560208201526001600160a01b036020830151166040820152600060408301516060808401528051608084015260208101519050604060a084015261170560c0840182611e06565b6001600160401b0381168114610a4357600080fd5b60008060408385031215611ea957600080fd5b8235611eb481611e81565b91506020830135611dd781611e81565b60008060208385031215611ed757600080fd5b82356001600160401b0380821115611eee57600080fd5b818501915085601f830112611f0257600080fd5b813581811115611f1157600080fd5b8660208260051b8501011115611f2657600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611f8d57603f19888603018452611f7b858351611e06565b94509285019290850190600101611f5f565b5092979650505050505050565b60008060408385031215611fad57600080fd5b82356001600160401b0380821115611fc457600080fd5b611fd086838701611c2e565b9350602091508185013581811115611fe757600080fd5b8501601f81018713611ff857600080fd5b8035612006611c4f82611c0b565b81815260059190911b8201840190848101908983111561202557600080fd5b8584015b8381101561205d578035868111156120415760008081fd5b61204f8c8983890101611cc9565b845250918601918601612029565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b828110156120b957815180516001600160a01b0316855286015186850152928401929085019060010161208b565b5091979650505050505050565b634e487b7160e01b600052602160045260246000fd5b60208101600783106120fe57634e487b7160e01b600052602160045260246000fd5b91905290565b6000806040838503121561211757600080fd5b8235915060208301356001600160401b0381111561213457600080fd5b61214085828601611cc9565b9150509250929050565b600080604080848603121561215e57600080fd5b83356001600160401b0381111561217457600080fd5b8401601f8101861361218557600080fd5b80356020612195611c4f83611c0b565b82815260069290921b830181019181810190898411156121b457600080fd5b938201935b838510156121f45785858b0312156121d15760008081fd5b6121d9611b6f565b853581528386013584820152825293850193908201906121b9565b9997909101359750505050505050565b60006020828403121561221657600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261224a57600080fd5b8301803591506001600160401b0382111561226457600080fd5b60200191503681900382131561227957600080fd5b9250929050565b634e487b7160e01b600052601160045260246000fd5b6000600182016122a8576122a8612280565b5060010190565b805180151581146122bf57600080fd5b919050565b6000608082840312156122d657600080fd5b604051608081018181106001600160401b03821117156122f8576122f8611b59565b604052612304836122af565b8152612312602084016122af565b6020820152604083015161232581611e81565b6040820152606083015161233881611e81565b60608201529392505050565b8281526040602082015260006117056040830184611e06565b808201808211156105bb576105bb612280565b600082601f83011261238157600080fd5b815161238f611c4f82611ca2565b8181528460208386010111156123a457600080fd5b611705826020830160208701611de2565b6000604082840312156123c757600080fd5b6123cf611b6f565b90508151815260208201516001600160401b038111156123ee57600080fd5b6123fa84828501612370565b60208301525092915050565b60008060006060848603121561241b57600080fd5b835161242681611b20565b602085015190935061243781611b20565b60408501519092506001600160401b0381111561245357600080fd5b61245f868287016123b5565b9150509250925092565b600181811c9082168061247d57607f821691505b60208210810361249d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561059757600081815260208120601f850160051c810160208610156124ca5750805b601f850160051c820191505b818110156115be578281556001016124d6565b81516001600160401b0381111561250257612502611b59565b612516816125108454612469565b846124a3565b602080601f83116001811461254b57600084156125335750858301515b600019600386901b1c1916600185901b1785556115be565b600085815260208120601f198616915b8281101561257a5788860151825594840194600190910190840161255b565b50858210156125985787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6040815260006125bb6040830185611e06565b90508260208301529392505050565b6040815260006125dd6040830185611e06565b90506001600160a01b03831660208301529392505050565b6060815260006126086060830186611e06565b90506001600160a01b038416602083015260ff83166040830152949350505050565b60006020828403121561263c57600080fd5b6105b8826122af565b60006020828403121561265757600080fd5b8151611b5281611b20565b80516122bf81611b20565b6000602080838503121561268057600080fd5b82516001600160401b0381111561269657600080fd5b8301601f810185136126a757600080fd5b80516126b5611c4f82611c0b565b818152606091820283018401918482019190888411156126d457600080fd5b938501935b838510156127305780858a0312156126f15760008081fd5b6126f9611b97565b855161270481611b20565b81528587015161271381611b20565b8188015260408681015190820152835293840193918501916126d9565b50979650505050505050565b818103818111156105bb576105bb612280565b60006020828403121561276157600080fd5b81516001600160401b038082111561277857600080fd5b9083019060c0828603121561278c57600080fd5b612794611bb9565b82518152602083015160208201526040830151828111156127b457600080fd5b6127c087828601612370565b6040830152506060830151828111156127d857600080fd5b6127e4878286016123b5565b6060830152506127f660808401612662565b608082015261280760a08401612662565b60a082015295945050505050565b60008251612827818460208701611de2565b9190910192915050565b634e487b7160e01b600052601260045260246000fd5b60008261285657612856612831565b500490565b60008261286a5761286a612831565b500690565b80820281158282048414176105bb576105bb612280565b6020815260006105b86020830184611e0656fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122041804f1e9440f4235756b4f769af095a4c89ed08a91d172a4d807d14f03429bf64736f6c63430008130033";
