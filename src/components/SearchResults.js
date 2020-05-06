import React from "react";
import { ErrorMessage, LoadingMessage, InfoMessage } from "utils/messages";

const SearchResults = ({ fetchStatus, query, children }) => {
  return (
    <>
      {fetchStatus.loading && <LoadingMessage />}
      {fetchStatus.error && <ErrorMessage />}
      {fetchStatus.success && (
        <>
          <InfoMessage query={query} />
          {children}
        </>
      )}
    </>
  );
};
export default SearchResults;
