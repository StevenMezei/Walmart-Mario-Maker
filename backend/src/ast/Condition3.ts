import{ Exp } from './Exp';
import { Condition } from "./Condition";

export class Condition3 implements Condition{
    opA:String;
    op:String;
    opB:Exp;

    constructor(opA:String, op:String, opB:Exp){
        this.opA = opA;
        this.op = op;
        this.opB = opB;
    }

    public isCondition1(): boolean{
        return false;
    }
}