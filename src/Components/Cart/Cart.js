import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const { items, totalCartAmount } = useSelector((state) => state.cart);

  let cartContent = (
    <h2 className="font-semibold">No items added to cart, yet!</h2>
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
        <div className="totalAmount border-t-2 font-semibold text-lg">
          <span>Amount Payable </span>
          <span>{totalCartAmount}</span>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="cart my-[5%] mx-[30%]">
      <h1 className="text-3xl mb-8">Your Cart</h1>
      {cartContent}
    </div>
  );
};

export default Cart;
