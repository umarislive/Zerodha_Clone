import React from 'react';

function Hero() {
    return ( 
        <div className='container p-3 mt-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5 mb-4'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <button className='btn btn-primary fs-5 mb-5 mt-4' style={{width: "20%", margin: "0 auto"}}>Signup now</button>
            </div>
        </div>
    );
}

export default Hero;