import Image from 'next/image';
import React from 'react';
import DiscoverCard from './DiscoverCard';

const Discover = () => (
  <section className="w-full tablet:py-[96px] py-[48px] grid gap-[80px] relative">
    <div className="w-full max-w-[768px] mx-auto text-center grid gap-6">
      <div className="grid gap-4">
        <p className="text-base text-primary font-bold">Discover</p>
        <div className="relative">
          <h1>Simplify Event Management with Our Platform</h1>
          <Image
            src="/star.svg"
            width={24}
            height={40}
            alt="star"
            className="absolute right-0 -top-4"
          />
        </div>
      </div>
      <p>
        Our platform offers easy registration, event discovery, and networking opportunities, making
        event management a breeze.
      </p>
      <Image
        src="/discoverIllustration.svg"
        width={28}
        height={184}
        alt="discoverIllustration img"
        className="absolute tablet:flex hidden left-[80px]"
      />
    </div>
    <div className="grid tablet:grid-cols-[1fr,478px,1fr] grid-cols-1 items-center gap-12">
      <div className="grid tablet:gap-[64px] gap-[32px]">
        <DiscoverCard />
        <DiscoverCard />
      </div>
      <Image
        src="/discoverImg.svg"
        width={478}
        height={440}
        alt="discover Hero img"
        className="mx-auto"
      />
      <div className="grid tablet:gap-[64px] gap-[32px]">
        <DiscoverCard />
        <DiscoverCard />
      </div>
    </div>
    <div className="w-full flex items-center justify-center">
      <button className="btn w-[166px] border-0 bg-primary text-white">Create an account</button>
    </div>
  </section>
);

export default Discover;
