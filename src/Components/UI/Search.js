import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { catalogueActions } from "../../store/catalogue-slice";
import { uiActions } from "../../store/uiSlice";
import searchIcon from "../../assets/search-icon.jpg";

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
    <div className="search-bar my-8 mx-[40%] flex w-fit">
      <input
        onChange={searchHandler}
        value={inputText}
        type="text"
        className="border-b-[1px] border-gray-500 w-[500px] relative"
        placeholder="Search for products..."
      ></input>
      <span>
        <img
          src={searchIcon}
          className="w-[15%] object-contain shadow-md cursor-pointer"
        ></img>
      </span>
    </div>
  );
};

export default Search;
