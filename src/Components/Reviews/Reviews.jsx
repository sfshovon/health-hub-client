import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.jpg';
import people3 from '../../../assets/images/people3.jpg';
import Review from './Review';

const Reviews = () => {
    const reviewsData = [
      {
        id: 1,
        name: 'Faha Wasima',
        userReview: 'The level of care I received at this clinic was outstanding. From the attentive staff to the expertise of the doctors, they made me feel confident and supported throughout my treatment. I am grateful for their commitment to my recovery and highly recommend their services.',
        img: people1
      },
      {
        id: 2,
        name: 'Ifrat John',
        userReview: "I was impressed by the personalized approach of the clinic. The doctors took the time to thoroughly understand my condition and tailored a treatment plan specifically for me. Thanks to their dedication and guidance, I am now on the road to recovery and couldn't be happier with the results",
        img: people2
      },
      {
        id: 3,
        name: 'Aney Ahmad',
        userReview: "Choosing this clinic for my orthopedic needs was the best decision I made. The team's professionalism and genuine concern for my well-being were evident from the moment I walked in. Their expertise and compassionate care made a significant difference in my healing process, and I am truly grateful for their support.",
        location: 'California',
        img: people3
      }
    ]

    return (
      <div className="mt-16">
        <div className="text-start">
          <h4 className="text-xl font-bold text-primary">Testimonial</h4>
          <h2 className="my-2 text-3xl">What Our Patients Says</h2>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          reviewsData.map(review => <Review key={review.id} review={review}/>)
        }
        </div>
      </div>
    );
};

export default Reviews;