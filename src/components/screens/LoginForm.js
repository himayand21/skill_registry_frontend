/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { connect } from "react-redux";

import { Form, Icon, Warning } from "../common";
import { loginFields } from "../constants";
import {
  updateUserState,
  verifyUser,
  resetState
} from "../../actions";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  componentDidMount() {
    this.props.resetState();
    localStorage.clear();
  }
  render() {
    const { history } = this.props;
    const { email, password, warning } = this.props.store;
    return (
      <div className="container-fluid">
        <div className="col-md-4" />
        <div className="col-md-4 form-box">
          <Icon align="center" size="jumbo-icon" type="fa-user" />
          <Form
            fields={loginFields}
            store={this.props.store}
            updateState={this.props.updateUserState}
            buttonName={"LOG IN"}
            submit={() =>
              this.props.verifyUser({ history, data: { email, password } })
            }
          />
          <Warning warning={warning} />
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    store: state.user
  };
}

export default withRouter(
  connect(
    mapStatetoProps,
    { updateUserState, verifyUser, resetState }
  )(LoginForm)
);
