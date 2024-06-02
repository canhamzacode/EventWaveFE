'use client';

import React from 'react';
import { useSubmit } from '@/hooks';
import { createEventSchema } from '@/config/schema';
import { useDispatch, useSelector } from 'react-redux';
import { setEventInfo } from '@/redux/slices/eventSlice';
import { RootState } from '@/redux/store';
import { EventInfoPropType } from '@/types/index.t';
import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
  UseFormHandleSubmit
} from 'react-hook-form';
import { CustomInput } from '../CustomInput';
import CustomTextArea from '../CustomInput/CustomTextArea';

interface EventInfoProps {
  nextStep?: () => void;
  prevStep?: () => void;
  register?: (name: string) => UseFormRegisterReturn;
  errors?: FieldErrors<{ [x: string]: string }>;
  handleSubmit?: UseFormHandleSubmit<FieldValues>;
}

const EventInfo = ({ nextStep, prevStep, register, errors, handleSubmit }: EventInfoProps) => {
  const dispatch = useDispatch();
  const eventInfo = useSelector((state: RootState) => state.event.eventInfo);

  // Use internal form handling if props are not provided
  const internalSubmit = useSubmit(createEventSchema, eventInfo);
  const formRegister = register || internalSubmit.register;
  const formErrors = errors || internalSubmit.errors;
  const formHandleSubmit = handleSubmit || internalSubmit.handleSubmit;

  const onSubmit = (data: unknown) => {
    const formData = data as EventInfoPropType;
    dispatch(setEventInfo(formData));
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <form onSubmit={formHandleSubmit(onSubmit)} className="w-full grid gap-8">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
        <CustomInput
          errors={formErrors}
          label="Event Name"
          name="eventName"
          placeholder="Event Name"
          register={formRegister}
          type="text"
        />
        <CustomInput
          errors={formErrors}
          label="Event Image"
          name="eventImage"
          placeholder="Event Image"
          register={formRegister}
          type="file"
        />
      </div>
      <CustomTextArea
        errors={formErrors}
        label="Event Description"
        name="eventDescription"
        placeholder="Event Description"
        register={formRegister}
      />
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
        <CustomInput
          errors={formErrors}
          label="Event Start Date"
          name="eventStartDate"
          register={formRegister}
          type="date"
        />
        <CustomInput
          errors={formErrors}
          label="Event Start Time"
          name="eventStartTime"
          register={formRegister}
          type="time"
        />
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
        <CustomInput
          errors={formErrors}
          label="Event End Date"
          name="eventEndDate"
          register={formRegister}
          type="date"
        />
        <CustomInput
          errors={formErrors}
          label="Event End Time"
          name="eventEndTime"
          register={formRegister}
          type="time"
        />
      </div>
      {nextStep && prevStep && (
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
      )}
    </form>
  );
};

export default EventInfo;
