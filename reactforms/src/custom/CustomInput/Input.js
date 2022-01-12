import React from "react";

export const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={label}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};
