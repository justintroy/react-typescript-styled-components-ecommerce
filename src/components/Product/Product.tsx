import React from "react";
import styled from "styled-components";

interface Props {}

export const Product = (props: Props) => {
  return (
    <ProductItem>
      <ProductImage src="https://images.unsplash.com/photo-1549298916-f52d724204b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
      <ProductInfo>
        <h5>Sapatos1</h5>
        <h6>500 PHP</h6>
      </ProductInfo>
    </ProductItem>
  );
};

const ProductItem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;

const ProductImage = styled.img`
  max-width: 100%;
`;

const ProductInfo = styled.div`
  height: 100%;
`;
