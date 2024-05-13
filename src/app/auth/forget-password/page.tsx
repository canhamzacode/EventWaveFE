'use client';

import { CustomInput } from '@/components';
import { forgetPasswordSchema } from '@/config/schema';
import useSubmit from '@/hooks/useSubmit';
import React from 'react';

const ForgetPassword = () => {
  const { register, handleSubmit, errors } = useSubmit(forgetPasswordSchema);

  const onSubmit = (data: unknown) => {
    const formData = data as FormData;
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
      <div>
        <h1>Forgot Password</h1>
        <p>Please enter the email address you signed up with.</p>
      </div>
      <div className="grid gap-4">
        <CustomInput
          register={register}
          label="Email"
          placeholder="Enter your email"
          type="email"
          errors={errors}
          name="email"
        />
        <button className="btn w-full bg-primary text-white border-0">Submit</button>
      </div>
    </form>
  );
};
export default ForgetPassword;
