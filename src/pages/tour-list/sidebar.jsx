// Sidebar.js
import React from 'react';
import PriceRangeSlider from './price';

function Sidebar() {
  return (
    <>
        <div className="navbar-expand-lg navbar-expand-lg-collapse-block">
            <button className="btn d-lg-none mb-5 p-0 collapsed" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                <i className="far fa-caret-square-down text-primary font-size-20 card-btn-arrow ml-0"></i>
                <span className="text-primary ml-2">Sidebar</span>
            </button>
            <div id="sidebar" className="collapse navbar-collapse">
                <div className="mb-6 w-100">
                    <div className="mb-4 border">
                        <a href="/map-listing" className="border border-color-1 rounded-xs c75185f3e8-map">
                            <div className='c75185f3e8-wrap'>
                                <div className="c75185f3e8">
                                    <span className="d0438f59a5" data-testid="map-entry-pin-icon">
                                        <span className="e75db87696">
                                            <span className="b56c581c9f"></span>
                                            <svg viewBox="-1 -1 26 32" className="b2873bf9cb">
                                                <path d="M24 12.4286C24 19.2927 12 29 12 29C12 29 0 19.2927 0 12.4286C0 5.56446 5.37258 0 12 0C18.6274 0 24 5.56446 24 12.4286Z"></path>
                                            </svg>
                                        </span>
                                        <svg className="ae0a00836a" viewBox="0 0 12 4">
                                            <ellipse cx="6" cy="2" rx="6" ry="2"></ellipse>
                                        </svg>
                                    </span>
                                </div>
                                <button type="submit" class="btn btn-primary btn-sm transition-3d-hover w-md-auto mt-3">Show on map</button>
                            </div>
                            <img src="../../assets/img/map-markers/map-photo.png" alt="" width="100%"/>
                        </a>
                    </div>
                    <PriceRangeSlider />
                    <div className="sidenav border border-color-8 rounded-xs">
                        <div id="cityCategoryAccordion" className="accordion rounded-0 shadow-none border-top">
                            <div className="border-0">
                                <div className="card-collapse" id="cityCategoryHeadingOne">
                                    <h3 className="mb-0">
                                        <button type="button" className="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#cityCategoryOne" aria-expanded="false" aria-controls="cityCategoryOne">
                                            <span className="row align-items-center">
                                                <span className="col-9">
                                                    <span className="font-weight-bold font-size-17 text-dark mb-3">City</span>
                                                </span>
                                                <span className="col-3 text-right">
                                                    <span className="card-btn-arrow">
                                                        <span className="fas fa-chevron-down small"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
                                    </h3>
                                </div>
                                <div id="cityCategoryOne" className="collapse show" aria-labelledby="cityCategoryHeadingOne" data-parent="#cityCategoryAccordion">
                                    <div className="card-body pt-0 mt-1 px-5 pb-4">
                                        <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandamsterdam"/>
                                                <label className="custom-control-label" for="brandamsterdam">Amsterdam</label>
                                            </div>
                                            <span>749</span>
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandrotterdam"/>
                                                <label className="custom-control-label" for="brandrotterdam">Rotterdam</label>
                                            </div>
                                            <span>630</span>
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandvalkenburg"/>
                                                <label className="custom-control-label" for="brandvalkenburg">Valkenburg</label>
                                            </div>
                                            <span>58</span>
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandeindhoven"/>
                                                <label className="custom-control-label" for="brandeindhoven">Eindhoven</label>
                                            </div>
                                            <span>29</span>
                                        </div>

                                        <div className="collapse" id="collapseBrand3">
                                            <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                                <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="gucci"/>
                                                <label className="custom-control-label" for="gucci">Gucci</label>
                                                </div>
                                                <span>5</span>
                                            </div>
                                            <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="mango"/>
                                                    <label className="custom-control-label" for="mango">Mango</label>
                                                </div>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <a className="link link-collapse small font-size-1 mt-2" data-toggle="collapse" href="#collapseBrand3" role="button" aria-expanded="false" aria-controls="collapseBrand3">
                                            <span className="link-collapse__default font-size-14">Show all 25</span>
                                            <span className="link-collapse__active font-size-14">Show less</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="cityCategoryAccordion" className="accordion rounded-0 shadow-none border-top">
                            <div className="border-0">
                                <div className="card-collapse" id="cityCategoryHeadingOne">
                                    <h3 className="mb-0">
                                        <button type="button" className="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#cityCategoryOne" aria-expanded="false" aria-controls="cityCategoryOne">
                                            <span className="row align-items-center">
                                                <span className="col-9">
                                                    <span className="font-weight-bold font-size-17 text-dark mb-3">Facilities</span>
                                                </span>
                                                <span className="col-3 text-right">
                                                    <span className="card-btn-arrow">
                                                        <span className="fas fa-chevron-down small"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
                                    </h3>
                                </div>
                                <div id="cityCategoryOne" className="collapse show" aria-labelledby="cityCategoryHeadingOne" data-parent="#cityCategoryAccordion">
                                    <div className="card-body pt-0 mt-1 px-5 pb-4">
                                        <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandamsterdam"/>
                                                <label className="custom-control-label" for="brandamsterdam">Parking</label>
                                            </div>
                                            <span>749</span>
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandrotterdam"/>
                                                <label className="custom-control-label" for="brandrotterdam">Restaurant</label>
                                            </div>
                                            <span>630</span>
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandvalkenburg"/>
                                                <label className="custom-control-label" for="brandvalkenburg">Pet friendly</label>
                                            </div>
                                            <span>58</span>
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandeindhoven"/>
                                                <label className="custom-control-label" for="brandeindhoven">Room service</label>
                                            </div>
                                            <span>29</span>
                                        </div>

                                        <div className="collapse" id="collapseBrand3">
                                            <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                                <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="gucci"/>
                                                <label className="custom-control-label" for="gucci">Gucci</label>
                                                </div>
                                                <span>5</span>
                                            </div>
                                            <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="mango"/>
                                                    <label className="custom-control-label" for="mango">Mango</label>
                                                </div>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <a className="link link-collapse small font-size-1 mt-2" data-toggle="collapse" href="#collapseBrand3" role="button" aria-expanded="false" aria-controls="collapseBrand3">
                                            <span className="link-collapse__default font-size-14">Show all 25</span>
                                            <span className="link-collapse__active font-size-14">Show less</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="shopRatingAccordion" className="accordion rounded-0 shadow-none border-bottom">
                            <div className="border-0">
                                <div className="card-collapse" id="shopCategoryHeadingOne">
                                    <h3 className="mb-0">
                                        <button type="button" className="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#shopRatingOne" aria-expanded="false" aria-controls="shopRatingOne">
                                            <span className="row align-items-center">
                                                <span className="col-9">
                                                    <span className="d-block font-size-lg-15 font-size-17 font-weight-bold text-dark text-lh-1dot4">Star Ratings</span>
                                                </span>
                                                <span className="col-3 text-right">
                                                    <span className="card-btn-arrow">
                                                        <span className="fas fa-chevron-down small"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
                                    </h3>
                                </div>
                                <div id="shopRatingOne" className="collapse show" aria-labelledby="shopCategoryHeadingOne" data-parent="#shopRatingAccordion">
                                    <div className="card-body pt-0 mt-1 px-5">
                                        <div className="form-group font-size-14 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandAdidas"/>
                                                <label className="custom-control-label text-lh-inherit text-color-1" for="brandAdidas">
                                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                                        <div className="green-lighter ml-1 letter-spacing-2">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group font-size-14 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandNewBalance"/>
                                                <label className="custom-control-label text-lh-inherit text-color-1" for="brandNewBalance">
                                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                                        <div className="green-lighter ml-1 letter-spacing-2">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group font-size-14 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandNike"/>
                                                <label className="custom-control-label text-lh-inherit text-color-1" for="brandNike">
                                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                                        <div className="green-lighter ml-1 letter-spacing-2">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group font-size-14 text-lh-md text-secondary mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brandFredPerry"/>
                                                <label className="custom-control-label text-lh-inherit text-color-1" for="brandFredPerry">
                                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                                        <div className="green-lighter ml-1 letter-spacing-2">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Sidebar;