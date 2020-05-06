import React from "react";
import { connect } from "react-redux";
import UsersList from "components/UsersList";
import { ErrorMessage, LoadingMessage, InfoMessage } from "utils/messages";

const SearchResults = ({ status, query }) => {
  return (
    <>
      {status.loading && <LoadingMessage />}
      {status.error && <ErrorMessage />}
      {status.success && (
        <>
          <InfoMessage query={query} />
          <UsersList />
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  status: state.status,
  query: state.query,
});
export default connect(mapStateToProps)(SearchResults);
