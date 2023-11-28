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
exports.DonationVotingMerkleDistributionStrategy = void 0;
const viem_1 = require("viem");
const Client_1 = require("../../Client/Client");
const donationVoting_config_1 = require("./donationVoting.config");
const Allo_1 = require("../../Allo/Allo");
const chains_config_1 = require("../../chains.config");
class DonationVotingMerkleDistributionStrategy {
    constructor({ chain, rpc, address }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.client = (0, Client_1.create)(usedChain, rpc);
        if (!address)
            throw new Error("DonationVotingMerkleDistributionStrategy: No strategy address provided");
        this.strategy = address;
        this.allo = new Allo_1.Allo({ chain, rpc }); // to call allocate
        this.contract = (0, viem_1.getContract)({
            address: address,
            abi: donationVoting_config_1.abi,
            publicClient: this.client,
        });
        this.poolId = 0; // TODO: set poolId
    }
    // Read only functions
    getNative() {
        return __awaiter(this, void 0, void 0, function* () {
            const native = yield this.contract.read.NATIVE();
            return native;
        });
    }
    getPermit2() {
        return __awaiter(this, void 0, void 0, function* () {
            const permit2 = yield this.contract.read.PERMIT2();
            return permit2;
        });
    }
    getAllocationEndTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const endTime = yield this.contract.read.allocationEndTime();
            return endTime;
        });
    }
    getAllocationStartTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const startTime = yield this.contract.read.allocationStartTime();
            return startTime;
        });
    }
    isAllowedTokens(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const allowed = yield this.contract.read.allowedTokens(token);
            return allowed;
        });
    }
    getClaims(recipient, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const claims = yield this.contract.read.claims([recipient, token]);
            return claims;
        });
    }
    getDistributionMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            const metadata = yield this.contract.read.distributionMetadata();
            return metadata;
        });
    }
    getDistributionStarted() {
        return __awaiter(this, void 0, void 0, function* () {
            const started = yield this.contract.read.distributionStarted();
            return started;
        });
    }
    getAllo() {
        return __awaiter(this, void 0, void 0, function* () {
            const allo = yield this.contract.read.getAllo();
            return allo;
        });
    }
    getPayouts(recipientIds, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const payouts = yield this.contract.read.getPayouts([recipientIds, data]);
            const payoutSummary = payouts.map((payout) => {
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
            const amount = yield this.contract.read.getPoolAmount();
            return amount;
        });
    }
    getPoolId() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield this.contract.read.getPoolId();
            return id;
        });
    }
    getRecipient(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipient = yield this.contract.read.getRecipient([recipientId]);
            return recipient;
        });
    }
    getRecipientStatus(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.contract.read.getRecipientStatus([recipientId]);
            return status;
        });
    }
    getStrategyId() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield this.contract.read.getStrategyId();
            return id;
        });
    }
    hasBeenDistributed(index) {
        return __awaiter(this, void 0, void 0, function* () {
            const distributed = yield this.contract.read.hasBeenDistributed([index]);
            return distributed;
        });
    }
    isDistributionSet() {
        return __awaiter(this, void 0, void 0, function* () {
            const set = yield this.contract.read.isDistributionSet();
            return set;
        });
    }
    isPoolActive() {
        return __awaiter(this, void 0, void 0, function* () {
            const active = yield this.contract.read.isPoolActive();
            return active;
        });
    }
    isValidAllocator(allocator) {
        return __awaiter(this, void 0, void 0, function* () {
            const valid = yield this.contract.read.isValidAllocator([allocator]);
            return valid;
        });
    }
    getMerkleRoot() {
        return __awaiter(this, void 0, void 0, function* () {
            const root = yield this.contract.read.merkleRoot();
            return root;
        });
    }
    metadataRequired() {
        return __awaiter(this, void 0, void 0, function* () {
            const required = yield this.contract.read.metadataRequired();
            return required;
        });
    }
    recipientToStatusIndexes(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            const indexes = yield this.contract.read.recipientToStatusIndexes([
                recipient,
            ]);
            return indexes;
        });
    }
    recipientsCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            const counter = yield this.contract.read.recipientsCounter();
            return counter;
        });
    }
    registrationEndTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const endTime = yield this.contract.read.registrationEndTime();
            return endTime;
        });
    }
    registrationStartTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const startTime = yield this.contract.read.registrationStartTime();
            return startTime;
        });
    }
    statusesBitMap(index) {
        return __awaiter(this, void 0, void 0, function* () {
            const bitMap = yield this.contract.read.statusesBitMap([index]);
            return bitMap;
        });
    }
    totalPayoutAmount() {
        return __awaiter(this, void 0, void 0, function* () {
            const amount = yield this.contract.read.totalPayoutAmount();
            return amount;
        });
    }
    useRegistryAnchor() {
        return __awaiter(this, void 0, void 0, function* () {
            const anchor = yield this.contract.read.useRegistryAnchor();
            return anchor;
        });
    }
    // Callable by allo client
    allocate(strategyData) {
        return this.allo.allocate(this.poolId, strategyData);
    }
    batchAllocate(strategyData) {
        const poolIds = Array(strategyData.length).fill(this.poolId);
        return this.allo.batchAllocate(poolIds, strategyData);
    }
    registerRecipient(strategyData) {
        return this.allo.registerRecipient(this.poolId, strategyData);
    }
    batchRegisterRecipient(strategyData) {
        const poolIds = Array(strategyData.length).fill(this.poolId);
        return this.allo.batchRegisterRecipient(poolIds, strategyData);
    }
    fundPool(amount) {
        return this.allo.fundPool(this.poolId, amount);
    }
    distribute(recipientIds, data) {
        return this.allo.distribute(this.poolId, recipientIds, data);
    }
    // Write functions
    claim(claims) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVoting_config_1.abi,
            functionName: "claim",
            args: [claims],
        });
        return {
            to: this.strategy,
            data: data,
            value: "0",
        };
    }
    multicall(data) {
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: donationVoting_config_1.abi,
            functionName: "multicall",
            args: [data],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    reviewRecipients(statuses) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVoting_config_1.abi,
            functionName: "reviewRecipients",
            args: [statuses],
        });
        return {
            to: this.strategy,
            data: data,
            value: "0",
        };
    }
    updateDistribution(merkleRoot, distributionMetadata) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVoting_config_1.abi,
            functionName: "updateDistribution",
            args: [merkleRoot, distributionMetadata],
        });
        return {
            to: this.strategy,
            data: data,
            value: "0",
        };
    }
    updatePoolTimestamps(registrationStartTime, registrationEndTime, allocationStartTime, allocationEndTime) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVoting_config_1.abi,
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
            data: data,
            value: "0",
        };
    }
    withdraw(amount) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVoting_config_1.abi,
            functionName: "withdraw",
            args: [amount],
        });
        return {
            to: this.strategy,
            data: data,
            value: "0",
        };
    }
}
exports.DonationVotingMerkleDistributionStrategy = DonationVotingMerkleDistributionStrategy;
