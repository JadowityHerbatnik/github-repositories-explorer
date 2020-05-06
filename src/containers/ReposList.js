import React from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import { NoReposMessage } from "utils/messages";

const StarsCount = ({ stars }) => {
  return (
    <p>
      <strong>{stars}</strong>
      <i className="icon-star"></i>
    </p>
  );
};
const ReposListItem = ({ repo }) => {
  return (
    <li>
      <div className="flex">
        <strong>{repo.name}</strong>
        <StarsCount stars={repo.watchers} />
      </div>
      <p>{repo.description}</p>
    </li>
  );
};
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

const mapStateToProps = (state) => ({ repos: state.repos });
export default connect(mapStateToProps)(ReposList);
