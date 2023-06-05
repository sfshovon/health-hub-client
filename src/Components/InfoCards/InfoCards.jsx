import React from 'react';
import clock from '../../../assets/icons/clock.png';
import location from '../../../assets/icons/location.png';
import phone from '../../../assets/icons/phone.png';
import InfoCard from './InfoCard';

const InfoCards = () => {
  const cardData = [
    {
        id: 1,
        name: 'Opening Hours',
        description: 'Open 9.00 am to 5.00pm everyday',
        icon: clock,
        bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
        id: 2,
        name: 'Our Locations',
        description: 'Open 9.00 am to 5.00pm everyday',
        icon: location,
        bgClass: 'bg-accent'
    },
    {
        id: 3,
        name: 'Contact Us',
        description: 'Open 9.00 am to 5.00pm everyday',
        icon: phone,
        bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
]

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        cardData.map(card => 
          <InfoCard key={card?.id} card={card}/>
        )
      }
    </div>
  );
};

export default InfoCards;