import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import "@typechain/hardhat";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 400,
      },
    },
    // @ts-ignore
  },
  networks: {
    // Local Networks
    local: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {
      forking: {
        url: process.env.RPC_URL,
      },
    },
  },
};

export default config;
