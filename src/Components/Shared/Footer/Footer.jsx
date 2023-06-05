
import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../../assets/images/footer.png';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="mt-6 p-10" style={{background: `url(${footer})`, backgroundSize: 'cover'}}>
      <div className="footer">
        <div>
          <span className="footer-title">SERVICES</span>
          <Link to="/" className="link link-hover">Emergency Checkup</Link>
          <Link to="/" className="link link-hover">Monthly Checkup</Link>
          <Link to="/" className="link link-hover">Weekly Checkup</Link>
          <Link to="/" className="link link-hover">Daily Checkup</Link>
        </div>
        <div>
          <span className="footer-title">Orthopedic Treatment</span>
          <Link to="/" className="link link-hover">Knee Therapy</Link>
          <Link to="/" className="link link-hover">Spinal decompression</Link>
          <Link to="/" className="link link-hover">Ankle Repair</Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
            <Link to="/" className="link link-hover">221/B, Baker Street, London</Link>
        </div>
      </div>
      <div className="mt-8 text-center font-semibold">
        <p>Copyright © {year} - All right reserved by Health Hub Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
