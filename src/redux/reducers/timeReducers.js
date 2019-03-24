import { GET_TIME } from "../actions/time";

const initialState = {
  time: {
    hh: 0,
    mm: 0,
    a: ""
  },
  greetingPhrase: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TIME:
      const timeString = action.payload;
      const timeFormatted = {
        hh: timeString.slice(0, 2),
        mm: timeString.slice(5, 7),
        a: timeString.slice(7)
      };
      return {
        ...state,
        time: {
          ...state.time,
          ...timeFormatted
        }
      };
    default:
      return state;
  }
};
