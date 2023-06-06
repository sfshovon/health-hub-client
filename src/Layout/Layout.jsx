import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-20">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;