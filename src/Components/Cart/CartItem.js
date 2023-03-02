import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, name, image, colour, type, gender, price, available, quantity } =
    props.item;
  const [itemNumber, setItemNumber] = useState(quantity);
  const dispatch = useDispatch();

  const setItemQuantityHandler = (e) => {
    setItemNumber(e.target.value);
    dispatch(cartActions.setItemQuantity({ id, setQuantity: +itemNumber }));
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className="text-lg flex justify-between space-x-6 mb-8 w-[80%] font-semibold">
      <div className="left flex space-x-4">
        <img className="w-10 object-contain" src={image} alt="image"></img>
        <div className="description w-fit whitespace-nowrap">
          <h2>{name}</h2>
          <p>{`Rs ${price}`}</p>
        </div>
      </div>
      <div className="right my-auto space-x-4">
        <label htmlFor={id}>Quantity</label>
        <input
          className="bg-gray-400 w-10 text-center"
          type="number"
          id={id}
          min="1"
          max={available}
          onChange={setItemQuantityHandler}
          defaultValue={quantity}
        />
        <button
          type="button"
          className="delete px-2 py-1 bg-white border-black border-[2px] rounded-md hover:text-white hover:bg-gray-700 hover:border-gray-300"
          onClick={deleteItemHandler}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default CartItem;
