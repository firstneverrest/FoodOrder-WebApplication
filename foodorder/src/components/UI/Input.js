import React from "react";

const Input = (props) => {
  return (
    <div className="Input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
