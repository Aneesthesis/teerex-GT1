import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { catalogueActions } from "../../store/catalogue-slice";
import { uiActions } from "../../store/uiSlice";
import SearchIcon from "./SearchIcon";
import FilterIcon from "./FilterIcon";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const enteredText = e.target.value;
    setInputText(enteredText);
    if (enteredText.trim().length === 0) {
      dispatch(uiActions.setSeachIsoff());
      dispatch(catalogueActions.reInitialiseCatalogue());
    }
  };

  const searchHandler = (e) => {
    if (inputText.trim().length === 0) {
      dispatch(uiActions.setSeachIsoff());
      return;
    }
    dispatch(uiActions.setSearchIsOn());
    dispatch(catalogueActions.searchCatalogue(inputText));
  };

  return (
    <div className="search-bar w- md:my-8 md:mx-[40%] flex relative md:w-1/3 justify-around space-x-4">
      <input
        onChange={inputChangeHandler}
        value={inputText}
        type="text"
        className="border-b-[2px] border-black"
        placeholder="Search for products..."
      ></input>
      <div className="flex space-x-6">
        <SearchIcon onSearch={searchHandler} />
        <FilterIcon />
      </div>
    </div>
  );
};

export default Search;
