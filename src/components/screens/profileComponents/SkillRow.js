import React from "react";

const SkillRow = props => {
  const { skill, edit } = props;
  return (
    <div className="row request-row">
      <div className="col-xs-8">{skill}</div>
      <div className="col-xs-2 icon-box">
        <i className={edit ? "far fa-edit" : "fas fa-check"}
          onClick={edit ? props.editSkill : props.addSkill} />
      </div>
      <div className="col-xs-2 icon-box">
        <i class="fas fa-times"
          onClick={props.removeSkill} />
      </div>
    </div>
  );
};

export default SkillRow;
