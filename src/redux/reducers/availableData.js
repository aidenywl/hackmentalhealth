import { combineReducers } from "redux";

import { SET_BASE_DATA, SELECT_THEME } from "redux/actions/baseData";

const availableThemes = (state = [], action) => {
  switch (action.type) {
    case SET_BASE_DATA:
      const storage = action.payload.themes.map(theme => {
        return { theme: theme, selected: false };
      });
      return storage;
    case SELECT_THEME:
      const selectedTheme = action.payload;
      const newState = state.map(themeObj => {
        return themeObj.theme !== selectedTheme
          ? themeObj
          : { ...themeObj, selected: themeObj.selected ? false : true };
      });
      return newState;
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
