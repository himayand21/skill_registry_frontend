import React from 'react';
import { connect } from "react-redux";
import { css } from '@emotion/core';
import { HashLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Spinner = props => {
    return (
        <React.Fragment>
                <div className={props.loading ? 'spinner spinner-open' : 'spinner spinner-close'}>
                    <HashLoader
                        css={override}
                        sizeUnit={"px"}
                        size={50}
                        color={'#2C346D'}
                        loading={true}
                    />
                    <div className="spinner-label">Loading...</div>
                </div>
        </React.Fragment>
    )
}

function mapStatetoProps(state) {
    return {
        loading: state.spinner.loading
    };
}

export default connect(mapStatetoProps)(Spinner);
