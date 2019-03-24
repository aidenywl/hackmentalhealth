import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/** Reducers */
import time from "redux/reducers/timeReducers";

const reducers = {
  time
};

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk))
);
