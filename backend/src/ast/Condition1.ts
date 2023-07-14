import { Condition } from "./Condition";

export class Condition1 implements Condition{
    opA:String;
    op:undefined;
    opB:undefined;

    constructor(opA: String){
        this.opA = opA;
    }

    public isCondition1(): boolean{
        return true;
    }
}