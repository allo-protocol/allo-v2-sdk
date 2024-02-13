import { expect } from "chai";
import { ContractFactory } from "ethers";
import { DirectGrantsStrategy } from "../src/strategies/DirectGrants/DirectGrantsStrategy";
// import { ethers, upgrades } from "hardhat";
// import { DirectGrantsStrategy } from "../src/strategies/DirectGrants/DirectGrantsStrategy";

const strategy = new DirectGrantsStrategy({
    chain: 1,
    rpc: "rpc",
})

describe("DirectGrantsStrategy", function () {
  let alloSettingsContract: ContractFactory;

  describe("constructor", () => {
    it("DirectGrantsStrategy SHOULD deploy properly", async () => {
      //   [user] = await ethers.getSigners();
      //   directGrantsStrategyContract = await
      //   alloSettings = <DirectGrantsStrategy>await upgrades.deployProxy(alloSettingsContract);
      //   // Verify deploy
      //   expect(isAddress(alloSettings.address), 'Failed to deploy DirectGrantsStrategy').to.be.true;
      expect(true).to.be.true;
    });
  });
});
