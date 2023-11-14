"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Registry_1 = require("../Registry/Registry");
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const client = (0, viem_1.createWalletClient)({
  chain: chains_1.goerli,
  transport: (0, viem_1.http)(),
});
if (!process.env.PRIVATE_KEY) {
  throw new Error("No private key found in .env file");
}
const account = (0, accounts_1.privateKeyToAccount)(process.env.PRIVATE_KEY);
const testGetAlloOwner = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const registry = new Registry_1.Registry({ chain: 5 });
    const profile = yield registry.getProfileById(
      "0xF0E7CB0E1455C389165FE3EB251C994BDA127924843A1178504FCD54BB069A60",
    );
    console.log(profile);
  });
testGetAlloOwner();
const testCreateOwner = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const registry = new Registry_1.Registry({ chain: 5 });
    const createProfileArgs = {
      nonce: 3,
      name: "Module Test 1",
      metadata: {
        protocol: BigInt(1),
        pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
      },
      owner: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
      members: [
        "0x5cdb35fADB8262A3f88863254c870c2e6A848CcA",
        "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
      ],
    };
    const txData = registry.createProfile(createProfileArgs);
    const hash = yield client.sendTransaction({
      data: txData.data,
      account,
      to: txData.to,
      value: BigInt(txData.value),
    });
    console.log(`Transaction hash: ${hash}`);
  });
testCreateOwner();
