'use client';

import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

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
  const [eventTags, setEventTags] = useState<string[]>([]);
  const [userTags, setUserTags] = useState<string[]>([]);
  const [userTag, setUserTag] = useState('');

  const Proceed = () => {
    dispatch({ type: 'SET_EVENT_TAGS', payload: [...eventTags, ...userTags] });
    nextStep();
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' &&
      userTag.trim() !== '' &&
      !userTags.includes(userTag.trim()) &&
      !eventTags.includes(userTag.trim())
    ) {
      setUserTags((prev) => [...prev, userTag.trim()]);
      setUserTag('');
    }
  };

  const handleEventTags = (tag: string) => {
    if (eventTags.includes(tag)) {
      setEventTags((prev) => prev.filter((t) => t !== tag));
    } else {
      setEventTags((prev) => [...prev, tag]);
    }
  };

  const handleUserTags = (tag: string) => {
    setUserTags((prev) => prev.filter((t) => t !== tag));
  };

  const clearAllUserSelect = () => {
    setUserTags([]);
  };

  return (
    <div className="w-full grid gap-10">
      <div className="grid gap-4">
        <div className="flex flex-wrap gap-6">
          {userTags.map((tag, index) => (
            <button
              key={index}
              className="px-4 py-3 border-secondary rounded-lg bg-[#CB9696] border flex items-center gap-2 text-xl"
            >
              <p>{tag}</p>
              <IoClose size={20} onClick={() => handleUserTags(tag)} />
            </button>
          ))}
          {userTags?.length > 0 && (
            <button onClick={clearAllUserSelect} className="text-xl text-primary underline">
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
