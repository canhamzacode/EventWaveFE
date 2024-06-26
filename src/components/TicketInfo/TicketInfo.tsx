'use client';

import { ticketInfoSchema } from '@/config/schema';
import { useSubmit } from '@/hooks';
import React from 'react';
import { setTicketInfo } from '@/redux/slices';
import { useDispatch } from 'react-redux';
import { TicketInfoPropType } from '@/types/index.t';
import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegisterReturn
} from 'react-hook-form';
import CustomTextArea from '../CustomInput/CustomTextArea';
import { CustomInput, CustomSelectInput } from '../CustomInput';

const eventTypeOption = [
  { label: '', value: '' },
  { label: 'Paid', value: 'paid' },
  { label: 'Free', value: 'free' }
];

interface TicketInfoProps {
  nextStep?: () => void;
  prevStep?: () => void;
  register?: (name: string) => UseFormRegisterReturn;
  errors?: FieldErrors<{ [x: string]: string }>;
  handleSubmit?: UseFormHandleSubmit<FieldValues>;
}

const TicketInfo = ({
  nextStep,
  prevStep,
  register: propRegister,
  errors: propErrors,
  handleSubmit: propHandleSubmit
}: TicketInfoProps) => {
  const {
    register: defaultRegister,
    handleSubmit: defaultHandleSubmit,
    errors: defaultErrors
  } = useSubmit(ticketInfoSchema);
  const register = propRegister || defaultRegister;
  const handleSubmit = propHandleSubmit || defaultHandleSubmit;
  const errors = propErrors || defaultErrors;

  const [submissionError, setSubmissionError] = React.useState<string | null>(null);
  const dispatch = useDispatch();

  const onSubmit = async (data: TicketInfoPropType) => {
    try {
      setSubmissionError(null);
      dispatch(setTicketInfo(data));
      console.log(data);
      if (nextStep) {
        nextStep();
      }
    } catch (error) {
      setSubmissionError('Failed to submit the form. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-8">
      {submissionError && <div className="text-red-600">{submissionError}</div>}
      <CustomTextArea
        errors={errors}
        label="Event Location"
        name="eventLocation"
        register={register}
        placeholder="Event Location"
      />
      <div className="w-full grid gap-6 md:grid-cols-2 grid-cols-1">
        <CustomSelectInput
          options={eventTypeOption}
          label="Event Type"
          name="eventType"
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
      <div className="w-full grid gap-6 md:grid-cols-2 grid-cols-1">
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
        />
      </div>
      {prevStep && nextStep && (
        <div className="w-full flex items-center justify-center gap-5">
          <button
            onClick={prevStep}
            type="button"
            className="btn w-[156px] border-primary border text-primary"
          >
            Back
          </button>
          <button type="submit" className="btn w-[156px] bg-primary text-white border-0">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default TicketInfo;
