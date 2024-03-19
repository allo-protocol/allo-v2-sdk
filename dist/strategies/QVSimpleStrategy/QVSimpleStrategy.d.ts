import { ConstructorArgs, DeployParams } from "../../types";
import { InitializeParamsSimple } from "./types";
export declare class QVSimpleStrategy {
    private client;
    private contract;
    private strategy;
    private poolId;
    private allo;
    constructor({ chain, rpc, address, poolId }: ConstructorArgs);
    getInitializeData(params: InitializeParamsSimple): `0x${string}`;
    getDeployParams(): DeployParams;
    setPoolId(poolId: bigint): Promise<void>;
    setContract(address: `0x${string}`): void;
}
