import React from 'react';

const Review = ({ review }) => {
    const {name, userReview, location, img} = review;

    return (
      <div className="card bg-base-100 shadow-2xl">
        <div className="card-body">
          <p className="mt-2 text-lg text-justify font-semibold">{userReview}</p>
          <div className="mt-4 flex justify-start items-center gap-6">
            <figure className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="People" />
            </figure>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">{name}</h2>
              <h2 className="text-md font-semibold">{location}</h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;