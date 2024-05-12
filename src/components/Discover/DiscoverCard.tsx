import React from 'react';

const DiscoverCard = () => (
  <div className="w-full flex flex-col gap-6 text-center sm:px-[30px] px-[15px]">
    <div className="w-[24px] h-[24px] bg-primary rounded-[50%] mx-auto "></div>
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-semibold">Easy Registration</h3>
      <p>
        Register for events hassle-free and save time with our streamlined registration process.
      </p>
    </div>
  </div>
);

export default DiscoverCard;
