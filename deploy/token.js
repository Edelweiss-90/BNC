const { ethers } = require('hardhat')

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const token = await deploy('MoonGate', {
    from: deployer,
    log: true,
    contract: 'StandardBEP20',
    args: ['MoonGate', 'MGATE', 18, ethers.utils.parseEther('10', 18)]
  })

  console.log(`new token address in Binance ${token.address}`)
}

module.exports.tags = ['token']
