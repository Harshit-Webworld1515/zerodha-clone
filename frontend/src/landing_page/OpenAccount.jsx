import React from 'react'

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className="row text-center">
                <div className="col">
                    <h2 className='mt-4'>
                        Open a Zerodha account
                    </h2>
                    <p className='mt-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

                    <button
                        className="btn btn-primary fs-5 p-2 mt-2"
                        style={{ width: "25%" }}
                    >
                        Sign up now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;