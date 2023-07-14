import React from 'react';
import PropTypes from 'prop-types';
import { platformHeight } from '../../data/constants';

const Platform = ({platform}) => {
    const style = {
        transform: `translate(${platform.xPos}px, -${platform.yPos}px)`,
        background: `${platform.colour} url("${platform.image}")`,
        height: platformHeight,
        width: platform.length
    };

    return ( 
        <span className="platform"style={style}/> 
    );
};

Platform.propTypes = {
    platform: PropTypes.object
};

export default Platform;