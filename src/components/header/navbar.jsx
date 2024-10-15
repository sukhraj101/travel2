import React, { useState } from 'react';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuId) => {
    setActiveMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  return (
    <div id="navBar" className="navbar-collapse u-header__navbar-collapse u-header-left-aligned-nav collapse order-2 order-xl-0 pt-4 pt-xl-0 pl-xl-6">
      <ul className="navbar-nav u-header__navbar-nav">
        <li className="nav-item u-header__nav-item">
          <a
            id="homeMenu"
            className="nav-link u-header__nav-link u-header__nav-link-border"
            href="/"
          >
            Home
          </a>
        </li>
        <li
          className={`nav-item hs-has-sub-menu u-header__nav-item ${activeMenu === 'toursMenu' ? 'hs-sub-menu-opened' : ''}`}
          data-event="hover"
          data-animation-in="slideInUp"
          data-animation-out="fadeOut"
        >
          <a
            id="toursMenu"
            className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border"
            href="#"
            onClick={() => handleMenuClick('toursMenu')}
            aria-haspopup="true"
            aria-expanded={activeMenu === 'toursMenu'}
            aria-labelledby="toursSubMenu"
          >
            Tours
          </a>
          <ul
            id="toursSubMenu"
            className={`hs-sub-menu u-header__sub-menu u-header__sub-menu-rounded u-header__sub-menu-bordered hs-sub-menu-right u-header__sub-menu--spacer animated ${activeMenu === 'toursMenu' ? 'slideInUp' : 'fadeOut'}`}
            aria-labelledby="toursMenu"
            style={{ minWidth: 230, display: activeMenu === 'toursMenu' ? 'block' : 'none' }}
          >
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Honeymoon Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Adventure Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Pilgrimage Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Cultural Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Luxury Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Wildlife Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Culinary Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Eco Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Family Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Historical Tours</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">All Tours</a></li>
          </ul>
        </li>
        <li
          className={`nav-item hs-has-sub-menu u-header__nav-item ${activeMenu === 'destinationsMenu' ? 'hs-sub-menu-opened' : ''}`}
          data-event="hover"
          data-animation-in="slideInUp"
          data-animation-out="fadeOut"
        >
          <a
            id="destinationsMenu"
            className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border"
            href="#"
            onClick={() => handleMenuClick('destinationsMenu')}
            aria-haspopup="true"
            aria-expanded={activeMenu === 'destinationsMenu'}
            aria-labelledby="destinationsSubMenu"
          >
            Destinations
          </a>
          <ul
            id="destinationsSubMenu"
            className={`hs-sub-menu u-header__sub-menu u-header__sub-menu-rounded u-header__sub-menu-bordered hs-sub-menu-right u-header__sub-menu--spacer animated ${activeMenu === 'destinationsMenu' ? 'slideInUp' : 'fadeOut'}`}
            aria-labelledby="destinationsMenu"
            style={{ minWidth: 230, display: activeMenu === 'destinationsMenu' ? 'block' : 'none' }}
          >
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Paris, France</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">New York City, USA</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Tokyo, Japan</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Bali, Indonesia</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">London, England</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Sydney, Australia</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Rome, Italy</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Barcelona, Spain</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Cape Town, South Africa</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Istanbul, Turkey</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">All Destionations</a></li>
          </ul>
        </li>
        <li
          className={`nav-item hs-has-sub-menu u-header__nav-item ${activeMenu === 'activitiesMenu' ? 'hs-sub-menu-opened' : ''}`}
          data-event="hover"
          data-animation-in="slideInUp"
          data-animation-out="fadeOut"
        >
          <a
            id="activitiesMenu"
            className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border"
            href="#"
            onClick={() => handleMenuClick('activitiesMenu')}
            aria-haspopup="true"
            aria-expanded={activeMenu === 'activitiesMenu'}
            aria-labelledby="activitiesSubMenu"
          >
            Activities
          </a>
          <ul
            id="activitiesSubMenu"
            className={`hs-sub-menu u-header__sub-menu u-header__sub-menu-rounded u-header__sub-menu-bordered hs-sub-menu-right u-header__sub-menu--spacer animated ${activeMenu === 'activitiesMenu' ? 'slideInUp' : 'fadeOut'}`}
            aria-labelledby="activitiesMenu"
            style={{ minWidth: 230, display: activeMenu === 'activitiesMenu' ? 'block' : 'none' }}
          >
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Hiking</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Cycling</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Snorkeling</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Skydiving</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Rock Climbing</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Scuba Diving</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Surfing</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Camping</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Wildlife Safaris</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Zip-lining</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">All Activities</a></li>
          </ul>
        </li>
        <li
          className={`nav-item hs-has-sub-menu u-header__nav-item ${activeMenu === 'yachtMenu' ? 'hs-sub-menu-opened' : ''}`}
          data-event="hover"
          data-animation-in="slideInUp"
          data-animation-out="fadeOut"
        >
          <a
            id="yachtMenu"
            className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border"
            href="#"
            onClick={() => handleMenuClick('yachtMenu')}
            aria-haspopup="true"
            aria-expanded={activeMenu === 'yachtMenu'}
            aria-labelledby="yachtSubMenu"
          >
            Yacht
          </a>
          <ul
            id="yachtSubMenu"
            className={`hs-sub-menu u-header__sub-menu u-header__sub-menu-rounded u-header__sub-menu-bordered hs-sub-menu-right u-header__sub-menu--spacer animated ${activeMenu === 'yachtMenu' ? 'slideInUp' : 'fadeOut'}`}
            aria-labelledby="yachtMenu"
            style={{ minWidth: 230, display: activeMenu === 'yachtMenu' ? 'block' : 'none' }}
          >
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Luxury Yachts</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Catamarans</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Motor Yachts</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Sailing Yachts</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Sport Yachts</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Mega Yachts</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Charter Yachts</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Luxury Sailing Yachts</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Eco-Friendly Yachts</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">Private Yachts</a></li>
            <li><a className="nav-link u-header__sub-menu-nav-link" href="/tour-list">All Yachts</a></li>
          </ul>
        </li>
        <li className="nav-item u-header__nav-item">
          <a
            id="aboutMenu"
            className="nav-link u-header__nav-link u-header__nav-link-border"
            href="/about-us"
          >
            About Us
          </a>
        </li>
        <li className="nav-item u-header__nav-item">
          <a
            id="contactMenu"
            className="nav-link u-header__nav-link u-header__nav-link-border"
            href="/contact-us"
          >
            Contact Us
          </a>
        </li>
        <li className="nav-item u-header__nav-item">
          <a
            id="faqsMenu"
            className="nav-link u-header__nav-link u-header__nav-link-border"
            href="/faq"
          >
            FAQs
          </a>
        </li>
        <li className="nav-item u-header__nav-item">
          <a
            id="faqsMenu"
            className="nav-link u-header__nav-link u-header__nav-link-border"
            href="/404"
          >
            404
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
