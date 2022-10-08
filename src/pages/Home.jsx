import MenuExtension from "../components/menu/MenuExtension";
import { Navbar } from "../components/Navbar";
import Section from "../components/Section";
import React, { useContext, useState} from "react";
import { contextApp } from "../context/Context";
import { HomeContainer } from "../styles/StyledHome";
import Aside from "../components/Aside";
import {Loading} from "../components/loading/Loading"
import { Modal } from "../components/Modal";
import Footer from "../components/Footer"


const Home = () => {
  const { value4 } = useContext(contextApp);
  const [controlModalLogin, setControlModalLogin] = useState(false);
  const {value2}= useContext(contextApp)
  const { value3 } = useContext(contextApp);
  let valueModal = value3[0];
  const nameuser = value4[0];
  const data = value2[0]

  
    return  data.length === 0 ? (<Loading/>) : (
    <HomeContainer>
        {valueModal && (
        <Modal
          setControlModalLogin={setControlModalLogin}
          controlModalLogin={controlModalLogin}
        />
      )}
      <Navbar  nameUser={nameuser}  hidden={true}/>
      <MenuExtension   text0={"About us"}    text={"Login"}
        setControlModalLogin={setControlModalLogin}  />
      <Section />
      <Aside />
      <Footer/>
    </HomeContainer>

  );
};

export default Home;
