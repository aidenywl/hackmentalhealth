import { MODES, UPDATE_MODE } from "redux/actions/mode";

const currentMode = (state = MODES.MOOD_SELECTION, action) => {
  switch (action.type) {
    case UPDATE_MODE:
      return action.payload;
    default:
      return state;
  }
};

export default currentMode;
