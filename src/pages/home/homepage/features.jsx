import React from 'react';

const features = [
  {
    iconClass: 'flaticon-placeholder-2',
    title: '2.000 +Destinations',
    description: 'Our expert team handpicked all destinations in this site',
    link: '#',
  },
  {
    iconClass: 'flaticon-price-1',
    title: 'Best Price Guarantee',
    description: 'Price match within 48 hours of order confirmation',
    link: '#',
  },
  {
    iconClass: 'flaticon-customer-service',
    title: 'Top Notch Support',
    description: 'We are here to help, before, during, and even after your trip.',
    link: '#',
  },
];

const DynamicFeatures = () => (
  <div className="icon-block-left icon-left-v1 border-bottom border-color-8 pb-3 pt-5 mt-1">
    <div className="container">
      <div className="row">
        {features.map((feature, index) => (
          <div className="col-md-4" key={index}>
            <div className="media pr-xl-14">
              <i className={`${feature.iconClass} text-primary font-size-50 text-lh-1 mb-3 mr-3`}></i>
              <div className="media-body">
                <h5 className="font-size-19 text-dark font-weight-bold mb-1">
                  <a href={feature.link}>{feature.title}</a>
                </h5>
                <p className="text-gray-1 text-lh-inherit">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DynamicFeatures;
