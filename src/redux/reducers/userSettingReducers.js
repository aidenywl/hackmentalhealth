import { combineReducers } from "redux";
import { Set } from "immutable";

import {
  SET_FEELING,
  SELECT_THEME,
  SELECT_TASK
} from "redux/actions/userSettings.js";

const feelingValue = (state = 5, action) => {
  switch (action.type) {
    case SET_FEELING:
      return action.payload;
    default:
      return state;
  }
};

const selectedThemes = (state = Set(), action) => {
  switch (action.type) {
    case SELECT_THEME:
      const theme = action.payload;
      return state.has(theme) ? state.remove(theme) : state.add(theme);
    default:
      return state;
  }
};

const selectedTasks = (state = Set(), action) => {
  switch (action.type) {
    case SELECT_TASK:
      const task = action.payload;
      return state.has(task) ? state.remove(task) : state.add(task);
    default:
      return state;
  }
};

export default combineReducers({
  feelingValue,
  selectedThemes,
  selectedTasks
});
