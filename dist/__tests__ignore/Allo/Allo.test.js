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
const Allo_1 = require("../../Allo/Allo");
const utils_1 = require("../utils/utils");
const address = "0x1133eA7Af70876e64665ecD07C0A0476d09465a1";
const metadata = {
    protocol: BigInt(1),
    pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
};
jest.mock("viem", () => (Object.assign(Object.assign({}, jest.requireActual("viem")), { create: jest.fn(() => { }), getContract: jest.fn(() => {
        return {
            read: {
                isPoolAdmin: jest.fn(() => true),
                isPoolManager: jest.fn(() => true),
                isCloneableStrategy: jest.fn(() => true),
                getStrategy: jest.fn(() => (0, utils_1.makeAddress)("STRATEGY")),
                getPercentFee: jest.fn(() => 0),
                getBaseFee: jest.fn(() => 0),
                getTreasury: jest.fn(() => (0, utils_1.makeAddress)("TREASURY")),
                getRegistry: jest.fn(() => (0, utils_1.makeAddress)("REGISTRY")),
                getPool: jest.fn(() => ({
                    id: 1,
                    name: "Pool 1",
                    symbol: "P1",
                    manager: (0, utils_1.makeAddress)("MANAGER"),
                    strategy: (0, utils_1.makeAddress)("STRATEGY"),
                    baseFee: 0,
                    percentFee: 0,
                    treasury: (0, utils_1.makeAddress)("TREASURY"),
                })),
                getFeeDenominator: jest.fn(() => 100),
            },
        };
    }) })));
describe("Allo", () => {
    let allo;
    beforeEach(() => {
        allo = new Allo_1.Allo({ chain: 5 });
    });
    // Test cases for view functions
    describe("View Functions", () => {
        it("should return if the address is a pool admin", () => __awaiter(void 0, void 0, void 0, function* () {
            const isAdmin = yield allo.isPoolAdmin(1, (0, utils_1.makeAddress)("ADMIN"));
            expect(isAdmin).toEqual(true);
        }));
        it("should return if the address is a pool manager", () => __awaiter(void 0, void 0, void 0, function* () {
            const isManager = yield allo.isPoolManager(1, (0, utils_1.makeAddress)("MANAGER"));
            expect(isManager).toEqual(true);
        }));
        it("should get if the strategy is cloneable", () => __awaiter(void 0, void 0, void 0, function* () {
            const isCloneable = yield allo.isCloneableStrategy();
            expect(isCloneable).toEqual(true);
        }));
        it("should get the strategy", () => __awaiter(void 0, void 0, void 0, function* () {
            const strategy = yield allo.getStrategy(1);
            expect(strategy).toEqual((0, utils_1.makeAddress)("STRATEGY"));
        }));
        it("should get fee percentage", () => __awaiter(void 0, void 0, void 0, function* () {
            const percentFee = yield allo.getPercentFee();
            expect(percentFee).toEqual(0);
        }));
        it("should get the base fee", () => __awaiter(void 0, void 0, void 0, function* () {
            const baseFee = yield allo.getBaseFee();
            expect(baseFee).toEqual(0);
        }));
        it("should get the treasury", () => __awaiter(void 0, void 0, void 0, function* () {
            const treasury = yield allo.getTreasury();
            expect(treasury).toEqual((0, utils_1.makeAddress)("TREASURY"));
        }));
        it("should get the registry", () => __awaiter(void 0, void 0, void 0, function* () {
            const registry = yield allo.getRegistry();
            expect(registry).toEqual((0, utils_1.makeAddress)("REGISTRY"));
        }));
        it("should get the pool", () => __awaiter(void 0, void 0, void 0, function* () {
            const pool = yield allo.getPool(1);
            expect(pool).toEqual({
                id: 1,
                name: "Pool 1",
                symbol: "P1",
                manager: (0, utils_1.makeAddress)("MANAGER"),
                strategy: (0, utils_1.makeAddress)("STRATEGY"),
                baseFee: 0,
                percentFee: 0,
                treasury: (0, utils_1.makeAddress)("TREASURY"),
            });
        }));
        it("should get the fee denominator", () => __awaiter(void 0, void 0, void 0, function* () {
            const feeDenominator = yield allo.getFeeDenominator();
            expect(feeDenominator).toEqual(100);
        }));
    });
    // Test cases for write functions
    describe("Write Functions", () => {
        it("should create a pool", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.createPool({
                profileId: (0, utils_1.makeBytes32)("PROFILE"),
                strategy: (0, utils_1.makeAddress)("STRATEGY"),
                initStrategyData: "0x",
                token: (0, utils_1.makeAddress)("TOKEN"),
                amount: BigInt(0),
                metadata: metadata,
                managers: [(0, utils_1.makeAddress)("MANAGER")],
            });
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should create a pool with custom strategy", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.createPoolWithCustomStrategy({
                profileId: (0, utils_1.makeBytes32)("PROFILE"),
                strategy: (0, utils_1.makeAddress)("STRATEGY"),
                initStrategyData: "0x",
                token: (0, utils_1.makeAddress)("TOKEN"),
                amount: BigInt(0),
                metadata,
                managers: [(0, utils_1.makeAddress)("MANAGER")],
            });
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update the pool metadata", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.updatePoolMetadata({
                poolId: 1,
                metadata: {
                    protocol: BigInt(1),
                    pointer: "bafybeia4khbew3r2mkfly23nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
                },
            });
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update the registry address", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.updateRegistry((0, utils_1.makeAddress)("REGISTRY"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update the treasury address", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.updateTreasury((0, utils_1.makeAddress)("TREASURY"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update the percent fee", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.updatePercentFee(1);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update the base fee", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.updateBaseFee(1);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should add strategy to cloneable strategies", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.addToCloneableStrategies((0, utils_1.makeAddress)("STRATEGY2"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should remove strategy to cloneable strategies", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.removeFromCloneableStrategies((0, utils_1.makeAddress)("STRATEGY2"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should add pool manager", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.addPoolManager(1, (0, utils_1.makeAddress)("MANAGER2"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should remove pool manager", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.removePoolManager(1, (0, utils_1.makeAddress)("MANAGER2"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should recover funds", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.recoverFunds((0, utils_1.makeAddress)("TOKEN"), (0, utils_1.makeAddress)("RECIPIENT"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
    });
    // Test cases for strategy functions
    describe("Strategy Functions", () => {
        it("should register a recipient", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.registerRecipient(1, (0, utils_1.makeBytes32)("STRATEGY_DATA"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should batch register multiple recipients", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.batchRegisterRecipient([1, 1], [(0, utils_1.makeBytes32)("STRATEGY_DATA"), (0, utils_1.makeBytes32)("STRATEGY_DATA")]);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should fund a pool", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.fundPool(1, 100e18);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should allocate to a recipient", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.allocate(1, (0, utils_1.makeBytes32)("STRATEGY_ALLOCATE_DATA"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should batch allocate to multiple recipients", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.batchAllocate([1, 1], [
                (0, utils_1.makeBytes32)("STRATEGY_ALLOCATE_DATA"),
                (0, utils_1.makeBytes32)("STRATEGY_ALLOCATE_DATA"),
            ]);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should distribute funds", () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = allo.distribute(1, [(0, utils_1.makeAddress)("RECIPIENT1"), (0, utils_1.makeAddress)("RECIPIENT2")], (0, utils_1.makeBytes32)("STRATEGY_DISTRIBUTE_DATA"));
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
    });
});
