import React from "react";
import "styles/App.scss";
import SearchForm from "components/SearchForm";
import UsersList from "components/UsersList";

function App() {
  return (
    <div id="app-wrapper">
      <div id="container">
        <SearchForm />
        <UsersList />
      </div>
    </div>
  );
}

export default App;
