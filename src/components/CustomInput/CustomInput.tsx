interface CustomInputPropType {
  type: string;
  placeholder: string;
  register: any;
  name: string;
  errors: any;
  label: string;
  customStyle?: string;
  readonly?: boolean;
  value?: string;
  onChange?: (e: any) => void;
}

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
}: CustomInputPropType) => (
  <div className="w-full flex flex-col gap-2">
    <label htmlFor={name} className="text-base font-bold">
      {label}
    </label>
    <div
      className={`flex w-full ${
        customStyle || 'bg-white border-gray-300'
      }   items-center gap-3 p-3 rounded-lg border `}
    >
      <input
        type={type}
        placeholder={placeholder}
        className={`border-none outline-none w-full ${customStyle || 'placeholder:text-black'}`}
        {...register(name)}
        readOnly={readonly}
        value={value}
        onChange={onChange}
      />
    </div>
    {errors[name] && <p className="text-red-600 capitalize text-sm">{errors[name].message}</p>}
  </div>
);

export default CustomInput;
