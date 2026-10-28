import React from 'react'

function Hero() {
    return ( 
        <div className="container border-bottom mb-5">
            <div className="row text-center mt-5">
                <h1>Technology</h1>
                <h4 className='text-muted m-3'>Sleek, modern and intuitive trading platforms</h4>
                <p className='mb-5'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;