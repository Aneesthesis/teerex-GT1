import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const MaxLimitErrorModal = () => {
  const dispatch = useDispatch();

  const closeMaxLimitModal = () => {
    dispatch(cartActions.closeMaxLimitErrorModal());
  };
  return (
    <>
      <div className="overlay fixed flex justify-center items-center top-0 left-0 z-20 h-full w-full bg-transparent blur-sm">
        {" "}
      </div>
      <div className="error-modal relative m-auto  w-fit z-30 p-[8%] md:p-[6%] bg-white text-black text-center font-semibold">
        <div className="m-4">
          <h1 className="text-3xl">We are out of stock</h1>
          <br />
          <p>Sorry, you can't add more of this item</p>
        </div>
        <button
          className="absolute top-5 right-4 text-2xl px-4 py-2 bg-gray-300"
          onClick={closeMaxLimitModal}
        >
          x
        </button>
      </div>
    </>
  );
};

export default MaxLimitErrorModal;
