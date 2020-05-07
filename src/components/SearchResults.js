import React from "react";
import { fetchStatusType, queryType, usersType, childrenType } from "types";
//prettier-ignore
import { ErrorMessage, LoadingMessage, InfoMessage, NoUsersMessage } from "utils/messages";

const SearchResults = ({ fetchStatus, query, users, children }) => {
  return (
    <>
      {fetchStatus.loading && <LoadingMessage />}
      {fetchStatus.error && <ErrorMessage />}
      {fetchStatus.success && (
        <>
          {!users.length ? <NoUsersMessage /> : <InfoMessage query={query} />}
          {children}
        </>
      )}
    </>
  );
};
SearchResults.propTyes = {
  fetchStatus: fetchStatusType,
  query: queryType,
  users: usersType,
  children: childrenType,
};
export default SearchResults;
