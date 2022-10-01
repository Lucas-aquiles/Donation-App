import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Forms from "./form/Forms";
import { contextApp } from "../context/Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../service/firebase-config";

const ContainerModal = styled.div`
  position: absolute;
  border: solid;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99;
  position: absolute;
  display: flex;
  /* display: ${(props) => (props.primary ? "none" : "flex")}; */
  cursor: pointer;

  //mobile
  @media (max-width: 450px) {
    height: 120vh;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const Modal = ({ controlModalLogin, setControlModalLogin }) => {
  const { value3 } = useContext(contextApp);
  let valueModal = value3[0];
  let setValueModal = value3[1];

  const { value4 } = useContext(contextApp);
  const setName = value4[1];
  const nameuser = value4[0];

  function closeModal(e) {
    setValueModal(!valueModal);
    setControlModalLogin(false);
  }

  return (
    <ContainerModal onClick={(e) => closeModal(e)}>
      <Forms
        text={"Login"}
        text2={"Sign In "}
        valuemodal={valueModal}
        setModal={setValueModal}
        setName={setName}
        controlModalLogin={controlModalLogin}
      />
    </ContainerModal>
  );
};
