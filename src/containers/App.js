import React from "react";
//prettier-ignore
import { fetchStatusType, queryType, usersType, setQueryType, fetchUsersReposType } from "types";
import { connect } from "react-redux";
import { setQuery } from "actions";
import { fetchUsersRepos } from "helpers/fetchUsersRepos";
import SearchForm from "components/SearchForm";
import SearchResults from "components/SearchResults";
import UsersList from "containers/UsersList";
import "styles/App.scss";
import "styles/fontello/css/fontello.css";

function App({ fetchStatus, query, users, setQuery, fetchUsersRepos }) {
  return (
    <div id="app-wrapper">
      <SearchForm setQuery={setQuery} id="user" fetchData={fetchUsersRepos} />
      <SearchResults users={users} fetchStatus={fetchStatus} query={query}>
        <UsersList />
      </SearchResults>
    </div>
  );
}

const mapStateToProps = (state) => ({
  fetchStatus: state.fetchStatus,
  query: state.query,
  users: state.users,
});
const mapDispatchToProps = { setQuery, fetchUsersRepos };

App.propTypes = {
  fetchStatus: fetchStatusType,
  query: queryType,
  users: usersType,
  setQuery: setQueryType,
  fetchUsersRepos: fetchUsersReposType,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
