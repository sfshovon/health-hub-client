import React from 'react';

const AppointmentOption = ({ appointmentOption, setSingleAppointment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-secondary">{name}</h2>
          <div>
          {
            slots.length > 0 ? slots[0] : <p className="font-semibold">Try Another Day</p>
          }
          <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
          </div>
          <div className="card-actions justify-center">
            {/* <button className="btn btn-primary text-white" onClick={()=>window.booking_modal.showModal()}>Book Appointmentl</button> */}
            <label
              disabled = {slots.length === 0}
              htmlFor = "booking-modal"
              className = "btn btn-primary text-white"
              onClick = {() => setSingleAppointment(appointmentOption)}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;