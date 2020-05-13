import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_USERS_REPOS } from "actions/types";
import { fetchUserRepos, fetchUsersByName } from "services/github";
import { setUsers, setRepos, fetchError, fetchInProgress, fetchSuccess } from "actions";

const getUsersNames = (usersList) => {
  return usersList.map((item) => {
    return { name: item.login, id: item.id };
  });
};

const getUsersRepos = async (usernames) => {
  const reposList = await Promise.all(
    usernames.map(async (username) => {
      const reposData = await fetchUserRepos(username.name);
      const reposInfo = reposData.map((repo) => {
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          watchers: repo.watchers,
        };
      });
      return { username: username.name, repos: reposInfo };
    })
  );

  const usersRepos = reposList.reduce((obj, item) => {
    return { ...obj, [item.username]: item.repos };
  }, {});

  return usersRepos;
};

function* fetchUsersRepos(action) {
  const { query } = action;
  try {
    yield put(fetchInProgress());

    const usersData = yield call(fetchUsersByName, query);
    const usernames = getUsersNames(usersData);
    const usersRepos = yield call(getUsersRepos, usernames);

    yield put(setUsers(usernames));
    yield put(setRepos(usersRepos));

    yield put(fetchSuccess());
  } catch (e) {
    yield put(fetchError());
  }
}

export function* userSaga() {
  yield takeLatest(REQUEST_USERS_REPOS, fetchUsersRepos);
}
