import {
  GET_BALANCE,
  LOGIN,
  GET_DEPOSITE_LP,
  EARN_SUCCESS,
  BNB_BALANCE,
  WALLET_BALANCE,
  CLEAR_ERROR_SUCCESS,
  ERROR,
  LP_PER_WSB,
  WSB_PER_LP,
  TOKEN_BALANCE,
  WALLET_CONNECT_CHECK,
  SET_DEADLINE,
  SET_TOLERANCE,
  START,
  STOP,
  SUCCESS,
  SET_CHAINID,
  HASH,
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  NOTIFICATION_OPEN,
  NOTIFICATION_CLOSE,
  PENDING,
  CLEAR_TRANSACTION,
} from "../actions";

const initialState = {
  amount: 0,
  loader: false,
  userAddress: "",
  depositeAmount: "",
  rewardAmount: "",
  bnbBalance: "",
  walletBalance: "",
  error: false,
  success: false,
  claimSuccess: false,
  lpPerWsbVal: "0",
  wsbPerLpVal: "0",
  tokenBalance: "0",
  v2StakeBalance: "0",
  wsbTvl: "0",
  bnbTvl: "0",
  busdTvl: "0",
  oldVersionCheck: true,
  openDeposit: false,
  switchModal: false,
  migrationSuccessModal: false,
  walletConnectCheck: false,
  setTolerance: 0.5,
  setDeadline: 20,
  chainId: 1,
  hash: "",
  transaction: [],
  isOpen: false,
  pendingTx: 0,
};

const walletReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_BALANCE:
      return {
        ...state,
        amount: action.amount,
      };

    case LOGIN:
      return {
        ...state,
        userAddress: action.address,
      };
    case GET_DEPOSITE_LP:
      return {
        ...state,
        depositeAmount: action.depositeAmount,
      };
    case EARN_SUCCESS:
      return {
        ...state,
        rewardAmount: action.rewardAmount,
      };
    case BNB_BALANCE:
      return {
        ...state,
        bnbBalance: action.balance,
      };
    case WALLET_BALANCE:
      return {
        ...state,
        walletBalance: action.balance,
      };
    case ERROR:
      return {
        ...state,
        loader: false,
        error: true,
        success: false,
      };
    case CLEAR_ERROR_SUCCESS:
      return {
        ...state,
        loader: false,
        error: false,
        success: false,
        claimSuccess: false,
        openDeposit: false,
        migrationSuccessModal: false,
        chainId: 1,
      };

    case LP_PER_WSB:
      return {
        ...state,
        lpPerWsbVal: action.balance,
      };
    case WSB_PER_LP:
      return {
        ...state,
        wsbPerLpVal: action.balance,
      };
    case TOKEN_BALANCE:
      return {
        ...state,
        tokenBalance: action.balance,
      };
    case WALLET_CONNECT_CHECK:
      return {
        ...state,
        walletConnectCheck: action.value,
      };
    case SET_TOLERANCE:
      return {
        ...state,
        setTolerance: action.value,
      };
    case SET_DEADLINE:
      return {
        ...state,
        setDeadline: action.value,
      };
    case START:
      return {
        ...state,
        success: false,
        error: false,
        loader: true,
      };
    case STOP:
      return {
        ...state,
        success: false,
        error: true,
        loader: false,
      };
    case SUCCESS:
      return {
        ...state,
        success: true,
        error: false,
        loader: false,
      };
    case SET_CHAINID:
      return {
        ...state,
        chainId: action.value,
      };
    case HASH:
      return {
        ...state,
        hash: action.value,
      };
    case ADD_TRANSACTION:
      let tx: any = {};
      tx[action.value] = {
        hash: action.value,
        addTime: new Date().getTime(),
      };
      return {
        ...state,
        transaction: [...state.transaction, tx],
      };
    case UPDATE_TRANSACTION:
      console.log("update2", action.value);
      return {
        ...state,
        transaction: [
          ...state.transaction,
          state.transaction.map((e: any, i: any) => {
            console.log(
              "RECEIPTUPDATE",
              e,
              action.value.transactionHash,
              e[action.value.transactionHash]
            );
            if (
              e[action.value.transactionHash]?.hash ===
              action.value.transactionHash
            ) {
              return (e[action.value.transactionHash].receipt = action.value);
            }
          }),
        ],
      };
    case NOTIFICATION_OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case NOTIFICATION_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    case PENDING:
      return {
        ...state,
        pendingTx: action.value,
      };
    case CLEAR_TRANSACTION:
      return {
        ...state,
        transaction: [],
      };
    default:
      return state;
  }
};

export default walletReducer;
