import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { ArrowLeft } from "lucide-react"
import logo from "../img/logo.png"
import footerCard from "../img/footer-card.jpg"
import "./OtpVerification.css"


const OtpVerification = () => {
  const ProgressIndicator = () => {
    return(
      <div className="progress-indicator">
        <div className="progress-bar active"></div>
        <div className="progress-bar active"></div>
        <div className="progress-bar"></div>
      </div>
    )
  }

  const [otp, setOtp] = useState("");

      return (
        <div className="container">
          <div className="header">
            <ArrowLeft className="arrow-left" />
              <ProgressIndicator />
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
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              shouldAutoFocus
              inputType="tel"
              inputStyle="otp-input"
              containerStyle="otp-container"
              // focusStyle=""
            />
        </div>

        <div className="timer">
          <span> 0:20 </span>
        </div>

        <button className="btn-primary"> Continue </button>

        <p className="resend-text"> Didn't recieve any OTP? <a href="#"> Click to resend </a></p>


        <div className="footer">
          <img src={footerCard} alt="footer-card" />
        </div>
    </div>        
    );
};
 

export default OtpVerification;