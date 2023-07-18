import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center pt-32">
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Loader;