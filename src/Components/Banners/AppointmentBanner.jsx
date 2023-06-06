import React from 'react';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="../../../assets/images/banner-image.png" className="max-w-sm rounded-lg" />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;