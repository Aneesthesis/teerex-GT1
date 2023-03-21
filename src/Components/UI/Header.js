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
    <div className="header flex justify-between p-4 font-semibold bg-[#f1f0f0] ">
      <h1>TeeRex Store</h1>
      <div className="flex md:space-x-2 space-x-0">
        <h2
          className="products-label hidden md:inline-block mr-6 cursor-pointer hover:underline"
          onClick={showProductsHandler}
        >
          Products
        </h2>
        <span
          className="cart-icon flex bg-white w-[20%] md:w-[15%] object-contain shadow-sm cursor-pointer hover:shadow-xl"
          onClick={props.onShow}
        >
          <img className=" w-[75%]" src={cartIcon}></img>
          <span className="badge text-sm top-0">{totalItems}</span>
        </span>
      </div>
    </div>
  );
}
export default Header;
