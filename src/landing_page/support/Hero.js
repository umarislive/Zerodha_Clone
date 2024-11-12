import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid' id='supportHero'>
            <div className='row px-5 pt-5'>
                <div className='col-7'>
                    <h1 className='fs-4'>Support Portal</h1>
                </div>
                <div className='col-5'>
                    <a href=''>Track tickets</a>
                </div>
            </div>
            <div className='row p-5'>
                <div className='col-7'>
                    <h1 className='fs-5 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-4' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'/><br/>
                    <a href=''>Track account opening</a>
                    <a href=''>Track segment activation</a>
                    <a href=''>Intraday margins</a><br/>
                    <a href=''>Kite user manual</a>
                    
                </div>
                <div className='col-5'>
                    <h1 className='fs-4'>Featured</h1>
                    <ol>
                        <li><a href=''>Offer for sale (OFS) - November 2024</a></li>
                        <li><a href=''>Surveillance measure on scrips - November 2024</a></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Hero;