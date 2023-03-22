import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../../assets/cart-icon.jpg";
import { uiActions } from "../../store/uiSlice";
//import meals from "../../assets/meals.jpg";

function Header(props) {
  const { totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showProductsHandler = () => {
    dispatch(uiActions.setCartInvisible());
  };
  return (
    <div className="header flex justify-between items-center p-4 font-semibold bg-[#f1f0f0] ">
      <h1>TeeRex Store</h1>
      <div className="flex items-center md:justify-between">
        <h2
          className="products-label hidden md:inline-block cursor-pointer hover:underline ml-36"
          onClick={showProductsHandler}
        >
          Products
        </h2>
        <span
          className="cart-icon flex md:mr-16 bg-white w-[20%] md:w-[15%] object-contain shadow-sm cursor-pointer hover:shadow-xl"
          onClick={props.onShow}
        >
          <img className="" src={cartIcon}></img>
          <span className="badge text-sm top-0 rounded-full">{totalItems}</span>
        </span>
      </div>
    </div>
  );
}
export default Header;
