import { Condition1 } from "./Condition1";
import { Condition3 } from "./Condition3";
import { CondStatement } from "./CondStatement";

export class Levelcond{
    // fields
    statements:Array<CondStatement>;
    conditions:Array<(Condition1|Condition3)>;
    op:String;
    // constructor

    constructor(statements:Array<CondStatement>, conditions:Array<(Condition1|Condition3)>, op:String){
        this.statements = statements;
        this.conditions = conditions;
        this.op = op;
    }

    // functions
}