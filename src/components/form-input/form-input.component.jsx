import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherprops }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherprops}
      />
      {label ? (
        <div
          className={`${
            otherprops.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
};

export default FormInput;
