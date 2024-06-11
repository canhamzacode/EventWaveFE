import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <section className="w-full sm:py-0 py-[18px] bg-white flex justify-between items-center">
    <div className="flex items-center gap-14 py-[18px]">
      <div className="w-[133px] h-[16px]">
        <Image src="/eventWaveLogo.svg" alt="eventwave logo" width={133} height={16} />
      </div>
      <div className="tablet:flex hidden items-center gap-6 text-base font-bold">
        <p className="text-primary">Home</p>
        <p>Upcoming Events</p>
        <p>Join Event</p>
        <div>
          <p>More Options</p>
        </div>
      </div>
    </div>
    <div className="w-[504px] tablet:flex hidden absolute right-0 py-[18px] h-[88px] pl-20 bg-primary"></div>
    <div className="tablet:w-[424px]  top-0 py-[18px] sm:flex hidden gap-6 z-10 justify-end">
      <Link href="/auth/signin">
        <button className="btn border-white bg-primary text-white">Login</button>
      </Link>
      <Link href="/auth/signup">
        <button className="btn border-white text-primary bg-white">Sign up</button>
      </Link>
    </div>
  </section>
);

export default Navbar;
