import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogueActions } from "../../store/catalogue-slice";
import { uiActions } from "../../store/uiSlice";

const Search = () => {
  const [inputText, setInputText] = useState();
  //const{searchIsOn} = useSelector(state=>state.ui)
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    dispatch(uiActions.setSearchIsOn());
    const enteredText = e.target.value;
    setInputText(enteredText);
    dispatch(catalogueActions.searchCatalogue(enteredText));
  };

  return (
    <div className="search-bar my-8">
      <input
        onChange={searchHandler}
        value={inputText}
        type="text"
        className="border-b-[1px] border-gray-500"
        placeholder="Search for products..."
      ></input>
      <span>Search</span>
    </div>
  );
};

export default Search;
