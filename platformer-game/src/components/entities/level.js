import React from 'react';
import PropTypes from 'prop-types';
import Terrain from "./terrain";
import Coin from "./coin";
import Door from './door';
import Platform from './platform';
import Button from './button';
import Enemy from './enemy';

const Level = ({player, stageX, stageY, level, buttonMap}) => {
    let style = {
        transform: `translate(-${stageX}px, ${stageY}px)`,
    };

    return (<div className='stage' style={style} >
        {player}
        {level["enemies"].map(
            (enemy) => (
                <Enemy enemy={enemy} key={enemy["name"]} />
            )
        )}
        {level["platforms"].map(
            (platform) => (
                <Platform platform={platform} key={platform["name"]} />
            )
        )}
        {level["terrain"].map(
            (terrain) => (
                <Terrain terrain={terrain} key={terrain["name"]} />
            )
        )}
        {level["coins"].map(
                coin => (
                    <Coin coin={coin} key={coin["name"]} />
                )
            )
        }
        {level["doors"].map(
            (door) => (
                <Door 
                    xPos={door["xPos"]} 
                    yPos={door["yPos"]} 
                    image={door["image"]}
                    isOpen={buttonMap.has(door["key"]) || door["key"] === null}
                    key={door["name"]}
                />
            )
        )}
        {level["buttons"].map(
            (button) => (
                <Button button={button} key={button["name"]} />
            )
        )}
    </div>);
};

Level.propTypes = {
    player: PropTypes.object,
    stageX: PropTypes.number,
    stageY: PropTypes.number,
    level: PropTypes.object,
    buttonMap: PropTypes.object
};

export default Level;