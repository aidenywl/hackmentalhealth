import { combineReducers } from "redux";

import { SET_BASE_DATA } from "redux/actions/baseData";

const availableThemes = (state = [], action) => {
  switch (action.type) {
    case SET_BASE_DATA:
      return action.payload.themes;
    default:
      return state;
  }
};

const availableActivities = (state = [], action) => {
  switch (action.type) {
    case SET_BASE_DATA:
      return action.payload.activities;
    default:
      return state;
  }
};

export default combineReducers({
  availableThemes,
  availableActivities
});
