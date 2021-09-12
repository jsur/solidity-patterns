const Adoption = artifacts.require("./Adoption.sol");
const BaseCaller = artifacts.require("./BaseCaller.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Adoption);
  await deployer.deploy(BaseCaller);
};