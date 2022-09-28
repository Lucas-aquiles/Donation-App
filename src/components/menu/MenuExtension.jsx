import React,{useContext}from 'react'
import styled from 'styled-components';
import {Colors} from "../../styles/theme/Colors"
import { contextApp } from '../../context/Context';

const keyframes = styled.keyframes;

const ContainterExtension = styled.div`
width: 100%;
height: ${(props) => (props.primary ? "15rem" : "0rem")};;;
background-color: ${Colors.secundary};
transition:  height 0.9s;





`






const MenuExtension = () => {


    const { info} = useContext(contextApp)

   

  return (
    <ContainterExtension primary={info}>MenuExtension</ContainterExtension>
  )
}

export default MenuExtension