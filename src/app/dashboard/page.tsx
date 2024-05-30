'use client';

import { CreateEvent, CustomApplayout, DashboardCard, EventCard } from '@/components';
import { eventData } from '@/constants';
import { useModal } from '@/hooks';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { LuCalendarCheck2 } from 'react-icons/lu';

interface EventDataType {
  title: string;
  location: string;
  time: string;
  month: string;
  day: string;
  status: string;
  paid: boolean;
}

const Dashboard = () => {
  const { toggleModal, showModal } = useModal();
  const [events, setEvents] = useState<EventDataType[]>([]);
  const [tab, setTab] = useState('created');

  const changeTab = (data: string) => {
    setTab(data);
  };

  useEffect(() => {
    setEvents(eventData);
  }, []);

  return (
    <CustomApplayout>
      {showModal && <CreateEvent toggleModal={toggleModal} />}
      <section className="grid gap-10 mt-8">
        <div>
          <h3 className="text-2xl font-bold">Event Management</h3>
          <p>Effortlessly monitor your created and registered events all in one place</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4">
          <DashboardCard title="10" description="Total Events" />
          <DashboardCard title="10" description="Registered Events" />
          <DashboardCard
            title="+"
            description="Create An Event"
            customStyle="bg-primary text-white cursor-pointer"
            action={toggleModal}
          />
        </div>
        <div className="w-full grid gap-6">
          <div className="flex items-center gap-7">
            <button
              className={`text-xl font-bold ${tab === 'created' ? 'underline text-primary' : ''} `}
              onClick={() => changeTab('created')}
            >
              Created Events
            </button>
            <button
              className={`text-xl font-bold ${tab === 'registered' ? 'underline text-primary' : ''}`}
              onClick={() => changeTab('registered')}
            >
              Registered Events
            </button>
          </div>
          {events.length === 0 && (
            <div className="min-h-[230px] max-w-[432px] w-full mx-auto flex flex-col items-center justify-center gap-6">
              <LuCalendarCheck2 size={45} />
              {tab === 'created' ? (
                <div className="text-center">
                  Get started by creating your first event! Click the{' '}
                  <span className="text-primary font-bold">&apos;Create An Event&apos;</span>
                  button to create your next great experience.
                </div>
              ) : (
                <div className="text-center">
                  It looks like you haven&apos;t registered for any events yet.{' '}
                  <Link href="/explore" className="underline text-primary">
                    Explore
                  </Link>{' '}
                  and register for exciting events to get started!
                </div>
              )}
            </div>
          )}
          {/* <h3 className="md:text-2xl text-xl font-bold">Upcoming Events Near You</h3> */}
          <div className="grid tablet:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {events?.map((event, index) => (
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
        </div>
      </section>
    </CustomApplayout>
  );
};
export default Dashboard;
