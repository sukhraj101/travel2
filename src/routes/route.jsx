import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HomeLayout from '../pages/home/layout';
import HomePage from '../pages/home/homepage';
import Tourlist from '../pages/tour-list/tourlist';
import TourSingle from '../pages/tour-single';
import NotFound from '../pages/home/404/notfound';
import Terms from '../pages/home/terms/terms';
import FAQs from '../pages/home/faq/faq';
import AboutUs from '../pages/home/about/about';
import ContactUs from '../pages/home/contact/contact';
import Privacy from '../pages/home/privacy/privacy';
import Feedback from '../pages/home/feedback/feedback';
import BookingLayout from '../pages/home/tour-book/layout';
import Step1 from '../pages/home/tour-book/step1';
import Step2 from '../pages/home/tour-book/step2';
import Step3 from '../pages/home/tour-book/step3';
import Register from '../pages/home/register/register';
import MapListing from '../pages/home/maplisting/map-listing';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'tour-list',
                element: <Tourlist />
            },
            {
                path: 'tour-single',
                element: <TourSingle />
            },
            {
                path: 'terms',
                element: <Terms />
            },
            {
                path: 'faq',
                element: <FAQs />
            },
            {
                path: 'about-us',
                element: <AboutUs />
            },
            {
                path: 'contact-us',
                element: <ContactUs />
            },
            {
                path: 'privacy',
                element: <Privacy />
            },
            {
                path: 'feedback',
                element: <Feedback />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'map-listing',
                element: <MapListing />
            },
        ]
    },
    {
        path: "/booking",
        element: <BookingLayout />,
        children: [
            {
                path: 'step1',
                element: <Step1 />
            },
            {
                path: 'step2',
                element: <Step2 />
            },
            {
                path: 'step3',
                element: <Step3 />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export { router };
