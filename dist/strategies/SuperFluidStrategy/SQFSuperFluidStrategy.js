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
exports.SQFSuperFluidStrategy = void 0;
const viem_1 = require("viem");
const Allo_1 = require("../../Allo/Allo");
const chains_config_1 = require("../../chains.config");
const Client_1 = require("../../Client/Client");
const superfluid_config_1 = require("./superfluid.config");
const allo_config_1 = require("../../Allo/allo.config");
class SQFSuperFluidStrategy {
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
                abi: superfluid_config_1.abi,
                client: {
                    public: this.client,
                }
            });
            this.strategy = address;
        }
        this.poolId = poolId || BigInt(-1);
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
            abi: superfluid_config_1.abi,
            client: {
                public: this.client,
            }
        });
        this.strategy = address;
    }
    checkPoolId() {
        if (this.poolId === BigInt(-1))
            throw new Error("SQFSuperfluidStrategy: No poolId provided. Please call `setPoolId` first.");
    }
    checkStrategy() {
        if (!this.strategy)
            throw new Error("SQFSuperfluidStrategy: No strategy address provided. Please call `setContract` first.");
    }
    // Init and Deploy
    getInitializeData(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("bool, bool, address, address, address, uint64, uint64, uint64, uint64, uint256, uint256"), [
                params.useRegistryAnchor,
                params.metadataRequired,
                params.passportDecoder,
                params.superfluidHost,
                params.allocationSuperToken,
                params.registrationStartTime,
                params.registrationEndTime,
                params.allocationStartTime,
                params.allocationEndTime,
                params.minPassportScore,
                params.initialSuperAppBalance,
            ]);
            return encoded;
        });
    }
    getDeployParams() {
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, string"), [this.allo.address(), "SQFSuperfluidv1"]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        // create the proper bytecode
        const bytecode = superfluid_config_1.bytecode;
        const abi = superfluid_config_1.abi;
        return {
            abi: abi,
            bytecode: (bytecode + constructorArgsNo0x),
        };
    }
    // Getters
    getNative() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const native = yield this.contract.read.NATIVE();
            return native;
        });
    }
    getAllocationEndTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const endTime = yield this.contract.read.allocationEndTime();
            return endTime;
        });
    }
    getAllocationStartTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const startTime = yield this.contract.read.allocationStartTime();
            return startTime;
        });
    }
    getRegistrationEndTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const endTime = yield this.contract.read.registrationEndTime();
            return endTime;
        });
    }
    getRegistrationStartTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const startTime = yield this.contract.read.registrationStartTime();
            return startTime;
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
    getInitialSuperAppBalance() {
        this.checkStrategy();
        return this.contract.read.initialSuperAppBalance();
    }
    getSuperfluidHost() {
        this.checkStrategy();
        return this.contract.read.superfluidHost();
    }
    getAllocationSuperToken() {
        this.checkStrategy();
        return this.contract.read.allocationSuperToken();
    }
    getPoolSuperToken() {
        this.checkStrategy();
        return this.contract.read.poolSuperToken();
    }
    getGdaPool() {
        this.checkStrategy();
        return this.contract.read.gdaPool();
    }
    getPassportDecoder() {
        this.checkStrategy();
        return this.contract.read.passportDecoder();
    }
    getMinPassportScore() {
        this.checkStrategy();
        return this.contract.read.minPassportScore();
    }
    getMetadataRequired() {
        this.checkStrategy();
        return this.contract.read.metadataRequired();
    }
    getRegistry() {
        this.checkStrategy();
        return this.contract.read.registry();
    }
    getRecipientIdBySuperApp(superApp) {
        this.checkStrategy();
        return this.contract.read.superApps([superApp]);
    }
    getTotalUnitsByRecipient(recipientId) {
        this.checkStrategy();
        return this.contract.read.totalUnitsByRecipient([recipientId]);
    }
    getRecipientFlowRate(recipientId) {
        this.checkStrategy();
        return this.contract.read.recipientFlowRate([recipientId]);
    }
    getSuperApp(recipientId) {
        this.checkStrategy();
        return this.contract.read.getSuperApp([recipientId]);
    }
    // Write functions
    getUpdatePoolTimestampsData(registrationStartTime, registrationEndTime, allocationStartTime, allocationEndTime) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: superfluid_config_1.abi,
            functionName: "updatePoolTimestamps",
            args: [
                registrationStartTime,
                registrationEndTime,
                allocationStartTime,
                allocationEndTime,
            ],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getUpdateMinPassportScoreData(minPassportScore) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: superfluid_config_1.abi,
            functionName: "updateMinPassportScore",
            args: [minPassportScore],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getRegisterRecipientData(data) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, (uint256, string)"), [
            data.registryAnchor,
            data.recipientAddress,
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
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, (uint256, string)"), [
                registerData.registryAnchor,
                registerData.recipientAddress,
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
    getDistributeData(flowRate) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("int96"), [flowRate]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "distribute",
            args: [this.poolId, [], encoded],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getAllocationData(recipientId, flowRate) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, int96"), [recipientId, flowRate]);
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
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, int96"), [allocation.recipientId, allocation.flowRate]);
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
    getReviewRecipientData(data) {
        this.checkStrategy();
        const recipientIds = data.map((recipient) => recipient.recipientId);
        const statuses = data.map((recipient) => recipient.recipientStatus);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: superfluid_config_1.abi,
            functionName: "reviewRecipients",
            args: [recipientIds, statuses],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getCancelRecipientsData(recipientIds) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: superfluid_config_1.abi,
            functionName: "cancelRecipients",
            args: [recipientIds],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getWithdrawData(token, amount) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: superfluid_config_1.abi,
            functionName: "withdraw",
            args: [token, amount],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getCloseStream() {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: superfluid_config_1.abi,
            functionName: "closeStream",
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
}
exports.SQFSuperFluidStrategy = SQFSuperFluidStrategy;
