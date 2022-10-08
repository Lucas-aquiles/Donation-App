import React, {  useEffect,useContext } from "react";
import Forms from "./form/Forms";
import { contextApp } from "../context/Context";
import { ContainerModal } from "../styles/StyledComponents/StyledModal";


export const Modal = ({ controlModalLogin, setControlModalLogin }) => {
  const { value3,value4  } = useContext(contextApp);
  let valueModal = value3[0];
  let setValueModal = value3[1];

  const setName = value4[1];
  const modal = value4[0]
  // const nameuser = value4[0];

useEffect(() => {

}, [modal])



  function closeModal(e) {
    e.preventDefault()
    setValueModal(!valueModal);
    setControlModalLogin(false);
  }

  return (
    <ContainerModal onClick={(e) => closeModal(e)}>
      <Forms
        text={"Login"}
        text2={"Sign Up"}
        valuemodal={valueModal}
        setModal={setValueModal}
        setName={setName}
        controlModalLogin={controlModalLogin}
        setControlModalLogin={    setControlModalLogin        }
      />
    </ContainerModal>
  );
};
