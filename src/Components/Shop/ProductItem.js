import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id, name, image, colour, type, gender, price, available } =
    props.item;
  console.log("rrrrrr");

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        image,
        colour,
        type,
        gender,
        price,
        available,
      })
    );
    console.log(cart);
  }

  return (
    <div className="w-2/3">
      <div className="image">
        <span className="hidden md:block font-bold z-20">{name}</span>
        <img className="w-[2/3]" src={image} alt={name}></img>
      </div>
      <div className="flex justify-between  font-semibold">
        <span className="">{`Rs ${price}`}</span>
        <button
          className="button bg-[#383838] py-2 px-3 text-white"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
