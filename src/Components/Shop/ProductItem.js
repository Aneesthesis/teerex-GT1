import React from "react";

const ProductItem = (props) => {
  console.log("rrrrrr");
  return (
    <div className="w-2/3">
      <div className="image">
        <span className="hidden md:block font-bold z-20">{props.name}</span>
        <img className="w-[2/3]" src={props.image} alt={props.name}></img>
      </div>
      <div className="flex justify-between  font-semibold">
        <span className="">{`Rs ${props.price}`}</span>
        <button className="button bg-[#383838] py-2 px-3 text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
