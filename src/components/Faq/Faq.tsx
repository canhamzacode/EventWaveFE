import React from 'react';
import FaqCard from './FaqCard';
import { FaqData } from './Data';

const Faq = () => (
  <section className="tablet:py-[96px] py-[48px] grid gap-[40px]">
    <div className="grid gap-[24px] max-w-[768px]">
      <h1>FAQs</h1>
      <p className="text-xl">
        Find answers to common questions about our platform, registration process, and event
        management.
      </p>
    </div>
    <div className="w-full">
      {FaqData.map((data, index) => (
        <FaqCard key={index} question={data.question} answer={data.answer} />
      ))}
    </div>
  </section>
);

export default Faq;
