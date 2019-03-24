export const SET_FEELING = "SET_FEELING";
export const SET_THEMES = "SET_THEMES";

export const setFeeling = value => {
  return {
    type: SET_FEELING,
    payload: value
  };
};
