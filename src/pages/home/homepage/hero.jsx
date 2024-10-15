import React from 'react';
import SearchTour from './hero/search-tour';

const SearchSection = () => {
    return (
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
    )
}
export default SearchSection
