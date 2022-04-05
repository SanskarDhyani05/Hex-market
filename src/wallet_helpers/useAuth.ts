import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { NoBscProviderError } from "@binance-chain/bsc-connector";

import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";

import { InjectedConnector } from "@web3-react/injected-connector";
import { RPC } from "../config";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 137],
});
const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: RPC,
};

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
  bridge: "https://pancakeswap.bridge.walletconnect.org/",
});



export const selecWallet = (type: number): any => {
  switch (type) {
    case 1:
      return injected;
    case 2:
      return walletconnect;
  }
};
const useAuth = () => {
  const { activate, deactivate } = useWeb3React();
  //@ts-ignore
  const localChainId = JSON.parse(localStorage.getItem("network"));

  console.log("LocalchainId", localChainId);

  const login = useCallback(
    (connectorID) => {
      console.log(connectorID);
      if (true) {
        activate(selecWallet(connectorID), async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(selecWallet(connectorID));
          } else {
            if (
              // error instanceof NoEthereumProviderError
              error instanceof NoBscProviderError
            ) {
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              walletconnect.walletConnectProvider = null;
              console.log(error);
            } else {
              console.log(error.name, error.message);
              localStorage.clear()
            }
          }
        });
      } else {
      }
    },
    [activate]
  );

  const logoutWallet = useCallback(() => {
    deactivate();
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem("connectorId"));
    if (walletType === 2) {
      walletconnect.close();
      walletconnect.walletConnectProvider = null;
    }
  }, [deactivate]);

  return { login, logoutWallet };
};

export default useAuth;
