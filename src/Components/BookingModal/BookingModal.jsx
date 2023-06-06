import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({  selectedDate, singleAppointment, setSingleAppointment }) => {
  const { name, slots } = singleAppointment;
  const date = format(selectedDate, 'PP');

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
    console.log(booking);
    setSingleAppointment(null);
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
            <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
            <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
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