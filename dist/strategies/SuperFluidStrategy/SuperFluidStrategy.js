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
exports.SuperFluidStrategy = void 0;
const viem_1 = require("viem");
const Allo_1 = require("../../Allo/Allo");
const chains_config_1 = require("../../chains.config");
const Client_1 = require("../../Client/Client");
const superfluid_config_1 = require("./superfluid.config");
class SuperFluidStrategy {
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
                publicClient: this.client,
            });
            this.strategy = address;
        }
        this.poolId = poolId || -1;
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
            publicClient: this.client,
        });
        this.strategy = address;
    }
    checkPoolId() {
        if (this.poolId === -1)
            throw new Error("SQFSuperfluidStrategy: No poolId provided. Please call `setPoolId` first.");
    }
    checkStrategy() {
        if (!this.strategy)
            throw new Error("SQFSuperfluidStrategy: No strategy address provided. Please call `setContract` first.");
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
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, string"), [this.allo.address(), "SQFSuperfluidStrategyv1"]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        // create the proper bytecode
        const bytecode = superfluid_config_1.bytecode;
        const abi = superfluid_config_1.abi;
        return {
            abi: abi,
            bytecode: (bytecode + constructorArgsNo0x),
        };
    }
}
exports.SuperFluidStrategy = SuperFluidStrategy;
