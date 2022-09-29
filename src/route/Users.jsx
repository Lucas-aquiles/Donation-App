import React, { useContext } from "react";
import { contextApp } from "../context/Context";
import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import MenuExtension from "../components/menu/MenuExtension";

import Cards from "../components/Cards";

const ContainerUsers = styled.div`
  width: 100%;
  height: 100vh;
  
`;
const Children = styled.div`
  width: 90%;
  height: auto;
  margin: 0px auto;
  display: flex;
  justify-content:space-around ;
  padding-top: 100px;

`

export default function Users() {
  const { value2 } = useContext(contextApp);
  const data = value2[0];
  console.log(data);

  return (
    <ContainerUsers>
      <Navbar />
      <MenuExtension />
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
