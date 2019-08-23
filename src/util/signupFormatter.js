import {
    SIGNUP_KEYS,
    MANAGER,
    EMPLOYEE,
    APPROVED,
    PENDING
 } from '../constants';

const signupFormatter = store => {
    let data = {};
    SIGNUP_KEYS.forEach(key => data = {...data, [key]: store[key]});
    return {
        ...data,
        userType: store.managerFlag ? MANAGER : EMPLOYEE,
        status: store.managerFlag ? APPROVED : PENDING
    }
}

export default signupFormatter