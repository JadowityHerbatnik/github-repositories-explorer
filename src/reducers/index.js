import { combineReducers } from "redux";
import { users } from "./users";
import { query } from "./query";
import { repos } from "./repos";

export default combineReducers({
  users,
  query,
  repos,
});
