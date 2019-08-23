import React from 'react';

const Button = props => {
    const { style, handleClick, label } = props;
    return (
        <button className={"box-button " + style} onClick={handleClick}>
            {label}
        </button>
    );
}

export default Button