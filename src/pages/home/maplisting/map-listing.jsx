import React from 'react'

export default function MapListing() {
  return (
    <>
        <div className="border-bottom py-3">
            <div className="container-fluid">
                <div className="d-block d-md-flex flex-horizontal-center justify-content-between">
                    <h3 className="font-size-21 font-weight-bold mb-0 text-lh-1 mr-2 mb-3 mb-md-0 flex-shrink-0">London: 3292 hotels found</h3>
                    <ul className="nav flex-nowrap tab-nav align-items-center py-2 px-0" role="tablist">
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
            </div>
        </div>
        <div className="map-collapse-hidden mb-5">
            <div className="row no-gutters">
                <div className="col-lg-7 col-xl-8 col-wd-6 order-1 order-lg-0">
                    <div className="pt-4 px-4 pt-xl-4 px-xl-4 js-scrollbar height-100vh-main mCustomScrollbar _mCS_2 mCS-autoHide" style={{ position: 'relative', overflow: 'auto' }}>
                        <ul className="d-block list-unstyled products-group prodcut-list-view ">
                            <li className="card mb-4 overflow-hidden">
                                <div className="product-item__outer w-100">
                                    <div className="row">
                                        <div className="col-md-5 col-xl-3dot5">
                                            <div className="product-item__header">
                                                <div className="position-relative">
                                                    <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3 slick-initialized slick-slider slick-dotted" data-slides-show="1" data-slides-scroll="1" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right" data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"><div className="js-prev d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left slick-arrow slick-disabled" aria-disabled="true"></div>
                                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '1434px', transform: 'translate3d(0px, 0px, 0px)', }}><div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" style={{ width: '209px', height: 'auto' }}>
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="0"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img58.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img59.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img60.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide03" aria-describedby="slick-slide-control03">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img61.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide04" aria-describedby="slick-slide-control04">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img62.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide05" aria-describedby="slick-slide-control05">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img63.jpg" alt="Image-Description"/></a>
                                                        </div></div>
                                                    </div>
                                                    <div className="js-next d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right slick-arrow" aria-disabled="false"></div><ul className="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0" role="tablist"><li className="slick-active slick-current" role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-xl-6 flex-horizontal-center">
                                            <div className="w-100 position-relative m-4 m-md-0">
                                                <div className="mb-1 pb-1">
                                                    <span className="badge badge-orange text-white rounded-xs font-size-13 py-1 p-xl-2">Limited Time Offer</span>
                                                    <span className="green-lighter ml-2">
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                    </span>
                                                </div>

                                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                        <span className="flaticon-heart-1 font-size-20"></span>
                                                    </button>
                                                </div>
                                                <a href="/tour-single">
                                                    <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                </a>
                                                <div className="card-body p-0">
                                                    <a href="/tour-single" className="d-block mb-3">
                                                        <div className="d-md-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                            <small className="px-1 font-size-15"> - </small>
                                                            <span className="text-primary font-size-14">View on map</span>
                                                        </div>
                                                    </a>
                                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                                        </li>
                                                            </ul>
                                                    <ul className="list-unstyled d-md-flex">
                                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                                        </li>
                                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md col-xl-2dot5 align-self-center py-4 py-xl-0 border-top border-lg-top-0">
                                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pl-xl-1">
                                                <div className="ml-xl-1">
                                                    <div className="mb-xl-7">
                                                        <div className="mb-0">
                                                            <div className="my-xl-1">
                                                                <div className="mb-2">
                                                                    <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="mr-1 font-size-14 text-gray-1">From</div>
                                                        <span className="font-weight-bold">£350.00</span>
                                                        <span className="font-size-14 text-gray-1"> / night</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="card mb-4 overflow-hidden">
                                <div className="product-item__outer w-100">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-xl-3dot5">
                                            <div className="product-item__header">
                                                <div className="position-relative">
                                                        <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3 slick-initialized slick-slider slick-dotted" data-slides-show="1" data-slides-scroll="1" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right" data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"><div className="js-prev d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left slick-arrow slick-disabled" aria-disabled="true"></div>
                                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '1434px', transform: 'translate3d(0px, 0px, 0px)', }}><div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide10" aria-describedby="slick-slide-control10" style={{ width: '209px', height: 'auto' }}>
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="0"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img60.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide11" aria-describedby="slick-slide-control11">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img11.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide12" aria-describedby="slick-slide-control12">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img10.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide13" aria-describedby="slick-slide-control13">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img12.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide14" aria-describedby="slick-slide-control14">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img9.jpg" alt="Image-Description"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide15" aria-describedby="slick-slide-control15">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img58.jpg" alt="Image-Description"/></a>
                                                        </div></div>
                                                    </div>
                                                    <div className="js-next d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right slick-arrow" aria-disabled="false"></div><ul className="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0" role="tablist"><li className="slick-active slick-current" role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-xl-6 flex-horizontal-center">
                                            <div className="w-100 position-relative m-4 m-md-0">
                                                <div className="mb-1 pb-1 green-lighter">
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                    
                                                </div>

                                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                        <span className="flaticon-heart-1 font-size-20"></span>
                                                    </button>
                                                </div>
                                                <a href="/tour-single">
                                                    <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Park Avenue Baker Street London</span>
                                                </a>
                                                <div className="card-body p-0">
                                                    <a href="/tour-single" className="d-block mb-3">
                                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                            <small className="px-1 font-size-15"> - </small>
                                                            <span className="text-primary font-size-14">View on map</span>
                                                        </div>
                                                    </a>
                                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                                        </li>
                                                            </ul>
                                                    <ul className="list-unstyled d-md-flex">
                                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                                        </li>
                                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-xl-2dot5 align-self-center py-4 py-xl-0 border-top border-lg-top-0">
                                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pl-xl-1">
                                                <div className="ml-xl-1">
                                                    <div className="mb-xl-7">
                                                        <div className="mb-0">
                                                            <div className="my-xl-1">
                                                                <div className="mb-2">
                                                                    <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="mr-1 font-size-14 text-gray-1">From</div>
                                                        <span className="font-weight-bold">£350.00</span>
                                                        <span className="font-size-14 text-gray-1"> / night</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="card mb-4 overflow-hidden">
                                <div className="product-item__outer w-100">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-xl-3dot5">
                                            <div className="product-item__header">
                                                <div className="position-relative">
                                                        <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3 slick-initialized slick-slider slick-dotted" data-slides-show="1" data-slides-scroll="1" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right" data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"><div className="js-prev d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left slick-arrow slick-disabled" aria-disabled="true"></div>
                                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '1434px', transform: 'translate3d(0px, 0px, 0px)', }}><div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20" style={{ width: '209px', height: 'auto' }}>
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="0"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img63.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img61.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img59.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide23" aria-describedby="slick-slide-control23">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img62.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide24" aria-describedby="slick-slide-control24">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img60.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide25" aria-describedby="slick-slide-control25">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img58.jpg"/></a>
                                                        </div></div>
                                                    </div>
                                                    <div className="js-next d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right slick-arrow" aria-disabled="false"></div><ul className="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0" role="tablist"><li className="slick-active slick-current" role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-xl-6 flex-horizontal-center">
                                            <div className="w-100 position-relative m-4 m-md-0">
                                                <div className="mb-1 pb-1">
                                                    <span className="green-lighter ml-2">
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                    </span>
                                                </div>

                                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                        <span className="flaticon-heart-1 font-size-20"></span>
                                                    </button>
                                                </div>
                                                <a href="../hotels/hotel-single-v3.html">
                                                    <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">New Road Hotel</span>
                                                </a>
                                                <div className="card-body p-0">
                                                    <a href="../hotels/hotel-single-v3.html" className="d-block mb-3">
                                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                            <small className="px-1 font-size-15"> - </small>
                                                            <span className="text-primary font-size-14">View on map</span>
                                                        </div>
                                                    </a>
                                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                                        </li>
                                                            </ul>
                                                    <ul className="list-unstyled d-md-flex">
                                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                                        </li>
                                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-xl-2dot5 align-self-center py-4 py-xl-0 border-top border-lg-top-0">
                                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pl-xl-1">
                                                <div className="ml-xl-1">
                                                    <div className="mb-xl-7">
                                                        <div className="mb-0">
                                                            <div className="my-xl-1">
                                                                <div className="mb-2">
                                                                    <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="mr-1 font-size-14 text-gray-1">From</div>
                                                        <span className="font-weight-bold">£350.00</span>
                                                        <span className="font-size-14 text-gray-1"> / night</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="card mb-4 overflow-hidden">
                                <div className="product-item__outer w-100">
                                    <div className="row">
                                        <div className="col-md-5 col-xl-3dot5">
                                            <div className="product-item__header">
                                                <div className="position-relative">
                                                    <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3 slick-initialized slick-slider slick-dotted" data-slides-show="1" data-slides-scroll="1" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right" data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"><div className="js-prev d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left slick-arrow slick-disabled" aria-disabled="true"></div>
                                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '1434px', transform: 'translate3d(0px, 0px, 0px)', }}><div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30" style={{ width: '209px', height: 'auto' }}>
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="0"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img58.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide31" aria-describedby="slick-slide-control31">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img59.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide32" aria-describedby="slick-slide-control32">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img60.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide33" aria-describedby="slick-slide-control33">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img61.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide34" aria-describedby="slick-slide-control34">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img62.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide35" aria-describedby="slick-slide-control35">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img63.jpg"/></a>
                                                        </div></div>
                                                    </div>
                                                    <div className="js-next d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right slick-arrow" aria-disabled="false"></div><ul className="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0" role="tablist"><li className="slick-active slick-current" role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-xl-6 flex-horizontal-center">
                                            <div className="w-100 position-relative m-4 m-md-0">
                                                <div className="mb-1 pb-1">
                                                    <span className="badge badge-orange text-white rounded-xs font-size-13 py-1 p-xl-2">Limited Time Offer</span>
                                                    <span className="green-lighter ml-2">
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                    </span>
                                                </div>

                                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                        <span className="flaticon-heart-1 font-size-20"></span>
                                                    </button>
                                                </div>
                                                <a href="/tour-single">
                                                    <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                </a>
                                                <div className="card-body p-0">
                                                    <a href="/tour-single" className="d-block mb-3">
                                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                            <small className="px-1 font-size-15"> - </small>
                                                            <span className="text-primary font-size-14">View on map</span>
                                                        </div>
                                                    </a>
                                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                                        </li>
                                                            </ul>
                                                    <ul className="list-unstyled d-md-flex">
                                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                                        </li>
                                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-xl-2dot5 align-self-center py-4 py-xl-0 border-top border-lg-top-0">
                                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pl-xl-1">
                                                <div className="ml-xl-1">
                                                    <div className="mb-xl-7">
                                                        <div className="mb-0">
                                                            <div className="my-xl-1">
                                                                <div className="mb-2">
                                                                    <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="mr-1 font-size-14 text-gray-1">From</div>
                                                        <span className="font-weight-bold">£350.00</span>
                                                        <span className="font-size-14 text-gray-1"> / night</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="card mb-4 overflow-hidden">
                                <div className="product-item__outer w-100">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-xl-3dot5">
                                            <div className="product-item__header">
                                                <div className="position-relative">
                                                        <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3 slick-initialized slick-slider slick-dotted" data-slides-show="1" data-slides-scroll="1" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right" data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"><div className="js-prev d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left slick-arrow slick-disabled" aria-disabled="true"></div>
                                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '1434px', transform: 'translate3d(0px, 0px, 0px)', }}><div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide40" aria-describedby="slick-slide-control40" style={{ width: '209px', height: 'auto' }}>
                                                            <a href="../hotels-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="0"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img60.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide41" aria-describedby="slick-slide-control41">
                                                            <a href="../hotels-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img11.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide42" aria-describedby="slick-slide-control42">
                                                            <a href="../hotels-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img10.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide43" aria-describedby="slick-slide-control43">
                                                            <a href="../hotels-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img12.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide44" aria-describedby="slick-slide-control44">
                                                            <a href="../hotels-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img9.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide45" aria-describedby="slick-slide-control45">
                                                            <a href="../hotels-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img58.jpg"/></a>
                                                        </div></div>
                                                    </div>
                                                    <div className="js-next d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right slick-arrow" aria-disabled="false"></div><ul className="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0" role="tablist"><li className="slick-active slick-current" role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-xl-6 flex-horizontal-center">
                                            <div className="w-100 position-relative m-4 m-md-0">
                                                <div className="mb-1 pb-1 green-lighter">
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                    
                                                </div>

                                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                        <span className="flaticon-heart-1 font-size-20"></span>
                                                    </button>
                                                </div>
                                                <a href="../hotels-single-v3.html">
                                                    <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Park Avenue Baker Street London</span>
                                                </a>
                                                <div className="card-body p-0">
                                                    <a href="../hotels-single-v3.html" className="d-block mb-3">
                                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                            <small className="px-1 font-size-15"> - </small>
                                                            <span className="text-primary font-size-14">View on map</span>
                                                        </div>
                                                    </a>
                                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                                        </li>
                                                            </ul>
                                                    <ul className="list-unstyled d-md-flex">
                                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                                        </li>
                                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-xl-2dot5 align-self-center py-4 py-xl-0 border-top border-lg-top-0">
                                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pl-xl-1">
                                                <div className="ml-xl-1">
                                                    <div className="mb-xl-7">
                                                        <div className="mb-0">
                                                            <div className="my-xl-1">
                                                                <div className="mb-2">
                                                                    <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="mr-1 font-size-14 text-gray-1">From</div>
                                                        <span className="font-weight-bold">£350.00</span>
                                                        <span className="font-size-14 text-gray-1"> / night</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="card mb-4 overflow-hidden">
                                <div className="product-item__outer w-100">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-xl-3dot5">
                                            <div className="product-item__header">
                                                <div className="position-relative">
                                                        <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3 slick-initialized slick-slider slick-dotted" data-slides-show="1" data-slides-scroll="1" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right" data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"><div className="js-prev d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left slick-arrow slick-disabled" aria-disabled="true"></div>
                                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '1434px', transform: 'translate3d(0px, 0px, 0px)', }}><div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide50" aria-describedby="slick-slide-control50" style={{ width: '209px', height: 'auto' }}>
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="0"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img63.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide51" aria-describedby="slick-slide-control51">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img61.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide52" aria-describedby="slick-slide-control52">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img59.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide53" aria-describedby="slick-slide-control53">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img62.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide54" aria-describedby="slick-slide-control54">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img60.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide55" aria-describedby="slick-slide-control55">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img58.jpg"/></a>
                                                        </div></div>
                                                    </div>
                                                    <div className="js-next d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right slick-arrow" aria-disabled="false"></div><ul className="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0" role="tablist"><li className="slick-active slick-current" role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-xl-6 flex-horizontal-center">
                                            <div className="w-100 position-relative m-4 m-md-0">
                                                <div className="mb-1 pb-1">
                                                    <span className="green-lighter ml-2">
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                    </span>
                                                </div>

                                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                        <span className="flaticon-heart-1 font-size-20"></span>
                                                    </button>
                                                </div>
                                                <a href="/tour-single">
                                                    <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">New Road Hotel</span>
                                                </a>
                                                <div className="card-body p-0">
                                                    <a href="/tour-single" className="d-block mb-3">
                                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                            <small className="px-1 font-size-15"> - </small>
                                                            <span className="text-primary font-size-14">View on map</span>
                                                        </div>
                                                    </a>
                                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                                        </li>
                                                            </ul>
                                                    <ul className="list-unstyled d-md-flex">
                                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                                        </li>
                                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-xl-2dot5 align-self-center py-4 py-xl-0 border-top border-lg-top-0">
                                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pl-xl-1">
                                                <div className="ml-xl-1">
                                                    <div className="mb-xl-7">
                                                        <div className="mb-0">
                                                            <div className="my-xl-1">
                                                                <div className="mb-2">
                                                                    <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="mr-1 font-size-14 text-gray-1">From</div>
                                                        <span className="font-weight-bold">£350.00</span>
                                                        <span className="font-size-14 text-gray-1"> / night</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="card mb-4 overflow-hidden">
                                <div className="product-item__outer w-100">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-xl-3dot5">
                                            <div className="product-item__header">
                                                <div className="position-relative">
                                                    <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3 slick-initialized slick-slider slick-dotted" data-slides-show="1" data-slides-scroll="1" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right" data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"><div className="js-prev d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left slick-arrow slick-disabled" aria-disabled="true"></div>
                                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '1434px', transform: 'translate3d(0px, 0px, 0px)', }}><div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide60" aria-describedby="slick-slide-control60" style={{ width: '209px', height: 'auto' }}>
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="0"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img58.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img59.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide62" aria-describedby="slick-slide-control62">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img60.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide63" aria-describedby="slick-slide-control63">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img61.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide64" aria-describedby="slick-slide-control64">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img62.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide65" aria-describedby="slick-slide-control65">
                                                            <a href="../hotels/hotel-single-v3.html" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img63.jpg"/></a>
                                                        </div></div>
                                                    </div>
                                                    <div className="js-next d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right slick-arrow" aria-disabled="false"></div><ul className="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0" role="tablist"><li className="slick-active slick-current" role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-xl-6 flex-horizontal-center">
                                            <div className="w-100 position-relative m-4 m-md-0">
                                                <div className="mb-1 pb-1">
                                                    <span className="badge badge-orange text-white rounded-xs font-size-13 py-1 p-xl-2">Limited Time Offer</span>
                                                    <span className="green-lighter ml-2">
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                    </span>
                                                </div>

                                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                        <span className="flaticon-heart-1 font-size-20"></span>
                                                    </button>
                                                </div>
                                                <a href="../hotels/hotel-single-v3.html">
                                                    <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                </a>
                                                <div className="card-body p-0">
                                                    <a href="../hotels/hotel-single-v3.html" className="d-block mb-3">
                                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                            <small className="px-1 font-size-15"> - </small>
                                                            <span className="text-primary font-size-14">View on map</span>
                                                        </div>
                                                    </a>
                                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                                        </li>
                                                            </ul>
                                                    <ul className="list-unstyled d-md-flex">
                                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                                        </li>
                                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-xl-2dot5 align-self-center py-4 py-xl-0 border-top border-lg-top-0">
                                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pl-xl-1">
                                                <div className="ml-xl-1">
                                                    <div className="mb-xl-7">
                                                        <div className="mb-0">
                                                            <div className="my-xl-1">
                                                                <div className="mb-2">
                                                                    <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="mr-1 font-size-14 text-gray-1">From</div>
                                                        <span className="font-weight-bold">£350.00</span>
                                                        <span className="font-size-14 text-gray-1"> / night</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="card mb-4 overflow-hidden">
                                <div className="product-item__outer w-100">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-xl-3dot5">
                                            <div className="product-item__header">
                                                <div className="position-relative">
                                                        <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3 slick-initialized slick-slider slick-dotted" data-slides-show="1" data-slides-scroll="1" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right" data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"><div className="js-prev d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left slick-arrow slick-disabled" aria-disabled="true"></div>
                                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '1434px', transform: 'translate3d(0px, 0px, 0px)', }}><div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide70" aria-describedby="slick-slide-control70" style={{ width: '209px', height: 'auto' }}>
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="0"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img63.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide71" aria-describedby="slick-slide-control71">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img61.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide72" aria-describedby="slick-slide-control72">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img59.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide73" aria-describedby="slick-slide-control73">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img62.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide74" aria-describedby="slick-slide-control74">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img60.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide75" aria-describedby="slick-slide-control75">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img58.jpg"/></a>
                                                        </div></div>
                                                    </div>
                                                    <div className="js-next d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right slick-arrow" aria-disabled="false"></div><ul className="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0" role="tablist"><li className="slick-active slick-current" role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-xl-6 flex-horizontal-center">
                                            <div className="w-100 position-relative m-4 m-md-0">
                                                <div className="mb-1 pb-1">
                                                    <span className="green-lighter ml-2">
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                    </span>
                                                </div>

                                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                        <span className="flaticon-heart-1 font-size-20"></span>
                                                    </button>
                                                </div>
                                                <a href="/tour-single">
                                                    <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">New Road Hotel</span>
                                                </a>
                                                <div className="card-body p-0">
                                                    <a href="/tour-single" className="d-block mb-3">
                                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                            <small className="px-1 font-size-15"> - </small>
                                                            <span className="text-primary font-size-14">View on map</span>
                                                        </div>
                                                    </a>
                                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                                        </li>
                                                            </ul>
                                                    <ul className="list-unstyled d-md-flex">
                                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                                        </li>
                                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-xl-2dot5 align-self-center py-4 py-xl-0 border-top border-lg-top-0">
                                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pl-xl-1">
                                                <div className="ml-xl-1">
                                                    <div className="mb-xl-7">
                                                        <div className="mb-0">
                                                            <div className="my-xl-1">
                                                                <div className="mb-2">
                                                                    <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="mr-1 font-size-14 text-gray-1">From</div>
                                                        <span className="font-weight-bold">£350.00</span>
                                                        <span className="font-size-14 text-gray-1"> / night</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="card mb-4 overflow-hidden">
                                <div className="product-item__outer w-100">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-xl-3dot5">
                                            <div className="product-item__header">
                                                <div className="position-relative">
                                                        <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3 slick-initialized slick-slider slick-dotted" data-slides-show="1" data-slides-scroll="1" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right" data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0"><div className="js-prev d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left slick-arrow slick-disabled" aria-disabled="true"></div>
                                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '1434px', transform: 'translate3d(0px, 0px, 0px)', }}><div className="js-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide80" aria-describedby="slick-slide-control80" style={{ width: '209px', height: 'auto' }}>
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="0"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img60.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide81" aria-describedby="slick-slide-control81">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img11.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide82" aria-describedby="slick-slide-control82">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img10.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide83" aria-describedby="slick-slide-control83">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img12.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide84" aria-describedby="slick-slide-control84">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img9.jpg"/></a>
                                                        </div><div className="js-slide slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: '209px', height: 'auto' }} tabindex="-1" role="tabpanel" id="slick-slide85" aria-describedby="slick-slide-control85">
                                                            <a href="/tour-single" className="d-block gradient-overlay-half-bg-gradient-v5" tabindex="-1"><img className="img-fluid min-height-230 card-img-top mCS_img_loaded" src="../../assets/img/300x230/img58.jpg"/></a>
                                                        </div></div>
                                                    </div>
                                                    <div className="js-next d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right slick-arrow" aria-disabled="false"></div><ul className="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0" role="tablist"><li className="slick-active slick-current" role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li><li role="presentation"><span></span></li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-xl-6 flex-horizontal-center">
                                            <div className="w-100 position-relative m-4 m-md-0">
                                                <div className="mb-1 pb-1 green-lighter">
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                        <small className="fas fa-star font-size-10"></small>
                                                    
                                                </div>

                                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                        <span className="flaticon-heart-1 font-size-20"></span>
                                                    </button>
                                                </div>
                                                <a href="/tour-single">
                                                    <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Park Avenue Baker Street London</span>
                                                </a>
                                                <div className="card-body p-0">
                                                    <a href="/tour-single" className="d-block mb-3">
                                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                            <small className="px-1 font-size-15"> - </small>
                                                            <span className="text-primary font-size-14">View on map</span>
                                                        </div>
                                                    </a>
                                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                                        </li>
                                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                                        </li>
                                                    </ul>
                                                    <ul className="list-unstyled d-md-flex">
                                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                                        </li>
                                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-xl-2dot5 align-self-center py-4 py-xl-0 border-top border-lg-top-0">
                                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pl-xl-1">
                                                <div className="ml-xl-1">
                                                    <div className="mb-xl-7">
                                                        <div className="mb-0">
                                                            <div className="my-xl-1">
                                                                <div className="mb-2">
                                                                    <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                                                </div>
                                                            </div>
                                                            <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-0">
                                                        <div className="mr-1 font-size-14 text-gray-1">From</div>
                                                        <span className="font-weight-bold">£350.00</span>
                                                        <span className="font-size-14 text-gray-1"> / night</span>
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
                <div className="col-lg-5 col-xl-4 col-wd-6 height-350-md-down">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.315136188916!2d80.28787859999998!3d13.09419335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f6b00bf787831af!2sApollo%20City%20Centre%20Hospital%20Sowcarpet!5e0!3m2!1sen!2sin!4v1580992215999!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
    </>
  )
}
