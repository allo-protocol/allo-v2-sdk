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
const SQFSuperFluidStrategy_1 = require("../strategies/SuperFluidStrategy/SQFSuperFluidStrategy");
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
const strategy = new SQFSuperFluidStrategy_1.SQFSuperFluidStrategy({
    chain: 5,
});
const deployStrategy = () => __awaiter(void 0, void 0, void 0, function* () {
    const deployParams = strategy.getDeployParams();
    console.log("DEPLOY PARAMS");
    console.log(deployParams);
    const hash = yield client.deployContract({
        account: account,
        abi: deployParams.abi,
        bytecode: deployParams.bytecode,
        args: [],
    });
    console.log("HASH");
    console.log(hash);
    const receipt = yield publicClient.waitForTransactionReceipt({ hash });
    console.log("Contract deployed at:");
    console.log(receipt.contractAddress);
    return receipt.contractAddress;
});
const createPool = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const startDate = new Date(now.getTime() + 5 * 60000);
    const endDate = new Date(now.getTime() + 6 * 60000);
    const deployment = yield deployStrategy();
    const params = {
        useRegistryAnchor: true,
        metadataRequired: false,
        passportDecoder: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
        superfluidHost: "0x22ff293e14F1EC3A09B137e9e06084AFd63adDF9",
        allocationSuperToken: "0xf2d68898557ccb2cf4c10c3ef2b034b2a69dad00",
        registrationStartTime: BigInt((startDate.getTime() / 1000 - 100).toFixed(0)),
        registrationEndTime: BigInt((endDate.getTime() / 1000 - 100).toFixed(0)),
        allocationStartTime: BigInt((startDate.getTime() / 1000).toFixed(0)),
        allocationEndTime: BigInt((endDate.getTime() / 1000).toFixed(0)),
        minPassportScore: BigInt(42069),
        initialSuperAppBalance: BigInt(100000),
    };
    console.log("PARAMS");
    console.log(params);
    const initParams = yield strategy.getInitializeData(params);
    console.log("INIT PARAMS");
    console.log(initParams);
    const poolCreationData = {
        profileId: "0xdd24c7e8a35d4a95f0f4b8f5c819b7c2a0029807a39b0a2f8cb4bf51141816ff",
        strategy: deployment,
        initStrategyData: initParams,
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
    console.log(`Pool created with id:`);
    console.log(logs);
});
createPool();
