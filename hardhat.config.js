require("@nomiclabs/hardhat-waffle");



const ALCHEMY_API_KEY = "7d7a6bfa48354518a97d961ccde0ad17";



const RINKEBY_PRIVATE_KEY = "2dd341d67e89818973c6ddc3b8a2e619c145bf6b95544f3d7d036e7e4bf0bf09";
const LOCALHOST_PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
      // Token address: 0xEA48459388dF8AaCbD1Fd89E320ffA5eA0AB6DDe
    },
    // localhost: {
    //   url: `http://127.0.0.1:8545/`,
    //   accounts: [`0x${LOCALHOST_PRIVATE_KEY}`],
    // }
  },

};
