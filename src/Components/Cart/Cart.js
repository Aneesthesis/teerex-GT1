import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  return (
    <ul>
      {cart.map((item) => (
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
