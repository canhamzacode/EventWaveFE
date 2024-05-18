import { CustomApplayout, EventCard } from '@/components';
import { eventData } from '@/constants';
import React from 'react';
import { CiFilter } from 'react-icons/ci';
import { IoChevronBackOutline } from 'react-icons/io5';

const page = ({ params }: { params: { searchId: string } }) => (
  <CustomApplayout>
    <div className="w-full grid gap-10">
      <section className="w-full grid gap-6 mt-11">
        <div className="w-full flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start gap-2">
          <div className="flex md:items-center items-center gap-4">
            <IoChevronBackOutline size={25} />
            <h3 className="md:text-2xl text-xl font-bold">
              Search results for “{params.searchId}”
            </h3>
          </div>
          <button className="btn flex items-center justify-center gap-2 md:w-[128px] w-full bg-primary text-white font-bold">
            <CiFilter size={20} />
            Filter
          </button>
        </div>
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

export default page;
