import Image from 'next/image';
import React from 'react';
import { RiTimerLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';

const EventCard = () => (
  <div className="w-full sm:mx-0 mx-auto min-h-[427] max-w-[405px] flex flex-col rounded-xl border">
    <div className="relative w-full h-[235px]">
      <Image
        src="/eventCardImg.png"
        alt="eventCard"
        layout="fill"
        objectFit="cover"
        className="rounded-t-xl"
      />
    </div>
    <div className="p-6">
      <div className="flex flex-col gap-[22px]">
        <div className="flex gap-[22px]">
          <div className="w-full grid gap-4">
            <h3 className="text-xl font-bold">Event Name</h3>
            <div className="flex items-center gap-2 font-semibold">
              {/* <CiLocationOn size={25} /> */}
              <SlLocationPin size={25} />
              <p>Event Location</p>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <RiTimerLine size={25} />
              <p>Event Time</p>
            </div>
          </div>
          <div className="w-[66px] h-[66px] py-[5px] px-4 text-primary bg-secondary rounded-md flex flex-col items-center justify-center">
            <p className="font-bold">OCT</p>
            <h4 className="text-2xl font-bold">08</h4>
          </div>
        </div>
        <div className="flex gap-[22px] justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[50%] bg-green-500"></div>
            <p className="text-green-500">Live</p>
          </div>
          <div className="w-[66px] text-center">
            <p className="font-bold">Free</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventCard;
