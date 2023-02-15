import { Fragment, useEffect } from "react";
import Header from "./Components/UI/Header";
import Catalogue from "./Components/Shop/Catalogue";
import { useDispatch } from "react-redux";
import { fetchCatalogue } from "./store/catalogue-actions";
import Search from "./Components/UI/Search";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("yes");
    dispatch(fetchCatalogue());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <Search />
      <Catalogue />
    </Fragment>
  );
}

export default App;
