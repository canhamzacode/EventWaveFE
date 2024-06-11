'use client';

import { CustomApplayout, SelectInterest, SelectLocation } from '@/components';
import api from '@/lib/axios';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    console.log(selectedTags, location);
  }, [selectedTags, location]);

  const inCreaseStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    if (step === 1) {
      if (selectedTags.length < 5) {
        return;
      }
      inCreaseStep();
    } else {
      if (!location) {
        return;
      }
      try {
        const response = api.post('/onboarding', { interest: selectedTags, location });
        console.log(response?.data?.message);
        // setMessage(response.data.message);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          console.log(err);
          // setError(err.response?.data?.message || 'Something went wrong');
        } else {
          console.log('Something went wrong');
        }
      }
      console.log('submit');
    }
  };

  return (
    <CustomApplayout hideFooter>
      <div className="mt-[88px]">
        <div className="w-full mx-auto max-w-[840px]  grid gap-10 p-5">
          <div className="grid gap-9">
            <div className="grid gap-3">
              <h4 className="text-primary font-bold">Step {step} of 2</h4>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`h-3 ${step === 1 ? 'bg-lightPrimary' : 'bg-lighterPrimary'} rounded-lg`}
                />
                <div
                  className={`h-3 ${step === 1 ? 'bg-lighterPrimary' : 'bg-lightPrimary'} rounded-lg`}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold">
                {step === 1
                  ? "Let us know which events you're passionate about"
                  : "Select your preferred outing location, we'll keep it on record for you"}
              </h3>
              <p>
                {step === 1
                  ? 'Choose up to 5 tags from each event category that you&apos;d like to encounter more frequently.'
                  : 'Choose or enter location'}
                Choose up to 5 tags from each event category that you&apos;d like to encounter more
                frequently.
              </p>
            </div>
          </div>
          {step === 1 ? (
            <SelectInterest
              inCreaseStep={inCreaseStep}
              setSelectedTags={setSelectedTags}
              selectedTags={selectedTags}
            />
          ) : (
            <SelectLocation setLocation={setLocation} />
          )}
          {step === 2 && (
            <button
              onClick={handleSubmit}
              className="btn border-0 w-[152px] mx-auto bg-primary text-white"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </CustomApplayout>
  );
};

export default Onboarding;
