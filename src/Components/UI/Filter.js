import React, { Fragment } from "react";

const Filter = () => {
  return (
    <Fragment>
      <li className="inline-flex flex-col  mx-8 shadow-md -translate-x-full md:translate-x-0">
        <ul className="Color flex flex-col my-4">
          <h2>Colour</h2>
          <div className="flex space-x-4">
            <input className="cursor-pointer" id="red" type="checkbox"></input>
            <label htmlFor="red">Red</label>
          </div>
          <div className="flex space-x-4">
            <input id="blue" type="checkbox"></input>
            <label htmlFor="blue">Blue</label>
          </div>
          <div className="flex space-x-4">
            <input id="green" type="checkbox"></input>
            <label htmlFor="green">Green</label>
          </div>
        </ul>

        <ul className="Gender flex flex-col">
          <h2>Gender</h2>
          <div className="flex space-x-4">
            <input id="male" type="checkbox"></input>
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex space-x-4">
            <input id="female" type="checkbox"></input>
            <label htmlFor="female">Female</label>
          </div>
        </ul>

        <ul className="Price flex flex-col my-4">
          <h2>Price</h2>
          <div className="flex space-x-4">
            <input id="under 250" type="checkbox"></input>
            <label htmlFor="under 250">0-Rs 250</label>
          </div>
          <div className="flex space-x-4">
            <input id=" 250 to 450" type="checkbox"></input>
            <label htmlFor=" 250 to 450">Rs 251-450</label>
          </div>
          <div className="flex space-x-4">
            <input id="450" type="checkbox"></input>
            <label htmlFor="450">Rs 450</label>
          </div>
        </ul>

        <ul className="Type flex flex-col my-4">
          <h2>Type</h2>
          <div className="flex space-x-4">
            <input id="polo" type="checkbox"></input>
            <label htmlFor="polo">Polo</label>
          </div>
          <div className="flex space-x-4">
            <input id="hoodie" type="checkbox"></input>
            <label htmlFor="hoodie">Hoodie</label>
          </div>
          <div className="flex space-x-4">
            <input id="basic" type="checkbox"></input>
            <label htmlFor="basic">Basic</label>
          </div>
        </ul>
      </li>
    </Fragment>
  );
};

export default Filter;
