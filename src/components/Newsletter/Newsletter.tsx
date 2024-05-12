import React from 'react';

const Newsletter = () => (
  <section className="tablet:py-[96px] py-[48px] bg-dark text-white">
    <div className="w-full max-w-[818px] grid gap-8">
      <div className="grid gap-6">
        <h1>Stay Updated with Our Newsletter</h1>
        <p>Subscribe to our newsletter to receive updates on new events and platform features.</p>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter email address"
            className="py-[14px] h-[52px] px-3 rounded-lg text-text w-full max-w-[377px] border-0 outline-none"
          />
          <button className="btn w-[120px] h-[52px] border-0  bg-primary">Submit</button>
        </div>
        <p className="text-sm">
          By clicking Sign Up, you confirm that you agree with our Terms and Conditions.
        </p>
      </div>
    </div>
  </section>
);

export default Newsletter;
