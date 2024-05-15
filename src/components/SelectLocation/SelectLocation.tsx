import React from 'react';

const SelectLocation = () => (
  <div className=" grid gap-8">
    <input
      type="text"
      placeholder="Location"
      className="w-full py-2 border-b border-b-black outline-none"
    />
    <button className="btn border-0 w-[152px] mx-auto bg-primary text-white">Get Started</button>
  </div>
);

export default SelectLocation;
