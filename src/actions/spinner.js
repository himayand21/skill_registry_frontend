import {
    SHOW_SPINNER,
    HIDE_SPINNER
} from '../constants';
import { delay } from "../util";

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    }
}

export const showSpinnerAndDelay = () => {
    return async dispatch => {
        await dispatch(showSpinner());
        await delay(500);
    }
}

export const hideSpinner = () => {
    return {
        type: HIDE_SPINNER
    }
}