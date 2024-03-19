import { ConstructorArgs } from "../../types";
export declare class RFPSimpleStrategy {
    private client;
    private contract;
    private strategy;
    private poolId;
    private allo;
    constructor({ chain, rpc, address, poolId }: ConstructorArgs);
}
