const { deployments } = require('hardhat')

exports.newTokens = deployments.createFixture(
  async ({ deployments, getNamedAccounts, ethers }) => {
    await deployments.fixture('token')
    const { deployer, userOne, userTwo } = await getNamedAccounts()

    const BEP20 = await deployments.get('MoonGate')

    const MoonGate = await ethers.getContractAt(
      'StandardBEP20', BEP20.address)

    return {
      deployer,
      userOne,
      userTwo,
      MoonGate
    }
  }
)
