import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription, 
    learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5 p-3'>
                <div className='col-5 p-5'>
                    <h1 className='text-muted'>{productName}</h1>
                    <p className='mt-4 fs-5 text-muted'>{productDescription}</p>
                    <div>
                        <a href={learnMore}>Learn more →</a>
                    </div>
                </div>
                <div className='col-7'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;