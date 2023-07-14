import { Program } from "../ast/Program";
import { Entity } from "../ast/Entity";
import { Entitybody } from "../ast/Entitybody";
import { Statement } from "../ast/Statement";
import { Level } from "../ast/Level";
import { Levelbody } from "../ast/Levelbody";
import { Levelentity } from "../ast/Levelentity";
import { Exp } from "../ast/Exp";
import { Listobject } from "../ast/Listobject";
import { Player } from "../ast/Player";
import { Levelcond } from "../ast/Levelcond";
import { Condition1 } from "../ast/Condition1"
import { Condition3 } from "../ast/Condition3";
import { CondStatement } from "../ast/CondStatement";
import { Value } from "../ast/Value";

export class jsoner {
    private program: Program;

    constructor(program: Program) {
        this.program = program;
    }

    public jsoner(): any {
        // Stub
        let gameJson: any= {};
        gameJson["game"] = {};
        gameJson["game"] = this.entitiesJsoner(this.program.entities);
        gameJson["game"]["levels"] = this.levelsJsoner(this.program.levels);
        return gameJson;
        console.log(gameJson);
    }
    

    private entitiesJsoner(entities: Array<Entity>): Object {
        let entitiesJson: any = {};
        const imgcol = ["enemy", "terrain", "platform"]
        for (let entity of entities) {
            // Cast component and name to string. Component what we call the type
            let type:string  = entity.component as string;
            type = type.toLowerCase();
            let entityName: string = entity.name as string;
            let typeBody: any = {};
            let entityBody: Entitybody = entity.body;
            let statements: Array<Statement> = entityBody.statements;
            for (let s of statements) {
                typeBody[s.property.toLowerCase()] = s.value.value;
            }
            if((imgcol.includes(type)) && (typeBody["image"] !== "none")){
                typeBody["colour"] = "";
            }
            if(type === "door" && (typeBody["key"] === "none")) {
                typeBody["key"] = null;
            }
            // If type does not already exist in the JSON, create a key for it, else put the type definition in the existing type object
            if (entitiesJson[type] === undefined) {
                entitiesJson[type] = {};
                entitiesJson[type][entityName] = typeBody;
            } else {
                entitiesJson[type][entityName] = typeBody;
            }
        }
        let player: Player = this.program.player;
        let playerJson: any = {};
        for (let s of player.body.statements) {
            playerJson[s.property.toLowerCase()] = s.value.value; 
        }
        entitiesJson["player"] = playerJson;
        return {"types": entitiesJson};
    }


