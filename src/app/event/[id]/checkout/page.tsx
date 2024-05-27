'use client';

import {
  CustomApplayout,
  CustomInput,
  CustomModal,
  CustomSelectInput,
  EventBanner
} from '@/components';
import { registerEventSchema } from '@/config/schema';
import { useModal, useSubmit } from '@/hooks';
import React, { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css';
import { IoChevronBackOutline } from 'react-icons/io5';
import PhoneInput from 'react-phone-number-input';
import './checkout.css';
import Sucess from '@/components/Sucess/Sucess';
import { useRouter } from 'next/navigation';

const genderOption = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
];
const howDidYouHearOption = [
  { label: 'Friend', value: 'Friend' },
  { label: 'Telegram', value: 'Telegram' },
  { label: 'Instagram', value: 'instagram' }
];

const EventCheckout = () => {
  const { register, handleSubmit, errors, setValue } = useSubmit(registerEventSchema);
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { toggleModal, showModal } = useModal();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    setValue('ticketQuantity', quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setValue('ticketQuantity', quantity - 1);
    }
  };

  const onSubmit = (data: unknown) => {
    setValue('ticketQuantity', quantity);
    console.log(data);
    toggleModal();
  };

  const closeModal = () => {
    toggleModal();
    router.push('/timeline');
  };

  useEffect(() => {
    setValue('ticketQuantity', quantity);
  });

  return (
    <CustomApplayout>
      {showModal && (
        <CustomModal>
          <div className="w-full max-w-[600px] bg-white py-12 px-16 rounded-lg">
            <Sucess
              title="Registration Successful"
              description="You’re officially registered for the event. Your ticket has been sent to your mail. Check your inbox for confirmation."
              cta="Back to Timeline"
              ctaAction={closeModal}
            />
          </div>
        </CustomModal>
      )}
      <div className="w-full grid gap-6">
        <section className="w-full grid gap-6 mt-4">
          <div className="w-full flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start gap-5">
            <div className="flex md:items-center items-center gap-4">
              <IoChevronBackOutline size={25} />
              <h3 className="md:text-2xl text-xl">
                Tech Innovators Summit \ <span className="font-bold">Checkout</span>
              </h3>
            </div>
          </div>
        </section>
        <EventBanner />
        <section className="w-ful">
          <form
            className="w-full l grid tablet:grid-cols-[1fr,337px] grid-cols-1 tablet:gap-[80px] gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col gap-8">
              <div className="w-full flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                  <CustomInput
                    label="First Name"
                    placeholder="First Name"
                    errors={errors}
                    register={register}
                    name="firstName"
                    type="text"
                  />
                  <CustomInput
                    label="Last Name"
                    placeholder="Last Name"
                    errors={errors}
                    register={register}
                    name="lastName"
                    type="text"
                  />
                </div>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                  <CustomInput
                    label="Email Address"
                    placeholder="Email Address"
                    errors={errors}
                    register={register}
                    name="email"
                    type="text"
                  />
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="phoneNumber" className="text-base font-bold">
                      Phone Number
                    </label>
                    <PhoneInput
                      id="phoneNumber"
                      placeholder="Enter phone number"
                      defaultCountry="NG"
                      onChange={(value) => setValue('phoneNumber', value)}
                    />
                    {errors && errors.phoneNumber?.message && (
                      <p className="text-red-600 capitalize text-sm">
                        {String(errors.phoneNumber.message)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                  <CustomSelectInput
                    options={genderOption}
                    label="Gender"
                    name="gender"
                    register={register}
                    errors={errors}
                  />
                  <CustomSelectInput
                    options={howDidYouHearOption}
                    label="How Did You Hear About Us?"
                    name="howDidYouHear"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="w-full grid gap-4">
                <h3 className="text-2xl font-bold">Payment Details</h3>
                <div className="w-full grid gap-3">
                  <div className="w-full flex items-center gap-4">
                    <input
                      type="radio"
                      id="paymentMethod1"
                      value="Card or Bank"
                      {...register('paymentMethod')}
                    />
                    <p>Pay with Card or Bank</p>
                  </div>
                  <div className="w-full flex items-center gap-4">
                    <input
                      type="radio"
                      id="paymentMethod2"
                      value="Bank Transfer"
                      {...register('paymentMethod')}
                    />
                    <p>Pay with Bank Transfer</p>
                  </div>
                  <div className="w-full flex items-center gap-4">
                    <input
                      type="radio"
                      id="paymentMethod3"
                      value="Chipper Cash"
                      {...register('paymentMethod')}
                    />
                    <p>Pay with Chipper Cash</p>
                  </div>
                  {errors && errors.paymentMethod?.message && (
                    <p className="text-red-600 capitalize text-sm">
                      {String(errors.paymentMethod.message)}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p>
                  By selecting Register, I agree to the{' '}
                  <span className="text-primary underline">EventWave Terms of Service</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-6 rounded-xl">
              <h4 className="text-xl text-center text-primary border-b pb-2">Order Summary</h4>
              <div className="w-full grid gap-8">
                <div className="w-full flex items-center gap-8 justify-between">
                  <p className="font-semibold">Tech Innovators Summit Regular Ticket</p>
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <button
                      type="button"
                      onClick={decrementQuantity}
                      className="w-8 h-8 rounded-lg bg-[#bfbfbf] text-2xl font-bold text-white"
                    >
                      -
                    </button>
                    <h4 className="text-xl font-bold text-primary">{quantity}</h4>
                    <button
                      type="button"
                      onClick={incrementQuantity}
                      className="w-8 h-8 rounded-lg bg-primary text-xl font-bold text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-full flex items-center gap-8 justify-between">
                  <p className="font-semibold">Sub-total</p>
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-bold text-primary">₦{10_000 * quantity}</h4>
                  </div>
                </div>
              </div>
              <div className="w-full grid gap-4">
                <div className="pt-2 border-t w-full flex items-center justify-between gap-3">
                  <p>Total:</p>
                  <h3 className="text-2xl font-bold">₦20,000</h3>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg">
                  Register for this event
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </CustomApplayout>
  );
};

export default EventCheckout;
