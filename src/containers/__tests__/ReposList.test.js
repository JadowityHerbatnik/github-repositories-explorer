import React from "react";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import ReposList from "../ReposList";

const mockStore = configureMockStore([thunk]);
const initialStore = {
  users: [
    { name: "Dziurawe", id: 1 },
    { name: "Kalosze", id: 2 },
  ],
  repos: {
    Dziurawe: [{ id: 1, name: "random repo", description: "random desc", watchers: 1 }],
    Kalosze: [{ id: 2, name: "user repo", description: "user desc", watchers: 2 }],
  },
};
const store = mockStore(initialStore);

describe("Respository list ", () => {
  it("Finds given user's repositories and displays them", () => {
    const username = "Kalosze";
    const { getAllByTestId } = render(<ReposList username={username} store={store} />);
    expect(getAllByTestId("repo-list-item").length).toEqual(
      initialStore.repos[username].length
    );
  });
});
