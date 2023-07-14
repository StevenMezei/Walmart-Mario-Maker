import React from 'react';
import PropTypes from 'prop-types';
import { doorWidth, doorHeight } from '../../data/constants';

// just pass in the door and we create the style here
const Door = ({xPos, yPos, image, isOpen}) => {
    let background = `url("${image}") center / 100% 100% no-repeat`;

    const style = {
        height: doorHeight,
        width: doorWidth,
        left: xPos,
        bottom: yPos,
        background: background
    };

    return (isOpen && <span className="door" style={style} />);
};

Door.propTypes = {
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    image: PropTypes.string,
    isOpen: PropTypes.bool,
};

export default Door;