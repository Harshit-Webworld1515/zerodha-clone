import React from 'react'

function RightSection({ imageURL, productName, productDescription,
    learnMore }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6" style={{marginTop:"12%"}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-6">
                    <img src={imageURL} alt="" style={{width:"89%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;