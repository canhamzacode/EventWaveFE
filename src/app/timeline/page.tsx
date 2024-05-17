import { EventCard, TimelineBanner } from '@/components';
import React from 'react';

const page = () => (
  <div className="grid gap-10">
    <TimelineBanner />
    <section className="grid gap-6">
      <h3 className="text-2xl font-bold">Upcoming Events Near You</h3>
      <div className="grid tablet:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  </div>
);

export default page;
