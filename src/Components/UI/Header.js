import React from "react";

function Header(props) {
  return (
    <div className="header flex justify-between p-4 font-semibold bg-[#f1f0f0]">
      <h1>TeeRex Store</h1>
      <div className="flex space-x-2">
        <h2 className="hidden md:inline-block">Products</h2>
        <span onClick={props.onShow}>Cart</span>
      </div>
    </div>
  );
}
export default Header;
