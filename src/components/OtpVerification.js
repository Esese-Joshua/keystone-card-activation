import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { ArrowLeft } from "lucide-react"
import logo from "../img/logo.png"
import footerCard from "../img/footer.jpg"
import "./OtpVerification.css"
import Countdown from "react-countdown";


const OtpVerification = () => {
  const navigate = useNavigate();  
  const location = useLocation();
  const {index, generateOtp, otpExpiry} = location.state || {};

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

    // Check if OTP is expired
    const currentTime = new Date().getTime();
    if (currentTime > otpExpiry) {
      setErrorMessage("OTP has expired. Please request a new one.");
      return;
    }

    // Validate OTP
    if ( parseInt(otpNumber, 10) === generateOtp) {
      navigate("/activate-card", { state: {index}} );
    } else {
      setErrorMessage("Incorrect OTP. Please check and try again.");
    }
  };

  // Countdown Renderer
  const countdownRenderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <span style={{color: "red"}}>OTP expired. Please request a new one.</span>;
    } else {
      return <span style={{ color: minutes === 0 && seconds <= 30 ? "red" : "green" }}> {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </span>;
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

          <div className="">
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
          <Countdown date={otpExpiry} renderer={countdownRenderer} />
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