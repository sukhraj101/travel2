import React from 'react';

export default function PageHeader({ bgImageUrl = "https://transvelo.github.io/mytravel-html/assets/img/1920x400/img3.jpg", title, breadcrumbs }) {
  return (
    <div
      className="bg-img-hero text-center mb-5 mb-lg-8"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="container space-top-xl-2 py-6 py-xl-0">
        <div className="row justify-content-center py-xl-4">
          <div className="py-xl-10 py-5">
            <h1 className="font-size-40 font-size-xs-30 text-white font-weight-bold mb-0">
              {title}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-no-gutter justify-content-center mb-0">
                {breadcrumbs.map((breadcrumb, index) => (
                  <li
                    key={index}
                    className={`breadcrumb-item font-size-14 ${
                      breadcrumb.active ? 'custom-breadcrumb-item text-white active' : ''
                    }`}
                    aria-current={breadcrumb.active ? 'page' : undefined}
                  >
                    {breadcrumb.active ? (
                      breadcrumb.label
                    ) : (
                      <a className="text-white" href={breadcrumb.link}>
                        {breadcrumb.label}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
