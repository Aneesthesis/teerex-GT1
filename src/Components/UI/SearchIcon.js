import React from "react";
import { useSelector } from "react-redux";

function SearchIcon({ onSearch }) {
  const { searchResultIsEmpty } = useSelector((state) => state.ui);

  return (
    <button type="submit" onClick={onSearch}>
      <svg
        width="25px"
        height="35px"
        viewBox="0 0 24.00 24.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M17 17L21 21"
            stroke="#323232"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="#323232"
            stroke-width="2"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
}

export default SearchIcon;
