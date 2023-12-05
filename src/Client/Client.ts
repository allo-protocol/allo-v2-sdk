import { Chain, PublicClient, Transport, createPublicClient, http } from "viem";

/**
 * 
 * Returns a PublicClient instance that can be used to interact with the Allo v2 contracts.
 * 
 * @remarks
 * This is a wrapper around the viem PublicClient class that sets the correct chain ID and transport.
 * 
 * @param chain - The chain ID to connect to (this is a Chain type from viem)
 * @param rpc - The url of the RPC endpoint
 * @returns - A PublicClient instance
 * 
 * @beta
 */
export const create = (chain: Chain, rpc?: string): PublicClient<Transport, Chain> => {
  const client = createPublicClient({
    chain: chain,
    transport: http(rpc ?? ""),
  });

  return client;
};