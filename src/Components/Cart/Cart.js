import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      {cart.map((item) => (
        <CartItem />
      ))}
    </div>
  );
};

export default Cart;
