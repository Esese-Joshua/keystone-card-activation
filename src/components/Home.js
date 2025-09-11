import React from "react";
import card from "../img/card2.png";
import logo from "../img/logo.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
        <img src={card} alt="card" className="debit-card" />
      </div>

      <div className="">
        <h3 className="title">Secure Card Activation</h3>
        <p className="subtitle">
          Activate your card and choose a secure </p>
        <p className="subtitle"> PIN for your transactions </p>
      </div>

      <button className="btn-primary" onClick={() => navigate("/verify-acct")}> Continue </button>
    </div>
  );
};

export default Home;
