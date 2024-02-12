import { Address } from "viem";
import { DirectGrantsStrategy } from "../../strategies/DirectGrants/DirectGrants";
import { NATIVE } from "../utils/utils";

const address: Address = "0x1133eA7Af70876e64665ecD07C0A0476d09465a1";
// const address: Address = "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27";

jest.mock("viem", () => ({
  ...jest.requireActual("viem"),
  create: jest.fn(() => {}),
  getContract: jest.fn(() => {
    return {
      read: {
        NATIVE: jest.fn(() => NATIVE),
      },
    };
  }),
}));

describe("Direct Grants Strategy", () => {
  let strategy: DirectGrantsStrategy;

  beforeEach(() => {
    strategy = new DirectGrantsStrategy({
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
  });
});
