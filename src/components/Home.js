import React from "react";
import { useNavigate } from "react-router-dom";
// import "./CardActivation.css";

const VerifyAcctNum = () => {

    return (
        <div className="container">            
            <div className="debit-card-pic">
                <img src="" alt="" /> BANK LOGO, NAME & DEBIT CARD PIC
            </div>

            <div>
                <h3> All Cards Linked </h3>
                <p> Kindly select the card you will like to activated </p>
            </div>

            <div>
                <h3> Secure Card Activation </h3>

                <p className="inactive"> Status: Inactive </p>
            </div>

            <button className="btn-primary">
                Activate Card
            </button>
        </div>
    )
};

export default VerifyAcctNum;
