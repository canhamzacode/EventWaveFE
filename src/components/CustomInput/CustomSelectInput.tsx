import { CustomSelectInputPropType } from '@/types/index.t';

const CustomSelectInput = ({
  options,
  register,
  name,
  errors,
  label,
  customStyle
}: CustomSelectInputPropType) => (
  <div className="w-full flex flex-col gap-2">
    <label htmlFor={name} className="font-bold">
      {label}
    </label>
    <div
      className={`flex w-full items-center gap-3 p-3 ${
        customStyle || 'bg-white border-gray-300'
      }  rounded-lg border border-gray-300`}
    >
      <select
        className={`border-none ${customStyle || ''} outline-none w-full placeholder:text-black`}
        {...register(name)}
      >
        {options.map((option) => (
          <option className="text-black" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    {errors[name] && errors[name]?.message && (
      <p className="text-red-600 capitalize text-sm">{errors[name]?.message}</p>
    )}
  </div>
);

export default CustomSelectInput;
