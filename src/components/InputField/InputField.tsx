import { AlertCircle } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  icon: React.ReactNode;
  reg?: boolean;
  register: any;
  errors?: any;
  className?: string;
};

const InputField = ({
  name,
  label,
  type = "text",
  placeholder = "placeholder",
  value,
  icon,
  reg = false,
  register,
  errors,
  className,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="flex flex-col gap-1 relative w-full">
        <label htmlFor={name} className="text-sm md:text-xs ml-1">
          {label}
        </label>
        <input
          {...register(name)}
          id={name}
          name={name}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          className={`p-2.5 pl-8 rounded-lg text-sm bg-white outline-none border group focus:border-orange-500 hover:border-primary ${className} ${
            errors[name] ? "border-red-500 focus:border-red-500" : ""
          }`}
        />
        <i className="absolute left-2 bottom-3 text-primary">{icon}</i>
        {type === "password" && !reg && (
          <Link
            to="/auth/forgot"
            className="text-xs leading-relaxed absolute right-2 bottom-3 text-orange-600 "
          >
            Forgot password?
          </Link>
        )}
        {type === "password" && reg && (
          <p
            onClick={togglePasswordVisibility}
            className="text-xs leading-relaxed absolute right-3 bottom-3 text-orange-600 cursor-pointer"
          >
            {showPassword ? "Hide" : "Show"}
          </p>
        )}
      </div>
      {errors && errors[name] && (
        <span className="text-[10px] flex items-center gap-1 text-red-500 font-medium">
          <AlertCircle />
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default InputField;
