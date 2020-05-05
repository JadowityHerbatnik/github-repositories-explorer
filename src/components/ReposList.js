import React from "react";
import { connect } from "react-redux";

const UsersList = ({ repos, username }) => {
  return (
    <ul className="repos-list">
      {repos[username].map((repo) => (
        <li key={repo.id}>
          {repo.name}
          {repo.description}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({ repos: state.repos });
export default connect(mapStateToProps)(UsersList);
