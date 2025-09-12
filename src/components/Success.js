import React from "react";
import card from "../img/card2.png";
import logo from "../img/logo.png";
import successPic from "../img/success.jpg"

import "./Home.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="intro">
        <h3 className="title">Keystone Bank</h3>
      </div>

      <div>
        <img src={successPic} alt="success" className="debit-card" />
      </div>

      <div className="">
        <h3 className="title"> Activation Successful </h3>
        <p className="subtitle">
          Your card has been successfully activated </p>
        <p className="subtitle"> and is now ready for transactions </p>
      </div>

      <button className="btn-primary" onClick={() => navigate("/verify-acct")}> Continue </button>
    </div>
  );
};

export default Success;
