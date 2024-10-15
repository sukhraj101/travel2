import React from 'react';
import PageHeader from '../../../components/common/page-header';

export default function ContactUs() {
    const breadcrumbs = [
        { label: 'Home', link: '/', active: false },
        { label: 'Contact Us', active: true }
    ];
    
    return (
        <>
            <PageHeader 
                title="Contact Us"
                breadcrumbs={breadcrumbs}
            />
            <div className="border-bottom border-color-8 pb-6 pb-lg-8 mb-5 mb-lg-7">
                <div className="container pb-1">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="mb-5 mb-lg-0 text-center text-md-left">
                                <h6 className="text-gray-3 font-weight-bold font-size-21">London</h6>
                                <div className="mb-3 mb-md-5">
                                    <p className="mb-1 text-gray-1">82 Bernie Greens Apt. 210,</p>
                                    <p className="mb-0 text-gray-1">Hendon Way, London, UK</p>
                                </div>
                                <div className="mb-1">
                                    <p className="mb-1 text-gray-1">+53 213 5941 295</p>
                                    <p className="mb-0 text-gray-1">contact.london@example.com</p>
                                </div>
                                <a className="d-inline-block" href="#">
                                    <div className="border-bottom border-primary font-weight-normal font-size-14 text-primary">View On Map</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="mb-5 mb-lg-0 text-center text-md-left">
                                <h6 className="text-gray-3 font-weight-bold font-size-21">Paris</h6>
                                <div className="mb-3 mb-md-5">
                                    <p className="mb-1 text-gray-1">290 Maryam Springs Suite 260,</p>
                                    <p className="mb-0 text-gray-1">Courbevoie, Paris, France</p>
                                </div>
                                <div className="mb-0">
                                    <p className="mb-1 text-gray-1">+36 213 5941 295</p>
                                    <p className="mb-0 text-gray-1">contact.paris@example.com</p>
                                </div>
                                <a className="d-inline-block" href="#">
                                    <div className="border-bottom border-primary font-weight-normal font-size-14 text-primary">View On Map</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="text-center text-md-left">
                                <h6 className="text-gray-3 font-weight-bold font-size-21">New York</h6>
                                <div className="mb-3 mb-md-5">
                                    <p className="mb-1 text-gray-1">21 Valentin Rapids Apt. 335 New</p>
                                    <p className="mb-0 text-gray-1">Jersey, New York, USA</p>
                                </div>
                                <div className="mb-0">
                                    <p className="mb-1 text-gray-1">+47 213 5941 295</p>
                                    <p className="mb-0 text-gray-1">contact.newyork@example.com</p>
                                </div>
                                <a className="d-inline-block" href="#">
                                    <div className="border-bottom border-primary font-weight-normal font-size-14 text-primary">View On Map</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom border-color-8 pb-6 pb-lg-9 mb-6 mb-lg-8">
                <div className="container mb-10">
                    <div className="w-md-80 w-lg-50 text-center mx-md-auto my-3">
                        <h2 className="section-title text-black font-size-30 font-weight-bold mb-5 pb-xl-1">Sends us a Message</h2>
                    </div>
                    <div className="comment-section max-width-810 mx-auto">
                        <form className="js-validate" noValidate>
                            <div className="row">
                                <div className="col-sm-6 mb-5">
                                    <div className="js-form-message">
                                        <input type="text" className="form-control" name="name" placeholder="Name" aria-label="Jack Wayley" required data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-5">
                                    <div className="js-form-message">
                                        <input type="email" className="form-control" name="email" placeholder="Email" aria-label="jackwayley@gmail.com" required data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-5">
                                    <div className="js-form-message">
                                        <div className="input-group">
                                            <textarea className="form-control" rows="6" cols="77" name="text" placeholder="Message" aria-label="Hi there, I would like to ..." required data-msg="Please enter a reason." data-error-class="u-has-error" data-success-class="u-has-success"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-lg-start">
                                    <button type="submit" className="btn rounded-xs bg-blue-dark-1 text-white height-51 width-190 transition-3d-hover">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253576489!2d144.95372995111143!3d-37.817327679652266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1581584770980!5m2!1sen!2sin" width="100%" height="500" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </div>
        </>
    );
}
