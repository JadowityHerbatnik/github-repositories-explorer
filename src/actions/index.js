import { SET_USERS, SET_QUERY, SET_REPOS } from "actions/types";

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  query,
});

export const setRepos = (repos) => ({
  type: SET_REPOS,
  repos,
});
