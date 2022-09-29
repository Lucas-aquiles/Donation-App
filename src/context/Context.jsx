import { useState, createContext, useEffect} from "react";
import {db} from "../service/firebase-config"
import {  collection, getDocs  } from 'firebase/firestore';
//intermediario

export const contextApp = createContext();

// para pasarle  a loc componentes como Provider
export const ContextApp = ({ children }) => {
  const [info, setInfo] = useState(false);
  const [institution, setInstitution] = useState({});

  useEffect(() => {
    getData(db)
    }, []);
  
    async function getData(db) {
      const institutionCol = collection(db, 'institution');
      const institutionSnapshot = await getDocs(institutionCol);
      const institutionList = institutionSnapshot.docs.map(doc => doc.data());
      setInstitution(institutionList)
      return institutionList;
    }







  return (
    <contextApp.Provider value={{ value: [info, setInfo], value2: [institution, setInstitution] }}>
      {children}
    </contextApp.Provider>
  );
};
