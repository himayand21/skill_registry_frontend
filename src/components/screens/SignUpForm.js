import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Form, Icon, Warning } from "../common";
import { signUpFields } from "../constants";
import {
  updateSignUpState,
  signupUser,
  getManagerList,
  setWarningMessage
} from "../../actions";
import { MANAGER_ID } from "../../constants";
import { checkFormDataValidity } from "../../util";

class SignUpForm extends React.Component {
  componentDidMount() {
    this.props.getManagerList();
    localStorage.clear();
  }

  submit = async ({ history, formData }) => {
    const { isValid, message } = await checkFormDataValidity({ formData });
    await this.props.setWarningMessage({ message });
    if (isValid)
      this.props.signupUser({ store: formData, history });
  }

  render() {
    const { managerFlag, warning, managerOptions } = this.props.store;
    const { history } = this.props;
    const populatedFields = signUpFields.map(field => {
      if (field.key === MANAGER_ID) return { ...field, options: managerOptions }
      return field
    })

    return (
      <div className="container-fluid">
        <div className="col-md-4" />
        <div className="col-md-4 form-box">
          <Icon align="center" size="jumbo-icon" type="fa-user-plus" />
          <Form
            fields={
              managerFlag
                ? populatedFields.filter(field => field.key !== MANAGER_ID)
                : populatedFields
            }
            buttonName={"SIGN UP"}
            store={this.props.store}
            updateState={this.props.updateSignUpState}
            submit={() => this.submit({ history, formData: this.props.store })}
          />
          <Warning warning={warning} />
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    store: state.signup
  };
}

export default withRouter(
  connect(
    mapStatetoProps,
    { updateSignUpState, signupUser, getManagerList, setWarningMessage }
  )(SignUpForm)
);