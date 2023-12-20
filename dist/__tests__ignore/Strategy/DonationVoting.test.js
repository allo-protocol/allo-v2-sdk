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
const utils_1 = require("../utils/utils");
const DonationVotingMerkleDistribution_1 = require("../../strategies/DonationVotingMerkleDistributionStrategy/DonationVotingMerkleDistribution");
const alloAddress = "0x1133eA7Af70876e64665ecD07C0A0476d09465a1";
const address = "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27";
jest.mock("viem", () => (Object.assign(Object.assign({}, jest.requireActual("viem")), { create: jest.fn(() => { }), getContract: jest.fn(() => {
        return {
            read: {
                NATIVE: jest.fn(() => (0, utils_1.NATIVE)()),
                PERMIT2: jest.fn(() => (0, utils_1.makeBytes32)("PERMIT2")),
                allocationEndTime: jest.fn(() => 1),
                allocationStartTime: jest.fn(() => 1),
                allowedTokens: jest.fn(() => true),
                claims: jest.fn(() => 0),
                getClaims: jest.fn(() => 0),
                distributionMetadata: jest.fn(() => ({
                    protocol: BigInt(1),
                    pointer: "unt93847nwg[u7456w7shn56",
                })),
                distributionStarted: jest.fn(() => true),
                getAllo: jest.fn(() => alloAddress),
                getPayouts: jest.fn(() => []),
                getPoolAmount: jest.fn(() => 0),
                getPoolId: jest.fn(() => 0),
                getRecipient: jest.fn(() => ({
                    recipientId: (0, utils_1.makeAddress)("RECIPIENT1"),
                })),
                getRecipientStatus: jest.fn(() => 1),
                getStrategyId: jest.fn(() => address),
                hasBeenDistributed: jest.fn(() => true),
                isDistributionSet: jest.fn(() => true),
                isPoolActive: jest.fn(() => true),
                isValidAllocator: jest.fn(() => true),
                merkleRoot: jest.fn(() => "unt93847nwg[u7456w7shn56"),
                metadataRequired: jest.fn(() => true),
                recipientToStatusIndexes: jest.fn(() => []),
                recipientsCounter: jest.fn(() => 0),
                registrationStartTime: jest.fn(() => 1),
                registrationEndTime: jest.fn(() => 1),
                statusesBitMap: jest.fn(() => 0),
                totalPayoutAmount: jest.fn(() => 1e18),
                useRegistryAnchor: jest.fn(() => true),
            },
        };
    }) })));
