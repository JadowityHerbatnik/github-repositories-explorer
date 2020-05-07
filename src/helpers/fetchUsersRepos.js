import { fetchUserRepos, fetchUsersByName } from "helpers/requests";
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
export const fetchUsersRepos = (query) => async (dispatch) => {
  try {
    dispatch(fetchInProgress());
    const usersData = await fetchUsersByName(query);
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
