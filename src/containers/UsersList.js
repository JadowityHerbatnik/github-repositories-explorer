import React, { useState } from "react";
import { connect } from "react-redux";
import ReposList from "containers/ReposList";

const UsersList = ({ users }) => {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

const UsersListItem = ({ user }) => {
  const [showRepos, setShowRepos] = useState(false);
  const toggleRepos = () => setShowRepos((prev) => !prev);

  return (
    <li onClick={toggleRepos}>
      <div className="flex top-bar">
        <h3>{user.name}</h3>
        <i className={`icon-down-open ${showRepos ? "rotated" : ""}`}></i>
      </div>
      {showRepos && <ReposList username={user.name} />}
    </li>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps)(UsersList);
