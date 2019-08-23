import {
  UPDATE_USER_STATE,
  RESET_USER_STATE,
  AUTHORIZED,
  NAME,
  PENDING,
  USER_DATA,
  PASSWORD,
  EMAIL,
  APPROVED,
  REQUEST_FLAG
} from "../constants";

const initialState = {
  [AUTHORIZED]: "none",
  [USER_DATA]: {
    [NAME]: ""
  },
  [EMAIL]: "",
  [PASSWORD]: "",
  [PENDING]: [],
  [APPROVED]: [],
  [REQUEST_FLAG]: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      return {
        ...state,
        ...action.keyValuePairs
      };

    case RESET_USER_STATE:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
