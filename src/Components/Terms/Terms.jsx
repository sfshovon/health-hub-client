import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Terms = () => {
  return (
    <div>
      <div className="mt-16 hero">
        <div className="hero-content flex-col lg:flex-row gap-20 mx-auto">
          <div className="border-2 border-grey-900 rounded-2xl">
            <img src="../../../assets/images/effective-care.png" className="max-w-sm md:max-w-md rounded-xl shadow-2xl" />
          </div>
          <div className="md:w-5/12">
            <h1 className="text-5xl font-bold">Experience Effective and Reliable Care</h1>
            <p className="text-lg text-justify py-6 font-semibold">Discover a journey of lasting recovery with our exceptional and reliable care, designed to provide effective treatment and support for your specific needs. Our dedicated team of experts combines expertise, cutting-edge techniques, and compassionate care to ensure your well-being is prioritized at every step. Experience the difference of our comprehensive approach as we guide you towards a healthier and happier future.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;