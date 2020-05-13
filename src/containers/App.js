import React from "react";
//prettier-ignore
import { fetchStatusType, queryType, usersType, setQueryType, fetchUsersReposType } from "types";
import { connect } from "react-redux";
import { setQuery, requestUsersRepos } from "actions";
import SearchForm from "components/SearchForm";
import SearchResults from "components/SearchResults";
import UsersList from "containers/UsersList";

function App({ fetchStatus, query, users, setQuery, requestUsersRepos }) {
  return (
    <div id="app-wrapper">
      <SearchForm setQuery={setQuery} id="username" fetchData={requestUsersRepos} />
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
const mapDispatchToProps = { setQuery, requestUsersRepos };

App.propTypes = {
  fetchStatus: fetchStatusType,
  query: queryType,
  users: usersType,
  setQuery: setQueryType,
  fetchUsersRepos: fetchUsersReposType,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
