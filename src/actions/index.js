//prettier-ignore
import { SET_USERS, SET_QUERY, SET_REPOS, FETCH_ERROR, FETCH_SUCCESS, FETCH_IN_PROGRESS, REQUEST_USERS_REPOS } from "actions/types";

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

export const fetchError = () => ({
  type: FETCH_ERROR,
});

export const fetchSuccess = () => ({
  type: FETCH_SUCCESS,
});

export const fetchInProgress = () => ({
  type: FETCH_IN_PROGRESS,
});

export const requestUsersRepos = (query) => ({
  type: REQUEST_USERS_REPOS,
  query,
});
