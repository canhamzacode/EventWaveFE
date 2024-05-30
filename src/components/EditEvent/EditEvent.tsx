import React from 'react';
import { EventInfo } from '../EventInfo';
import { EventTag } from '../EventTag';
import { TicketInfo } from '../TicketInfo';
import { CustomModal } from '../CustomModal';

const EditEvent = () => (
  <CustomModal>
    <div className="bg-white p-8 rounded-2xl max-w-[852px] grid gap-8">
      <div>
        <h2>Edit Event Details</h2>
        <p>Edit the details to suit your preference</p>
      </div>
      <EventInfo />
      <EventTag />
      <TicketInfo />
    </div>
  </CustomModal>
);

export default EditEvent;
