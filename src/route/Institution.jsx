import {db} from "../service/firebase-config"
import {  collection, getDocs  } from 'firebase/firestore';
import React, {  useEffect} from 'react';






export default function Intitution() {


    useEffect(() => {
        getCities(db)
        }, []);
      
        async function getCities(db) {
          const citiesCol = collection(db, 'institution');
          console.log(citiesCol)
          const citySnapshot = await getDocs(citiesCol);
          const cityList = citySnapshot.docs.map(doc => doc.data());
          console.log(cityList)
          return cityList;
        }


    return (
      <>
        <h2>Institution</h2>
      </>
    );
  }