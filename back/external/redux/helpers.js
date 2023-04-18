
function moment() {
 return null;
}

export const addListResult = (state, key) => {
  const newState = {
    key: key,
    createdAt: moment(),
  };
  state.LISTS.push(newState);
  return state;
};
