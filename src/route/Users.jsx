import React, { useContext, useState } from "react";
import { contextApp } from "../context/Context";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import MenuExtension from "../components/menu/MenuExtension";
import Cards from "../components/Cards";
import { Modal } from "../components/Modal";

const ContainerUsers = styled.div`
  width: 100%;
  height: 100vh;
`;
const Children = styled.div`
  width: 90%;
  height: auto;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  padding-top: 100px;
       //mobile
       @media (max-width: 450px) {
      /* background-position: 0%; */
      flex-direction:column;
  }
`;

export default function Users() {
  const [controlModalLogin, setControlModalLogin] = useState(false);
  const { value2 } = useContext(contextApp);
  const { value3 } = useContext(contextApp);
  const { value4 } = useContext(contextApp);
  let valueModal = value3[0];
  const data = value2[0];
  const setName = value4[1];
  const nameuser = value4[0];

  return (
    <ContainerUsers>
      {valueModal && (
        <Modal
          setControlModalLogin={setControlModalLogin}
          controlModalLogin={controlModalLogin}
        />
      )}

      <Navbar nameUser={nameuser} />
      <MenuExtension
        text={"Login"}
        text2={"Sign Up"}
        setControlModalLogin={setControlModalLogin}
      />

      <Children>
        {data &&
          data.map((e, index) => {
            return (
              <Cards key={index} image={e.image} name={e.name} cbu={e.cbu} />
            );
          })}
      </Children>
    </ContainerUsers>
  );
}
