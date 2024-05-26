import Image from 'next/image';
import React from 'react';

const EventBanner = () => (
  <div className="w-full h-[416px] relative bg-black mx-auto">
    <Image src="/eventDetailHeader.png" alt="eventDetailHeader" layout="fill" objectFit="cover" />
  </div>
);

export default EventBanner;
