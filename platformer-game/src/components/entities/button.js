import React from 'react';
import PropTypes from 'prop-types';

const Button = ({button}) => {
    const style = {
        height: button.height,
        width: button.width,
        left: button.xPos,
        bottom: button.yPos,
        background: `url("${button.image}") center / cover no-repeat`
    };

    return (
        <span className="button" style={style} />
    );
};

Button.propTypes = {
    button: PropTypes.object
};

export default Button;