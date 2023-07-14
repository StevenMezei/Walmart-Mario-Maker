import React from 'react';
import PropTypes from 'prop-types';
import Character from "./character";
import Level from './level';

const Game = ({gameState}) => {
    let style = {};

    if (Object.prototype.hasOwnProperty.call(gameState.level, "background") && gameState.level.background !== null) {
        style = {
            background: `#000 url("${gameState.level.background}") left / cover no-repeat`
        }
    }

    return (
        <div className='container' style={style} >
            <span className="coinCounter">Score: {gameState.cumCoins}</span>
            <div className="healthCounter"><div className='heart'/><div> {gameState.player.health}</div></div>
            <Level  
                player={<Character player={gameState.player} />}
                stageX={gameState.stageX}
                stageY={gameState.stageY}
                level={gameState.level}
                buttonMap={gameState.buttonMap}
            />
        </div>
    );
};

Game.propTypes = {
    gameState: PropTypes.object,
};

export default Game;