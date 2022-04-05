import React from "react";
import { /* RouteComponentProps */ Redirect, Switch } from "react-router";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { Paths } from "./types";
import { NotFound } from "./NotFound";
import { StyledRoutesContainer } from "./style";
import Homepage from "../../../homepage";
import Footer from "../footer";
import Navbar from "../navbar";
import wallet from "../../../../utils/wallet";
import { useDispatch } from "react-redux";
import { Login, setChainIdValue } from "../../../../logic/actions";
import { useEagerConnect } from "../../../../wallet_helpers/walletListner";
import Home from "../../../home";
import Staking from "../../../staking";
import HexDetails from "../../../hexDetails";
import Sell from "../../../sell";
import MyProfile from "../../../myProfile";


const notFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.root,
    component: Homepage,
    protected: false,
    redirect: Paths.homepage,
    title: "HexMarket",
    pathType: 1,
  },
  {
    path: Paths.homepage,
    component: Homepage,
    protected: false,
    redirect: Paths.homepage,
    title: "HexMarket",
    pathType: 2,
  },
  {
    path: Paths.home,
    component: Home,
    protected: false,
    redirect: Paths.home,
    title: "HexMarket",
    pathType: 3,
  },
  {
    path: Paths.myProfile,
    component: MyProfile,
    protected: false,
    redirect: Paths.myProfile,
    title: "HexMarket",
    pathType: 4,
  },
  {
    path: Paths.sell,
    component: Sell,
    protected: false,
    redirect: Paths.sell,
    title: "HexMarket",
    pathType: 5,
  },
  {
    path: Paths.staking,
    component: Staking,
    protected: false,
    redirect: Paths.staking,
    title: "HexMarket",
    pathType: 5,
  },
  {
    path: Paths.hexDetails,
    component: HexDetails,
    protected: false,
    redirect: Paths.hexDetails,
    title: "HexMarket",
    pathType: 6,
  },
].concat(notFoundRoute as any); // Ensure that notFound is the last route

export interface RouteDefinition {
  path: string;
  protected?: boolean;
  redirect?: string;
  component?: any;
  routes?: RouteDefinition[];
  title?: string;
  pathType?: number;
}

interface Props {
  // userLoaded: boolean
}
interface RoutesProps {}

function getRouteRenderWithAuth(route: RouteDefinition, i: number) {
  return () => <route.component />;
}

const Routes: React.FC<Props & RoutesProps> = () => {
  const dispatch = useDispatch();
  useEagerConnect()
  // React.useEffect(() => {
  //   const walletReconnect = async () => {
  //     //@ts-ignore
  //     const walletConnected = JSON.parse(
  //          //@ts-ignore
  //       localStorage.getItem("walletConnected")
  //     );
  //     //@ts-ignore
  //     const walletConnect = JSON.parse(localStorage.getItem("walletConnect"));
  //     //@ts-ignore
  //     const walletType = JSON.parse(localStorage.getItem("walletType"));
  //     const chainid = await wallet.web3.eth.getChainId();
  //     dispatch(setChainIdValue(chainid));
  //     // if(window.ethereum === undefined && walletConnected && walletType === 2){
  //     //   localStorage.clear();
  //     //   window.location.reload();
  //     // }
  //     // const iswalletlocked = await wallet.web3.eth.getAccounts()
  //     // console.log(iswalletlocked)

  //     // if(iswalletlocked.length === 0 && walletConnected === true ){
  //     //   localStorage.clear();
  //     //   window.location.reload();
  //     // }

  //     if (walletConnected) {
  //       //@ts-ignore
  //       // console.log(window.BinanceChain === undefined,walletType)
  //       //@ts-ignore
  //       if (window.BinanceChain === undefined && walletType === 7) {
  //         localStorage.clear();
  //         window.location.reload();
  //       } else {
  //         try {
  //           await wallet.setProvider(walletType);
  //           const address = await wallet.login(walletType);
  //           dispatch(Login(address));
  //         } catch (err) {
  //           console.log("error in reconnect", err);
  //         }
  //       }
  //     }
  //   };
  //   walletReconnect();
  // }, []);

  return (
    <Router history={history}>
      <Navbar />
      <StyledRoutesContainer>
        <Switch>
          <Redirect exact from="/" to={Paths.homepage} />
          {routes.map((route, i) => {
            const render = getRouteRenderWithAuth(route, i);
            const rest = { render };
            return <Route key={i} path={route.path} exact {...rest} />;
          })}
        </Switch>
      </StyledRoutesContainer>

      <Footer />
    </Router>
  );
};

export default Routes;
