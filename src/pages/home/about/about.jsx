import React from 'react';
import PageHeader from '../../../components/common/page-header';

export default function AboutUs() {
    const breadcrumbs = [
        { label: 'Home', link: '/', active: false },
        { label: 'About Us', active: true }
    ];
    
    return (
        <>
            <PageHeader 
                title="About Us"
                breadcrumbs={breadcrumbs}
            />

            <div className="slider border-bottom border-color-3">
                <div className="container space-1">
                    <div className="w-md-80 w-lg-70 text-center mx-md-auto mb-5 mt-3">
                        <h2 className="section-title text-black font-size-xs-28 font-weight-bold mb-0">
                            We’re truly dedicated to making your travel experience as simple and fun as possible!
                        </h2>
                    </div>
                    <section className="w-lg-80 mx-auto mb-4">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="font-size-21 font-weight-bold text-center text-md-left">Our Story</h2>
                                <p className="text-gray-1">
                                    Bringing you a modern, comfortable, and connected travel experience is one of our highest priorities. That’s why we continuously try to improve your experience when you book with us.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h2 className="font-size-21 font-weight-bold text-center text-md-left">Our Mission</h2>
                                <p className="text-gray-1">
                                    We appreciate and welcome any suggestions you might have, so feel free to drop us a line anytime. Air conditioning, heating, desk, alarm clock, and iPod docking station can be found in selected guestrooms.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="container text-center space-1">
                <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-1">
                    <h2 className="section-title text-black font-size-30 font-weight-bold">Why Choose Us</h2>
                </div>
                
                <div className="mb-8">
                    <div className="row">
                        <div className="col-md-4">
                            <i className="flaticon-price text-primary font-size-80 mb-3"></i>
                            <h5 className="font-size-17 text-dark font-weight-bold mb-2"><a href="#">Competitive Pricing</a></h5>
                            <p className="text-gray-1 px-xl-2 px-uw-7">With 500+ suppliers and the purchasing power of 300 million members, mytravel.com can save you more!</p>
                        </div>
                        <div className="col-md-4">
                            <i className="flaticon-medal text-primary font-size-80 mb-3"></i>
                            <h5 className="font-size-17 text-dark font-weight-bold mb-2"><a href="#">Award-Winning Service</a></h5>
                            <p className="text-gray-1 px-xl-2 px-uw-7">Travel worry-free knowing that we're here if you need us, 24 hours a day.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="flaticon-global-1 text-primary font-size-80 mb-3"></i>
                            <h5 className="font-size-17 text-dark font-weight-bold mb-2"><a href="#">Worldwide Coverage</a></h5>
                            <p className="text-gray-1 px-xl-2 px-uw-7">Over 1,200,000 hotels in more than 200 countries and regions & flights to over 5,000 cities.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gradient-overlay-half-bg-blue bg-img-hero" style={{ backgroundImage: "url(https://transvelo.github.io/mytravel-html/assets/img/1920x450/img1.png)" }}>
                <div className="container text-center space-1">
                    <div className="row">
                        <div className="col-md-3">
                            <i className="flaticon-node text-white font-size-80 mb-3"></i>
                            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">5340</h5>
                            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">Total Length of Boats Sold Since 2009</p>
                        </div>
                        <div className="col-md-3">
                            <i className="flaticon-cardinal-points text-white font-size-80 mb-3"></i>
                            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">19</h5>
                            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">Locations with Easy Access off the Deep Water Channel</p>
                        </div>
                        <div className="col-md-3">
                            <i className="flaticon-anchor text-white font-size-80 mb-3"></i>
                            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">18000</h5>
                            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">sq. ft. Showroom loaded with New & Used Boats</p>
                        </div>
                        <div className="col-md-3">
                            <i className="flaticon-star text-white font-size-80 mb-3"></i>
                            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">30</h5>
                            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">Number of Licensed Yachting Professionals</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team border-bottom border-color-3">
                <div className="container space-top-1">
                    <div className="w-md-80 w-lg-70 text-center mx-md-auto mb-5 mt-3">
                        <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Dedicated Team</h2>
                    </div>
                    <div className="row text-center pb-2">
                        <div className="col-lg-4 col-md-6 inner-right inner-bottom-sm inner-left">
                            <div className="pb-3">
                                <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                                    <div className="u-avatar-image-overlay">
                                        <ul className="u-avatar-image-social list-unstyled m-0 w-100 h-100">
                                            <li><a className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle" href="#"><i className="btn-icon__inner fab fa-facebook-f"></i></a></li>
                                            <li><a className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle" href="#"><i className="btn-icon__inner fab fa-twitter"></i></a></li>
                                            <li><a className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle" href="#"><i className="btn-icon__inner fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src="https://transvelo.github.io/mytravel-html/assets/img/200x200/img1.jpg" alt="David Roberts" />
                                </figure>
                            </div>
                            <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">David Roberts</h6>
                            <span className="text-blue-lighter-1 font-size-normal">Founder & Director</span>
                        </div>
                        <div className="col-lg-4 col-md-6 inner-right inner-bottom-sm inner-left">
                            <div className="pb-3">
                                <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                                    <div className="u-avatar-image-overlay">
                                        <ul className="u-avatar-image-social list-unstyled m-0 w-100 h-100">
                                            <li><a className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle" href="#"><i className="btn-icon__inner fab fa-facebook-f"></i></a></li>
                                            <li><a className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle" href="#"><i className="btn-icon__inner fab fa-twitter"></i></a></li>
                                            <li><a className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle" href="#"><i className="btn-icon__inner fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src="https://transvelo.github.io/mytravel-html/assets/img/200x200/img2.jpg" alt="Martha Smith" />
                                </figure>
                            </div>
                            <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">Martha Smith</h6>
                            <span className="text-blue-lighter-1 font-size-normal">Marketing Manager</span>
                        </div>
                        <div className="col-lg-4 col-md-6 inner-right inner-bottom-sm inner-left">
                            <div className="pb-3">
                                <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                                    <div className="u-avatar-image-overlay">
                                        <ul className="u-avatar-image-social list-unstyled m-0 w-100 h-100">
                                            <li><a className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle" href="#"><i className="btn-icon__inner fab fa-facebook-f"></i></a></li>
                                            <li><a className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle" href="#"><i className="btn-icon__inner fab fa-twitter"></i></a></li>
                                            <li><a className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle" href="#"><i className="btn-icon__inner fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src="https://transvelo.github.io/mytravel-html/assets/img/200x200/img3.jpg" alt="John Doe" />
                                </figure>
                            </div>
                            <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">John Doe</h6>
                            <span className="text-blue-lighter-1 font-size-normal">Travel Consultant</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
