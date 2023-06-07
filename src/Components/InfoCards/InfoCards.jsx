import React from 'react';
import clock from '../../../assets/icons/clock.png';
import email from '../../../assets/icons/email.png';
import location from '../../../assets/icons/location.png';
import InfoCard from './InfoCard';

const InfoCards = () => {
  const cardData = [
    {
        id: 1,
        name: 'Opening Hours',
        description: 'Everyday 9.00 AM - 5.00 PM',
        icon: clock,
        bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id: 2,
      name: 'Contact Us',
      description: 'info@health-hub.com',
      icon: email,
      bgClass: 'bg-accent'
    },
    {
        id: 3,
        name: 'Our Locations',
        description: '221/B, Baker Street, London',
        icon: location,
        bgClass: 'bg-gradient-to-r from-primary to-secondary'
    }
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