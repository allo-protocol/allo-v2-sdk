import { Allo } from "../../Allo/Allo";
import { chains } from "../../Client/chains";
import { makeAddress } from "../utils/utils";

jest.mock("viem", () => ({
  ...jest.requireActual("viem"),
  create: jest.fn(() => {}),
  getContract: jest.fn(() => {
    return {
      read: {
        isPoolAdmin: jest.fn(() => true),
        isPoolManager: jest.fn(() => true),
        isCloneableStrategy: jest.fn(() => true),
        getStrategy: jest.fn(() => makeAddress("STRATEGY")),
        getPercentFee: jest.fn(() => 0),
        getBaseFee: jest.fn(() => 0),
        getTreasury: jest.fn(() => makeAddress("TREASURY")),
        getRegistry: jest.fn(() => makeAddress("REGISTRY")),
        getPool: jest.fn(() => ({
          id: 1,
          name: "Pool 1",
          symbol: "P1",
          manager: makeAddress("MANAGER"),
          strategy: makeAddress("STRATEGY"),
          baseFee: 0,
          percentFee: 0,
          treasury: makeAddress("TREASURY"),
        })),
        getFeeDenominator: jest.fn(() => 100),
      },
      write: {},
    };
  }),
}));

describe("Allo", () => {
  let allo: Allo;

  beforeEach(() => {
    allo = new Allo({ chain: chains.goerli });
  });

  // Test cases for view functions
  describe("View Functions", () => {
    it("should return if the address is a pool admin", async () => {
      const isAdmin = await allo.isPoolAdmin(1, makeAddress("ADMIN"));

      expect(isAdmin).toEqual(true);
    });

    it("should return if the address is a pool manager", async () => {
      const isManager = await allo.isPoolManager(1, makeAddress("MANAGER"));

      expect(isManager).toEqual(true);
    });

    it("should get if the strategy is cloneable", async () => {
      const isCloneable = await allo.isCloneableStrategy();

      expect(isCloneable).toEqual(true);
    });

    it("should get the strategy", async () => {
      const strategy = await allo.getStrategy(1);

      expect(strategy).toEqual(makeAddress("STRATEGY"));
    });
  
    it("should get fee percentage", async () => {
      const percentFee = await allo.getPercentFee();

      expect(percentFee).toEqual(0);
    });

    it("should get the base fee", async () => {
      const baseFee = await allo.getBaseFee();

      expect(baseFee).toEqual(0);
    });

    it("should get the treasury", async () => {
      const treasury = await allo.getTreasury();

      expect(treasury).toEqual(makeAddress("TREASURY"));
    });

    it("should get the registry", async () => {
      const registry = await allo.getRegistry();

      expect(registry).toEqual(makeAddress("REGISTRY"));
    });

    it("should get the pool", async () => {
      const pool = await allo.getPool(1);

      expect(pool).toEqual({
        id: 1,
        name: "Pool 1",
        symbol: "P1",
        manager: makeAddress("MANAGER"),
        strategy: makeAddress("STRATEGY"),
        baseFee: 0,
        percentFee: 0,
        treasury: makeAddress("TREASURY"),
      });
    });

    it("should get the fee denominator", async () => {
      const feeDenominator = await allo.getFeeDenominator();

      expect(feeDenominator).toEqual(100);
    });
  });

  // Test cases for write functions
  describe("Write Functions", () => {
  });
});
