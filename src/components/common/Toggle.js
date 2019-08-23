import React, { Fragment } from "react";
import Switch from "react-switch";

const Toggle = props => {
  const { formField } = props;
  return (
    <Fragment>
      <label className="form-label">{formField.label.toUpperCase()}</label>
      <Switch
        checked={props.value}
        onChange={checked => props.onChange({[formField.key]: checked})}
        onColor="#8289BA"
        onHandleColor="#2C346D"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={15}
        width={35}
        className="react-switch"
        id="material-switch"
      />
    </Fragment>
  );
};

export default Toggle;
