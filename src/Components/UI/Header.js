import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../UI/CartIcon";
import { uiActions } from "../../store/uiSlice";
import useScrollDirection from "../../hooks/useScrollDirection";

//import meals from "../../assets/meals.jpg";

function Header(props) {
  const { totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const scrollDirection = useScrollDirection();

  const showProductsHandler = () => {
    dispatch(uiActions.setCartInvisible());
  };

  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } header flex sticky h-18 z-[60] justify-between items-center p-4 font-semibold bg-[#f1f0f0] md:px-4 h-18 transition-all duration-500`}
    >
      <h1>TeeRex Store</h1>
      <div className="flex items-center  md:justify-between md:space-x-8">
        <h2
          className="products-label hidden md:inline-block cursor-pointer hover:underline"
          onClick={showProductsHandler}
        >
          Products
        </h2>
        <span
          className="cart-icon flex object-contain cursor-pointer hover:shadow-xl"
          onClick={props.onShow}
        >
          <CartIcon />
          <span className="badges bg-white text-center w-[20px] h-fit -ml-3 text-sm rounded-full">
            {totalItems}
          </span>
        </span>
      </div>
    </div>
  );
}
export default Header;
