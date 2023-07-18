import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({  selectedDate, singleAppointment, setSingleAppointment, refetch }) => {
  const { name, slots } = singleAppointment;
  const date = format(selectedDate, 'PP');
  const { user } = useContext(AuthContext);

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
    }
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged) {
        setSingleAppointment(null);
        toast.success("Booking Has Been Confirmed")
        refetch();
      }
      else{
        toast.error(data.message)
      }
    })  
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="mt-10 grid grid-cols-1 gap-3">
            <input type="text" disabled value={date} className="input w-full input-bordered " />
            <select name="slot" className="select select-bordered w-full">
            {
              slots.map((slot, index) => 
                <option value={slot} key={index}>
                  {slot}
                </option>
              )
            }
            </select>
            <input name="name" type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
            <input name="email" type="email" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
            <br />
            <input className="btn btn-accent w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;