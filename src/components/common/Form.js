/* eslint-disable react/style-prop-object */
import React from "react";
import { TextInput, SelectInput, Toggle, Button } from "./index";

const Form = props => {
  const { store, fields } = props;

  const submit = e => {
    e.preventDefault();
    props.submit();
  };

  const renderSwitch = (field, index) => {
    switch (field.type) {
      case "select-multi":
        return (
          <SelectInput
            key={"form" + index}
            formField={field}
            onChange={props.updateState}
            multi={true}
            selectedOption={field.options.filter(option =>
              store[field.key].includes(option.value)
            )}
          />
        );
      case "select":
        return (
          <SelectInput
            key={"form" + index}
            formField={field}
            onChange={props.updateState}
            selectedOption={
              field.options.find(
                option => store[field.key] === option.value
              ) || { label: field.placeholder, value: "" }
            }
          />
        );
      case "toggle":
        return (
          <Toggle
            key={"form" + index}
            formField={field}
            onChange={props.updateState}
            value={store[field.key]}
          />
        );
      default:
        return (
          <TextInput
            key={"form" + index}
            formField={field}
            split={props.split}
            onChange={props.updateState}
            value={store[field.key]}
            required={!field.required === false}
          />
        );
    }
  };
  return (
    <form onSubmit={submit}>
      <div className={props.columnDisplay ? "search-bar" : null}>
        {fields.map((field, index) => (
          <span
            className={props.columnDisplay ? "search-element col-md-3" : null}
          >
            {renderSwitch(field, index)}
          </span>
        ))}
      </div>

      {props.split ? null : (
        <div
          className={
            props.columnDisplay ? "search-element search-buttons" : null
          }
        >
          <input
            type="submit"
            value={props.buttonName}
            className="form-button active"
          />
          {props.columnDisplay ? (
            <div>
              <Button
                label="RESET"
                style="active"
                handleClick={e => {
                  e.preventDefault();
                  props.resetSearch();
                }}
              />
            </div>
          ) : null}
        </div>
      )}
    </form>
  );
};

export default Form;
