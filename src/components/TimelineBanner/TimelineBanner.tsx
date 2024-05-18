import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TimelineBanner = () => (
  <div className="w-full h-[416px] relative bg-black mx-auto">
    <div className="w-full h-full bg-white/25 absolute left-0 top-0 z-10"></div>
    <Image src="/timelineHeader.svg" alt="timelineHeader" layout="fill" objectFit="cover" />
    <div className="sm:w-auto w-full flex sm:flex-row flex-col absolute bottom-8 md:left-20 sm:left-10 left-0 sm:pl-0 px-10 gap-5 z-20">
      <button className="btn sm:w-[185px] w-full bg-primary border-none text-white font-bold">
        Create An Event
      </button>
      <Link href="/explore">
        <button className="btn sm:w-[185px] w-full border-primary text-primary font-bold">
          Explore Other Events
        </button>
      </Link>
    </div>
  </div>
);

export default TimelineBanner;
