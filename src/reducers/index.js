import { combineReducers } from "redux";
import { users } from "./users";
import { query } from "./query";
import { repos } from "./repos";
import { status } from "./status";

export default combineReducers({
  users,
  query,
  repos,
  status,
});
