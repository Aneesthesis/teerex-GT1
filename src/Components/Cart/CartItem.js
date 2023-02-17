import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const quantityInputRef = useRef();
  const dispatch = useDispatch();
  const selectedQuantity = +quantityInputRef.current.value;

  useEffect(() => {
    dispatch(cartActions.setItemQuantity({ id, selectedQuantity }));
  }, [selectedQuantity]);

  const { id, name, image, colour, type, gender, price, available } =
    props.item;
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
        <input
          ref={quantityInputRef}
          id={id}
          type="number"
          min="0"
          max="5"
          step="1"
        ></input>
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
