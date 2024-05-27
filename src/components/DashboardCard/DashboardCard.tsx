import React from 'react';

interface DashboardCardProps {
  title: string;
  description: string;
  customStyle?: string;
  action?: () => void;
}

const DashboardCard = ({ title, description, customStyle, action }: DashboardCardProps) => (
  <div
    onClick={action}
    className={`h-[140px] flex items-center flex-col gap-2 justify-center ${customStyle || 'bg-secondary'} rounded-xl`}
  >
    <h2 className={`${customStyle || 'text-primary'} text-4xl font-bold`}>{title}</h2>
    <p className="font-bold">{description}</p>
  </div>
);

export default DashboardCard;
