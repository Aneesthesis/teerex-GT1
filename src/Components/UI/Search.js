import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogueActions } from "../../store/catalogue-slice";
import { uiActions } from "../../store/uiSlice";
import SearchIcon from "./SearchIcon";
import FilterIcon from "./FilterIcon";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const { filterIsActive } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const enteredText = e.target.value;
    setInputText(enteredText);
    if (enteredText.trim().length === 0 && !filterIsActive) {
      //reset catalogue when no search parameters
      dispatch(uiActions.setSeachIsoff());
      dispatch(uiActions.setSearchResultisNotEmpty());
      dispatch(catalogueActions.reInitialiseCatalogue());
    }
  };

  //search icon clicked
  const searchHandler = (e) => {
    if (inputText.trim().length === 0) {
      dispatch(uiActions.setSeachIsoff());
      return;
    }
    dispatch(uiActions.setSearchIsOn());
    dispatch(catalogueActions.searchCatalogue(inputText));
  };

  return (
    <div className="search-bar flex relative items-center mx-4 mt-6 md:my-8 md:mx-[40%]  md:w-1/4 space-x-2">
      <div className=" border-b-[2px] w-full border-black h-full ">
        <input
          onChange={inputChangeHandler}
          value={inputText}
          type="text"
          className="outline-none text-lg"
          placeholder="Search for products..."
        ></input>
      </div>
      <div className="flex space-x-4 md:space-x-0">
        <SearchIcon onSearch={searchHandler} />
        <FilterIcon />
      </div>
    </div>
  );
};

export default Search;
