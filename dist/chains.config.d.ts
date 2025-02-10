import { Chain } from "viem";
export declare const sei: {
    blockExplorers: {
        readonly default: {
            readonly name: "Seitrace";
            readonly url: "https://seitrace.com";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D";
        };
    };
    id: 1329;
    name: "Sei";
    nativeCurrency: {
        readonly name: "Sei";
        readonly symbol: "SEI";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://evm-rpc.sei-apis.com/"];
            readonly webSocket: readonly ["wss://evm-ws.sei-apis.com/"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
};
export declare const supportedChains: Chain[];
