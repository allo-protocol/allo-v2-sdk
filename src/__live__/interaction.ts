import { Registry } from "../Registry/Registry";

import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { goerli } from "viem/chains";
import { config } from "dotenv";
import { DeployParams } from "../Common/types";
import { MicroGrantsStrategy } from "../strategies/MicroGrantsStrategy/MicroGrantsStrategy";
import { StrategyType } from "../strategies/MicroGrantsStrategy/types";
import { Allo } from "../Allo/Allo";
import { CreatePoolArgs } from "../types";
config();

const client = createWalletClient({
  chain: goerli,
  transport: http(),
});

const publicClient = createPublicClient({
  chain: goerli,
  transport: http(),
});

if (!process.env.PRIVATE_KEY) {
  throw new Error("No private key found in .env file");
}
const account = privateKeyToAccount(process.env.PRIVATE_KEY! as `0x${string}`);

console.log("Account: " + account.address);

const strategy = new MicroGrantsStrategy({
  chain: 5,
});

const deployStrategy = async (): Promise<void> => {
  const deployParams: DeployParams = strategy.getDeployParams(StrategyType.Gov);

  const hash = await client!.deployContract({
    account: account,
    abi: deployParams.abi,
    bytecode: deployParams.bytecode as `0x${string}`,
    args: [],
  });

  const receipt = await publicClient!.waitForTransactionReceipt({ hash });
  console.log("Contract deployed at:");
  console.log(receipt.contractAddress);
};

deployStrategy(); // 0xa15ab11d078d69ee48ac431720ba5f0877aae492
// bafkreigcxfdotdrh7cm3sy432k2pnyp3n7nisz35npismochqurqcjscfu

const createPool = async (): Promise<void> => {
  const now = new Date();
  const startDate = new Date(now.getTime() + 5 * 60000);
  const endDate = new Date(now.getTime() + 6 * 60000);

  const initParams = await strategy.getInitializeDataGov({
    useRegistryAnchor: false,
    allocationStartTime: BigInt((startDate.getTime() / 1000).toFixed(0)),
    allocationEndTime: BigInt((endDate.getTime() / 1000).toFixed(0)),
    approvalThreshold: BigInt(2),
    maxRequestedAmount: BigInt(10000000000),
    gov: "0x7E1eB4A873dB4aC16edb0644Cb7D99951eb4BFCE",
    snapshotReference: BigInt((now.getTime() / 1000).toFixed(0)),
    minVotePower: BigInt(1),
  });

  const poolCreationData: CreatePoolArgs = {
    profileId:
      "0x9685d8aa17031c28b21e654729c9bf546bafe536223eb09e524657cdc840117e",
    strategy: "0xd3066e5aae9a2ac9adb27a4754350b06f60d4b06",
    initStrategyData: initParams as unknown as string,
    token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    amount: BigInt(10000000000000),
    metadata: {
      protocol: BigInt(1),
      pointer: "bafkreigcxfdotdrh7cm3sy432k2pnyp3n7nisz35npismochqurqcjscfu",
    },
    managers: [],
  };

  const allo = new Allo({
    chain: 5,
  });

  const createPoolData = await allo.createPoolWithCustomStrategy(
    poolCreationData,
  );

  const tx = await client.sendTransaction({
    account,
    to: createPoolData.to,
    data: createPoolData.data,
    value: BigInt(createPoolData.value),
  });

  const reciept = await publicClient.waitForTransactionReceipt({
    hash: tx,
  });

  const { logs } = reciept;
  // const poolId = Number(logs[6].topics[1]);

  console.log(`Pool created with id: ${logs}`);
};

// createPool();

// const testGetAlloOwner = async () => {
//   const registry = new Registry({ chain: chains.goerli });

//   const profile: Profile = await registry.getProfileById(
//     "0xF0E7CB0E1455C389165FE3EB251C994BDA127924843A1178504FCD54BB069A60",
//   );
//   console.log(profile);
// };

// testGetAlloOwner();

// const testCreateOwner = async (): Promise<void> => {
//   const registry = new Registry({ chain: chains.goerli });

//   const createProfileArgs: CreateProfileArgs = {
//     nonce: 3,
//     name: "Module Test 1",
//     metadata: {
//       protocol: 1,
//       pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
//     },
//     owner: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
//     members: [
//       "0x5cdb35fADB8262A3f88863254c870c2e6A848CcA",
//       "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
//     ],
//   };

//   const txData: TransactionData = registry.createProfile(createProfileArgs);

//   const hash = await client.sendTransaction({
//     data: txData.data,
//     account,
//     to: txData.to,
//     value: BigInt(txData.value),
//   });

//   console.log(`Transaction hash: ${hash}`);
// };

// testCreateOwner();
