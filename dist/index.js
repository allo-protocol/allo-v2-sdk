"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroGrantsStrategy = exports.Registry = exports.Allo = void 0;
const Allo_1 = require("./Allo/Allo");
Object.defineProperty(exports, "Allo", { enumerable: true, get: function () { return Allo_1.Allo; } });
const Registry_1 = require("./Registry/Registry");
Object.defineProperty(exports, "Registry", { enumerable: true, get: function () { return Registry_1.Registry; } });
const MicroGrantsStrategy_1 = require("./strategies/MicroGrantsStrategy/MicroGrantsStrategy");
Object.defineProperty(exports, "MicroGrantsStrategy", { enumerable: true, get: function () { return MicroGrantsStrategy_1.MicroGrantsStrategy; } });
