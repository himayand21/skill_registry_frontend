import {
  UPDATE_POOL_STATE,
  UPDATE_PARAM_STATE,
  UPDATE_SKILL_STATE,
  NAME,
  EMAIL,
  SKILLS,
  CURRENT_PROJECT,
  SKILL_OPTIONS,
  RESET_PROFILE_POOL_STATE,
  RESET_SEARCH_PARAMS,
} from "../constants";

const initialState = {
  pool: [],
  searchParams: {
    [NAME]: "",
    [EMAIL]: "",
    [SKILLS]: [],
    [SKILL_OPTIONS]: [],
    [CURRENT_PROJECT]: ""
  }
};

const poolReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POOL_STATE:
      return {
        ...state,
        ...action.keyValuePairs
      };
    case UPDATE_PARAM_STATE:
      let searchParams = { ...state.searchParams, ...action.keyValuePair };
      return { ...state, searchParams };

    case RESET_SEARCH_PARAMS:
      let resetParams = { ...state.searchParams, [NAME]: '', [EMAIL]: '', [SKILLS]: [], [CURRENT_PROJECT]: ''};
      return { ...state, searchParams: resetParams };

    case UPDATE_SKILL_STATE:
      searchParams = {
        ...state.searchParams,
        [SKILLS]: action[SKILLS].map(
          skill => skill.value
        )
      };
      return { ...state, searchParams };

    case RESET_PROFILE_POOL_STATE:
      return initialState;

    default:
      return state;
  }
};

export default poolReducer;
