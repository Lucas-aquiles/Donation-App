import MenuExtension from "../components/menu/MenuExtension";

import { Navbar } from "../components/Navbar";
import Section from "../components/Section";
import React, { useContext } from "react";
import { contextApp } from "../context/Context";
import { HomeContainer } from "../styles/StyledHome";
import Aside from "../components/Aside";



const Home = () => {
  const { value4 } = useContext(contextApp);
  const nameuser = value4[0];


  return (
    <HomeContainer>
      <Navbar  nameUser={nameuser}/>
      <MenuExtension />
      <Section />
      <Aside />
    </HomeContainer>
  );
};

export default Home;
