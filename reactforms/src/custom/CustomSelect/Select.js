import React from "react";

export const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select 
      value={value} 
      onChange={({target}) => setValue(target.value)}
      {...props}
      >
      <option value="" disabled >Selecione...</option>
      {options.map((option) => (
        <option key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
