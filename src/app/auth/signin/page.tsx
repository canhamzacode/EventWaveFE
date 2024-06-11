'use client';

import { CustomAuthWrapper, CustomInput } from '@/components';
import { signInSchema } from '@/config/schema';
import useSubmit from '@/hooks/useSubmit';
import { login } from '@/redux/slices';
import { AppDispatch, RootState } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface FormData {
  email: string;
  password: string;
}

const Signin = () => {
  const { register, handleSubmit, errors } = useSubmit(signInSchema);
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);
  const [error, setError] = useState<string | null>(null);

  const signUserIn = async (data: FormData) => {
    console.log(data);
    try {
      await dispatch(login(data)).unwrap();
    } catch (err: unknown) {
      console.error('Login failed:', err);
      setError(err as string);
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <CustomAuthWrapper>
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
              <Link href="/auth/forget-password" className="text-base underline text-primary">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <button className="btn w-full bg-primary text-white border-0">
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
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
            <Link href="/auth/signup" className="text-primary underline cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </CustomAuthWrapper>
  );
};

export default Signin;
