import React, { useState } from "react";
import { setQueryType, fetchDataType, placeholderType, inputIdType } from "types";
import { defaultPlaceholder, searchBtnText } from "utils/constants";

const SearchForm = ({ setQuery, fetchData, id, placeholder = defaultPlaceholder }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    value && setQuery(value);
    value && fetchData(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={`${id} input`}
      />
      <button onClick={handleSubmit} className="btn search-btn">
        {searchBtnText}
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  setQuery: setQueryType.isRequired,
  fetchData: fetchDataType.isRequired,
  id: inputIdType,
  placeholder: placeholderType,
};

export default SearchForm;
