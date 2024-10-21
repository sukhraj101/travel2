import React, { useState, useEffect, useRef } from 'react';

const CurrencyDropdown = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown visibility on click
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close dropdown when an item is selected
    const handleItemClick = () => {
        setDropdownVisible(false);
    };

    return (
        <div className="position-relative pl-3 language-switcher u-header__topbar-divider" ref={dropdownRef}>
            <a
                id="languageDropdownInvoker"
                className="dropdown-nav-link dropdown-nav-link-dark dropdown-toggle d-flex align-items-center ml-1 py-2"
                href="#"
                role="button"
                onClick={toggleDropdown}
                aria-expanded={dropdownVisible}
            >
                <span className="d-inline-block">EUR</span>
            </a>
            {dropdownVisible && (
                <div className="dropdown-menu mt-0 d-block">
                    <a className="dropdown-item" href="#" onClick={handleItemClick}>USD</a>
                    <a className="dropdown-item active" href="#" onClick={handleItemClick}>EUR</a>
                    <a className="dropdown-item" href="#" onClick={handleItemClick}>TUR</a>
                </div>
            )}
        </div>
    );
};

export default CurrencyDropdown;
