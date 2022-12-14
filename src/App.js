import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Loading } from "./components/loading/Loading";
import Building from "./pages/Building";

const Users = lazy(() => import("./route/Users"));
const Home = lazy(() => import("./pages/Home"));
const Institution = lazy(() =>import("./route/Institution.jsx"))
const About= lazy(()=>import("./pages/AboutUs"))


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About/>}/>
        <Route
             path="*"
            element={
            <Building/>
      }
    />
      </Routes>
    </Suspense>
  );
}

export default App;
