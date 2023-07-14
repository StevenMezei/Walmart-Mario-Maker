import React from 'react';
import PropTypes from 'prop-types';
import { terrainHeight } from '../../data/constants';

const Terrain = ({terrain}) => {
    const style = {
        transform: `translate(${terrain.xPos}px, -${terrain.yPos}px)`,
        background: `${terrain.colour} url("${terrain.image}")`,
        height: terrainHeight,
        width: terrain.length
    };

    return ( 
        <span className="terrain" style={style} /> 
    );
};

Terrain.propTypes = {
    terrain: PropTypes.object
};

export default Terrain;