import React, { useState } from 'react';
import PageHeader from '../../../components/common/page-header';

export default function FAQs() {
    const breadcrumbs = [
        { label: 'Home', link: '/', active: false },
        { label: 'FAQs', active: true }
    ];

  const faqs = [
    { question: "I'm a solo traveler, is there a single supplement?", answer: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite." },
    { question: "Which currency is most widely accepted on this tour?", answer: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite." },
    { question: "Should I book pre/post tour accommodation?", answer: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite." },
    { question: "How do I edit my calendar?", answer: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite." },
    { question: "Why was my listing deactivated?", answer: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite." },
    { question: "How do I turn off or delete my listing?", answer: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite." },
    // Add more FAQs as needed
  ];

  // Initialize an array with the first FAQ open (index 0)
  const [collapsedStates, setCollapsedStates] = useState(
    faqs.map((_, index) => (index === 0 ? false : true))
  );

  const handleCollapseToggle = (index) => {
    setCollapsedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <>
        <PageHeader
            title="Frequently Asked Questions"
            breadcrumbs={breadcrumbs}
        />
        <div className="container mb-4 mb-lg-11 pb-lg-1">
            <div className="row">
                <div className="col-md-7 col-lg-8 col-xl-9 mx-auto">
                    <div id="basicsAccordion">
                        {faqs.map((faq, index) => (
                        <div key={index} className="card border-0 mb-4 pb-1">
                            <div className="card-header border-bottom-0 p-0" id={`heading${index}`}>
                            <h5 className="mb-0">
                                <button
                                type="button"
                                className="collapse-link btn btn-link btn-block d-flex align-items-md-center p-0"
                                onClick={() => handleCollapseToggle(index)}
                                aria-expanded={!collapsedStates[index]}
                                aria-controls={`collapse${index}`}
                                >
                                <div className="border border-color-8 rounded-xs border-width-2 p-2 mb-3 mb-md-0 mr-4">
                                    <figure id="rectangle" className="minus">
                                    <img
                                        className="js-svg-injector mb-0"
                                        src="../../assets/svg/illustrations/rectangle.svg"
                                        alt="Rectangle"
                                        data-parent="#rectangle"
                                    />
                                    </figure>
                                    <figure id="plus1" className="plus">
                                    <img
                                        className="js-svg-injector mb-0"
                                        src="../../assets/svg/illustrations/plus.svg"
                                        alt="Plus"
                                        data-parent="#plus1"
                                    />
                                    </figure>
                                </div>
                                <h6 className="font-weight-bold text-gray-3 mb-0">
                                    {faq.question}
                                </h6>
                                </button>
                            </h5>
                            </div>

                            <div
                            id={`collapse${index}`}
                            className={`collapse ${collapsedStates[index] ? '' : 'show'}`}
                            aria-labelledby={`heading${index}`}
                            data-parent="#basicsAccordion"
                            >
                            <div className="card-body pl-10 pl-md-10 pr-md-12 pt-0">
                                <p className="mb-0 text-gray-1 text-lh-lg">
                                {faq.answer}
                                </p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
