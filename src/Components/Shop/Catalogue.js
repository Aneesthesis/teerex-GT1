import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import Filter from "../UI/Filter";
import NoResults from "../UI/NoResults";
import ProductItem from "./ProductItem";

function Catalogue(props) {
  const dispatch = useDispatch();
  const {
    cartIsShown,
    prodIsShown,
    searchIsOn,
    filterIsActive,
    searchResultIsEmpty,
  } = useSelector((state) => state.ui);
  const { items, searchedItems, filteredCategories, filteredItems } =
    useSelector((state) => state.catalogue);

  let products = items;

  //applying search onfiltered items
  if (filteredItems !== 0 && searchIsOn && searchedItems.length) {
    products = searchedItems;
    console.log(products);
    dispatch(uiActions.setSearchResultisNotEmpty());
  }

  if (searchedItems.length !== 0 && searchIsOn && !filterIsActive) {
    console.log("sio");
    products = searchedItems;
    dispatch(uiActions.setSearchResultisNotEmpty());
  }

  if (filterIsActive && filteredItems.length !== 0) {
    console.log("filtering");
    products = filteredItems;
  }

  if (searchIsOn && searchedItems.length === 0) {
    products = [];
    dispatch(uiActions.setSearchResultisEmpty());
  }

  // if (!searchIsOn) {
  //   console.log("soff");
  //   products = items;
  // }
  // console.log(products);

  return (
    <Fragment>
      {!searchResultIsEmpty && <Filter />}
      {searchIsOn && searchedItems.length === 0 && <NoResults />}
      <div className="flex flex-col md:flex-row md:screen md:flex-wrap md:space-x-10 md:ml-[15%]">
        <div></div>
        {products.map((prod) => (
          <ProductItem
            key={prod.id}
            item={{
              id: prod.id,
              name: prod.name,
              image: prod.imageURL,
              colour: prod.color,
              type: prod.type,
              gender: prod.gender,
              price: prod.price,
              available: prod.quantity,
            }}
          />
        ))}
      </div>
    </Fragment>
  );
}
export default Catalogue;
