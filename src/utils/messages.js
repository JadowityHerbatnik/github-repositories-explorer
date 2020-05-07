import React from "react";
export const NoReposMessage = () => (
  <p className="secondary-text">
    This user doesn't have any public repositories
  </p>
);
export const LoadingMessage = () => <h3>Loading...</h3>;
export const ErrorMessage = () => <h3>Something went wrong :(</h3>;
export const InfoMessage = ({ query }) => (
  <h3 className="info-message">Showing users for "{query}"</h3>
);
export const NoUsersMessage = () => <h3>No users found :(</h3>;
