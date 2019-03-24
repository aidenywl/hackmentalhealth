export const SET_FEELING = "SET_FEELING";

export const setFeeling = value => {
  return {
    type: SET_FEELING,
    payload: value
  };
};
