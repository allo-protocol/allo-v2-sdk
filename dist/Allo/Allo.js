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
exports.Allo = void 0;
const viem_1 = require("viem");
const Client_1 = require("../Client/Client");
const allo_config_1 = require("./allo.config");
const chains_config_1 = require("../chains.config");
class Allo {
    constructor({ chain, rpc }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.addr = (0, allo_config_1.getAddress)(usedChain);
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.contract = (0, viem_1.getContract)({
            address: this.addr,
            abi: allo_config_1.abi,
            client: {
                public: this.client,
            }
        });
    }
    address() {
        return this.addr;
    }
    // Read only funcitons
    getFeeDenominator() {
        return __awaiter(this, void 0, void 0, function* () {
            const denominator = yield this.contract.read.getFeeDenominator();
            return denominator;
        });
    }
    isPoolAdmin(poolId, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const isAdmin = yield this.contract.read.isPoolAdmin([poolId, address]);
            return isAdmin;
        });
    }
    isPoolManager(poolId, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const isManager = yield this.contract.read.isPoolManager([poolId, address]);
            return isManager;
        });
    }
    getStrategy(poolId) {
        return __awaiter(this, void 0, void 0, function* () {
            const strategyAddress = this.contract.read.getStrategy([poolId]);
            return strategyAddress;
        });
    }
    getPercentFee() {
        return __awaiter(this, void 0, void 0, function* () {
            const percentage = this.contract.read.getPercentFee();
            return percentage;
        });
    }
    getBaseFee() {
        return __awaiter(this, void 0, void 0, function* () {
            const baseFee = this.contract.read.getBaseFee();
            return baseFee;
        });
    }
    getTreasury() {
        return __awaiter(this, void 0, void 0, function* () {
            const treasuryAddress = this.contract.read.getTreasury();
            return treasuryAddress;
        });
    }
    getRegistry() {
        return __awaiter(this, void 0, void 0, function* () {
            const registryAddress = this.contract.read.getRegistry();
            return registryAddress;
        });
    }
    isCloneableStrategy() {
        return __awaiter(this, void 0, void 0, function* () {
            const isCloneable = this.contract.read.isCloneableStrategy();
            return isCloneable;
        });
    }
    getPool(poolId) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = this.contract.read.getPool([poolId]);
            return pool;
        });
    }
    // Write functions
    createPoolWithCustomStrategy({ profileId, strategy, initStrategyData, token, amount, metadata, managers, }) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "createPoolWithCustomStrategy",
            args: [
                profileId,
                strategy,
                initStrategyData,
                token,
                amount,
                metadata,
                managers,
            ],
        });
        const value = token.toLocaleLowerCase() ===
            "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLocaleLowerCase()
            ? amount.toString()
            : "0";
        return {
            to: this.addr,
            data: data,
            value: value,
        };
    }
    createPool({ profileId, strategy, initStrategyData, token, amount, metadata, managers, }) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "createPool",
            args: [
                profileId,
                strategy,
                initStrategyData,
                token,
                amount,
                metadata,
                managers,
            ],
        });
        const value = token.toLocaleLowerCase() ===
            "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLocaleLowerCase()
            ? amount.toString()
            : "0";
        return {
            to: this.addr,
            data: data,
            value: value,
        };
    }
    // updatePoolMetadata(uint256 _poolId, Metadata memory _metadata)
    updatePoolMetadata({ poolId, metadata, }) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "updatePoolMetadata",
            args: [poolId, metadata],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    updateRegistry(registry) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "updateRegistry",
            args: [registry],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    updateTreasury(registry) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "updateRegistry",
            args: [registry],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    updatePercentFee(percentage) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "updatePercentFee",
            args: [percentage],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    updateBaseFee(percentage) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "updateBaseFee",
            args: [percentage],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    addToCloneableStrategies(strategy) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "addToCloneableStrategies",
            args: [strategy],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    removeFromCloneableStrategies(strategy) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "removeFromCloneableStrategies",
            args: [strategy],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    addPoolManager(poolId, manager) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "addPoolManager",
            args: [poolId, manager],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    removePoolManager(poolId, manager) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "removePoolManager",
            args: [poolId, manager],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    recoverFunds(token, recipient) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "recoverFunds",
            args: [token, recipient],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    // Strategy functions
    registerRecipient(poolId, strategyData) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "registerRecipient",
            args: [poolId, strategyData],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    batchRegisterRecipient(poolIds, strategyData) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "batchRegisterRecipient",
            args: [poolIds, strategyData],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    fundPool(poolId, amount) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "fundPool",
            args: [poolId, amount],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    allocate(poolId, strategyData) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "allocate",
            args: [poolId, strategyData],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    batchAllocate(poolIds, strategyData) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "batchAllocate",
            args: [poolIds, strategyData],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    distribute(poolId, recipientId, strategyData) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "distribute",
            args: [poolId, recipientId, strategyData],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
}
exports.Allo = Allo;
