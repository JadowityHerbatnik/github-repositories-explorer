import React from "react";
import { defaultPlaceholder } from "utils/constants";
//prettier-ignore
import { inputIdType, placeholderType, handleChangeType, inputValueType } from "types";

export const TextInput = ({ id, value, handleChange, placeholder = defaultPlaceholder }) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      aria-label={`${id} input`}
    />
  );
};

TextInput.propTypes = {
  id: inputIdType,
  vlaue: inputValueType,
  handleChange: handleChangeType,
  placeholder: placeholderType,
};
