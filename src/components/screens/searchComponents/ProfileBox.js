import React from "react";

import { finderKeys } from "../../constants";
import { Row } from "../../common";
import ViewButton from "./ViewButton";

const ProfileBox = props => {
  const {
    user,
    skills,
    currentProject,
    location
  } = props;
  const {
    name
  } = user;

  const parameters = {
    name,
    location,
    skills,
    currentProject
  };

  return (
    <div className="col-sm-6 col-md-4 col-xs-12 col-lg-3">
      <div className="profile-box request-box">
        {finderKeys.map(row => (
          <Row key={"row" + row} label={row} description={parameters[row]} />
        ))}
        <ViewButton id={props.user._id} />
      </div>
    </div>
  );
};

export default ProfileBox;
