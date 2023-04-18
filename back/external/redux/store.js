import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ADD_LIST } from "./constants.js";
import { addListResult } from "./helpers.js";

export const initialState = {
  LISTS: [],
  WORDS: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LIST:
      return addListResult(state, payload);
    default:
      return state;
  }
};
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
