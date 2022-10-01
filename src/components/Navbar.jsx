import React from "react";
import MenuHambur from "./menu/MenuHambur";
import { NavBar ,LinkTitle,Title,Text,ContainerDiv} from "../styles/StyledComponents/StyledNavbar";


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
