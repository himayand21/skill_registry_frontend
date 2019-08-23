import {
    TRIGGER_NOTIFICATION
} from '../constants';

export const triggerNotification = ({category, message}) => {
    return {
        type: TRIGGER_NOTIFICATION,
        category,
        message
    }
}