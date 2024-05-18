import Image from 'next/image';
import React from 'react';
import { RiTimerLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';

interface EventCardProps {
  title: string;
  img?: string;
  location: string;
  time: string;
  month: string;
  day: string;
  status: string;
  paid: boolean;
}

const EventCard = ({ title, img, location, time, month, day, status, paid }: EventCardProps) => (
  <div className="w-full sm:mx-0 mx-auto min-h-[427] max-w-[405px] flex flex-col rounded-xl border">
    <div className="relative w-full h-[235px]">
      <Image
        src={img || '/eventCardImg.png'}
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
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex items-center gap-2 font-semibold">
              {/* <CiLocationOn size={25} /> */}
              <SlLocationPin size={25} />
              <p>{location}</p>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <RiTimerLine size={25} />
              <p>{time}</p>
            </div>
          </div>
          <div className="w-[66px] h-[66px] py-[5px] px-4 text-primary bg-secondary rounded-md flex flex-col items-center justify-center">
            <p className="font-bold">{month}</p>
            <h4 className="text-2xl font-bold">{day}</h4>
          </div>
        </div>
        <div className="flex gap-[22px] justify-between">
          <div className="flex items-center gap-2">
            {status === 'live' ? (
              <>
                <div className="w-2 h-2 rounded-[50%] bg-green-500"></div>
                <p className="text-green-500">Live</p>
              </>
            ) : status === 'upcoming' ? (
              <>
                <div className="w-2 h-2 rounded-[50%] bg-yellow-500"></div>
                <p className="text-yellow-500">Upcoming</p>
              </>
            ) : (
              <>
                <div className="w-2 h-2 rounded-[50%] bg-red-500"></div>
                <p className="text-red-500">Past</p>
              </>
            )}
          </div>
          <div className="w-[66px] text-center">
            <p className="font-bold">{paid ? 'Paid' : 'Free'}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventCard;
