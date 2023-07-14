import React from 'react';
import PropTypes from 'prop-types';

const Enemy = ({enemy}) => {
    let background = "";
    if (enemy.colour) {
        background = `${enemy.colour}`;
    }

    if (enemy.image !== "none") {
        background = `url("${enemy.image}") center / 100% 100% no-repeat`;
    }

    let style = {
        height: enemy.height,
        width: enemy.width,
        transform: `translate(${enemy.xPos}px, ${-enemy.yPos}px)`,
        background: background
    };

    return ( 
        <span className='enemy' style={style} /> 
    );
};

Enemy.propTypes = {
    enemy: PropTypes.object
};

export default Enemy;