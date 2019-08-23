import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
    pendingButtons,
    approvedButtons
} from "../../constants";
import { Button } from "../../common";
import {
    approveRequest,
    deleteUser,
    declineRequest,
    viewProfile
} from "../../../actions";

const RequestButtons = props => {
    const {
        requestFlag,
        token,
        userId,
        id,
        history,
        authorized,
        name
    } = props;
    const requestParams = {
        managerId: userId,
        userId: id,
        token,
        history,
        name,
        authorized
    };
    const requestButtons = requestFlag ? approvedButtons : pendingButtons;
    return (
        <div className="row request-row request-buttons">
            {requestButtons.map((button, index) =>
                <div
                    key={"buttonClass" + button.label}
                    className="col-xs-6"
                >
                    <Button
                        key={"button" + index}
                        {...button}
                        handleClick={() => props[button.action](requestParams)}
                    />
                </div>
            )}
        </div>
    );
}

function mapStatetoProps(state) {
    return {
        requestFlag: state.user.requestFlag,
        token: state.user.token,
        userId: state.user.userData.userId,
        name: state.user.userData.name,
        authorized: state.user.authorized
    };
}

export default withRouter(
    connect(
        mapStatetoProps,
        {
            approveRequest,
            deleteUser,
            viewProfile,
            declineRequest,
        }
    )(RequestButtons)
);