import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { cartActions } from "../../store/cart-slice";
import CartItem from "./CartItem";
import MaxLimitErrorModal from "../UI/MaxLimitModal";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalCartAmount, showMaxLimitErrorModal } = useSelector(
    (state) => state.cart
  );

  const showProductsHandler = () => {
    dispatch(uiActions.setCartInvisible());
  };

  if (showMaxLimitErrorModal) {
    setTimeout(() => {
      dispatch(cartActions.closeMaxLimitErrorModal());
    }, 2000);
  }

  let cartContent = (
    <h2 className="font-semibold text-center">
      No items added to cart, yet! Go back to{" "}
      <span
        className="cursor-pointer text-gray-500 italic  hover:underline"
        onClick={showProductsHandler}
      >
        products
      </span>{" "}
      to add items.
    </h2>
  );

  if (items.length > 0) {
    cartContent = (
      <Fragment>
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                image: item.image,
                colour: item.color,
                type: item.type,
                gender: item.gender,
                price: item.price,
                available: item.available,
                quantity: item.quantity,
              }}
            />
          ))}
        </ul>
        <div className="totalAmount border-t-2 font-semibold text-lg text-center">
          <span>Grand Total = Rs </span>
          <span>{totalCartAmount}</span>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="cart mx-4 my-10 md:my-[5%] md:mx-[30%]">
      <h1 className="text-3xl text-center mb-8">Your Cart</h1>
      <ul className="space-y-10">{cartContent}</ul>
      {showMaxLimitErrorModal && <MaxLimitErrorModal />}
    </div>
  );
};

export default Cart;
