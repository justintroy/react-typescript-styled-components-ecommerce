import React from "react";

import GlobalStyles from "./styles/global-styles";

import { Navbar } from "./components/";
import { ProductList } from "./components/ProductList/ProductList";

interface Props {}

export const App = (props: Props) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ProductList />
    </>
  );
};
