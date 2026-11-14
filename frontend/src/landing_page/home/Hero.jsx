import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className="row text-center">
                <div className="col">
                    <img src='media/images/homeHero.png' alt="homehero" className="img-fluid mb-4"/>
                    <h1 className='mt-4'>
                        Invest in everything
                    </h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button
                        className="btn btn-primary fs-5 p-2"
                        style={{ width: "25%" }}
                        >
                        <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
                            Signup now
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;