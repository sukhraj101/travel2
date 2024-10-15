import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import BookingDetails from './booking-details';

export default function BookingLayout() {
  return (
    <>
        <Header />
            <main id="content" className="bg-gray space-2">
                <div className="container mt-2 mt-lg-1 mb-2 mb-lg-1">
                    <div className="row">
                        <div className="col-lg-8 col-xl-9">
                            <Outlet />
                        </div>
                        <div className="col-lg-4 col-xl-3">
                            <div className="shadow-soft bg-white rounded-sm">
                                <div className="pt-5 pb-3 px-5 border-bottom">
                                    <a href="#" className="d-block mb-3">
                                        <img className="img-fluid rounded-sm" src="../../assets/img/240x160/img5.jpg" alt="Image Description" />
                                    </a>
                                    <a href="#" className="text-dark font-weight-bold mb-2 d-block">
                                        5-Day Oahu Tour: Honolulu, Pearl Harbor, &amp; Diamond Head
                                    </a>
                                    <div className="mb-1 flex-horizontal-center text-gray-1">
                                        <i className="icon flaticon-pin-1 mr-2 font-size-15"></i> United Kingdom
                                    </div>
                                </div>
                                <BookingDetails/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer />
    </>
  )
}
