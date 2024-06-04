'use client';

import { CustomInputPropType } from '@/types/index.t';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const CustomInput = ({
  type,
  placeholder,
  register,
  name,
  errors,
  label,
  customStyle,
  readonly,
  value,
  onChange
}: CustomInputPropType) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={name} className="text-base font-bold">
        {label}
      </label>
      {type === 'password' ? (
        <div
          className={`flex items-center border w-full rounded-lg  border-gray-300 ${isFocused ? 'border-primary' : 'border-gray-300'}`}
        >
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            className={`w-full p-3 border-none outline-none rounded-lg  ${customStyle || 'placeholder:text-black'}`}
            {...register(name)}
            readOnly={readonly}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button type="button" className="px-4" onClick={toggleShowPassword}>
            {showPassword ? <BsEyeSlash size={25} /> : <BsEye size={25} />}
          </button>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`border outline-none w-full  p-3 active:border-primary focus:border-primary rounded-lg  border-gray-300 ${customStyle || 'placeholder:text-black'}`}
          {...register(name)}
          readOnly={readonly}
          value={value}
          onChange={onChange}
        />
      )}
      {errors[name] && errors[name]?.message && (
        <p className="text-red-600 capitalize text-sm">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default CustomInput;
