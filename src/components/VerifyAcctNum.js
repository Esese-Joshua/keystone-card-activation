import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../img/logo.png";
import footerCard from "../img/footer.jpg";
import "./VerifyAcctNum.css";
import { accounts } from "../components/accountData";
import emailjs from "emailjs-com"


const VerifyAcct = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null)

  const handleAccountSubmit = () => {
    setErrorMessage(""); // clear old error

    if (accountNumber.length !== 10 || !/^\d{10}$/.test(accountNumber)) {
      setErrorMessage("Please enter a valid 10-digit account number");
      return;
    }
 
    // Check if account exists
    const index = accounts.findIndex(
      (acct) => acct.accountNum === accountNumber);

    if (index !== -1){
      // generate random OTP
      const generateOtp = Math.floor(100000 + Math.random() * 900000);
      const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes 
      setOtp(generateOtp);

      // send otp to email using EmailJS
      emailjs.send(
        "service_54s66c9",
        "template_6l3vwxb",
        {
          to_email: accounts[index].email,
          otp: generateOtp,
        },
        "jOMQys6iSkxvxvSfK" 
      )
      .then(() => { 
        alert("OTP sent to your registered email address, please check your inbox.");
        navigate("/otp", { state: { index, generateOtp, otpExpiry } });
      })
      .catch((error) => {
        alert("Failed to send OTP. Please try again later.", error);
      });
    } else {
      setErrorMessage("Account number not found. Please check and try again.");
      }
    }  

  // Progress Indicator
  const ProgressIndicator = () => {
    return (
      <div className="progress-container">
        <div className="progress-indicator">
          <div className="progress-bar active"></div>
          <div className="progress-bar inactive"></div>
          <div className="progress-bar inactive"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
    
      <div className="header">
        <ArrowLeft
          className="arrow-left"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <ProgressIndicator />
      </div>

      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="text-section">
        <h2 className="title">Secure Card Activation</h2>
        <p className="subtitle">
          Please provide your Keystone account number.
        </p>
      </div>

      <div className="acctnum-section">
        <label className="acctnum-label">Account Number</label>
        <input
          type="tel"
          className="acctnum-input"
          placeholder="10-digit NUBAN"
          maxLength="10"
          autoFocus
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />

        {/* response */}
        {errorMessage && (
          <p
            style={{ color: "red", fontSize: "14px",
              marginTop: "8px" }}>
            {errorMessage}
          </p>
        )}
        </div>

      <button className="btn-primary" onClick={handleAccountSubmit}>
        Continue
      </button>

      <div className="footer">
        <img src={footerCard} alt="footer-card" />
      </div>
    </div>
  );
};


export default VerifyAcct;
