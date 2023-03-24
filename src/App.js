import { Fragment, useEffect, useState } from "react";
import Header from "./Components/UI/Header";
import Catalogue from "./Components/Shop/Catalogue";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogue } from "./store/catalogue-actions";
import Search from "./Components/UI/Search";
import Cart from "./Components/Cart/Cart";
import { uiActions } from "./store/uiSlice";
import { catalogueActions } from "./store/catalogue-slice";
import MaxLimitErrorModal from "./Components/UI/MaxLimitModal";

function App() {
  let initialRun = true;
  const dispatch = useDispatch();
  const { cartIsShown, prodIsShown, searchIsOn } = useSelector(
    (state) => state.ui
  );

  //initialise catalogue
  // useEffect(() => {
  //   dispatch(fetchCatalogue());
  // }, [dispatch]);

  if (initialRun) {
    dispatch(fetchCatalogue());
    initialRun = false;
  }

  // toggleCart
  function showCartHandler() {
    dispatch(uiActions.setCartVisible());
    dispatch(uiActions.setSeachIsoff());
    dispatch(catalogueActions.reInitialiseCatalogue());
  }
  return (
    <Fragment>
      <Header onShow={showCartHandler} />
      {!cartIsShown && (
        <div className="products">
          <Search />
          <Catalogue />
        </div>
      )}
      {cartIsShown && <Cart />}
    </Fragment>
  );
}

export default App;
