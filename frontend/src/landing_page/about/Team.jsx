import React from 'react'
import { Link } from 'react-router-dom';

function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className='text-center '>
                    People
                </h1>
            </div>
            <div className="row p-3 text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className="col-6 p-3 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="ceoPic"
                        style={{ borderRadius: "50%", width: "50%" }} />
                    <h5 className='mt-3'>Harshit Tiwari</h5>
                    <p className='fs-6'>CEO of Zerodha-clone</p>
                </div>
                <div className="col-6 p-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome
                        the hurdles he faced during his decade long stint as a trader.
                        Today, Zerodha has changed the landscape of the Indian broking
                        industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory
                        Committee (SMAC) and the Market Data Advisory Committee
                        (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <Link to="/" className='text-decoration-none'>Homepage</Link> / <a href=""className='text-decoration-none'>TradingQnA</a> / <a href=""className='text-decoration-none'>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Team;