import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogueActions } from "../../store/catalogue-slice";
import { uiActions } from "../../store/uiSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalCartAmount } = useSelector((state) => state.cart);
  //const {filteredCategories, searchedItems, filteredItems} = useSelector((state)=>state.catalogue);

  const showProductsHandler = () => {
    dispatch(uiActions.setCartInvisible());
  };
  let cartContent = (
    <h2 className="font-semibold">
      No items added to cart, yet! Go back to{" "}
      <span
        className="cursor-pointer text-gray-500  hover:underline"
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
