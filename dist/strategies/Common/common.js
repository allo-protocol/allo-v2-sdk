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
exports.getStrategyContractId = void 0;
const publicClient_1 = require("./publicClient");
function getStrategyContractId(chainId, strategyContract) {
    return __awaiter(this, void 0, void 0, function* () {
        const abi = [
            {
                inputs: [],
                name: "getStrategyId",
                outputs: [
                    {
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
        ];
        // todo: this is hardcoded to goerli in the client...
        const client = new publicClient_1.PublicClient(chainId);
        const strategyId = yield client.publicClient.readContract({
            address: strategyContract,
            abi,
            functionName: "getStrategyId",
        });
        switch (strategyId) {
            case "0x697f0592ebd05466d2d24454477e11d69c475d7a7c4134f15ddc1ea9811bb16f":
                return {
                    strategyId: strategyId,
                };
            case "0x741ac1e2f387d83f219f6b5349d35ec34902cf94019d117335e0045d2e0ed912":
                return {
                    strategyId: strategyId,
                };
            case "0x5aa24dcfcd55a1e059a172e987b3456736b4856c71e57aaf52e9a965897318dd":
                return {
                    strategyId: strategyId,
                };
            case "0xb87f34c0968bd74d43a6a5b72831a5ea733a4783a026b9fc9b1d17adf51214d2":
                return {
                    strategyId: strategyId,
                };
            case "0x414f2ea9b91b8ee2e35a380fa0af0e14079832cc93530a61a4893b3dbf0a9aba":
                return {
                    strategyId: strategyId,
                };
            case "0xed28ce0387d1786c1a38404047e9eecc4d1dcaeff695b867e912483e36c3d770":
                return {
                    strategyId: strategyId,
                };
            case "0xc5263e972c91d7ff40708bc71239a2b6cbc8768704e210ca3069e2e11fc195df":
                return {
                    strategyId: strategyId,
                };
            case "0xecc48557f4826bd1181a4495232d6d07f248ef9cc0a650e64520f6c9f7458a8c":
                return {
                    strategyId: strategyId,
                };
            default:
                return {
                    strategyId: "0x",
                };
        }
    });
}
exports.getStrategyContractId = getStrategyContractId;
