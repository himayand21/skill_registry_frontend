import React from "react";
const TextInput = props => {
  const { formField } = props;
  return (
    <div className={props.split ? "" : "form-group"}>
      <div className={props.split ? "col-sm-3 form-label-wrapper" : null}>
        <label className="form-label">{formField.label.toUpperCase()}</label>
      </div>
      <div className={props.split ? "col-sm-9 form-input" : null}>
        <input
          type={formField.type}
          className="form-control"
          placeholder={formField.placeholder}
          onKeyDown={props.onEnterKey}
          value={props.value}
          required={props.required}
          onChange={e => props.onChange({ [formField.key]: e.target.value })}
        />
      </div>
      <div className="form-info">
        <small className="form-text text-muted">
          {formField.info ? formField.info : null}
        </small>
      </div>
    </div>
  );
};

export default TextInput;
