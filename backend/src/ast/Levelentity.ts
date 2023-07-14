import { Entity } from "./Entity";
import { Statement } from "./Statement";

export class Levelentity{
    component:String;
    statements:Array<Statement>;

    constructor(component:String, statements:Array<Statement>){
        this.component = component;
        this.statements = statements;
    }
}