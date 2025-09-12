import React from "react";
import CardActivation from "./components/CardActivation";
import OtpVerification from "./components/OtpVerification";
import VerifyAcctNum from "./components/VerifyAcctNum";
import Home from "./components/Home" 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pin from "./components/Pin"
import ConfirmPin from "./components/ConfirmPin";
import Success from "./components/Success"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/activate-card" element={<CardActivation />} />
        <Route path="/verify-acct" element={<VerifyAcctNum />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/pin" element={<Pin />} /> 
        <Route path="/confirm-pin" element={<ConfirmPin />} /> 
        <Route path="/success" element={<Success />} /> 

      </Routes>
    </Router>
  );
}

export default App;


