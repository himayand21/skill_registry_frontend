import React from "react";
const Icon = props => {
  return (
    <div className={props.align}>
      <i className={"fas " + props.type + " " + props.size} />
    </div>
  );
};

export default Icon;
