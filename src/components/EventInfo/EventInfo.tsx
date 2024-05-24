'use client';

import React from 'react';
import { useSubmit } from '@/hooks';
import { createEventSchema } from '@/config/schema';
import { useDispatch } from 'react-redux';
import { setEventInfo } from '@/redux/slices/eventSlice';
import { EventInfoPropType } from '@/types/index.t';
import { CustomInput } from '../CustomInput';
import CustomTextArea from '../CustomInput/CustomTextArea';

interface EventInfoProps {
  nextStep: () => void;
  prevStep: () => void;
}

const EventInfo = ({ nextStep, prevStep }: EventInfoProps) => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useSubmit(createEventSchema);

  const onSubit = (data: unknown) => {
    const formData = data as EventInfoPropType;
    dispatch(setEventInfo(formData));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubit)} className="w-full grid gap-8">
      <div className="w-full grid grid-cols-2 gap-5">
        <CustomInput
          errors={errors}
          label="Event Name"
          name="eventName"
          placeholder="Event Name"
          register={register}
          type="text"
        />
        <CustomInput
          errors={errors}
          label="Event Image"
          name="eventImage"
          placeholder="Event Image"
          register={register}
          type="file"
        />
      </div>
      <CustomTextArea
        errors={errors}
        label="Event Description"
        name="eventDescription"
        placeholder="Event Description"
        register={register}
      />
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
        <CustomInput
          errors={errors}
          label="Event Start Date"
          name="eventStartDate"
          register={register}
          type="date"
        />
        <CustomInput
          errors={errors}
          label="Event Start Time"
          name="eventStartTime"
          register={register}
          type="time"
        />
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
        <CustomInput
          errors={errors}
          label="Event End Date"
          name="eventEndDate"
          register={register}
          type="date"
        />
        <CustomInput
          errors={errors}
          label="Event End Time"
          name="eventEndTime"
          register={register}
          type="time"
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
        <button className="btn w-[156px] bg-primary text-white border-0">Proceed</button>
      </div>
    </form>
  );
};

export default EventInfo;
