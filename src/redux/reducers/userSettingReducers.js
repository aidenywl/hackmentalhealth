import { SET_FEELING, SET_THEMES } from "redux/action/userSettings";

export const feelingValue = (state = 5, action) => {
  switch (action.type) {
    case SET_FEELING:
      return action.payload;
    default:
      return state;
  }
};
