import React from "react";
import { reposType, usernameType } from "types";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import { NoReposMessage } from "utils/messages";

const ReposList = ({ userRepos }) => {
  return (
    <>
      {isEmpty(userRepos) && <NoReposMessage />}
      <ul className={`repos-list`}>
        {userRepos.map((repo) => (
          <ReposListItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </>
  );
};

const ReposListItem = ({ repo }) => {
  return (
    <li data-testid="repos-list-item">
      <div className="flex">
        <strong>{repo.name}</strong>
        <StarsCount starsCount={repo.watchers} />
      </div>
      <p>{repo.description}</p>
    </li>
  );
};

const StarsCount = ({ starsCount }) => {
  return (
    <p>
      <strong>{starsCount}</strong>
      <i className="icon-star"></i>
    </p>
  );
};

const mapStateToProps = (state, own) => ({ userRepos: state.repos[own.username] });

ReposList.propTypes = {
  repos: reposType,
  username: usernameType,
};

export default connect(mapStateToProps)(ReposList);
