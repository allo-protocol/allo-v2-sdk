import { Address } from "viem";
import { NATIVE, makeAddress, makeBytes32 } from "../utils/utils";
import { DonationVotingMerkleDistributionStrategy } from "../../strategies/DonationVotingMerkleDistributionStrategy/DonationVotingMerkleDistribution";

const alloAddress: Address = "0x79536CC062EE8FAFA7A19a5fa07783BD7F792206";
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
        allowedTokens: jest.fn(() => true),
        claims: jest.fn(() => 0),
        getClaims: jest.fn(() => 0),
        distributionMetadata: jest.fn(() => ({
          protocol: 1,
          pointer: "unt93847nwg[u7456w7shn56",
        })),
        distributionStarted: jest.fn(() => true),
        getAllo: jest.fn(() => alloAddress),
        getPayouts: jest.fn(() => []),
        getPoolAmount: jest.fn(() => 0),
        getPoolId: jest.fn(() => 0),
        getRecipient: jest.fn(() => ({
          recipientId: makeAddress("RECIPIENT1"),
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
  }),
}));

describe("DonationVotingMerkleDistributionStrategy", () => {
  let strategy: DonationVotingMerkleDistributionStrategy;

  beforeEach(() => {
    strategy = new DonationVotingMerkleDistributionStrategy({
      chain: 5,
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

    it("should get the allowed tokens", async () => {
      const allowed = await strategy.isAllowedTokens(NATIVE());
      expect(allowed).toEqual(true);
    });

    it("should return the claims", async () => {
      const claims = await strategy.getClaims(address, NATIVE());

      expect(claims).toEqual(0);
    });

    it("should return distribution metadata", async () => {
      const metadata = await strategy.getDistributionMetadata();
      expect(metadata).toEqual({
        protocol: 1,
        pointer: "unt93847nwg[u7456w7shn56",
      });
    });

    it("should return if the distribution has started", async () => {
      const isStarted = await strategy.getDistributionStarted();

      expect(isStarted).toEqual(true);
    });

    it("should return the allo address", async () => {
      const allo = await strategy.getAllo();

      expect(allo).toEqual(alloAddress);
    });

    it("should get the payouts", async () => {
      const recipientIds: string[] = [
        makeAddress("RECIPIENT1"),
        makeAddress("RECIPIENT2"),
      ];
      const payoutData = [
        makeBytes32("PAYOUT_DATA"),
        makeBytes32("PAYOUT_DATA2"),
      ];
      const payouts = await strategy.getPayouts(recipientIds, payoutData);

      expect(payouts).toEqual([]);
    });

    it("should get the pool amount", async () => {
      const poolAmount = await strategy.getPoolAmount();

      expect(poolAmount).toEqual(0);
    });

    it("should get the pool ID", async () => {
      const poolId = await strategy.getPoolId();

      expect(poolId).toEqual(0);
    });

    it("should get the recipient", async () => {
      const recipientId: string = makeAddress("RECIPIENT1");
      const recipient = await strategy.getRecipient(recipientId);

      expect(recipient).toEqual({
        recipientId: makeAddress("RECIPIENT1"),
      });
    });

    it("should get the recipient status", async () => {
      const recipientId: string = makeAddress("RECIPIENT1");
      const status = await strategy.getRecipientStatus(recipientId);

      expect(status).toEqual(1);
    });

    it("should get the strategy ID", async () => {
      const strategyId = await strategy.getStrategyId();

      expect(strategyId).toEqual(address);
    });

    it("should call hasBeenDistributed()", async () => {
      const hasBeenDistributed = await strategy.hasBeenDistributed(0);

      expect(hasBeenDistributed).toEqual(true);
    });

    it("should return if a distribution is set", async () => {
      const isSet = await strategy.isDistributionSet();

      expect(isSet).toEqual(true);
    });

    it("should return if a pool is active", async () => {
      const isActive = await strategy.isPoolActive();

      expect(isActive).toEqual(true);
    });

    it("should return if a valid allocator", async () => {
      const isAllocator = await strategy.isValidAllocator(address);

      expect(isAllocator).toEqual(true);
    });

    it("should get the merkle root", async () => {
      const root = await strategy.getMerkleRoot();

      expect(root).toEqual("unt93847nwg[u7456w7shn56");
    });

    it("should return if metadata is required", async () => {
      const isRequired = await strategy.metadataRequired();

      expect(isRequired).toEqual(true);
    });

    it("should return the recipient to status index", async () => {
      const indexes = await strategy.recipientToStatusIndexes(
        makeAddress("RECIPIENT1"),
      );

      expect(indexes).toEqual([]);
    });

    it("should return the recipients counter", async () => {
      const counter = await strategy.recipientsCounter();

      expect(counter).toEqual(0);
    });

    it("should return the registration start time", async () => {
      const startTime = await strategy.registrationStartTime();

      expect(startTime).toEqual(1);
    });

    it("should return the registration end time", async () => {
      const endTime = await strategy.registrationEndTime();

      expect(endTime).toEqual(1);
    });

    it("should return the statuses bitmap", async () => {
      const bitmap = await strategy.statusesBitMap(0);

      expect(bitmap).toEqual(0);
    });

    it("should return the total payout amount", async () => {
      const amount = await strategy.totalPayoutAmount();

      expect(amount).toEqual(1e18);
    });

    it("should return whether to use the registry anchor", async () => {
      const useAnchor = await strategy.useRegistryAnchor();

      expect(useAnchor).toEqual(true);
    });
  });

  describe("write functions", () => {
    it("should allocate", async () => {
      const tx = strategy.allocate(makeBytes32("ALLOCATE_DATA"));

      expect(tx).toEqual({
        to: alloAddress,
        data: tx.data,
        value: "0",
      });
    });

    it("should batch allocate", async () => {
      const data: string[] = [
        makeBytes32("ALLOCATE_DATA"),
        makeBytes32("ALLOCATE_DATA2"),
      ];
      const tx = strategy.batchAllocate(data);

      expect(tx).toEqual({
        to: alloAddress,
        data: tx.data,
        value: "0",
      });
    });

    it("should register a recipient", async () => {
      const data: string = makeBytes32("REGISTER_DATA");
      const tx = strategy.registerRecipient(data);

      expect(tx).toEqual({
        to: alloAddress,
        data: tx.data,
        value: "0",
      });
    });

    it("should batch register recipients", async () => {
      const data: string[] = [
        makeBytes32("REGISTER_DATA"),
        makeBytes32("REGISTER_DATA2"),
      ];
      const tx = strategy.batchRegisterRecipient(data);

      expect(tx).toEqual({
        to: alloAddress,
        data: tx.data,
        value: "0",
      });
    });

    it("should fund the pool", async () => {
      const tx = strategy.fundPool(100e18);

      expect(tx).toEqual({
        to: alloAddress,
        data: tx.data,
        value: "0",
      });
    });

    it("should distribute funds to recipients", async () => {
      const tx = strategy.distribute(
        [address, address],
        makeBytes32("DISTRIBUTE_DATA"),
      );

      expect(tx).toEqual({
        to: alloAddress,
        data: tx.data,
        value: "0",
      });
    });

    it("should claim funds", async () => {
      const data = [
        { recipientId: makeAddress("CLAIMANT1"), token: NATIVE() },
        { recipientId: makeAddress("CLAIMANT2"), token: NATIVE() },
      ];
      const tx = strategy.claim(data);

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should call multicall", async () => {
      const data = [
        makeBytes32("MULTICALL_DATA"),
        makeBytes32("MULTICALL_DATA2"),
      ];
      const tx = strategy.multicall(data);

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should review recipients", async () => {
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
    });

    it("should update the distribution", async () => {
      const distributeMetadata = {
        protocol: 1,
        pointer: "unt93847nwg[u7456w7shn56",
      };
      const tx = strategy.updateDistribution(
        makeBytes32("MERKLE_ROOT"),
        distributeMetadata,
      );

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should update the pool timestamps", async () => {
      const tx = strategy.updatePoolTimestamps(1000, 2000, 3000, 4000);

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });

    it("should withdraw the funds from the pool", async () => {
      const tx = strategy.withdraw(1e18);

      expect(tx).toEqual({
        to: address,
        data: tx.data,
        value: "0",
      });
    });
  });
});
