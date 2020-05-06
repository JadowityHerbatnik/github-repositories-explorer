import { apiEndpoint, numberOfResults } from "utils/constants";
import axios from "axios";

export const fetchUserRepos = async (username) => {
  const url = `${apiEndpoint}/users/${username}/repos`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchUsersByName = async (username) => {
  const url = `${apiEndpoint}/search/users?q=${username}&per_page=${numberOfResults}`;
  const response = await axios.get(url);
  return response.data.items;
};
