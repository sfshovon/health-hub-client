import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import scheduleAppointment from '../../../assets/images/schedule-appointment.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Appointment = () => {
    return (
      <section className="mt-32" style={{ background: `url(${appointment})`}}>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img src={scheduleAppointment} className="-mt-40 hidden md:block lg:w-1/2 rounded-lg bg-transparent" alt="Doctor" />
            <div>
              <h4 className="text-lg text-primary font-bold">Appointment</h4>
              <h1 className="text-white text-4xl font-bold">Schedule an appointment today</h1>
              <p className="text-white py-6">Take proactive action towards your health by scheduling an appointment right away. Our dedicated team is ready to provide you with timely and personalized care, addressing your concerns and guiding you on the path to wellness. Don't wait any longer – secure your appointment and embark on your journey to improved well-being.</p>
              <PrimaryButton>Appointment</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Appointment;