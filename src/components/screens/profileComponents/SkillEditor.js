import React from "react";
import { connect } from "react-redux";

import SkillRow from "./SkillRow";
import { skillField } from '../../constants';
import { TextInput, Warning } from "../../common";
import { SKILL_INPUT, SKILLS } from "../../../constants";

import {
  updateProfileSkill,
  addSkill,
  editSkill,
  removeSkill
} from "../../../actions";

const SkillEditor = props => {

  const { store } = props;
  const { skills, skillInput, editPointer } = store;
  const value = skillInput
    ? skillInput.charAt(0).toUpperCase() + skillInput.slice(1)
    : skillInput;

  const editFlag = editPointer || editPointer === 0;
  const editIndex =  editFlag ? editPointer : skills.length;
  let skillList = [];

  if (editFlag) skillList = [...skills.slice(0, editPointer), skillInput, ...skills.slice(editPointer + 1)];
  else skillList = [...skills, skillInput];

  const add = () => {
    props.addSkill({
      [SKILL_INPUT]: value,
      [SKILLS]: skills,
      skillList
    });
  }

  const remove = index => {
    props.removeSkill({
      deleteIndex: index,
      [SKILLS]: skills,
      editIndex
    })
  }

  return (
    <React.Fragment>
      <div className="skill-block">
        {skillList.map((skill, index) => (
          skill.length > 0 ?
            <SkillRow
              skill={skill}
              edit={index !== editIndex}
              editSkill={() => props.editSkill(index, skill)}
              addSkill={add}
              removeSkill={() => remove(index)}
            /> : null
        ))}
        <Warning warning={props.store.warning} />
      </div>
      <TextInput
        key={"form-skill"}
        formField={skillField}
        split={true}
        onEnterKey={e => e.keyCode === 13 && skillInput ? add() : null}
        onChange={props.updateProfileSkill}
        value={skillInput}
        required={false}
      />
    </React.Fragment>
  );
};

function mapStatetoProps(state) {
  return {
    store: state.profile
  };
}

export default connect(
  mapStatetoProps,
  {
    updateProfileSkill,
    addSkill,
    editSkill,
    removeSkill
  }
)(SkillEditor);