"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectAllocationStrategy = void 0;
const viem_1 = require("viem");
const Allo_1 = require("../../Allo/Allo");
const chains_config_1 = require("../../chains.config");
const Client_1 = require("../../Client/Client");
const types_1 = require("../../types");
const allo_config_1 = require("../../Allo/allo.config");
const directAllocation_config_1 = require("./directAllocation.config");
class DirectAllocationStrategy {
    constructor({ chain, rpc, address, poolId }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.allo = new Allo_1.Allo({ chain, rpc });
        if (address) {
            this.contract = (0, viem_1.getContract)({
                address: address,
                abi: directAllocation_config_1.abi,
                client: {
                    public: this.client,
                }
            });
            this.strategy = address;
        }
        this.poolId = poolId || BigInt(-1);
    }
    getDeployParams() {
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address,string"), [this.allo.address(), "DirectAllocationStrategyv1.0"]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        return {
            abi: directAllocation_config_1.abi,
            bytecode: (directAllocation_config_1.bytecode +
                constructorArgsNo0x),
        };
    }
    setPoolId(poolId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.poolId = poolId;
            const strategyAddress = yield this.allo.getStrategy(poolId);
            this.setContract(strategyAddress);
        });
    }
    setContract(address) {
        this.contract = (0, viem_1.getContract)({
            address: address,
            abi: directAllocation_config_1.abi,
            client: {
                public: this.client,
            }
        });
        this.strategy = address;
    }
    checkPoolId() {
        if (this.poolId === BigInt(-1))
            throw new Error("DirectAllocationStrategy: No poolId provided. Please call `setPoolId` first.");
    }
    checkStrategy() {
        if (!this.strategy)
            throw new Error("DirectAllocationStrategy: No strategy address provided. Please call `setContract` first.");
    }
    getNative() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const native = yield this.contract.read.NATIVE();
            return native;
        });
    }
    getAllo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.contract.read.getAllo();
        });
    }
    getPoolId() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const poolId = yield this.contract.read.getPoolId();
            return poolId;
        });
    }
    getStrategyId() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const id = yield this.contract.read.getStrategyId();
            return id;
        });
    }
    // Write methods
    getAllocateData(allocation) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address,uint256,address,uint256"), [allocation.profileOwner, allocation.amount, allocation.token, allocation.nonce]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "allocate",
            args: [this.poolId, encoded],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: allocation.token.toLowerCase() === types_1.NATIVE ? allocation.amount.toString() : "0",
        };
    }
    // Note: batchAllocate will not be supported for NATIVE tokens until Allo v2.1
    getBatchAllocateData(allocations) {
        this.checkPoolId();
        const encodedParams = [];
        allocations.forEach((allocation) => {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address,uint256,address,uint256"), [allocation.profileOwner, allocation.amount, allocation.token, allocation.nonce]);
            encodedParams.push(encoded);
        });
        const poolIds = Array(encodedParams.length).fill(this.poolId);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "batchAllocate",
            args: [poolIds, encodedParams],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: "0",
        };
    }
}
exports.DirectAllocationStrategy = DirectAllocationStrategy;
