'use client';

import { CustomInput } from '@/components';
import { resetPasswordSchema } from '@/config/schema';
import useSubmit from '@/hooks/useSubmit';
import React from 'react';

const ResetPassword = () => {
  const { register, handleSubmit, errors } = useSubmit(resetPasswordSchema);

  const onSubmit = (data: unknown) => {
    const formData = data as FormData;
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
      <div>
        <h1>Reset Password</h1>
        <p>Please enter the email address you signed up with.</p>
      </div>
      <div className="grid gap-5">
        <CustomInput
          register={register}
          label="Password"
          placeholder="Password"
          type="password"
          errors={errors}
          name="password"
        />
        <CustomInput
          register={register}
          label="Confirm Password"
          placeholder="Password"
          type="password"
          errors={errors}
          name="confirmPassword"
        />
        <button className="btn w-full bg-primary text-white border-0">Submit</button>
      </div>
    </form>
  );
};

export default ResetPassword;
