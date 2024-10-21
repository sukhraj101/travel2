import React from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SearchTour from './hero/search-tour';

const slidesData = [
    {
      id: 1,
      image: "https://transvelo.github.io/mytravel-html/assets/img/1920x600/img1.jpg",
    },
    {
      id: 2,
      image: "https://transvelo.github.io/mytravel-html/assets/img/1920x600/img1.jpg",
    },
    {
      id: 3,
      image: "https://transvelo.github.io/mytravel-html/assets/img/1920x600/img1.jpg",
    },
    {
      id: 4,
      image: "https://transvelo.github.io/mytravel-html/assets/img/1920x600/img1.jpg",
    },
    {
      id: 5,
      image: "https://transvelo.github.io/mytravel-html/assets/img/1920x600/img1.jpg",
    }
];

const SearchSection = () => {
    return (
        <>
            {/* <div className='position-relative'>
                <span id="swiper-popular-prev" className="swiper-btn swiper-button-prev"></span>
                <Swiper
                    modules={[Navigation]} 
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '#swiper-popular-next',
                        prevEl: '#swiper-popular-prev',
                    }}
                    speed={1500}
                    className="heroSwiper"
                >
                    {slidesData.map(slide => (
                        <SwiperSlide key={slide.id} className='gradient-overlay-half-gray-gradient'>
                            <img className="card-img-top" src={slide.image} alt={slide.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <span id="swiper-popular-next" className="swiper-btn swiper-button-next"></span>
            </div> */}
            <div className="bg-img-hero-bottom min-height-600 gradient-overlay-half-gray-gradient space-top-lg-3 space-2" style={{ backgroundImage: 'url(https://transvelo.github.io/mytravel-html/assets/img/1920x600/img1.jpg)' }}>
                <div className="container">
                    <div className="d-md-flex align-items-lg-center text-center">
                        <div className="row justify-content-md-center w-100 pt-4">
                            <div className="mx-3 mb-xl-3 mt-xl-4 mb-2">
                            <h1 className="font-size-60 font-size-xs-30 text-white font-weight-bold mb-0">Find Next Place To Visit</h1>
                            <p className="font-size-20 font-weight-normal text-white ml-3">Discover amazing places at exclusive deals</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0">
                            <SearchTour/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchSection
