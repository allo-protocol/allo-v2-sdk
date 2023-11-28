"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NATIVE = exports.makeBytes32 = exports.makeAddress = void 0;
const viem_1 = require("viem");
// import { Profile } from "../../Registry/types";
const makeAddress = (input) => {
    return (0, viem_1.keccak256)((0, viem_1.toHex)(input)).slice(0, 42);
};
exports.makeAddress = makeAddress;
const makeBytes32 = (input) => {
    return (0, viem_1.keccak256)((0, viem_1.toHex)(input));
};
exports.makeBytes32 = makeBytes32;
const NATIVE = () => {
    return "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
};
exports.NATIVE = NATIVE;
// export const createMockProfile = () => {
//   const profile:
