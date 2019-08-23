import React from 'react';

const Title = props => {
    const { title } = props;
    return (
        <div className="row title">
            {title.toUpperCase()}
        </div>
    );
}

export default Title;