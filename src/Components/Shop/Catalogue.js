import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function Catalogue(props) {
  const { items: prods } = useSelector((state) => state.catalogue);
  console.log(prods);

  return (
    <div className="flex flex-col md:flex-row">
      {prods.map((prod) => (
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
  );
}
export default Catalogue;
