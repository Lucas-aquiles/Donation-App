import MenuExtension from "../components/menu/MenuExtension";
import { Navbar } from "../components/Navbar";
import Section from "../components/Section";
import React, { useContext, useEffect} from "react";
import { contextApp } from "../context/Context";
import { HomeContainer } from "../styles/StyledHome";
import Aside from "../components/Aside";
import {Loading} from "../components/loading/Loading"


const Home = () => {
  const { value4 } = useContext(contextApp);
  const {value2}= useContext(contextApp)
  const nameuser = value4[0];
  const data = value2[0]

  
    return  data.length === 0 ? (<Loading/>) : (
    <HomeContainer>
      <Navbar  nameUser={nameuser}/>
      <MenuExtension />
      <Section />
      <Aside />
    </HomeContainer>
  );
};

export default Home;
