import Image from 'next/image';
import React from 'react';

const Sucess = () => (
  <div className="grid gap-8 text-center">
    <div>
      <h1>Email Verification Successful</h1>
    </div>
    <div className="grid gap-6">
      <Image src="/successIcon.svg" alt="sucess icon" width={74} height={74} className="mx-auto" />
      <p>
        Congratulations! Answer a few questions to customize your event timeline and make it
        uniquely yours
      </p>
      <button className="btn w-full bg-primary text-white border-0">Proceed</button>
    </div>
  </div>
);

export default Sucess;
