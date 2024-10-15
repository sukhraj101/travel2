import React from 'react'

export default function Listing() {
  return (
  <>
      <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="font-size-21 font-weight-bold mb-0 text-lh-1">London: 3292 Tours found</h3>
      </div>
      <div className="mb-4">
        <ul className="nav flex-nowrap border border-radius-3 tab-nav align-items-center py-2 px-0" role="tablist">
          <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1">
            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15">Recommended</a>
          </li>
          <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15">Guest Rating</a>
          </li>
          <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15">Price: High</a>
          </li>
          <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15">Price: Low</a>
          </li>
          <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15">Distance</a>
          </li>
          <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15">Top Reviewed</a>
          </li>
        </ul>
      </div>

      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-three-example1" role="tabpanel" aria-labelledby="pills-three-example1-tab" data-target-group="groups">
          <ul className="d-block list-unstyled products-group prodcut-list-view">
            <li className="card mb-5 overflow-hidden">
              <div className="product-item__outer w-100">
                <div className="row">
                  <div className="col-md-5 col-xl-4">
                    <div className="product-item__header">
                      <div className="position-relative">
                        <img className="img-fluid min-height-230" src="https://transvelo.github.io/mytravel-html/assets/img/300x230/img1.jpg"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-xl-5 flex-horizontal-center">
                    <div className="w-100 position-relative m-4 m-md-0">
                      <div className="mb-2 pb-1">
                        <span className="badge badge-pill bg-blue-1 text-white px-4 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1">Featured</span>
                        <span className="badge badge-pill bg-pink-1 text-white px-3 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1 ml-2">%25</span>
                        <span className="green-lighter ml-md-2 d-block d-md-inline">
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                        </span>
                      </div>

                      <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                        <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span className="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <a href="/tour-single">
                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Stonehenge, Windsor Castle, and Bath from London</span>
                      </a>
                      <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                            <span className="font-weight-normal font-size-14">Breakfast</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                        </li>
                      </ul>
                      <div className="card-body p-0">
                        <a href="/tour-single" className="d-block mb-3">
                          <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                            <small className="px-1 font-size-15"> - </small>
                            <span className="text-primary font-size-14">View on map</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                    <div className="border-xl-left border-color-7">
                      <div className="ml-md-4 ml-xl-0">
                        <div className="text-center text-md-left text-xl-center d-flex flex-column mb-2 pb-1 ml-md-3 ml-xl-0">
                          <div className="d-flex flex-column mb-2">
                            <span className="font-weight-normal font-size-14 text-gray-1 mb-2 pb-1 ml-md-2 ml-xl-0">Multi-day Tours</span>
                            <span className="font-weight-normal font-size-14 text-gray-1">3 hours 45 minutes</span>
                          </div>
                          <div className="mb-0">
                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                            <span className="font-weight-bold font-size-22">$350.00</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start justify-content-xl-center">
                          <a href="/tour-single" className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="card mb-5 overflow-hidden">
              <div className="product-item__outer w-100">
                <div className="row">
                  <div className="col-md-5 col-xl-4">
                    <div className="product-item__header">
                      <div className="position-relative">
                        <img className="img-fluid min-height-230" src="https://transvelo.github.io/mytravel-html/assets/img/300x230/img2.jpg"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-xl-5 flex-horizontal-center">
                    <div className="w-100 position-relative m-4 m-md-0">
                      <div className="mb-2 pb-1">
                        <span className="badge badge-pill bg-blue-1 text-white px-4 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1">Featured</span>
                        <span className="badge badge-pill bg-pink-1 text-white px-3 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1 ml-2">%25</span>
                        <span className="green-lighter ml-md-2 d-block d-md-inline">
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                        </span>
                      </div>

                      <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                        <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span className="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <a href="../tour/tour-single-v2.html">
                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul</span>
                      </a>
                      <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                            <span className="font-weight-normal font-size-14">Breakfast</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                        </li>
                      </ul>
                      <div className="card-body p-0">
                        <a href="../tour/tour-single-v2.html" className="d-block mb-3">
                          <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                            <small className="px-1 font-size-15"> - </small>
                            <span className="text-primary font-size-14">View on map</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                    <div className="border-xl-left border-color-7">
                      <div className="ml-md-4 ml-xl-0">
                        <div className="text-center text-md-left text-xl-center d-flex flex-column mb-2 pb-1 ml-md-3 ml-xl-0">
                          <div className="d-flex flex-column mb-2">
                            <span className="font-weight-normal font-size-14 text-gray-1 mb-2 pb-1 ml-md-2 ml-xl-0">Multi-day Tours</span>
                            <span className="font-weight-normal font-size-14 text-gray-1">3 hours 45 minutes</span>
                          </div>
                          <div className="mb-0">
                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                            <span className="font-weight-bold font-size-22">$350.00</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start justify-content-xl-center">
                          <a href="/tour-single" className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="card mb-5 overflow-hidden">
              <div className="product-item__outer w-100">
                <div className="row align-items-center">
                  <div className="col-md-5 col-xl-4">
                    <div className="product-item__header">
                      <div className="position-relative">
                        <img className="img-fluid min-height-230" src="https://transvelo.github.io/mytravel-html/assets/img/300x230/img3.jpg"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-xl-5 flex-horizontal-center">
                    <div className="w-100 position-relative m-4 m-md-0">
                      <div className="mb-2 pb-1">
                        <span className="badge badge-pill bg-blue-1 text-white px-4 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1">Featured</span>
                        <span className="badge badge-pill bg-pink-1 text-white px-3 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1 ml-2">%25</span>
                        <span className="green-lighter ml-md-2 d-block d-md-inline">
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                        </span>
                      </div>

                      <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                        <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span className="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <a href="/tour-single">
                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Two Capitals Tour of 7 days and 6 nights From Moscow</span>
                      </a>
                      <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                            <span className="font-weight-normal font-size-14">Breakfast</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                        </li>
                      </ul>
                      <div className="card-body p-0">
                        <a href="/tour-single" className="d-block mb-3">
                          <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                            <small className="px-1 font-size-15"> - </small>
                            <span className="text-primary font-size-14">View on map</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                    <div className="border-xl-left border-color-7">
                      <div className="ml-md-4 ml-xl-0">
                        <div className="text-center text-md-left text-xl-center d-flex flex-column mb-2 pb-1 ml-md-3 ml-xl-0">
                          <div className="d-flex flex-column mb-2">
                            <span className="font-weight-normal font-size-14 text-gray-1 mb-2 pb-1 ml-md-2 ml-xl-0">Multi-day Tours</span>
                            <span className="font-weight-normal font-size-14 text-gray-1">3 hours 45 minutes</span>
                          </div>
                          <div className="mb-0">
                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                            <span className="font-weight-bold font-size-22">$350.00</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start justify-content-xl-center">
                          <a href="/tour-single" className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="card mb-5 overflow-hidden">
              <div className="product-item__outer w-100">
                <div className="row align-items-center">
                  <div className="col-md-5 col-xl-4">
                    <div className="product-item__header">
                      <div className="position-relative">
                        <img className="img-fluid min-height-230" src="https://transvelo.github.io/mytravel-html/assets/img/300x230/img1.jpg"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-xl-5 flex-horizontal-center">
                    <div className="w-100 position-relative m-4 m-md-0">
                      <div className="mb-2 pb-1">
                        <span className="badge badge-pill bg-blue-1 text-white px-4 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1">Featured</span>
                        <span className="badge badge-pill bg-pink-1 text-white px-3 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1 ml-2">%25</span>
                        <span className="green-lighter ml-md-2 d-block d-md-inline">
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                        </span>
                      </div>

                      <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                        <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span className="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <a href="../tour/tour-single-v2.html">
                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Two Small-Group Blue Mountains Day Trip from Sydney with River Cruise</span>
                      </a>
                      <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                            <span className="font-weight-normal font-size-14">Breakfast</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                        </li>
                      </ul>
                      <div className="card-body p-0">
                        <a href="../tour/tour-single-v2.html" className="d-block mb-3">
                          <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                            <small className="px-1 font-size-15"> - </small>
                            <span className="text-primary font-size-14">View on map</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                    <div className="border-xl-left border-color-7">
                      <div className="ml-md-4 ml-xl-0">
                        <div className="text-center text-md-left text-xl-center d-flex flex-column mb-2 pb-1 ml-md-3 ml-xl-0">
                          <div className="d-flex flex-column mb-2">
                            <span className="font-weight-normal font-size-14 text-gray-1 mb-2 pb-1 ml-md-2 ml-xl-0">Multi-day Tours</span>
                            <span className="font-weight-normal font-size-14 text-gray-1">3 hours 45 minutes</span>
                          </div>
                          <div className="mb-0">
                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                            <span className="font-weight-bold font-size-22">$350.00</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start justify-content-xl-center">
                          <a href="/tour-single" className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="card mb-5 overflow-hidden">
              <div className="product-item__outer w-100">
                <div className="row align-items-center">
                  <div className="col-md-5 col-xl-4">
                    <div className="product-item__header">
                      <div className="position-relative">
                        <img className="img-fluid min-height-230" src="https://transvelo.github.io/mytravel-html/assets/img/300x230/img5.jpg"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-xl-5 flex-horizontal-center">
                    <div className="w-100 position-relative m-4 m-md-0">
                      <div className="mb-2 pb-1">
                        <span className="badge badge-pill bg-blue-1 text-white px-4 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1">Featured</span>
                        <span className="badge badge-pill bg-pink-1 text-white px-3 py-1 font-size-14 font-weight-normal text-lh-1dot6 mb-1 ml-2">%25</span>
                        <span className="green-lighter ml-md-2 d-block d-md-inline">
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                          <small className="fas fa-star font-size-11"></small>
                        </span>
                      </div>

                      <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                        <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span className="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <a href="/tour-single">
                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul</span>
                      </a>
                      <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                            <span className="font-weight-normal font-size-14">Breakfast</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                        </li>
                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                        </li>
                      </ul>
                      <div className="card-body p-0">
                        <a href="/tour-single" className="d-block mb-3">
                          <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                            <small className="px-1 font-size-15"> - </small>
                            <span className="text-primary font-size-14">View on map</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                    <div className="border-xl-left border-color-7">
                      <div className="ml-md-4 ml-xl-0">
                        <div className="text-center text-md-left text-xl-center d-flex flex-column mb-2 pb-1 ml-md-3 ml-xl-0">
                          <div className="d-flex flex-column mb-2">
                            <span className="font-weight-normal font-size-14 text-gray-1 mb-2 pb-1 ml-md-2 ml-xl-0">Multi-day Tours</span>
                            <span className="font-weight-normal font-size-14 text-gray-1">3 hours 45 minutes</span>
                          </div>
                          <div className="mb-0">
                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                            <span className="font-weight-bold font-size-22">$350.00</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start justify-content-xl-center">
                          <a href="/tour-single" className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-md-left font-size-14 mb-3 text-lh-1">Showing 1–15</div>
          <nav aria-label="Page navigation">
          <ul className="list-pagination-1 pagination border border-color-4 rounded-sm overflow-auto overflow-xl-visible justify-content-md-center align-items-center py-2 mb-0">
              <li className="page-item">
              <a className="page-link border-right rounded-0 text-gray-5" href="#" aria-label="Previous">
                <i className="flaticon-left-direction-arrow font-size-10 font-weight-bold"></i>
                <span className="sr-only">Previous</span>
              </a>
              </li>
              <li className="page-item"><a className="page-link font-size-14" href="#">1</a></li>
              <li className="page-item"><a className="page-link font-size-14 active" href="#">2</a></li>
              <li className="page-item"><a className="page-link font-size-14" href="#">3</a></li>
              <li className="page-item"><a className="page-link font-size-14" href="#">4</a></li>
              <li className="page-item"><a className="page-link font-size-14" href="#">5</a></li>
              <li className="page-item disabled"><a className="page-link font-size-14" href="#">...</a></li>
              <li className="page-item"><a className="page-link font-size-14" href="#">66</a></li>
              <li className="page-item"><a className="page-link font-size-14" href="#">67</a></li>
              <li className="page-item">
              <a className="page-link border-left rounded-0 text-gray-5" href="#" aria-label="Next">
                  <i className="flaticon-right-thin-chevron font-size-10 font-weight-bold"></i>
                  <span className="sr-only">Next</span>
              </a>
              </li>
          </ul>
      </nav>
    </>
  )
}
