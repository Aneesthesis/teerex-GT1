import { catalogueActions } from "./catalogue-slice";

export const fetchCatalogue = () => {
  return async (dispatch) => {
    const fetchedData = async () => {
      const response = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      if (!response.ok) {
        throw new Error("Problem in loading catalogue!");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const catalogueData = await fetchedData();
      dispatch(
        catalogueActions.setCatalogue({
          items: catalogueData || [],
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };
};
