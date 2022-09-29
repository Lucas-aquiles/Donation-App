import React, { useState, useContext } from "react";
import styled from "styled-components";
import { contextApp } from "../../context/Context";

const ContainerMenu = styled.div`
  /* border:solid */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 10;
`;

const ContainerOpen = styled.div`
  transition: 0.4s ease-out;
  width: auto;
  height: auto;
  margin: 0px auto;
`;
const Linea = styled.div`
  width: 50px;
  height: 10px;
  background-color: beige;
  margin: 3px 0px;
  transition: 0.4s ease-out;
  transform: ${(props) =>
    props.primary ? `rotate(-45deg) translate(-4px, 07px) ` : "null"};
`;
const Linea1 = styled(Linea)`
  opacity: ${(props) => (props.primary ? "0" : "null")};
`;
const Linea2 = styled(Linea)`
  transform: ${(props) =>
    props.primary ? `rotate(45deg) translate(-10px, -15px)` : "null"};
  background-color: beige;
`;

const MenuHambur = () => {
  const { value } = useContext(contextApp);
  const setInfo = value[1];
  const [state, setState] = useState(false);

  function myFunction() {
    setState(!state);
    setInfo(!state);
  }

  return (
    <ContainerMenu>
      <ContainerOpen onClick={myFunction}>
        <Linea primary={state} />
        <Linea1 primary={state} />
        <Linea2 primary={state} />
      </ContainerOpen>
    </ContainerMenu>
  );
};

export default MenuHambur;
