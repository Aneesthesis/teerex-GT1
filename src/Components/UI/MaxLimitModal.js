import React from "react";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../store/cart-slice";

const MaxLimitErrorModal = () => {
  // const dispatch = useDispatch();

  // const closeMaxLimitModal = () => {
  //   dispatch(cartActions.closeMaxLimitErrorModal());
  // };
  return (
    <div className="fixed z-50 left-[40%] bottom-10 w-auto bg-gray-200 rounded-md text-center p-2">
      <h1>We are out of stock!</h1>
      <p>Sorry, you can't add more of this item.</p>
    </div>
  );
};

export default MaxLimitErrorModal;
