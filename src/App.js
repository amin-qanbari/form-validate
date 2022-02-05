import React from "react";
import Login from "./pages/Login";
import LoginTwo from "./pages/LoginTwo"
import { Routes , Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/SignUp" element={<Login/>}/>
      <Route path="/Login" element={<LoginTwo/>}/>
      <Route path="/" element={<Navigate to="/SignUp"/>} />
    </Routes>
    </div>
  );
};

export default App;
