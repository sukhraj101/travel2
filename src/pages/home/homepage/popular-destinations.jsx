import React from 'react';

const destinations = [
  {
    country: 'United Kingdom',
    tours: 15,
    imgUrl: 'https://transvelo.github.io/mytravel-html/assets/img/630x350/img1.jpg',
    link: '../others/destination.html',
    tourLink: '../tour/tour-list.html',
  },
  {
    country: 'Turkey',
    tours: 88,
    imgUrl: 'https://transvelo.github.io/mytravel-html/assets/img/300x350/img6.jpg',
    link: '../others/destination.html',
    tourLink: '../tour/tour-list.html',
  },
  {
    country: 'Norway',
    tours: 92,
    imgUrl: 'https://transvelo.github.io/mytravel-html/assets/img/300x350/img5.jpg',
    link: '../others/destination.html',
    tourLink: '../tour/tour-list.html',
  },
  {
    country: 'United States',
    tours: 75,
    imgUrl: 'https://transvelo.github.io/mytravel-html/assets/img/300x350/img1.jpg',
    link: '../others/destination.html',
    tourLink: '../tour/tour-list.html',
  },
  {
    country: 'Ukraine',
    tours: 5,
    imgUrl: 'https://transvelo.github.io/mytravel-html/assets/img/300x350/img3.jpg',
    link: '../others/destination.html',
    tourLink: '../tour/tour-list.html',
  },
  {
    country: 'France',
    tours: 5,
    imgUrl: 'https://transvelo.github.io/mytravel-html/assets/img/300x350/img2.jpg',
    link: '../others/destination.html',
    tourLink: '../tour/tour-list.html',
  },
  {
    country: 'India',
    tours: 65,
    imgUrl: 'https://transvelo.github.io/mytravel-html/assets/img/300x350/img4.jpg',
    link: '../others/destination.html',
    tourLink: '../tour/tour-list.html',
  },
  {
    country: 'United Kingdom',
    tours: 15,
    imgUrl: 'https://transvelo.github.io/mytravel-html/assets/img/630x350/img1.jpg',
    link: '../others/destination.html',
    tourLink: '../tour/tour-list.html',
  },
];

const PopularDestinations = () => (
  <div className="destination-block destination-v5 border-bottom border-color-8">
    <div className="container space-1">
      <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mt-3">
        <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Popular Destination</h2>
      </div>
      <div className="row">
        {destinations.map((destination, index) => (
          <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1" key={index}>
            <div
              className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2"
              style={{ backgroundImage: `url(${destination.imgUrl})` }}
            >
              <header className="w-100 d-flex justify-content-between mb-3">
                <div>
                  <div className="pb-3 text-lh-1">
                    <a href={destination.link} className="text-white font-weight-bold font-size-21">
                      {destination.country}
                    </a>
                  </div>
                  <div className="d-inline-flex px-3 py-1 rounded-pill bg-white">
                    <a href={destination.tourLink} className="font-size-14">
                      {destination.tours} Tour{destination.tours > 1 ? 's' : ''}
                    </a>
                  </div>
                </div>
              </header>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PopularDestinations;
