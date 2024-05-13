import Image from 'next/image';
import React from 'react';
import { BsTwitterX, BsYoutube } from 'react-icons/bs';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <section className="py-[56px] grid gap-8">
    <div className="flex tablet:flex-row flex-col tablet:gap-[80px] gap-[60px]">
      <div className="grid gap-8 max-w-[396px]">
        <h3 className="font-bold text-xl">About EventWave</h3>
        <p>
          We set out to redefine event experiences. What started as a passion project soon evolved
          into a full-fledged entity, and our journey has been marked by collaborations, and
          challenges.
        </p>
      </div>
      <div className="w-full grid tablet:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6">
        <div className="grid gap-6">
          <h3 className="font-bold text-xl">Company</h3>
          <div className="grid gap-2">
            <p>About us</p>
            <p>Our services</p>
            <p>Our Works</p>
            <p>Career</p>
          </div>
        </div>
        <div className="grid gap-6">
          <h3 className="font-bold text-xl">Resources</h3>
          <div className="grid gap-2">
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>
        <div className="grid gap-6">
          <h3 className="font-bold text-xl">Others</h3>
          <div className="grid gap-2">
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex md:flex-row flex-col gap-3 items-center justify-between">
      <div className="w-full grid gap-4">
        <div className="w-[133px] h-[16px]">
          <Image src="/eventWaveLogo.svg" alt="eventwave logo" width={133} height={16} />
        </div>
        <p>© 2012-2023, All Rights Reserved</p>
      </div>
      <div className="w-full flex items-center md:justify-end justify-start gap-4 text-white">
        <button className="w-[40px] h-[40px] bg-primary rounded-[50%] flex items-center justify-center">
          <FaFacebook size={25} />
        </button>
        <button className="w-[40px] h-[40px] bg-primary rounded-[50%] flex items-center justify-center">
          <BsTwitterX size={20} />
        </button>
        <button className="w-[40px] h-[40px] bg-primary rounded-[50%] flex items-center justify-center">
          <FaInstagram size={25} />
        </button>
        <button className="w-[40px] h-[40px] bg-primary rounded-[50%] flex items-center justify-center">
          <BsYoutube size={25} />
        </button>
      </div>
    </div>
  </section>
);

export default Footer;
