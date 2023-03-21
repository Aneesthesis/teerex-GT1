import React from "react";

const MaxLimitErrorModal = () => {
  return (
    <div className="z-20 bg-white text-black text-center font-semibold">
      <h1>We are out of stock</h1>
      <p>Sorry, you can't add more of this item</p>
    </div>
  );
};

export default MaxLimitErrorModal;
