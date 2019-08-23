import {
  PROFILE_ROUTE,
  UPDATE_POOL_STATE,
  UPDATE_PARAM_STATE,
  UPDATE_SKILL_STATE,
  RESET_PROFILE_POOL_STATE,
  RESET_SEARCH_PARAMS,
  SKILLS,
} from "../constants";

import { getApi, postApi } from "../api";
import { hideSpinner, showSpinnerAndDelay } from "./spinner";
import { triggerNotification } from './notification';

export const updatePoolState = keyValuePairs => {
  return {
    type: UPDATE_POOL_STATE,
    keyValuePairs
  };
};

export const updateParamState = keyValuePair => {
  if (Object.keys(keyValuePair).includes(SKILLS))
    return {
      type: UPDATE_SKILL_STATE,
      [SKILLS]: keyValuePair[SKILLS]
    };
  return {
    type: UPDATE_PARAM_STATE,
    keyValuePair
  };
};

export const resetSearch = () => {
  return dispatch => {
    dispatch(resetSearchParams());
    dispatch(updatePoolState({pool: []}))
  }
}

export const resetSearchParams = () => {
  return {
    type: RESET_SEARCH_PARAMS
  }
}

export const populateSearchBar = ({token}) => {
  return async dispatch => {
    dispatch(resetProfilePoolState());
    const response = await getApi({
      route: PROFILE_ROUTE,
      action: "skills",
      token
    });
    const skillOptions = [];
    response.doc.forEach(skill => {
          skillOptions.push({
            value: skill.name,
            label: skill.name
          });
    })
    dispatch(updateParamState({ skillOptions }));
  };
};

export const getFilteredProfiles = (token, {
  name,
  email,
  skills,
  currentProject
}) => {
  return async dispatch => {
    const data = {
      name,
      email,
      skills,
      currentProject
    };
    if(name || email || skills.length || currentProject) {
    await dispatch(showSpinnerAndDelay())
    const response = await postApi({
      route: PROFILE_ROUTE,
      action: "filter/",
      data,
      token
    });
    dispatch(updatePoolState({ pool: response.doc }));
    dispatch(hideSpinner());
  }
  else {
    dispatch(updatePoolState({pool: []}));
    dispatch(triggerNotification({
      category: "warning",
      message: "At least one Search Field required."
    }))
  }
  };
};

export const resetProfilePoolState = () => {
  return {
      type: RESET_PROFILE_POOL_STATE
  }
}