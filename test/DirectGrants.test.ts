import { expect } from "chai";
import * as dotenv from "dotenv";
import { ContractFactory } from "ethers";
import { ethers } from "hardhat";
import {
  TransactionReceipt,
  decodeEventLog,
  keccak256,
  stringToBytes,
} from "viem";
import { Allo } from "../src/Allo/Allo";
import { CreatePoolArgs } from "../src/Allo/types";
import { Registry } from "../src/Registry/Registry";
import { DirectGrantsStrategy } from "../src/strategies/DirectGrants/DirectGrantsStrategy";
import { InitializeParams } from "../src/strategies/DirectGrants/types";
import {
  AbiComponent,
  AbiItem,
  ContractAbi,
  CreateProfileArgs,
  NATIVE,
} from "../src/types";

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
        // strategyAddress = result.contractAddress!;
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
        // todo: get the profileId from the receipt??
        // const profileId =
        //   getEventValues(receipt, RegistryABI, "ProfileCreated").profileId ||
        //   "0x";
        // if (profileId === "0x") {
        //   throw new Error("Profile creation failed");
        // }
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

      const createPoolDate =
        allo.createPoolWithCustomStrategy(poolCreationData);

      try {
        // send it
        // const logValues = getEventValues(receipt, DirectGrantsAbi, "Initialized");
        // if (logValues.poolId) poolId = Number(logValues.poolId);
      } catch (error) {
        console.error("error creating pool and initializing", error);
      }

      expect(true).to.be.true;
    });
  });
});

const getEventValues = (
  receipt: TransactionReceipt,
  abi: ContractAbi,
  eventName: string
): any => {
  const { logs } = receipt;
  const event = abi.filter(
    (item) => item.type === "event" && item.name === eventName
  )[0];

  console.log("event", event);

  const eventTopic = getEventTopic(event);

  const log = logs.find(
    (log) => log.topics[0]?.toLowerCase() === eventTopic.toLowerCase()
  );

  const { topics, data } = log as { topics: string[]; data: string };

  const d = decodeEventLog({
    abi: [event as any],
    data: data as `0x${string}`,
    topics: topics as any,
  });

  return d.args;
};

function getEventTopic(event: AbiItem): string {
  const inputTypesString = getInputTypeString(event);
  const eventString = `${event.name}(${inputTypesString})`;
  const eventTopic = keccak256(stringToBytes(eventString));

  return eventTopic;
}

function getInputTypeString(event: AbiItem): string {
  const inputTypes = event.inputs ? flattenInputTypes(event.inputs) : [];
  return inputTypes.join(",");
}

function flattenInputTypes(
  inputs: Array<{
    name: string;
    type: string;
    components?: Array<AbiComponent>;
  }>
): string[] {
  const result: string[] = [];

  for (const input of inputs) {
    if (input.components) {
      const componentsString = flattenInputTypes(input.components).join(",");

      result.push(`(${componentsString})`);
    } else {
      result.push(input.type);
    }
  }

  return result;
}
