import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useEvent } from '../../hooks';
import {
    charWidth, 
    charHeight, 
    platformHeight, 
    terrainHeight, 
    tile, 
    doorWidth,
    doorHeight,
    terminalVelocity,
    enemyHeight,
    enemyWidth,
    buttonWidth,
    buttonHeight,
    coinWidth,
    coinHeight,
} from '../../data/constants';
import Game from '../entities/game';
import { loadGame, loadProperties } from '../../data/jsonReader';

let gameData = {};

function CreateEngine(setState, initialState) {
    this.level = initialState.level;
    this.game = initialState.status;

    // current stage position
    this.stageXPos = initialState.stageX;
    this.stageYPos = initialState.stageY;

    this.player = initialState.player;

    this.jump = false;
    this.inAir = true;
    this.playerYAcceleration = -1; // gravity, in m/s^2
    // every second, add this onto the velocity

    this.playerYVelocity = 0; // player speed, in m/s
    // every second, add this onto the y position

    // when the player is on a surface, set the velocity to be 0
    // when a jump is triggered, add a positive amount to the Y velocity

    this.cumCoins = initialState.cumCoins;
    this.buttonMap = initialState.buttonMap;

    const applyYAcceleration = () => {
        if ((this.playerYVelocity + this.playerYAcceleration) < terminalVelocity){
            this.playerYVelocity = terminalVelocity;
        } else {
            this.playerYVelocity += this.playerYAcceleration;
        }
    }

    const applyYVelocity = () => {
        let nextPos = this.player.yPos + this.playerYVelocity;

        if (nextPos + this.player.height < 0) {
            this.game = 'fail';
        } else if (checkPlatform(this.player, nextPos, this.playerYVelocity)) {
            this.player.yPos = checkPlatform(this.player, nextPos, this.playerYVelocity);
            this.playerYVelocity = 0;
            this.inAir = false;
        } else if (checkYTerrain(this.player, nextPos, this.playerYVelocity)) {
            this.player.yPos = checkYTerrain(this.player, nextPos, this.playerYVelocity);
            if (this.playerYVelocity < 0) {
                this.inAir = false;
            }
            this.playerYVelocity = 0;
        } else {
            this.player.yPos += this.playerYVelocity;
        }
    }

    const checkYTerrain = (entity, newYPos, velocity) => {
        const charLeftXPos = entity.xPos;
        const charRightXPos = entity.xPos + entity.width;
        const charCurrentYPos = entity.yPos;
        const charCurrentHeadYPos = entity.yPos + entity.height;

        for (let t of this.level.terrain) {
            let terrainSurfaceYPos = t["yPos"] + terrainHeight;
            let terrainBottomYPos = t["yPos"];
            if (charRightXPos >= t["xPos"]
                && charLeftXPos <= t["xPos"] + t["length"]) {
                if (velocity < 0
                    && charCurrentYPos >= terrainSurfaceYPos
                    && newYPos <= terrainSurfaceYPos) {
                    return terrainSurfaceYPos;
                } else if (velocity > 0
                    && charCurrentHeadYPos <= terrainBottomYPos
                    && (newYPos + charHeight) >= terrainBottomYPos) {
                    return terrainBottomYPos - charHeight;
                }
            }
        }
        return false;
    }

    // returns false if the player is not about to go through a platform, else return the y position of the surface of the platform
    const checkPlatform = (entity, newYPos, velocity) => {
        const charLeftXPos = entity.xPos;
        const charRightXPos = entity.xPos + entity.width;
        const charCurrentYPos = entity.yPos;

        for (let platform of this.level.platforms) {
            let platformSurfaceYPos = platform["yPos"] + platformHeight;
            if (velocity < 0
                && charRightXPos >= platform["xPos"]
                && charLeftXPos <= platform["xPos"] + platform["length"]
                && charCurrentYPos >= platformSurfaceYPos
                && newYPos <= platformSurfaceYPos 
            ){
                return platformSurfaceYPos;
            }
        }
        return false;
    }

    const checkDoors = () => {
        const charXPos = this.player.xPos;
        const charYPos = this.player.yPos;

        this.level.doors.forEach((door) => {
            if (
                charXPos + charWidth >= door.xPos + (doorWidth * 0.5)
                && charYPos <= door.yPos + (doorHeight * 0.5)
                && charYPos + charHeight >= door.yPos
                && charXPos <= door.xPos + doorWidth
                && (this.buttonMap.has(door["key"]) || door["key"] === null)
                && !door.tempClosed
            ) {
                if (door.goesTo === 'win win') {
                    this.game = 'win';
                } else {
                    let location = door.goesTo.split(" ");
                    this.level = gameData.levels.find(level => level.name === location[0]);
                    loadProperties(this.level, gameData.types);

                    let exitDoor = this.level.doors.find(door => door.name === location[1]);
                    exitDoor.tempClosed = true;

                    this.player.xPos = exitDoor.xPos;
                    this.player.yPos = exitDoor.yPos;
                    moveCamera();
                }
            } 
            if (door.tempClosed && 
                (charXPos >= door.xPos + doorWidth 
                    || charXPos + charWidth <= door.xPos 
                    || charYPos >= door.yPos + doorHeight 
                    || charYPos + charHeight <= door.yPos)
            ) {
                door.tempClosed = false;
            }
        });
    };

    const checkCoins = () => {
        const charXPos = this.player.xPos;
        const charYPos = this.player.yPos;
        let coinsIndex = 0;
        this.level.coins.forEach((coin) => {
            if (
                charXPos + charWidth >= coin.xPos + (coin.width * 0.5)
                && charYPos <= coin.yPos + (coin.height * 0.5)
                && charYPos + charHeight >= coin.yPos
                && charXPos <= coin.xPos + coin.width
            ) {
                this.level.coins.splice(coinsIndex, 1);
                this.cumCoins += coin.value;
            }
            coinsIndex++;
        });
    };

    const checkButtons = () => {
        const charXPos = this.player.xPos;
        const charYPos = this.player.yPos;
        let buttonIndex = 0;
        this.level.buttons.forEach((button) => {
            if (
                charXPos + charWidth >= button.xPos + (button.width * 0.5)
                && charYPos <= button.yPos + (button.height * 0.5)
                && charYPos + charHeight >= button.yPos
                && charXPos <= button.xPos + button.width
            ) {
                this.level.buttons.splice(buttonIndex, 1);
                if (!this.buttonMap.get(button.type)) {
                    this.buttonMap.set(button.type, "triggered");
                }
            }
            buttonIndex++;
        });
    };

    const checkEnemies = () => {
        const charXPos = this.player.xPos;
        const charYPos = this.player.yPos;

        if (this.player.invulnerable) {
            this.player.invulnerable--;
        }

        this.level.enemies.forEach((enemy) => {
            // if char hits an enemy
            if (charXPos + charWidth >= enemy.xPos + (enemy.width * 0.5)
                && charYPos <= enemy.yPos + (enemy.height * 0.5)
                && charYPos + charHeight >= enemy.yPos
                && charXPos <= enemy["xPos"] + enemy.width
            ) {
                if (!this.player.invulnerable) {
                    this.player.health -= 1;
                    this.player.invulnerable = 70;
                }
                if (this.player.health === 0) {
                    this.game = 'fail';
                }
            }
        });
    };

    const doJump = () => {
        if (this.jump) {
            if (this.inAir === false) {
                this.playerYVelocity += 25;
                this.inAir = true;
                this.jump = false;
            }
        }
    };

    const moveXPos = (entity, speedMultiplier) => {
        let newPos = entity["xPos"];
        if (entity.xDirection === 'right') {
            newPos = entity["xPos"] + tile * speedMultiplier;
        } 
        else if (entity.xDirection === 'left') {
            newPos = entity["xPos"] - tile * speedMultiplier;
        }

        newPos = checkXTerrain(entity, newPos) ? checkXTerrain(entity, newPos) : newPos;
        newPos = Math.max(newPos, 0);

        if (newPos + entity.width > this.level.width) {
            newPos = this.level.width - entity.width;
        }

        entity.xPos = newPos;
    };

    const movePlayer = () => {
        moveXPos(this.player, this.player.speed);

        // check and perform jump
        doJump();
        applyYAcceleration();
        applyYVelocity();
    }

    const moveEnemies = () => {
        let enemyIndex = 0;
        this.level.enemies.forEach(enemy => {
            if (enemy["behaviour"] === "FOLLOW" 
                && Math.abs(this.player.xPos - enemy.xPos) < window.innerWidth / 2) {
                if (this.player.xPos > enemy["xPos"]) {
                    enemy["xDirection"] = "right";
                } 
                else if (this.player.xPos < enemy["xPos"]) {
                    enemy["xDirection"] = "left";
                } else {
                    enemy["xDirection"] = "";
                }

                moveXPos(enemy, enemy.speed);
                applyEnemyYVelocity(enemy, enemyIndex);
            }
            enemyIndex++;
        });
    };

    const applyEnemyYVelocity = (enemy, enemyIndex) => {
        let newVelocity = enemy.velocity - tile;
        let nextYPos = enemy.yPos + newVelocity;

        if (checkPlatform(enemy, nextYPos, newVelocity)) {
            enemy.yPos = checkPlatform(enemy, nextYPos, newVelocity);
            enemy.velocity = Math.max(terminalVelocity, newVelocity);
        } else if (checkYTerrain(enemy, nextYPos, newVelocity)) {
            enemy.yPos = checkYTerrain(enemy, nextYPos, newVelocity);
            enemy.velocity = Math.max(terminalVelocity, newVelocity);
        } else {
            enemy.yPos = nextYPos;
            enemy.velocity = 0;
        }

        if (enemy.yPos + enemy.height / 2 < 0) {
            this.level.enemies.splice(enemyIndex, 1);
        } 
    }

    const moveCamera = () => {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        
        this.stageXPos = Math.max(this.player.xPos - screenWidth / 2, 0);
        this.stageYPos = Math.max(this.player.yPos - screenHeight / 2, 0);

        if (this.stageXPos + screenWidth > this.level.width) {
            this.stageXPos = this.level.width - screenWidth;
        }

        if (this.stageYPos + screenHeight > this.level.height) {
            this.stageYPos = Math.max(this.level.height - screenHeight, 0);

        }
    };

    const checkXTerrain = (entity, newXPos) => {
        for (let t of this.level.terrain) {
            let terrainYPos = t["yPos"];
            let terrainYSurface = t["yPos"] + terrainHeight;
            let entityYTopPos = entity.yPos + charHeight;
            if ( // TODO: player is at correct y value
                (entity.yPos >= terrainYPos && entity.yPos < terrainYSurface)
                || (entityYTopPos <= terrainYSurface && entityYTopPos > terrainYPos)
                || (entity.yPos >= terrainYPos && entityYTopPos <= terrainYSurface)
            ) {
                let terrainLeftXPos = t["xPos"];
                let terrainRightXPos = t["xPos"] + t["length"];
                if (entity.xDirection === 'right'
                    && (newXPos + charWidth) > terrainLeftXPos
                    && entity.xPos < terrainLeftXPos) { // moving right, we only want to check the left wall
                    return terrainLeftXPos - charWidth;
                } else if (entity.xDirection === 'left'
                    && newXPos < terrainRightXPos
                    && entity.xPos > terrainLeftXPos) { // moving left
                    return terrainRightXPos;
                }
            }
        }
        return false;
    }


    const addEnemy = (obj) => {
        let enemyTypes = gameData.types.enemy;
        let enemy = {
            name: obj[0],
            type: obj[1],
            xPos: obj[2],
            yPos: obj[3],
            velocity: 0,
            width: enemyWidth,
            height: enemyHeight,
            ... enemyTypes[obj[1]]
        };
        if (!(this.level.enemies.find(e => e.name == obj[0]))){
            this.level.enemies.push(enemy);
        }
    } 

    const addPlatform = (obj) => {
        let platformTypes = gameData.types.platform;
        let platform = {
            name: obj[0],
            type: obj[1],
            xPos: obj[2],
            yPos: obj[3],
            length: obj[4],
            ... platformTypes[obj[1]]
        };
        if (!(this.level.platforms.find(e => e.name == obj[0]))){
            this.level.platforms.push(platform);
        }
    } 

    const addDoor = (obj) => {
        let doorTypes = gameData.types.door;
        let door = {
            name: obj[0],
            type: obj[1],
            xPos: obj[2],
            yPos: obj[3],
            goesTo: obj[4],
            width: doorWidth,
            height: doorHeight, 
            ... doorTypes[obj[1]]
        };
        if (!(this.level.doors.find(e => e.name == obj[0]))){
            this.level.doors.push(door);
        }
    } 

    const addButton = (obj) => {
        let buttonTypes = gameData.types.button;
        let button = {
            name: obj[0],
            type: obj[1],
            xPos: obj[2],
            yPos: obj[3],
            width: buttonWidth,
            height: buttonHeight, 
            ... buttonTypes[obj[1]]
        };
        if (!(this.level.buttons.find(e => e.name == obj[0]))){
            this.level.buttons.push(button);
        }
    } 

    const addCoin = (obj) => {
        let coinTypes = gameData.types.coin;
        let coin = {
            name: obj[0],
            type: obj[1],
            xPos: obj[2],
            yPos: obj[3],
            width: coinWidth,
            height: coinHeight, 
            ... coinTypes[obj[1]]
        };
        if (!(this.level.coins.find(e => e.name == obj[0]))){
            this.level.coins.push(coin);
        }
    } 

    const delEnemy = (obj) => {
        this.level.enemies = this.level.enemies.filter( (e) => {
            return !(e.name == obj[0]);
       });
    } 

    const delPlatform = (obj) => {
        this.level.platforms = this.level.platforms.filter( (e) => {
            return !(e.name == obj[0]);
       });
    } 

    const delDoor = (obj) => {
        this.level.door = this.level.door.filter( (e) => {
            return !(e.name == obj[0]);
       });
    } 

    const delButton = (obj) => {
        this.level.buttons = this.level.buttons.filter( (e) => {
            return !(e.name == obj[0]);
       });
    } 

    const delCoin = (obj) => {
        this.level.coins = this.level.coins.filter( (e) => {
            return !(e.name == obj[0]);
       });
    } 

    const runChecks = () => {
        let index = 0;
        this.level.checks.forEach( e => {
            let operation = e.conditions.op.toLowerCase();
            let a = e.conditions.opA;
            let b = e.conditions.opB;
            let evalRes;
            if ((operation == "or" || operation == "and") && (a.op != undefined && b.op != undefined)) {
                evalRes = evaluate(operation, evaluate(a.op, a.opA, a.opB), evaluate(b.op, b.opA, b.opB));
                // console.log(operation+" "+evalRes);
            } else {
                evalRes = evaluate(operation, a, b);
            }
            if (evalRes) {
                e.actions.forEach( act => {
                    enforceResult(act.effect, act.category, act.payload);
                })
                this.level.checks.splice(index, 1);
            }
            index++;
        });
    }

   const enforceResult = (action, category, obj) => {
       switch (action) {
           case 'add': return enforceAdd(category, obj);
           case 'remove': return enforceRemove(category, obj);
       }
   }

   const enforceAdd = (category, obj) => {
        // console.log(this.level);
        switch (category) {
            case 'enemy': return addEnemy(obj);
            case 'door': return addDoor(obj);
            case 'button': return addButton(obj);
            case 'coin': return addCoin(obj);
            case 'platform': return addPlatform(obj);
        }
   }

   const enforceRemove = (category, obj) => {
        switch (category) {
            case 'enemy': return delEnemy(obj);
            case 'door': return delDoor(obj);
            case 'button': return delButton(obj);
            case 'coin': return delCoin(obj);
            case 'platform': return delPlatform(obj);
        }
   }

    const evaluate = (operand, operandA, operandB) => {
        operandA = EvaluateOperandVariable(operandA);
        operandB = EvaluateOperandVariable(operandB);
        // console.log(operand);
        // console.log(operandA);
        switch (operand) {
            case '<': return evalLesser(operandA, operandB);
            case '>': return evalGreater(operandA, operandB);
            case '>=': return evalGreaterEqual(operandA, operandB);
            case '<=': return evalLesserEqual(operandA, operandB);
            case '==': return evalEqual(operandA, operandB);
            case '!': return evalNot(operandA);
            case 'buttoncheck': return evalButtonCheck(operandA);
            case 'or': return evalOr(operandA, operandB);
            case 'and': return evalAnd(operandA, operandB);
        }
    }

    const EvaluateOperandVariable = (operand) => {
        switch (operand) {
            case 'MONEY': return this.cumCoins;
            case 'HEALTH': return this.player.health;
            default: return operand;
        }
    }

    //Byte functions for operands
    const evalGreater = (operandA, operandB) => {
        return operandA > operandB;
    }
    const evalLesser = (operandA, operandB) => {
        return operandA < operandB;
    }
    const evalEqual = (operandA, operandB) => {
        return operandA == operandB;
    }
    const evalGreaterEqual = (operandA, operandB) => {
        return operandA >= operandB;
    }
    const evalLesserEqual = (operandA, operandB) => {
        return operandA <= operandB;
    }
    const evalNot = (operandA) => {
        return !operandA;
    }
    const evalButtonCheck = (operandA) => {
        if (this.buttonMap.get(operandA) == "triggered") {
            return true;
        } else {
            return false;
        }
    }
    const evalOr = (operandA, operandB) => {
        return operandA || operandB;
    }
    const evalAnd = (operandA, operandB) => {
        return operandA && operandB;
    }

    // function that will be continuously ran
    this.repaint = () => {
        runChecks();

        movePlayer();
        moveCamera();
        moveEnemies();

        // check if char has hit a enemy
        checkEnemies();

        checkDoors();
        checkCoins();
        checkButtons();

        runChecks();

        // set state for use in the component
        setState({
            stageX: this.stageXPos,
            stageY: this.stageYPos,
            player: {
                ...initialState.player,
                xPos: this.player.xPos,
                yPos: this.player.yPos,
                xDirection: this.player.xDirection
            },
            level: this.level,
            buttonMap: this.buttonMap,
            cumCoins: this.cumCoins,
            status: this.game,
        });

        // stop the game if the game var has been set to false
        if (this.game !== 'start') {
            // reset and stop
            this.game = 'start';
            this.stageXPos = 0;
            this.stageYPos = 0;
            this.jump = false;
            this.player.xDirection = '';
            this.player.yPos = 0;
            return null;
        }

        // start repaint on next frame
        return requestAnimationFrame(this.repaint);
    };

    // trigger initial paint
    this.repaint();
    return () => ({
        jump: () => {
            // if jump is not active, trigger jump
            if (!this.jump && this.playerYVelocity === 0) {
                this.jump = true;
            }
        },
        move: (direction) => {
            this.player.xDirection = direction;
        },
    });
}

