import {
  UPDATE_USER_STATE,
  RESET_USER_STATE,
  AUTHORIZED,
  USER_ROUTE,
  WARNING,
  USER_DATA,
  TOKEN,
  PENDING,
  APPROVED,
  LOGIN_KEYS,
} from "../constants";

import { postApi, getApi, updateApi, deleteApi } from "../api";

import { updateProfileState, resetProfileState } from "./profile";
import { resetSignUpState } from "./signup";
import { resetProfilePoolState } from './profilePool';

import { triggerNotification } from "./notification";
import { showSpinner, showSpinnerAndDelay, hideSpinner } from "./spinner";

export const updateUserState = keyValuePairs => {
  return {
    type: UPDATE_USER_STATE,
    keyValuePairs
  };
};

export const verifyUser = ({ history, data }) => {
  return async dispatch => {
    await dispatch(showSpinnerAndDelay());
    const response = await postApi({
      route: USER_ROUTE,
      data,
      action: "login/"
    });
    if (response.message === AUTHORIZED) {
      localStorage.setItem(AUTHORIZED, response.payload.userType);
      localStorage.setItem(USER_DATA, JSON.stringify(response.payload));
      localStorage.setItem(TOKEN, response.token);
      dispatch(
        updateUserState({
          [AUTHORIZED]: response.payload.userType,
          [USER_DATA]: response.payload,
          [WARNING]: "",
          [TOKEN]: response.token
        })
      );

      LOGIN_KEYS.forEach(key => dispatch(updateUserState({ [key]: "" })));
      history.push(
        "/" +
          response.payload.userType +
          "/" +
          response.payload.name.toLowerCase().replace(/ /g, "+") +
          "/search"
      );
    } else {
      dispatch(
        updateUserState({
          [AUTHORIZED]: "none",
          [WARNING]: response.message
        })
      );
    }
    dispatch(hideSpinner());
  };
};

export const fetchRequests = ({ userId, token }) => {
  return async dispatch => {
    await dispatch(showSpinner());
    const requests = await getApi({
      route: USER_ROUTE,
      action: "requests/",
      params: [userId],
      token
    });
    const { pendingRequests, approvedRequests } = requests;
    dispatch(
      updateUserState({
        [PENDING]: pendingRequests,
        [APPROVED]: approvedRequests
      })
    );
    dispatch(hideSpinner());
  };
};

export const approveRequest = ({ managerId, userId, token }) => {
  return async dispatch => {
    dispatch(showSpinner());
    const requests = await updateApi({
      route: USER_ROUTE,
      action: "request/",
      params: [userId, managerId],
      token
    });
    const { pendingRequests, approvedRequests, message } = requests;
    if (message === "success") {
      dispatch(
        triggerNotification({
          category: "success",
          message: "Request Approved."
        })
      );
      dispatch(
        updateUserState({
          [PENDING]: pendingRequests,
          [APPROVED]: approvedRequests
        })
      );
    } else {
      dispatch(
        triggerNotification({
          category: "error",
          message: "Could not Approve."
        })
      );
    }
    dispatch(hideSpinner());
  };
};

export const declineRequest = ({ managerId, userId, token }) => {
  return async dispatch => {
    dispatch(showSpinner());
    const requests = await deleteApi({
      route: USER_ROUTE,
      action: "request/",
      params: [userId, managerId],
      token
    });
    const { pendingRequests, approvedRequests, message } = requests;
    if (message === "success") {
      dispatch(
        triggerNotification({
          category: "success",
          message: "Request Declined."
        })
      );
      dispatch(
        updateUserState({
          [PENDING]: pendingRequests,
          [APPROVED]: approvedRequests
        })
      );
    } else {
      dispatch(
        triggerNotification({
          category: "error",
          message: "Could not Decline Request."
        })
      );
    }
    dispatch(hideSpinner());
  };
};

export const deleteUser = ({ managerId, userId, token }) => {
  return async dispatch => {
    dispatch(showSpinner());
    const response = await deleteApi({
      route: USER_ROUTE,
      params: [userId],
      token
    });
    if (response.message === "success") {
      dispatch(
        triggerNotification({
          category: "success",
          message: "User Deleted."
        })
      );
      dispatch(fetchRequests({ userId: managerId, token }));
    } else {
      dispatch(
        triggerNotification({
          category: "error",
          message: "Could not Delete."
        })
      );
    }
    dispatch(hideSpinner());
  };
};

export const resetState = () => {
  return dispatch => {
    dispatch(resetUserState());
    dispatch(resetSignUpState());
    dispatch(resetProfilePoolState());
    dispatch(resetProfileState());
  }
}
export const resetUserState = () => {
  return {
    type: RESET_USER_STATE
  };
};

export const toggleRequest = ({ userId, token }, requestToggle) => {
  return dispatch => {
    dispatch(fetchRequests({ userId, token }));
    dispatch(updateUserState(requestToggle));
  };
};

export const getDataFromLocal = () => {
  return async dispatch => {
    const localUserData = {
      [AUTHORIZED]: localStorage.getItem(AUTHORIZED),
      [USER_DATA]: JSON.parse(localStorage.getItem(USER_DATA)),
      [TOKEN]: localStorage.getItem(TOKEN)
    };
    for (const key in localUserData) {
      if (localUserData[key] !== null)
        dispatch(updateUserState({ [key]: localUserData[key] }));
    }
    const profile = JSON.parse(localStorage.getItem("profile"));
    for (const key in profile) {
      if (profile[key] !== null)
        dispatch(updateProfileState({ [key]: profile[key] }));
    }
  };
};
