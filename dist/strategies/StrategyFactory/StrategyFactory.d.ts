import { TransactionData } from "../../types";
export type StrategyFactoryType = "DGL" | "DVMDT";
export declare class StrategyFactory {
    private client;
    private contract;
    private chainId;
    private factory;
    private factoryType;
    constructor({ chain, factoryType, address, rpc, }: {
        chain: number;
        factoryType: StrategyFactoryType;
        address?: `0x${string}`;
        rpc?: string;
    });
    private getAbi;
    private getAddress;
    setFactoryAddress(address: `0x${string}`): void;
    getCreateStrategyData(): TransactionData;
    getCreateStrategyDataByChainId(chainId: number): TransactionData;
}
