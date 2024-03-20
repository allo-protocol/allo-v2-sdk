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
exports.DirectGrantsStrategy = void 0;
const viem_1 = require("viem");
const Allo_1 = require("../../Allo/Allo");
const allo_config_1 = require("../../Allo/allo.config");
const Client_1 = require("../../Client/Client");
const chains_config_1 = require("../../chains.config");
const types_1 = require("../../types");
const directGrants_config_1 = require("./directGrants.config");
class DirectGrantsStrategy {
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
                abi: directGrants_config_1.abi,
                publicClient: this.client,
            });
            this.strategy = address;
        }
        this.poolId = poolId || BigInt(-1);
    }
    //  Get the DirectGrants strategy InitializeData
    getInitializeData(params) {
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("bool,bool,bool,uint128,uint128"), [
            params.registryGating,
            params.metadataRequired,
            params.grantAmountRequired,
            params.registrationStartTime,
            params.registrationEndTime,
        ]);
        return encoded;
    }
    getDeployParams() {
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address,string"), [this.allo.address(), "DirectGrantsSimpleStrategy1.1"]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        return {
            abi: directGrants_config_1.abi,
            bytecode: (directGrants_config_1.bytecode +
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
            abi: directGrants_config_1.abi,
            publicClient: this.client,
        });
        this.strategy = address;
    }
    checkPoolId() {
        if (this.poolId === BigInt(-1))
            throw new Error("DirectGrantsStrategy: No poolId provided. Please call `setPoolId` first.");
    }
    checkStrategy() {
        if (!this.strategy)
            throw new Error("DirectGrantsStrategy: No strategy address provided. Please call `setContract` first.");
    }
    getNative() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const native = yield this.contract.read.NATIVE();
            return native;
        });
    }
    getAllocatedGrantAmount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const amount = yield this.contract.read.allocatedGrantAmount();
            return amount;
        });
    }
    getGrantAmountRequired() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const required = yield this.contract.read.grantAmountRequired();
            return required;
        });
    }
    getMetadataRequired() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const required = yield this.contract.read.metadataRequired();
            return required;
        });
    }
    getAllo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.contract.read.getAllo();
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
            const recipient = yield this.contract.read.getRecipient([recipientId]);
            return recipient;
        });
    }
    getRecipientStatus(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const status = yield this.contract.read.getRecipientStatus([recipientId]);
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
            const valid = yield this.contract.read.isValidAllocator([allocatorAddress]);
            return valid;
        });
    }
    useRegistryAnchor() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const useRegistryAnchor = yield this.contract.read.useRegistryAnchor();
            return useRegistryAnchor;
        });
    }
    getMilestoneStatus(recipientId, milestoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const status = yield this.contract.read.getMilestoneStatus([
                recipientId,
                BigInt(milestoneId),
            ]);
            return status;
        });
    }
    getMilestones(recipientAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const milestones = yield this.contract.read.getMilestones([
                recipientAddress,
            ]);
            return milestones;
        });
    }
    getUpcomingMilestone(recipientAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const milestone = yield this.contract.read.upcomingMilestone([
                recipientAddress,
            ]);
            return milestone;
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
    // Write methods
    getSetMilestonesData(recipientId, milestones) {
        this.checkPoolId();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: directGrants_config_1.abi,
            functionName: "setMilestones",
            args: [recipientId, milestones],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getReviewSetMilestonesData(recipientId, status, milestoneHash) {
        this.checkPoolId();
        // todo: add milestone hash logic
        const encoded = (0, viem_1.encodeFunctionData)({
            abi: directGrants_config_1.abi,
            functionName: "reviewSetMilestones",
            args: [recipientId, status, milestoneHash],
        });
        return {
            to: this.strategy,
            data: encoded,
            value: "0",
        };
    }
    getSubmitMilestonesData(recipientId, milestoneId, metadata) {
        this.checkPoolId();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: directGrants_config_1.abi,
            functionName: "submitMilestone",
            args: [recipientId, BigInt(milestoneId), metadata],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getRejectMilestoneData(recipientId, milestoneId) {
        this.checkPoolId();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: directGrants_config_1.abi,
            functionName: "rejectMilestone",
            args: [recipientId, BigInt(milestoneId)],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getSetRecipientStatusToInReviewData(recipientIds) {
        this.checkPoolId();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: directGrants_config_1.abi,
            functionName: "setRecipientStatusToInReview",
            args: [recipientIds],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getSetPoolActiveData(flag) {
        this.checkPoolId();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: directGrants_config_1.abi,
            functionName: "setPoolActive",
            args: [flag],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getRegisterRecipientData(data) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address,address,uint256,(uint256,string)"), [
            data.registryAnchor || types_1.ZERO_ADDRESS,
            data.recipientAddress,
            data.grantAmount,
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
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address,address,uint256,(uint256,string)"), [
                registerData.registryAnchor || types_1.ZERO_ADDRESS,
                registerData.recipientAddress,
                registerData.grantAmount,
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
    getAllocationData(recipientId, status, grantAmount) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address,uint8,uint256"), [recipientId, status, grantAmount]);
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
    getBatchAllocationData(allocations) {
        this.checkPoolId();
        const encodedParams = [];
        allocations.forEach((allocation) => {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address,uint8,uint256"), [
                allocation.recipientId,
                allocation.status,
                BigInt(allocation.grantAmount),
            ]);
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
    getDistributeData(recipientIds) {
        this.checkPoolId();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "distribute",
            args: [this.poolId, recipientIds, "0x"],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: "0",
        };
    }
    getUpdatePoolTimestampsData(registrationStartTime, registrationEndTime) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: directGrants_config_1.abi,
            functionName: "updatePoolTimestamps",
            args: [registrationStartTime, registrationEndTime],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
}
exports.DirectGrantsStrategy = DirectGrantsStrategy;
