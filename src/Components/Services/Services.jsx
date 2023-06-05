import React from 'react';
import spinal from '../../../assets/images/spinal.png';
import knee from '../../../assets/images/knee.png';
import sprained from '../../../assets/images/sprained.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
      {
        id: 1,
        name: 'Knee Therapy',
        description: ' Comprehensive rehabilitation and specialized treatments to alleviate pain in the knee',
        img: knee
      },
      {
        id: 2,
        name: 'Spinal decompression',
        description: 'Non-surgical therapy that gently stretches the spine, relieving pressure on spinal discs',
        img: spinal
      },
      {
        id: 3,
        name: 'Ankle Repair',
        description: 'Advanced surgical procedures and rehabilitation for repairing injured ankles',
        img: sprained
      }
    ]

    return (
      <div className="mt-16">
        <div className="text-center">
          <h4 className="text-xl font-bold text-primary uppercase">Our Services</h4>
          <h2 className="text-3xl">Services We Provide</h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          servicesData.map(service => <Service key={service.id} service={service}/>)
        }
        </div>
      </div>
    );
};

export default Services;