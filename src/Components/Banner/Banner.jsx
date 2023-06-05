import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="../../../assets/images/banner-image.png" className="lg:w-1/2 rounded-lg" alt="banner"/>
          {/* <img src="../../../assets/images/banner-image.png" className="lg:w-1/2 rounded-lg shadow-2xl" alt="banner"/> */}
          <div>
            <h1 className="text-5xl font-bold">Embark on a Journey of Optimal Wellness</h1>
            <p className="py-6">Discover a transformative path to vibrant well-being, where your health and vitality reach new heights. Let us guide you towards optimal wellness, empowering you to live your best life.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;