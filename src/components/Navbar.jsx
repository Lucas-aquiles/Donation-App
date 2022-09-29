import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/theme/Colors";
import MenuHambur from "./menu/MenuHambur";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  width: 100%;
  height: 5rem;
  background: ${Colors.primary};

  opacity: 0.9;
  position: fixed;
  z-index: 90; ;
`;
const LinkTitle = styled(Link)`
  text-decoration:none;
`;
const Title = styled.p`
  color: ${Colors.white};
  font-size: 3rem;
  font-family: 'Poppins', cursive, sans-serif;
  margin-left: 50px;
`;

export const Navbar = () => {
  return (
    <NavBar>
      <LinkTitle  to={"/"}> 
      <Title> Hugs  </Title>
     </LinkTitle>
      <MenuHambur />
      {/* <MenuExtension/> */}
    </NavBar>
  );
};
