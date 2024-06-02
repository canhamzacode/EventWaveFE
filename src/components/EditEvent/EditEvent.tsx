'use client';

import React, { useEffect, useState } from 'react';
import { useSubmit } from '@/hooks';
import { eventCreationSchema } from '@/config/schema';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { CustomModal } from '../CustomModal';
import { EventInfo } from '../EventInfo';
import { EventTag } from '../EventTag';
import { TicketInfo } from '../TicketInfo';

interface EditEventProps {
  toggleModal: () => void;
}

const EditEvent = ({ toggleModal }: EditEventProps) => {
  const { handleSubmit, register, errors } = useSubmit(eventCreationSchema);
  const dispatch = useDispatch();
  const allEventTags = useSelector((state: RootState) => state.event.eventTags);
  const [eventTags, setEventTags] = useState<string[]>(allEventTags || []);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  useEffect(() => {
    if (errors) console.log(errors);
  }, [errors]);

  return (
    <CustomModal toggleModal={toggleModal}>
      <div className="bg-white px-8 py-12 rounded-2xl max-w-[852px] grid gap-8">
        <div className="w-full items-center flex flex-col gap-3">
          <h2 className="md:text-3xl text-2xl font-bold">Edit Event Details</h2>
          <p>Edit the details to suit your preference</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
          <EventInfo register={register} errors={errors} handleSubmit={handleSubmit} />
          <EventTag eventTags={eventTags} setEventTags={setEventTags} dispatch={dispatch} />
          <TicketInfo register={register} errors={errors} handleSubmit={handleSubmit} />
          <div className="w-full flex items-center justify-center gap-5">
            <button
              type="button"
              className="p-4 px-6 rounded-md border border-primary text-primary"
            >
              Cancel
            </button>
            <button type="submit" className="p-4 px-6 rounded-md border bg-primary text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </CustomModal>
  );
};

export default EditEvent;
