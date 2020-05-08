import React, { useState } from "react";
import { usersType } from "types";
import { connect } from "react-redux";
import ReposList from "containers/ReposList";

const UsersList = ({ users }) => {
  return (
    <ul data-testid="users-list" className="users-list">
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
    <li data-testid="users-list-item" onClick={toggleRepos}>
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

UsersList.propTypes = {
  users: usersType,
};
export default connect(mapStateToProps)(UsersList);
