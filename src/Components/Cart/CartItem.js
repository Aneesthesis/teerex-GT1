import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = ({ item }) => {
  const { id, name, image, price, available, quantity } = item;
  const dispatch = useDispatch();
  const [newQuantity, setNewQuantity] = useState(quantity);

  const setItemQuantityHandler = (e) => {
    setNewQuantity(e.target.value);
    dispatch(
      cartActions.setItemQuantity({ id: id, setQuantity: +e.target.value })
    );
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className="text-sm md:text-lg relative flex justify-between p-2 space-x-6 md:space-x-6 mb-6  font-semibold mx-auto shadow-slate-500 shadow-sm rounded-md overflow-clip whitespace-nowrap">
      <div className=" relative left flex space-x-4">
        <img
          className="w-[30%]  md:w-10 object-contain"
          src={image}
          alt="image"
        ></img>
        <div className="description w-fit whitespace-nowrap">
          <h2>{name}</h2>
          <p>{`Rs ${price}`}</p>
        </div>
      </div>
      <div className="relative right flex flex-row items-center space-x-3 md:my-auto md:space-x-4">
        <div></div>
        <label htmlFor={id}>Quantity</label>
        <input
          className="bg-gray-400 w-8 md:w-10 text-center rounded-md"
          type="number"
          id={id}
          min="1"
          max={available}
          onChange={setItemQuantityHandler}
          defaultValue={quantity}
        />
        <button
          type="button"
          className="delete px-[3px] py-[1px] md:px-2 md:py-1 bg-white border-black border-[2px] rounded-md hover:text-white hover:bg-gray-700 hover:border-gray-300"
          onClick={deleteItemHandler}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default CartItem;
