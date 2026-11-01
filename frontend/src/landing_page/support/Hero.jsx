import React from 'react'

function Hero() {
    return (
        <section className="container-fluid" id='supportHero'>
            <div className="p-5" id='supportWrapper'>
                <h4 className='fs-2 text fw-medium'>Support Portal</h4>
                <a href="">Track Ticket</a>
            </div>
            <div className="row px-5 pb-5 mx-5">
                <div className="col-6 " style={{padding:"1rem 4rem"}}>
                    <h1 className='fs-4 fw-normal'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ..' /><br />
                    <a href="" className='anchor'>Track account opening</a>
                    <a href=""className='anchor'>Track segment activation</a>
                    <a href=""className='anchor'>Intraday margins</a>
                    <a href=""className='anchor'>Kite user manual</a>
                </div>
                <div className="col-6 featured "style={{paddingLeft:"15%"}}>
                    <h1 className=' fs-4 fw-normal'>Featured</h1>
                    <ol type='1'>
                        <li> <a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <li> <a href=""> Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
// https://github.com/apna-college/zerodha-clone/tree/21-creating-dashboard-components/dashboard/src/components

export default Hero;