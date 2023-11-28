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
const MicroGrantsStrategy_1 = require("../../strategies/MicroGrantsStrategy/MicroGrantsStrategy");
const utils_1 = require("../utils/utils");
// const alloAddress: Address = "0x1133eA7Af70876e64665ecD07C0A0476d09465a1";
const address = "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27";
jest.mock("viem", () => (Object.assign(Object.assign({}, jest.requireActual("viem")), { create: jest.fn(() => { }), getContract: jest.fn(() => {
        return {
            read: {
                NATIVE: jest.fn(() => utils_1.NATIVE),
                allocationStartTime: jest.fn(() => 1),
                allocationEndTime: jest.fn(() => 1),
                maxRequestedAmountAllowed: jest.fn(() => 0),
                approvalThreshold: jest.fn(() => 0),
                allocators: jest.fn(() => true),
                allocated: jest.fn(() => true),
                recipientAllocations: jest.fn(() => 0),
            },
        };
    }) })));
describe("Micro Grants Strategy", () => {
    let strategy;
    beforeEach(() => {
        strategy = new MicroGrantsStrategy_1.MicroGrantsStrategy({
            chain: 5,
            rpc: "rpc",
            address,
            poolId: 0,
        });
    });
    describe("read functions", () => {
        it("should return the native token address", () => __awaiter(void 0, void 0, void 0, function* () {
            const native = yield strategy.getNative();
            expect(native).toEqual(utils_1.NATIVE);
        }));
        it("should return the allocation start time", () => __awaiter(void 0, void 0, void 0, function* () {
            const startTime = yield strategy.allocationStartTime();
            expect(startTime).toEqual(1);
        }));
        it("should return the allocation end time", () => __awaiter(void 0, void 0, void 0, function* () {
            const endTime = yield strategy.allocationEndTime();
            expect(endTime).toEqual(1);
        }));
        it("should return the max requested amount", () => __awaiter(void 0, void 0, void 0, function* () {
            const maxRequestedAmount = yield strategy.maxRequestedAmount();
            expect(maxRequestedAmount).toEqual(0);
        }));
        it("should return the approval threshold", () => __awaiter(void 0, void 0, void 0, function* () {
            const approvalThreshold = yield strategy.approvalThreshold();
            expect(approvalThreshold).toEqual(0);
        }));
        it("should return the allocators", () => __awaiter(void 0, void 0, void 0, function* () {
            const allocators = yield strategy.allocator("allocator");
            expect(allocators).toEqual(true);
        }));
        it("should return the allocated", () => __awaiter(void 0, void 0, void 0, function* () {
            const allocated = yield strategy.allocated("allocator", "recipient");
            expect(allocated).toEqual(true);
        }));
        it("should return the recipient allocations", () => __awaiter(void 0, void 0, void 0, function* () {
            const recipientAllocations = yield strategy.recipientAllocations("recipient", 0);
            expect(recipientAllocations).toEqual(0);
        }));
    });
});
