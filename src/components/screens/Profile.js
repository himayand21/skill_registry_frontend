import React from "react";
import { connect } from "react-redux";

import { Icon, Row } from "../common";
import { profileKeys } from "../constants";

import { EditProfile } from './profileComponents';
import { getProfile, updateProfileState } from '../../actions';

class Profile extends React.Component {
  componentDidMount() {
    const { userId, token } = this.props;
    if (userId) {
      this.props.getProfile({ userId, token });
      this.props.updateProfileState({editPointer: ''});
    }
  }
  render() {
    const { user, userId } = this.props;

    return (
      <div className="container-fluid">
        <div className="col-lg-4" />
        <div className="col-lg-4 form-box">
          <Icon align="center" size="jumbo-icon" type="fa-id-card" />
          {profileKeys.map(row => (
            <Row key={"row" + row} label={row} description={user[row]} />
          ))}
          <EditProfile userId = {userId} />
        </div>
      </div>
    );
  };
}

function mapStatetoProps(state) {
  return {
    user: state.profile.user,
    authorized: state.user.authorized,
    token: state.user.token
  };
}

export default connect(
  mapStatetoProps,
  {
    getProfile,
    updateProfileState
  }
)(Profile);
