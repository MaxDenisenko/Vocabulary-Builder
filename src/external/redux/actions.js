import { ADD_LIST } from "./constants.js";
export function addList(payload) {
  return {
    type: ADD_LIST,
    payload,
  };
}
