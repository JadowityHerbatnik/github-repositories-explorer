import React from "react";
import "styles/App.scss";
import "styles/fontello/css/fontello.css";
import { connect } from "react-redux";
import { setQuery } from "actions";
import { fetchUsersRepos } from "helpers/fetchUsers";
import SearchForm from "components/SearchForm";
import SearchResults from "components/SearchResults";
import UsersList from "containers/UsersList";

function App({ fetchStatus, query, setQuery, fetchUsersRepos }) {
  return (
    <div id="app-wrapper">
      <div id="container">
        <SearchForm setQuery={setQuery} fetchData={fetchUsersRepos} />
        <SearchResults fetchStatus={fetchStatus} query={query}>
          <UsersList />
        </SearchResults>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  fetchStatus: state.fetchStatus,
  query: state.query,
});
const mapDispatchToProps = { setQuery, fetchUsersRepos };

export default connect(mapStateToProps, mapDispatchToProps)(App);
