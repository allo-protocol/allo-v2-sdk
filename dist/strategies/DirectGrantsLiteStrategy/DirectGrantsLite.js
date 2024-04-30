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
exports.DirectGrantsLiteStrategy = void 0;
const viem_1 = require("viem");
const Allo_1 = require("../../Allo/Allo");
const allo_config_1 = require("../../Allo/allo.config");
const Client_1 = require("../../Client/Client");
const types_1 = require("../../Common/types");
const chains_config_1 = require("../../chains.config");
const types_2 = require("../../types");
const directGrantsLite_config_1 = require("./directGrantsLite.config");
class DirectGrantsLiteStrategy {
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
                abi: directGrantsLite_config_1.abi,
                publicClient: this.client,
            });
            this.strategy = address;
        }
        this.poolId = poolId || BigInt(-1);
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
            abi: directGrantsLite_config_1.abi,
            publicClient: this.client,
        });
        this.strategy = address;
    }
    // Validation functions
    checkPoolId() {
        if (this.poolId === BigInt(-1))
            throw new Error("DirectGrantsLiteStrategy: No poolId provided. Please call `setPoolId` first.");
    }
    checkStrategy() {
        if (!this.strategy)
            throw new Error("DirectGrantsLiteStrategy: No strategy address provided. Please call `setContract` first.");
    }
    /* Read Functions */
    getNative() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const native = yield this.contract.read.NATIVE();
            return native;
        });
    }
    /* Public Storage Variables */
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
    recipientsCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const counter = yield this.contract.read.recipientsCounter();
            return counter;
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
     * @returns DeployParams {abi, bytecode}
     */
    getDeployParams() {
        const version = "DirectGrantsLiteStrategy1.0";
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, string"), [this.allo.address(), version]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        return {
            abi: directGrantsLite_config_1.abi,
            bytecode: (directGrantsLite_config_1.bytecode + constructorArgsNo0x),
        };
    }
    getInitializeData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const encodedData = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("(bool, bool, uint64, uint64)"), [
                [
                    data.useRegistryAnchor,
                    data.metadataRequired,
                    data.registrationStartTime,
                    data.registrationEndTime,
                ],
            ]);
            return encodedData;
        });
    }
    /**
     *
     * @param data - Allocation: (address,(((address,uint256),uint256,uint256),bytes))
     * @returns `0x${string}`
     */
    getEncodedAllocation(data) {
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, uint256"), [data.token, data.recipientId, data.amount]);
        return encoded;
    }
    /**
     *
     * @param allocation - Allocation[]: [{token: `0x${string}`, recipientId: `0x${string}`, amount: bigint}]
     * @returns TransactionData: {to: `0x${string}`, data: `0x${string}`, value: string}
     */
    getAllocateData(allocations) {
        this.checkPoolId();
        let totalNativeAmount = BigInt(0);
        for (const allocation of allocations) {
            if (allocation.token.toLowerCase() === types_2.NATIVE.toLowerCase())
                totalNativeAmount += allocation.amount;
        }
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("(address token, address recipientId, uint256 amount)[]"), [allocations]);
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "allocate",
            args: [this.poolId, encoded],
        });
        return {
            to: this.allo.address(),
            data: encodedData,
            value: totalNativeAmount.toString(),
        };
    }
    /**
     *
     * @param data - (address, address, Metadata)
     * @returns
     */
    getRegisterRecipientData(data) {
        this.checkPoolId();
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, uint256, (uint256, string)"), [
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
    /**
     * Batch register recipients
     *
     * @param data - Array of RegisterDataDirectGrantsLiteVoting
     *
     * @returns TransactionData
     */
    getBatchRegisterRecipientData(data) {
        this.checkPoolId();
        const encodedParams = [];
        data.forEach((registerData) => {
            const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, address, uint256, (uint256, string)"), [
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
            abi: directGrantsLite_config_1.abi,
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
    reviewRecipients(statuses, refRecipientsCounter) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: directGrantsLite_config_1.abi,
            functionName: "reviewRecipients",
            args: [statuses, refRecipientsCounter],
        });
        return {
            to: this.strategy,
            data: data,
            value: "0",
        };
    }
    updatePoolTimestamps(registrationStartTime, registrationEndTime) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: directGrantsLite_config_1.abi,
            functionName: "updatePoolTimestamps",
            args: [registrationStartTime, registrationEndTime],
        });
        return {
            to: this.strategy,
            data: data,
            value: "0",
        };
    }
    withdraw(address) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: directGrantsLite_config_1.abi,
            functionName: "withdraw",
            args: [address],
        });
        return {
            to: this.strategy,
            data: data,
            value: "0",
        };
    }
}
exports.DirectGrantsLiteStrategy = DirectGrantsLiteStrategy;
