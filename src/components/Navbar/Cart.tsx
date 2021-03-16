import React from "react";
import styled from "styled-components";

interface Props {}

export const Cart = (props: Props) => {
  return (
    <CartDiv>
      <Icon viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </Icon>
    </CartDiv>
  );
};

const CartDiv = styled.span`
  display: inline-block;
  position: absolute;
  top: 2%;
  right: 2%;
`;

const Icon = styled.svg`
  flex: none;
  fill: #444;
  transition: fill 0.25s;
  width: 40px;
  height: 40px;
`;
