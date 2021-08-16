const MonsterFactory = artifacts.require("MonsterFactory");

module.exports = function (deployer, network, accounts) {
  //constructor(address _factory, address _WETH) public {
  deployer.deploy(MonsterFactory, "0xa6a4b15419F911B2C24d39329AbEa5532153dd65");
};
