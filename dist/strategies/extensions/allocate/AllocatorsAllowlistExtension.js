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
exports.AllocatorsAllowlistExtension = void 0;
const BaseStrategy_1 = require("../../BaseStrategy");
const viem_1 = require("viem");
const allocatorsAllowlistExtension_config_1 = require("./allocatorsAllowlistExtension.config");
class AllocatorsAllowlistExtension extends BaseStrategy_1.BaseStrategy {
    // Read functions
    isAllowedAllocator(allocator) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const isAllowed = yield this.contract.read.allowedAllocators(allocator);
            return isAllowed;
        });
    }
    // Write functions
    addAllocators(allocators) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allocatorsAllowlistExtension_config_1.abi,
            functionName: "addAllocators",
            args: [allocators],
        });
        return {
            to: this.address(),
            data: encodedData,
            value: "0",
        };
    }
    removeAllocators(allocators) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allocatorsAllowlistExtension_config_1.abi,
            functionName: "removeAllocators",
            args: [allocators],
        });
        return {
            to: this.address(),
            data: encodedData,
            value: "0",
        };
    }
    checkStrategy() {
        if (!this.contract) {
            throw new Error("AllocatorsAllowlistExtension: No strategy address provided. Please call `setContract` first.");
        }
    }
}
exports.AllocatorsAllowlistExtension = AllocatorsAllowlistExtension;
