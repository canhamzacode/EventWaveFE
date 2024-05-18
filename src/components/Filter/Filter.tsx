'use client';

import React from 'react';
import useSubmit from '@/hooks/useSubmit';
import { filterSchema } from '@/config/schema';
import {
  dateSelectOptions,
  eventTypeSelectOptions,
  locationSelectOptions,
  pricingSelectOptions
} from '@/constants';
import { IoClose } from 'react-icons/io5';
import { CiFilter } from 'react-icons/ci';
import { CustomModal } from '../CustomModal';
import { CustomSelectInput } from '../CustomInput';

const Filter = () => {
  const { register, errors, handleSubmit } = useSubmit(filterSchema);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <CustomModal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[896px] p-8 rounded-2xl bg-white mx-auto flex flex-col gap-6"
      >
        <h2 className="md:text-2xl text-xl font-bold">Search Filter</h2>
        <div className="w-full grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <CustomSelectInput
              options={locationSelectOptions}
              label="Location"
              name="location"
              register={register}
              errors={errors}
            />
            <CustomSelectInput
              options={dateSelectOptions}
              label="Date"
              name="date"
              register={register}
              errors={errors}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <CustomSelectInput
              options={eventTypeSelectOptions}
              label="Event Type"
              name="eventType"
              register={register}
              errors={errors}
            />
            <CustomSelectInput
              options={pricingSelectOptions}
              label="Event Pricing"
              name="eventPricing"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-6">
          <button className="btn font-bold border-primary w-[130px] flex items-center gap-2 justify-center">
            <IoClose size={25} />
            <p>Cancel</p>
          </button>
          <button className="btn flex items-center justify-center gap-2 md:w-[128px] w-full bg-primary text-white font-bold">
            <CiFilter size={20} />
            Filter
          </button>
        </div>
      </form>
    </CustomModal>
  );
};

export default Filter;
