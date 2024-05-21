"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyFactory = void 0;
const viem_1 = require("viem");
const chains_config_1 = require("../../chains.config");
const Client_1 = require("../../Client/Client");
const strategyFactory_DGL_config_1 = require("./strategyFactory.DGL.config");
const strategyFactory_DVMDT_config_1 = require("./strategyFactory.DVMDT.config");
class StrategyFactory {
    constructor({ chain, factoryType, address, rpc, }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.factoryType = factoryType;
        this.client = (0, Client_1.create)(usedChain, rpc);
        if (address)
            this.setFactoryAddress(address);
    }
    checkFactoryAddress() {
        if (!this.factory) {
            throw new Error("No factory address provided");
        }
    }
    getAbi() {
        switch (this.factoryType) {
            case "DGL":
                return strategyFactory_DGL_config_1.abi;
            case "DVMDT":
                return strategyFactory_DVMDT_config_1.abi;
            default:
                throw new Error("Invalid factory type");
        }
    }
    getAddress(chainId) {
        switch (this.factoryType) {
            case "DGL":
                return (0, strategyFactory_DGL_config_1.getAddress)(chainId);
            case "DVMDT":
                return (0, strategyFactory_DVMDT_config_1.getAddress)(chainId);
            default:
                throw new Error("Invalid factory type");
        }
    }
    setFactoryAddress(address) {
        if (address) {
            this.contract = (0, viem_1.getContract)({
                address: address,
                abi: this.getAbi(),
                client: {
                    public: this.client,
                },
            });
            this.factory = address;
        }
    }
    getCreateStrategyData() {
        this.checkFactoryAddress();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: this.getAbi(),
            functionName: "createStrategy",
            args: [],
        });
        return {
            to: this.factory,
            data: encodedData,
            value: "0",
        };
    }
    getCreateStrategyDataByChainId(chainId) {
        this.checkFactoryAddress();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: this.getAbi(),
            functionName: "createStrategy",
            args: [],
        });
        return {
            to: this.getAddress(chainId),
            data: encodedData,
            value: "0",
        };
    }
}
exports.StrategyFactory = StrategyFactory;
