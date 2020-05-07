import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../SearchResults";

describe("Search Results component", () => {
  it("shows info message when users are found", () => {
    const errorStatus = { loading: false, error: false, success: true };
    const query = "random query";
    const users = [
      { name: "Random", id: 1 },
      { name: "User", id: 2 },
    ];

    const { getByTestId } = render(
      <SearchResults users={users} query={query} fetchStatus={errorStatus} />
    );
    expect(getByTestId("info-message"));
  });

  it("shows no users found message", () => {
    const errorStatus = { loading: false, error: false, success: true };
    const users = [];
    const { getByTestId } = render(
      <SearchResults users={users} fetchStatus={errorStatus} />
    );
    expect(getByTestId("no-users-message"));
  });

  it("shows loading message", () => {
    const loadingStatus = { loading: true, error: false, success: false };
    const { getByTestId } = render(<SearchResults fetchStatus={loadingStatus} />);
    expect(getByTestId("loading-message"));
  });

  it("shows error message", () => {
    const errorStatus = { loading: false, error: true, success: false };
    const { getByTestId } = render(<SearchResults fetchStatus={errorStatus} />);
    expect(getByTestId("error-message"));
  });
});
