import { Chain } from "viem";
export declare const SeiIcon = "https://ipfs.io/ipfs/QmUvNaLwzNf1bHjqTMW1aBjRgd5FrsTDqjSnyypLwxv8x5";
/** Local development chain support */
export declare const devChain1: Chain;
export declare const seiDevnet: {
    id: number;
    name: string;
    network: string;
    iconUrl: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: {
        default: {
            http: string[];
        };
        public: {
            http: string[];
        };
    };
    blockExplorers: {
        default: {
            name: string;
            url: string;
        };
    };
};
