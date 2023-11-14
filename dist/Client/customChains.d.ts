export declare const pgn: {
    readonly id: 424;
    readonly name: "Public Goods Network";
    readonly network: "pgn";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "ETH";
        readonly symbol: "ETH";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.publicgoods.network"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.publicgoods.network"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Explorer";
            readonly url: "https://explorer.publicgoods.network";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0x42c27071b47AE8E6669891487dC6394112748331";
            readonly blockCreated: 1623104;
        };
    };
    readonly testnet: false;
};
export declare const pgnSepolia: {
    readonly id: 58008;
    readonly name: "PGN Sepolia Testnet";
    readonly network: "pgn-sepolia";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "ETH";
        readonly symbol: "ETH";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://sepolia.publicgoods.network"];
        };
        readonly public: {
            readonly http: readonly ["https://sepolia.publicgoods.network"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Explorer";
            readonly url: "https://explorer.sepolia.publicgoods.network";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xA541E4e79Df59B94B1Db85e997c94E43C685f856";
            readonly blockCreated: 3312423;
        };
    };
    readonly testnet: true;
};
