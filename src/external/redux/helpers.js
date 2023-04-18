
import moment from 'moment';

export const addListResult = (state, payload) => {
  const newState = {
    key: payload,
    createdAt: moment(),
  };
  state.LISTS.push(newState);
  return state;
};
