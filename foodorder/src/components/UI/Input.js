import React from "react";

const Input = (props, ref) => {
  return (
    <div className="Input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
};

export default Input;
