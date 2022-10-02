import "./App.css";

// import Home from "./pages/Home";
// import Institution from "./route/Institution.jsx";
// import Users from ';
import { Routes, Route } from "react-router-dom";

import React, { Suspense, lazy } from "react";
import { Loading } from "./components/loading/Loading";

const Users = lazy(() => import("./route/Users"));
const Home = lazy(() => import("./pages/Home"));
const Institution = lazy(() =>import("./route/Institution.jsx"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Suspense>
  );
}

export default App;
