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
exports.EASGatingExtension = void 0;
const BaseStrategy_1 = require("../../BaseStrategy");
class EASGatingExtension extends BaseStrategy_1.BaseStrategy {
    // Read functions
    getEAS() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const eas = yield this.contract.read.eas();
            return eas;
        });
    }
    checkStrategy() {
        if (!this.contract) {
            throw new Error("EASGatingExtension: No strategy address provided. Please call `setContract` first.");
        }
    }
}
exports.EASGatingExtension = EASGatingExtension;
