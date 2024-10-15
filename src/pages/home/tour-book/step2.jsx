import React from 'react'
import { Link } from 'react-router-dom';

export default function Step2() {
  return (
    <>
        <div className="mb-5 shadow-soft bg-white rounded-sm">
            <div className="py-3 px-4 px-xl-12 border-bottom">
                <ul className="list-group flex-nowrap overflow-auto overflow-md-visible list-group-horizontal list-group-borderless flex-center-between pt-1">
                    <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                        <div className="flex-content-center mb-3 width-40 height-40 border border-width-2 border-gray mx-auto rounded-circle">
                            1
                        </div>
                        <div className="text-gray-1">Customer information</div>
                    </li>
                    <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                        <div className="flex-content-center mb-3 width-40 height-40 bg-primary border-width-2 border border-primary text-white mx-auto rounded-circle">
                            2
                        </div>
                        <div className="text-primary">Payment information</div>
                    </li>
                    <li className="list-group-item text-center flex-shrink-0 flex-md-shrink-1">
                        <div className="flex-content-center mb-3 width-40 height-40 border border-width-2 border-gray mx-auto rounded-circle">
                            3
                        </div>
                        <div className="text-gray-1">Booking is confirmed!</div>
                    </li>
                </ul>
            </div>
            <div className="pt-4 pb-5 px-5">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                    Your Card Information
                </h5>
                <ul className="nav nav-classic nav-choose border-0 nav-justified border mx-n3" role="tablist">
                    <li className="nav-item mx-3 mb-4 mb-md-0">
                        <a className="rounded py-5 border-width-2 border nav-link font-weight-medium active" id="pills-one-example2-tab" data-toggle="pill" href="#pills-one-example2" role="tab" aria-controls="pills-one-example2" aria-selected="true">
                            <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                                <i className="flaticon-tick text-white font-size-15"></i>
                            </div>
                            <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                                <img className="img-fluid mb-3" src="../../assets/img/199x35/img1.jpg" alt="Payment with credit card" />
                                <div className="w-100 text-dark">Payment with credit card</div>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="rounded py-5 border-width-2 border nav-link font-weight-medium" id="pills-two-example2-tab" data-toggle="pill" href="#pills-two-example2" role="tab" aria-controls="pills-two-example2" aria-selected="false">
                            <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                                <i className="flaticon-tick text-white font-size-15"></i>
                            </div>
                            <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                                <img className="img-fluid mb-3" src="../../assets/img/199x35/img2.jpg" alt="Payment with PayPal" />
                                <div className="w-100 text-dark">Payment with PayPal</div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade pt-8 show active" id="pills-one-example2" role="tabpanel" aria-labelledby="pills-one-example2-tab">
                        <form className="js-validate" noValidate>
                            <div className="row">
                                <div className="col-sm-6 mb-4">
                                    <div className="js-form-message">
                                        <label className="form-label">Card Holder Name</label>
                                        <input type="text" className="form-control" name="Cardname" required data-msg="Please enter card holder name." data-error-class="u-has-error" data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="js-form-message">
                                        <label className="form-label">Card Number</label>
                                        <input type="number" className="form-control" name="Cardnumber" required data-msg="Please enter card number." data-error-class="u-has-error" data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-sm-6 mb-4 mb-md-0">
                                            <div className="js-form-message">
                                                <label className="form-label">Expiry Month</label>
                                                <input type="number" className="form-control" name="Expirymonth" required data-msg="Please enter expiry month." data-error-class="u-has-error" data-success-class="u-has-success" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="js-form-message">
                                                <label className="form-label">Expiry Year</label>
                                                <input type="number" className="form-control" name="Expiryyear" required data-msg="Please enter expiry year." data-error-class="u-has-error" data-success-class="u-has-success" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="js-form-message">
                                        <label className="form-label">CCV</label>
                                        <input type="number" className="form-control" name="ccvnumber" required data-msg="Please enter ccv number." data-error-class="u-has-error" data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col">
                                    <div className="js-form-message mb-5">
                                        <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                                            <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="termsCheckbox" required data-msg="Please accept our Terms and Conditions." data-error-class="u-has-error" data-success-class="u-has-success" />
                                            <label className="custom-control-label" htmlFor="termsCheckbox">
                                                <small>
                                                    By continuing, you agree to the <a className="link-muted" href="../pages/terms.html">Terms and Conditions</a>
                                                </small>
                                            </label>
                                        </div>
                                    </div>
                                    {/* <button type="submit" className="btn btn-primary w-100 rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3">CONFIRM BOOKING</button> */}
                                    <Link to="/booking/step3" className="btn btn-primary w-100 rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3">
                                        CONFIRM BOOKING
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane fade pt-8" id="pills-two-example2" role="tabpanel" aria-labelledby="pills-two-example2-tab">
                        <form className="js-validate" noValidate>
                            <div id="login" data-target-group="idForm">
                                <div className="form-group">
                                    <div className="js-form-message js-focus-state">
                                        <label className="sr-only" htmlFor="signinEmail">Email</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="signinEmailLabel">
                                                    <span className="fas fa-user"></span>
                                                </span>
                                            </div>
                                            <input type="email" className="form-control" name="email" id="signinEmail" required data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <div className="js-form-message js-focus-state">
                                        <label className="sr-only" htmlFor="signinPassword">Password</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="signinPasswordLabel">
                                                    <span className="fas fa-lock"></span>
                                                </span>
                                            </div>
                                            <input type="password" className="form-control" name="password" id="signinPassword" required data-msg="Your password is invalid. Please try again." data-error-class="u-has-error" data-success-class="u-has-success" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                                        <input type="checkbox" className="custom-control-input" id="rememberCheckbox" name="rememberCheckbox" />
                                        <label className="custom-control-label" htmlFor="rememberCheckbox">
                                            <small>Remember me</small>
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3">SIGN IN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}