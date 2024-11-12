import React from 'react';

function Education() {
    return ( 
        <div className='container p-3 mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width: "75%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p className='mt-4'>Versity, the largest online stock market book in the world covering everything from basics to advanced trading.</p>
                    <a href='' style={{textDecoration: "none"}}>Versity →</a>
                    <p className='mt-5'>Trading Q&A, the most active trading and investment communityin India for all your market related queries.</p>
                    <a href='' style={{textDecoration: "none"}}>Trading Q&A →</a>
                </div>
            </div>
        </div>
    );
}

export default Education;