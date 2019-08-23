import { combineReducers } from "redux";
import userReducer from "./user";
import signupReducer from "./signup";
import notificationReducer from "./notification";
import profileReducer from "./profile";
import poolReducer from './profilePool';
import spinnerReducer from './spinner';

export default combineReducers({
    user: userReducer,
    signup: signupReducer,
    notification: notificationReducer,
    profile: profileReducer,
    profilePool: poolReducer,
    spinner: spinnerReducer
  });
  