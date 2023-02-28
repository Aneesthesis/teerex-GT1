import React from "react";
import { useSelector } from "react-redux";
import cartIcon from "../../assets/cart-icon.jpg";
//import meals from "../../assets/meals.jpg";

function Header(props) {
  const { totalItems } = useSelector((state) => state.cart);
  return (
    <div className="header flex justify-between p-4 font-semibold bg-[#f1f0f0]">
      <h1>TeeRex Store</h1>
      <div className="flex space-x-2">
        <h2 className="hidden md:inline-block mr-6">Products</h2>
        <span
          onClick={props.onShow}
          className="flex bg-white w-[20%] md:w-[15%] object-contain shadow-md cursor-pointer"
        >
          <img className=" w-[75%]" src={cartIcon}></img>
          <span className="badge text-sm top-0">{totalItems}</span>
        </span>
      </div>
    </div>
  );
}
export default Header;