export default function Engine(props) {
    const [originalJSON, setOriginalJSON] = useState({});
    // game state
    const [gameState, setGameState] = useState({});

    // trigger game to start
    const [start, setStart] = useState(false);

    // if game is running
    const [started, setStarted] = useState(false);

    // instance of game engine
    const [engine, setEngine] = useState(null);

    // record any error from the JSON
    const [errorTxt, setErrorTxt] = useState("");

    const handleKeyPress = (e) => {
        // the ' ' char actually represents the space bar key.
        if (e.key === ' ') {
            // start the game when the user first presses the space bar
            if (!started && !start) {
                setOriginalJSON(props.gameData); // maybe not the right place for it, but let's put this here for now
                gameData = loadGame(setGameState, setStart, setErrorTxt, originalJSON);
            }

            // if the game has not been initialized return
            if (engine === null) return;

            // otherwise jump
            engine.jump();
        }
        else if (e.key === 'a' || e.key === 'd') {
            if (engine === null) return;
            engine.move('');
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === 'd') {
            if (engine === null) return;
            engine.move('right');
        }
        else if (e.key === 'a') {
            if (engine === null) return;
            engine.move('left');
        }
    };

    useEvent('keyup', handleKeyPress);
    useEvent('keydown', handleKeyDown);

    useEffect(() => {
        if (start) {
            setStarted(true);
            setStart(false);
            // create a new engine and save it to the state to use
            setEngine(
                new CreateEngine(
                    // set state
                    state => setGameState(state),
                    gameState
                ),
            );
        }

        if (gameState.status === 'fail' && started) {
            setStarted(false);
            alert('You lost! Try again?');
            gameData = loadGame(setGameState, setStart, setErrorTxt, props.gameData);
        }

        if (gameState.status === 'win' && started) {
            setStarted(false);
            alert('You won! Play again?');
            gameData = loadGame(setGameState, setStart, setErrorTxt, props.gameData);
        }
    });

    return ( 
        <>
            {!started && 
            <div className="startContainer">
                <div className='startScreen' >
                    <div className="introText preGameText">
                        Your game has been generated! Press SPACE to load game <br/><br/> Controls: <br/>WASD to move, SPACE to jump <br /> 
                    </div>
                    {errorTxt && <div className="errorText preGameText"> {errorTxt} </div>}
                </div>
            </div>
            }
            {started && <Game gameState={gameState} /> }
        </>
    );
}


Engine.propTypes = {
    gameData: PropTypes.object
}