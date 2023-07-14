import { Value } from "./Value";

export class CondStatement{

    // Has varname and value to set
    property:string;
    action:string;
    value:Value;

    constructor(property:string, action:string, value:Value){
        this.property = property;
        this.action = action;
        this.value = value;
    }


}