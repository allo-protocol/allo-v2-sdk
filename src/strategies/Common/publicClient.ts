import { createPublicClient, http } from "viem";
import { goerli } from "viem/chains";

// todo: sort out the typing of chainId here...
const publicClient = (chainId: any) =>
  createPublicClient({
    chain: chainId,
    transport: http(),
  });

export class PublicClient {
  chainId: any;
  publicClient: any;

  constructor(chainId: any) {
    this.chainId = chainId;
    this.publicClient = publicClient(goerli);
  }
}
