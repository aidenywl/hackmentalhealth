import { combineReducers } from "redux";
import { SET_BASE_DATA } from "redux/actions/baseData";

const availableThemes = (state = [], action) => {
  switch (action.type) {
    case SET_BASE_DATA:
      const storage = action.payload.themes;
      return storage;
    default:
      return state;
  }
};

const availableTasks = (state = [], action) => {
  switch (action.type) {
    case SET_BASE_DATA:
      return action.payload.tasks;
    default:
      return state;
  }
};

export default combineReducers({
  availableThemes,
  availableTasks
});
