import React from "react";
import "styles/App.scss";
import "styles/fontello/css/fontello.css";
import SearchForm from "components/SearchForm";
import SearchResults from "components/SearchResults";

function App() {
  return (
    <div id="app-wrapper">
      <div id="container">
        <SearchForm />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
