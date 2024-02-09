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
const Allo_1 = require("../../Allo/Allo");
const allo_config_1 = require("../../Allo/allo.config");
const Client_1 = require("../../Client/Client");
const types_1 = require("../../Common/types");
const chains_config_1 = require("../../chains.config");
const donationVoting_config_1 = require("./donationVoting.config");
const types_2 = require("./types");
const types_3 = require("../../types");
const donationVotingVault_config_1 = require("./donationVotingVault.config");
const donationVotingDirect_config_1 = require("./donationVotingDirect.config");
class DonationVotingMerkleDistributionStrategy {
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
                abi: donationVoting_config_1.abi,
                publicClient: this.client,
            });
            this.strategy = address;
        }
        this.poolId = poolId || -1;
    }
    getAllo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.allo;
        });
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
            abi: donationVoting_config_1.abi,
            publicClient: this.client,
        });
        this.strategy = address;
    }
    // Validation functions
    checkPoolId() {
        if (this.poolId === -1)
            throw new Error("DonationVotingMerkleDistributionStrategy: No poolId provided. Please call `setPoolId` first.");
    }
    checkStrategy() {
        if (!this.strategy)
            throw new Error("DonationVotingMerkleDistributionStrategy: No strategy address provided. Please call `setContract` first.");
    }
    /* Read Functions */
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
    /* Public Storage Variables */
    getDistributionMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const metadata = yield this.contract.read.distributionMetadata();
            return metadata;
        });
    }
    useRegistryAnchor() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const anchor = yield this.contract.read.useRegistryAnchor();
            return anchor;
        });
    }
    metadataRequired() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const required = yield this.contract.read.metadataRequired();
            return required;
        });
    }
    distributionStarted() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const started = yield this.contract.read.distributionStarted();
            return started;
        });
    }
    registrationStartTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const startTime = yield this.contract.read.registrationStartTime();
            return startTime;
        });
    }
    registrationEndTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const endTime = yield this.contract.read.registrationEndTime();
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
    allocationEndTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const endTime = yield this.contract.read.allocationEndTime();
            return endTime;
        });
    }
    totalPayoutAmount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const amount = yield this.contract.read.totalPayoutAmount();
            return amount;
        });
    }
    recipientsCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const counter = yield this.contract.read.recipientsCounter();
            return counter;
        });
    }
    getMerkleRoot() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const root = yield this.contract.read.merkleRoot();
            return root;
        });
    }
    statusesBitMap(index) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const bitMap = yield this.contract.read.statusesBitMap([index]);
            return bitMap;
        });
    }
    recipientToStatusIndexes(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const indexes = yield this.contract.read.recipientToStatusIndexes([
                recipient,
            ]);
            return indexes;
        });
    }
    isTokenAllowed(token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
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
    getTotalClaimableAmount(recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            const claims = yield this.contract.read.totalClaimableAmount([recipient]);
            return claims;
        });
    }
    /* Public Read Functions */
    // TODO: FIX FROM HERE
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
    hasBeenDistributed(index) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const distributed = yield this.contract.read.hasBeenDistributed([index]);
            return distributed;
        });
    }
    isDistributionSet() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const set = yield this.contract.read.isDistributionSet();
            return set;
        });
    }
    isPoolActive() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const active = yield this.contract.read.isPoolActive();
            return active;
        });
    }
    isValidAllocator(allocator) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const valid = yield this.contract.read.isValidAllocator([allocator]);
            return valid;
        });
    }
    /**
     * Write functions
     */
    /**
     *
     * @param strategyType - StrategyType ("Vault" | "Direct")
     * @returns DeployParams {abi, bytecode}
     */
    getDeployParams(strategyType) {
        if (strategyType !== types_2.StrategyType.Vault &&
            strategyType !== types_2.StrategyType.Direct) {
            throw new Error("Invalid strategy type");
        }
        const version = strategyType === types_2.StrategyType.Vault
            ? "DonationVotingMerkleDistributionVaultStrategyv1.1"
            : "DonationVotingMerkleDistributionDirectTransferStrategyv1.1";
        const bytecode = strategyType === types_2.StrategyType.Vault ? donationVotingVault_config_1.bytecode : donationVotingDirect_config_1.bytecode;
        const abi = strategyType === types_2.StrategyType.Vault ? donationVotingVault_config_1.abi : donationVotingDirect_config_1.abi;
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, string"), [this.allo.address(), version]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        return {
            abi: abi,
            bytecode: (bytecode + constructorArgsNo0x),
        };
    }
    getInitializeData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const encodedData = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("(bool, bool, uint64, uint64, uint64, uint64, address[])"), [
                [
                    data.useRegistryAnchor,
                    data.metadataRequired,
                    data.registrationStartTime,
                    data.registrationEndTime,
                    data.allocationStartTime,
                    data.allocationEndTime,
                    data.allowedTokens,
                ],
            ]);
            return encodedData;
        });
    }
    /**
     *
     * @param data - Allocation: (address,(((address,uint256),uint256,uint256),bytes32))
     * @returns `0x${string}`
     */
    getEncodedAllocation(data) {
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, (((address, uint256), uint256, uint256), bytes32)"), [
            data.recipientId,
            [
                [
                    [
                        data.permit2Data.permit.permitted.token,
                        data.permit2Data.permit.permitted.amount,
                    ],
                    data.permit2Data.permit.nonce,
                    data.permit2Data.permit.deadline,
                ],
                data.permit2Data.signature,
            ],
        ]);
        return encoded;
    }
    /**
     *
     * @param allocation - Allocation: (address,(((address,uint256),uint256,uint256),bytes32))
     * @returns TransactionData: {to: `0x${string}`, data: `0x${string}`, value: string}
     */
    getAllocateData(allocation) {
        this.checkPoolId();
        const token = allocation.permit2Data.permit.permitted.token;
        const amount = allocation.permit2Data.permit.permitted.amount;
        const encoded = this.getEncodedAllocation(allocation);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "allocate",
            args: [this.poolId, encoded],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: token.toLowerCase() === types_3.NATIVE ? amount.toString() : "0",
        };
    }
    /**
     *
     * @param allocations - Array of Allocation: (address,(((address,uint256),uint256,uint256),bytes32))
     * @returns TransactionData: {to: `0x${string}`, data: `0x${string}`, value: string}
     */
    getBatchAllocateData(allocations) {
        this.checkPoolId();
        const encodedParams = [];
        allocations.forEach((allocation) => {
            const encoded = this.getEncodedAllocation(allocation);
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
    /**
     *
     * @param poolIds - Array of poolIds
     * @param allocations - Array of Allocation: (address,(((address,uint256),uint256,uint256),bytes32))
     * @returns TransactionData: {to: `0x${string}`, data: `0x${string}`, value: string}
     */
    getBatchAllocateDataMultiplePools(poolIds, allocations) {
        if (poolIds.length !== allocations.length) {
            throw new Error("DonationVotingMerkleDistributionStrategy: Length of poolIds and allocations must be equal");
        }
        const encodedParams = [];
        allocations.forEach((allocation) => {
            const encoded = this.getEncodedAllocation(allocation);
            encodedParams.push(encoded);
        });
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
    /**
     *
     * @param data - (address, address, Metadata)
     * @returns
     */
    getRegisterRecipientData(data) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, (uint256, string)"), [
            data.registryAnchor || types_1.ZERO_ADDRESS,
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
    /**
     * Batch register recipients
     *
     * @param data - Array of RegisterDataDonationVoting
     *
     * @returns TransactionData
     */
    getBatchRegisterRecipientData(data) {
        this.checkPoolId();
        const encodedParams = [];
        data.forEach((registerData) => {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, (uit256, string)"), [
                registerData.registryAnchor || types_1.ZERO_ADDRESS,
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
    /**
     * Fund the pool
     *
     * @param amount - Amount to fund the pool
     *
     * @returns TransactionData
     */
    fundPool(amount) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("uint256, uint256"), [BigInt(this.poolId), amount]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "fundPool",
            args: [encoded],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: "0",
        };
    }
    /**
     * Distribute to the recipients
     *
     * @param recipientIds - Array of recipientIds
     * @param data - Array of Distribution
     *
     * @returns TransactionData
     */
    distribute(recipientIds, 
    // (uint256 _poolId, address[] memory _recipientIds, bytes memory _data)
    data) {
        this.checkPoolId();
        const encodeDistribution = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("Distribution[]"), [data]);
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("uint256, address[], bytes"), [BigInt(this.poolId), recipientIds, encodeDistribution]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "distribute",
            args: [encoded],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: "0",
        };
    }
    /**
     * Get the claim function encoded data
     *
     * @param claims - Array of claims
     *
     * @returns - Encoded transaction data
     */
    getClaimData(claims) {
        this.checkPoolId();
        const encoded = [];
        claims.forEach((claim) => {
            const encodedClaimParams = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address"), [claim.recipientId, claim.token]);
            encoded.push(encodedClaimParams);
        });
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: donationVoting_config_1.abi,
            functionName: "claim",
            args: [encoded],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: "0",
        };
    }
    /**
     * Provides a function to batch together multiple calls in a single external call
     *
     * @param data - Array of encoded data
     *
     * @returns - Encoded transaction data
     */
    multicall(data) {
        this.checkPoolId();
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
    /**
     * Review recipients
     *
     * @param statuses - Array of status indexes and statusRows
     *
     * @returns TransactionData
     */
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
