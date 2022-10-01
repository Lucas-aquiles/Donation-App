import React, {  useContext } from "react";
import Forms from "./form/Forms";
import { contextApp } from "../context/Context";
import { ContainerModal } from "../styles/StyledComponents/StyledModal";


export const Modal = ({ controlModalLogin, setControlModalLogin }) => {
  const { value3 } = useContext(contextApp);
  let valueModal = value3[0];
  let setValueModal = value3[1];

  const { value4 } = useContext(contextApp);
  const setName = value4[1];
  // const nameuser = value4[0];

  function closeModal(e) {
    setValueModal(!valueModal);
    setControlModalLogin(false);
  }

  return (
    <ContainerModal onClick={(e) => closeModal(e)}>
      <Forms
        text={"Login"}
        text2={"Sign Up "}
        valuemodal={valueModal}
        setModal={setValueModal}
        setName={setName}
        controlModalLogin={controlModalLogin}
      />
    </ContainerModal>
  );
};
