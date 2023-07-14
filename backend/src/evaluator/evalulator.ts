export class evaluator {

    private parsedData: any;
    private error: string = "";

    constructor(data: any){
        this.parsedData = data;
    }

    getError(): string{
        return this.error;
    }

    evaluate(): boolean {
        let candidate = this.parsedData;
        let validEnemyType = this.validateEnemyType(candidate.game.types.enemy);
        let validTerrainType = this.validateTerrainType(candidate.game.types.terrain);
        let validatePlatformType = this.validatePlatformType(candidate.game.types.platform);
        let validateDoorType = this.validateDoorType(candidate.game.types.door);
        let validateCoinType = this.validateCoinType(candidate.game.types.coin);
        let validateButtonType = this.validateButtonType(candidate.game.types.button);
        let validateLevels = this.validateLevels(candidate.game.levels);

        if (validEnemyType && validTerrainType 
            && validatePlatformType && validateDoorType
            && validateCoinType && validateButtonType && validateLevels) {
                return true;
            }
        return false;
    }

    validateEnemyType(enemiesTypes: any) {
        let checkPassed = true;
        for (const eType in enemiesTypes) {
            let enemy = enemiesTypes[eType];

            //Must have either colour or image
            if ((enemy.image === undefined) || (
                enemy.colour === undefined)) {
                    this.error +=`image or colour must be defined in enemy: ${eType} \n`; 
                    checkPassed = false;
            }

            //Critical values are behavior and speed;
            if ((enemy.behaviour === undefined) &&
             (enemy.speed === undefined)) {
                this.error += `enemy missing behavior or speed field in enemy: ${eType} \n`; 
                checkPassed = false;
             }
        }
        return checkPassed;
    }

    validateTerrainType(terrainTypes: any) {
        let checkPassed = true;
        for (const tType in terrainTypes) {
            let terrain = terrainTypes[tType];

            //Must have either colour or image
            if ((terrain.image === undefined) || (
                terrain.colour === undefined)) {
                    this.error +=`image or colour must be defined in terrain: ${tType} \n`; 
                    checkPassed = false;
            }
        }
        return checkPassed;
    }

    validatePlatformType(platformTypes: any) {
        let checkPassed = true;
        for (const pType in platformTypes) {
            let platform = platformTypes[pType];
            
            //Must have either colour or image
            if ((platform.image === undefined) || (
                platform.colour === undefined)) {
                    this.error +=`image or colour must be defined in platform: ${pType} \n`; 
                    checkPassed = false;
            }
        }
        return checkPassed;
    }

    validateDoorType(doorTypes: any) {
        let checkPassed = true;
        for (const dType in doorTypes) {
            let door = doorTypes[dType];

            // Must have image or key
            if (door.image === undefined
                || door.key === undefined) {
                    this.error+=`image or key must be defined in door: ${dType} \n`;
                    checkPassed = false;
                }
        }
        return checkPassed;
    }

    validateCoinType(coinTypes: any) {
        let checkPassed = true;
        for (const cType in coinTypes) {
            let coin = coinTypes[cType];

            // Must have image or value
            if (coin.image === undefined
                || coin.value === undefined) {
                    this.error+=`image or colour must be defined in coin: ${cType} \n`;
                    checkPassed = false;
                }
        }
        return checkPassed;
    }

    validateButtonType(buttonTypes: any) {
        let checkPassed = true;
        for (const bType in buttonTypes) {
            let button = buttonTypes[bType];

            // Must have image or value
            if (button.image === undefined) {
                this.error+=`image must be defined in button: ${bType} \n`;
                checkPassed = false;
            }
        }
        return checkPassed;

    }

    validateLevels(levels: any) {
        let checkPassed = true;
        for (const level of levels) {
            let validationResult = this.validateLevel(level);
            if (!validationResult) {
                checkPassed = false;
            }
        }
        return checkPassed;
    }

    validateLevel (level: any) {
        let checkPassed = true;
        if (level.name === undefined) {
            this.error+=`name must be defined in level: name \n`;
            checkPassed = false;
        }
        if (level.background === undefined) {
            this.error+=`background must be defined in level: background \n`;
            checkPassed = false;
        }
        if (isNaN(level.width) && isNaN(level.height)) {
            this.error+=`level dimensions must be integer in level: width or height\n`;
            checkPassed = false;
        }
        if (isNaN(level.playerStartX) && isNaN(level.playerStartY)) {
            this.error+=`level playerstarts  must be integer in level: playerStartX or playerStartY\n`; 
            checkPassed = false; 
        }
        if (!this.validateLevelDoors(level.doors)) checkPassed = false;
        if (!this.validateLevelPlatforms(level.platforms)) checkPassed = false;
        if (!this.validateLevelTerrain(level.terrain)) checkPassed = false;
        if (!this.validateLevelCoins(level.coins)) checkPassed = false;
        if (!this.validateLevelEnemies(level.enemies)) checkPassed = false;
        if (!this.validateLevelButtons(level.buttons)) checkPassed = false;
        if (!this.validateLevelChecks(level.checks)) checkPassed = false;
        return checkPassed;
    }

    validateLevelDoors(doors: any) {
        let checkPassed = true;
        for (const door of doors) {
            if (door.name === undefined) {
                checkPassed = false;
                this.error+=`level door missing a name declaration\n`;
            }
            if (door.type === undefined || this.parsedData.game.types.door[door.type] === undefined) {
                checkPassed = false;
                this.error+=`level door not connected to a defined type\n`;
            }
            if (door.goesTo === undefined) {
                checkPassed = false;
                this.error+=`level door missing a level destination\n`;
            }
            if (door.xPos === undefined || door.yPos === undefined) {
                checkPassed = false;
                this.error+=`level door missing coordinates\n`;
            }
        }
        return checkPassed;
    }

    validateLevelPlatforms(platforms: any) {
        let checkPassed = true;
        for (const platform of platforms) {
            if (platform.name === undefined) {
                checkPassed = false;
                this.error+=`level platform missing a name declaration\n`;
            }
            if (platform.type === undefined || this.parsedData.game.types.platform[platform.type] === undefined) {
                checkPassed = false;
                this.error+=`level platform not connected to a defined type\n`;
            }
            if (platform.length === undefined) {
                checkPassed = false;
                this.error+=`level platform missing a length\n`;
            }
            if (platform.xPos === undefined || platform.yPos === undefined) {
                checkPassed = false;
                this.error+=`level platform missing coordinates\n`;
            }
        }
        return checkPassed;

    }

    validateLevelTerrain(terrains: any) {
        let checkPassed = true;
        for (const terrain of terrains) {
            if (terrain.name === undefined) {
                checkPassed = false;
                this.error+=`level terrain missing a name declaration\n`;
            }
            if (terrain.type === undefined || this.parsedData.game.types.terrain[terrain.type] === undefined) {
                checkPassed = false;
                this.error+=`level terrain not connected to a defined type\n`;
            }
            if (terrain.length === undefined) {
                checkPassed = false;
                this.error+=`level terrain missing a length\n`;
            }
            if (terrain.xPos === undefined || terrain.yPos === undefined) {
                checkPassed = false;
                this.error+=`level  terrain missing coordinates\n`;
            }
        }
        return checkPassed;
    }

    validateLevelCoins(coins: any) {
        let checkPassed = true;
        for (const coin of coins) {
            if (coin.name === undefined) {
                checkPassed = false;
                this.error+=`level coin missing a name declaration\n`;
            }
            if (coin.type === undefined || this.parsedData.game.types.coin[coin.type] === undefined) {
                checkPassed = false;
                this.error+=`level coin not connected to a defined type\n`;
            }
            if (coin.xPos === undefined || coin.yPos === undefined) {
                checkPassed = false;
                this.error+=`level coin missing coordinates\n`;
            }
        }
        return checkPassed;
    }

    validateLevelEnemies(enemies: any) {
        let checkPassed = true;
        for (const enemy of enemies) {
            if (enemy.name === undefined) {
                checkPassed = false;
                this.error+=`level enemy missing a name declaration\n`;
            }
            if (enemy.type === undefined || this.parsedData.game.types.enemy[enemy.type] === undefined) {
                checkPassed = false;
                this.error+=`level enemy not connected to a defined type\n`;
            }
            if (enemy.xPos === undefined || enemy.yPos === undefined) {
                checkPassed = false;
                this.error+=`level enemy missing coordinates\n`;
            }
        }
        return checkPassed;

    }

    validateLevelButtons(buttons: any) {
        let checkPassed = true;
        for (const button of buttons) {
            if (button.name === undefined) {
                checkPassed = false;
                this.error+=`level button missing a name declaration\n`;
            }
            if (button.type === undefined || this.parsedData.game.types.button[button.type] === undefined) {
                checkPassed = false;
                this.error+=`level button not connected to a defined type\n`;
            }
            if (button.xPos === undefined || button.yPos === undefined) {
                checkPassed = false;
                this.error+=`level button missing coordinates\n`;
            }
        }
        return checkPassed;

    }

    validateLevelChecks(checks: any) {
        let checkPassed = true;
        for (checks of checks) {
            if (!this.validateCheckCond(checks.conditions) || !this.validateActions(checks.actions)) {
                checkPassed = false;
            }
        }
        return true;
    }

    validateCheckCond(check: any) {
        const operationWhitelist = ["OR", "AND", ">=", "<=", "buttonCheck", "!", "==", ">", "<"];
        let checkPassed = true;
        if (!operationWhitelist.includes(check.op)) {
            this.error+=`level conditions ${check.op} not a valid condition\n`;
            checkPassed = false;
        }
        if (check.op === "OR" || check.op === "AND") {
            let opA = this.validateCheckCond(check.opA);
            let opB = this.validateCheckCond(check.opB);
            if (!opA && !opB) checkPassed = false; 
        } else {
            if ([">=", "<=", ">", "<", "=="].includes(check.op)) {
                if (check.opA === undefined || check.opB.isNaN) {
                    this.error+=`level conditions ${check.op} not defined properly\n`;
                    checkPassed = false;  
                }
            }
            else if (["!", "buttonCheck"].includes(check.op)) {
                if (check.opA === undefined || check.opB != undefined) {
                    this.error+=`level conditions ${check.op} should not have a defined second condition\n`;
                    checkPassed = false; 
                }
            }
        }
        return checkPassed;
    }

    validateActions(actions: any) {
        let checkPassed = true;
        for (const action of actions) {
            if (action.effect === undefined) {
                this.error+=`level conditions action is undefined\n`;
                checkPassed = false;
            }
            if (!["door", "platform", "enemy", "button"].includes(action.category)) {
                this.error+=`level conditions action is not an actionable object\n`;
                checkPassed = false;
            }
            if (action.effect === "add") {
                if (!(action.payload.length >= 4)) {
                    this.error+=`not enough params for the level action object add\n`;
                    checkPassed = false;
                }
            }
            if (action.effect === "remove") {
                if (!(action.payload.length === 1)) {
                    this.error+=`too many params for the level action object remove\n`;
                    checkPassed = false;
                }
            }
        }
        return checkPassed;
    }
}
