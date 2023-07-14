import React from 'react';
import PropTypes from 'prop-types';

const Character = ({player}) => {
    let transform = player.xDirection === 'left' 
        ? `translate(${player.xPos}px, ${-player.yPos}px) scaleX(-1)`
        : `translate(${player.xPos}px, ${-player.yPos}px) scaleX(1)`;

    let style = {
        height: player.height,
        width: player.width,
        transform: transform
    };

    let className = "character" + (player.invulnerable ? " damaged" : " normal")

    return ( 
        <span className={className} style={style} /> 
    );
};

Character.propTypes = {
    player: PropTypes.object
};

export default Character;