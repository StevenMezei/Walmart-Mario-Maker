import {
    charWidth, 
    charHeight,  
    enemyWidth, 
    enemyHeight, 
    coinWidth,
    coinHeight,
    buttonWidth,
    buttonHeight,
    doorWidth,
    doorHeight,
} from './constants';

const loadGame = (setState, setStart, setErrorTxt, propsGameData) => {
    // delete require.cache['./src/data/gameData.json'];
    // let gameData = require('./gameData.json');
    let gameData = structuredClone(propsGameData);

    if (gameData.game) {
        gameData = gameData['game'];

        let level1 = gameData.levels[0];

        let player = {
            ...gameData.types.player,
            xPos: level1.playerStartX,
            yPos: level1.playerStartY,
            xDirection: '',
            height: charHeight,
            width: charWidth,
        };

        loadProperties(level1, gameData.types);

        let initialState = {
            stageX: 0,
            stageY: 0,
            player: player,
            level: level1,
            buttonMap: new Map(),
            cumCoins: 0,
            status: 'start',
        };
    
        setState(initialState);
        setStart(true);
    } else {
        setStart(false);
        setErrorTxt(gameData['error']);
    }

    return gameData;
}

const loadProperties = (level, types) => {
    // mapping properties from the types to the in-game entities
    level.doors = level.doors.map(
        door => ({
            ...door,
            width: doorWidth,
            height: doorHeight, 
            ...types.door[door.type],
            tempClosed: false
        }
    ));

    level.platforms = level.platforms.map(
        p => ({
            ...p, 
            ...types.platform[p.type]
        }
    ));

    level.terrain = level.terrain.map(
        t => ({
            ...t, 
            ...types.terrain[t.type]
        }
    ));

    level.coins = level.coins.map(
        coin => ({
            ...coin,
            width: coinWidth,
            height: coinHeight, 
            ...types.coin[coin.type]
        }
    ));

    level.enemies = level.enemies.map(
        enemy => ({
            ...enemy, 
            ...types.enemy[enemy.type],
            width: enemyWidth,
            height: enemyHeight,
            velocity: 0
        }
    ));

    level.buttons = level.buttons.map(
        button => ({
            ...button,
            width: buttonWidth,
            height: buttonHeight, 
            ...types.button[button.type]
        }
    ));
};

export {
    loadGame,
    loadProperties 
};