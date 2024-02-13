// import "@typechain/hardhat";

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
    hardhat: {
      // forking: {
      //   url: process.env.MAINNET,
      //   blockNumber: 33317730,
      // },
      mining: {
        auto: false,
        interval: 1000,
      },
    },
  },

};

export default config;