    private levelsJsoner(levels: Array<Level>) {
        let levelsJson: Array<any> = [];
        for (let level of levels) {
            let levelJson: any = {};
            levelJson["name"] = level.name;
            let levelBody: Levelbody = level.body;
            let levelStatements: Array<Statement> = levelBody.statements;
            for (let ls of levelStatements) {
                if (ls.property === "player") {
                    levelJson["playerStartX"] = ls.value.value.exps[0].value;
                    levelJson["playerStartY"] = ls.value.value.exps[1].value;
                } else {
                    levelJson[ls.property] = ls.value.value;
                }
                
            }
            levelJson["buttons"] = [];
            levelJson["coins"] = [];
            levelJson["doors"] = [];
            levelJson["enemies"] = [];
            levelJson["platforms"] = [];
            levelJson["terrain"] = [];
            let levelEntities: Array<Levelentity> = levelBody.entities;
            let instArr: Array<any> = [];
            for (let levelEnt of levelEntities) {
                let type: string = levelEnt.component as string;
                if (type.toLowerCase() === "terrain" || type.toLowerCase() === "platform") {
                    let arrs: Array<any> = [];
                    let levelEntStatements: Array<Statement> = levelEnt.statements;
                    for (let les of levelEntStatements) {
                        let listO: Array<Listobject> = les.value.value.listobjects; 
                        for (let lo of listO) {
                            let typeJson: any = {};
                            typeJson["name"] = lo.exps[0].value;
                            typeJson["type"] = les.property;
                            typeJson["xPos"] = lo.exps[1].value;
                            typeJson["yPos"] = lo.exps[2].value;
                            typeJson["length"] = lo.exps[3].value;
                            arrs.push(typeJson);
                        }
                        let typeC: string = type.toLowerCase().slice();
                        if (typeC !== "terrain") {
                            typeC = typeC + "s";
                        }
                        levelJson[typeC] = arrs;
                    }
                    
                } else if (type.toLowerCase() === "door") {
                    let arrs: Array<any> = [];
                    let levelEntStatements: Array<Statement> = levelEnt.statements;
                    for (let les of levelEntStatements) {
                        let listO: Array<Listobject> = les.value.value.listobjects; 
                        for (let lo of listO) {
                            let typeJson: any = {};
                            typeJson["name"] = lo.exps[0].value;
                            typeJson["type"] = les.property;
                            let gt = lo.exps[1].value.toString().concat(" ", lo.exps[2].value.toString());
                            typeJson["goesTo"] = gt;
                            typeJson["xPos"] = lo.exps[3].value;
                            typeJson["yPos"] = lo.exps[4].value;
                            arrs.push(typeJson);
                        }
                        let typeC: string = type.toLowerCase().slice();
                        typeC = typeC + "s";
                        levelJson[typeC] = arrs;
                    }
                } else {
                    let arrs: Array<any> = [];
                    let levelEntStatements: Array<Statement> = levelEnt.statements;
                    for (let les of levelEntStatements) {
                        let listO: Array<Listobject> = les.value.value.listobjects; 
                        for (let lo of listO) {
                            let typeJson: any = {};
                            typeJson["name"] = lo.exps[0].value;
                            typeJson["type"] = les.property;
                            typeJson["xPos"] = lo.exps[1].value;
                            typeJson["yPos"] = lo.exps[2].value;
                            arrs.push(typeJson);
                        }
                        let typeC: string = type.toLowerCase().slice();
                        if (typeC === "enemy") {
                            typeC = "enemies";
                        } else {
                            typeC = typeC + "s";
                        }
                        levelJson[typeC] = arrs;
                    }
                }
            }
            let levelConditions: Array<Levelcond> = levelBody.conditions;
            instArr = [];
            for (let levelCond of levelConditions) {
                let condJson: any = {};
                let conditions = this.conditionJsoner(levelCond.conditions);
                let condBody: any = {};
                if(levelCond.conditions.length > 1){
                    condBody["opA"] = conditions[0];
                    condBody["op"] = levelCond.op;
                    condBody["opB"] = conditions[1];
                }
                else{
                    condBody = conditions[0];
                }
                condJson["conditions"] = condBody;
                let levelcondStatements:Array<CondStatement> = levelCond.statements;
                let arrAction:any[] = new Array(); 
                for(let lcs of levelcondStatements){
                    let cstatement: any = {};
                    cstatement["effect"] = lcs.action.toLowerCase();
                    cstatement["category"] = lcs.property.toLowerCase();
                    let valArray:any[] = new Array();
                    for (let e of lcs.value.value.exps){
                        valArray.push(e.value);
                    }
                    if(cstatement["category"] === "door"){
                        let q = undefined;
                        for(let i = 0; i<valArray.length; i++){
                            if(valArray[i].toString().startsWith("level")){
                                let w = valArray[i] + " " + valArray[i+1];
                                valArray[i] = w;
                                q = i+1;
                            }
                        }
                        if(q != undefined){
                            valArray.splice(q);
                        }
                    }
                    cstatement["payload"] = valArray;
                    arrAction.push(cstatement);
                }
                condJson["actions"] = arrAction;
                instArr.push(condJson);
            }
            levelJson["checks"] = instArr;
            levelsJson.push(levelJson);
        }
        return levelsJson;
    }

    private conditionJsoner(conditions: Array<Condition1|Condition3>){
        let objArray:any[] = new Array();
        for(var lc of conditions){
            let cb1: any = {};
            if(lc.isCondition1()){
                cb1["opA"] = lc.opA;
                cb1["op"] = "buttonCheck";
                cb1["opB"] = null;
            }
            else{
                cb1["opA"] = lc.opA;
                cb1["op"] = lc.op;
                cb1["opB"] = lc.opB?.value;
            }
            objArray.push(cb1);
         }
         return objArray;
    }

    private findCategory(property: String): String{
        for(let i of this.program.entities){
            if(property === i.name){
                return i.component.toLowerCase();
            }
        }
        return "null";
        
    }
}