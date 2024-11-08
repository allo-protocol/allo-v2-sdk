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
exports.BaseStrategy = void 0;
// BaseStrategy.ts
const viem_1 = require("viem");
const Client_1 = require("../../Client/Client");
const baseStrategy_config_1 = require("./baseStrategy.config");
const chains_config_1 = require("../../chains.config");
class BaseStrategy {
    constructor({ chain, rpc }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.addr = (0, baseStrategy_config_1.getAddress)(usedChain);
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.contract = (0, viem_1.getContract)({
            address: this.addr,
            abi: baseStrategy_config_1.abi,
            client: {
                public: this.client,
            },
        });
    }
    address() {
        return this.addr;
    }
    // Read-only functions
    getAllo() {
        return __awaiter(this, void 0, void 0, function* () {
            const allo = yield this.contract.read.getAllo();
            return allo;
        });
    }
    getStrategyId() {
        return __awaiter(this, void 0, void 0, function* () {
            const strategyId = yield this.contract.read.getStrategyId();
            return strategyId;
        });
    }
    getPoolId() {
        return __awaiter(this, void 0, void 0, function* () {
            const poolId = yield this.contract.read.getPoolId();
            return poolId;
        });
    }
    getPoolAmount() {
        return __awaiter(this, void 0, void 0, function* () {
            const poolAmount = yield this.contract.read.getPoolAmount();
            return poolAmount;
        });
    }
    // Write functions
    initialize(poolId, data) {
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: baseStrategy_config_1.abi,
            functionName: "initialize",
            args: [poolId, data],
        });
        return {
            to: this.addr,
            data: encodedData,
            value: "0",
        };
    }
    increasePoolAmount(amount) {
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: baseStrategy_config_1.abi,
            functionName: "increasePoolAmount",
            args: [amount],
        });
        return {
            to: this.addr,
            data: encodedData,
            value: "0",
        };
    }
    withdraw(token, amount, recipient) {
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: baseStrategy_config_1.abi,
            functionName: "withdraw",
            args: [token, amount, recipient],
        });
        return {
            to: this.addr,
            data: encodedData,
            value: "0",
        };
    }
    register(recipients, data, sender) {
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: baseStrategy_config_1.abi,
            functionName: "register",
            args: [recipients, data, sender],
        });
        return {
            to: this.addr,
            data: encodedData,
            value: "0",
        };
    }
    allocate(recipients, amounts, data, sender) {
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: baseStrategy_config_1.abi,
            functionName: "allocate",
            args: [recipients, amounts, data, sender],
        });
        return {
            to: this.addr,
            data: encodedData,
            value: "0",
        };
    }
    distribute(recipientIds, data, sender) {
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: baseStrategy_config_1.abi,
            functionName: "distribute",
            args: [recipientIds, data, sender],
        });
        return {
            to: this.addr,
            data: encodedData,
            value: "0",
        };
    }
    // Receive function to handle native token transfers
    receive() {
        return {
            to: this.addr,
            data: "0x",
            value: "0",
        };
    }
}
exports.BaseStrategy = BaseStrategy;
