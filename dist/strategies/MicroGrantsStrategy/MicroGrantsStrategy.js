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
const allo_config_1 = require("../../Allo/allo.config");
const Client_1 = require("../../Client/Client");
const microGrants_config_1 = require("./microGrants.config");
const microGrantsGov_config_1 = require("./microGrantsGov.config");
const microGrantsHats_config_1 = require("./microGrantsHats.config");
const types_1 = require("../../Common/types");
const chains_config_1 = require("../../chains.config");
const types_2 = require("./types");
class MicroGrantsStrategy {
    constructor({ chain, rpc, address, poolId }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
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
            abi: microGrants_config_1.abi,
            publicClient: this.client,
        });
        this.strategy = address;
    }
    checkPoolId() {
        if (this.poolId === BigInt(-1))
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
            const allocator = yield this.contract.read.allocators([allocatorAddress]);
            return allocator;
        });
    }
    allocated(allocatorAddress, recipientAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const allocated = yield this.contract.read.allocated([
                allocatorAddress,
                recipientAddress,
            ]);
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
    recipientAllocations(recipientId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const allocations = yield this.contract.read.recipientAllocations([
                recipientId,
                status,
            ]);
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
    getHatsAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const contractReader = (0, viem_1.getContract)({
                address: this.strategy,
                abi: microGrantsHats_config_1.abi,
                publicClient: this.client,
            });
            const hatsAddress = (yield contractReader.read.hats());
            return hatsAddress;
        });
    }
    getHatId() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const contractReader = (0, viem_1.getContract)({
                address: this.strategy,
                abi: microGrantsHats_config_1.abi,
                publicClient: this.client,
            });
            const hatId = (yield contractReader.read.hatId());
            return hatId;
        });
    }
    getGovAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const contractReader = (0, viem_1.getContract)({
                address: this.strategy,
                abi: microGrantsGov_config_1.abi,
                publicClient: this.client,
            });
            const govAddress = (yield contractReader.read.gov());
            return govAddress;
        });
    }
    getSnapshotReference() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const contractReader = (0, viem_1.getContract)({
                address: this.strategy,
                abi: microGrantsGov_config_1.abi,
                publicClient: this.client,
            });
            const reference = (yield contractReader.read.snapshotReference());
            return reference;
        });
    }
    getMinimumVotePower() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const contractReader = (0, viem_1.getContract)({
                address: this.strategy,
                abi: microGrantsGov_config_1.abi,
                publicClient: this.client,
            });
            const votePower = (yield contractReader.read.minVotePower());
            return votePower;
        });
    }
    getStrategyContractId(strategyContract) {
        return __awaiter(this, void 0, void 0, function* () {
            const contractReader = (0, viem_1.getContract)({
                address: strategyContract,
                abi: microGrantsGov_config_1.abi,
                publicClient: this.client,
            });
            const strategyId = yield contractReader.read.getStrategyId();
            switch (strategyId) {
                case "0x697f0592ebd05466d2d24454477e11d69c475d7a7c4134f15ddc1ea9811bb16f":
                    return {
                        strategyId: strategyId,
                    };
                case "0x741ac1e2f387d83f219f6b5349d35ec34902cf94019d117335e0045d2e0ed912":
                    return {
                        strategyId: strategyId,
                    };
                case "0x5aa24dcfcd55a1e059a172e987b3456736b4856c71e57aaf52e9a965897318dd":
                    return {
                        strategyId: strategyId,
                    };
                case "0xb87f34c0968bd74d43a6a5b72831a5ea733a4783a026b9fc9b1d17adf51214d2":
                    return {
                        strategyId: strategyId,
                    };
                case "0x414f2ea9b91b8ee2e35a380fa0af0e14079832cc93530a61a4893b3dbf0a9aba":
                    return {
                        strategyId: strategyId,
                    };
                case "0xed28ce0387d1786c1a38404047e9eecc4d1dcaeff695b867e912483e36c3d770":
                    return {
                        strategyId: strategyId,
                    };
                case "0xc5263e972c91d7ff40708bc71239a2b6cbc8768704e210ca3069e2e11fc195df":
                    return {
                        strategyId: strategyId,
                    };
                case "0xecc48557f4826bd1181a4495232d6d07f248ef9cc0a650e64520f6c9f7458a8c":
                    return {
                        strategyId: strategyId,
                    };
                default:
                    return {
                        strategyId: "0x",
                    };
            }
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
    getInitializeDataHats(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("(bool, uint64, uint64, uint256, uint256), address, uint256"), [
                [
                    params.useRegistryAnchor,
                    params.allocationStartTime,
                    params.allocationEndTime,
                    params.approvalThreshold,
                    params.maxRequestedAmount,
                ],
                params.hats,
                params.hatId,
            ]);
            return encoded;
        });
    }
    getInitializeDataGov(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("bool, uint64, uint64, uint256, uint256, address, uint256, uint256"), [
                params.useRegistryAnchor,
                params.allocationStartTime,
                params.allocationEndTime,
                params.approvalThreshold,
                params.maxRequestedAmount,
                params.gov,
                params.snapshotReference,
                params.minVotePower,
            ]);
            console.log(params);
            return encoded;
        });
    }
    getDeployParams(strategyType) {
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, string"), [this.allo.address(), strategyType]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        // create the proper bytecode
        const bytecode = strategyType == types_2.StrategyType.Gov
            ? microGrantsGov_config_1.bytecode
            : strategyType == types_2.StrategyType.Hats
                ? microGrantsHats_config_1.bytecode
                : microGrants_config_1.bytecode;
        const abi = strategyType == types_2.StrategyType.Gov
            ? microGrantsGov_config_1.abi
            : strategyType == types_2.StrategyType.Hats
                ? microGrantsHats_config_1.abi
                : microGrants_config_1.abi;
        return {
            abi: abi,
            bytecode: (bytecode + constructorArgsNo0x),
        };
    }
    getBatchAllocationData(allocations) {
        this.checkPoolId();
        const encodedParams = [];
        allocations.forEach((allocation) => {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, uint8"), [allocation.recipientId, allocation.status]);
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
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, uint8"), [recipientId, status]);
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
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, uint256, (uint256, string)"), [
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
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: microGrants_config_1.abi,
            functionName: "increasemaxRequestedAmountAllowed",
            args: [amount],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getSetAllocatorData(data) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: microGrants_config_1.abi,
            functionName: "setAllocator",
            args: [data.allocatorAddress, data.flag],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getBatchSetAllocatorData(data) {
        this.checkStrategy();
        const allocatorArray = [];
        const flagArray = [];
        data.map((allocator) => {
            allocatorArray.push(allocator.allocatorAddress);
            flagArray.push(allocator.flag);
        });
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: microGrants_config_1.abi,
            functionName: "batchSetAllocator",
            args: [allocatorArray, flagArray],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    getUpdatePoolTimestampsData(allocationStartTime, allocationEndTime) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: microGrants_config_1.abi,
            functionName: "updatePoolTimestamps",
            args: [allocationStartTime, allocationEndTime],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
}
exports.MicroGrantsStrategy = MicroGrantsStrategy;
