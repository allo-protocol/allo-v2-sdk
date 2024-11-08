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
exports.AllocationExtension = void 0;
const BaseStrategy_1 = require("../../BaseStrategy");
const viem_1 = require("viem");
const allocationExtension_config_1 = require("./allocationExtension.config");
class AllocationExtension extends BaseStrategy_1.BaseStrategy {
    // Read functions
    getAllocationStartTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const startTime = yield this.contract.read.allocationStartTime();
            return startTime;
        });
    }
    getAllocationEndTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const endTime = yield this.contract.read.allocationEndTime();
            return endTime;
        });
    }
    isUsingAllocationMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const isUsing = yield this.contract.read.isUsingAllocationMetadata();
            return isUsing;
        });
    }
    isAllowedToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const isAllowed = yield this.contract.read.allowedTokens(token);
            return isAllowed;
        });
    }
    // Write functions
    updateAllocationTimestamps(allocationStartTime, allocationEndTime) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allocationExtension_config_1.abi,
            functionName: "updateAllocationTimestamps",
            args: [allocationStartTime, allocationEndTime],
        });
        return {
            to: this.address(),
            data: encodedData,
            value: "0",
        };
    }
    checkStrategy() {
        if (!this.contract) {
            throw new Error("AllocationExtension: No strategy address provided. Please call `setContract` first.");
        }
    }
}
exports.AllocationExtension = AllocationExtension;
