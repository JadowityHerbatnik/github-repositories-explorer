import React from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import { noReposMessage } from "utils/messages";

const renderStarsCount = (number) => {
  return (
    <p>
      <span>{number}</span>
      <i className="icon-star"></i>
    </p>
  );
};
const ReposListItem = ({ repo }) => {
  return (
    <li>
      <div className="flex">
        <strong id="repo-name">{repo.name}</strong>
        {renderStarsCount(repo.watchers)}
      </div>
      <p>{repo.description}</p>
    </li>
  );
};
const ReposList = ({ repos, username }) => {
  return (
    <>
      {isEmpty(repos[username]) && noReposMessage()}
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
