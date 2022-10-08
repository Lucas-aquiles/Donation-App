import React, { useContext, useState,useEffect} from "react";
import styled from "styled-components";
import { Colors } from "../../styles/theme/Colors";
import { contextApp } from "../../context/Context";
import {closedSession, veronda} from "../../service/authFirebase"
import { Link } from "react-router-dom";



const ContainterExtension = styled.div`
  width: 100%;
  height: ${(props) => (props.primary ? "13rem" : "0rem")};
  background-color: ${Colors.secundary};
  transition: height 0.9s;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Text = styled.p`
  color: ${Colors.white};
  font-family: "Poppins", cursive, sans-serif;
  font-size: 2rem;
  display: ${(props) => (props.primary ? "none" : "flex")};
  cursor: pointer;
  position: relative;
  width: auto;
  bottom: -30px;
`;
export const StyledLink = styled(Link)`
 color: ${Colors.white};
  font-family: "Poppins", cursive, sans-serif;
  font-size: 2rem;
  display: ${(props) => (props.primary ? "none" : "flex")};
  cursor: pointer;
  position: relative;
  width: auto;
  bottom: -30px;
 
`;



const MenuExtension = ({ text, text2, text0, setControlModalLogin }) => {
  const { value, value3,value4 } = useContext(contextApp);
  const [stateModal, setStateModal] = useState(false);
  const setModal = value3[1];
  const info = value[0];
  const nameuser = value4[0];
const setNameUsers = value4[1]
  const setInfo = value[1];


useEffect(() => {
  
}, [nameuser,stateModal])


  function changeModal() {
    setStateModal(!stateModal);
    setModal(true);
    console.log("mamam")
  }



  function closed_session(){
    closedSession()
    alert("Closed Session")
    setNameUsers("")

  }

  function closedCicle(){
    setInfo(false)
  }

  return (
    <ContainterExtension primary={info}>
      <StyledLink to={"/about"}  onClick={closedCicle}  > {text0} </StyledLink>

      {nameuser?null:<Text onClick={changeModal}> {text} </Text>}
      {nameuser?<Text onClick={closed_session}> Log out </Text>:null}

    </ContainterExtension>
  );
};

export default MenuExtension;
