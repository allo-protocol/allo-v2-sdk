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
exports.QVSimpleStrategy = void 0;
const viem_1 = require("viem");
const Allo_1 = require("../../Allo/Allo");
const chains_config_1 = require("../../chains.config");
const Client_1 = require("../../Client/Client");
const qvSimple_config_1 = require("./qvSimple.config");
class QVSimpleStrategy {
    constructor({ chain, rpc, address, poolId }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.allo = new Allo_1.Allo({ chain, rpc });
        if (address) {
            this.contract = (0, viem_1.getContract)({
                address: address,
                abi: [],
                publicClient: this.client,
            });
            this.strategy = address;
        }
        this.poolId = poolId || BigInt(-1);
    }
    getInitializeData(params) {
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("uint256, (bool, bool, uint256, uint64, uint64, uint64, uint64)"), [
            params.maxVoiceCreditsPerAllocator,
            [
                params.params.registryGating,
                params.params.metadataRequired,
                params.params.reviewThreshold,
                params.params.registrationStartTime,
                params.params.registrationEndTime,
                params.params.allocationStartTime,
                params.params.allocationEndTime,
            ],
        ]);
        return encoded;
    }
    getDeployParams() {
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, string"), [this.allo.address(), "QVSimpleStrategy1.0"]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        return {
            abi: qvSimple_config_1.abi,
            bytecode: (qvSimple_config_1.bytecode +
                constructorArgsNo0x),
        };
    }
    setPoolId(poolId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.poolId = poolId;
            const strategyAddress = yield this.allo.getStrategy(poolId);
            this.setContract(strategyAddress);
        });
    }
    setContract(address) {
        this.contract = (0, viem_1.getContract)({
            address: address,
            abi: qvSimple_config_1.abi,
            publicClient: this.client,
        });
        this.strategy = address;
    }
}
exports.QVSimpleStrategy = QVSimpleStrategy;
