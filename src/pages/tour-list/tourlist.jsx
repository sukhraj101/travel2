import React, { useState, useRef } from 'react';
import MultiDatePicker from 'react-multi-date-picker';
import Sidebar from './sidebar'
import Listing from './listing'

export default function Tourlist() {
    const [dates, setDates] = useState([null, null]);
    const datePickerRef = useRef(null);

    const [inputValue, setInputValue] = useState('');
    const clearInput = () => {
        setInputValue('');
    };
    const [activeTab, setActiveTab] = useState(0);

    const handleDateChange = (newDates) => {
        if (!newDates || newDates.length < 1) return;
        const [checkIn, checkOut] = newDates;
        const checkInDate = checkIn ? new Date(checkIn) : null;
        const checkOutDate = checkOut ? new Date(checkOut) : null;

        if (checkInDate && (!checkOutDate || checkOutDate <= checkInDate)) {
            setDates([checkIn, null]);
        } else {
            setDates(newDates);
            setIsOpen(false);
        }

        if (newDates.length === 2) {
            datePickerRef.current.closeCalendar();
            searchButtonRef.current.focus();
        }
    };

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
            <div className="container mt-3 mb-3">
                <div className="comment-section max-width-1024 mx-auto bg-gray px-2 pt-2 pb-2 rounded">
                    <form className="js-validate" novalidate="novalidate">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="has-abs-btn">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Dubai, United Arab Emirates"
                                        aria-label="Location"
                                        required
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        data-error-className="u-has-error"
                                        data-msg="Please enter your name."
                                        data-success-className="u-has-success"
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
                            <div className="col-sm-4">
                                <MultiDatePicker
                                    value={dates}
                                    onChange={handleDateChange}
                                    range
                                    format="DD MM YYYY"
                                    placeholder="Select Date"
                                    className="search-input"
                                    minDate={new Date()}
                                    numberOfMonths={2}
                                    ref={datePickerRef}
                                />
                            </div>
                            <div className="col-sm-4">
                                <button type="submit" class="btn btn-primary btn-md mb-xl-0 mb-lg-1 transition-3d-hover w-100 w-md-auto w-lg-100">Search</button>
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
        
        <div className="container pt-2 pt-xl-3">
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-no-gutter breadcrumb-black mb-4">
                            <li class="breadcrumb-item font-size-14 ">
                                <a href="/">Home</a>
                            </li>
                            <li class="breadcrumb-item font-size-14 ">
                                <a href="/">United Arab Emirates</a>
                            </li>
                            <li class="breadcrumb-item font-size-14 ">
                                <a href="/">Dubai Emirate</a>
                            </li>
                            <li class="breadcrumb-item font-size-14 ">
                                <a href="/">Dubai</a>
                            </li>
                            <li class="breadcrumb-item font-size-14 active" aria-current="page">Search results</li>
                        </ol>
                    </nav>
                </div>
            </div>
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
