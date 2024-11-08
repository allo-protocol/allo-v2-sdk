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
exports.MilestonesExtension = exports.MilestoneStatus = void 0;
const BaseStrategy_1 = require("../../BaseStrategy");
const viem_1 = require("viem");
const milestonesExtension_config_1 = require("./milestonesExtension.config");
var MilestoneStatus;
(function (MilestoneStatus) {
    MilestoneStatus[MilestoneStatus["None"] = 0] = "None";
    MilestoneStatus[MilestoneStatus["Pending"] = 1] = "Pending";
    MilestoneStatus[MilestoneStatus["Accepted"] = 2] = "Accepted";
    MilestoneStatus[MilestoneStatus["Rejected"] = 3] = "Rejected";
    MilestoneStatus[MilestoneStatus["Appealed"] = 4] = "Appealed";
    MilestoneStatus[MilestoneStatus["InReview"] = 5] = "InReview";
    MilestoneStatus[MilestoneStatus["Canceled"] = 6] = "Canceled";
})(MilestoneStatus || (exports.MilestoneStatus = MilestoneStatus = {}));
class MilestonesExtension extends BaseStrategy_1.BaseStrategy {
    // Read functions
    getMaxBid() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const maxBid = yield this.contract.read.maxBid();
            return maxBid;
        });
    }
    getUpcomingMilestone() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const milestone = yield this.contract.read.upcomingMilestone();
            return milestone;
        });
    }
    getBid(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const bid = yield this.contract.read.bids(recipientId);
            return bid;
        });
    }
    getMilestone(milestoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const milestone = yield this.contract.read.getMilestone(milestoneId);
            return {
                amountPercentage: BigInt(milestone.amountPercentage),
                metadata: {
                    protocol: milestone.metadata.protocol,
                    pointer: milestone.metadata.pointer,
                },
                status: milestone.status,
            };
        });
    }
    getMilestoneStatus(milestoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const status = yield this.contract.read.getMilestoneStatus(milestoneId);
            return status;
        });
    }
    // Write functions
    increaseMaxBid(maxBid) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: milestonesExtension_config_1.abi,
            functionName: "increaseMaxBid",
            args: [maxBid],
        });
        return {
            to: this.address(),
            data: encodedData,
            value: "0",
        };
    }
    setMilestones(milestones) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: milestonesExtension_config_1.abi,
            functionName: "setMilestones",
            args: [milestones.map(milestone => ({
                    amountPercentage: milestone.amountPercentage,
                    metadata: {
                        protocol: milestone.metadata.protocol,
                        pointer: milestone.metadata.pointer,
                    },
                    status: milestone.status,
                }))],
        });
        return {
            to: this.address(),
            data: encodedData,
            value: "0",
        };
    }
    submitUpcomingMilestone(recipientId, metadata) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: milestonesExtension_config_1.abi,
            functionName: "submitUpcomingMilestone",
            args: [recipientId, metadata],
        });
        return {
            to: this.address(),
            data: encodedData,
            value: "0",
        };
    }
    reviewMilestone(status) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: milestonesExtension_config_1.abi,
            functionName: "reviewMilestone",
            args: [status],
        });
        return {
            to: this.address(),
            data: encodedData,
            value: "0",
        };
    }
    checkStrategy() {
        if (!this.contract) {
            throw new Error("MilestonesExtension: No strategy address provided. Please call `setContract` first.");
        }
    }
}
exports.MilestonesExtension = MilestonesExtension;
