const hre = require("hardhat");

async function main() {
  let nftColletionAddress = '0xb4d81ec55d86aec8814c9d662c3726c48f3c5bda';
  let rewardsTokenAddress = '0xf3575e93a1b3fd346a94572bf9e4b784f3af9b65';
  let NFTStaking = await hre.ethers.getContractFactory("NFTStaking");
  NFTStaking = await NFTStaking.deploy(
    nftColletionAddress,
    rewardsTokenAddress
  );

  await NFTStaking.deployed();

  console.log(`Contract deployed to ${NFTStaking.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
