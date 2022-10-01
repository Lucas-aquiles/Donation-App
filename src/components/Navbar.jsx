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
const Text = styled.p`
    color: ${Colors.white};
  font-size: 1rem;
  font-family: 'Poppins', cursive, sans-serif;
  margin-left: 5rem;
  align-self: flex-end;
  margin-bottom: 1rem;
`
const ContainerDiv =styled.div`
  display: flex;
`

export const Navbar = ({nameUser}) => {
  return (
    <NavBar>
      <ContainerDiv>  
      <LinkTitle  to={"/"}> 
      <Title> Hugs  </Title>
     </LinkTitle>
       {  nameUser&&<Text>Hello {nameUser}</Text>   }  
     </ContainerDiv>
      <MenuHambur />
      {/* <MenuExtension/> */}
    </NavBar>
  );
};
