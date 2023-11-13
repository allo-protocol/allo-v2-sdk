import { Allo } from "../../Allo/Allo";
import { makeAddress, makeBytes32 } from "../utils/utils";
import { Metadata } from "../../Common/types";
import { Address } from "viem";

const address: Address = "0x79536CC062EE8FAFA7A19a5fa07783BD7F792206";

const metadata: Metadata = {
  protocol: 1,
  pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
};

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
    };
  }),
}));

describe("Allo", () => {
  let allo: Allo;

  beforeEach(() => {
    allo = new Allo({ chain: 5 });
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
    it("should create a pool", async () => {
      const tx = allo.createPool({
        profileId: makeBytes32("PROFILE"),
        strategy: makeAddress("STRATEGY"),
        initStrategyData: "0x",
        token: makeAddress("TOKEN"),
        amount: 0,
        metadata: metadata,
        managers: [makeAddress("MANAGER")],
      });

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should create a pool with custom strategy", async () => {
      const tx = allo.createPoolWithCustomStrategy({
        profileId: makeBytes32("PROFILE"),
        strategy: makeAddress("STRATEGY"),
        initStrategyData: "0x",
        token: makeAddress("TOKEN"),
        amount: 0,
        metadata,
        managers: [makeAddress("MANAGER")],
      });

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should update the pool metadata", async () => {
      const tx = allo.updatePoolMetadata({
        poolId: 1,
        metadata: {
          protocol: 1,
          pointer:
            "bafybeia4khbew3r2mkfly23nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
        },
      });

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should update the registry address", async () => {
      const tx = allo.updateRegistry(makeAddress("REGISTRY"));

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should update the treasury address", async () => {
      const tx = allo.updateTreasury(makeAddress("TREASURY"));

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should update the percent fee", async () => {
      const tx = allo.updatePercentFee(1);

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should update the base fee", async () => {
      const tx = allo.updateBaseFee(1);

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should add strategy to cloneable strategies", async () => {
      const tx = allo.addToCloneableStrategies(makeAddress("STRATEGY2"));

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should remove strategy to cloneable strategies", async () => {
      const tx = allo.removeFromCloneableStrategies(makeAddress("STRATEGY2"));

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should add pool manager", async () => {
      const tx = allo.addPoolManager(1, makeAddress("MANAGER2"));

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should remove pool manager", async () => {
      const tx = allo.removePoolManager(1, makeAddress("MANAGER2"));

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should recover funds", async () => {
      const tx = allo.recoverFunds(
        makeAddress("TOKEN"),
        makeAddress("RECIPIENT"),
      );

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });
  });

  // Test cases for strategy functions
  describe("Strategy Functions", () => {
    it("should register a recipient", async () => {
      const tx = allo.registerRecipient(1, makeBytes32("STRATEGY_DATA"));

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should batch register multiple recipients", async () => {
      const tx = allo.batchRegisterRecipient(
        [1, 1],
        [makeBytes32("STRATEGY_DATA"), makeBytes32("STRATEGY_DATA")],
      );

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should fund a pool", async () => {
      const tx = allo.fundPool(1, 100e18);

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should allocate to a recipient", async () => {
      const tx = allo.allocate(1, makeBytes32("STRATEGY_ALLOCATE_DATA"));

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should batch allocate to multiple recipients", async () => {
      const tx = allo.batchAllocate(
        [1, 1],
        [
          makeBytes32("STRATEGY_ALLOCATE_DATA"),
          makeBytes32("STRATEGY_ALLOCATE_DATA"),
        ],
      );

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should distribute funds", async () => {
      const tx = allo.distribute(
        1,
        [makeAddress("RECIPIENT1"), makeAddress("RECIPIENT2")],
        makeBytes32("STRATEGY_DISTRIBUTE_DATA"),
      );

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });
  });
});
