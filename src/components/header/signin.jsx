import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { BsFacebook, BsTwitter } from 'react-icons/bs';

const SignUpForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const toggleForm = () => {
    setIsSignup(prevState => !prevState);
  };

  return (
    <div className="position-relative px-3 u-header__login-form dropdown-connector-xl u-header__topbar-divider--dark">
      <a 
        id="signUpDropdownInvoker" 
        href="javascript:;" 
        className={`d-flex align-items-center text-dark ${isDropdownOpen ? 'active' : ''}`} 
        aria-controls="signUpDropdown" 
        aria-haspopup="true" 
        aria-expanded={isDropdownOpen}
        onClick={handleDropdownToggle}
      >
        <i className="flaticon-user mr-2 ml-1 font-size-18"></i>
        <span className="d-inline-block font-size-14 mr-1">Sign in or Register</span>
      </a>

      <div 
        id="signUpDropdown" 
        className={`dropdown-menu dropdown-unfold dropdown-menu-right py-0 mt-0 u-unfold--css-animation u-unfold--reverse-y slideInUp ${isDropdownOpen ? '' : 'u-unfold--hidden'}`} 
        aria-labelledby="signUpDropdownInvoker" 
        style={{ minWidth: '500px', animationDuration: '300ms', right: '0px' }}
      >
        <Card className="rounded-xs">
          <Form className="js-validate" noValidate method="post">
            {/* Toggle between Login and Signup */}
            <div id={isSignup ? "signup" : "login"} style={{ opacity: 1 }} className="animated fadeIn">
              {/* Header */}
              <Card.Header className="text-center">
                <h3 className="h5 mb-0 font-weight-semi-bold">{isSignup ? "Register" : "Login"}</h3>
              </Card.Header>

              <Card.Body className="pt-6 pb-4">
                {/* Email Form Group */}
                <Form.Group className="pb-1">
                  <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                    <label className="sr-only" htmlFor="email">{isSignup ? "Email" : "Email Or Username"}</label>
                    <div className="input-group input-group-transparent input-group-borderless input-group-radiusless">
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        placeholder={isSignup ? "Email" : "Email Or Username"}
                        aria-label={isSignup ? "Email" : "Email Or Username"}
                        required
                        data-msg="Please enter a valid email address."
                        data-error-className="u-has-error"
                        data-success-className="u-has-success"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <FaEnvelope className="font-size-20" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Form.Group>

                {/* Password Form Group */}
                <Form.Group className="pb-1">
                  <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                    <label className="sr-only" htmlFor="password">Password</label>
                    <div className="input-group input-group-transparent input-group-borderless input-group-radiusless">
                      <Form.Control
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        aria-label="Password"
                        required
                        data-msg="Your password is invalid. Please try again."
                        data-error-className="u-has-error"
                        data-success-className="u-has-success"
                      />
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaLock className="font-size-20" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Form.Group>

                {isSignup && (
                  <>
                    {/* Additional Fields for Signup */}
                    <Form.Group className="pb-1">
                      <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                        <label className="sr-only" htmlFor="fullName">Full Name</label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Full Name"
                          aria-label="Full Name"
                          required
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="pb-1">
                      <div className="js-form-message js-focus-state border border-width-2 border-color-8 rounded-sm">
                        <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="Confirm Password"
                          aria-label="Confirm Password"
                          required
                        />
                      </div>
                    </Form.Group>
                  </>
                )}

                <div className="mb-3 pb-1">
                  <Button type="submit" className="btn btn-md btn-block btn-blue-1 rounded-xs font-weight-bold transition-3d-hover">
                    {isSignup ? "Register" : "Login"}
                  </Button>
                </div>

                {!isSignup && (
                  <div className="d-flex justify-content-between mb-1">
                    <Form.Check
                      type="checkbox"
                      id="customCheckboxInline1"
                      label="Remember me"
                      className="custom-control-inline"
                    />
                    <a className="js-animation-link text-primary font-size-14" href="javascript:;" data-target="#forgotPassword" data-link-group="idForm" data-animation-in="fadeIn">
                      <u>Forgot Password?</u>
                    </a>
                  </div>
                )}
              </Card.Body>

              <Card.Footer className="p-0">
                <div className='border-bottom border-color-8'>
                  <div className="card-footer__top py-3 text-center">
                    <span className="d-block text-gray-1 fontsize-14">or continue with</span>
                  </div>
                  <div className="d-flex mb-3 px-6">
                    <Button className="btn btn-block btn-sm btn-facebook transition-3d-hover" href="#">
                      <BsFacebook className="mr-2" />
                      Facebook
                    </Button>
                    <Button className="btn btn-block btn-sm btn-twitter transition-3d-hover ml-5 mt-0" href="#">
                      <BsTwitter className="mr-2" />
                      Twitter
                    </Button>
                  </div>
                </div>
                <div className="card-footer__bottom p-4 text-center font-size-14">
                  <span className="text-gray-1">{isSignup ? "Already have an account?" : "Do not have an account?"}</span>{" "}
                  <a 
                    className="js-animation-link font-weight-bold" 
                    href="javascript:void(0);" 
                    onClick={toggleForm}
                  >
                    {isSignup ? "Login" : "Sign Up"}
                  </a>
                </div>
              </Card.Footer>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default SignUpForm;