describe("DonationVotingMerkleDistributionStrategy", () => {
    let strategy;
    beforeEach(() => {
        strategy = new DonationVotingMerkleDistribution_1.DonationVotingMerkleDistributionStrategy({
            chain: 5,
            rpc: "rpc",
            address: address,
        });
    });
    describe("read functions", () => {
        it("should return the native token address", () => __awaiter(void 0, void 0, void 0, function* () {
            const native = yield strategy.getNative();
            expect(native).toEqual((0, utils_1.NATIVE)());
        }));
        it("should return the permit2 token", () => __awaiter(void 0, void 0, void 0, function* () {
            const permit2 = yield strategy.getPermit2();
            expect(permit2).toEqual((0, utils_1.makeBytes32)("PERMIT2"));
        }));
        it("should return the allocation end time", () => __awaiter(void 0, void 0, void 0, function* () {
            const endTime = yield strategy.getAllocationEndTime();
            expect(endTime).toEqual(1);
        }));
        it("should return the allocation start time", () => __awaiter(void 0, void 0, void 0, function* () {
            const startTime = yield strategy.getAllocationStartTime();
            expect(startTime).toEqual(1);
        }));
        it("should get the allowed tokens", () => __awaiter(void 0, void 0, void 0, function* () {
            const allowed = yield strategy.isAllowedTokens((0, utils_1.NATIVE)());
            expect(allowed).toEqual(true);
        }));
        it("should return the claims", () => __awaiter(void 0, void 0, void 0, function* () {
            const claims = yield strategy.getClaims(address, (0, utils_1.NATIVE)());
            expect(claims).toEqual(0);
        }));
        it("should return distribution metadata", () => __awaiter(void 0, void 0, void 0, function* () {
            const metadata = yield strategy.getDistributionMetadata();
            expect(metadata).toEqual({
                protocol: BigInt(1),
                pointer: "unt93847nwg[u7456w7shn56",
            });
        }));
        it("should return if the distribution has started", () => __awaiter(void 0, void 0, void 0, function* () {
            const isStarted = yield strategy.getDistributionStarted();
            expect(isStarted).toEqual(true);
        }));
        it("should return the allo address", () => __awaiter(void 0, void 0, void 0, function* () {
            const allo = yield strategy.getAllo();
            expect(allo).toEqual(alloAddress);
        }));
        it("should get the payouts", () => __awaiter(void 0, void 0, void 0, function* () {
            const recipientIds = [
                (0, utils_1.makeAddress)("RECIPIENT1"),
                (0, utils_1.makeAddress)("RECIPIENT2"),
            ];
            const payoutData = [
                (0, utils_1.makeBytes32)("PAYOUT_DATA"),
                (0, utils_1.makeBytes32)("PAYOUT_DATA2"),
            ];
            const payouts = yield strategy.getPayouts(recipientIds, payoutData);
            expect(payouts).toEqual([]);
        }));
        it("should get the pool amount", () => __awaiter(void 0, void 0, void 0, function* () {
            const poolAmount = yield strategy.getPoolAmount();
            expect(poolAmount).toEqual(0);
        }));
        it("should get the pool ID", () => __awaiter(void 0, void 0, void 0, function* () {
            const poolId = yield strategy.getPoolId();
            expect(poolId).toEqual(0);
        }));
        it("should get the recipient", () => __awaiter(void 0, void 0, void 0, function* () {
            const recipientId = (0, utils_1.makeAddress)("RECIPIENT1");
            const recipient = yield strategy.getRecipient(recipientId);
            expect(recipient).toEqual({
                recipientId: (0, utils_1.makeAddress)("RECIPIENT1"),
            });
        }));
        it("should get the recipient status", () => __awaiter(void 0, void 0, void 0, function* () {
            const recipientId = (0, utils_1.makeAddress)("RECIPIENT1");
            const status = yield strategy.getRecipientStatus(recipientId);
            expect(status).toEqual(1);
        }));
        it("should get the strategy ID", () => __awaiter(void 0, void 0, void 0, function* () {
            const strategyId = yield strategy.getStrategyId();
            expect(strategyId).toEqual(address);
        }));
        it("should call hasBeenDistributed()", () => __awaiter(void 0, void 0, void 0, function* () {
            const hasBeenDistributed = yield strategy.hasBeenDistributed(0);
            expect(hasBeenDistributed).toEqual(true);
        }));
        it("should return if a distribution is set", () => __awaiter(void 0, void 0, void 0, function* () {
            const isSet = yield strategy.isDistributionSet();
            expect(isSet).toEqual(true);
        }));
        it("should return if a pool is active", () => __awaiter(void 0, void 0, void 0, function* () {
            const isActive = yield strategy.isPoolActive();
            expect(isActive).toEqual(true);
        }));
        it("should return if a valid allocator", () => __awaiter(void 0, void 0, void 0, function* () {
            const isAllocator = yield strategy.isValidAllocator(address);
            expect(isAllocator).toEqual(true);
        }));
        it("should get the merkle root", () => __awaiter(void 0, void 0, void 0, function* () {
            const root = yield strategy.getMerkleRoot();
            expect(root).toEqual("unt93847nwg[u7456w7shn56");
        }));
        it("should return if metadata is required", () => __awaiter(void 0, void 0, void 0, function* () {
            const isRequired = yield strategy.metadataRequired();
            expect(isRequired).toEqual(true);
        }));
        it("should return the recipient to status index", () => __awaiter(void 0, void 0, void 0, function* () {
            const indexes = yield strategy.recipientToStatusIndexes((0, utils_1.makeAddress)("RECIPIENT1"));
            expect(indexes).toEqual([]);
        }));
        it("should return the recipients counter", () => __awaiter(void 0, void 0, void 0, function* () {
            const counter = yield strategy.recipientsCounter();
            expect(counter).toEqual(0);
        }));
        it("should return the registration start time", () => __awaiter(void 0, void 0, void 0, function* () {
            const startTime = yield strategy.registrationStartTime();
            expect(startTime).toEqual(1);
        }));
        it("should return the registration end time", () => __awaiter(void 0, void 0, void 0, function* () {
            const endTime = yield strategy.registrationEndTime();
            expect(endTime).toEqual(1);
        }));
        it("should return the statuses bitmap", () => __awaiter(void 0, void 0, void 0, function* () {
            const bitmap = yield strategy.statusesBitMap(0);
            expect(bitmap).toEqual(0);
        }));
        it("should return the total payout amount", () => __awaiter(void 0, void 0, void 0, function* () {
            const amount = yield strategy.totalPayoutAmount();
            expect(amount).toEqual(1e18);
        }));
        it("should return whether to use the registry anchor", () => __awaiter(void 0, void 0, void 0, function* () {
            const useAnchor = yield strategy.useRegistryAnchor();
            expect(useAnchor).toEqual(true);
        }));
    });
    describe("write functions", () => {
        it("should allocate", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = strategy.allocate((0, utils_1.makeBytes32)("ALLOCATE_DATA"));
            expect(tx).toEqual({
                to: alloAddress,
                data: tx.data,
                value: "0",
            });
        }));
        it("should batch allocate", () => __awaiter(void 0, void 0, void 0, function* () {
            const data = [
                (0, utils_1.makeBytes32)("ALLOCATE_DATA"),
                (0, utils_1.makeBytes32)("ALLOCATE_DATA2"),
            ];
            const tx = strategy.batchAllocate(data);
            expect(tx).toEqual({
                to: alloAddress,
                data: tx.data,
                value: "0",
            });
        }));
        it("should register a recipient", () => __awaiter(void 0, void 0, void 0, function* () {
            const data = (0, utils_1.makeBytes32)("REGISTER_DATA");
            const tx = strategy.registerRecipient(data);
            expect(tx).toEqual({
                to: alloAddress,
                data: tx.data,
                value: "0",
            });
        }));
        it("should batch register recipients", () => __awaiter(void 0, void 0, void 0, function* () {
            const data = [
                (0, utils_1.makeBytes32)("REGISTER_DATA"),
                (0, utils_1.makeBytes32)("REGISTER_DATA2"),
            ];
            const tx = strategy.batchRegisterRecipient(data);
            expect(tx).toEqual({
                to: alloAddress,
                data: tx.data,
                value: "0",
            });
        }));
        it("should fund the pool", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = strategy.fundPool(100e18);
            expect(tx).toEqual({
                to: alloAddress,
                data: tx.data,
                value: "0",
            });
        }));
        it("should distribute funds to recipients", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = strategy.distribute([address, address], (0, utils_1.makeBytes32)("DISTRIBUTE_DATA"));
            expect(tx).toEqual({
                to: alloAddress,
                data: tx.data,
                value: "0",
            });
        }));
        it("should claim funds", () => __awaiter(void 0, void 0, void 0, function* () {
            const data = [
                { recipientId: (0, utils_1.makeAddress)("CLAIMANT1"), token: (0, utils_1.NATIVE)() },
                { recipientId: (0, utils_1.makeAddress)("CLAIMANT2"), token: (0, utils_1.NATIVE)() },
            ];
            const tx = strategy.claim(data);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should call multicall", () => __awaiter(void 0, void 0, void 0, function* () {
            const data = [
                (0, utils_1.makeBytes32)("MULTICALL_DATA"),
                (0, utils_1.makeBytes32)("MULTICALL_DATA2"),
            ];
            const tx = strategy.multicall(data);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should review recipients", () => __awaiter(void 0, void 0, void 0, function* () {
            const data = [
                { index: 1, statusRow: 1 },
                { index: 2, statusRow: 2 },
            ];
            const tx = strategy.reviewRecipients(data);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update the distribution", () => __awaiter(void 0, void 0, void 0, function* () {
            const distributeMetadata = {
                protocol: BigInt(1),
                pointer: "unt93847nwg[u7456w7shn56",
            };
            const tx = strategy.updateDistribution((0, utils_1.makeBytes32)("MERKLE_ROOT"), distributeMetadata);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update the pool timestamps", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = strategy.updatePoolTimestamps(1000, 2000, 3000, 4000);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should withdraw the funds from the pool", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = strategy.withdraw(1e18);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
    });
});
