import React from 'react';

interface EventTypeCardProps {
  title: string;
  description: string;
  color?: string;
  onChange: () => void;
  icon?: React.ReactNode;
}

const EventTypeCard = ({
  title,
  description,
  color = 'primary',
  onChange,
  icon
}: EventTypeCardProps) => (
  <div
    className={`cursor-pointer w-full p-8 rounded-xl border-4 text-${color} border-${color} grid gap-5`}
    onClick={onChange}
  >
    <div className="w-[72px] h-[72px] mx-auto flex items-center justify-center text-4xl">
      {icon}
    </div>
    <div className="w-full grod gap-3">
      <h4 className="text-2xl font-bold">{title}</h4>
      <p>{description}</p>
    </div>
    <div className={`w-[24px] h-[24px] bg-${color} rounded-[50%] mx-auto`} />
  </div>
);

export default EventTypeCard;
