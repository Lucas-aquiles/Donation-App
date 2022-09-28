import React from 'react'
import styled from 'styled-components';
import {Colors} from "../styles/theme/Colors"
import MenuHambur from './menu/MenuHambur';
import MenuExtension from './menu/MenuExtension';

const NavBar = styled.div`
    width: 100%;
    height: 5rem;
    background-color: ${Colors.primary};
    position: fixed;
    z-index: 90;
;
`
const Title = styled.h1`
    color:${Colors.white};
    font-size: 3rem;
`


export const Navbar = () => {


  return (
    <NavBar>
        Navbar
        <Title> Hugs</Title>
        <MenuHambur/>
        {/* <MenuExtension/> */}
        </NavBar>
  )
}
