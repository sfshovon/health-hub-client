import React from 'react';
import Appointment from '../../Components/Appointment/Appointment';
import Banner from '../../Components/Banner/Banner';
import InfoCards from '../../Components/InfoCards/InfoCards';
import Reviews from '../../Components/Reviews/Reviews';
import Services from '../../Components/Services/Services';
import Terms from '../../Components/Terms/Terms';

const Home = () => {
  return (
    <div className="mx-5">
      <Banner/>
      <InfoCards/>
      <Services/>
      <Terms/>
      <Appointment/>
      <Reviews/>
    </div>
  );
};

export default Home;