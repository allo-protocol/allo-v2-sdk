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
exports.MicroGrantsStrategy = void 0;
const viem_1 = require("viem");
const Allo_1 = require("../../Allo/Allo");
const Client_1 = require("../../Client/Client");
const microGrants_config_1 = require("./microGrants.config");
const allo_config_1 = require("../../Allo/allo.config");
const types_1 = require("../../Common/types");
const chains_config_1 = require("../../chains.config");
class MicroGrantsStrategy {
    constructor({ chain, rpc, address, poolId }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.allo = new Allo_1.Allo({ chain, rpc }); // to call allocate
        if (address) {
            this.contract = (0, viem_1.getContract)({
                address: address,
                abi: microGrants_config_1.abi,
                publicClient: this.client,
            });
            this.strategy = address;
        }
        this.poolId = poolId || -1;
    }
    setPoolId(poolId) {
        this.poolId = poolId;
    }
    setContract(address) {
        this.contract = (0, viem_1.getContract)({
            address: address,
            abi: microGrants_config_1.abi,
            publicClient: this.client,
        });
        this.strategy = address;
    }
    checkPoolId() {
        if (this.poolId === -1)
            throw new Error("MicroGrantsStrategy: No poolId provided. Please call `setPoolId` first.");
    }
    checkStrategy() {
        if (!this.strategy)
            throw new Error("MicroGrantsStrategy: No strategy address provided. Please call `setContract` first.");
    }
    getNative() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const native = yield this.contract.read.NATIVE();
            return native;
        });
    }
    allocator(allocatorAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const allocator = yield this.contract.read.allocators(allocatorAddress);
            return allocator;
        });
    }
    allocated(allocatorAddress, recipientAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const allocated = yield this.contract.read.allocated(allocatorAddress, recipientAddress);
            return allocated;
        });
    }
    allocationEndTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const endTime = yield this.contract.read.allocationEndTime();
            return endTime;
        });
    }
    allocationStartTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const startTime = yield this.contract.read.allocationStartTime();
            return startTime;
        });
    }
    approvalThreshold() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const threshold = yield this.contract.read.approvalThreshold();
            return threshold;
        });
    }
    getAllo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.allo;
        });
    }
    getPayouts(recipientIds) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const emptyData = Array(recipientIds.length).fill("0x");
            const payouts = yield this.contract.read.getPayouts([
                recipientIds,
                emptyData,
            ]);
            const payoutSummary = payouts.map((payout) => {
                this.checkStrategy();
                return {
                    address: payout.recipientAddress,
                    amount: payout.amount,
                };
            });
            return payoutSummary;
        });
    }
    getPoolAmount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const amount = yield this.contract.read.getPoolAmount();
            return amount;
        });
    }
    getPoolId() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const poolId = yield this.contract.read.getPoolId();
            return poolId;
        });
    }
    getRecipient(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const recipient = yield this.contract.read.getRecipient(recipientId);
            return recipient;
        });
    }
    getRecipientStatus(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const status = yield this.contract.read.getRecipientStatus(recipientId);
            return status;
        });
    }
    getStrategyId() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const id = yield this.contract.read.getStrategyId();
            return id;
        });
    }
    isPoolActive() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const active = yield this.contract.read.isPoolActive();
            return active;
        });
    }
    isValidAllocator(allocatorAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const valid = yield this.contract.read.isValidAllocator(allocatorAddress);
            return valid;
        });
    }
    recipientAllocations(recipientId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const allocations = yield this.contract.read.recipientAllocations(recipientId, status);
            return allocations;
        });
    }
    maxRequestedAmount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const maxRequestedAmount = yield this.contract.read.maxRequestedAmount();
            return maxRequestedAmount;
        });
    }
    useRegistryAnchor() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const useRegistryAnchor = yield this.contract.read.useRegistryAnchor();
            return useRegistryAnchor;
        });
    }
    getInitializeData(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("bool, uint64, uint64, uint256, uint256"), [
                params.useRegistryAnchor,
                params.allocationStartTime,
                params.allocationEndTime,
                params.approvalThreshold,
                params.maxRequestedAmount,
            ]);
            return encoded;
        });
    }
    getDeployParams() {
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, string"), [this.allo.address(), "MicroGrantsv1"]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        return {
            abi: microGrants_config_1.abi,
            bytecode: (microGrants_config_1.bytecode + constructorArgsNo0x),
        };
    }
    getBatchAllocationData(allocations) {
        this.checkPoolId();
        const encodedParams = [];
        allocations.forEach((allocation) => {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, enum"), [allocation.recipientId, allocation.status]);
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
    getAllocationData(recipientId, status) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, enum"), [recipientId, status]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "allocate",
            args: [this.poolId, encoded],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: "0",
        };
    }
    getRegisterRecipientData(data) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, uint256, (uint256, string)"), [
            data.registryAnchor || types_1.ZERO_ADDRESS,
            data.recipientAddress,
            data.requestedAmount,
            [data.metadata.protocol, data.metadata.pointer],
        ]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "registerRecipient",
            args: [this.poolId, encoded],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: "0",
        };
    }
    getBatchRegisterRecipientData(data) {
        this.checkPoolId();
        const encodedParams = [];
        data.forEach((registerData) => {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, uint256, (uit256, string)"), [
                registerData.registryAnchor || types_1.ZERO_ADDRESS,
                registerData.recipientAddress,
                registerData.requestedAmount,
                [registerData.metadata.protocol, registerData.metadata.pointer],
            ]);
            encodedParams.push(encoded);
        });
        const poolIds = Array(encodedParams.length).fill(this.poolId);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "batchRegisterRecipient",
            args: [poolIds, encodedParams],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: "0",
        };
    }
    getIncreasemaxRequestedAmountData(amount) {
        this.checkStrategy();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("uint256"), [amount]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: microGrants_config_1.abi,
            functionName: "increasemaxRequestedAmount",
            args: [encoded],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getSetAllocatorData(data) {
        this.checkStrategy();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, bool"), [data.allocatorAddress, data.flag]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: microGrants_config_1.abi,
            functionName: "setAllocator",
            args: [encoded],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getBatchSetAllocatorData(data) {
        this.checkStrategy();
        const encodedParams = [];
        data.forEach((setAllocatorData) => {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, bool"), [setAllocatorData.allocatorAddress, setAllocatorData.flag]);
            encodedParams.push(encoded);
        });
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: microGrants_config_1.abi,
            functionName: "batchSetAllocator",
            args: [encodedParams],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getUpdatePoolTimestampsData(allocationStartTime, allocationEndTime) {
        this.checkStrategy();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("uint64, uint64"), [allocationStartTime, allocationEndTime]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: microGrants_config_1.abi,
            functionName: "updatePoolTimestamps",
            args: [encoded],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
}
exports.MicroGrantsStrategy = MicroGrantsStrategy;
