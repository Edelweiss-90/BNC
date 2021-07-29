const { expect } = require('chai')
const { ethers } = require('hardhat')

const { newTokens } = require('./tools')

describe('MoonGate Token', () => {
  let deployer
  let userOne
  let userTwo
  let MoonGate
  const amount = ethers.utils.parseEther('10', 18)

  beforeEach(async () => {
    const config = await newTokens()
    deployer = await ethers.getSigner(config.deployer)
    userOne = await ethers.getSigner(config.userOne)
    userTwo = await ethers.getSigner(config.userTwo)
    MoonGate = config.MoonGate
  })

  it('transfer', async () => {
    await MoonGate.connect(deployer).transfer(userOne.address, amount)

    const balance = Number(await MoonGate.balanceOf(userOne.address))

    expect(balance).to.equal(Number(amount))
  })

  it('approve', async () => {
    await MoonGate.connect(deployer).approve(userOne.address, amount)

    const approve = Number(await MoonGate.allowance(deployer.address, userOne.address))

    expect(approve).to.equal(Number(amount))
  })

  it('transferFrom', async () => {
    await MoonGate.connect(deployer).approve(userOne.address, amount)
    await MoonGate.connect(userOne).transferFrom(deployer.address, userTwo.address, amount)

    const balance = Number(await MoonGate.balanceOf(userTwo.address))

    expect(balance).to.equal(Number(amount))
  })
})
