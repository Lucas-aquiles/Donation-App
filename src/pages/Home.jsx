import styled from "styled-components";
import MenuExtension from "../components/menu/MenuExtension";

import { Navbar } from "../components/Navbar";
import Section from "../components/Section";
import { Colors } from "../styles/theme/Colors";
import React, { useContext, useEffect, useState } from "react";
import { contextApp } from "../context/Context";


import Aside from "../components/Aside";

const HomeContainer = styled.div`
  max-width: 100%;
  height: auto;
  /* background-color: ${Colors.secundary}; */
  transition: 0.4s ease-out;
`;

const Home = () => {
  const { info } = useContext(contextApp);

  
  return (
    <HomeContainer>
      <Navbar />
      <MenuExtension />
      <Section />
      <Aside/>
    </HomeContainer>
  );
};

export default Home;
