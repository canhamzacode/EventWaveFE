'use client';

import React, { useState } from 'react';
import { RiUserLocationLine, RiVideoOnLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setEventType } from '@/redux/slices/eventSlice';
import EventTypeCard from './EventTypeCard';

interface EventTypeProps {
  nextStep: () => void;
}

const EventType = ({ nextStep }: EventTypeProps) => {
  const dispatch = useDispatch();
  const [eventType, setEventTypes] = useState('virtual');

  const changeEventType = (type: string) => {
    setEventTypes(type);
    dispatch(setEventType(type));
  };

  return (
    <div className="grid gap-8">
      <div className="grid gap-6 md:grid-cols-2 grid-cols-1 text-center">
        <EventTypeCard
          title="Physical Event"
          color={eventType === 'physical' ? 'primary' : 'offWhite'}
          description="An event that takes place online at a physical location and attendees join in person."
          onChange={() => changeEventType('physical')}
          icon={<RiUserLocationLine />}
        />
        <EventTypeCard
          title="Virtual Event"
          description=" An event that takes place online and attendees join using web conferencing services."
          color={eventType === 'virtual' ? 'primary' : 'offWhite'}
          onChange={() => changeEventType('virtual')}
          icon={<RiVideoOnLine />}
        />
      </div>
      <button onClick={nextStep} className="btn w-[156px] mx-auto bg-primary text-white border-0">
        Proceed
      </button>
    </div>
  );
};
export default EventType;
