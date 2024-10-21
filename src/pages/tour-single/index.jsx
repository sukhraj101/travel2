import React, { useState } from 'react';
import PopularTours from "./../home/homepage/popular-tours";
import img1 from "./../../../public/assets/img/single/1.jpg"
import img2 from "./../../../public/assets/img/single/2.jpg"
import img3 from "./../../../public/assets/img/single/3.jpg"
import img4 from "./../../../public/assets/img/single/4.jpg"
import img5 from "./../../../public/assets/img/single/5.jpg"
import img6 from "./../../../public/assets/img/single/6.jpg"
import img7 from "./../../../public/assets/img/single/7.jpg"
import ImageGridPopup from './gallery';

export default function TourSingle() {
    const [showModal, setShowModal] = useState(false);
    const images = [
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402154436.jpg?k=a5845240f4f8bc63730f3f7c9596ac127940b201058df43e144bc5d71384cf55&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402349154.jpg?k=8eafce34c5be047bbfc6ce48bc5819d2a3c69dd738888ee21366639f4b600b66&o=',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402154459.jpg?k=6af9435f877d0b3e58a85160bbb4607e15f967c4d56cf0a4e9df6add3750bd88&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402156881.jpg?k=4b5a214b0d4f99776a44aff2d8a6ad0bab39d053a2b1525db8bb445fab5da1e7&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402156885.jpg?k=e29f9eace0ab1c6dce025cfe4acd5371a1905c5e97296b14d82541b7ecdb9394&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402349147.jpg?k=1d1f9dbc94e02fc2a0b2f99ac06ffbd62ec8e258d317ed04581be0fbf05c6118&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/405182515.jpg?k=13e9b4c145ff4cbc2cae4d3cba722ab79b0c6f954f96811c04c63a45e0b45218&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/406041654.jpg?k=32a913e66da1d47cde8a2b97a61defed6ddb0af22e94cc2f92e4bc6a7eafb939&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/406041701.jpg?k=c3f48264c003ac46b6948f2e86e96158538d68cff1e1804e436144fd2945547f&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/406041709.jpg?k=0beaadb06b96c0ca799476f609c7ffe3d15877911728e520aa6d8c3104e7b23f&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/429169155.jpg?k=1a0bd1205e402005840b46609df8f3783134353352a2af9daa8d351b43b10bd6&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/406041738.jpg?k=395098f64e2a68881736f543d3b9cd68f0067c439effaeeeb75c62efb1d98482&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402154436.jpg?k=a5845240f4f8bc63730f3f7c9596ac127940b201058df43e144bc5d71384cf55&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402349154.jpg?k=8eafce34c5be047bbfc6ce48bc5819d2a3c69dd738888ee21366639f4b600b66&o=',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402154459.jpg?k=6af9435f877d0b3e58a85160bbb4607e15f967c4d56cf0a4e9df6add3750bd88&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402156881.jpg?k=4b5a214b0d4f99776a44aff2d8a6ad0bab39d053a2b1525db8bb445fab5da1e7&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402156885.jpg?k=e29f9eace0ab1c6dce025cfe4acd5371a1905c5e97296b14d82541b7ecdb9394&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/402349147.jpg?k=1d1f9dbc94e02fc2a0b2f99ac06ffbd62ec8e258d317ed04581be0fbf05c6118&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/405182515.jpg?k=13e9b4c145ff4cbc2cae4d3cba722ab79b0c6f954f96811c04c63a45e0b45218&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/406041654.jpg?k=32a913e66da1d47cde8a2b97a61defed6ddb0af22e94cc2f92e4bc6a7eafb939&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/406041701.jpg?k=c3f48264c003ac46b6948f2e86e96158538d68cff1e1804e436144fd2945547f&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/406041709.jpg?k=0beaadb06b96c0ca799476f609c7ffe3d15877911728e520aa6d8c3104e7b23f&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/429169155.jpg?k=1a0bd1205e402005840b46609df8f3783134353352a2af9daa8d351b43b10bd6&o=&hp=1',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/406041738.jpg?k=395098f64e2a68881736f543d3b9cd68f0067c439effaeeeb75c62efb1d98482&o=&hp=1',
    ];

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleBack = () => console.log('Back button clicked');

  return (
    <>
        <ImageGridPopup
            show={showModal}
            handleCloseModal={handleCloseModal}
            images={images}
            onBack={handleBack}
        />
        
        <div className="container">
            <nav className="py-3" aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-no-gutter mb-0 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visible">
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="#">Home</a></li>
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="#">Hotels</a></li>
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="#">London Hotels</a></li>
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Park Avenue Baker Street London</li>
                </ol>
            </nav>
        </div>
        <div id="stickyBlockStartPoint" className="mb-4">
            <div className="container">
                <div className="d-flex justify-content-between pr-4 align-center border rounded-pill js-sticky-block p-1 border-width-2 z-index-4 bg-white" data-parent="#stickyBlockStartPoint" data-offset-target="#logoAndNav" data-sticky-view="lg" data-start-point="#stickyBlockStartPoint" data-end-point="#stickyBlockEndPoint" data-offset-top="30" data-offset-bottom="30">
                    <ul className="js-scroll-nav nav tab-nav-pill flex-nowrap tab-nav">
                        <li className="nav-item active">
                            <a className="nav-link font-weight-medium" href="#scroll-description">
                                <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                                    <span className="tabtext font-weight-semi-bold">Description</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-medium" href="#scroll-itinerary">
                                <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                                    <span className="tabtext font-weight-semi-bold">Itinerary</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-medium" href="#scroll-location">
                                <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                                    <span className="tabtext font-weight-semi-bold">Map</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-medium" href="#scroll-faq">
                                <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                                    <span className="tabtext font-weight-semi-bold">Faq</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-medium" href="#scroll-reviews">
                                <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                                    <span className="tabtext font-weight-semi-bold">Reviews</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="p-0">
                        <span className="font-size-14">From</span>
                        <span className="font-size-24 text-gray-6 font-weight-bold ml-1">£350.00</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-xl-9">
                    <div className="d-block d-md-flex flex-center-between align-items-start mb-3">
                    <div className="mb-1">
                        <div className="mb-2 mb-md-0">
                        <h4 className="font-size-23 font-weight-bold mb-1 mr-3">
                            5-Day Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head
                        </h4>
                        </div>
                        <div className="d-block d-xl-flex flex-horizontal-center">
                        <div className="d-block d-md-flex flex-horizontal-center font-size-14 text-gray-1 mb-2 mb-xl-0">
                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i>
                            Greater London, United Kingdom
                            <a href="#" className="ml-1 d-block d-md-inline">
                            - View on map
                            </a>
                        </div>
                        <div className="mr-4 mb-2 mb-md-0 flex-horizontal-center">
                            <div className="ml-xl-3 font-size-10 letter-spacing-2">
                            <span className="d-block green-lighter ml-1">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                            </span>
                            </div>
                            <span className="font-size-14 text-gray-1 ml-2">
                            (1,186 Reviews)
                            </span>
                        </div>
                        </div>
                    </div>
                    <ul className="list-group list-group-borderless list-group-horizontal custom-social-share">
                        <li className="list-group-item px-1">
                        <a href="#" className="height-45 width-45 border rounded border-width-2 flex-content-center">
                            <i className="flaticon-like font-size-18 text-dark"></i>
                        </a>
                        </li>
                        <li className="list-group-item px-1">
                        <a href="#" className="height-45 width-45 border rounded border-width-2 flex-content-center">
                            <i className="flaticon-share font-size-18 text-dark"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="images-gal">
                        <div className="div1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="div2">
                            <img src={img2} alt="" />
                        </div>
                        <div className="div3">
                            <img src={img3} alt="" />
                        </div>
                        <div className="div4">
                            <img src={img4} alt="" />
                        </div>
                        <div className="div5">
                            <img src={img5} alt="" />
                        </div>
                        <div className="div6">
                            <img src={img6} alt="" />
                        </div>
                        <div className="div7" onClick={handleOpenModal}>
                            <img src={img7} alt="" />
                            <span class="view-all-photos">+37 photos</span>
                        </div>
                    </div>
                    <div className="py-4 border-top border-bottom mb-4">
                        <ul className="list-group list-group-borderless list-group-horizontal row">
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className="flaticon-alarm text-primary font-size-22 mr-2 d-block"></i>
                                <div className="ml-1 text-gray-1">5 Days</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className="flaticon-social text-primary font-size-22 mr-2 d-block"></i>
                                <div className="ml-1 text-gray-1">Max People : 26</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className="flaticon-wifi-signal text-primary font-size-22 mr-2 d-block"></i>
                                <div className="ml-1 text-gray-1">Wifi Available</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className="flaticon-month text-primary font-size-22 mr-2 d-block"></i>
                                <div className="ml-1 text-gray-1">Jan 18’ - Dec 21'</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className="flaticon-user-2 text-primary font-size-22 mr-2 d-block"></i>
                                <div className="ml-1 text-gray-1">Min Age : 10+</div>
                            </li>
                            <li className="col-md-4 flex-horizontal-center list-group-item text-lh-sm mb-2">
                                <i className="flaticon-pin text-primary font-size-22 mr-2 d-block"></i>
                                <div className="ml-1 text-gray-1">Pickup: Airpot</div>
                            </li>
                        </ul>
                    </div>
                    <div className="border-bottom position-relative">
                        <h5 className="font-size-21 font-weight-bold text-dark mb-3">
                            Description
                        </h5>
                        <p className="mb-4">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
                        <p className="mb-4">Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of t</p>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-2">Highlights</div>
                                <div className="text-gray-1">John F.K. International Airport (Google Map)</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-2">Bedroom</div>
                                <div className="text-gray-1">4 Bedrooms</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-2">Departure Time</div>
                                <div className="text-gray-1">3 Hours Before Flight Time</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-2">Bathroom</div>
                                <div className="text-gray-1">6 Bathrooms</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Price Includes</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1"><i className="flaticon-tick mr-3 font-size-16 text-primary"></i>Air fares</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1"><i className="flaticon-tick mr-3 font-size-16 text-primary"></i>3 Nights Hotel Accomodation</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1"><i className="flaticon-tick mr-3 font-size-16 text-primary"></i>Tour Guide</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1"><i className="flaticon-tick mr-3 font-size-16 text-primary"></i>Entrance Fees</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1"><i className="flaticon-tick mr-3 font-size-16 text-primary"></i>All transportation in destination location</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Price Excludes</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1"><i className="flaticon-close mr-3 font-size-12 text-primary"></i>Guide Service Fee</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1"><i className="flaticon-close mr-3 font-size-12 text-primary"></i>Driver Service Fee</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1"><i className="flaticon-close mr-3 font-size-12 text-primary"></i>Any Private Expenses</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1"><i className="flaticon-close mr-3 font-size-12 text-primary"></i>Room Service Fees</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom py-4">
                        <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                            What to Expect
                        </h5>
                        <p className="mb-3">Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="mb-3">Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <ul className="list-group list-group-borderless list-group-flush no-gutters">
                            <li className="flex-horizontal-center mb-3 text-gray-1">
                                <i className="fas fa-circle mr-3 font-size-8 text-primary"></i>
                                Ipsum Amet Mattis Pellentesque
                            </li>

                            <li className="flex-horizontal-center mb-3 text-gray-1">
                                <i className="fas fa-circle mr-3 font-size-8 text-primary"></i>
                                Ultricies Vehicula Mollis Vestibulum Fringilla
                            </li>

                            <li className="flex-horizontal-center mb-3 text-gray-1">
                                <i className="fas fa-circle mr-3 font-size-8 text-primary"></i>
                                Condimentum Sollicitudin Fusce Vestibulum Ultricies
                            </li>

                            <li className="flex-horizontal-center mb-3 text-gray-1">
                                <i className="fas fa-circle mr-3 font-size-8 text-primary"></i>
                                Sollicitudin Consectetur Quam Ligula Vehicula
                            </li>

                            <li className="flex-horizontal-center mb-3 text-gray-1">
                                <i className="fas fa-circle mr-3 font-size-8 text-primary"></i>
                                Cursus Pharetra Purus Porta Parturient
                            </li>

                            <li className="flex-horizontal-center mb-3 text-gray-1">
                                <i className="fas fa-circle mr-3 font-size-8 text-primary"></i>
                                Risus Malesuada Tellus Porta Commodo
                            </li>
                        </ul>
                    </div>
                    <div className="border-bottom py-4">
                        <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                            Itinerary
                        </h5>
                        <div id="basicsAccordion1">
                            <div className="card border-0 mb-3">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingOne1">
                                    <h5 className="mb-0">
                                        <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center font-weight-bold p-0"
                                        data-toggle="collapse" data-target="#basicsCollapseOne1" aria-expanded="true" aria-controls="basicsCollapseOne1">
                                            <div className="text-primary font-size-22 mb-3 mb-md-0 mr-3">
                                                <i className="far fa-circle"></i>
                                            </div>

                                            <div className="text-primary flex-shrink-0">Day 1 <span className="px-2">-</span> </div>
                                            <h6 className="font-weight-bold text-gray-3 text-left mb-0">Barcelona – Zaragoza – Madrid</h6>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseOne1" className="collapse show"
                                        aria-labelledby="basicsHeadingOne1"
                                        data-parent="#basicsAccordion1">
                                    <div className="card-body pl-6 pb-0 pt-0">
                                        <p className="mb-0">We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mb-3">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingTwo2">
                                    <h5 className="mb-0">
                                        <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center font-weight-bold p-0"
                                            data-toggle="collapse" data-target="#basicsCollapseTwo2" aria-expanded="false" aria-controls="basicsCollapseTwo2">
                                            <div className="text-primary font-size-22 mb-3 mb-md-0 mr-3">
                                                <i className="far fa-circle"></i>
                                            </div>

                                            <div className="text-primary flex-shrink-0">Day 2 <span className="px-2">-</span> </div>
                                            <h6 className="font-weight-bold text-gray-3 text-left mb-0">Zürich–Biel/Bienne–Neuchâtel–Geneva</h6>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseTwo2" className="collapse"
                                        aria-labelledby="basicsHeadingTwo2"
                                        data-parent="#basicsAccordion1">
                                    <div className="card-body pl-6 pb-0 pt-0">
                                        <p className="mb-0">We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mb-3">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingThree3">
                                    <h5 className="mb-0">
                                        <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center font-weight-bold p-0"
                                            data-toggle="collapse" data-target="#basicsCollapseThree3" aria-expanded="false" aria-controls="basicsCollapseThree3">
                                            <div className="text-primary font-size-22 mb-3 mb-md-0 mr-3">
                                                <i className="far fa-circle"></i>
                                            </div>

                                            <div className="text-primary flex-shrink-0">Day 3 <span className="px-2">-</span> </div>
                                            <h6 className="font-weight-bold text-gray-3 text-left mb-0">Enchanting Engelberg</h6>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseThree3" className="collapse"
                                        aria-labelledby="basicsHeadingThree3"
                                        data-parent="#basicsAccordion1">
                                    <div className="card-body pl-6 pb-0 pt-0">
                                        <p className="mb-0">We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mb-3">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingFour4">
                                    <h5 className="mb-0">
                                        <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center font-weight-bold p-0"
                                            data-toggle="collapse" data-target="#basicsCollapseFour4" aria-expanded="false" aria-controls="basicsCollapseFour4">
                                            <div className="text-primary font-size-22 mb-3 mb-md-0 mr-3">
                                                <i className="far fa-circle"></i>
                                            </div>

                                            <div className="text-primary flex-shrink-0">Day 4 <span className="px-2">-</span> </div>
                                            <h6 className="font-weight-bold text-gray-3 text-left mb-0">Interlaken Area. Excursion to The Jungfrau Massif</h6>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseFour4" className="collapse"
                                        aria-labelledby="basicsHeadingFour4"
                                        data-parent="#basicsAccordion1">
                                    <div className="card-body pl-6 pb-0 pt-0">
                                        <p className="mb-0">We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom py-4">
                        <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                            Location
                        </h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7772.225184901051!2d80.28441927545006!3d13.092050163095971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d13.098645!2d80.2916092!4m5!1s0x3a526f5213f46501%3A0x56d2a4b14dba42f2!2sMadras%20High%20Court%2C%20High%20Ct%20Rd%2C%20Parry&#39;s%20Corner%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600108!3m2!1d13.0867057!2d80.28774949999999!5e0!3m2!1sen!2sin!4v1580358870925!5m2!1sen!2sin" width="100%" height="480" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                    <div className="border-bottom py-4">
                        <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                            Faq
                        </h5>
                        <div id="basicsAccordion">
                            <div className="card border-0 mb-4 pb-1">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingOne">
                                    <h5 className="mb-0">
                                        <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center p-0"
                                        data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="true" aria-controls="basicsCollapseOne">
                                            <div className="border border-color-8 rounded-xs border-width-2 p-2 mb-3 mb-md-0 mr-4">
                                                <figure id="rectangle" className="minus">
                                                    <img className="js-svg-injector mb-0" src="../../assets/svg/illustrations/rectangle.svg" alt="SVG" data-parent="#rectangle"/>
                                                </figure>
                                                <figure id="plus1" className="plus">
                                                    <img className="js-svg-injector mb-0" src="../../assets/svg/illustrations/plus.svg" alt="SVG" data-parent="#plus1"/>
                                                </figure>
                                            </div>

                                            <h6 className="font-weight-bold text-gray-3 mb-0">I'm a solo mytravel, is there a single supplement?</h6>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseOne" className="collapse show"
                                        aria-labelledby="basicsHeadingOne"
                                        data-parent="#basicsAccordion">
                                    <div className="card-body pl-10 pl-md-10 pr-md-12 pt-0">
                                        <p className="mb-0 text-gray-1 text-lh-lg">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mb-4 pb-1">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingTwo">
                                    <h5 className="mb-0">
                                        <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center p-0"
                                        data-toggle="collapse" data-target="#basicsCollapseTwo" aria-expanded="false" aria-controls="basicsCollapseTwo">
                                            <div className="border border-color-8 rounded-xs border-width-2 p-2 mb-3 mb-md-0 mr-4">
                                                <figure id="rectangle1" className="minus">
                                                    <img className="js-svg-injector mb-0" src="../../assets/svg/illustrations/rectangle.svg" alt="SVG" data-parent="#rectangle1"/>
                                                </figure>
                                                <figure id="plus2" className="plus">
                                                    <img className="js-svg-injector mb-0" src="../../assets/svg/illustrations/plus.svg" alt="SVG" data-parent="#plus2"/>
                                                </figure>
                                            </div>
                                            <h6 className="font-weight-bold text-gray-3 mb-0">Which currency is most widely accepted on this tour?</h6>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseTwo" className="collapse"
                                        aria-labelledby="basicsHeadingTwo"
                                        data-parent="#basicsAccordion">
                                    <div className="card-body pl-10 pl-md-10 pr-md-12 pt-0">
                                        <p className="mb-0 text-gray-1 text-lh-lg">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mb-4 pb-1">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingThree">
                                    <h5 className="mb-0">
                                        <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center p-0"
                                        data-toggle="collapse" data-target="#basicsCollapseThree" aria-expanded="false" aria-controls="basicsCollapseThree">
                                            <div className="border border-color-8 rounded-xs border-width-2 p-2 mb-3 mb-md-0 mr-4">
                                                <figure id="rectangle2" className="minus">
                                                    <img className="js-svg-injector mb-0" src="../../assets/svg/illustrations/rectangle.svg" alt="SVG" data-parent="#rectangle2"/>
                                                </figure>
                                                <figure id="plus3" className="plus">
                                                    <img className="js-svg-injector mb-0" src="../../assets/svg/illustrations/plus.svg" alt="SVG" data-parent="#plus3"/>
                                                </figure>
                                            </div>
                                            <h6 className="font-weight-bold text-gray-3 mb-0">Should I book pre/post tour accommodation?</h6>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseThree" className="collapse"
                                        aria-labelledby="basicsHeadingThree"
                                        data-parent="#basicsAccordion">
                                    <div className="card-body pl-10 pl-md-10 pr-md-12 pt-0">
                                        <p className="mb-0 text-gray-1 text-lh-lg">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mb-4 pb-1">
                                <div className="card-header border-bottom-0 p-0" id="basicsHeadingFour">
                                    <h5 className="mb-0">
                                        <button type="button" className="collapse-link btn btn-link btn-block d-flex align-items-md-center p-0"
                                        data-toggle="collapse" data-target="#basicsCollapseFour" aria-expanded="false" aria-controls="basicsCollapseFour">
                                            <div className="border border-color-8 rounded-xs border-width-2 p-2 mb-3 mb-md-0 mr-4">
                                                <figure id="plus4" className="plus">
                                                    <img className="js-svg-injector mb-0" src="../../assets/svg/illustrations/plus.svg" alt="SVG" data-parent="#plus4"/>
                                                </figure>
                                                <figure id="rectangle3" className="minus">
                                                    <img className="js-svg-injector mb-0" src="../../assets/svg/illustrations/rectangle.svg" alt="SVG" data-parent="#rectangle3"/>
                                                </figure>
                                            </div>
                                            <h6 className="font-weight-bold text-gray-3 mb-0">How do I edit my calendar?</h6>
                                        </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseFour" className="collapse"
                                        aria-labelledby="basicsHeadingFour"
                                        data-parent="#basicsAccordion">
                                    <div className="card-body pl-10 pl-md-10 pr-md-12 pt-0">
                                        <p className="mb-0 text-gray-1 text-lh-lg">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom py-4">
                        <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                            Average Reviews
                        </h5>
                        <div className="row">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="border rounded flex-content-center py-5 border-width-2">
                                    <div className="text-center">
                                        <h2 className="font-size-50 font-weight-bold text-primary mb-0 text-lh-sm">
                                            4.2<span className="font-size-20">/5</span>
                                        </h2>
                                        <div className="font-size-25 text-dark mb-3">Very Good</div>
                                        <div className="text-gray-1">From 40 reviews</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <h6 className="font-weight-normal text-gray-1 mb-1">
                                            Cleanliness
                                        </h6>
                                        <div className="flex-horizontal-center mr-6">
                                            <div className="progress bg-gray-33 rounded-pill w-100">
                                                <div className="progress-bar rounded-pill" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="ml-3 text-primary font-weight-bold">
                                                4.8
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <h6 className="font-weight-normal text-gray-1 mb-1">
                                            Facilities
                                        </h6>
                                        <div className="flex-horizontal-center mr-6">
                                            <div className="progress bg-gray-33 rounded-pill w-100">
                                                <div className="progress-bar rounded-pill" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="ml-3 text-primary font-weight-bold">
                                                1.4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <h6 className="font-weight-normal text-gray-1 mb-1">
                                            Value for money
                                        </h6>
                                        <div className="flex-horizontal-center mr-6">
                                            <div className="progress bg-gray-33 rounded-pill w-100" >
                                                <div className="progress-bar rounded-pill" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="ml-3 text-primary font-weight-bold">
                                                3.2
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <h6 className="font-weight-normal text-gray-1 mb-1">
                                            Service
                                        </h6>
                                        <div className="flex-horizontal-center mr-6">
                                            <div className="progress bg-gray-33 rounded-pill w-100" >
                                                <div className="progress-bar rounded-pill" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="ml-3 text-primary font-weight-bold">
                                                5.0
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="font-weight-normal text-gray-1 mb-1">
                                            Location
                                        </h6>
                                        <div className="flex-horizontal-center mr-6">
                                            <div className="progress bg-gray-33 rounded-pill w-100" >
                                                <div className="progress-bar rounded-pill" role="progressbar"  aria-valuenow="86" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="ml-3 text-primary font-weight-bold">
                                                4.8
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom py-4">
                        <h5 className="font-size-21 font-weight-bold text-dark mb-8">
                            Showing 16 verified guest comments
                        </h5>
                        <div className="media flex-column flex-md-row align-items-center align-items-md-start mb-4">
                            <div className="mr-md-5">
                                <a className="d-block" href="#">
                                    <img className="img-fluid mb-3 mb-md-0 rounded-circle" src="../../assets/img/85x85/img1.jpg" alt="Image-Description"/>
                                </a>
                            </div>
                            <div className="media-body text-center text-md-left">
                                <div className="mb-4">
                                    <h6 className="font-weight-bold text-gray-3">
                                        <a href="#">Helena</a>
                                    </h6>
                                    <div className="font-weight-normal font-size-14 text-gray-9 mb-2">April 25, 2019 at 10:46 am</div>
                                    <div className="d-flex align-items-center flex-column flex-md-row mb-2">
                                        <button type="button" className="btn btn-xs btn-primary rounded-xs font-size-14 py-1 px-2 mr-2 mb-2 mb-md-0">4.6 /5 </button>
                                        <span className="font-weight-bold font-italic text-gray-3">The worst hotel ever ”</span>
                                    </div>
                                    <p className="text-lh-1dot6 mb-0 pr-lg-5">Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                </div>
                                <div className="review">
                                    <div className="row no-gutters justify-content-between align-items-center border border-color-8 border-width-2 rounded-xs p-3 px-md-3 py-md-2 pr-xl-5">
                                        <div className="col">
                                            <div className="font-weight-normal font-size-14 text-gray-1 mx-lg-1 my-lg-1 mb-3 mb-md-0">Was This Review...?</div>
                                        </div>
                                        <div className="col-md-6 col-lg-7 col-xl-4">
                                            <div className="d-flex justify-content-between my-lg-1">
                                                <a className="text-indigo-light" href="#">
                                                    <i className="flaticon-like-1 font-size-15 mr-1"></i>
                                                    <span className="font-size-14 font-weight-normal">Like</span>
                                                </a>
                                                <a className="text-gray-7" href="#">
                                                    <i className="flaticon-dislike font-size-15 mr-1"></i>
                                                    <span className="font-size-14 font-weight-normal">Dislike</span>
                                                </a>
                                                <a className="text-red-light-2" href="#">
                                                    <i className="flaticon-like font-size-15 mr-1"></i>
                                                    <span className="font-size-14 font-weight-normal">Love</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media flex-column flex-md-row align-items-center align-items-md-start mb-0">
                            <div className="mr-md-5">
                                <a className="d-block" href="#">
                                    <img className="img-fluid mb-3 mb-md-0 rounded-circle" src="../../assets/img/85x85/img2.jpg" alt="Image-Description"/>
                                </a>
                            </div>
                            <div className="media-body text-center text-md-left">
                                <div className="mb-4">
                                    <h6 className="font-weight-bold text-gray-3">
                                        <a href="#">Ashleigh</a>
                                    </h6>
                                    <div className="font-weight-normal font-size-14 text-gray-9 mb-2">April 25, 2019 at 10:46 am</div>
                                    <div className="d-flex align-items-center flex-column flex-md-row mb-2">
                                        <button type="button" className="btn btn-xs btn-primary rounded-xs font-size-14 py-1 px-2 mr-2 mb-2 mb-md-0">4.6 /5 </button>
                                        <span className="font-weight-bold font-italic text-gray-3">Was too noisy and not suitable for business meetings.”</span>
                                    </div>
                                    <p className="text-lh-1dot6 pr-lg-5 mb-0">Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                </div>
                                <div className="review">
                                    <div className="row no-gutters justify-content-between align-items-center border border-color-8 border-width-2 rounded-xs p-3 px-md-3 py-md-2 pr-xl-5">
                                        <div className="col">
                                            <div className="font-weight-normal font-size-14 text-gray-1 mx-lg-1 my-lg-1 mb-3 mb-md-0">Was This Review...?</div>
                                        </div>
                                        <div className="col-md-6 col-lg-7 col-xl-4">
                                            <div className="d-flex justify-content-between my-lg-1">
                                                <a className="text-indigo-light" href="#">
                                                    <i className="flaticon-like-1 font-size-15 mr-1"></i>
                                                    <span className="font-size-14 font-weight-normal">Like</span>
                                                </a>
                                                <a className="text-gray-7" href="#">
                                                    <i className="flaticon-dislike font-size-15 mr-1"></i>
                                                    <span className="font-size-14 font-weight-normal">Dislike</span>
                                                </a>
                                                <a className="text-red-light-2" href="#">
                                                    <i className="flaticon-like font-size-15 mr-1"></i>
                                                    <span className="font-size-14 font-weight-normal">Love</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <h5 className="font-size-21 font-weight-bold text-dark mb-6">
                            Write a Review
                        </h5>
                        <div className="row">
                            <div className="col-md-4 mb-6">
                                <h6 className="font-weight-bold text-dark mb-1">
                                    Cleanliness
                                </h6>
                                <span className="text-primary font-size-20 letter-spacing-3">
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile text-muted"></small>
                                    <small className="far fa-smile text-muted"></small>
                                </span>
                            </div>
                            <div className="col-md-4 mb-6">
                                <h6 className="font-weight-bold text-dark mb-1">
                                    Facilities
                                </h6>
                                <span className="text-primary font-size-20 letter-spacing-3">
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile text-muted"></small>
                                    <small className="far fa-smile text-muted"></small>
                                </span>
                            </div>
                            <div className="col-md-4 mb-6">
                                <h6 className="font-weight-bold text-dark mb-1">
                                    Value for money
                                </h6>
                                <span className="text-primary font-size-20 letter-spacing-3">
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                </span>
                            </div>
                            <div className="col-md-4 mb-6">
                                <h6 className="font-weight-bold text-dark mb-1">
                                    Service
                                </h6>
                                <span className="text-primary font-size-20 letter-spacing-3">
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile text-muted"></small>
                                    <small className="far fa-smile text-muted"></small>
                                </span>
                            </div>
                            <div className="col-md-4 mb-6">
                                <h6 className="font-weight-bold text-dark mb-1">
                                    Location
                                </h6>
                                <span className="text-primary font-size-20 letter-spacing-3">
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile"></small>
                                    <small className="far fa-smile text-muted"></small>
                                    <small className="far fa-smile text-muted"></small>
                                </span>
                            </div>
                        </div>
                        <form className="js-validate" novalidate="novalidate">
                            <div className="row mb-5 mb-lg-0">
                                <div className="col-sm-6 mb-5">
                                    <div className="js-form-message">
                                        <input type="text" className="form-control" name="name" placeholder="Name" aria-label="Jack Wayley" required="" data-error-className="u-has-error" data-msg="Please enter your name." data-success-className="u-has-success"/>
                                    </div>
                                </div>

                                <div className="col-sm-6 mb-5">
                                    <div className="js-form-message">
                                        <input type="email" className="form-control" name="email" placeholder="Email" aria-label="jackwayley@gmail.com" required="" data-msg="Please enter a valid email address." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-5">
                                    <div className="js-form-message">
                                        <div className="input-group">
                                            <textarea className="form-control" rows="6" cols="77" name="text" placeholder="Comment" aria-label="Hi there, I would like to ..." required="" data-msg="Please enter a reason." data-error-className="u-has-error" data-success-className="u-has-success"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-center justify-content-lg-start">
                                    <button type="submit" className="btn rounded-xs bg-blue-dark-1 text-white p-2 height-51 width-190 transition-3d-hover">Submit Review</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
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
  <div className="mb-4">
    <div className="border border-color-7 rounded mb-5">
      {/* <div className="border-bottom">
        <div className="p-4">
          <span className="font-size-14">From</span>
          <span className="font-size-24 text-gray-6 font-weight-bold ml-1">£350.00</span>
        </div>
      </div> */}
      <div className="p-4">
        {/* Input */}
        <span className="d-block text-gray-1 font-weight-normal mb-0 text-left">Date</span>
        <div className="mb-4">
          <div className="border-bottom border-width-2 border-color-1">
            <div id="datepickerWrapperPick" className="u-datepicker input-group">
              <input
                className="js-range-datepicker w-auto height-40 font-size-16 shadow-none font-weight-bold form-control hero-form bg-transparent border-0 flatpickr-input p-0"
                type="text"
                placeholder="July 7/2019"
                aria-label="July 7/2019"
                data-rp-wrapper="#datepickerWrapperPick"
                data-rp-date-format="M d / Y"
                data-rp-default-date='["Jul 7 / 2020"]'
              />
            </div>
          </div>
        </div>
        {/* End Input */}

        {/* Input */}
        <span className="d-block text-gray-1 font-weight-normal mb-2 text-left">Adults</span>
        <div className="mb-4">
          <div className="border-bottom border-width-2 border-color-1 pb-1">
            <div className="js-quantity flex-center-between mb-1 text-dark font-weight-bold">
              <span className="d-block">Age 18+</span>
              <div className="flex-horizontal-center">
                <a className="js-minus font-size-10 text-dark" href="javascript:;">
                  <i className="fas fa-chevron-up"></i>
                </a>
                <input
                  className="js-result form-control h-auto width-30 font-weight-bold font-size-16 shadow-none bg-transparent border-0 rounded p-0 mx-1 text-center"
                  type="text"
                  value="2"
                  min="01"
                  max="100"
                />
                <a className="js-plus font-size-10 text-dark" href="javascript:;">
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Input */}

        {/* Input */}
        <span className="d-block text-gray-1 font-weight-normal mb-2 text-left">Children</span>
        <div className="mb-4">
          <div className="border-bottom border-width-2 border-color-1 pb-1">
            <div className="js-quantity flex-center-between mb-1 text-dark font-weight-bold">
              <span className="d-block">Age 6-17</span>
              <div className="flex-horizontal-center">
                <a className="js-minus font-size-10 text-dark" href="javascript:;">
                  <i className="fas fa-chevron-up"></i>
                </a>
                <input
                  className="js-result form-control h-auto width-30 font-weight-bold font-size-16 shadow-none bg-transparent border-0 rounded p-0 mx-1 text-center"
                  type="text"
                  value="4"
                  min="01"
                  max="100"
                />
                <a className="js-plus font-size-10 text-dark" href="javascript:;">
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Input */}

        {/* Input */}
        <span className="d-block text-gray-1 font-weight-normal mb-2 text-left">Infant</span>
        <div className="mb-4">
          <div className="border-bottom border-width-2 border-color-1 pb-1">
            <div className="js-quantity flex-center-between mb-1 text-dark font-weight-bold">
              <span className="d-block">Age 0-5</span>
              <div className="flex-horizontal-center">
                <a className="js-minus font-size-10 text-dark" href="javascript:;">
                  <i className="fas fa-chevron-up"></i>
                </a>
                <input
                  className="js-result form-control h-auto width-30 font-weight-bold font-size-16 shadow-none bg-transparent border-0 rounded p-0 mx-1 text-center"
                  type="text"
                  value="1"
                  min="01"
                  max="100"
                />
                <a className="js-plus font-size-10 text-dark" href="javascript:;">
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Input */}

        <div className="text-center">
          <a
            href="/booking/step1"
            className="btn btn-primary d-flex align-items-center justify-content-center height-60 w-100 mb-xl-0 mb-lg-1 transition-3d-hover font-weight-bold"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>

    <div className="border border-color-7 rounded p-4 mb-5">
      <h6 className="font-size-17 font-weight-bold text-gray-3 mx-1 mb-3 pb-1">
        Why Book With Us?
      </h6>
      <div className="d-flex align-items-center mb-3">
        <i className="flaticon-star font-size-25 text-primary mr-3 pr-1"></i>
        <h6 className="mb-0 font-size-14 text-gray-1">
          <a href="#">No-hassle best price guarantee</a>
        </h6>
      </div>
      <div className="d-flex align-items-center mb-3">
        <i className="flaticon-support font-size-25 text-primary mr-3 pr-1"></i>
        <h6 className="mb-0 font-size-14 text-gray-1">
          <a href="#">Customer care available 24/7</a>
        </h6>
      </div>
      <div className="d-flex align-items-center mb-3">
        <i className="flaticon-favorites-button font-size-25 text-primary mr-3 pr-1"></i>
        <h6 className="mb-0 font-size-14 text-gray-1">
          <a href="#">Hand-picked Tours &amp; Activities</a>
        </h6>
      </div>
      <div className="d-flex align-items-center mb-0">
        <i className="flaticon-airplane font-size-25 text-primary mr-3 pr-1"></i>
        <h6 className="mb-0 font-size-14 text-gray-1">
          <a href="#">Free Travel Insureance</a>
        </h6>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>

        <div className="product-card-block product-card-v1 border-bottom border-color-8">
            <div className="container space-1">
                <div className="w-md-80 w-lg-50 text-center mx-md-auto mt-3">
                    <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">You might also like...</h2>
                </div>
                <PopularTours/>
            </div>
        </div>
    </>
  )
}
