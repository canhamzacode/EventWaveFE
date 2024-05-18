import { CustomApplayout, EventCard, TimelineBanner } from '@/components';
import React from 'react';
import { eventData } from '@/constants';

const page = () => (
  <CustomApplayout>
    <div className="grid gap-10">
      <TimelineBanner />
      <section className="grid gap-6">
        <h3 className="md:text-2xl text-xl font-bold">Upcoming Events Near You</h3>
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
