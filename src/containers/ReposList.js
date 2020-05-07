import React from "react";
import { reposType, usernameType } from "types";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import { NoReposMessage } from "utils/messages";

const ReposList = ({ repos, username }) => {
  return (
    <>
      {isEmpty(repos[username]) && <NoReposMessage />}
      <ul className={`repos-list`}>
        {repos[username].map((repo) => (
          <ReposListItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </>
  );
};

const ReposListItem = ({ repo }) => {
  return (
    <li data-testid="repo-list-item">
      <div className="flex">
        <strong>{repo.name}</strong>
        <StarsCount stars={repo.watchers} />
      </div>
      <p>{repo.description}</p>
    </li>
  );
};

const StarsCount = ({ stars }) => {
  return (
    <p>
      <strong>{stars}</strong>
      <i className="icon-star"></i>
    </p>
  );
};

const mapStateToProps = (state) => ({ repos: state.repos });

ReposList.propTypes = {
  repos: reposType,
  username: usernameType,
};

export default connect(mapStateToProps)(ReposList);
