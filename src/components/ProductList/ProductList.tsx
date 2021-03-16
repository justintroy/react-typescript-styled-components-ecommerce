import React from "react";
import styled from "styled-components";
import { Product } from "../Product/Product";

interface Props {}

export const ProductList = (props: Props) => {
  return (
    <ProductsSection>
      <ProductItems>
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductItems>
    </ProductsSection>
  );
};

const ProductItems = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;

const ProductsSection = styled.section`
  padding: 5px;
`;
