import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import Filter from "../UI/Filter";
import NoResults from "../UI/NoResults";
import ProductItem from "./ProductItem";
import MaxLimitErrorModal from "../UI/MaxLimitModal";
import { cartActions } from "../../store/cart-slice";

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

  const { showMaxLimitErrorModal } = useSelector((state) => state.cart);

  let products = items;

  //applying search onfiltered items
  if (filterIsActive && searchIsOn && searchedItems.length > 0) {
    products = searchedItems;
    console.log(products);
  }

  if (searchIsOn && searchedItems.length !== 0 && !filterIsActive) {
    products = searchedItems;
    dispatch(uiActions.setSearchResultisNotEmpty());
  }

  if (searchIsOn && searchedItems.length === 0) {
    dispatch(uiActions.setSearchResultisEmpty());
  }

  if (filterIsActive && filteredItems.length !== 0 && !searchIsOn) {
    products = filteredItems;
  }

  if (showMaxLimitErrorModal) {
    setTimeout(() => {
      dispatch(cartActions.closeMaxLimitErrorModal());
    }, 2000);
  }

  const catalogueContent = () => (
    <div className="catalogue">
      <div>
        <Filter />
      </div>
      <div className="flex flex-col relative space-y-6 md:space-y-10 md:mx-4 md:flex-row md:screen md:flex-wrap md:space-x-10 md:ml-[15%]  ">
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
    </div>
  );

  return (
    <Fragment>
      {!searchResultIsEmpty && catalogueContent()}
      {searchIsOn && searchedItems.length === 0 && <NoResults />}
      {showMaxLimitErrorModal && <MaxLimitErrorModal />}
    </Fragment>
  );
}
export default Catalogue;
