import {
    SHOW_SPINNER,
    HIDE_SPINNER
} from "../constants";

const initialState = {
    loading: false
};

const spinnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
            return {
                loading: true
            };

        case HIDE_SPINNER:
            return {
                loading: false
            };
        default:
            return state;
    }
};

export default spinnerReducer;
