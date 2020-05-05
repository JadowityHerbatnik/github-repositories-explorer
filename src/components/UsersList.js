import React, { useState } from "react";
import { connect } from "react-redux";
import ReposList from "components/ReposList";

const UsersListItem = ({ user }) => {
  const [showRepos, setShowRepos] = useState(false);
  const toggleRepos = () => setShowRepos((prev) => !prev);
  return (
    <React.Fragment key={user.id}>
      <li onClick={() => toggleRepos()}>
        {user.name}
        {showRepos && <ReposList username={user.name} />}
      </li>
    </React.Fragment>
  );
};
const UsersList = ({ users }) => {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UsersListItem user={user} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({ users: state.users });
export default connect(mapStateToProps)(UsersList);
