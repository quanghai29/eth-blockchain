const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);

  const tokenMock = await DaiTokenMock.deployed();

  // Mint 1,000 Dai Tokens for deployer
  await tokenMock.mint(
    '0x01dB9542edEacf91185e90b153a3a62Af490308e',
    '10000000000000000000000'
  )
};