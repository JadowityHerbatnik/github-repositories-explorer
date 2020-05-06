import React, { useState } from "react";
import { defaultPlaceholder } from "utils/constants";

const SearchForm = ({ setQuery, fetchData }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    setQuery(value);
    fetchData(value);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          id="user"
          value={value}
          onChange={handleChange}
          placeholder={defaultPlaceholder}
        />
        <button onClick={handleSubmit} className="btn" id="search-btn">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
