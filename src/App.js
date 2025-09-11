import React from "react";
import CardActivation from "./components/CardActivation";
import OtpVerification from "./components/OtpVerification";
import VerifyAcctNum from "./components/VerifyAcctNum";
import Home from "./components/Home" 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/activate-card" element={<CardActivation />} />
        <Route path="/verify-acct" element={<VerifyAcctNum />} /> 
        <Route path="/" element={<Home />} /> 

      </Routes>
    </Router>
  );
}

export default App;


