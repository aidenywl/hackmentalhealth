import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/** Reducers */
import time from "redux/reducers/timeReducers";
import availableData from "redux/reducers/availableData";
import userSettings from "redux/reducers/userSettingReducers.js";

const reducers = {
  time,
  availableData,
  userSettings
};

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk))
);
