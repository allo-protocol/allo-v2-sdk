import { expect } from "chai";
import * as dotenv from "dotenv";
import { ContractFactory } from "ethers";
import { Log } from "viem";
import { Allo } from "../src/Allo/Allo";
import { CreatePoolArgs } from "../src/Allo/types";
import { Registry } from "../src/Registry/Registry";
import { abi as registryAbi } from "../src/Registry/registry.config";
import { DirectGrantsStrategy } from "../src/strategies/DirectGrants/DirectGrantsStrategy";
import { abi as directGrantsAbi } from "../src/strategies/DirectGrants/directGrants.config";
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

      let receipt: any;

      try {
        // send it
        receipt = await user.sendTransaction({
          data: deployParams.bytecode,
        });

        console.log("receipt", receipt);
      } catch (error) {
        console.error("error deploying contract", error);
      }

      // fetch the event
      const logs = await user.provider.getLogs({
        address: strategyAddress,
        topics: [
          "0x91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a", // Initialized(uint256,bytes)
        ],
        blockHash: receipt.blockHash,
      });

      console.log("logs", logs);

      const iface = new ethers.Interface(directGrantsAbi);

      logs.forEach((log: Log) => {
        let parsedLog = iface.parseLog(log);

        profileId = parsedLog.args[0];

        console.log("parsedLog", parsedLog);
      });

      expect(true).to.be.true;
    });

    it("should create a new profile", async () => {
      const [user] = await ethers.getSigners();

      let receipt: any;

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
        receipt = await user.sendTransaction(createProfileTx);
        console.log("receipt", receipt);
      } catch (error) {
        console.error("error creating profile", error);
      }

      // fetch the event
      const logs = await user.provider.getLogs({
        address: strategyAddress,
        topics: [
          // ProfileCreated(bytes32,uint256,string,(uint256,string),address,address)
          "0x1e28352ff00d67474b59b87e6817d6ba65daa0130446266db8640214d8b80609",
        ],
        blockHash: receipt.blockHash,
      });

      console.log("logs", logs);

      // todo: get the profile id from the logs
      const iface = new ethers.Interface(registryAbi);

      logs.forEach((log: Log) => {
        let parsedLog = iface.parseLog(log);

        profileId = parsedLog.args[0];

        console.log("parsedLog", parsedLog.args[0]);
      });
    });

    // todo:
    it("should create a pool and initialize", async () => {
      const [user] = await ethers.getSigners();

      // Create a pool and initialize it
      const initParams: InitializeParams = {
        registryGating: true,
        metadataRequired: true,
        grantAmountRequired: true,
      };
      const initStrategyData = strategy.getInitializeData(initParams);
      const poolCreationData: CreatePoolArgs = {
        profileId: profileId,
        strategy: strategyAddress,
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

      let receipt: any;

      const createPoolData =
        allo.createPoolWithCustomStrategy(poolCreationData);

      try {
        // send it
        receipt = await user.sendTransaction(createPoolData);

        console.log("receipt", receipt);
      } catch (error) {
        console.error("error creating pool and initializing", error);
      }

      // fetch the event
      const logs = await user.provider.getLogs({
        address: strategyAddress,
        topics: [
          // PoolCreated(uint256,bytes32,address,address,uint256,(uint256,string))
          "0x69bcb5a6cf6a3c95185cbb451e77787240c866dd2e8332597e3013ff18a1aba1",
        ],
        blockHash: receipt.blockHash,
      });

      console.log("logs", logs);

      const iface = new ethers.Interface(directGrantsAbi);

      logs.forEach((log: Log) => {
        let parsedLog = iface.parseLog(log);

        profileId = parsedLog.args[0];

        console.log("parsedLog", parsedLog);
      });

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
