import React from "react";
import { searchBtnText } from "utils/constants";
import { onClickType } from "types";

export const SearchButton = ({ onClick }) => {
  return (
    <button className="btn search-btn" onClick={onClick}>
      {searchBtnText}
    </button>
  );
};
SearchButton.propTypes = {
  onClick: onClickType,
};
