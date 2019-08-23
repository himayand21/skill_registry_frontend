import {
    UPDATE_PROFILE_STATE,
    RESET_PROFILE_STATE,
    SHOW_PROFILE_STATE,
    CONTACT,
    LOCATION,
    CURRENT_PROJECT,
    NAME,
    EMAIL,
    USER_TYPE,
    SKILL_INPUT,
    EDIT_FLAG,
} from "../constants";

const initialState = {
    [CONTACT]: '',
    [LOCATION]: '',
    [CURRENT_PROJECT]: '',
    [SKILL_INPUT]: '',
    user: {
        [NAME]: '',
        [EMAIL]: '',
        [USER_TYPE]: ''
    },
    [EDIT_FLAG]: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_STATE:
            return {
                ...state,
                ...action.keyValuePairs
            };

        case SHOW_PROFILE_STATE:
            return {
                ...initialState,
                ...action.keyValuePairs
            }

        case RESET_PROFILE_STATE:
            return initialState

        default:
            return state;
    }
};

export default profileReducer;