import React, { useState } from "react";
import { connect } from "react-redux";
import { setUsers, setQuery } from "actions";
import { fetchUsers } from "helpers/fetchUsers";

const SearchForm = ({ setQuery, fetchUsers }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    setQuery(value);
    fetchUsers(value);
    e.preventDefault();
  };

  return (
    <>
      {/* <div>{props.users}</div> */}
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
const mapDispatchToProps = { setUsers, setQuery, fetchUsers };
// const mapDispatchToProps = (dispatch) => ({
//   setUsers: (value) => dispatch(setUsers(value)),
// });
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
