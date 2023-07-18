import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
  const [singleAppointment, setSingleAppointment] = useState(null);
  const date = format(selectedDate, 'PP');

  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    }
  });

  if(isLoading) {
    return <Loading/>
  }
  
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  // useEffect( () => {
  //   fetch('http://localhost:5000/appointmentOptions')
  //   .then(res => res.json())
  //   .then(data => setAppointmentOptions(data))
  // }, [])
  
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
          <BookingModal selectedDate={selectedDate} singleAppointment={singleAppointment} setSingleAppointment={setSingleAppointment} refetch={refetch}
        />
      }
      
    </section>
  );
};

export default AvailableAppointments;