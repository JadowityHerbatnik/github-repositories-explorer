import React, { useState } from "react";
import { setQueryType, fetchDataType, inputIdType } from "types";
import { SearchButton } from "components/SearchButton";
import { TextInput } from "components/TextInput";

const SearchForm = ({ setQuery, fetchData, id }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    value && setQuery(value);
    value && fetchData(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id={id} value={value} handleChange={handleChange} />
      <SearchButton onClick={handleSubmit} />
    </form>
  );
};
SearchForm.propTypes = {
  setQuery: setQueryType.isRequired,
  fetchData: fetchDataType.isRequired,
  id: inputIdType,
};

export default SearchForm;
