'use client';

import { CustomInput } from '@/components';
import { signInSchema } from '@/config/schema';
import useSubmit from '@/hooks/useSubmit';
import Image from 'next/image';

const Signin = () => {
  const { register, handleSubmit, errors } = useSubmit(signInSchema);

  const signUserIn = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(signUserIn)} className="w-full grid gap-8">
      <div className="grid gap-2">
        <h1>Sign In</h1>
        <p>Please enter the correct details</p>
      </div>
      <div className="grid gap-[20px]">
        <CustomInput
          errors={errors}
          label="Email"
          name="email"
          placeholder="Enter your email"
          register={register}
          type="email"
        />
        <div className="grid gap-2">
          <CustomInput
            errors={errors}
            label="Password"
            name="password"
            placeholder="Enter your password"
            register={register}
            type="password"
          />
          <div className="flex items-end justify-end">
            <p className="text-base underline text-primary">Forgot Password?</p>
          </div>
        </div>
      </div>
      <button className="btn w-full bg-primary text-white border-0">Sign in</button>
      <button
        type="button"
        className="btn w-full text-primary bg-white border-primary flex items-center justify-center gap-4"
      >
        <Image src="/googleIcon.svg" alt="google" width={20} height={20} />
        <p>Sign in with Google</p>
      </button>
      <div className="text-center">
        <p>
          Don&apos;t have an account?{' '}
          <span className="text-primary underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </form>
  );
};

export default Signin;
