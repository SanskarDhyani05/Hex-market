/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
  Content,
  AddressInfoWrap,
  BnbInfo,
  AddressInfo,
  WalletOption,
  WalletDetails,
  StatusContent,
  ConnectButtonWrap,
  ButtonWrapper,
  FrameImg,
} from "./style";
import { colors } from "../styles/theme";
import CustomModal from "../custom-modal";
import wallet from "../../utils/wallet";
import {
  Login,
  clearErrorSuccess,
  walletConnectCheck,
} from "../../logic/actions";
import { WalletTypes } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../components/button";
import { fromLp, renderTokenAmountText, setupNetwork } from "../../utils";
import { useWeb3React } from "@web3-react/core";
import useAuth from "../../wallet_helpers/useAuth";
import Spinner from "../../shared/components/spinner";
import mixpanel from "mixpanel-browser";
import { UAuthConnector } from "@uauth/web3-react";
import frame from "../../assets/icons/Frame.svg";
import { useState } from "react";
import { ModifiedButton } from "../styles/styled";

const ConnectWallet = (props: any) => {
  const {
    connectWallet,
    walletAddress,
    setConnectWallet,
    walletBalance,
    showWalletModal,
    closeWalletModal,
    showWalletContent,
    call,
  } = props;
  const [walletOptions, setWalletOptions] = React.useState(false);
  const [disconnectWallet, setDisconnectWallet] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
  const [errorModal, setErrorModal] = React.useState(false);
  const [walletType, setWalletType] = React.useState(false);
  const [user, setUser] = React.useState<string>("");
  const { pendingTx } = useSelector((state: any) => state.wallet);
  const dispatch = useDispatch();
  const { login, logoutWallet } = useAuth();
  const { account, deactivate, library, chainId, connector } = useWeb3React();

  const smallScreen = window.screen.width < 640
  

  // const mixWalletDisconnect = async(account:any) => {
  //   mixpanel.reset()
  //   mixpanel.identify(account)
  //   mixpanel.track("wallet disconnected", {userId: `${account}`})
  // }
  const connect = async (type: any) => {
    if (account) {
      // mixWalletDisconnect(account)
      logoutWallet();
      localStorage.clear();
      dispatch(walletConnectCheck(false));
      setDisconnectWallet(false);
      setUser("");
    } else {
      try {
        login(type);
        localStorage.setItem("connectorId", JSON.stringify(type));
      } catch (error) {
        console.log(error);
        setErrorModal(true);
      }
    }
    
  };

  React.useEffect(() => {
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem("connectorId"));
    //@ts-ignore
    const walletconnected = JSON.parse(localStorage.getItem("walletConnected"));
    //@ts-ignore
    const walletconnect = JSON.parse(localStorage.getItem("walletconnect"));
    //@ts-ignore
    const address = JSON.parse(localStorage.getItem("address"));

    if (account) {
      dispatch(Login(account));
      setConnectWallet(true);
      localStorage.setItem("address", JSON.stringify(account));
      localStorage.setItem("walletConnected", JSON.stringify(true));
      dispatch(walletConnectCheck(true));
      getSubdomain();
      if (walletconnected === null) {
        // mixWalletConnect(account,walletType === 1 ? 'Metamask':walletType === 2 ?'TrustWallet':'unstoppable domain')
      }
    } else if (walletType === 2 && walletconnect === null) {
      // mixWalletDisconnect(address)
      logoutWallet();
      localStorage.clear();
      dispatch(walletConnectCheck(false));
      setDisconnectWallet(false);
    }
    setWalletOptions(false);
  }, [account]);

  // React.useEffect(() => {
  //   if (account) {
  //     setWalletOptions(false);
  //     setConnectWallet(true);
  //     localStorage.setItem("address", JSON.stringify(account));
  //     localStorage.setItem("walletConnected", JSON.stringify(true));
  //     localStorage.setItem("walletType", JSON.stringify(2));
  //     window.location.reload();
  //   }
  // }, [account, setConnectWallet]);
  // const walletconnect = new WalletConnectConnector({
  //   rpc: {
  //     // 56: "https://bsc-dataseed.binance.org/",
  //     97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  //   },
  //   bridge: "https://bridge.walletconnect.org",
  //   qrcode: true,
  //   pollingInterval: 12000,
  // });

  React.useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setCopy(false);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [copy]);
  const WalletModalClose = () => {
    setWalletOptions(false);
    closeWalletModal();
  };
  // React.useEffect(() => {
  //   if (
  //     history.location.pathname === "/v2/farmDetails-migration" ||
  //     history.location.pathname === "/v2/farmdetail" ||
  //     history.location.pathname === "/v2/farmDetails"
  //   ) {
  //     //@ts-ignore
  //     const walletConnect = JSON.parse(localStorage.getItem("walletConnected"));
  //     if (!walletConnect || walletConnect === null) {
  //       setWalletOptions(true);
  //     }
  //   }
  // }, [checkWallet]);
  React.useEffect(() => {
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem("walletType"));
    setWalletType(walletType);
  }, []);
  // React.useEffect(() => {
  //   const setChainId = async () => {
  //     const chainid = await wallet.web3.eth.getChainId();
  //     dispatch(setChainIdValue(chainid));
  //   };
  //   setChainId();
  // }, [checkWallet]);

  React.useEffect(() => {
    //@ts-ignore
    const switchWallet = JSON.parse(localStorage.getItem("switch"));
    if (switchWallet) {
      setWalletOptions(true);
      props.showLogout(true);
      localStorage.removeItem("switch");
    }
  }, []);

  const getSubdomain = () => {
    if (connector instanceof UAuthConnector) {
      connector.uauth.user().then((e) => setUser(e.sub));
    }
  };
  return (
    <>
      <Content>
        {showWalletContent ? (
          connectWallet ? (
            <AddressInfoWrap>
              <FrameImg
                src={frame}
                onClick={() => {
                  setDisconnectWallet(true);
                  props.showLogout(true);
                }}
              ></FrameImg>
            </AddressInfoWrap>
          ) : (
            <ConnectButtonWrap
              onClick={() => {
                setWalletOptions(true);
                props.showLogout(true);
            
              }}
            >
              <p>Connect Wallet</p>
            </ConnectButtonWrap>
          )
        ) : null}

        <CustomModal
          show={walletOptions || showWalletModal}
          toggleModal={() => {
            WalletModalClose();
            props.showLogout(false);
          }}
          heading="Connect Wallet"
        >
          <div style={{ marginTop: "25px" }}>
            <WalletOption
              onClick= {()=> {connect(WalletTypes.metamask);
                 if (smallScreen) props.call();
              }}>
              <img
                style={{ margin: "0 20px" }}
                src={require("../../assets/images/metamask.svg").default}
                alt=""
              />
              <p>Metamask</p>
            </WalletOption>

            {/* <WalletOption
              onClick={() => connect(WalletTypes.uauth)}
              // onClick={() => activate(walletconnect)}
            >
              <p>Unstoppable Domain</p>

              <img
                src={require("../../assets/icons/unstoppable.svg").default}
                alt=""
              />
            </WalletOption> */}
          </div>
        </CustomModal>

        {localStorage.getItem("address") && (
          <CustomModal
            show={disconnectWallet}
            toggleModal={() => {
              setDisconnectWallet(false);
              props.showLogout(false);
            }}
            heading="Your Wallet"
          >
            <WalletDetails>
              <p>{walletAddress}</p>
              {/* <LinksFlex>
              <div style={{ display: "flex" }}>
                <a
                  href={`https://bscscan.com/address/` + walletAddress}
                  target="_blank"
                >
                  View on BscScan
                </a>
                <img
                  src={require("../../assets/icons/link.svg").default}
                  alt=""
                />
              </div>
              <div>
                <CopyToClipboard
                  text={walletAddress}
                  onCopy={() => setCopy(true)}
                >
                  <div style={{ display: "flex" }}>
                    <a>Copy address</a>
                    <img
                      src={require("../../assets/icons/copy.svg").default}
                      alt=""
                    />
                  </div>
                </CopyToClipboard>
                {copy === true && <p> Copied</p>}
              </div>
            </LinksFlex> */}
              <div style={{ textAlign: "center" }}>
                {/* <ButtonArea
                gradient={colors.greenGradient}
                style={{ margin: "auto", width: "50%" }}
              > */}
                <Button
                  style={{ width: "100%" }}
                  color={colors.black}
                  background={colors.greenGradient}
                  onClick={() => {
                    connect(walletType);
                    if(smallScreen)props.call()
                  }}
                >
                  Logout
                </Button>
                {/* </ButtonArea> */}
              </div>
            </WalletDetails>
          </CustomModal>
        )}

        <CustomModal
          show={errorModal}
          toggleModal={() => {
            setErrorModal(false);
            setWalletOptions(false);
          }}
          heading="Authorization Error"
        >
          <StatusContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "40px 0px 100px 0",
              }}
            >
              <p>Please authorize to access your account</p>
            </div>

            <ButtonWrapper>
              <Button
                style={{
                  width: "90%",
                  border: "1px solid rgba(186, 169, 255, 0.25)",
                  color: "#00D7E7",
                  background: "transparent",
                  margin: "0 5px 0 0",
                }}
                color={colors.black}
                background={colors.green}
                onClick={() => {
                  setErrorModal(false);
                }}
              >
                DISMISS
              </Button>
              <Button
                style={{ width: "90%", margin: "0 0 0 5px" }}
                color={colors.black}
                background={colors.green}
                onClick={() => {
                  setWalletOptions(true);
                  props.showLogout(true);
                  setErrorModal(false);
                }}
              >
                GET A WALLET
              </Button>
            </ButtonWrapper>
          </StatusContent>
        </CustomModal>

        <CustomModal
          show={
            [4].filter((e) => e === chainId).length === 0 &&
            connectWallet &&
            library
          }
          toggleModal={async () => {
            setErrorModal(false);
            setWalletOptions(false);
            dispatch(clearErrorSuccess());
            // mixWalletDisconnect(account)
            await wallet.disconnect();
            localStorage.clear();
          }}
          heading="Wrong network"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0 60px 0",
              textAlign: "center",
              color: "black",
              fontFamily: "PoppinsMedium",
            }}
          >
            It looks like you need to switch your wallet's network. Please note
            that some wallets may not support changing networks.
          </div>

          <ButtonWrapper>
            <Button
              style={{
                width: "90%",
                border: "1px solid rgba(186, 169, 255, 0.25)",
                margin: "0 5px 0 0",
                fontFamily: "PoppinsMedium",
              }}
              color={colors.black}
              background={colors.green}
              onClick={async () => {
                setupNetwork(library);
                // setChainIdValue(42)
                // // setErrorModal(false);
                // setWalletOptions(true);
                // props.showLogout(true)
                // //@ts-ignore
                // localStorage.setItem('switch',JSON.stringify(true))
                // await wallet.disconnect();
                // localStorage.removeItem('address');
                // localStorage.removeItem('walletConnected');
                // localStorage.removeItem('walletType');
              }}
            >
              SWITCH WALLET
            </Button>
            <ModifiedButton
              onClick={async () => {
                setErrorModal(false);
                dispatch(clearErrorSuccess());
                await wallet.disconnect();
                deactivate();
                localStorage.clear();
              }}
            >
              DISMISS
            </ModifiedButton>
          </ButtonWrapper>
        </CustomModal>
      </Content>
    </>
  );
};
export default ConnectWallet;
