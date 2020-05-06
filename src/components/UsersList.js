import React, { useState } from "react";
import { connect } from "react-redux";
import ReposList from "components/ReposList";
import { errorMessage, loadingMessage } from "utils/messages";

const UsersListItem = ({ user }) => {
  const [showRepos, setShowRepos] = useState(false);
  const toggleRepos = () => setShowRepos((prev) => !prev);
  return (
    <li onClick={() => toggleRepos()}>
      <div className="flex">
        <h3>{user.name}</h3>
        <i className={`icon-down-open ${showRepos ? "rotated" : ""}`}></i>
      </div>
      {showRepos && <ReposList username={user.name} />}
    </li>
  );
};
const UsersList = ({ users, status }) => {
  return (
    <>
      {status.loading && loadingMessage()}
      {status.error && errorMessage()}
      {status.success && (
        <ul className="users-list">
          {users.map((user) => (
            <UsersListItem key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  status: state.status,
});
export default connect(mapStateToProps)(UsersList);
