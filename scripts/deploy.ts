const hre = require("hardhat");

async function main() {
  let NFTStaking = await hre.ethers.getContractFactory("NFTStaking");
  NFTStaking = await NFTStaking.deploy();

  await NFTStaking.deployed();

  console.log(
    `Contract deployed to ${NFTStaking.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});