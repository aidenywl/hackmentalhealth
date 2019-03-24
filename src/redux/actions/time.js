import moment from "moment";

export const GET_TIME = "GET_TIME";

export const getTimeNow = (timeFormat = "hh : mm A") => dispatch => {
  dispatch({
    type: GET_TIME,
    payload: moment().format(timeFormat)
  });
};
