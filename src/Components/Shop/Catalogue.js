import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Filter from "../UI/Filter";
import ProductItem from "./ProductItem";

function Catalogue(props) {
  const { cartIsShown, prodIsShown, searchIsOn } = useSelector(
    (state) => state.ui
  );
  const { items, searchedItems } = useSelector((state) => state.catalogue);

  let products = items;
  if (searchIsOn) {
    console.log("sio");
    products = searchedItems;
  }
  if (!searchIsOn) {
    console.log("soff");
    products = items;
  }
  console.log(products);

  return (
    <Fragment>
      <Filter />
      <div className="flex flex-col md:flex-row md:screen md:flex-wrap md:space-x-10 md:ml-[15%]">
        <div></div>
        {products.map((prod) => (
          <ProductItem
            key={prod.id}
            item={{
              id: prod.id,
              name: prod.name,
              image: prod.imageURL,
              colour: prod.color,
              type: prod.type,
              gender: prod.gender,
              price: prod.price,
              available: prod.quantity,
            }}
          />
        ))}
      </div>
    </Fragment>
  );
}
export default Catalogue;
