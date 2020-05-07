import { FETCH_ERROR, FETCH_SUCCESS, FETCH_IN_PROGRESS } from "actions/types";

export const fetchStatus = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ERROR:
      return { error: true, success: false, loading: false };
    case FETCH_SUCCESS:
      return { error: false, success: true, loading: false };
    case FETCH_IN_PROGRESS:
      return { error: false, success: false, loading: true };
    default:
      return state;
  }
};
