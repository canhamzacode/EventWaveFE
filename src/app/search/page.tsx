'use client';

import { CustomApplayout, EventCard, FilterBtn, QueryParams } from '@/components';
import { eventData } from '@/constants';
import { useQueryParams } from '@/hooks/useQueryParams';
import { IoChevronBackOutline } from 'react-icons/io5';

const Search = ({ params }: { params: { searchId: string } }) => {
  const { queryParams, onRemove, onClear } = useQueryParams();

  return (
    <CustomApplayout>
      <div className="w-full grid gap-10">
        <section className="w-full grid gap-6 mt-11">
          <div className="w-full flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start gap-2">
            <div className="flex md:items-center items-center gap-4">
              <IoChevronBackOutline size={25} />
              <h3 className="md:text-2xl text-xl font-bold">
                Search results for “{params.searchId}”
              </h3>
            </div>
            <FilterBtn />
          </div>
          <QueryParams queryParams={queryParams} onRemove={onRemove} onClear={onClear} />
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
};

export default Search;
