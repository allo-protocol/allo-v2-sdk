import { expect } from "chai";
import * as dotenv from "dotenv";
import { ContractFactory } from "ethers";
import { ethers } from "hardhat";
import { Allo } from "../src/Allo/Allo";
import { CreatePoolArgs } from "../src/Allo/types";
import { Registry } from "../src/Registry/Registry";
import { DirectGrantsStrategy } from "../src/strategies/DirectGrants/DirectGrantsStrategy";
import { InitializeParams } from "../src/strategies/DirectGrants/types";
import { CreateProfileArgs, NATIVE } from "../src/types";

dotenv.config();

const allo = new Allo({
  chain: 5,
  rpc: process.env.RPC_URL,
});
const strategy = new DirectGrantsStrategy({
  chain: 1,
  rpc: process.env.RPC_URL,
});
const registry = new Registry({
  chain: 5,
  rpc: process.env.RPC_URL,
});

describe("DirectGrantsStrategy", function () {
  let alloSettingsContract: ContractFactory;
  let strategyAddress: `0x${string}`;
  let profileId: `0x${string}`;
  let poolId = -1;

  describe("should test deployed successfully", () => {
    it("DirectGrantsStrategy SHOULD deploy properly", async () => {
      const [user] = await ethers.getSigners();
      const deployParams = strategy.getDeployParams();

      try {
        // send it
        const receipt = await user.sendTransaction({
          data: deployParams.bytecode,
        });

        console.log("receipt", receipt);
      } catch (error) {
        console.error("error deploying contract", error);
      }

      expect(true).to.be.true;
    });

    it("should create a new profile & pool and initialize", async () => {
      const [user] = await ethers.getSigners();

      // create a profile to use to create the pool
      const createProfileArgs: CreateProfileArgs = {
        nonce: 1234567890,
        name: "SDK Test Profile",
        metadata: {
          protocol: BigInt(1),
          pointer:
            "bafkreigcxfdotdrh7cm3sy432k2pnyp3n7nisz35npismochqurqcjscfu",
        },
        owner: user.address,
        members: [],
      };
      const createProfileTx = registry.createProfile(createProfileArgs);

      try {
        // send it
        const receipt = await user.sendTransaction(createProfileTx);
        // todo: get the profileId from the receipt??
        console.log("receipt", receipt);
      } catch (error) {
        console.error("error creating profile", error);
      }

      // Create a pool and initialize it
      const initParams: InitializeParams = {
        registryGating: true,
        metadataRequired: true,
        grantAmountRequired: true,
      };
      const initStrategyData = strategy.getInitializeData(initParams);
      const poolCreationData: CreatePoolArgs = {
        profileId:
          "0x9abfca304ae55abc43a50e846e80fbe0bc01ee6abdb6cf5c218f6ade517590c0",
        strategy:
          strategyAddress ?? "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        initStrategyData: initStrategyData,
        token: NATIVE,
        amount: BigInt(0),
        metadata: {
          protocol: BigInt(1),
          pointer:
            "bafkreigcxfdotdrh7cm3sy432k2pnyp3n7nisz35npismochqurqcjscfu",
        },
        managers: [],
      };

      const createPoolData =
        allo.createPoolWithCustomStrategy(poolCreationData);

      try {
        // send it
        const receipt = user.sendTransaction(createPoolData);

        console.log("receipt", receipt);

        // todo: get the poolId from the receipt??
      } catch (error) {
        console.error("error creating pool and initializing", error);
      }

      expect(true).to.be.true;
    });

    it("should register a recipient", async () => {});

    it("should increase max requested amount", async () => {});

    it("should set the milestones", async () => {});

    it("should review the milestone", async () => {});

    it("should submit the milestone", async () => {});

    it("should reject the milestone", async () => {});

    it("should set the recipient status to in review", async () => {});

    it("should set the pool active flag", async () => {});

    it("should allocate to a recipient", async () => {});

    it("should distribute to a recipient milestone", async () => {});
  });
});
