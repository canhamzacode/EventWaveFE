'use client';

import { CustomApplayout, EventBanner, EventCard } from '@/components';
import { eventData } from '@/constants';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { IoChevronBackOutline, IoLocation } from 'react-icons/io5';

const eventTags = ['food', 'music', 'tech', 'business', 'sports', 'art'];

const Event = ({ params }: { params: { id: string } }) => {
  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <CustomApplayout>
      <div className="w-full grid gap-6">
        <section className="w-full grid gap-6">
          <div className="w-full flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start gap-5">
            <div className="flex md:items-center items-center gap-4">
              <IoChevronBackOutline size={25} />
              <h3 className="md:text-2xl text-xl font-bold">Tech Innovators Summit</h3>
            </div>
            <Link href="/event/[id]/checkout" as={`/event/${params.id}/checkout`}>
              <button className="btn flex items-center justify-center gap-2 md:w-[229px] w-full bg-primary text-white font-bold">
                Register for this event
              </button>
            </Link>
          </div>
        </section>
        <EventBanner />
        <section className="w-full grid md:grid-cols-[1fr,437px] grid-cols-1 md:gap-[110px] gap-5">
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Event Description</h3>
              <p>
                Dive into the world of cutting-edge technology at the Tech Innovators Summit. This
                immersive event is designed for tech enthusiasts, entrepreneurs, and innovators
                alike. Join us for a day filled with inspiring keynote speakers, hands-on workshops,
                and networking opportunities with industry leaders. Discover the latest trends in
                artificial intelligence, blockchain, cybersecurity, and more. Whether you&lsquo;re a
                tech veteran or just starting your journey, the Tech Innovators Summit is the
                ultimate destination to explore, learn, and connect in the dynamic tech landscape.
              </p>
            </div>
            <div className="w-full flex flex-col gap-6">
              <h3 className="text-2xl font-bold">Event Tags</h3>
              <div className="flex flex-wrap gap-6">
                {eventTags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-4 py-3 rounded-lg border flex items-center gap-2"
                  >
                    <p>{tag}</p>
                  </button>
                ))}
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <div className="flex items-center justify-between text-xl font-bold">
              <h4 className="text-primary">08-10 October, 2023</h4>
              <h4>₦20,000</h4>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-[40px,1fr] gap-2 items-start">
                <IoLocation size={25} />
                <p>
                  Ultimate Garden, By Mobil Junction Lokogoma Expressway Gaduwa Abuja, Federal
                  Capital Territory 900109
                </p>
              </div>
              <div className="grid grid-cols-[40px,1fr] gap-2 items-start">
                <IoMdTime size={25} />
                <p>9AM Daily</p>
              </div>
              <div className="grid grid-cols-[40px,1fr] gap-2 items-start">
                <FaCalendar size={25} />
                <p>In 2 weeks</p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid gap-5 mt-4">
          <h3 className="text-2xl font-bold">Similar Events</h3>
          <div className="grid tablet:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {eventData.map((event, index) => (
              <EventCard
                key={index}
                title={event?.title}
                location={event?.location}
                time={event?.time}
                month={event?.month}
                day={event.day}
                status={event?.status}
                paid={event?.paid}
              />
            ))}
          </div>
        </section>
      </div>
    </CustomApplayout>
  );
};

export default Event;
