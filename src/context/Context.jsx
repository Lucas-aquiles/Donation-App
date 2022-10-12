import { useState, createContext, useEffect } from "react";
import { db,auth } from "../service/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  onAuthStateChanged
} from "firebase/auth";
//intermediario

export const contextApp = createContext();

// para pasarle  a loc componentes como Provider
export const ContextApp = ({ children }) => {
  const [info, setInfo] = useState(false);
  const [institution, setInstitution] = useState({});
  const [users, setUsers] = useState({})
  const [modal, setModal] = useState(false);
const [nameUser,setNameUsers]=useState("")
const [refresh,setRefresh]= useState({})

  useEffect(() => {
    getData(db);
    listener()
    // getDataUsers(db)
    console.log("me setoy ejecutando")
  }, [refresh]);




  async function getData(db) {
    const institutionCol = collection(db, "institution");
    const institutionSnapshot = await getDocs(institutionCol);
    const institutionList = institutionSnapshot.docs.map((doc) => doc.data());
    setInstitution(institutionList);
    return institutionList;
  }

// async function getDataUsers(db) {
//     const institutionCol = collection(db, "users");
//     const institutionSnapshot = await getDocs(institutionCol);
//     const institutionList = institutionSnapshot.docs.map((doc) => doc.data());
//     setUsers(institutionList);
//     return institutionList;
//   }

    function listener(){  
  onAuthStateChanged(auth, (user) => {
      console.log(user?.reloadUserInfo.localId)
    setUsers(user?.reloadUserInfo.localId)
    //   )
  });

}


  return (
    <contextApp.Provider
      value={{
        value: [info, setInfo],
        value2: [institution, setInstitution],
        value3: [modal, setModal],
        value4:[nameUser,setNameUsers],
        value5:[users,setUsers],
        value6:[refresh,setRefresh]
      }}
    >
      {children}
    </contextApp.Provider>
  );
};
