import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInout from "react-otp-input";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("OTP entered:", otp);
  }

    return (
        <div className="otp-container">
            <h2>Secure Card Activation</h2>
            <p>Enter OTP sent to registered phone number</p>

        <div className="otp-inputs">
            <h3> One-Time Password {"OTP"} </h3>
            <OtpInout 
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputType="tel"
            />
        </div>

        <div className="btn-primary">
            <button> Continue </button>

            <p> Didn't recieve any OTP? <a href="#"> Click to resend </a></p>
        </div>

        <div className="footer"> DEBIT-CARD PIC </div>
    </div>        
    );
};
 

export default OtpVerification;