"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NATIVE = exports.StrategyType = exports.Status = exports.ZERO_ADDRESS = void 0;
var types_1 = require("./Common/types");
Object.defineProperty(exports, "ZERO_ADDRESS", { enumerable: true, get: function () { return types_1.ZERO_ADDRESS; } });
var types_2 = require("./strategies/types");
Object.defineProperty(exports, "Status", { enumerable: true, get: function () { return types_2.Status; } });
exports.StrategyType = {
    MicroGrants: "MicroGrantsv1",
    Hats: "MicroGrantsHatsv1",
    Gov: "MicroGrantsGovv1",
    SQFSuperFluid: "SQFSuperFluidStrategyv1"
};
exports.NATIVE = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLocaleLowerCase();
