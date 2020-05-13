import React from "react";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react";
import createSagaMiddleware from "redux-saga";
import rootSaga from "sagas/";
import UsersList from "../UsersList";

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);
const initialStore = {
  users: [
    { name: "Random", id: 1 },
    { name: "User", id: 2 },
  ],
};
const store = mockStore(initialStore);
sagaMiddleware.run(rootSaga);

describe("Users List", () => {
  it("renders list item for every user", () => {
    const { getAllByTestId } = render(<UsersList store={store} />);
    expect(getAllByTestId("users-list-item").length).toEqual(initialStore.users.length);
  });
});
