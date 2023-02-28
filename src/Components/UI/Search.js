import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { catalogueActions } from "../../store/catalogue-slice";
import { uiActions } from "../../store/uiSlice";
import searchIcon from "../../assets/search-icon.jpg";
import filterIcon from "../../assets/filter-icon.jpg";

const Search = () => {
  const [inputText, setInputText] = useState();
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    const enteredText = e.target.value;
    setInputText(enteredText);
    if (enteredText.trim().length === 0) {
      dispatch(uiActions.setSeachIsoff());
      return;
    }
    dispatch(uiActions.setSearchIsOn());
    dispatch(catalogueActions.searchCatalogue(enteredText));
  };

  return (
    <div className="search-bar w- md:my-8 md:mx-[40%] flex relative md:w-1/3 justify-around space-x-4">
      <input
        onChange={searchHandler}
        value={inputText}
        type="text"
        className="border-b-[1px] border-gray-500"
        placeholder="Search for products..."
      ></input>
      <div className="flex space-x-6">
        <img
          src={searchIcon}
          className="w-[5%] md:w-[8%] shadow-md cursor-pointer"
        ></img>
        <img
          src={filterIcon}
          className="w-[5%] md:hidden shadow-md cursor-pointer"
        ></img>
      </div>
    </div>
  );
};

export default Search;
