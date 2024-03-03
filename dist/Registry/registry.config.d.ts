import { Address } from "viem";
export declare const address: Address;
export declare const abi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_owner";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "AMOUNT_MISMATCH";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NONCE_NOT_AVAILABLE";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NOT_PENDING_OWNER";
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
        readonly internalType: "bytes32";
        readonly name: "profileId";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
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
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "anchor";
        readonly type: "address";
    }];
    readonly name: "ProfileCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "profileId";
        readonly type: "bytes32";
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
    readonly name: "ProfileMetadataUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "profileId";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "anchor";
        readonly type: "address";
    }];
    readonly name: "ProfileNameUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "profileId";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "ProfileOwnerUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "profileId";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "pendingOwner";
        readonly type: "address";
    }];
    readonly name: "ProfilePendingOwnerUpdated";
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
    readonly inputs: readonly [];
    readonly name: "ALLO_OWNER";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
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
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }];
    readonly name: "acceptProfileOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address[]";
        readonly name: "_members";
        readonly type: "address[]";
    }];
    readonly name: "addMembers";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "anchorToProfileId";
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
        readonly name: "_nonce";
        readonly type: "uint256";
    }, {
        readonly internalType: "string";
        readonly name: "_name";
        readonly type: "string";
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
        readonly internalType: "address";
        readonly name: "_owner";
        readonly type: "address";
    }, {
        readonly internalType: "address[]";
        readonly name: "_members";
        readonly type: "address[]";
    }];
    readonly name: "createProfile";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_anchor";
        readonly type: "address";
    }];
    readonly name: "getProfileByAnchor";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
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
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "anchor";
            readonly type: "address";
        }];
        readonly internalType: "struct IRegistry.Profile";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "profileId";
        readonly type: "bytes32";
    }];
    readonly name: "getProfileById";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
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
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "anchor";
            readonly type: "address";
        }];
        readonly internalType: "struct IRegistry.Profile";
        readonly name: "";
        readonly type: "tuple";
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
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "_member";
        readonly type: "address";
    }];
    readonly name: "isMemberOfProfile";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "_owner";
        readonly type: "address";
    }];
    readonly name: "isOwnerOfProfile";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "_account";
        readonly type: "address";
    }];
    readonly name: "isOwnerOrMemberOfProfile";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "profileIdToPendingOwner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "profilesById";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "id";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }, {
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
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
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "anchor";
        readonly type: "address";
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
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address[]";
        readonly name: "_members";
        readonly type: "address[]";
    }];
    readonly name: "removeMembers";
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
    readonly name: "renounceRole";
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
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
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
    readonly name: "updateProfileMetadata";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "string";
        readonly name: "_name";
        readonly type: "string";
    }];
    readonly name: "updateProfileName";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_profileId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "_pendingOwner";
        readonly type: "address";
    }];
    readonly name: "updateProfilePendingOwner";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
