import React, { FC, useState } from "react";
import "./style.scss";

type InputCustomProps = {
  label: string;
  name: string;
  haveError: boolean;
};

const InputCustom: FC<
  InputCustomProps &
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
> = ({ label, name, haveError, ...inputProps }) => {

  return (
    <div className={`input-container ${haveError ? "error-input" : ""}`}>
      <input id={name} name={name} {...inputProps}/>
      <label htmlFor={name}>{label} *</label>
    </div>
  );
};

export default InputCustom;
