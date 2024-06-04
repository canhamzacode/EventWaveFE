'use client';

import { CustomInput } from '@/components';
import { signInSchema } from '@/config/schema';
import useSubmit from '@/hooks/useSubmit';
import Image from 'next/image';
import Link from 'next/link';

interface FormData {
  email: string;
  password: string;
}

const Signup = () => {
  const { register, handleSubmit, errors } = useSubmit(signInSchema);

  const signUserIn = (data: unknown) => {
    const formData = data as FormData;
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(signUserIn)} className="w-full grid gap-8">
      <div className="grid gap-2">
        <h1>Sign Up</h1>
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
          {/* Signup doesnt need forget password */}
        </div>
      </div>
      <button className="btn w-full bg-primary text-white border-0">Sign Up</button>
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
          <Link href="/auth/signin" className="text-primary underline cursor-pointer">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
