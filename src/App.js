import React from "react";
import CardActivation from "./components/CardActivation";
import Home from "./components/Home";
import OtpVerification from "./components/OtpVerification";
import SelectCard from "./components/SelectCard";
import VerifyAcctNum from "./components/VerifyAcctNum"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/card-activation" element={<CardActivation />} />
        <Route path="/select-card" element={<SelectCard />} /> 
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/" element={<Home />} />
        <Route path="/verifyacct" element={<VerifyAcctNum />} /> 
      </Routes>
    </Router>
  );
}

export default App;
