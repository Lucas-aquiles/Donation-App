import { useState, createContext, useEffect } from "react";
import { db } from "../service/firebase-config";
import { collection, getDocs } from "firebase/firestore";
//intermediario

export const contextApp = createContext();

// para pasarle  a loc componentes como Provider
export const ContextApp = ({ children }) => {
  const [info, setInfo] = useState(false);
  const [institution, setInstitution] = useState({});
  const [users, setUsers] = useState({})
  console.log(users)
  const [modal, setModal] = useState(false);
const [nameUser,setNameUsers]=useState("")

  useEffect(() => {
    getData(db);
    getDataUsers(db)
  }, []);

  async function getData(db) {
    const institutionCol = collection(db, "institution");
    const institutionSnapshot = await getDocs(institutionCol);
    const institutionList = institutionSnapshot.docs.map((doc) => doc.data());
    setInstitution(institutionList);
    return institutionList;
  }

async function getDataUsers(db) {
    const institutionCol = collection(db, "users");
    const institutionSnapshot = await getDocs(institutionCol);
    const institutionList = institutionSnapshot.docs.map((doc) => doc.data());
    setUsers(institutionList);
    return institutionList;
  }




  return (
    <contextApp.Provider
      value={{
        value: [info, setInfo],
        value2: [institution, setInstitution],
        value3: [modal, setModal],
        value4:[nameUser,setNameUsers]
      }}
    >
      {children}
    </contextApp.Provider>
  );
};
