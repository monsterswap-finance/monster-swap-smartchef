const MonsterPoolFactory = artifacts.require('MonsterPoolFactory')

module.exports = function (deployer, network, accounts) {
  //constructor(address _factory, address _WETH) public {
  deployer.deploy(MonsterPoolFactory)
}
