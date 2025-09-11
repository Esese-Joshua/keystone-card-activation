import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../img/logo.png";
import footerCard from "../img/footer-card.jpg";
import "./VerifyAcctNum.css";

const VerifyAcct = () => {
  const navigate = useNavigate();

  // dummy account numbers
  const accounts = [
    { accountNum: "1111111111" },
    { accountNum: "2222222222" },
    { accountNum: "3333333333" },
  ];

  const [accountNumber, setAccountNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAccountSubmit = () => {
    setErrorMessage(""); // clear old error

    if (accountNumber.length !== 10 || !/^\d{10}$/.test(accountNumber)) {
      setErrorMessage("Please enter a valid 10-digit account number");
      return;
    }

    const foundAccount = accounts.find(
      (acc) => acc.accountNum === accountNumber
    );

    if (foundAccount) {
      navigate("/otp");
    } else {
      setErrorMessage("Account number not found. Please check and try again.");
    }
  };

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
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
        {errorMessage && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              marginTop: "5px",
            }}
          >
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
