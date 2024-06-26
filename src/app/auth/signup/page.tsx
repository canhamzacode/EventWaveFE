'use client';

import { CustomAuthWrapper, CustomInput, CustomPassword } from '@/components';
import { signUpSchema } from '@/config/schema';
import useSubmit from '@/hooks/useSubmit';
import { signup } from '@/redux/slices';
import { RootState, AppDispatch } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface FormData {
  email: string;
  password: string;
}

const Signup = () => {
  const { register, handleSubmit, errors } = useSubmit(signUpSchema);
  // const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);
  const [error, setError] = useState<string | null>(null);

  const signUserIn = async (data: FormData) => {
    console.log(data);
    try {
      await dispatch(signup(data)).unwrap();
      // router.push('/auth/signin/emailVerification');
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
          <CustomPassword
            errors={errors}
            label="Password"
            name="password"
            placeholder="Enter your password"
            register={register}
          />
        </div>
        <button type="submit" className="btn w-full bg-primary text-white border-0">
          {loading ? 'Signing Up...' : 'Sign Up'}
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
            <Link href="/auth/signin" className="text-primary underline cursor-pointer">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </CustomAuthWrapper>
  );
};

export default Signup;
