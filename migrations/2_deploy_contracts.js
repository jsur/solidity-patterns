const Adoption = artifacts.require("./Adoption.sol");
const BaseCaller = artifacts.require("./BaseCaller.sol");
const ContextSwitcher = artifacts.require("./ContextSwitcher.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Adoption);
  await deployer.deploy(BaseCaller);
  await deployer.deploy(ContextSwitcher);
};