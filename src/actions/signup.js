import {
    UPDATE_SIGN_UP_STATE,
    RESET_SIGN_UP_STATE,
    USER_ROUTE,
    MANAGER_OPTIONS,
    WARNING,
} from '../constants';

import {
    postApi,
    getApi
} from "../api";

import {
    signupFormatter,
    selectFormatter
} from "../util";

import { triggerNotification } from './notification';
import { showSpinnerAndDelay, hideSpinner } from './spinner';

export const updateSignUpState = keyValuePairs => {
    return {
        type: UPDATE_SIGN_UP_STATE,
        keyValuePairs
    }
}

export const signupUser = ({ store, history }) => {
    const data = signupFormatter(store);
    return async dispatch => {
        await dispatch(showSpinnerAndDelay());
        const response = await postApi({ route: USER_ROUTE, data, action: "signup/" });
        if (response.message === "success") {
            history.push("/login");
            dispatch(resetSignUpState());
            dispatch(triggerNotification({ category: 'success', message: 'Signed up successfully.' }));
        }
        else
            dispatch(updateSignUpState({
                [WARNING]: response.message
            }));
        dispatch(hideSpinner());
    }
}

export const resetSignUpState = () => {
    return {
        type: RESET_SIGN_UP_STATE
    }
}

export const setWarningMessage = ({ message }) => {
    return dispatch => {
        dispatch(updateSignUpState({ [WARNING]: message }));
    }
}

export const getManagerList = () => {
    return dispatch => {
        getApi({
            route: USER_ROUTE,
            action: "managerList/"
        }).then(response => {
            const managerList = selectFormatter({
                list: response.doc,
                label: 'name',
                value: '_id'
            });
            dispatch(updateSignUpState({ [MANAGER_OPTIONS]: managerList }));
        })
    }
}