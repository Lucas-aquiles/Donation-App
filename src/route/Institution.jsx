import { db, auth } from "../service/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  where,
  query,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
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
  padding-left: 2rem;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  font-size: 1.1rem;
  font-family: "Poppins", cursive, sans-serif;
  color: ${Colors.white};
`;
const ButtonText = styled(Text)`
  cursor: pointer;
  opacity: 0.9;
  border:solid 2px;
  width: 9rem;
  margin-left: 3rem;
  margin-top: 2rem;
  text-align: center;
  border-radius: 2rem;
  &:hover{
    background-color: ${Colors.primary};;
  }
`;

const ContainerInstitution = styled.div`
  width: 35%;
  height: auto;
  border: solid white 1px;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
`;
const Div = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;
const ChildrenContainerTwo = styled.div`
  position: absolute;
  width: 50%;
  top: 20%;
  right: 2%;
`;
 const Flexdiv= styled.div`
  display: flex;
  flex-direction: row;
 `

// --------------------------------------------------------------------------------------//
export default function Intitution() {
  let navigate = useNavigate();

  const [state, setState] = useState({});
  const [formState, setFormState] = useState({});
  const [data, setData] = useState({});
  const [modalForm, setModalForm] = useState(false);
  const [permit, setPermit] = useState(false);
  const { value5,value6 } = useContext(contextApp);
  const userId = value5[0];
  const setRefresh = value6[1]





  useEffect(() => {
    // getData(db);
    if (userId !== undefined) {
      foundUser();
      loadData();
    } else {
      navigate("/");
      alert("You do not have a permit");
    }
    return () => {
      setRefresh({})
    }
  }, []);

  useEffect(() => {
    if (formState) {
      loadData();
    }
  }, [formState]);

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

  async function addInstitution(docData) {
    const response = await addDoc(collection(db, "institution"), docData);
    alert("His institution was loaded with success");
  }

  //function firebase
  async function loadData() {
    const collectionRef = collection(db, "institution");
    const institution = query(
      collectionRef,
      //----------------------------------------------//
      where("id", "==", `${userId}`)
    );
    const queryInstitution = await getDocs(institution);
    let institutionData = [];
    queryInstitution.forEach((doc) => {
      institutionData.push({ id: doc.id, data: doc.data() });
    });
    setData(institutionData);
  }

  // ----------------------------------------------------//
  async function deleteInstitution() {
    await deleteDoc(doc(db, "institution", data[0]?.id));
    setData({});
    setFormState({});
  }

  // ----------------------------
  function modalFormOpen() {
    setModalForm(!modalForm);
  }

  async function modificationInstitution(values) {
    console.log(values);
    console.log(data[0]?.id);
    const cityRef = doc(db, "institution", data[0]?.id);
    setDoc(cityRef, values, { merge: true });
    setData({});
    setFormState({});
    alert("His institution was loaded with success");

  }

  return permit ? (
    <Container>
      <Navbar />
      <ChildrenContainer>
        <Text>Here you can upload information about the institution. </Text>

        {(data.length === 0 || data === {}) && (
          <FormInstitution
            modalForm={modalForm}
            userId={userId}
            addInstitution={addInstitution}
            setFormState={setFormState}
          />
        )}
        {data && <Text>-{data.length} institutions are registered </Text>}
        {data.length === 1 && (
          <ContainerInstitution>
            <Image src={data[0]?.data.image} />
            <Div>
              <Text> Institution: {data[0]?.data?.name} </Text>
              <Text> Description: {data[0]?.data?.description} </Text>
              <Text> Count Bancary: {data[0]?.data?.cbu} </Text>
              <Text> Addres: {data[0]?.data?.address} </Text>
              <Text> Localidad: {data[0]?.data?.localidad} </Text>
            </Div>
          </ContainerInstitution>
        )}

        {data.length === 1 && (
          <Text>
            Here you can modify or delete information about the institution.
          </Text>
        )}
        {data.length === 1 && (
          <Flexdiv>  
          <ButtonText onClick={deleteInstitution}>
            Delete information
          </ButtonText>
           <ButtonText onClick={modalFormOpen}>Modify information</ButtonText>
           </Flexdiv>
        )}
     
      </ChildrenContainer>
      {modalForm && (
        <ChildrenContainerTwo>
          <FormInstitution
            setModalForm={setModalForm}
            userId={userId}
            modalForm={modalForm}
            modificationInstitution={modificationInstitution}
          />
        </ChildrenContainerTwo>
      )}
    </Container>
  ) : (
    <Loading />
  );
}
