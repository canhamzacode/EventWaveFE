'use client';

import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setEventTags as storeEventTag } from '@/redux/slices';

const suggestions = [
  'Pop',
  'Afrobeats',
  'Dancehall',
  'Reggae',
  'Calypso',
  'Country',
  'Golf',
  'Hip-Hop/Rap',
  'R&B/Soul',
  'Electronic/Dance',
  'Football',
  'Volleyball'
];

interface EventTagProps {
  nextStep: () => void;
  prevStep: () => void;
}

const EventTag = ({ nextStep, prevStep }: EventTagProps) => {
  const dispatch = useDispatch();
  const allEventTags = useSelector((state: RootState) => state.event.eventTags);
  const [eventTags, setEventTags] = useState<string[]>([]);
  const [userTag, setUserTag] = useState('');

  // Fetch initial tags from Redux store
  useEffect(() => {
    if (allEventTags) {
      setEventTags(allEventTags);
    }
  }, [allEventTags]);

  // Handle pressing the Enter key
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && userTag.trim() !== '' && !eventTags.includes(userTag.trim())) {
      setEventTags((prev) => [...prev, userTag.trim()]);
      setUserTag('');
      event.preventDefault(); // Prevent form submission on Enter
    }
  };

  // Handle selecting/deselecting default tags
  const handleEventTags = (tag: string) => {
    setEventTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  // Handle removing tags
  const handleUserTags = (tag: string) => {
    setEventTags((prev) => prev.filter((t) => t !== tag));
  };

  // Handle proceeding to the next step
  const Proceed = () => {
    dispatch(storeEventTag(eventTags));
    nextStep();
  };

  return (
    <div className="w-full grid gap-10">
      <div className="grid gap-4">
        <div className="flex flex-wrap gap-6">
          {eventTags.map((tag, index) => (
            <button
              key={index}
              className="px-4 py-3 border-secondary rounded-lg bg-[#CB9696] border flex items-center gap-2 text-xl"
            >
              <p>{tag}</p>
              <IoClose size={20} onClick={() => handleUserTags(tag)} />
            </button>
          ))}
          {eventTags.length > 0 && (
            <button onClick={() => setEventTags([])} className="text-xl text-primary underline">
              Clear All
            </button>
          )}
        </div>
      </div>
      <input
        type="text"
        className="active:border-primary focus:border-primary border outline-none p-4 rounded-lg"
        placeholder="Enter a tag that describes your event and press “ENTER”"
        value={userTag}
        onKeyDown={onKeyPress}
        onChange={(e) => setUserTag(e.target.value)}
      />
      <div className="grid gap-4">
        <p>Suggestions</p>
        <div className="flex flex-wrap gap-6">
          {suggestions.map((data, index) => (
            <button
              key={index}
              className={`px-4 py-3 border border-darkGrey rounded-lg ${eventTags.includes(data) ? 'bg-primary text-white' : ''}`}
              onClick={() => handleEventTags(data)}
            >
              {data}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-5">
        <button onClick={prevStep} className="btn w-[156px] border-primary border text-primary">
          Back
        </button>
        <button onClick={Proceed} className="btn w-[156px] bg-primary text-white border-0">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default EventTag;
