import {
    PublicClient,
    Transport,
    Chain,
    extractChain,
    getContract,
  } from "viem";
  import { Allo } from "../../Allo/Allo";
  import { ConstructorArgs } from "../../types";
  import { supportedChains } from "../../chains.config";
  import { create } from "../../Client/Client";
  
  export class RFPSimpleStrategy {
    private client: PublicClient<Transport, Chain>;
  
    private contract: any;
  
    private strategy: `0x${string}` | undefined;
  
    private poolId: bigint;
  
    private allo: Allo;
  
    constructor({ chain, rpc, address, poolId }: ConstructorArgs) {
      const usedChain = extractChain({
        chains: supportedChains,
        id: chain as any,
      });
  
      this.client = create(usedChain, rpc);
  
      this.allo = new Allo({ chain, rpc });
  
      if (address) {
        this.contract = getContract({
          address: address,
          abi: [],
          publicClient: this.client,
        });
        this.strategy = address;
      }
  
      this.poolId = poolId || BigInt(-1);
    }
  }