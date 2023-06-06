import React from 'react';
import HomeBanner from '../../Components/Banners/HomeBanner';
import InfoCards from '../../Components/InfoCards/InfoCards';
import MakeAppointment from '../../Components/MakeAppointment/MakeAppointment';
import Reviews from '../../Components/Reviews/Reviews';
import Services from '../../Components/Services/Services';
import Terms from '../../Components/Terms/Terms';

const Home = () => {
  return (
    <div className="mx-5">
      <HomeBanner/>
      <InfoCards/>
      <Services/>
      <Terms/>
      <MakeAppointment/>
      <Reviews/>
    </div>
  );
};

export default Home;