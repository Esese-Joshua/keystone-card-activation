import React from "react";
import { useNavigate } from "react-router-dom";
// import "./CardActivation.css";

const VerifyAcctNum = () => {

    return (
        <div className="container">            
            <div className="logo">
                <img src="" alt="" /> BANK LOGO
            </div>

            <div>
                <h3> Secure Card Activation </h3>
                <p> Please provide your Keystone account number </p>
            </div>

            <div>
                <h3> Account Number </h3>

                <input type="text" maxLength={10} />

                <div>
                    <button className="btn-primary"> Continue </button>
                </div>
            </div>
            <div className="footer"> DEBIT-CARD PIC </div>
        </div>

    )
};

export default VerifyAcctNum;
