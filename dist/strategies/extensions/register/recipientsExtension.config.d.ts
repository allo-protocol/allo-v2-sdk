import { Chain } from "viem";
export declare const getAddress: (chain: Chain) => `0x${string}`;
export declare const abi: readonly [{
    readonly inputs: readonly [];
    readonly name: "RecipientsExtension_RegistrationNotActive";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipientId";
        readonly type: "address";
    }];
    readonly name: "RecipientsExtension_RecipientError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RecipientsExtension_InvalidMetada";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RecipientsExtension_RecipientNotAccepted";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RecipientsExtension_RegistrationHasNotEnded";
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
    readonly name: "RegistrationTimestampsUpdated";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "REVIEW_EACH_STATUS";
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
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "recipientIndexToRecipientId";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
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
            readonly internalType: "uint64";
            readonly name: "statusIndex";
            readonly type: "uint64";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "protocol";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "pointer";
                readonly type: "string";
            }];
            readonly internalType: "struct Metadata";
            readonly name: "metadata";
            readonly type: "tuple";
        }];
        readonly internalType: "struct IRecipientsExtension.Recipient";
        readonly name: "_recipient";
        readonly type: "tuple";
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
        readonly internalType: "struct IRecipientsExtension.ApplicationStatus[]";
        readonly name: "_statuses";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "_refRecipientsCounter";
        readonly type: "uint256";
    }];
    readonly name: "reviewRecipients";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
}];
