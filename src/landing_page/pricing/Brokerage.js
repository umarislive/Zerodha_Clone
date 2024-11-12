import React from 'react';

function Borkerage() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-5 border-top">
                <div className='col-6 text-center'>
                    <a href=''><h3>Brokerage Calculator</h3></a>
                </div>
                <div className='col-6 text-center'>
                    <a href=''><h3>List of charges</h3></a>
                </div>
                <ul className='p-3 mt-4 lh-lg text-muted'>
                    <li>Call and Trade RMS auto-squareoff; Additinal charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via email.</li>
                    <li>Physical copies of contract notes, if required, shall charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debt balance, any order placed will be charged ₹40 per executed order instead of ₹20 executed order.</li>
                </ul>
            </div>
        </div>
    );
}

export default Borkerage;