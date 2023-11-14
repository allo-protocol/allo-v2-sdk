import { Chain, PublicClient, Transport } from "viem";
export declare const create: (chain: Chain, rpc?: string) => PublicClient<Transport, Chain>;
