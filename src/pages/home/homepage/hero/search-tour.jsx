import React, { useState, useRef, useEffect } from 'react';
import MultiDatePicker from 'react-multi-date-picker';

export default function SearchTour() {
    const [dates, setDates] = useState([null, null]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);
    
    const destinationInputRef = useRef(null);
    const activityInputRef = useRef(null);
    const datePickerRef = useRef(null);
    const searchButtonRef = useRef(null);

    const options = [
        { value: 'project1', label: 'London, United Kingdom' },
        { value: 'project2', label: 'New York, United States' },
        { value: 'project3', label: 'New South Wales, Australia' },
        { value: 'project4', label: 'Istanbul, Turkey' },
        { value: 'project5', label: 'Reykjavík, Iceland' },
    ];

    const handleDateChange = (newDates) => {
        if (!newDates || newDates.length < 1) return;
        const [checkIn, checkOut] = newDates;
        const checkInDate = checkIn ? new Date(checkIn) : null;
        const checkOutDate = checkOut ? new Date(checkOut) : null;

        if (checkInDate && (!checkOutDate || checkOutDate <= checkInDate)) {
            setDates([checkIn, null]);
        } else {
            setDates(newDates);
            setIsOpen(false); // Close the date picker after selection
        }

        // Move focus to search button after selecting date
        if (newDates.length === 2) {
            searchButtonRef.current.focus();
        }
    };

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setSearchTerm(''); // Clear the search term when an option is selected
        setIsOpen(false);

        // Move focus to activity input after selecting a destination
        activityInputRef.current.focus();
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="card-body">
            <form className="js-validate">
                <div className="row nav-select d-block d-lg-flex px-3 py-3">
                    <div className="col-sm-5 d-flex">
                        <div className="dropdown destionation-dropdown" ref={dropdownRef} style={{ position: 'relative' }}>
                            <input
                                type="text"
                                className="form-control"
                                value={selectedOption ? selectedOption.label : ''}
                                placeholder="Chandigarh, IN"
                                readOnly
                                onClick={toggleDropdown}
                                ref={destinationInputRef}
                            />
                            <span className="btn btn-outline-secondary btn-destination" onClick={toggleDropdown}>▼</span>

                            {isOpen && (
                                <div className="dropdown-menu show" role="combobox" style={{ maxHeight: '351px', overflowY: 'auto', position: 'absolute', zIndex: 1000 }}>
                                    <div className="bs-searchbox">
                                        <input
                                            type="text"
                                            className="form-control"
                                            autoComplete="off"
                                            aria-label="Search for Activities or Tours"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Search for Activities or Tours"
                                        />
                                    </div>
                                    <div className="inner" role="listbox" aria-expanded={isOpen}>
                                        <ul className="inner" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                                            {filteredOptions.map((option) => (
                                                <li key={option.value}>
                                                    <a
                                                        role="option"
                                                        className="dropdown-item"
                                                        onClick={() => handleOptionClick(option)}
                                                        aria-selected={selectedOption?.value === option.value}
                                                    >
                                                        {option.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        <input
                            type="text"
                            className="form-control ml-2"
                            placeholder="Search for Activities or Tours"
                            autoComplete="off"
                            ref={activityInputRef}
                        />
                    </div>
                    <div className="col-sm-3">
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
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-primary btn-md mb-xl-0 mb-lg-1 transition-3d-hover w-100 w-md-auto w-lg-100">
                            <i className="flaticon-filter mr-2"></i>Advanced
                        </button>
                    </div>
                    <div className="col-sm-12 col-lg-3 col-xl-1dot8 align-self-lg-end text-center text-md-right">
                        <button
                            type="submit"
                            className="btn btn-primary btn-md mb-xl-0 mb-lg-1 transition-3d-hover w-100 w-md-auto w-lg-100"
                            ref={searchButtonRef}
                        >
                            <i className="flaticon-magnifying-glass mr-2"></i>Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
