import { ApiEndpoint } from "utils/constants";
//prettier-ignore
import { setUsers, setRepos, fetchError, fetchInProgress, fetchSuccess, } from "actions";
import axios from "axios";
// const url = "https://cat-fact.herokuapp.com/facts";

const fetchUserRepos = async (username) => {
  const url = `${ApiEndpoint}/users/${username}/repos`;
  const response = await axios.get(url);
  return response.data;
};

const fetchUsersData = async (username) => {
  const url = `${ApiEndpoint}/search/users?q=${username}&per_page=5`;
  const response = await axios.get(url);
  return response.data.items;
};

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
export const fetchUsersRepos = (query) => async (dispatch) => {
  try {
    dispatch(fetchInProgress());
    const usersData = await fetchUsersData(query);
    const usernames = getUsersNames(usersData);
    const usersRepos = await getUsersRepos(usernames);

    dispatch(setUsers(usernames));
    dispatch(setRepos(usersRepos));
    dispatch(fetchSuccess());
  } catch (err) {
    dispatch(fetchError());
    console.log(Error(err));
  }
};
