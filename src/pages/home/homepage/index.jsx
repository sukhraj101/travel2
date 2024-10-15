import React from 'react';
import PopularTours from './popular-tours';
import DynamicFeatures from './features';
import PopularDestinations from './popular-destinations';
import Banner from './banner';
import RecentArticles from './recent-articles';
import Clients from './clients';
import SearchSection from './hero';

export default function HomePage() {
  return (
    <>
        <SearchSection/>
        
        <DynamicFeatures/>

        <PopularDestinations/>
        
        <div className="product-card-block product-card-v1 border-bottom border-color-8">
            <div className="container space-1">
                <div className="w-md-80 w-lg-50 text-center mx-md-auto mt-3">
                    <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Popular Tours</h2>
                </div>
                <PopularTours />
            </div>
        </div>

        <Banner
            backgroundImageUrl="https://transvelo.github.io/mytravel-html/assets/img/1920x500/img5.jpg"
            title="Travelling Highlights"
            subtitle="Your New Travelling Idea"
            videoUrl="//vimeo.com/167434033"
            videoCaption="MyTravel - Responsive Website Template"
        />

        <RecentArticles/>

        <Clients/>
        
    </>
  )
}
