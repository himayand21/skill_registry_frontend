import React from "react";
import { connect } from "react-redux";

import { EDIT_FLAG } from "../../../constants";

import {
  Toggle,
  Form,
  Row,
  Button
} from "../../common";

import {
  updateProfileState,
  changeProfile
} from "../../../actions";

import {
  editFields,
  editableKeys
} from "../../constants";

import SkillEditor from "./SkillEditor";

const EditProfile = props => {
  const { userId, store, token } = props;
  const { editFlag } = store;
  const formField = {
    key: EDIT_FLAG,
    label: "EDIT"
  };

  const { skills, location, currentProject, contact, _id } = store;
  const data = {
    skills,
    location,
    currentProject,
    contact
  };

  return (
    <React.Fragment>
      <div className="edit-block">
        {userId ? (
          <div className="edit-toggle">
            <Toggle
              formField={formField}
              onChange={props.updateProfileState}
              value={editFlag}
            />
          </div>
        ) : null}
        <hr />
      </div>
      {editFlag ? (
        <div className="container-fluid">
          <SkillEditor />
          <Form
            split={true}
            fields={editFields}
            store={props.store}
            updateState={props.updateProfileState}
          />
        </div>
      ) : (
          editableKeys.map(row => (
            <Row key={"row" + row} label={row} description={store[row]} />
          ))
        )}
      {userId ? (
        <div className="update-button">
          <Button
            label="UPDATE"
            // eslint-disable-next-line react/style-prop-object
            style="active"
            handleClick={() => props.changeProfile({ data, token, profileId: _id })}
          />
        </div>) : null}
    </React.Fragment>
  );
};

function mapStatetoProps(state) {
  return {
    store: state.profile,
    token: state.user.token,
  };
}

export default connect(
  mapStatetoProps,
  {
    updateProfileState,
    changeProfile
  }
)(EditProfile);
