import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const RPC_URLS: { [chainId: number]: string } = {
  56: "https://bsc-dataseed.binance.org/",
};

export const injected = new InjectedConnector({
  supportedChainIds: [4],
});

export const WalletConnect = new WalletConnectConnector({
  rpc: { 56: "https://bsc-dataseed.binance.org/" },
  chainId: 56,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
