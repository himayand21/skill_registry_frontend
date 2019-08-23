import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Icon, Row } from "../common";
import { profileKeys } from "../constants";

import { EditProfile } from './profileComponents';
import { getProfile, updateProfileState } from '../../actions';

class Profile extends React.Component {
  componentDidMount() {
    const { userId, token } = this.props;
    if (userId) {
      this.props.getProfile({ userId, token });
      this.props.updateProfileState({ editPointer: '' });
    }
  }
  render() {
    const {
      profile,
      userId,
      user,
      authorized
    } = this.props;

    const urlName = "/" + user.name.toLowerCase().replace(/ /g, "+");
    const urlPrefix = "/" + authorized + urlName;

    return (
      <div className="container-fluid profile-wrapper">
        <div className="col-lg-4 back-button-wrapper">
          {!userId ?
            <Link
              to={urlPrefix + '/search/back'}
            >
              <i className="fas fa-chevron-left"></i>
          </Link>
            : null}
        </div>
        <div className="col-lg-4 form-box profile-form">
          <Icon align="center" size="jumbo-icon" type="fa-id-card" />
          {profileKeys.map(row => (
            <Row key={"row" + row} label={row} description={profile[row]} />
          ))}
          <EditProfile userId={userId} />
        </div>
      </div>
    );
  };
}

function mapStatetoProps(state) {
  return {
    profile: state.profile.user,
    user: state.user.userData,
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
