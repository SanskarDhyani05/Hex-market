import React, { useEffect, useState } from "react";
import {
  ButtonWrap,
  Container,
  FrameImg,
  Logo,
  MobileTab,
  MobileWrap,
  NavContainer,
  NavTab,
  ToggleMenu,
} from "./style";

import { useWeb3React } from "@web3-react/core";
import { injected, WalletConnect } from "../../../wallet/connectors";

import { useSelector, useDispatch } from "react-redux";
import { Paths } from "../routes/types";
import history from "../history";
import { getBalance } from "../../../../logic/actions";
import ConnectWallet from "../../../../shared/connect-wallet";
import { Web3ReactProvider, UnsupportedChainIdError } from "@web3-react/core";
import toggle from "../../../../assets/icons/mobile-toggle.svg";
import frame from "../../../../assets/icons/Frame.svg";

const Navbar = (props: any) => {
  const [Mobile, setMobile] = useState(false);
  const [WalletSelect, setWalletSelect] = useState(false);
  const [MobileMenu, setMobileMenu] = useState(false);

  const OpenMobile = () => {
    setMobile(!Mobile);
  };

  const CloseMobile=()=>{
    setMobile(false)
  }
  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
    error,
    chainId,
  } = useWeb3React();


  const [connectWallet, setConnectWallet] = React.useState(false);
  const { walletBalance, walletConnectCheck, userAddress } = useSelector(
    (state: any) => state.wallet
  );
  const [menu, setMenu] = React.useState(false);

  const dispatch = useDispatch();
  const [walletAddress, setWalletAddress] = React.useState("");
  const [selectItem, setSelectItem] = React.useState<any>("");
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [showLogout, setShowLogout] = React.useState(false);

  const wrapperRef = React.useRef<any>(null);

  React.useEffect(() => {
    //@ts-ignore
    const walletConnect = JSON.parse(localStorage.getItem("walletConnected"));
    setConnectWallet(walletConnect);
    //@ts-ignore
    const address = JSON.parse(localStorage.getItem("address"));
    if (account) {
      dispatch(getBalance(account, library));
      var ret = userAddress.replace(/(^"|"$)/g, "");
      setWalletAddress(ret);
    }
  }, [
    connectWallet,
    setConnectWallet,
    walletConnectCheck,
    userAddress,
    account,
    chainId,
  ]);

  const toStaking = () => {
    history.push(Paths.staking);
    setMobile(false);
  };
  const toHomePage = () => {
    history.push(Paths.homepage);
  };
  const toSell = () => {
    history.push(Paths.sell);
    setMobile(false);
  };

  return (
    <Container>
      <NavContainer>
        <Logo
          onClick={toHomePage}
          src={require("../../../../assets/icons/HexLogo.svg").default}
        />
        <ToggleMenu onClick={OpenMobile} src={toggle} alt="menu" />
      </NavContainer>
      {Mobile && (
        <div style={{ padding: "10px" }}>
          {active ? (
            <MobileWrap>
              <MobileTab onClick={toStaking}>
                <a>Stake</a>
              </MobileTab>
              <div>
                <MobileTab onClick={toSell}>
                  <a>Sell</a>
                </MobileTab>
              </div>
              <ConnectWallet
                connectWallet={connectWallet}
                walletAddress={walletAddress}
                setConnectWallet={setConnectWallet}
                walletBalance={walletBalance}
                checkWallet={props.checkWallet}
                showWalletContent
                closeWalletModal={() =>null }
                showLogout={(e: any) => setShowLogout(e)}
                call={()=>{CloseMobile()}}
                // menu={false}
              />
            </MobileWrap>
          ) : (
            <MobileWrap>
              <MobileTab onClick={toStaking}>
                <a>Stake</a>
              </MobileTab>
              <ConnectWallet
                connectWallet={connectWallet}
                walletAddress={walletAddress}
                setConnectWallet={setConnectWallet}
                walletBalance={walletBalance}
                checkWallet={props.checkWallet}
                showWalletContent
                closeWalletModal={() => null}
                showLogout={(e: any) => setShowLogout(e)}
                call ={()=>{CloseMobile()}}
                // menu={false}
              />
            </MobileWrap>
          )}
        </div>
      )}
      {active ? (
        <ButtonWrap>
          <NavTab onClick={toStaking}>
            <a>Stake</a>
          </NavTab>

          <div style={{ display: "flex" }}>
            <NavTab onClick={toSell}>
              <a>Sell</a>
            </NavTab>
          </div>
          <ConnectWallet
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setConnectWallet={setConnectWallet}
            walletBalance={walletBalance}
            checkWallet={props.checkWallet}
            showWalletContent
            closeWalletModal={() => null}
            showLogout={(e: any) => setShowLogout(e)}
            // menu={false}
          />
        </ButtonWrap>
      ) : (
        <ButtonWrap>
          <NavTab onClick={toStaking}>
            <a>Stake</a>
          </NavTab>
          <ConnectWallet
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setConnectWallet={setConnectWallet}
            walletBalance={walletBalance}
            checkWallet={props.checkWallet}
            showWalletContent
            closeWalletModal={() => null}
            showLogout={(e: any) => setShowLogout(e)}
            // menu={false}
          />
        </ButtonWrap>
      )}
    </Container>
  );
};

export default Navbar;
