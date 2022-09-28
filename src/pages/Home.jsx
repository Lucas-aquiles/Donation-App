import styled from "styled-components";
import MenuExtension from "../components/menu/MenuExtension";

import { Navbar } from "../components/Navbar";
import Section from "../components/Section";
import { Colors } from "../styles/theme/Colors";
import React, { useContext, useEffect, useState } from "react";
import { contextApp } from "../context/Context";

import { db } from "../service/firebase-config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const HomeContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: ${Colors.secundary};
  transition: 0.4s ease-out;
`;

const Home = () => {
  const { info } = useContext(contextApp);

  useEffect(() => {
    getCities(db);
  }, []);

  async function getCities(db) {
    const citiesCol = collection(db, "institution");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    console.log(cityList);
    return cityList;
  }

  return (
    <HomeContainer>
      <Navbar />
      <MenuExtension />
      <Section />
    </HomeContainer>
  );
};

export default Home;
