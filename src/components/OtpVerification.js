import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { ArrowLeft } from "lucide-react"
import logo from "../img/logo.png"
import footerCard from "../img/footer-card.jpg"
import "./OtpVerification.css"
import { accounts } from "./accountData";


const OtpVerification = () => {
  const navigate = useNavigate();  
  const location = useLocation();
  const {index} = location.state || {};

  const [otpNumber, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = () => {
    setErrorMessage(""); // clear old error

    if (!otpNumber || otpNumber.trim() === "") {
      setErrorMessage("OTP field cannot be empty");
      return;
    }

    if (otpNumber.length !== 6 || !/^\d{6}$/.test(otpNumber)) {
      setErrorMessage("Please enter a valid 6-digit OTP");
      return;
    }


    if (accounts[index].otp === otpNumber) {
      navigate("/activate-card", { state: {index}} );
    } else {
      setErrorMessage("Incorrect OTP. Please check and try again.");
    }
  };


  // Progree Indicator
  const ProgressIndicator = () => {
    return(
      <div className="progress-container">
        <div className="progress-indicator">
          <div className="progress-bar active"></div>
          <div className="progress-bar active"></div>
          <div className="progress-bar inactive"></div>
        </div>
      </div>
    )
  }


      return (
        <div className="container">
          <div className="header">
            <ArrowLeft
              className="arrow-left"
              onClick={() => navigate("../verify-acct") }
            />
              <ProgressIndicator  />
          </div>

          <div className="logo-container">
            <img src={logo} alt="logo" className="logo"/>
          </div>

          <div className="text-section">
            <h2 className="title">Secure Card Activation</h2>
            <p className="subtitle">Enter OTP sent to registered phone number</p>
          </div>

        <div className="otp-section">
            <label className="otp-label"> One-Time Password (OTP) </label>
            <OtpInput 
              value={otpNumber}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              shouldAutoFocus
              inputType="tel"
              inputStyle="otp-input"
              containerStyle="otp-input-container"
            />
        </div>

        {errorMessage && (
          <p style={{ color: "red", fontSize: "14px", textAlign:"left", marginTop: "8px"}}>
            {errorMessage}
          </p>
        )}

        <div className="timer">
          <span> 0:20 </span>
        </div>

        <button className="btn-primary" onClick={handleSubmit}
        > Continue </button>

        <p className="resend-text"> Didn't recieve any OTP?  Click to resend </p>

        <div className="footer">
          <img src={footerCard} alt="footer-card" />
        </div>
    </div>        
    );
};
 

export default OtpVerification;