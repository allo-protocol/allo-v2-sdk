import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { goerli } from "viem/chains";
import { config } from "dotenv";
import { DeployParams } from "../Common/types";
import { SuperFluidStrategy } from "../strategies/SuperFluidStrategy/SuperFluidStrategy";
import { Allo } from "../Allo/Allo";
import { CreatePoolArgs } from "../types";
import { InitializeParamsSuperFluid } from "../strategies/SuperFluidStrategy/types";
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

const strategy = new SuperFluidStrategy({
  chain: 5,
});

const deployStrategy = async (): Promise<`0x${string}`> => {
  const deployParams: DeployParams = strategy.getDeployParams();

  console.log("DEPLOY PARAMS");
  console.log(deployParams);

  const hash = await client!.deployContract({
    account: account,
    abi: deployParams.abi,
    bytecode: deployParams.bytecode as `0x${string}`,
    args: [],
  });

  console.log("HASH");
  console.log(hash);

  const receipt = await publicClient!.waitForTransactionReceipt({ hash });
  console.log("Contract deployed at:");
  console.log(receipt.contractAddress);

  return receipt.contractAddress!;
};

const createPool = async (): Promise<void> => {
  const now = new Date();
  const startDate = new Date(now.getTime() + 5 * 60000);
  const endDate = new Date(now.getTime() + 6 * 60000);

  const deployment = "0x82163F9aD2bc6B04D53e222d7EFC9fE34a698159"; //await deployStrategy();

  const params: InitializeParamsSuperFluid = {
    useRegistryAnchor: true,
    metadataRequired: false,
    passportDecoder: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE", // todo: remove dummy address
    superfluidHost: "0x22ff293e14F1EC3A09B137e9e06084AFd63adDF9",
    allocationSuperToken: "0xf2d68898557ccb2cf4c10c3ef2b034b2a69dad00",
    registrationStartTime: BigInt(
      (startDate.getTime() / 1000 - 100).toFixed(0),
    ),
    registrationEndTime: BigInt((endDate.getTime() / 1000 - 100).toFixed(0)),
    allocationStartTime: BigInt((startDate.getTime() / 1000).toFixed(0)),
    allocationEndTime: BigInt((endDate.getTime() / 1000).toFixed(0)),
    minPassportScore: BigInt(42069),
    initialSuperAppBalance: BigInt(100000),
  };

  console.log("PARAMS");
  console.log(params);

  const initParams = await strategy.getInitializeData(params);

  console.log("INIT PARAMS");
  console.log(initParams);

  const poolCreationData: CreatePoolArgs = {
    profileId:
      "0xdd24c7e8a35d4a95f0f4b8f5c819b7c2a0029807a39b0a2f8cb4bf51141816ff",
    strategy: deployment,
    initStrategyData: initParams as unknown as string,
    token: "0xf2d68898557ccb2cf4c10c3ef2b034b2a69dad00",
    amount: BigInt(0),
    metadata: {
      protocol: BigInt(1),
      pointer: "bafkreigcxfdotdrh7cm3sy432k2pnyp3n7nisz35npismochqurqcjscfu",
    },
    managers: [],
  };

  console.log("POOL CREATION DATA");
  console.log(poolCreationData);

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

  console.log(`Pool created with id:`);
  console.log(logs);
};

createPool();
