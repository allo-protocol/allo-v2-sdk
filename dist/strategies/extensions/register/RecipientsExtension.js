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
exports.RecipientsExtension = exports.Status = void 0;
const BaseStrategy_1 = require("../../BaseStrategy");
const viem_1 = require("viem");
const recipientsExtension_config_1 = require("./recipientsExtension.config");
var Status;
(function (Status) {
    Status[Status["None"] = 0] = "None";
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Accepted"] = 2] = "Accepted";
    Status[Status["Rejected"] = 3] = "Rejected";
    Status[Status["Appealed"] = 4] = "Appealed";
    Status[Status["InReview"] = 5] = "InReview";
    Status[Status["Canceled"] = 6] = "Canceled";
})(Status || (exports.Status = Status = {}));
class RecipientsExtension extends BaseStrategy_1.BaseStrategy {
    // Read functions
    getReviewEachStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const reviewEachStatus = yield this.contract.read.REVIEW_EACH_STATUS();
            return reviewEachStatus;
        });
    }
    getMetadataRequired() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const required = yield this.contract.read.metadataRequired();
            return required;
        });
    }
    getRegistrationStartTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const startTime = yield this.contract.read.registrationStartTime();
            return startTime;
        });
    }
    getRegistrationEndTime() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const endTime = yield this.contract.read.registrationEndTime();
            return endTime;
        });
    }
    getRecipientsCounter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const counter = yield this.contract.read.recipientsCounter();
            return counter;
        });
    }
    getStatusesBitMap(index) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const statusRow = yield this.contract.read.statusesBitMap(index);
            return statusRow;
        });
    }
    getRecipientIndexToRecipientId(index) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const recipientId = yield this.contract.read.recipientIndexToRecipientId(index);
            return recipientId;
        });
    }
    getRecipient(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const recipient = yield this.contract.read.getRecipient(recipientId);
            return {
                useRegistryAnchor: recipient.useRegistryAnchor,
                recipientAddress: recipient.recipientAddress,
                statusIndex: BigInt(recipient.statusIndex),
                metadata: {
                    protocol: recipient.metadata.protocol,
                    pointer: recipient.metadata.pointer,
                },
            };
        });
    }
    // Write functions
    reviewRecipients(statuses, refRecipientsCounter) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: recipientsExtension_config_1.abi,
            functionName: "reviewRecipients",
            args: [statuses, refRecipientsCounter],
        });
        return {
            to: this.address(),
            data: encodedData,
            value: "0",
        };
    }
    updatePoolTimestamps(registrationStartTime, registrationEndTime) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: recipientsExtension_config_1.abi,
            functionName: "updatePoolTimestamps",
            args: [registrationStartTime, registrationEndTime],
        });
        return {
            to: this.address(),
            data: encodedData,
            value: "0",
        };
    }
    checkStrategy() {
        if (!this.contract) {
            throw new Error("RecipientsExtension: No strategy address provided. Please call `setContract` first.");
        }
    }
}
exports.RecipientsExtension = RecipientsExtension;
