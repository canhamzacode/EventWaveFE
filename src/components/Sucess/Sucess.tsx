import Image from 'next/image';
import React from 'react';

interface SucessPropTypes {
  title: string;
  description: string;
  cta: string;
  ctaAction: () => void;
}

const Sucess = ({ title, description, cta, ctaAction }: SucessPropTypes) => (
  <div className="grid gap-8 text-center">
    <div>
      <h1>{title}</h1>
    </div>
    <div className="grid gap-6">
      <Image src="/successIcon.svg" alt="sucess icon" width={74} height={74} className="mx-auto" />
      <p>{description}</p>
      <button onClick={ctaAction} className="btn w-full bg-primary text-white border-0">
        {cta}
      </button>
    </div>
  </div>
);

export default Sucess;
