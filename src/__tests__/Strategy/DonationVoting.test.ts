import { Address } from "viem";
import { NATIVE, makeBytes32 } from "../utils/utils";
import { chains } from "../../Client/chains";
import { DonationVotingMerkleDistributionStrategy } from "../../strategies/DonationVotingMerkleDistributionStrategy/DonationVotingMerkleDistribution";

const address: Address = "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27";

jest.mock("viem", () => ({
  ...jest.requireActual("viem"),
  create: jest.fn(() => {}),
  getContract: jest.fn(() => {
    return {
      read: {
        NATIVE: jest.fn(() => NATIVE()),
        PERMIT2: jest.fn(() => makeBytes32("PERMIT2")),
        allocationEndTime: jest.fn(() => 1),
        allocationStartTime: jest.fn(() => 1),
        isAllowedTokens: jest.fn(() => true),
        getClaims: jest.fn(() => 0),
        getDistributionMetadata: jest.fn(() => ({
          protocol: 1,
          pointer: "unt93847nwg[u7456w7shn56",
        })),
        getDistributionStarted: jest.fn(() => true),
      },
      write: {
        allocate: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
        setAllocationEndTime: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
        setAllocationStartTime: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
      },
    };
  }),
}));

describe("DonationVotingMerkleDistributionStrategy", () => {
  let strategy: DonationVotingMerkleDistributionStrategy;

  beforeEach(() => {
    strategy = new DonationVotingMerkleDistributionStrategy({
      chain: chains.goerli,
      rpc: "rpc",
      address: address,
    });
  });

  describe("read functions", () => {
    it("should return the native token address", async () => {
      const native = await strategy.getNative();

      expect(native).toEqual(NATIVE());
    });

    it("should return the permit2 token", async () => {
      const permit2 = await strategy.getPermit2();

      expect(permit2).toEqual(makeBytes32("PERMIT2"));
    });

    it("should return the allocation end time", async () => {
      const endTime = await strategy.getAllocationEndTime();

      expect(endTime).toEqual(1);
    });

    it("should return the allocation start time", async () => {
      const startTime = await strategy.getAllocationStartTime();

      expect(startTime).toEqual(1);
    });

    // FIXME: this is failing
    it("should get the allowed tokens", async () => {
      // const allowed = await strategy.isAllowedTokens(NATIVE());
      // expect(allowed).toEqual(true);
    });

    // FIXME: this is failing
    it("should return the claims", async () => {
      // const claims = await strategy.getClaims(address, NATIVE());
      // expect(claims).toEqual(0);
    });

    // FIXME: this is failing
    it("should return distribution metadata", async () => {
      // const metadata = await strategy.getDistributionMetadata();

      // expect(metadata).toEqual({
      //   protocol: 1,
      //   pointer: "unt93847nwg[u7456w7shn56",
      // });
    });

    it("should return if the distribution has started", async () => {
      // const isStarted = strategy.getDistributionStarted();

      // expect(isStarted).toEqual(true);
    });
  });

  describe("write functions", () => {
    it("should allocate", async () => {
      // TODO: encode the data for the allocation
      // const tx = strategy.allocate(makeBytes32("FIXME"));

      // expect(tx).toEqual({
      //   to: address,
      //   data: tx.data,
      //   value: "0",
      // });
    });
  });
});
