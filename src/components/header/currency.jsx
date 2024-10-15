import React, { useState, useEffect, useRef } from 'react';

const CurrencyDropdown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('EUR');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const currencies = ['USD', 'EUR', 'TUR'];
    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="position-relative pl-3 language-switcher u-header__topbar-divider" ref={dropdownRef}>
            <button 
                id="languageDropdownInvoker" 
                className="dropdown-nav-link dropdown-nav-link-dark dropdown-toggle d-flex align-items-center ml-1 py-2" 
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span className="d-inline-block">{selectedCurrency}</span>
            </button>

            {isOpen && (
                <div id="languageDropdown" className="dropdown-menu dropdown-unfold dropdown-menu-right mt-0" aria-labelledby="languageDropdownInvoker">
                    {currencies.map(currency => (
                        <button 
                            key={currency}
                            className={`dropdown-item ${selectedCurrency === currency ? 'active' : ''}`} 
                            onClick={() => handleCurrencyChange(currency)}
                        >
                            {currency}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrencyDropdown;
