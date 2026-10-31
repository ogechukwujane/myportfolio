import React from "react";
type CustomFieldProps = {
  value: string;
  handleChange: (value: any) => void;
  touched?: boolean;
  error?: string;
  type: "text" | "textArea";
  label: string;
  placeholder: string;
};

const CustomField = ({
  value,
  handleChange,
  touched,
  error,
  type,
  label,
  placeholder,
}: CustomFieldProps) => {
  return (
    <div className="flex flex-col ">
      <label className="font-bold text-[16px] text-light">{label}</label>
      {type === "text" ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="flex-1 bg-gray-100 rounded-[5px] p-[20px] border-none outline-light "
        />
      ) : (
        <textarea
          className="flex-1 bg-gray-100 rounded-[5px] p-[20px] border-none min-h-[250px] max-[500px]:min-h-[200px]  outline-light "
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
      {error && touched && (
        <p className="text-red-500 mt-[5px] text-[15px]">{error}</p>
      )}
    </div>
  );
};

export default CustomField;
