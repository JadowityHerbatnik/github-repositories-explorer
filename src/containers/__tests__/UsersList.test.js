import React from "react";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import UsersList from "../UsersList";

const mockStore = configureMockStore([thunk]);
const initialStore = {
  users: [
    { name: "Random", id: 1 },
    { name: "User", id: 2 },
  ],
};
const store = mockStore(initialStore);
describe("Users List", () => {
  it("renders list item for every user", () => {
    const { getAllByTestId } = render(<UsersList store={store} />);
    expect(getAllByTestId("userslist-item").length).toEqual(initialStore.users.length);
  });
});
