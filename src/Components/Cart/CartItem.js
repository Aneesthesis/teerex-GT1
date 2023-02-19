import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, name, image, colour, type, gender, price, available } =
    props.item;
  const [itemNumber, setItemNumber] = useState("");
  const dispatch = useDispatch();

  const setItemQuantityHandler = (e) => {
    setItemNumber(e.target.value);
    dispatch(cartActions.setItemQuantity({ id, quantity: +itemNumber }));
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li>
      <div className="left">
        <img src={image}></img>
        <div className="description">
          <h2>{name}</h2>
          <p className="price">{`Rs ${price}`}</p>
        </div>
      </div>
      <div>
        <label htmlFor={id}>Quantity</label>
        <input
          type="number"
          id={id}
          name="quantity"
          min="1"
          max="5"
          onChange={setItemQuantityHandler}
          value={itemNumber}
        />
        <button
          className="delete bg-white px-4 py-2 border-black border-[1px]"
          onClick={deleteItemHandler}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default CartItem;
