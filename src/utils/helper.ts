import web3 from "web3";
import axios from "axios";

export const toLp = (amount: any) => {
  return web3.utils.toWei(amount, "ether");
};

export const fromLp = (amount: any) => {
  return web3.utils.fromWei(amount, "ether");
};

export const tousdcLp = (amount: any) => {
  return web3.utils.toWei(amount, "mwei");
};

export const fromusdcLp = (amount: any) => {
  return web3.utils.fromWei(amount, "mwei");
};

export const fromGwei = (amount: any) => {
  return web3.utils.toWei(amount, "gwei");
};

export const toGwei = (amount: any) => {
  return web3.utils.fromWei(amount, "gwei");
};

export const toChecksum = (address: string) => {
  return web3.utils.toChecksumAddress(address);
};

export const renderTokenAmountText = (amount: any) => {
  const token = amount.replace(/,/g, "");

  if (!isNaN(parseFloat(token))) {
    return parseFloat(token).toLocaleString("en-US", {
      maximumFractionDigits: 4,
      minimumFractionDigits: 0,
    });
  }

  return "0";
};

export const renderEarnTokenAmountText = (amount: any) => {
  const token = amount.replace(/,/g, "");

  if (!isNaN(parseFloat(token))) {
    return parseFloat(token).toLocaleString("en-US", {
      maximumFractionDigits: 5,
      minimumFractionDigits: 5,
    });
  }

  return "0";
};

export const setupNetwork = async (library: any) => {
  const provider = library.currentProvider;
  if (provider) {
    const chainId = parseInt("4", 10);

    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            // chainName: 'Kovan Test Network',
            // nativeCurrency: {
            //   name: 'ETH',
            //   symbol: 'eth',
            //   decimals: 18,
            // },
            // rpcUrls: ["https://kovan.infura.io/v3/undefined"],
            // blockExplorerUrls: ["https://kovan.etherscan.io"],
          },
        ],
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  } else {
    console.error(
      "Can't setup the BSC network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};