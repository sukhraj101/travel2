import React from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const slidesData = [
    {
      id: 1,
      url: "../tour/tour-single-v1.html",
      image: "https://transvelo.github.io/mytravel-html/assets/img/300x230/img1.jpg",
      title: "Small-Group Blue Mountains Day Trip from Sydney with River Cruise",
      category: "Culturals Tours",
      price: "£550.00",
      location: "Istanbul, Turkey",
      rating: 5,
      reviews: 48,
      duration: "3 hours 45 minutes"
    },
    {
      id: 2,
      url: "../tour/tour-single-v2.html",
      image: "https://transvelo.github.io/mytravel-html/assets/img/300x230/img2.jpg",
      title: "Private Guided Tour of the Colosseum and Roman Forum",
      category: "History Tours",
      price: "£420.00",
      location: "Rome, Italy",
      rating: 4,
      reviews: 32,
      duration: "2 hours 30 minutes"
    },
    {
      id: 3,
      url: "../tour/tour-single-v3.html",
      image: "https://transvelo.github.io/mytravel-html/assets/img/300x230/img3.jpg",
      title: "Sunrise Hot Air Balloon Ride over the Serengeti",
      category: "Adventure Tours",
      price: "£650.00",
      location: "Serengeti National Park, Tanzania",
      rating: 5,
      reviews: 20,
      duration: "1 hour 30 minutes"
    },
    {
      id: 4,
      url: "../tour/tour-single-v4.html",
      image: "https://transvelo.github.io/mytravel-html/assets/img/300x230/img4.jpg",
      title: "Private Cooking Class in a Tuscan Villa",
      category: "Food and Wine Tours",
      price: "£380.00",
      location: "Tuscany, Italy",
      rating: 4,
      reviews: 15,
      duration: "3 hours 30 minutes"
    },
    {
      id: 5,
      url: "../tour/tour-single-v5.html",
      image: "https://transvelo.github.io/mytravel-html/assets/img/300x230/img5.jpg",
      title: "Guided Hike to the Summit of Mount Kilimanjaro",
      category: "Adventure Tours",
      price: "£850.00",
      location: "Mount Kilimanjaro, Tanzania",
      rating: 5,
      reviews: 10,
      duration: "6 hours 30 minutes"
    }
];

const PopularTours = () => {
  return (
    <div className='mt-4 position-relative'>
        <span id="swiper-popular-prev" className="swiper-btn swiper-button-prev"></span>
        <Swiper
            modules={[Navigation, Autoplay]} 
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false
            }}
            navigation={{
                nextEl: '#swiper-popular-next',
                prevEl: '#swiper-popular-prev',
            }}
            breakpoints={{
                640: {
                width: 640,
                slidesPerView: 3,
                },
                1366: {
                width: 1366,
                slidesPerView: 4,
                },
            }}
            speed={1500}
            className="mySwiper"
        >
            {slidesData.map(slide => (
                <SwiperSlide key={slide.id}>
                    <div className="card mb-1 transition-3d-hover shadow-hover-2 w-100">
                    <div className="position-relative mb-2">
                        <a href={slide.url} className="d-block gradient-overlay-half-bg-gradient-v5" tabIndex={0}>
                        <img className="card-img-top" src={slide.image} alt={slide.title} />
                        </a>
                        <div className="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later" tabIndex={0}>
                            <span className="flaticon-heart-1 font-size-20"></span>
                        </button>
                        </div>
                        <div className="position-absolute bottom-0 left-0 right-0">
                        <div className="px-3 pb-2">
                            <span className="text-color-13 font-weight-normal font-size-16 mb-1 d-block">{slide.category}</span>
                            <h2 className="h5 text-white mb-0 font-weight-bold font-size-17">
                            <small className="mr-2">From</small>{slide.price}
                            </h2>
                        </div>
                        </div>
                    </div>
                    <div className="card-body px-4 pt-2 pb-3">
                        <a href={slide.url} className="d-block" tabIndex={0}>
                        <div className="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> {slide.location}
                        </div>
                        </a>
                        <a href={slide.url} className="card-title text-dark font-size-17 font-weight-bold" tabIndex={0}>
                        {slide.title}
                        </a>
                        <div className="my-2">
                        <div className="d-inline-flex align-items-center font-size-13 text-lh-1">
                            <div className="green-lighter mr-2">
                            {Array(slide.rating).fill().map((_, index) => (
                                <small key={index} className="fas fa-star"></small>
                            ))}
                            </div>
                            <span className="text-secondary font-size-14 mt-1">{slide.reviews} Reviews</span>
                        </div>
                        </div>
                        <div className="font-size-14 text-gray-1">
                        <i className="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> {slide.duration}
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <span id="swiper-popular-next" className="swiper-btn swiper-button-next"></span>
    </div>
  );
};

export default PopularTours;