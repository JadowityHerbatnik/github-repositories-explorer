import { combineReducers } from "redux";
import { users } from "./users";
import { query } from "./query";
import { repos } from "./repos";
import { fetchStatus } from "./fetchStatus";

export default combineReducers({
  users,
  query,
  repos,
  fetchStatus,
});
