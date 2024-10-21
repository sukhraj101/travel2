import React, { useState } from 'react';

const PaymentCards = () => {
    const [activeTab, setActiveTab] = useState('pills-one-example2'); // Default active tab ID

    const handleTabClick = (tabId) => {
        setActiveTab(tabId); // Update the active tab
    };

    return (
        <ul className="nav nav-classic nav-choose border-0 nav-justified border mx-n3" role="tablist">
            <li className="nav-item mx-3 mb-4 mb-md-0">
                <a 
                    className={`rounded py-3 cursor-pointer border-width-2 border nav-link font-weight-medium ${activeTab === 'pills-one-example2' ? 'active' : ''}`} 
                    id="pills-one-example2-tab" 
                    onClick={() => handleTabClick('pills-one-example2')} 
                    role="tab" 
                    aria-controls="pills-one-example2" 
                    aria-selected={activeTab === 'pills-one-example2'}
                >
                    <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                        <i className="flaticon-tick text-white font-size-15"></i>
                    </div>
                    <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                        <img className="img-fluid mb-0 max-width-100" src="../../assets/img/icons/img7.png" alt="Payment with credit card" />
                        <div className="w-100 text-dark">Add New Card</div>
                    </div>
                </a>
            </li>
            <li className="nav-item mx-3">
                <a 
                    className={`rounded py-3 cursor-pointer border-width-2 border nav-link font-weight-medium ${activeTab === 'pills-two-example2' ? 'active' : ''}`} 
                    id="pills-two-example2-tab" 
                    onClick={() => handleTabClick('pills-two-example2')} 
                    role="tab" 
                    aria-controls="pills-two-example2" 
                    aria-selected={activeTab === 'pills-two-example2'}
                >
                    <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                        <i className="flaticon-tick text-white font-size-15"></i>
                    </div>
                    <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                        <img className="img-fluid mb-0 max-width-100" src="../../assets/img/icons/img7.png" alt="Payment with PayPal" />
                        <div className="w-100 text-dark">*** 9876</div>
                    </div>
                </a>
            </li>
            <li className="nav-item mx-3">
                <a 
                    className={`rounded py-3 cursor-pointer border-width-2 border nav-link font-weight-medium ${activeTab === 'pills-three-example2' ? 'active' : ''}`} 
                    id="pills-three-example2-tab" 
                    onClick={() => handleTabClick('pills-three-example2')} 
                    role="tab" 
                    aria-controls="pills-three-example2" 
                    aria-selected={activeTab === 'pills-three-example2'}
                >
                    <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                        <i className="flaticon-tick text-white font-size-15"></i>
                    </div>
                    <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                        <img className="img-fluid mb-0 max-width-100" src="../../assets/img/icons/img6.png" alt="Payment with PayPal" />
                        <div className="w-100 text-dark">*** 3649</div>
                    </div>
                </a>
            </li>
            <li className="nav-item mx-3">
                <a 
                    className={`rounded py-3 cursor-pointer border-width-2 border nav-link font-weight-medium ${activeTab === 'pills-four-example2' ? 'active' : ''}`} 
                    id="pills-four-example2-tab" 
                    onClick={() => handleTabClick('pills-four-example2')} 
                    role="tab" 
                    aria-controls="pills-four-example2" 
                    aria-selected={activeTab === 'pills-four-example2'}
                >
                    <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                        <i className="flaticon-tick text-white font-size-15"></i>
                    </div>
                    <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                        <img className="img-fluid mb-0 max-width-100" src="../../assets/img/icons/img4.png" alt="Payment with PayPal" />
                        <div className="w-100 text-dark">*** 4578</div>
                    </div>
                </a>
            </li>
        </ul>
    );
};

export default PaymentCards;
