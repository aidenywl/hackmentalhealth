import { combineReducers } from "redux";

import { SET_FEELING } from "redux/actions/userSettings.js";

export const feelingValue = (state = 5, action) => {
  switch (action.type) {
    case SET_FEELING:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  feelingValue
});
