import React from "react";
import cartIcon from "../../assets/cart-icon.jpg";
//import meals from "../../assets/meals.jpg";

function Header(props) {
  return (
    <div className="header flex justify-between p-4 font-semibold bg-[#f1f0f0]">
      <h1>TeeRex Store</h1>
      <div className="flex space-x-2">
        <h2 className="hidden md:inline-block">Products</h2>
        <span
          onClick={props.onShow}
          className="w-[15%] object-contain shadow-md cursor-pointer"
        >
          <img src={cartIcon}></img>
        </span>
      </div>
    </div>
  );
}
export default Header;
