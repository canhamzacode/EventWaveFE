'use client';

import React from 'react';
import useSubmit from '@/hooks/useSubmit';
import { filterSchema } from '@/config/schema';
import { useRouter } from 'next/navigation';
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

interface MyFormData {
  location?: string;
  date?: string;
  eventType?: string;
  eventPricing?: string;
}

interface FilterProp {
  toggleModal: () => void;
}

const Filter = ({ toggleModal }: FilterProp) => {
  const { register, errors, handleSubmit } = useSubmit(filterSchema);

  const router = useRouter();

  const onSubmit = (data: unknown) => {
    const formData = data as MyFormData;

    const queryParams = [
      formData.location && `location=${formData.location}`,
      formData.date && `date=${formData.date}`,
      formData.eventType && `eventType=${formData.eventType}`,
      formData.eventPricing && `eventPricing=${formData.eventPricing}`
    ]
      .filter(Boolean)
      .join('&');

    router.push(`/search/?${queryParams}`);
    console.log(formData);
  };

  return (
    <CustomModal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[896px] p-8 rounded-2xl bg-white mx-auto flex flex-col gap-6"
      >
        <h2 className="md:text-2xl text-xl font-bold">Search Filter</h2>
        <div className="w-full grid md:gap-6 gap-3">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
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
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
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
        <div className="w-full flex items-center justify-center md:gap-6 gap-3">
          <button
            type="button"
            onClick={toggleModal}
            className="btn font-bold border-primary w-[130px] flex items-center gap-2 justify-center"
          >
            <IoClose size={25} />
            <p>Cancel</p>
          </button>
          <button className="btn flex items-center justify-center gap-2 w-[128px] bg-primary text-white font-bold">
            <CiFilter size={20} />
            Filter
          </button>
        </div>
      </form>
    </CustomModal>
  );
};

export default Filter;
