import {
    TRIGGER_NOTIFICATION
  } from "../constants";
  
  const initialState = {
    category: ''
  };
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case TRIGGER_NOTIFICATION:
        return {
            category: action.category,
            message: action.message
        };

      default:
        return state;
    }
  };
  
  export default notificationReducer;
  