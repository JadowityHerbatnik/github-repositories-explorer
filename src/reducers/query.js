import { SET_QUERY } from "actions/types";

export const query = (state = [], action) => {
  switch (action.type) {
    case SET_QUERY:
      return action.query;
    default:
      return state;
  }
};
