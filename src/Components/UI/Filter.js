import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogueActions } from "../../store/catalogue-slice";
import { uiActions } from "../../store/uiSlice";
import CloseFilterButton from "./CloseIcon";

const Filter = () => {
  const dispatch = useDispatch();
  const { filteredCategories } = useSelector((state) => state.catalogue);
  const { filterIsVisible } = useSelector((state) => state.ui);

  //activate filtering
  useEffect(() => {
    filteredCategories.length === 0
      ? dispatch(uiActions.setFilterisOff())
      : dispatch(uiActions.setFilterisOn());
  }, [filteredCategories]);

  //manage checkboxes
  const onCheckboxChange = (e) => {
    const { id, name } = e.target;
    dispatch(catalogueActions.toggleFilter({ id, name }));
    dispatch(catalogueActions.filterCatalogue());
  };

  const closeFilterHandler = () => {
    dispatch(uiActions.setFilterIsVisible(false));
  };

  return (
    <div
      className={`${
        filterIsVisible ? "translate-x-0" : "-translate-x-full"
      }  duration-200 md:translate-x-0 absolute md:ml-4 top-18 md:top-24 z-20 text-lg md:text-base`}
    >
      <div
        onClick={closeFilterHandler}
        className="cursor-pointer md:invisible relative top-8 left-[80%] z-30"
      >
        <CloseFilterButton />
      </div>

      <div className=" inline-flex flex-col  shadow-md p-6 bg-[#f1f0f0] rounded-sm">
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
              id={[251, 450]}
              type="checkbox"
              name="price"
              onChange={onCheckboxChange}
            ></input>
            <label htmlFor={[251, 450]}>Rs 251-450</label>
          </div>
          <div className="flex space-x-4">
            <input
              id={[451, 1000]}
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
      </div>
    </div>
  );
};

export default Filter;
