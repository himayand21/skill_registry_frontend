import React from "react";

const Warning = props => {
  return (
    <div className="form-info">
        <small className="form-text text-muted red">
          {props.warning ? props.warning : null}
        </small>
      </div>
  );
};
export default Warning;
