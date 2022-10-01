import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase-config";

export function handleCreateAcount(
  email,
  password,
  name,
  valuemodal,
  setModal,
  setName
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      updateProfile(userCredential.user, {
        displayName: name,
      });
      alert("user create");
      setName(name);
      setModal(!valuemodal);
    })
    .catch((error) => {
      alert("error user");

      console.log(error.message);
      // ..
    });
}

export function handleLogin(email, password, valuemodal, setModal, setName) {
  console.log("qqqqqqqqq", email);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("user login");
      setName(user.displayName);
      setModal(!valuemodal);
      // ...
    })
    .catch((error) => {
      alert("error");
      console.log("ver", error.message);
    });
}
