'use client';

import React, { useEffect, useState } from 'react';

const musicCategories = [
  'Rock',
  'Pop',
  'Hip-Hop',
  'Country',
  'Jazz',
  'Classical',
  'R&B',
  'Reggae',
  'Blues',
  'Electronic',
  'Folk',
  'Soul',
  'Punk',
  'Gospel'
];

const techCategories = [
  'Web Development',
  'Mobile Development',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'Data Science',
  'UI/UX Design',
  'Software Testing'
];

const gameCategories = [
  'Action',
  'Adventure',
  'Role-playing',
  'Simulation',
  'Strategy',
  'Sports',
  'Puzzle',
  'Idle'
];

const sportCategories = [
  'Basketball',
  'Football',
  'Baseball',
  'Tennis',
  'Golf',
  'Soccer',
  'Cricket',
  'Rugby',
  'Hockey',
  'Boxing'
];

type SelectInterestProp = {
  inCreaseStep: () => void;
  setSelectedTags: (tags: string[]) => void;
  selectedTags: string[];
};

const SelectInterest = ({ inCreaseStep, setSelectedTags, selectedTags }: SelectInterestProp) => {
  const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({});
  const [error, setError] = useState('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  const proceed = () => {
    if (selectedTags.length < 5) {
      setError('Please select at least 5 tags');
      return;
    }
    inCreaseStep();
  };

  useEffect(() => {
    const tags = Object.keys(selectedCategories).filter((category) => selectedCategories[category]);
    setSelectedTags(tags);
  }, [selectedCategories, setSelectedTags]);

  const renderCategory = (category: string, index: number) => {
    const isSelected = selectedCategories[category];
    return (
      <button
        key={index}
        className={`px-2 py-3 border border-darkGrey rounded-lg ${isSelected ? 'bg-primary text-white' : ''}`}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </button>
    );
  };

  return (
    <div className="grid gap-10">
      <div className="grid gap-[48px]">
        <div className="grid gap-8">
          <h3 className="text-2xl font-bold">Music</h3>
          <div className="flex flex-wrap gap-6">
            {musicCategories.map((category, index) => renderCategory(category, index))}
          </div>
        </div>
        <div className="grid gap-8">
          <h3 className="text-2xl font-bold">Sport</h3>
          <div className="flex flex-wrap gap-6">
            {sportCategories.map((category, index) => renderCategory(category, index))}
          </div>
        </div>
        <div className="grid gap-8">
          <h3 className="text-2xl font-bold">Games</h3>
          <div className="flex flex-wrap gap-6">
            {gameCategories.map((category, index) => renderCategory(category, index))}
          </div>
        </div>
        <div className="grid gap-8">
          <h3 className="text-2xl font-bold">Tech</h3>
          <div className="flex flex-wrap gap-6">
            {techCategories.map((category, index) => renderCategory(category, index))}
          </div>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-full flex items-center justify-center">
        <button onClick={proceed} className="btn border-0 w-[152px] bg-primary text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectInterest;
