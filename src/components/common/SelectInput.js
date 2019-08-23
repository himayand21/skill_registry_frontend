import React from "react";
import Select from "react-select";

const SelectInput = props => {
  const { formField } = props;
  return (
    <div className="form-group">
      <label className="form-label">{formField.label.toUpperCase()}</label>
      <Select
        value={props.selectedOption}
        isMulti={props.multi}
        onChange={selectedOption => {
          props.onChange({
            [formField.key]: props.multi ?
              selectedOption :
              selectedOption.value
          })
        }}
        closeMenuOnSelect={!props.multi}
        options={formField.options}
      />
      <small className="form-text text-muted">
        {formField.info ? formField.info : null}
      </small>
    </div>
  );
};

export default SelectInput;
