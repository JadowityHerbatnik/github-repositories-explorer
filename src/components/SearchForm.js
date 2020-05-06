import React, { useState } from "react";
import { connect } from "react-redux";
import { setUsers, setQuery } from "actions";
import { fetchUsersRepos } from "helpers/fetchUsers";

const SearchForm = ({ setQuery, fetchUsersRepos }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    setQuery(value);
    fetchUsersRepos(value);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          id="user"
          value={value}
          onChange={handleChange}
          placeholder="Enter user name"
        />
        <button onClick={handleSubmit} className="btn" id="search-btn">
          Search
        </button>
      </form>
    </>
  );
};
const mapStateToProps = (state) => ({ users: state.users });
const mapDispatchToProps = { setUsers, setQuery, fetchUsersRepos };

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
