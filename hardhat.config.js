require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("hardhat-gas-reporter")
require("./tasks/blocknumber")
require("@nomiclabs/hardhat-etherscan")
require("solidity-coverage")

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const RINKEBY_API_KEY_URL = process.env.RINKEBY_API_KEY_URL || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // forking: {
      //   url: ALCHEMY_API_KEY_URL,
      // },
    },
    rinkeby: {
      url: RINKEBY_API_KEY_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    }
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  }
}
