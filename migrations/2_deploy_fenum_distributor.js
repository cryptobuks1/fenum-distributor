const FenumDistributor = artifacts.require('FenumDistributor');



module.exports = async function (deployer, network, accounts) {
  const token = "0x";       // TOKEN_ADDRESS
  const merkleRoot = "0x";  // MERKLE_ROOT
  const args = [token, merkleRoot];
  await deployer.deploy(FenumDistributor, ...args);
};
