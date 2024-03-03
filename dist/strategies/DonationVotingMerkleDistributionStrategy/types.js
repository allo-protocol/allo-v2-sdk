"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyType = exports.PermitType = void 0;
var PermitType;
(function (PermitType) {
    PermitType[PermitType["Permit"] = 0] = "Permit";
    PermitType[PermitType["PermitDAI"] = 1] = "PermitDAI";
    PermitType[PermitType["Permit2"] = 2] = "Permit2";
})(PermitType = exports.PermitType || (exports.PermitType = {}));
;
exports.StrategyType = {
    Vault: "Vault",
    Direct: "Direct",
};
