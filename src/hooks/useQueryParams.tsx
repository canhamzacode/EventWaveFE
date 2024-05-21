import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const useQueryParams = () => {
  const location = useSearchParams();

  const locationParam = location.getAll('location');
  const date = location.getAll('date');
  const eventType = location.getAll('eventType');
  const eventPricing = location.getAll('eventPricing');

  const [queryParams, setQueryParams] = useState(
    [
      locationParam && locationParam[0] ? locationParam[0] : null,
      date && date[0] ? date[0] : null,
      eventType && eventType[0] ? eventType[0] : null,
      eventPricing && eventPricing[0] ? eventPricing[0] : null
    ].filter(Boolean) as unknown as string[]
  );

  const onRemove = (index: number) => {
    const newQueryParams = [...queryParams];
    newQueryParams.splice(index, 1);
    setQueryParams(newQueryParams);
  };

  const onClear = () => {
    setQueryParams([]);
  };

  return { queryParams, onRemove, onClear };
};
