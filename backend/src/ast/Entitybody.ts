import { Statement } from "./Statement";

export class Entitybody{

    statements:Array<Statement>;


    constructor(statements:Array<Statement>){
        this.statements = statements;
    }
}