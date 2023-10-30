import React from "react";
import "./styles.css";

const Input = (props) => {
  return (
    <div className="inputBox">
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        required
      ></input>
      <span className="label">{props.placeholder}</span>
    </div>
  );
};

export default Input;
