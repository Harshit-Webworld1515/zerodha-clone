import React from 'react'
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function CreateTicket() {
     const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);

    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
    };

    return (
        <div className="container">
            <div className="row P-5 mt-5 mb-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
                    <button className="btn btn-outline-primary" onClick={Logout}>
                        Sign Out
                    </button>
                </div>
                <div className="col-4 p-5">
                    <h4 className="fs-3 mb-5 text-muted">
                        <i className="fa-solid fa-circle-plus fs-6"></i> Account Opening </h4>

                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Online Account Opening </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Offline Account Opening </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership and HUF Account </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Opening </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>NRI Account Opening </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charges at Zerodha </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Zerodha IDFC FIRST Bank 3-in-1 Account </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Getting Started </a><br />
                </div>
                <div className="col-4 p-5">
                    <h4 className="fs-3 mb-5 text-muted">
                        <i className="fa-solid fa-circle-plus fs-6"></i> Your Zerodha Account </h4>

                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Login Credentials</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Account Modification and Segment Addition</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>DP ID and bank details </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Your Profile</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Transfer and conversion of shares</a><br />
                </div>
                <div className="col-4 p-5">
                    <h4 className="fs-3 mb-5 text-muted">
                        <i className="fa-solid fa-circle-plus fs-6"></i>Your Zerodha Account </h4>

                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Margin/leverage, Product and Order types</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite Web and Mobile </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Trading FAQs </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Corporate Actions</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Sentinel</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite API </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Pi and other platforms </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Stockreports+ </a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>GTT </a><br />
                </div>

                <div className="col-4 p-3">
                    <h4 className="fs-3 mb-3 text-muted">
                        <i className="fa-solid fa-circle-plus fs-6"></i> Funds
                    </h4>

                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding Funds</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Fund Withdrawal</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>eMandates</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding Bank Accounts</a><br />
                </div>

                <div className="col-4 p-3">
                    <h4 className="fs-3 mb-3 text-muted">
                        <i className="fa-solid fa-circle-plus fs-6"></i> Console
                    </h4>

                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Reports</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Ledger</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Portfolio</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>60 Day Challenge</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>IPO</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Referral Program</a><br />
                </div>
                <div className="col-4 p-3">
                    <h4 className="fs-3 mb-3 text-muted">
                        <i className="fa-solid fa-circle-plus fs-6"></i> Coin
                    </h4>

                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Understanding Mutual Funds</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>About Coin</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Buying and Selling through Coin</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Starting an SIP</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Managing your Portfolio</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Coin App</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Moving to Coin</a><br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Government Securities</a><br />
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;


