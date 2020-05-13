import React from "react";
import { createSelector } from "reselect";
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

const selectUserRepos = (state, own) => state.repos[own.username];
const getUserRepos = createSelector([selectUserRepos], (userRepos) => userRepos);

const mapStateToProps = (state, own) => ({ userRepos: getUserRepos(state, own) });

ReposList.propTypes = {
  repos: reposType,
  username: usernameType,
};

export default connect(mapStateToProps)(ReposList);
