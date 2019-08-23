import {
  UPDATE_SIGN_UP_STATE,
  RESET_SIGN_UP_STATE,
  WARNING,
  MANAGER_OPTIONS,
  NAME,
  EMAIL,
  PASSWORD,
  MANAGER_FLAG
} from "../constants";

const initialState = {
  [WARNING]: "",
  [MANAGER_OPTIONS]: [],
  [NAME]: '',
  [EMAIL]: '',
  [PASSWORD]: '',
  [MANAGER_FLAG]: false
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGN_UP_STATE:
      return {
        ...state,
        ...action.keyValuePairs
      };

    case RESET_SIGN_UP_STATE:
      return initialState;

    default:
      return state;
  }
};

export default signupReducer;
