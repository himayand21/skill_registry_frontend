import {
    PROFILE_ROUTE,
    UPDATE_PROFILE_STATE,
    SHOW_PROFILE_STATE,
    RESET_PROFILE_STATE,
    SKILL_INPUT,
    WARNING
} from "../constants";

import {
    getApi,
    updateApi
} from "../api";

import { triggerNotification } from "./notification";
import { showSpinner, showSpinnerAndDelay, hideSpinner } from './spinner';

export const updateProfileState = keyValuePairs => {
    return {
        type: UPDATE_PROFILE_STATE,
        keyValuePairs
    };
};

export const updateProfileSkill = ({ skillInput }) => {
    return dispatch => {
        dispatch(updateProfileState({[SKILL_INPUT]: skillInput.toLowerCase()}))
    }
}

export const showProfileState = keyValuePairs => {
    return {
        type: SHOW_PROFILE_STATE,
        keyValuePairs
    };
};

export const getProfile = ({ userId, token }) => {
    return async dispatch => {
        dispatch(showSpinner());
        const response = await getApi({
            route: PROFILE_ROUTE,
            params: [userId],
            token
        })
        localStorage.setItem('profile', JSON.stringify(response.doc[0]));
        dispatch(
            updateProfileState({
                ...response.doc[0]
            })
        );
        dispatch(hideSpinner());
    }
}

export const viewProfile = ({ userId, history, name, token, authorized }) => {
    return async dispatch => {
        await dispatch(showSpinnerAndDelay());
        const urlName = "/" + name.toLowerCase().replace(/ /g, "+");
        const urlPrefix = "/" + authorized + urlName;
        const response = await getApi({
            route: PROFILE_ROUTE,
            params: [userId],
            token
        });
        dispatch(
            showProfileState({
                ...response.doc[0]
            })
        );
        localStorage.setItem('profile', JSON.stringify(response.doc[0]));
        const applicant = response.doc[0].user.name;
        history.push(urlPrefix + "/view/" + applicant.toLowerCase());
        dispatch(hideSpinner());
    }
}

export const addSkill = keyValuePairs => {
    return dispatch => {
        const { skills, skillInput, skillList } = keyValuePairs;
        if (skills.some(skill => skill.toUpperCase() === skillInput.toUpperCase()))
            dispatch(updateProfileState({ [WARNING]: skillInput + " already exists" }));
        else
            dispatch(updateProfileState({
                skills: skillList,
                skillInput: '',
                [WARNING]: '',
                editPointer: ''
            }));
    }
}

export const editSkill = (index, skill) => {
    return dispatch => {
        dispatch(updateProfileState({
            editPointer: index,
            [SKILL_INPUT]: skill
        }));
    }
}

export const removeSkill = ({ deleteIndex, skills, editIndex }) => {
    return dispatch => {
        let editPointer = editIndex;
        if (deleteIndex === editIndex) {
            editPointer = '';
            dispatch(updateProfileState({ skillInput: '' }))
        }
        else if (deleteIndex < editIndex) editPointer = editIndex - 1;
        dispatch(updateProfileState({
            editPointer,
            skills: skills.filter((skill, index) => index !== deleteIndex)
        }))
    }
}

export const changeProfile = ({ token, profileId, data }) => {
    return async dispatch => {
        await dispatch(showSpinnerAndDelay());
        const response = await updateApi({
            route: PROFILE_ROUTE,
            params: [profileId],
            token,
            data
        });
        if (response.message === "success") {
            dispatch(updateProfileState({
                editFlag: false
            }))
            dispatch(triggerNotification({
                category: 'success',
                message: 'Profile updated.'
            }))
        }
        else {
            dispatch(triggerNotification({
                category: 'error',
                message: 'Could not update Profile.'
            }))
        }
        dispatch(hideSpinner());
    }
}

export const resetProfileState = () => {
    return {
        type: RESET_PROFILE_STATE
    }
}
