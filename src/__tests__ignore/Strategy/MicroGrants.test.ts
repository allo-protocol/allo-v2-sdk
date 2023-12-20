import { Address } from "viem";
import { MicroGrantsStrategy } from "../../strategies/MicroGrantsStrategy/MicroGrantsStrategy";
import { NATIVE } from "../utils/utils";

// const alloAddress: Address = "0x1133eA7Af70876e64665ecD07C0A0476d09465a1";
const address: Address = "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27";

jest.mock("viem", () => ({
  ...jest.requireActual("viem"),
  create: jest.fn(() => {}),
  getContract: jest.fn(() => {
    return {
      read: {
        NATIVE: jest.fn(() => NATIVE),
        allocationStartTime: jest.fn(() => 1),
        allocationEndTime: jest.fn(() => 1),
        maxRequestedAmountAllowed: jest.fn(() => 0),
        approvalThreshold: jest.fn(() => 0),
        allocators: jest.fn(() => true),
        allocated: jest.fn(() => true),
        recipientAllocations: jest.fn(() => 0),
      },
    };
  }),
}));

describe("Micro Grants Strategy", () => {
  let strategy: MicroGrantsStrategy;

  beforeEach(() => {
    strategy = new MicroGrantsStrategy({
      chain: 5,
      rpc: "rpc",
      address,
      poolId: 0,
    });
  });

  describe("read functions", () => {
    it("should return the native token address", async () => {
      const native = await strategy.getNative();

      expect(native).toEqual(NATIVE);
    });

    it("should return the allocation start time", async () => {
      const startTime = await strategy.allocationStartTime();

      expect(startTime).toEqual(1);
    });

    it("should return the allocation end time", async () => {
      const endTime = await strategy.allocationEndTime();

      expect(endTime).toEqual(1);
    });

    it("should return the max requested amount", async () => {
      const maxRequestedAmount = await strategy.maxRequestedAmount();

      expect(maxRequestedAmount).toEqual(0);
    });

    it("should return the approval threshold", async () => {
      const approvalThreshold = await strategy.approvalThreshold();

      expect(approvalThreshold).toEqual(0);
    });

    it("should return the allocators", async () => {
      const allocators = await strategy.allocator("allocator");

      expect(allocators).toEqual(true);
    });

    it("should return the allocated", async () => {
      const allocated = await strategy.allocated("allocator", "recipient");

      expect(allocated).toEqual(true);
    });

    it("should return the recipient allocations", async () => {
      const recipientAllocations = await strategy.recipientAllocations(
        "recipient",
        0,
      );

      expect(recipientAllocations).toEqual(0);
    });
  });
});
