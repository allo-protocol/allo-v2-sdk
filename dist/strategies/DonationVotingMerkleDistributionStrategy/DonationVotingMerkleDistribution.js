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
const Allo_1 = require("../../Allo/Allo");
const types_1 = require("./types");
const chains_config_1 = require("../../chains.config");
const donationVotingVault_config_1 = require("./donationVotingVault.config");
const donationVotingDirect_config_1 = require("./donationVotingDirect.config");
const allo_config_1 = require("../../Allo/allo.config");
class DonationVotingMerkleDistributionStrategy {
    constructor({ chain, rpc, address, poolId }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.allo = new Allo_1.Allo({ chain, rpc }); // to call allocate
        if (address) {
            this.strategy = address;
            this.contract = (0, viem_1.getContract)({
                address: address,
                abi: donationVotingVault_config_1.abi,
                publicClient: this.client,
            });
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
            abi: donationVotingVault_config_1.abi,
            publicClient: this.client,
        });
        this.strategy = address;
    }
    checkPoolId() {
        if (this.poolId === -1)
            throw new Error("DonationVotingMerkleDistributionStrategy: No poolId provided. Please call `setPoolId` first.");
    }
    checkStrategy() {
        if (!this.strategy)
            throw new Error("DonationVotingMerkleDistributionStrategy: No strategy address provided. Please call `setContract` first.");
    }
    // Init and Deploy
    getInitializeData(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("bool, bool, uint64, uint64, uint64, uint64, address[]"), [
                params.useRegistryAnchor,
                params.metadataRequired,
                params.registrationStartTime,
                params.registrationEndTime,
                params.allocationStartTime,
                params.allocationEndTime,
                params.allowedTokens,
            ]);
            return encoded;
        });
    }
    getDeployParams(strategyType) {
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, string"), [this.allo.address(), strategyType]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        // create the proper bytecode
        const bytecode = strategyType === types_1.StrategyTypeDonationVoting.Vault
            ? donationVotingVault_config_1.bytecode
            : donationVotingDirect_config_1.bytecode;
        const abi = strategyType === types_1.StrategyTypeDonationVoting.Vault ? donationVotingVault_config_1.abi : donationVotingDirect_config_1.abi;
        return {
            abi: abi,
            bytecode: (bytecode + constructorArgsNo0x),
        };
    }
    // Read only functions
    getNative() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const native = yield this.contract.read.NATIVE();
            return native;
        });
    }
    getPermit2() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const permit2 = yield this.contract.read.PERMIT2();
            return permit2;
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
    getIsAllowedToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const allowed = yield this.contract.read.allowedTokens(token);
            return allowed;
        });
    }
    getClaim(recipient, token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const claims = yield this.contract.read.claims([recipient, token]);
            return claims;
        });
    }
    getDistributionMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const metadata = yield this.contract.read.distributionMetadata();
            return metadata;
        });
    }
    getDistributionStarted() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const started = yield this.contract.read.distributionStarted();
            return started;
        });
    }
    getAllo() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const allo = yield this.contract.read.getAllo();
            return allo;
        });
    }
    getPayouts(recipientIds, data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
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
            this.checkStrategy();
            const amount = yield this.contract.read.getPoolAmount();
            return amount;
        });
    }
    getPoolId() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const id = yield this.contract.read.getPoolId();
            return id;
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
    getHasBeenDistributed(index) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const distributed = yield this.contract.read.hasBeenDistributed([index]);
            return distributed;
        });
    }
    getIsDistributionSet() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const set = yield this.contract.read.isDistributionSet();
            return set;
        });
    }
    getIsPoolActive() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const active = yield this.contract.read.isPoolActive();
            return active;
        });
    }
    getIsValidAllocator(allocator) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const valid = yield this.contract.read.isValidAllocator([allocator]);
            return valid;
        });
    }
    getMerkleRoot() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const root = yield this.contract.read.merkleRoot();
            return root;
        });
    }
    getMetadataRequired() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const required = yield this.contract.read.metadataRequired();
            return required;
        });
    }
    getRecipientToStatusIndexes(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const indexes = yield this.contract.read.recipientToStatusIndexes([
                recipient,
            ]);
            return indexes;
        });
    }
    getRecipientsCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const counter = yield this.contract.read.recipientsCounter();
            return counter;
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
    getStatusAtIndex(index) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const bitMap = yield this.contract.read.statusesBitMap([index]);
            return bitMap;
        });
    }
    getTotalPayoutAmount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const amount = yield this.contract.read.totalPayoutAmount();
            return amount;
        });
    }
    useRegistryAnchor() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const anchor = yield this.contract.read.useRegistryAnchor();
            return anchor;
        });
    }
    // Callable by allo client
    getAllocationData(data, ethAmount) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("((address, uint256), uint256, uint256), bytes32"), [
            [
                [data.permit.permitted.token, data.permit.permitted.amount],
                data.permit.nonce,
                data.permit.deadline,
            ],
            data.signature,
        ]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "allocate",
            args: [this.poolId, encoded],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: ethAmount ? ethAmount.toString() : "0",
        };
    }
    getBatchAllocationData(data, ethAmount) {
        this.checkPoolId();
        const encodedParams = [];
        data.forEach((allocation) => {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("((address, uint256), uint256, uint256), bytes32"), [
                [
                    [
                        allocation.permit.permitted.token,
                        allocation.permit.permitted.amount,
                    ],
                    allocation.permit.nonce,
                    allocation.permit.deadline,
                ],
                allocation.signature,
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
            value: ethAmount ? ethAmount.toString() : "0",
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
    distribute(data) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("(uint256, address, uint256, bytes32[])[]]"), [[data.map((d) => [d.index, d.recipientId, d.amount, d.merkleProof])]]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "distribute",
            args: [this.poolId, [], encoded],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: "0",
        };
    }
    // Write functions
    claim(claims) {
        this.checkStrategy();
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVotingVault_config_1.abi,
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
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: donationVotingVault_config_1.abi,
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
        this.checkStrategy();
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVotingVault_config_1.abi,
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
        this.checkStrategy();
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVotingVault_config_1.abi,
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
        this.checkStrategy();
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVotingVault_config_1.abi,
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
        this.checkStrategy();
        const data = (0, viem_1.encodeFunctionData)({
            abi: donationVotingVault_config_1.abi,
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
