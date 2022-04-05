import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/app/App";
import { Provider } from "react-redux";
import store from "./logic/store";
import * as serviceWorker from "./serviceWorker";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import history from "./modules/app/components/history";
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient,HttpLink,InMemoryCache } from "@apollo/client";
import getLibrary from './wallet_helpers/getLibrary'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    query:{
      fetchPolicy:'no-cache'
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
  },
}

});

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
  <Provider store={store}>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </Provider>
  </Web3ReactProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
