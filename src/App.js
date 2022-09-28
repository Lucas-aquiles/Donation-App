import './App.css';


import Home from './pages/Home';
import Institution from './route/Institution.jsx'
import Users from './route/Users';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";





function App() {



  return (
    <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/institution" element={<Institution />} />
 <Route path="/users" element={<Users />} />



      </Routes>

  );
}

export default App;
