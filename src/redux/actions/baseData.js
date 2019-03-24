import fixtureData from "fixtures/data.json";

export const SET_BASE_DATA = "SET_BASE_DATA";

export const getAvailableThemesAndActivites = () => {
  const data = fixtureData;
  console.log(data);
  return {
    type: SET_BASE_DATA,
    payload: data
  };
};
