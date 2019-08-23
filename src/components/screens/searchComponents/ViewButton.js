/* eslint-disable react/style-prop-object */
import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Button } from "../../common";
import { viewProfile } from "../../../actions";

const ViewButton = props => {
    const {
        history,
        token,
        name,
        id,
        authorized
    } = props;
    const requestParams = {
        userId: id,
        token,
        history,
        name,
        authorized
    };
    return (
        <div className="row request-row request-buttons view-button">
            <div className="col-xs-12">
                <Button
                    label="VIEW PROFILE"
                    style="active no-shadow"
                    handleClick={() => props.viewProfile(requestParams)}
                />
            </div>
        </div>
    );
}

function mapStatetoProps(state) {
    return {
        token: state.user.token,
        name: state.user.userData.name,
        authorized: state.user.authorized
    };
}

export default withRouter(
    connect(
        mapStatetoProps,
        {
            viewProfile
        }
    )(ViewButton)
);