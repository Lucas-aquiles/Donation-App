import {db} from "../service/firebase-config"
import {  collection, getDocs  } from 'firebase/firestore';
import React, {  useEffect} from 'react';
import Register from "../components/form";





export default function Intitution() {
  

    useEffect(() => {
        getData(db)
        }, []);
      
        async function getData(db) {
          const institutionCol = collection(db, 'institution');
          const institutionSnapshot = await getDocs(institutionCol);
          const institutionList = institutionSnapshot.docs.map(doc => doc.data());
          return institutionList;
        }


    return (
      <>
        <h2>Institution</h2>
        <>registrarse</>
        <>loguearse</>

        <Register/>
      </>
    );
  }