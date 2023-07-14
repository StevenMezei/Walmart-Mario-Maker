import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({coin}) => {
    const style = {
        height: coin.height,
        width: coin.width,
        left: coin.xPos,
        bottom: coin.yPos,
        background: `url("${coin.image}") center / cover no-repeat`
    };

    return (
        <span className="coin" style={style} />
    );
};

Coin.propTypes = {
    coin: PropTypes.object
};

export default Coin;