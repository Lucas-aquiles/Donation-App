import React,{useContext,useState}from 'react'
import styled from 'styled-components';
import {Colors} from "../../styles/theme/Colors"
import { contextApp } from '../../context/Context';


const ContainterExtension = styled.div`
width: 100%;
height: ${(props) => (props.primary ? "13rem" : "0rem")};;;
background-color: ${Colors.secundary};
transition:  height 0.9s;
display: flex;
align-items: center;
justify-content: space-evenly;


`
const Text = styled.p`
color: ${Colors.white};
font-family: 'Poppins', cursive, sans-serif;
font-size: 2rem;
display: ${(props) => (props.primary ? "none" : "flex")};
cursor: pointer;
position: relative;
bottom: -30px;



`





const MenuExtension = ({text, text2,setControlModalLogin}) => {


    const {value,value3} = useContext(contextApp)
    const [stateModal,setStateModal]=useState(false)
    const setModal = value3[1]
    const info = value[0]
   
    function changeModal (){
      setStateModal(!stateModal)
    setModal(!stateModal)}

    function changeModalTwo(){
      setStateModal(!stateModal)
    setModal(!stateModal)
    setControlModalLogin(!stateModal)
    }

  return (
    <ContainterExtension primary={info}>
<Text onClick={changeModal} >  {text}  </Text>
<Text onClick={changeModalTwo} >  {text2}   </Text>

    </ContainterExtension>
  )
}

export default MenuExtension