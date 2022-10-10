import { db } from "../service/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState, useContext } from "react";
import Building from "../pages/Building";
import { Loading } from "../components/loading/Loading";
import { contextApp } from "../context/Context";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Colors } from "../styles/theme/Colors";
import { Navbar } from "../components/Navbar";
import FormInstitution from "../components/form/FormInstitution";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.secundary};
`;
const ChildrenContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 7rem;
`;
const Text = styled.p`
  font-size: 2rem;
  font-family: 'Poppins', cursive, sans-serif;
  color:${Colors.white};
  padding: 1rem;
  cursor: pointer;
  margin: 1rem;

`



export default function Intitution() {
  let navigate = useNavigate();

  const [state, setState] = useState({});
  const [permit, setPermit] = useState(false);
  console.log(permit);
  const { value5 } = useContext(contextApp);
  const userId = value5[0];
  console.log(userId, "iddddddddd");

  useEffect(() => {
    // getData(db);
    if (userId !== undefined) {
      foundUser();
    } else {
      navigate("/");
      alert("You do not have a permit");
    }
  }, []);

  async function getData(db) {
    const usersCol = collection(db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map((doc) => doc.data());
    setState(usersList);
    return usersList;
  }

  async function foundUser() {
    const arrayData = await getData(db);
    const result = arrayData.find((e) => e.id === userId);
    if (result.role === "ONGS") {
      setPermit(true);
    } else {
      alert("You do not have a permit");
      navigate("/");
    }
  }

  return permit ? (
    <Container>
      <Navbar />
      <ChildrenContainer>
        <Text>Here you can upload information about the institution. </Text>

        <Text>Here you can modify or delete information about the institution. </Text>
        <FormInstitution/>
      </ChildrenContainer>
    </Container>
  ) : (
    <Loading />
  );
}
