import React from "react";
import card from "../img/card.png";
import logo from "../img/logo.png";
import user from "../img/user1.png";
import "./CardActivation.css"

const CardActivation = () => {
  const ProgressIndicator = () => {
    return(
      <div className="progress-container">
        <div className="progress-indicator">
          <div className="progress-bar active"></div>
          <div className="progress-bar active"></div>
          <div className="progress-bar active"></div>
        </div>
      </div>
    )
  }

    return (
        <div className="container">   
          <div className="main-header">
              <ProgressIndicator  />
          </div>

            <div className="header">
                <img src={logo} alt="logo" className="logo"/>
                <div className="profile">
                    <img src={user} alt="user" className="user" />
                
                    <div className="account-info">
                        <span className="acct-num">0123456789</span>
                        <span className="acct-name">Marcus Rashford </span>
                    </div>
                </div>
            </div>

            <div className="intro">
                <h3 className="title">All Cards Linked</h3>
                <p className="subtitle">Kindly select the card you would like to activate</p>
            </div>

            <div >
                <img src={card} alt="card" className="debit-card" /> 
            </div>
                                
            <div className="card-details">
                <h3 className="card-title">MasterCard Debit Card</h3>
                <span className="status inactive">Inactive</span>
            </div>

            <button className="btn-primary">
                Activate Card
            </button>
        </div>
    )
};

export default CardActivation;
