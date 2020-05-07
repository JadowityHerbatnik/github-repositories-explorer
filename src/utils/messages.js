import React from "react";
export const NoReposMessage = () => (
  <p className="secondary-text">This user doesn't have any public repositories</p>
);
export const LoadingMessage = () => <h3 data-testid="loading-message">Loading...</h3>;
export const ErrorMessage = () => (
  <h3 data-testid="error-message">Something went wrong :(</h3>
);
export const InfoMessage = ({ query }) => (
  <h3 className="info-message" data-testid="info-message">
    Showing users for "{query}"
  </h3>
);
export const NoUsersMessage = () => (
  <h3 data-testid="no-users-message">No users found :(</h3>
);
