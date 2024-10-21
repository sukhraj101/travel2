import React, { useState, useRef, useEffect } from 'react';
import MultiDatePicker from 'react-multi-date-picker';
import { Button, Image } from 'react-bootstrap';

export default function SearchTour() {
    const [dates, setDates] = useState([null, null]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [showCities, setShowCities] = useState('');
    const dropdownRef = useRef(null);
    const destinationInputRef = useRef(null);
    const activityInputRef = useRef(null);
    const datePickerRef = useRef(null);
    const searchButtonRef = useRef(null);
    const [selectedCity, setSelectedCity] = useState('');

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
            setIsOpen(false);
        }

        if (newDates.length === 2) {
            datePickerRef.current.closeCalendar();
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
        // Update the destination input field with the selected option label
        destinationInputRef.current.value = option.label; 
        // Move focus to activity input after selecting a destination
        activityInputRef.current.focus();
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleActivityInputFocus = (val) => {
        setShowCities(val);
    };

    const handleActivityInputBlur = (val) => {
        setShowCities(val);
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

    const cities = [
        {
            id: 8105,
            name: 'Sharjah',
            count: 323,
            imageUrl: '//pix6.agoda.net/geo/city/8105/1_8105_02.jpg?ca=6&ce=1&s=48x48&ar=1x1',
            description: 'culture, museum & arts',
        },
        {
            id: 2994,
            name: 'Dubai',
            count: 19464,
            imageUrl: '//pix6.agoda.net/geo/city/2994/0c2aae36625e3e958684d0d4ae5b12d0.jpg?ce=0&s=48x48&ar=1x1',
            description: 'shopping, beaches',
        },
        {
            id: 4626,
            name: 'Fujairah',
            count: 153,
            imageUrl: '//pix6.agoda.net/geo/city/4626/0fdc4eb62f66c72e3c1e41d7f55f274d.jpg?ce=0&s=48x48&ar=1x1',
            description: 'nature, sightseeing',
        },
    ];

    return (
        <div className="card-body">
            <form action="/tour-list">
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

                        <div className='search-text-cities-wrap'>
                            <input
                                type="text"
                                className="form-control ml-2"
                                placeholder="Search for Activities or Tours"
                                autoComplete="off"
                                ref={activityInputRef}
                                onFocus={handleActivityInputFocus}
                                onBlur={handleActivityInputBlur}
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                            />

                            {showCities && (
                                <div className="search-text-cities">
                                    <span>Popular cities in {selectedOption ? selectedOption.label : 'United Arab Emirates'}</span>
                                    {cities.map((city) => (
                                        <div
                                            key={city.id}
                                            variant="outline-primary"
                                            id="destination_suggestion_card"
                                            className="w-100 d-flex align-items-center search-text-citie-item"
                                            onClick={() => {
                                                setSelectedCity(city.name);
                                                datePickerRef.current.openCalendar();
                                                setShowCities(false);
                                            }}
                                        >
                                            <Image
                                                src={city.imageUrl}
                                                alt={city.name}
                                                rounded
                                                style={{ width: '56px', height: '56px', marginRight: '15px', marginTop: '0px' }}
                                            />
                                            <div className="text-start flex-grow-1">
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-0">{city.name}</p>
                                                    <p className="mb-0 city-count">({city.count})</p>
                                                </div>
                                                <p className="mb-0 small">{city.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

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
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
