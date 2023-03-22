import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id, name, image, colour, type, gender, price, available, quantity } =
    props.item;

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
        quantity,
      })
    );
    console.log(cart);
  }

  return (
    <div className="w-full md:w-[25%] md:max-w-[25%] px-4 md:px-0 shadow-md">
      <div className="image">
        <span className="hidden md:block font-bold z-20">{name}</span>
        <img className="w-[80%] m-auto md:w-[2/3]" src={image} alt={name}></img>
      </div>
      <div className="flex justify-between items-center font-semibold w-[90%] mt-4 mb-1">
        <span className="">{`Rs ${price}`}</span>
        <button
          className="button h-[20%] bg-[#383838] py-2 px-3 text-white"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
