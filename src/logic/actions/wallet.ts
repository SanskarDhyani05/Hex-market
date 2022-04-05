import {
  GET_BALANCE,
  LOGIN,
  GET_DEPOSITE_LP,
  EARN_SUCCESS,
  BNB_BALANCE,
  WALLET_BALANCE,
  ERROR,
  CLEAR_ERROR_SUCCESS,

  LP_PER_WSB,
  WSB_PER_LP,
  TOKEN_BALANCE,
  CHECK_WALLET_CONNECT,
  WALLET_CONNECT_CHECK,
  SET_TOLERANCE,
  SET_DEADLINE,
  START,
  STOP,
  SUCCESS,
  SET_CHAINID,
  HASH,
  NOTIFICATION_CLOSE,
  NOTIFICATION_OPEN,
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  PENDING,
  CLEAR_TRANSACTION
} from "./constant";

// import axios from "axios";
// import BigNumber from "bignumber.js";
// import { signERC2612Permit } from "eth-permit";
const {defaultAbiCoder} = require("@ethersproject/abi");

export const getLPBalance = (amount: any) => {
  return {
    type: GET_BALANCE,
    amount: amount,
  };
};


export const Login = (userAddress: String) => {
  return {
    type: LOGIN,
    address: userAddress,
  };
};

export const getDepositeBal = (amount: any) => {
  return {
    type: GET_DEPOSITE_LP,
    depositeAmount: amount,
  };
};
export const checkWalletConnect = () => {
  return {
    type: CHECK_WALLET_CONNECT,
  };
};

export const earnSuccess = (userAddress: any) => {
  return {
    type: EARN_SUCCESS,
  };
};

export const showRewardSuccess = (amount: any) => {
  return {
    type: EARN_SUCCESS,
    rewardAmount: amount,
  };
};

export const showBNB_Balance = (balance: any) => {
  return {
    type: BNB_BALANCE,
    balance: balance,
  };
};

export const getWalletBalance = (balance: String) => {
  return {
    type: WALLET_BALANCE,
    balance: balance,
  };
};
export const clearErrorSuccess = () => {
  return {
    type: CLEAR_ERROR_SUCCESS,
  };
};

export const errorCall = () => {
  return {
    type: ERROR,
  };
};

export const lp_Per_Wsb = (value: any) => {
  return {
    type: LP_PER_WSB,
    balance: value,
  };
};

export const wsb_Per_LP = (value: any) => {
  return {
    type: WSB_PER_LP,
    balance: value,
  };
};

export const tokenBalance = (value: any) => {
  return {
    type: TOKEN_BALANCE,
    balance: value,
  };
};

export const NotificationOpen = () => {
  return {
    type: NOTIFICATION_OPEN,
  };
};

export const NotificationClose = () => {
  return {
    type: NOTIFICATION_CLOSE,
  };
}

export const pending = (value:number) => {
  return {
    type: PENDING,
    value: value
  };
};


export const getBalance = (address: any,library: any) => async (dispatch: any) => {
  if (address) {
    const balance = await library.eth.getBalance(address);
    dispatch(getWalletBalance(balance));
    dispatch(getLPBalance(address));
  }
};

export const start = () => {
  return {
    type: START
  }
}
export const stop = () => {
  return {
    type: STOP
  }
}

export const successCall = () => {
  return {
    type: SUCCESS
  }
}

export const walletConnectCheck = (value: any) => {
  return {
    type: WALLET_CONNECT_CHECK,
    value: value,
  };
};

export const setToleranceValue = (val:any) => {
  return {
    type: SET_TOLERANCE,
    value: val
  };
};

export const setDeadlineValue = (val:any) => {
  return {
    type: SET_DEADLINE,
    value: val
  };
};

export const setChainIdValue = (val:any) => {
  return {
    type: SET_CHAINID,
    value: val
  };
};

export const hashCall = (val:any) => {
  return {
    type: HASH,
    value: val
  };
};

 //ADD TRANSACTION

 export const addTransaction = (val:any) => {
  return {
    type: ADD_TRANSACTION,
    value: val
  };
};

export const updateTransaction = (val:any) => {
  return {
    type: UPDATE_TRANSACTION,
    value: val
  };
};

export const clearTransaction = () => {
  return {
    type: CLEAR_TRANSACTION,
  };
};


