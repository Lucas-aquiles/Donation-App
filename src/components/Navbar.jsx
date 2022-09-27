import React from 'react'
import styled from 'styled-components';
import {Colors} from "../styles/theme/Colors"
import MenuHambur from './menu/MenuHambur';


const NavBar = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #156af3;
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
        
        </NavBar>
  )
}
