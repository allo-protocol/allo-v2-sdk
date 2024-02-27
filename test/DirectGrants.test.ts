import { expect } from "chai";
import * as dotenv from "dotenv";
import { AbiCoder, JsonRpcProvider, keccak256 } from "ethers";
import { Log } from "viem";
import { Allo } from "../src/Allo/Allo";
import { CreatePoolArgs } from "../src/Allo/types";
import { Registry } from "../src/Registry/Registry";
import { abi as registryAbi } from "../src/Registry/registry.config";
import { DirectGrantsStrategy } from "../src/strategies/DirectGrants/DirectGrantsStrategy";
import { abi as directGrantsAbi } from "../src/strategies/DirectGrants/directGrants.config";
import { InitializeParams } from "../src/strategies/DirectGrants/types";
import {
  CreateProfileArgs,
  DeployParams,
  NATIVE,
  TransactionData,
} from "../src/types";

dotenv.config();

/// ============================================== \\\
/// ================== INFO ====================== \\\
/// ============================================== \\\
/// Please run: npx hardhat node --fork RPC_URL    \\\
/// To run tests: npx hardhat test --network local \\\
/// ============================================== \\\
/// ============================================== \\\

const hardhatRpc = "http://localhost:8545";
const random = Math.floor(Math.random() * 1000000000);

const allo = new Allo({
  chain: 1,
  rpc: hardhatRpc,
});
const strategy = new DirectGrantsStrategy({
  chain: 1,
  rpc: hardhatRpc,
});

const registry = new Registry({
  chain: 5,
  rpc: hardhatRpc,
});

const provider = new JsonRpcProvider(hardhatRpc);

describe("DirectGrantsStrategy", function () {
  let strategyAddress: `0x${string}`;
  let profileId: `0x${string}`;

  beforeEach(async () => {
    strategyAddress = await __deployStrategy();
    strategy.setContract(strategyAddress);
  });

  describe("should test deployed successfully", () => {
    it.skip("DirectGrantsStrategy SHOULD deploy properly", async () => {
      const idString = keccak256(
        new AbiCoder().encode(["string"], ["DirectGrantsv1.1"])
      );
      const deployedIdString = await strategy.getStrategyId();

      expect(idString).to.be.equal(deployedIdString);
    });

    it("should create a new profile", async () => {
      const [user] = await ethers.getSigners();

      let receipt: any;

      // create a profile to use to create the pool
      const createProfileArgs: CreateProfileArgs = {
        nonce: random,
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

      // todo: get the profile id from the logs
      const iface = new ethers.Interface(registryAbi);

      logs.forEach((log: Log) => {
        let parsedLog = iface.parseLog(log);

        profileId = parsedLog.args[0];

        console.log("parsedLog", parsedLog.args[0]);
      });
    });

    // todo:
    it.skip("should create a pool and initialize", async () => {
      const [user] = await ethers.getSigners();

      // Create a pool and initialize it
      const initParams: InitializeParams = {
        registryGating: true,
        metadataRequired: true,
        grantAmountRequired: true,
        registrationStartTime: BigInt(0),
        registrationEndTime: BigInt(0),
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

        // console.log("receipt", receipt);
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

const __deployStrategy = async (): Promise<`0x${string}`> => {
  const [user] = await ethers.getSigners();

  const deployParams = strategy.getDeployParams();

  return deployContract(user, deployParams);
};

const sendRawTx = async (signer: any, txData: TransactionData) => {};

const deployContract = async (
  signer: any,
  dpData: DeployParams
): Promise<`0x${string}`> => {
  const response = await signer.sendTransaction({
    data: dpData.bytecode,
  });
  const receipt = await response.wait();
  return receipt.contractAddress as `0x${string}`;
};
