import fixtureData from "fixtures/data.json";

export const SET_BASE_DATA = "SET_BASE_DATA";
export const SELECT_THEME = "SELECT_THEME";

export const getAvailableThemesAndActivites = () => {
  const data = fixtureData;
  return {
    type: SET_BASE_DATA,
    payload: data
  };
};

export const selectTheme = theme => {
  return {
    type: SELECT_THEME,
    payload: theme
  };
};
