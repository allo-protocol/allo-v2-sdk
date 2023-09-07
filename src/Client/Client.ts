import { Chain, PublicClient, Transport, createPublicClient, http } from "viem";
import { SupportedChain } from "./chains";


export const create = (chain: Chain, rpc?: string): PublicClient<Transport, Chain> => {
  const client = createPublicClient({
    chain: chain,
    transport: http(rpc ?? ""),
  });

  return client;
};