import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { catalogueActions } from "../../store/catalogue-slice";
import { uiActions } from "../../store/uiSlice";

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
    <div className="search-bar my-8 mx-[40%]">
      <input
        onChange={searchHandler}
        value={inputText}
        type="text"
        className="border-b-[1px] border-gray-500"
        placeholder="Search for products..."
      ></input>
    </div>
  );
};

export default Search;
