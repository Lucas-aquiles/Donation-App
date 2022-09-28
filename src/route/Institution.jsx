import {db} from "../service/firebase-config"
import { getFirestore, collection, getDocs  } from 'firebase/firestore';
import React, { useState, useEffect, useRef } from 'react';






export default function Intitution() {


    useEffect(() => {
        getCities(db)
        }, []);
      
        async function getCities(db) {
          const citiesCol = collection(db, 'institution');
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