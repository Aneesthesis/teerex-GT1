import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <ul>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            name: item.name,
            image: item.imageURL,
            colour: item.color,
            type: item.type,
            gender: item.gender,
            price: item.price,
            available: item.quantity,
          }}
        />
      ))}
    </ul>
  );
};

export default Cart;
