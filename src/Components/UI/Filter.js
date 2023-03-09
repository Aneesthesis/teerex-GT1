import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogueActions } from "../../store/catalogue-slice";

const Filter = () => {
  const dispatch = useDispatch();
  const { filteredCategories } = useSelector((state) => state.catalogue);

  const onCheckboxChange = (e) => {
    const { id, name } = e.target;
    dispatch(catalogueActions.filterCatalogue(id));
  };

  return (
    <div className="absolute top-24">
      <li className="inline-flex  flex-col  mx-8 shadow-md -translate-x-full md:translate-x-0">
        <ul className="Color flex flex-col my-4">
          <h2>Colour</h2>
          <div className="flex space-x-4">
            <input
              className="cursor-pointer"
              id="red"
              name="color"
              type="checkbox"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor="red">Red</label>
          </div>
          <div className="flex space-x-4">
            <input
              id="blue"
              name="color"
              type="checkbox"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor="blue">Blue</label>
          </div>
          <div className="flex space-x-4">
            <input
              id="green"
              name="color"
              type="checkbox"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor="green">Green</label>
          </div>
        </ul>

        <ul className="Gender flex flex-col">
          <h2>Gender</h2>
          <div className="flex space-x-4">
            <input
              id="men"
              name="gender"
              type="checkbox"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor="men">Male</label>
          </div>
          <div className="flex space-x-4">
            <input
              id="women"
              name="gender"
              type="checkbox"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor="women">Female</label>
          </div>
        </ul>

        <ul className="Price flex flex-col my-4">
          <h2>Price</h2>
          <div className="flex space-x-4">
            <input
              id={[0, 250]}
              type="checkbox"
              name="price"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor={[0, 250]}>0-Rs 250</label>
          </div>
          <div className="flex space-x-4">
            <input
              id={[250, 450]}
              type="checkbox"
              name="price"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor={[250, 450]}>Rs 251-450</label>
          </div>
          <div className="flex space-x-4">
            <input
              id={[450, 1000]}
              type="checkbox"
              name="price"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor={[450, 1000]}>Rs 450</label>
          </div>
        </ul>

        <ul className="Type flex flex-col my-4">
          <h2>Type</h2>
          <div className="flex space-x-4">
            <input
              id="polo"
              type="checkbox"
              name="type"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor="polo">Polo</label>
          </div>
          <div className="flex space-x-4">
            <input
              id="hoodie"
              type="checkbox"
              name="type"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor="hoodie">Hoodie</label>
          </div>
          <div className="flex space-x-4">
            <input
              id="basic"
              name="type"
              type="checkbox"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor="basic">Basic</label>
          </div>
        </ul>
      </li>
    </div>
  );
};

export default Filter;
