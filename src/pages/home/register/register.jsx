import React from 'react'

export default function Register() {
  return (
    <>
        <div className="space-top-lg-1">
            <div className="container mb-10">
                <div className="w-md-80 w-lg-50 text-center mx-md-auto my-3">
                    <h2 className="section-title text-black font-size-30 font-weight-bold mb-5 pb-xl-1">Register to Become Vendor</h2>
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
                            <div className="col-sm-6 mb-5">
                                <div className="js-form-message">
                                    <input type="text" className="form-control" name="name" placeholder="Bisiness Name" aria-label="Jack Wayley" required data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                </div>
                            </div>
                            <div className="col-sm-6 mb-5">
                                <div className="js-form-message">
                                    <input type="text" className="form-control" name="name" placeholder="Business Email Address" aria-label="Jack Wayley" required data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                </div>
                            </div>
                            <div className="col-sm-6 mb-5">
                                <div className="js-form-message">
                                    <input type="text" className="form-control" name="name" placeholder="Location" aria-label="Jack Wayley" required data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                </div>
                            </div>
                            <div className="col-sm-6 mb-5">
                                <div className="js-form-message">
                                    <input type="text" className="form-control" name="name" placeholder="Contact No." aria-label="Jack Wayley" required data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success" />
                                </div>
                            </div>
                            <div className="col-sm-12 mb-5">
                                <div className="js-form-message">
                                    <div className="input-group">
                                        <textarea className="form-control" rows="6" cols="77" name="text" placeholder="Additional Busness Details" aria-label="Hi there, I would like to ..." required data-msg="Please enter a reason." data-error-class="u-has-error" data-success-class="u-has-success"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-lg-start">
                                <button type="submit" className="btn rounded-xs bg-blue-dark-1 text-white height-51 width-190 transition-3d-hover">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='border-bottom border-color-8'>
            <div className="container text-center space-top-lg-1 space-bottom-lg-2">
                <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-1 pt-5 pb-md-6">
                    <h2 className="section-title text-black font-size-30 font-weight-bold">How it Works</h2>
                </div>
                <div className="mb-6">
                    <div className="row">
                        <div className="col-lg-4 pb-4 pb-lg-0">
                            <img className="img-fluid pb-5" src="../../assets/img/icons/img8.jpg" alt="Sign Up" />
                            <div className="text-lg-left w-lg-80 mx-auto">
                                <h5 className="font-size-21 text-dark font-weight-bold mb-2"><a href="#">Sign Up</a></h5>
                                <p className="text-gray-1">Bringing you a modern, comfortable, and connected travel anything with us.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 pb-4 pb-lg-0">
                            <img className="img-fluid pb-5" src="../../assets/img/icons/img9.jpg" alt="Add Your Services" />
                            <div className="text-lg-left w-lg-80 ml-auto">
                                <h5 className="font-size-21 text-dark font-weight-bold mb-2"><a href="#">Add Your Services</a></h5>
                                <p className="text-gray-1">Bringing you a modern, comfortable, and connected travel anything with us.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 pb-4 pb-lg-0">
                            <img className="img-fluid pb-5" src="../../assets/img/icons/img10.jpg" alt="Get Bookings" />
                            <div className="text-lg-left w-lg-80 mx-auto">
                                <h5 className="font-size-21 text-dark font-weight-bold mb-2"><a href="#">Get Bookings</a></h5>
                                <p className="text-gray-1">Bringing you a modern, comfortable, and connected travel anything with us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
