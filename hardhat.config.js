require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')
require('hardhat-deploy')
require('hardhat-deploy-ethers')

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`
      }
    },
    binance: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [process.env.PRIVAT_KEY],
      chainId: 97,
      gasPrice: 20000000000
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    userOne: {
      default: '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503'
    },
    userTwo: {
      default: '0x6f6c07d80d0d433ca389d336e6d1febea2489264'
    }
  },
  mocha: {
    timeout: 300000
  },
  solidity: '0.8.0'
}
