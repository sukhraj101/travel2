import React from 'react';

const Banner = ({ backgroundImageUrl, title, subtitle, videoUrl, videoCaption }) => {
  return (
    <div 
      className="gradient-overlay-half-bg-grayish-blue bg-img-hero space-3 space-top-lg-4 space-bottom-lg-3" 
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="text-center mt-xl-2">
        <h5 className="text-white font-size-41 font-weight-bold mb-2">{title}</h5>
        <h6 className="text-white font-size-21 font-weight-bold mb-3 mb-lg-5 opacity-7">{subtitle}</h6>
        <a 
          className="js-fancybox d-inline-block u-media-player" 
          href="javascript:;" 
          data-src={videoUrl} 
          data-speed="700" 
          data-animate-in="zoomIn" 
          data-animate-out="zoomOut" 
          data-caption={videoCaption}
        >
          <span className="u-media-player__icon u-media-player__icon--lg bg-transparent text-white">
            <span className="flaticon-multimedia font-size-60 u-media-player__icon-inner"></span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
