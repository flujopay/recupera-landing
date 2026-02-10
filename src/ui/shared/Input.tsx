import { ReactNode } from "react";

interface InputProps {
  label: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  leftElement?: ReactNode;
  error?: string;
  disabled?: boolean;
}

export const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  required = false,
  placeholder,
  leftElement,
  error,
  disabled = false,
}: InputProps) => {
  return (
    <div>
      <label className="block text-sm font-bold text-black mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`relative flex items-center w-full rounded-full border bg-white  ${error ? "border-red-500" : "border-[#ddd]"}`}
      >
        {leftElement && <div className="shrink-0">{leftElement}</div>}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          className={`flex-1 py-2 bg-transparent focus:outline-none border-none ${leftElement ? "pl-4" : "px-4"}`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
