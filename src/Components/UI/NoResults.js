import React from "react";
import noResults from "../../assets/no-results.png";

const NoResults = () => {
  return (
    <div className="flex flex-col items-center mt-[8%]">
      <img className="w-[20%]" src={noResults} alt="no results"></img>
      <h1 className="font-semibold text-4xl mb-6">Sorry, no results found!</h1>
      <p className="text-gray-400 text-xl ">
        Please check the spelling or try searching for something else
      </p>
    </div>
  );
};
export default NoResults;
