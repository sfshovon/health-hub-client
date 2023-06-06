import React, { useState } from 'react';
import AvailableAppointments from '../../Components/AvailableAppointments/AvailableAppointments';
import AppointmentBanner from '../../Components/Banners/AppointmentBanner';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <div>
      <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <AvailableAppointments selectedDate={selectedDate}/>
    </div>
  );
};

export default Appointment;