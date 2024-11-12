import React from 'react';

function LeftSection({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5 p-3'>
                <div className='col-7'>
                    <img src={imageURL}/>
                </div>
                <div className='col-5 p-5'>
                    <h1 className='text-muted'>{productName}</h1>
                    <p className='mt-4 fs-5 text-muted'>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try demo →</a>
                        <a href={learnMore} className='ms-5'>Learn more →</a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore} className='ms-3'><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;