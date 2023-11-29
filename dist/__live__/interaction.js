"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
const dotenv_1 = require("dotenv");
const MicroGrantsStrategy_1 = require("../strategies/MicroGrantsStrategy/MicroGrantsStrategy");
const types_1 = require("../strategies/MicroGrantsStrategy/types");
const Allo_1 = require("../Allo/Allo");
(0, dotenv_1.config)();
const client = (0, viem_1.createWalletClient)({
    chain: chains_1.goerli,
    transport: (0, viem_1.http)(),
});
const publicClient = (0, viem_1.createPublicClient)({
    chain: chains_1.goerli,
    transport: (0, viem_1.http)(),
});
if (!process.env.PRIVATE_KEY) {
    throw new Error("No private key found in .env file");
}
const account = (0, accounts_1.privateKeyToAccount)(process.env.PRIVATE_KEY);
console.log("Account: " + account.address);
const strategy = new MicroGrantsStrategy_1.MicroGrantsStrategy({
    chain: 5,
});
const deployStrategy = () => __awaiter(void 0, void 0, void 0, function* () {
    const deployParams = strategy.getDeployParams(types_1.StrategyType.Gov);
    const hash = yield client.deployContract({
        account: account,
        abi: deployParams.abi,
        bytecode: deployParams.bytecode,
        args: [],
    });
    const receipt = yield publicClient.waitForTransactionReceipt({ hash });
    console.log("Contract deployed at:");
    console.log(receipt.contractAddress);
});
deployStrategy(); // 0xa15ab11d078d69ee48ac431720ba5f0877aae492
// bafkreigcxfdotdrh7cm3sy432k2pnyp3n7nisz35npismochqurqcjscfu
const createPool = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const startDate = new Date(now.getTime() + 5 * 60000);
    const endDate = new Date(now.getTime() + 6 * 60000);
    const initParams = yield strategy.getInitializeDataGov({
        useRegistryAnchor: false,
        allocationStartTime: BigInt((startDate.getTime() / 1000).toFixed(0)),
        allocationEndTime: BigInt((endDate.getTime() / 1000).toFixed(0)),
        approvalThreshold: BigInt(2),
        maxRequestedAmount: BigInt(10000000000),
        gov: "0x7E1eB4A873dB4aC16edb0644Cb7D99951eb4BFCE",
        snapshotReference: BigInt((now.getTime() / 1000).toFixed(0)),
        minVotePower: BigInt(1),
    });
    const poolCreationData = {
        profileId: "0x9685d8aa17031c28b21e654729c9bf546bafe536223eb09e524657cdc840117e",
        strategy: "0xd3066e5aae9a2ac9adb27a4754350b06f60d4b06",
        initStrategyData: initParams,
        token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        amount: BigInt(10000000000000),
        metadata: {
            protocol: BigInt(1),
            pointer: "bafkreigcxfdotdrh7cm3sy432k2pnyp3n7nisz35npismochqurqcjscfu",
        },
        managers: [],
    };
    const allo = new Allo_1.Allo({
        chain: 5,
    });
    const createPoolData = yield allo.createPoolWithCustomStrategy(poolCreationData);
    const tx = yield client.sendTransaction({
        account,
        to: createPoolData.to,
        data: createPoolData.data,
        value: BigInt(createPoolData.value),
    });
    const reciept = yield publicClient.waitForTransactionReceipt({
        hash: tx,
    });
    const { logs } = reciept;
    // const poolId = Number(logs[6].topics[1]);
    console.log(`Pool created with id: ${logs}`);
});
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
