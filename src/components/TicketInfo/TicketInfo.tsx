'use client';

import { ticketInfoSchema } from '@/config/schema';
import { useSubmit } from '@/hooks';
import React from 'react';
import CustomTextArea from '../CustomInput/CustomTextArea';
import { CustomInput, CustomSelectInput } from '../CustomInput';

const eventTypeOption = [
  { label: '', value: '' },
  { label: 'Paid', value: 'paid' },
  { label: 'Free', value: 'Free' }
];

interface TicketInfoProps {
  nextStep: () => void;
  prevStep: () => void;
}

const TicketInfo = ({ nextStep, prevStep }: TicketInfoProps) => {
  const { register, handleSubmit, errors } = useSubmit(ticketInfoSchema);

  const onSubit = (data: unknown) => {
    const formData = data as FormData;
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubit)} className="w-full grid gap-8">
      <CustomTextArea
        errors={errors}
        label="Event Location"
        name="eventLocation"
        register={register}
        placeholder="Event Location"
      />
      <div className="grid gap-6 md:grid-cols-2 gric-cols-1">
        <CustomSelectInput
          options={eventTypeOption}
          label="Location"
          name="location"
          register={register}
          errors={errors}
        />
        <CustomInput
          errors={errors}
          label="Ticket Price"
          name="ticketPrice"
          register={register}
          type="number"
          placeholder="₦00,000.00"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 gric-cols-1">
        <CustomInput
          errors={errors}
          label="Number of Available Tickets"
          name="availableTickets"
          register={register}
          type="number"
          placeholder="00"
        />
        <CustomInput
          errors={errors}
          label="Registration Closing Date"
          name="registrationClose"
          register={register}
          type="date"
          placeholder="00"
        />
      </div>
      <div className="w-full flex items-center justify-center gap-5">
        <button
          onClick={prevStep}
          type="button"
          className="btn w-[156px] border-primary border text-primary"
        >
          Back
        </button>
        <button onClick={nextStep} className="btn w-[156px] bg-primary text-white border-0">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TicketInfo;
