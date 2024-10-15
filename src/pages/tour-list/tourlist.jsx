import React, { useState } from 'react';
import Sidebar from './sidebar'
import Listing from './listing'

export default function Tourlist() {

    const [inputValue, setInputValue] = useState('');
    const clearInput = () => {
        setInputValue('');
    };
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { icon: 'fa-bars', label: 'All', count: 7413 },
        { icon: 'fa-hotel', label: 'Tours', count: 3969 },
        { icon: 'fa-map-signs', label: 'Experiences', count: 2055 },
        { icon: 'fa-landmark', label: 'Attractions', count: 1390 },
        { icon: 'fa-utensils', label: 'Food', count: 1148 },
        { icon: 'fa-car', label: 'Transportation', count: 660 },
        { icon: 'fa-suitcase', label: 'Travel Essentials', count: 23 }
    ];
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    
  return (
    <>  
        <div className="border-bottom border-color-3">
            <div class="container mt-3 mb-3">
                <div class="comment-section max-width-810 mx-auto">
                    <form class="js-validate" novalidate="novalidate">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="has-abs-btn">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Dubai, United Arab Emirates"
                                        aria-label="Location"
                                        required
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        data-error-class="u-has-error"
                                        data-msg="Please enter your name."
                                        data-success-class="u-has-success"
                                    />
                                    {inputValue && (
                                        <button
                                            type="button"
                                            className="close-btn"
                                            onClick={clearInput}
                                        >
                                            &times;
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="border-bottom border-color-3">
            <div className="container-fluid">
            <ul className="tour-listing-tabs">
                {tabs.map((tab, index) => (
                <li
                    key={index}
                    className={activeTab === index ? 'active' : ''}
                    onClick={() => handleTabClick(index)}
                >
                    <i className={`fa ${tab.icon}`}></i>
                    <span>{tab.label} ({tab.count})</span>
                </li>
                ))}
            </ul>
            </div>
        </div>
        <div className="container pt-5 pt-xl-8">
            <div className="row mb-5 mb-md-8 mt-xl-1 pb-md-1">
                <div className="col-lg-4 col-xl-3 order-lg-1 width-md-50">
                    <Sidebar />
                </div>
                <div className="col-lg-8 col-xl-9 order-md-1 order-lg-2">
                    <Listing/>
                </div>
            </div>
        </div>
    </>
  )
}
