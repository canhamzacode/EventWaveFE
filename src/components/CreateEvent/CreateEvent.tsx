'use client';

import React, { useState } from 'react';
import { CustomModal } from '../CustomModal';
import { EventType } from '../EventType';
import { EventInfo } from '../EventInfo';
import { EventTag } from '../EventTag';
import { TicketInfo } from '../TicketInfo';

interface CreateEventProps {
  toggleModal: () => void;
}

const CreateEvent = ({ toggleModal }: CreateEventProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: {
        return <EventType nextStep={nextStep} />;
      }
      case 2: {
        return <EventInfo nextStep={nextStep} prevStep={prevStep} />;
      }
      case 3: {
        return <EventTag nextStep={nextStep} prevStep={prevStep} />;
      }
      case 4: {
        return <TicketInfo nextStep={nextStep} prevStep={prevStep} />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <CustomModal toggleModal={toggleModal}>
      <div className="w-full max-w-[834px] rounded-2xl bg-white mx-auto flex flex-col gap-8 md:px-14 md:py-12 p-8">
        <div className="w-full text-center grid gap-3">
          <h2 className="text-3xl font-bold">Create An Event </h2>
          <p>What kind of event would you like to create?</p>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-lg ${currentStep > index ? 'bg-primary' : 'bg-lightPrimary'}`}
            />
          ))}
        </div>
        {renderStep()}
      </div>
    </CustomModal>
  );
};

export default CreateEvent;