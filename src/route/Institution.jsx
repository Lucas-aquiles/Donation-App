import { db,auth } from "../service/firebase-config";
import { collection, getDocs,addDoc,  where,query,doc, deleteDoc,setDoc } from "firebase/firestore";
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
  height:auto;
  background-color: ${Colors.secundary};
`;
const ChildrenContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 7rem;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
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
  const [formState,setFormState] = useState({})
const [data,setData]=useState({})
console.log(data)
  const [permit, setPermit] = useState(false);
  const { value5 } = useContext(contextApp);
  const userId = value5[0];

  useEffect(() => {
    // getData(db);
    if (userId !== undefined) {
      foundUser();
      loadData()

    } else {
      navigate("/");
      alert("You do not have a permit");
    }
  }, []);

useEffect(()=>{
  if(formState?.name){ 
  // addInstitution()
  loadData()

  }
},[formState])


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






  const docData = formState
     
    
  ;
  async function addInstitution() {
    const response = await addDoc(collection(db, "institution"), docData);
    alert("His institution was loaded with success")
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
async function deleteInstitution(){         
await deleteDoc(doc(db, "institution", "pr5RrVlwKmvnGSRnlNm0"));
}

// ----------------------------
async function modificationInstitution(){
  const cityRef = doc(db, 'institution', "pr5RrVlwKmvnGSRnlNm0");
setDoc(cityRef, { name: "Los Alamos",
      description: "Ayudamos a la gente"
}, { merge: true });
}




  return permit ? (
    <Container>
      <Navbar />
      <ChildrenContainer>
        <Text>Here you can upload information about the institution. </Text>

        { (data.length ===0)&& <FormInstitution   userId={userId} setFormState={setFormState}/>}
        {data&&<Text>-{data.length} two institutions are registered </Text>}
        <Text >Here you can modify or delete information about the institution. </Text>
        <Text onClick={deleteInstitution}>Delete</Text>
        <Text onClick={modificationInstitution}>add</Text>

      </ChildrenContainer>
    </Container>
  ) : (
    <Loading />
  );
}
