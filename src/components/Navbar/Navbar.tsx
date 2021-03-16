import React from "react";

import styled from "styled-components";

import { Cart } from "./Cart";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <Nav>
      <Logo>sa‧pa‧tos</Logo>
      <Cart />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  font-family: "EB Garamond", serif;
  color: #444;
  font-size: 2.5rem;
`;
