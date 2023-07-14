import { Statement } from "./Statement";
import { Levelcond } from "./Levelcond";
import { Levelentity } from "./Levelentity";

export class Levelbody{
    // fields
    statements:Array<Statement>;
    entities:Array<Levelentity>;
    conditions:Array<Levelcond>;

    // constructor

    constructor(statements:Array<Statement>, entities:Array<Levelentity>, conditions:Array<Levelcond>){
        this.statements = statements;   
        this.entities = entities;
        this.conditions = conditions;
    }
    // functions
}