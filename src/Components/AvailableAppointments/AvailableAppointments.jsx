import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [singleAppointment, setSingleAppointment] = useState(null);

  useEffect( () => {
    fetch('appointmentOptions.json')
    .then(res => res.json())
    .then(data => setAppointmentOptions(data))
  }, [])
  
  return (
    <section className="my-16">
      <p className="text-2xl text-center font-bold text-secondary">Available Appointment on {format(selectedDate, 'PP')}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        appointmentOptions.map(option => 
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setSingleAppointment={setSingleAppointment}
          ></AppointmentOption>)
      }
      </div>
      {
        singleAppointment && 
          <BookingModal selectedDate={selectedDate} singleAppointment={singleAppointment} setSingleAppointment={setSingleAppointment}
        />
      }
      
    </section>
  );
};

export default AvailableAppointments;