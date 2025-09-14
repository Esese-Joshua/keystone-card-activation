 import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../img/logo.png";
import footerCard from "../img/footer-card.jpg";
import "./VerifyAcctNum.css";
import { accounts } from "./accountData";

 
const ConfirmPin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { index } = location.state || {};
  const [pin, setConfirmPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  // useEffect at top level to redirect if index is invalid
  useEffect(() => {
    if (index === undefined || !accounts[index]) {
      navigate("/success");
    }
  }, [index, navigate]);


  const handleConfirmPinSubmit = () => {
    setErrorMessage(""); // clear old error

    if (!pin || pin.trim() === "") {
      setErrorMessage("PIN field cannot be empty");
      return;
    }    

    if (pin.length !== 4 || !/^\d{4}$/.test(pin)) {
      setErrorMessage("Please enter a valid 4-digit PIN");
      return;
    }

    if (accounts[index].pin === pin) {
      navigate("/success", { state: { index } });
    } else {
      setErrorMessage("PIN does not match. Please try again");
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
          onClick={() => navigate("/pin", { state: { index } })}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="text-section">
        <h2 className="title"> Confirm Pin </h2>
        <p className="subtitle">
          Confirm 4-digit PIN.
        </p>
      </div>

      <div className="acctnum-section">
        <label className="acctnum-label">Confirm 4-digit PIN </label>
        <input
          type="tel"
          className="acctnum-input"
          placeholder="PIN"
          maxLength="4"
          autoFocus
          value={pin}
          onChange={(e) => setConfirmPin(e.target.value)}
        />

        {/* response */}
        {errorMessage && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            {errorMessage}
          </p>
        )}
        </div>

      <button className="btn-primary" onClick={handleConfirmPinSubmit}>
        Continue
      </button>

      <div className="footer">
        <img src={footerCard} alt="footer-card" />
      </div>
    </div>
  );
};

export default ConfirmPin;
