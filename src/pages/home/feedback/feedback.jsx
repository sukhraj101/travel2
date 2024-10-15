import React from 'react';
import PageHeader from '../../../components/common/page-header';

export default function Feedback() {
    const breadcrumbs = [
        { label: 'Home', link: '/', active: false },
        { label: 'Give Us Your Feedback', active: true }
    ];
    
    return (
        <>
            <PageHeader 
                title="Give Us Your Feedback"
                breadcrumbs={breadcrumbs}
            />
            <div className="border-bottom border-color-8 pb-6 pb-lg-9 mb-6 mb-lg-8">
                <div className="container mb-10">
                    <div className="w-md-80 w-lg-50 text-center mx-md-auto my-3">
                        <h2 className="section-title text-black font-size-30 font-weight-bold mb-5 pb-xl-1">Send Us Your Feedback</h2>
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
            </div>
        </>
    );
}
