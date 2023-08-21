import { Chain, PublicClient, Transport } from "viem";
import { ConstructorArgs } from "../Registry/types";

export class Allo {
    private client: PublicClient<Transport, Chain>;
    private contract: any;

    constructor({ chain, rpc }: ConstructorArgs)
}