import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './layout.scss';

const HomeLayout = () => {
  return (
    <>
      <Header />
        <main id="content">
          <Outlet />
        </main>
      <Footer />
    </>
  );
}

export default HomeLayout;